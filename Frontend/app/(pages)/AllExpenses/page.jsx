// "use client";
// import ExpensesTable from "@/app/components/ExpensesTable";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function AllExpenses() {
//   const [expenses, setExpenses] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://backend-pi-lime-94.vercel.app/expenses");
//         setExpenses(response.data);
//       } catch (err) {
//         console.log(err, "all data fetch issue");
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-center border-b-2 w-[400px] mx-auto text-blue-500 ">
//         All Expenses Table
//       </h1>

//       <div className="w-full mx-auto bg-blue-100 px-10 text-center mb-9 mt-1">
//         <div className="overflow-x-auto">
//           <table className="table">
//             {/* head */}
//             <thead>
//               <tr>
//                 <th>serial</th>
//                 <th>Title</th>
//                 <th>Amount</th>
//                 <th>Category</th>
//                 <th>Date</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {expenses.length === 0 ? (
//                 <h1
//                   colSpan={6}
//                   className="text-3xl font-bold text-red-500 text-center py-4"
//                 >
//                   No Data Found
//                 </h1>
//               ) : (
//                 expenses.map((expense, index) => (
//                   <ExpensesTable
//                     key={expense._id}
//                     equipment={expense}
//                     index={index}
//                     equipments={expenses}
//                     setEquipments={setExpenses}
//                   ></ExpensesTable>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllExpenses;

//=========================
"use client";
import ExpensesTable from "@/app/components/ExpensesTable";
import axios from "axios";
import React, { useEffect, useState } from "react";

function AllExpenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-pi-lime-94.vercel.app/expenses"
        );
        setExpenses(response.data);
        // console.log(response.data);
      } catch (err) {
        console.log(err, "all data fetch issue");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center border-b-2 w-[400px] mx-auto text-blue-500">
        All Expenses Table
      </h1>

      <div className="w-full mx-auto bg-blue-100 px-10 text-center mb-9 mt-1 text-black">
        <div className="overflow-x-auto">
          <table className="table text-black">
            <thead className="text-black">
              <tr>
                <th>Serial</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-3xl font-bold text-red-500 text-center py-4"
                  >
                    No Data Found
                  </td>
                </tr>
              ) : (
                expenses.map((expense, index) => (
                  <ExpensesTable
                    key={expense._id}
                    expense={expense}
                    index={index}
                    setExpenses={setExpenses}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllExpenses;
