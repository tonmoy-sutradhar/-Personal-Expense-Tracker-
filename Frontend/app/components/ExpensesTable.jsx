// import React from "react";

// function ExpensesTable({ expense, index, setExpenses }) {
//   const { title, category, date, amount } = expense;

//   return (
//     <div>
//       {" "}
//       <tr>
//         <td>{index + 1}</td>
//         <td>{title}</td>
//         <td>$ {amount}</td>
//         <td>{category}</td>
//         <td>{date}</td>
//         {/* <td>
//           <div className="flex gap-4">
//             <button
//               title="View Details"
//               className="bg-blue-500 px-4 py-2 rounded text-white"
//             >
//               <Link to={`/viewDetails/${_id}`}>
//                 <button>
//                   <div className="flex justify-center items-center gap-1">
//                     <span className="text-xs">view details</span>
//                     <span>
//                       <FcViewDetails></FcViewDetails>
//                     </span>
//                   </div>
//                 </button>
//               </Link>
//             </button>
//           </div>
//         </td> */}
//       </tr>
//     </div>
//   );
// }

// export default ExpensesTable;

//========================================
import React from "react";

function ExpensesTable({ expense, index }) {
  const { title, category, date, amount } = expense;
  console.log(expense);
  console.log(amount);

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>$ {amount}</td>
      <td>
        <span className="px-4 py-1.5 border text-white rounded-3xl bg-lime-400">
          {category}
        </span>
      </td>
      <td>{date}</td>
    </tr>
  );
}

export default ExpensesTable;
