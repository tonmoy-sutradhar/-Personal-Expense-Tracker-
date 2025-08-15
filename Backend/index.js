require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
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
    // await client.connect();

    console.log("MongoDB Connected");

    const expenseCollection = client
      .db("Personal-Expense-Tracker")
      .collection("expenses");

    // Post Add Expenses data
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
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r8z7rex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // await client.connect();
//     console.log("Connected to MongoDB");

//     const expenseCollection = client
//       .db("Personal-Expense-Tracker")
//       .collection("expenses");

//     // Post Add Expenses data
//     app.post("/expenses", async (req, res) => {
//       try {
//         const newExpenses = req.body;
//         const result = await expenseCollection.insertOne(newExpenses);
//         res.send(result);
//       } catch (err) {
//         console.log("Error adding expenses", err);
//         res.status(500).send({ message: "Failed to add Expenses" });
//       }
//     });

//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } catch (error) {
//     console.log("Error connecting to MONGODB", error);
//   }
// }
// run().catch(console.dir);
