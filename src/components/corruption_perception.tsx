'use client';

import React, { useState } from 'react';

export default function CorruptionPerception() {

    const [selections, setSelections] = useState({
        govt_connection: '',
        background_review: '',
        industry_experience: ''
    });

    const handleSelectionChange = (event) => {
        setSelections({ ...selections, [event.target.name]: event.target.value });
    };


    return (
        <>
        <div className="overflow-x-auto mt-4">
          {/* Total Points */}
          <div className="mb-4">
            <div className="bg-[#32A013] text-white px-4 py-2 inline-block rounded-md font-medium">
              Total Points: 22
            </div>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#E2E2E2]">
                <th className="border-2 border-white px-4 py-2 text-left">Factors</th>
                <th className="border-2 border-white px-4 py-2 text-center">Green (1 point each)</th>
                <th className="border-2 border-white px-4 py-2 text-center">Yellow (3 points each)</th>
                <th className="border-2 border-white px-4 py-2 text-center">Red (5 points each)</th>
                <th className="border-2 border-white px-4 py-2 text-center">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="border-2 border-white px-4 py-2">Connection with Government Officials or Entities</td>
                <td className="border-2 border-white px-4 py-2 text-center">
                  <label><input type="radio" name="govt_connection" value="green" onChange={handleSelectionChange} /> No Interactions</label>
                </td>
                <td className="border-2 border-white px-4 py-2 text-center">
                  <label><input type="radio" name="govt_connection" value="yellow" onChange={handleSelectionChange} /> Limited Interactions</label>
                </td>
                <td className="border-2 border-white px-4 py-2 text-center">
                  <label><input type="radio" name="govt_connection" value="red" onChange={handleSelectionChange} /> Frequent Interactions</label>
                </td>
                <td className="border-2 border-white px-4 py-2 text-center">3</td>
              </tr>
              <tr className='bg-blue-100'>
                <td className="border-2 border-white px-4 py-2" rowSpan={2}>Background Review</td>
                <td className="border-2 border-white px-4 py-2 text-center">
                  <label><input type="radio" name="background_review" value="green" onChange={handleSelectionChange} /> No Prior Allegation</label>
                </td>
                <td className="border-2 border-white px-4 py-2 text-center">
                  <label><input type="radio" name="background_review" value="yellow" onChange={handleSelectionChange} /> Prior Allegation (No Findings)</label>
                </td>
                <td className="border-2 border-white px-4 py-2 text-center">
                  <label><input type="radio" name="background_review" value="red" onChange={handleSelectionChange} /> Current Allegation</label>
                </td>
                <td className="border-2 border-white px-4 py-2 text-center">5</td>
              </tr>
              <tr className="bg-blue-100">
                <td className="border-2 border-white px-4 py-2 text-center">
                  <label><input type="radio" name="industry_experience" value="green" onChange={handleSelectionChange} /> 3+ Years</label>
                </td>
                <td className="border-2 border-white px-4 py-2 text-center">
                  <label><input type="radio" name="industry_experience" value="yellow" onChange={handleSelectionChange} /> 1-3 Years</label>
                </td>
                <td className="border-2 border-white px-4 py-2 text-center">
                  <label><input type="radio" name="industry_experience" value="red" onChange={handleSelectionChange} /> No Experience</label>
                </td>
                <td className="border-2 border-white px-4 py-2 text-center">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
    )
}