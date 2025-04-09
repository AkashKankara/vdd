'use client';

import React from 'react';
import { GrDocumentText } from "react-icons/gr";

export default function DetailedReport(){
    return(
        <>
        <div className="overflow-x-auto mt-4">
          <div className="flex items-start justify-between">
            {/* Total Points */}
            <div className="mb-4">
              <div className="bg-[#32A013] text-white px-4 py-2 inline-block rounded-md font-medium">
                Total Points: 22
              </div>
            </div>
            <div className="download">
              <button className='flex items-baseline'>
              <GrDocumentText /><span className='text-[#026FE9] pl-1'>Download</span>
              </button>
            </div>
          </div>
                  
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#E2E2E2]">
                <th className="border border-white px-4 py-2">Risk Area</th>
                <th className="border border-white px-4 py-2">Search Type</th>
                <th className="border border-white px-4 py-2">Search Engine / Database</th>
                <th className="border border-white px-4 py-2">Search Site or Location</th>
                <th className="border border-white px-4 py-2">Findings & Data Searched</th>
                <th className="border border-white px-4 py-2">Score</th>
                <th className="border border-white px-4 py-2">Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2" rowSpan={5}>Background/ Shareholders</td>
                <td className="border border-white px-4 py-2" rowSpan={3}>General Information</td>
                <td className="border border-white px-4 py-2">Source Google</td>
                <td className="border border-white px-4 py-2">www.google.com</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">13.7</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2">Third party’s official website</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">16.5</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2">Google Maps</td>
                <td className="border border-white px-4 py-2">www.google.com/maps</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">12</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2" rowSpan={2}>Company Information</td>
                <td className="border border-white px-4 py-2">Regulatory database</td>
                <td className="border border-white px-4 py-2">Regulatory database</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">17</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2">Director Search</td>
                <td className="border border-white px-4 py-2">Director Search</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">17</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
              <tr className="bg-[#0B6DFF1A]">
                <td className="border border-white px-4 py-2" rowSpan={2}>Adverse Press/Media</td>
                <td className="border border-white px-4 py-2" rowSpan={2}>News</td>
                <td className="border border-white px-4 py-2">News Center</td>
                <td className="border border-white px-4 py-2">https://economictimes.indiatimes.com/ <br /> https://www.hindustantimes.com/</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">13.7</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
              <tr className="bg-[#0B6DFF1A]">
                <td className="border border-white px-4 py-2">Regulatory database</td>
                <td className="border border-white px-4 py-2">Regulatory database</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">17</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
    )
}