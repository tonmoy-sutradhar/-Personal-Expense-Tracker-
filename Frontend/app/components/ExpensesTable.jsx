import React from "react";

function ExpensesTable({ expense, index }) {
  const { title, category, date, amount } = expense;

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
