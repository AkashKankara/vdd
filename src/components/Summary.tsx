'use client';

import React from 'react';

export default function Summary() {

    const categories = [
        {
          name: "Business Impact (If product or service is discontinued)",
          weight: 30,
          score: 8,
          weightedScore: 2.4
        },
        {
          name: "Vendor interaction with TKM Employees or Customers[1]",
          weight: 20,
          score: 7,
          weightedScore: 1.4
        },
        {
          name: "Accumulated annual transaction amount",
          weight: 15,
          score: 9,
          weightedScore: 1.35
        },
        {
          name: "Contract Term",
          weight: 15,
          score: 6,
          weightedScore: 0.9
        },
        {
          name: "Potential for Significant Cost or Loss",
          weight: 10,
          score: 7,
          weightedScore: 0.7
        },
        {
          name: "Access to TKM's Sensitive Information (product",
          weight: 10,
          score: 8,
          weightedScore: 0.8
        }
      ];


    return(
        <>
            {/* Total Points */}
            <div className="my-4">
            <div className="bg-[#32A013] text-white px-4 py-2 inline-block rounded-md font-medium">
            Total Points: 22
            </div>
            </div>
            {/* Ranking Title */}
            <h2 className="text-lg font-medium">Ranking</h2>

            {/* Table */}
            <div className="overflow-x-auto mt-2">
                <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-[#E2E2E2]">
                    <th className="border-2 border-[#E2E2E2] border-r-white px-4 py-2 text-center font-medium">Category</th>
                    <th className="border-2 border-[#E2E2E2] border-r-white px-4 py-2 text-center font-medium">Weight (%)</th>
                    <th className="border-2 border-[#E2E2E2] border-r-white px-4 py-2 text-center font-medium">Score</th>
                    <th className="border-2 border-[#E2E2E2] px-4 py-2 text-center font-medium">Weighted Score</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                        <td className="border border-[#D8D8D8] px-4 py-2 font-medium">{category.name}</td>
                        <td className="border border-[#D8D8D8] px-4 py-2 text-center font-medium">{category.weight}</td>
                        <td className="border border-[#D8D8D8] px-4 py-2 text-center font-medium">{category.score}</td>
                        <td className="border border-[#D8D8D8] px-4 py-2 text-center font-medium">{category.weightedScore}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </>
    )
}