"use client";
import { IoSearch } from "react-icons/io5";
import { TbSettingsAutomation } from "react-icons/tb";
import { ImBlocked } from "react-icons/im";
import { MdFilterAlt } from "react-icons/md";
import { useState, useEffect } from "react";

// import FilterPanel from "./FilterPanel";


export default function VendorsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="flex h-screen pt-12 pl-12">
     
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

//FilterTab
const [showFilter, setShowFilter] = useState(false);

const applyFilters = () => {
  console.log("Apply button clicked!"); // ✅ Check if this appears
  const filtered = vendors.filter(
    (vendor) =>
      ["Govt", "Non Govt"].includes(vendor.type) && // ✅ Check vendor type
      ["Low Risk", "Medium Risk"].includes(vendor.ddRank) // ✅ Check risk
  );

  setFilteredVendors(filtered);
  setShowFilter(false);
};

//PaginationNoChange
const itemsPerPage = 10 // Limit the view to 100 vendors per page
const [currentPage, setCurrentPage] = useState(1);
const totalPages = Math.ceil(filteredVendors.length / itemsPerPage);
useEffect(() => {
  setCurrentPage(1); // Reset to page 1 whenever filters change
}, [filteredVendors]);


  // Slice vendors for the current page
  const displayedVendors = filteredVendors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
    
);

//HeaderToggle

const [filtersApplied, setFiltersApplied] = useState(false); // Tracks if filters are applied
const [selectedFilters, setSelectedFilters] = useState([
  { category: "Vendor Type", value: "Govt" },
  { category: "Vendor Type", value: "Non Govt" },
  { category: "Over Due", value: "<30 days" },
  { category: "Over Due", value: ">31 to <90 days" },
  { category: "Risk Rank", value: "Low" },
  { category: "Risk Rank", value: "Medium" },
  { category: "Department", value: "All" },
]);


const handleApplyFilters = () => {
  console.log("Apply button clicked!"); 
  setFiltersApplied(true);  // Show "Filters applied"
  setShowFilter(false); // Close filter panel
};

const cancelFilters = () => {
  console.log("Cancel button clicked!");
  setFiltersApplied(false); // Reset to show four titles
  setShowFilter(false); // Close filter panel
};

return (
  <div>
    {/* Risk Filter Tabs with Search & Filter Icons */}
    <div className="relative bg-white">
      {/* Tabs & Icons Container */}
      <div className="flex justify-between items-center px-1 py-0.5 bg-white">
        {/* Tabs Container */}
        {!showFilter ? (
          filtersApplied ? (
            // Show selected filters instead of "Filters applied"
            <div className="flex flex-wrap items-center text-sm">
              <span className="text-gray-500 mr-2">Filters:</span>
               {/* Display all categories */}
               <div className="flex space-x-4">
                {["Vendor Type", "Over Due", "Risk Rank", "Department"].map((category) => {
                  // Filter values for each category
                  const categoryFilters = selectedFilters.filter(filter => filter.category === category);
                  
                  return categoryFilters.length > 0 ? (
                    <div key={category} className="flex items-center space-x-2">
                      {/* Category Label */}
                      <span className="font-semibold text-gray-600 capitalize">{category}:</span>
                      {/* Values for this category */}
                      {categoryFilters.map((filter, index) => (
                        <span key={index} className="bg-gray-200 text-black px-2 py-1 rounded-full flex items-center space-x-1">
                          <span className="text-gray-600">{filter.value}</span>
                          <button className="text-red-500 text-xs font-bold">×</button>
                        </span>
                      ))}
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          ) : (
            // Show risk filter tabs
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
          )
        ) : (
          // When filter tab is open, show "No filters applied"
          <div className="text-gray-500 text-sm font-medium">No filters applied</div>
        )}


        {/* Search and Filter Icons */}
        <div className="flex space-x-2">
          <button className="opacity-50 transition duration-200 hover:opacity-100 hover:scale-105 active:scale-110">
            <IoSearch className="text-lg" />
          </button>
          <button onClick={() => setShowFilter(true)}
          className="opacity-50 transition duration-200 hover:opacity-100 hover:scale-105 active:scale-110">
            <MdFilterAlt className="text-lg" />
          </button>
        </div>
      </div>

      {showFilter && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-40"   onClick={() => setShowFilter(false)} // Clicking the overlay closes the panel
  >
    {/* Filter Panel */}
    <div className="fixed top-0 right-0 bg-white w-80 h-full shadow-lg p-5 z-50 font-sans"  onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the panel
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold">Filters</h2>
        <button onClick={() => setShowFilter(false)} className="text-red-500 text-base">
          &times;
        </button>
      </div>

      <hr className="border-t border-gray-300 mb-4" />

      {/* Filter Form */}
      <form className="flex flex-col space-y-4">
        {/* Initiated By */}
        <div className="flex items-center space-x-3">
          <label className="text-xs font-medium whitespace-nowrap">Initiated By:</label>
          <input type="text" className="border border-gray-300 p-1 text-xs rounded flex-1" />
        </div>

        {/* Vendor Type */}
        <div className="space-y-2">
          <label className="flex items-center text-xs font-medium space-x-2">
            <input type="checkbox" checked readOnly />
            <span>Vendor Type:</span>
          </label>
          <div className="ml-4 space-y-2">
            <label className="flex items-center text-xs space-x-2">
              <input type="checkbox" checked readOnly />
              <span>Govt</span>
            </label>
            <label className="flex items-center text-xs space-x-2">
              <input type="checkbox" checked readOnly />
              <span>Non Govt</span>
            </label>
          </div>
        </div>

        {/* Overdue */}
        <div className="space-y-2">
          <label className="flex items-center text-xs font-medium space-x-2">
            <input type="checkbox" />
            <span>Overdue:</span>
          </label>
          <div className="ml-4 space-y-2">
            {["All", "< 30 Days", "31 to < 90 Days", "> 90 Days"].map((option) => (
              <label key={option} className="flex items-center text-xs space-x-2">
                <input type="checkbox"  defaultChecked={option === "< 30 Days" || option === "31 to < 90 Days"}  />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rank Risk */}
        <div className="space-y-2">
          <label className="flex items-center text-xs font-medium space-x-2">
            <input type="checkbox" />
            <span>Rank Risk:</span>
          </label>
          <div className="ml-4 space-y-2">
            {["Low", "Medium", "High"].map((option) => (
              <label key={option} className="flex items-center text-xs space-x-2">
                <input type="checkbox"  defaultChecked={option === "Low" || option === "Medium"} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Department */}
        <div className="space-y-2">
          <label className="flex items-center text-xs font-medium space-x-2">
            <input type="checkbox" checked readOnly/>
            <span>Department:</span>
          </label>
          <div className="ml-4 space-y-2">
            {["IT", "Marketing", "Finance", "Production"].map((option) => (
              <label key={option} className="flex items-center text-xs space-x-2">
                <input type="checkbox" />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </form>

      <hr className="border-t mt-4 border-gray-300 mb-4" />

      {/* Buttons */}
      <div className="flex justify-end space-x-3 mt-4">
        <button
          onClick={() => {setShowFilter(false); cancelFilters();}}
          className="bg-white text-blue-600 border border-blue-500 text-xs px-4 py-1 rounded hover:bg-blue-100"
        >
          Cancel
        </button>
        <button onClick={() => { applyFilters(); handleApplyFilters(); }} className="bg-blue-500 text-white text-xs px-4 py-1 hover:bg-blue-400 rounded">
          Apply
        </button>
      </div>
    </div>
  </div>
)}

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
      filteredVendors.length
    )} of ${filteredVendors.length} items`}
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-4 rounded-lg w-2/3 max-w-xl">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold pl-4">New Vendor</h2>
          <button onClick={onClose} className="text-red-500 text-lg">&times;</button>
        </div>

        <hr className="border-t border-gray-300 mb-4" />

        <form className="flex flex-col space-y-2">
          {/* Vendor Name */}
          <div className="flex justify-between items-center">
            <label className="text-xs font-medium text-right pr-4 w-1/2">Vendor Name :</label>
            <input type="text" className="border p-1 text-sm rounded w-1/2" />
          </div>

          {/* Vendor Type */}
          <div className="flex items-center">
            <label className="text-xs font-medium w-1/2 text-right pr-4">Vendor Type :</label>
            <div className="flex space-x-4 w-1/2 justify-start">
              <label className="flex items-center space-x-1 text-xs">
                <input type="radio" name="vendorType" value="Non Govt" />
                <span>Non Govt</span>
              </label>
              <label className="flex items-center space-x-1 text-xs">
                <input type="radio" name="vendorType" value="Govt" />
                <span>Govt</span>
              </label>
            </div>
          </div>


          {/* Other Fields */}
          {[
            "Business Registration Number :",
            "Tax Identification Number (TIN/CIN) :",
            "Industry/Category :",
            "Primary Contact Name :",
            "Email Address :",
            "Phone Number :",
            "Fax :",
            "Registered Address :",
            "Billing Address :",
            "Shipping Address :",
          ].map((field) => (
            <div key={field} className="flex justify-between items-center">
              <label className="text-xs font-medium text-right pr-4 w-1/2">{field}</label>
              <input type="text" className="border p-1 text-sm rounded w-1/2" />
            </div>
          ))}
        </form>

        <hr className="border-t mt-2 border-gray-300 mb-4" />

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={onClose} className="bg-white text-blue-600 border hover:text-sm border-blue-500  hover:bg-blue-100 text-sm  px-3 py-1 rounded">Cancel</button>
          <button className="bg-blue-500 text-white text-sm px-3 py-1 hover:bg-blue-400 rounded">Save</button>
        </div>
      </div>
    </div>
  );
}
