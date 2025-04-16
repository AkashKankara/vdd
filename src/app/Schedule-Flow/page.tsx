"use client";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { MdFilterAlt } from "react-icons/md";
import { useRouter } from "next/navigation";


export default function Schedule_flow() {

  return (
    <main className="flex h-screen pt-12 pl-12">
     
      <div className="flex-1 flex flex-col">
     
        <div className="p-3 flex-1">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold">Schedule Due Diligence</h1>
            </div>
         {/* <FilterTabs /> */}
          <VendorTable/>
        </div>
      </div>
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
  
  const [filteredVendors, setFilteredVendors] = useState(vendors);
  
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
  

  //head
    const totalVendors = vendors.length;
    const today = new Date(); // Get today's date
    const [selectedOverdue, setSelectedOverdue] = useState("All"); // Add this line 
    // Helper function to calculate overdue days
    const calculateOverdueDays = (ddDueDate: string) => {
      const dueDate = new Date(ddDueDate);
      const timeDiff = today.getTime() - dueDate.getTime();
      return Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    };
    
    // Calculate Overdue Counts
    const lessThan30Days = vendors.filter((v) => calculateOverdueDays(v.ddDueDate) < 30).length;
    const between31And90Days = vendors.filter((v) => {
      const overdue = calculateOverdueDays(v.ddDueDate);
      return overdue >= 31 && overdue < 90;
    }).length;
    const moreThan90Days = vendors.filter((v) => calculateOverdueDays(v.ddDueDate) >= 90).length;
    
    // Filter function based on overdue categories
    const overdueFilter = (overdue: string) => {
      setSelectedOverdue(overdue);
    
      if (overdue === "All") {
        setFilteredVendors(vendors);
      } else if (overdue === "<30 Days") {
        setFilteredVendors(vendors.filter((v) => calculateOverdueDays(v.ddDueDate) < 30));
      } else if (overdue === "31-90 Days") {
        setFilteredVendors(vendors.filter((v) => {
          const overdue = calculateOverdueDays(v.ddDueDate);
          return overdue >= 31 && overdue < 90;
        }));
      } else if (overdue === ">90 Days") {
        setFilteredVendors(vendors.filter((v) => calculateOverdueDays(v.ddDueDate) >= 90));
      }
    };
    
  //checkbox
    const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    

    //Schedulebutton
      // Handle individual row selection    
      const handleRowSelect = (id: string) => {
        setSelectedVendors((prev) =>
          prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
      };

      // Handle "Select All" toggle
      const handleSelectAll = () => {
        if (selectAll) {
          setSelectedVendors([]); // Deselect all
        } else {
          setSelectedVendors(vendors.map((vendor) => vendor.id)); // Select all
        }
        setSelectAll(!selectAll);
      };

      const router = useRouter();
      const handleSchedule = () => {
        if (selectedVendors.length > 0) {
          router.push(`/Schedule-Flow/schedule?s=${selectedVendors.length}`); // Replace with your actual route
        }
      }; 

      //RealFilterstab
      const [initiatedBy, setInitiatedBy] = useState("");
      const [vendorTypes, setVendorTypes] = useState<string[]>([]);
      const [overdue, setOverdue] = useState<string[]>([]);
      const [rankRisk, setRankRisk] = useState<string[]>([]);
      const [departments, setDepartments] = useState<string[]>([]);
      
      const [showFilter, setShowFilter] = useState(false);
      
      const applyFilters = (overrideFilters?: {
        initiatedBy?: string;
        vendorTypes?: string[];
        overdue?: string[];
        rankRisk?: string[];
        departments?: string[];
      }) => {
        const today = new Date();
      
        const {
          initiatedBy: iBy = initiatedBy,
          vendorTypes: vTypes = vendorTypes,
          overdue: oDue = overdue,
          rankRisk: rRisk = rankRisk,
          departments: depts = departments,
        } = overrideFilters || {};
      
        const filtered = vendors.filter((vendor) => {
          const matchesInitiatedBy = iBy
            ? vendor.initiatedBy.toLowerCase().includes(iBy.toLowerCase())
            : true;
      
          const matchesVendorType =
            vTypes.length === 0 || vTypes.includes(vendor.type);
      
          const dueDate = new Date(vendor.ddDueDate);
          const daysOverdue = (today.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24);
      
          const matchesOverdue =
            oDue.length === 0 ||
            oDue.some((option) => {
              switch (option) {
                case "< 30 Days":
                  return daysOverdue < 30;
                case "31 to < 90 Days":
                  return daysOverdue >= 31 && daysOverdue < 90;
                case "> 90 Days":
                  return daysOverdue > 90;
                case "All":
                  return true;
                default:
                  return false;
              }
            });
      
          const matchesRisk =
            rRisk.length === 0 ||
            rRisk.includes(vendor.ddRank.replace(" Risk", ""));
      
          const matchesDepartment =
            depts.length === 0 || depts.includes(vendor.department);
      
          return (
            matchesInitiatedBy &&
            matchesVendorType &&
            matchesOverdue &&
            matchesRisk &&
            matchesDepartment
          );
        });
      
        setFilteredVendors(filtered);
      
        const newSelectedFilters: { category: string; value: string }[] = [];
      
        if (iBy) newSelectedFilters.push({ category: "Initiated By", value: iBy });
        vTypes.forEach((type) => newSelectedFilters.push({ category: "Vendor Type", value: type }));
        oDue.forEach((option) => newSelectedFilters.push({ category: "Over Due", value: option }));
        rRisk.forEach((rank) => newSelectedFilters.push({ category: "Risk Rank", value: rank }));
        depts.forEach((dept) => newSelectedFilters.push({ category: "Department", value: dept }));
      
        setSelectedFilters(newSelectedFilters);
        setFiltersApplied(true);
        setShowFilter(false);
      };
      
      
 //filterstab
 type Filter = {
   category: string;
   value: string;
 };
 
 
 const handleApplyFilters = () => {
   setFiltersApplied(true); // This flag lets you show chips + hide risk tabs
   setShowFilter(false);    // Close filter panel
   applyFilters();          // Apply actual filter logic (you should include this!)
 };
 
 const cancelFilters = () => {
  setInitiatedBy("");
  setVendorTypes([]);
  setOverdue([]);
  setRankRisk([]);
  setDepartments([]);
  setSelectedFilters([]);
  setFiltersApplied(false);  // Hide chips, show tabs
  setShowFilter(false);
  setFilteredVendors(vendors); // Reset to full list
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
                    const categoryFilters = selectedFilters.filter(
                      (filter) => filter.category === category
                    );
  
                    return categoryFilters.length > 0 ? (
                      <div key={category} className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-600 capitalize">{category}:</span>
                        {categoryFilters.map((item, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 text-black px-2 py-1 rounded-full flex items-center space-x-1"
                          >
                            <span className="text-gray-600">{item.value}</span>
                            <button className="text-red-500 text-xs font-bold" onClick={() => {
            const updatedFilters = selectedFilters.filter(
              (f) => !(f.category === item.category && f.value === item.value)
            );
            setSelectedFilters(updatedFilters);

            let newInitiatedBy = initiatedBy;
            let newVendorTypes = [...vendorTypes];
            let newOverdue = [...overdue];
            let newRankRisk = [...rankRisk];
            let newDepartments = [...departments];

            // Update respective filter state & mirror it in new variables
            if (item.category === "Vendor Type") {
              newVendorTypes = newVendorTypes.filter((v) => v !== item.value);
              setVendorTypes(newVendorTypes);
            } else if (item.category === "Over Due") {
              newOverdue = newOverdue.filter((v) => v !== item.value);
              setOverdue(newOverdue);
            } else if (item.category === "Risk Rank") {
              newRankRisk = newRankRisk.filter((v) => v !== item.value);
              setRankRisk(newRankRisk);
            } else if (item.category === "Department") {
              newDepartments = newDepartments.filter((v) => v !== item.value);
              setDepartments(newDepartments);
            } else if (item.category === "Initiated By") {
              newInitiatedBy = "";
              setInitiatedBy("");
            }

            // Reapply filters using fresh values
            setTimeout(() => {
              if (updatedFilters.length === 0) {
                setFilteredVendors(vendors);
                setFiltersApplied(false);
              } else {
                applyFilters({
                  initiatedBy: newInitiatedBy,
                  vendorTypes: newVendorTypes,
                  overdue: newOverdue,
                  rankRisk: newRankRisk,
                  departments: newDepartments,
                });
              }
            }, 0);
          }}
        >×</button>
                          </span>
                        ))}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            ) : (
              // Show overdue filter tabs
              <div className="flex space-x-2">
                {[
                  { label: `Total Vendors (${totalVendors})`, overdue: "All" },
                  { label: `< 30 Day overdue (${lessThan30Days})`, overdue: "<30 Days" },
                  { label: `>31 to <90 Day overdue (${between31And90Days})`, overdue: "31-90 Days" },
                  { label: `> 90 Day overdue (${moreThan90Days})`, overdue: ">90 Days" },
                ].map(({ label, overdue }) => (
                  <button
                    key={overdue}
                    onClick={() => overdueFilter(overdue)}
                    className={`px-2 py-1.5 text-sm transition-all rounded-t-md relative 
                      ${
                        selectedOverdue === overdue
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
            <button
              onClick={() => setShowFilter(true)}
              className="opacity-50 transition duration-200 hover:opacity-100 hover:scale-105 active:scale-110"
            >
              <MdFilterAlt className="text-lg" />
            </button>
          </div>
        </div>
  
        {showFilter && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowFilter(false)} // Clicking the overlay closes the panel
          >
            {/* Filter Panel */}
            <div
              className="fixed top-0 right-0 bg-white w-80 h-full shadow-lg p-5 z-50 font-sans"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the panel
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
                  <input
                    type="text"
                    className="border border-gray-300 p-1 text-xs rounded flex-1"
                    value={initiatedBy}
                    onChange={(e) => setInitiatedBy(e.target.value)}
                  />
                </div>
  
                {/* Vendor Type */}
                <div className="space-y-2">
                  <span className="text-xs font-medium">Vendor Type:</span>
                  <div className="ml-4 space-y-2">
                    {["Govt", "Non Govt"].map((type) => (
                      <label key={type} className="flex items-center text-xs space-x-2">
                        <input
                          type="checkbox"
                          checked={vendorTypes.includes(type)}
                          onChange={() =>
                            setVendorTypes((prev) =>
                              prev.includes(type)
                                ? prev.filter((v) => v !== type)
                                : [...prev, type]
                            )
                          }
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

  
                {/* Overdue */}
                <div className="space-y-2">
                    <span className="text-xs font-medium">Overdue:</span>
                    <div className="ml-4 space-y-2">
                      {["All", "< 30 Days", "31 to < 90 Days", "> 90 Days"].map((option) => (
                        <label key={option} className="flex items-center text-xs space-x-2">
                          <input
                            type="checkbox"
                            checked={overdue.includes(option)}
                            onChange={() =>
                              setOverdue((prev) =>
                                prev.includes(option)
                                  ? prev.filter((o) => o !== option)
                                  : [...prev, option]
                              )
                            }
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                {/* Rank Risk */}
                <div className="space-y-2">
                    <span className="text-xs font-medium">Rank Risk:</span>
                    <div className="ml-4 space-y-2">
                      {["Low", "Medium", "High"].map((option) => (
                        <label key={option} className="flex items-center text-xs space-x-2">
                          <input
                            type="checkbox"
                            checked={rankRisk.includes(option)}
                            onChange={() =>
                              setRankRisk((prev) =>
                                prev.includes(option)
                                  ? prev.filter((r) => r !== option)
                                  : [...prev, option]
                              )
                            }
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>


                  {/* Department */}
                  <div className="space-y-2">
                      <span className="text-xs font-medium">Department:</span>
                      <div className="ml-4 space-y-2">
                        {["IT", "Marketing", "Finance", "Production"].map((option) => (
                          <label key={option} className="flex items-center text-xs space-x-2">
                            <input
                              type="checkbox"
                              checked={departments.includes(option)}
                              onChange={() =>
                                setDepartments((prev) =>
                                  prev.includes(option)
                                    ? prev.filter((d) => d !== option)
                                    : [...prev, option]
                                )
                              }
                            />
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
        <th className="p-3 border-r-[1.5px] border-white">
  <input
    type="checkbox"
    checked={selectAll}
    onChange={handleSelectAll}
  />
</th>

          <th className="p-3 border-r-[1.5px] border-white">Vendor Name</th>
          <th className="p-3 border-r-[1.5px] border-white">Vendor ID</th>
          <th className="p-3 border-r-[1.5px] border-white">Vendor Type</th>
          <th className="p-3 border-r-[1.5px] border-white">Initiated By</th>
          <th className="p-3 border-r-[1.5px] border-white">Department</th>
          <th className="p-3 border-r-[1.5px] border-white">Last DD Date</th>
          <th className="p-3 border-r-[1.5px] border-white">DD Due Date</th>
          <th className="p-3 border-r-[1.5px] border-white">DD Score</th>
          <th className="p-3 border-r-[1.5px] border-white">DD Rank</th>
        </tr>
      </thead>
      <tbody>
        {filteredVendors.map((vendor, index) => (
          <tr key={index}  className={`border-b hover:bg-blue-100 
            ${vendor.status === "Blocked" ? "bg-gray-200" : index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
            <td className="p-1 border-r-[1.5px] border-gray-300 text-center">
  <div className="flex justify-center items-center">
    <input
      type="checkbox"
      checked={selectedVendors.includes(vendor.id)}
      onChange={() => handleRowSelect(vendor.id.toString())}
    />
  </div>
</td>

            
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
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="flex justify-end mt-4">
  <button
  onClick={handleSchedule}
  disabled={selectedVendors.length === 0}
  className={`px-2 py-1 text-sm rounded ${
    selectedVendors.length > 0 
      ? "bg-blue-500 text-white hover:bg-blue-600" 
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
>
  Schedule
</button>
</div>

</div>
);
}
  