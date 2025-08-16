require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 7000;

// middleware
app.use(cors());
app.use(express.json());

// MongoDB -----------------------------------------------------------------

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cjt8m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    console.log("MongoDB Connected");

    const expenseCollection = client
      .db("Personal-Expense-Tracker")
      .collection("expenses");

    // 2. Get all data from Database
    app.get("/expenses", async (req, res) => {
      try {
        const result = await expenseCollection.find().toArray();
        res.send(result);
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Failed to fetch expenses" });
      }
    });

    // Get My expenses
    app.get("/my-expenses", async (req, res) => {
      try {
        const email = req.query.email;
        if (!email) {
          return res.status(400).send({ message: "User email is required" });
        }
        const query = { userEmail: email };
        const result = await expenseCollection.find(query).toArray();
        res.send(result);
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Failed to fetch user's expenses" });
      }
    });

    // Get data by specific ID
    app.get("/expenses/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await expenseCollection.findOne(query);
        res.send(result);
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Failed to fetch expenses by ID" });
      }
    });

    // Update expenses data
    app.put("/expenses/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const update = req.body;
        const expensesUpdate = {
          $set: {
            title: update.title,
            amount: update.amount,
            category: update.category,
            date: update.date,
          },
        };
        const result = await expenseCollection.updateOne(
          filter,
          expensesUpdate,
          options
        );
        res.send(result);
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Failed to update expenses" });
      }
    });

    // Delete expenses from database by specific id
    app.delete("/expenses/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await expenseCollection.deleteOne(query);
        res.send(result);
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Failed to delete expenses" });
      }
    });

    // 1. Post Add Expenses data
    app.post("/expenses", async (req, res) => {
      try {
        const newExpenses = req.body;
        const result = await expenseCollection.insertOne(newExpenses);
        res.send(result);
        console.log(result);
      } catch (err) {
        console.log("Error adding expenses", err);
        res.status(500).send({ message: "Failed to add Expenses" });
      }
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log("Error in DB", error);
  }
}
run().catch(console.dir);

// MongoDB -----------------------------------------------------------------

app.get("/", (req, res) => {
  res.send(" Personal Expense Tracker Server is Running");
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});

// Deployment Link: http://localhost:7000, https://backend-pi-lime-94.vercel.app (Server)
