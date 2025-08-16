import React from "react";

import { FaWallet, FaChartLine, FaEdit } from "react-icons/fa";

function Feature() {
  return (
    <div>
      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transform transition">
            <FaWallet className="text-purple-700 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Add Expenses
            </h3>
            <p className="text-gray-600 text-center">
              Quickly add new expenses with title, amount, category, and date
              for precise tracking.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transform transition">
            <FaChartLine className="text-purple-700 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              View Expenses
            </h3>
            <p className="text-gray-600 text-center">
              Analyze your expenses, view charts, and understand your spending
              habits over time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transform transition">
            <FaEdit className="text-purple-700 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Edit & Manage
            </h3>
            <p className="text-gray-600 text-center">
              Update or delete expenses anytime to keep your records accurate
              and organized.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
