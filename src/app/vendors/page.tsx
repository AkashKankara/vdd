"use client";
import { IoSearch } from "react-icons/io5";
import { TbSettingsAutomation } from "react-icons/tb";
import { ImBlocked } from "react-icons/im";
import { MdFilterAlt } from "react-icons/md";
import { useState } from "react";


export default function VendorsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="flex h-screen pt-14 pl-14">
     
      <div className="flex-1 flex flex-col">
     
        <div className="p-3 flex-1">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold">Vendors</h1>
            <button onClick={() => setShowModal(true)} className="bg-gray-100 text-blue-500 border 
            border-gray-300 hover:bg-blue-100 hover:text-blue-700 hover:border-blue-400 
             px-2 py-1.5 text-sm transition-all rounded-md"> + New Vendor</button>
          </div>
         {/* <FilterTabs /> */}
          <VendorTable />
        </div>
      </div>
      {showModal && <NewVendorModal onClose={() => setShowModal(false)} />}
    </main>
  );
}


// function FilterTabs() {
//   return (
//     <div className="flex justify-between items-center my-4">
//       <div className="flex space-x-2">
//         <button className="px-4 py-2 bg-gray-200 rounded">Total Vendors (0)</button>
//         <button className="px-4 py-2 bg-blue-200 rounded">No Risk (0)</button>
//         <button className="px-4 py-2 bg-yellow-200 rounded">Medium Risk (0)</button>
//         <button className="px-4 py-2 bg-red-200 rounded">High Risk (0)</button>
//       </div>
//       {/* Search and Filter Icons */}
//       <div className="flex space-x-4">
//         <button className="opacity-50 transition duration-200 hover:opacity-100 hover:scale-110 active:scale-125">
//           <IoSearch className="text-2xl" />
//         </button>
//         <button className="opacity-50 transition duration-200 hover:opacity-100 hover:scale-110 active:scale-125">
//           <MdFilterAlt className="text-2xl" />
//         </button>
//       </div>
//     </div>
//   );
// }


function VendorTable() {
  const basevendors = [
    {
      name: "Algonomy Software Pvt Ltd",
      id: "1234AAA",
      type: "Non Govt",
      initiatedBy: "Sofy San",
      department: "Sales",
      lastDDDate: "10 Jan 2023",
      ddDueDate: "10 Jan 2025",
      ddScore: 22,
      ddRank: "Low Risk",
      status: "Approved",
      schedule: "✔️",
      comments: "Sample comments go here..."
    },
    {
      name: "Gem Software Pvt Ltd",
      id: "5678BBB",
      type: "Non Govt",
      initiatedBy: "Farook San",
      department: "Finance",
      lastDDDate: "10 Aug 2024",
      ddDueDate: "10 Jan 2025",
      ddScore: 43,
      ddRank: "Medium Risk",
      status: "Approved",
      schedule: "✔️",
      comments: "Sample comments go here..."
    },
    {
      name: "DEF Software Pvt Ltd",
      id: "6742CCC",
      type: "Non Govt",
      initiatedBy: "Maneesh Kumar",
      department: "Marketing",
      lastDDDate: "20 Jul 2024",
      ddDueDate: "5 Jul 2025",
      ddScore: 63,
      ddRank: "High Risk",
      status: "In Progress",
      schedule: "🔄",
      comments: "Sample comments go here..."
    },
    {
      name: "ABC Software Pvt Ltd",
      id: "4353D0B",
      type: "Non Govt",
      initiatedBy: "Sofy San",
      department: "QC",
      lastDDDate: "10 Mar 2023",
      ddDueDate: "10 Jan 2025",
      ddScore: 55,
      ddRank: "High Risk",
      status: "Rejected",
      schedule: "❌",
      comments: "Sample comments go here..."
    },
    {
      name: "NAS Software Pvt Ltd",
      id: "1234EEE",
      type: "Govt",
      initiatedBy: "Farook San",
      department: "Admin",
      lastDDDate: "10 Jan 2024",
      ddDueDate: "10 Jan 2025",
      ddScore: 58,
      ddRank: "High Risk",
      status: "Blocked",
      schedule: "❌",
      comments: "Sample comments go here..."
    },
    {
      name: "RAM Software Pvt Ltd",
      id: "1234FFF",
      type: "Govt",
      initiatedBy: "Maneesh San",
      department: "Production",
      lastDDDate: "10 Jan 2023",
      ddDueDate: "10 Jan 2025",
      ddScore: 66,
      ddRank: "High Risk",
      status: "Blocked",
      schedule: "❌",
      comments: "Sample comments go here..."
    },
    {
      name: "Geek Software Pvt Ltd",
      id: "1234GGG",
      type: "Non Govt",
      initiatedBy: "Sofy San",
      department: "Marketing",
      lastDDDate: "10 Mar 2023",
      ddDueDate: "10 Mar 2024",
      ddScore: 15,
      ddRank: "Low Risk",
      status: "Approved",
      schedule: "✔️",
      comments: "Sample comments go here..."
    },
    {
      name: "MAS Software Pvt Ltd",
      id: "1234HHH",
      type: "Non Govt",
      initiatedBy: "Farook San",
      department: "QC",
      lastDDDate: "10 Mar 2023",
      ddDueDate: "10 Mar 2024",
      ddScore: 43,
      ddRank: "Medium Risk",
      status: "In Progress",
      schedule: "🔄",
      comments: "Sample comments go here..."
    },
    {
      name: "RMT Software Pvt Ltd",
      id: "1234III",
      type: "Govt",
      initiatedBy: "Maneesh San",
      department: "Sales",
      lastDDDate: "10 Feb 2022",
      ddDueDate: "10 Feb 2025",
      ddScore: 15,
      ddRank: "Low Risk",
      status: "Approved",
      schedule: "✔️",
      comments: "Sample comments go here..."
    },
    {
      name: "NAT Software Pvt Ltd",
      id: "1234JJJ",
      type: "Non Govt",
      initiatedBy: "Sofy San",
      department: "Finance",
      lastDDDate: "10 Jan 2023",
      ddDueDate: "10 Jan 2025",
      ddScore: 74,
      ddRank: "High Risk",
      status: "Rejected",
      schedule: "❌",
      comments: "Sample comments go here..."
    },
    {
      name: "Fine Software Pvt Ltd",
      id: "1234KKK",
      type: "Non Govt",
      initiatedBy: "Sofy San",
      department: "Marketing",
      lastDDDate: "Not Initiated",
      ddDueDate: "Not Initiated",
      ddScore: "-",
      ddRank: "-",
      status: "Not Initiated",
      schedule: "⚪",
      comments: "Sample comments go here..."
    }
  ];

  const vendors = [...basevendors];
  // const vendors = [...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors,  ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors,...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors, ...basevendors];

  const itemsPerPage = 100; // Limit the view to 100 vendors per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(vendors.length / itemsPerPage);

    // Slice vendors for the current page
    const displayedVendors = vendors.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
);
 // head
const [filteredVendors, setFilteredVendors] = useState(vendors);
const [selectedRisk, setSelectedRisk] = useState("All");

const totalVendors = vendors.length;
const noRiskCount = vendors.filter((v) => v.ddRank === "Low Risk").length;
const mediumRiskCount = vendors.filter((v) => v.ddRank === "Medium Risk").length;
const highRiskCount = vendors.filter((v) => v.ddRank === "High Risk").length;

const handleFilter = (risk: string) => {
  setSelectedRisk(risk);

  if (risk === "All") {
    setFilteredVendors(vendors);
  } else {
    setFilteredVendors(
      vendors.filter((v) => v.ddRank.trim().toLowerCase() === risk.toLowerCase())
    );
  }
};

return (
  <div>
    {/* Risk Filter Tabs with Search & Filter Icons */}
    <div className="relative bg-white">
      {/* Tabs & Icons Container */}
      <div className="flex justify-between items-center px-1 py-0.5 bg-white z-10">
        {/* Tabs Container */}
        <div className="flex space-x-2">
          {[
            { label: `Total Vendors (${totalVendors})`, risk: "All" },
            { label: `No Risk (${noRiskCount})`, risk: "Low Risk" },
            { label: `Medium Risk (${mediumRiskCount})`, risk: "Medium Risk" },
            { label: `High Risk (${highRiskCount})`, risk: "High Risk" },
          ].map(({ label, risk }) => (
            <button
              key={risk}
              onClick={() => handleFilter(risk)}
              className={`px-2 py-1.5 text-sm transition-all rounded-t-md relative 
                ${
                  selectedRisk === risk
                    ? "bg-white text-black font-medium border border-gray-300 border-b-0"
                    : "bg-gray-100 text-blue-500 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 hover:border-blue-400"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Search and Filter Icons */}
        <div className="flex space-x-2">
          <button className="opacity-50 transition duration-200 hover:opacity-100 hover:scale-105 active:scale-110">
            <IoSearch className="text-lg" />
          </button>
          <button className="opacity-50 transition duration-200 hover:opacity-100 hover:scale-105 active:scale-110">
            <MdFilterAlt className="text-lg" />
          </button>
        </div>
      </div>

      {/* Bottom Border (Straight Line) */}
      <div className="absolute top-full left-0 w-full border-t border-gray-300"></div>
    </div>

    {/* Space Between Tabs and Table */}
    <div className="mt-1"></div>

    {/* Table Container */}
    <div className="overflow-y-auto max-h-[60vh] border-t">
  <table className="w-full text-xs border-collapse">
    <thead className="bg-gray-200 text-center sticky top-0">
      <tr>
        <th className="p-3 border-r-[1.5px] border-white">Vendor Name</th>
        <th className="p-3 border-r-[1.5px] border-white">Vendor ID</th>
        <th className="p-3 border-r-[1.5px] border-white">Vendor Type</th>
        <th className="p-3 border-r-[1.5px] border-white">Initiated By</th>
        <th className="p-3 border-r-[1.5px] border-white">Department</th>
        <th className="p-3 border-r-[1.5px] border-white">Last DD Date</th>
        <th className="p-3 border-r-[1.5px] border-white">DD Due Date</th>
        <th className="p-3 border-r-[1.5px] border-white">DD Score</th>
        <th className="p-3 border-r-[1.5px] border-white">DD Rank</th>
        <th className="p-3 border-r-[1.5px] border-white">Status</th>
        <th className="p-3 border-r-[1.5px] border-white">Schedule</th>
        <th className="p-3">Comments</th> 
      </tr>
    </thead>
    <tbody>
      {filteredVendors.map((vendor, index) => (
        <tr key={index}  className={`border-b hover:bg-blue-100 
          ${vendor.status === "Blocked" ? "bg-gray-200" : index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
          <td className={`p-1 border-r-[1.5px] border-gray-200 ${vendor.status === "Blocked" ? "text-gray-600" : "text-blue-500"}`}>
            {vendor.name}
          </td>
          <td className="p-1 border-r-[1.5px] border-gray-300">{vendor.id}</td>
          <td className="p-1 border-r-[1.5px] border-gray-300">{vendor.type}</td>
          <td className="p-1 border-r-[1.5px] border-gray-300">{vendor.initiatedBy}</td>
          <td className="p-1 border-r-[1.5px] border-gray-300">{vendor.department}</td>
          <td className="p-1 text-center border-r-[1.5px] border-gray-300">{vendor.lastDDDate}</td>
          <td className="p-1 text-center border-r-[1.5px] border-gray-300">{vendor.ddDueDate}</td>
          <td className="p-1 text-center border-r-[1.5px] border-gray-300">{vendor.ddScore}</td>
          <td className="p-1 text-left border-r-[1.5px] border-gray-300">
            <span className={`w-full inline-block px-2 py-1 text-white rounded-md text-left
                            ${vendor.ddRank === "Low Risk" ? "bg-green-500" :
                              vendor.ddRank === "Medium Risk" ? "bg-yellow-500" :
                              vendor.ddRank === "High Risk" ? "bg-red-600" :
                              "" }`}>
              {vendor.ddRank}
            </span>
          </td>
          <td className="p-1 border-r-[1.5px] border-gray-300">{vendor.status}</td>
          <td className="p-1 border-r-[1.5px] border-gray-300">
            <div className="text-center flex justify-center items-center">
              {vendor.ddRank === "Low Risk" && vendor.status === "Approved" ? (
                <TbSettingsAutomation className="text-black" />
              ) : vendor.status === "Blocked" ? (
                <ImBlocked className="text-red-500" />
              ) : (
                "" // Blank for other cases
              )}
              </div>
          </td> 
          <td className="p-1">{vendor.comments}</td> 
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Pagination Bar */}
<div className="flex justify-between items-center p-2 border-t bg-white">
  {/* Left: Showing X-Y of N items */}
  <span className="text-gray-600 text-xs">
    {`${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(
      currentPage * itemsPerPage,
      vendors.length
    )} of ${vendors.length} items`}
  </span>

  {/* Right: Pagination Controls */}
  <div className="flex items-center space-x-2">
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="px-2 py-1 text-sm border border-blue-500 text-blue-500 rounded-md"
    >
      &lt;
    </button>

    {[...Array(totalPages)].map((_, i) =>
      i + 1 === currentPage || i + 1 === 1 || i + 1 === totalPages ? (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-2 py-1 border-none rounded ${
            currentPage === i + 1 ? "bg-blue-100 text-blue-500" : ""
          }`}
        >
          {i + 1}
        </button>
      ) : i + 1 === currentPage - 1 || i + 1 === currentPage + 1 ? (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className="px-2 py-1 border rounded"
        >
          {i + 1}
        </button>
      ) : i + 1 === currentPage - 2 || i + 1 === currentPage + 2 ? (
        <span key={i} className="px-2 py-1 text-gray-400">...</span>
      ) : null
    )}

    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-2 py-1 text-sm border border-blue-500 text-blue-500 rounded-md"
    >
      &gt;
    </button>
  </div>
</div>
</div>
);
}

function NewVendorModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">New Vendor</h2>
          <button onClick={onClose} className="text-red-500 text-xl">&times;</button>
        </div>
        <form className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Vendor Name" className="border p-2 rounded" />
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="vendorType" value="Non Govt" /> <span>Non Govt</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="vendorType" value="Govt" /> <span>Govt</span>
            </label>
          </div>
          <input type="text" placeholder="Business Registration Number" className="border p-2 rounded" />
          <input type="text" placeholder="Tax Identification Number (TIN/CIN)" className="border p-2 rounded" />
          <input type="text" placeholder="Industry/Category" className="border p-2 rounded" />
          <input type="text" placeholder="Primary Contact Name" className="border p-2 rounded" />
          <input type="email" placeholder="Email Address" className="border p-2 rounded" />
          <input type="text" placeholder="Phone Number" className="border p-2 rounded" />
          <input type="text" placeholder="Fax" className="border p-2 rounded" />
          <input type="text" placeholder="Registered Address" className="border p-2 rounded" />
          <input type="text" placeholder="Billing Address" className="border p-2 rounded" />
          <input type="text" placeholder="Shipping Address" className="border p-2 rounded" />
        </form>
        <div className="flex justify-end space-x-4 mt-4">
          <button onClick={onClose} className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
}
