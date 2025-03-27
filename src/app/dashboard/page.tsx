"use client";

import dynamic from 'next/dynamic';

import AlertBox from '@/components/AlertBox';

const VendorStatus = dynamic(() => import('@/charts/VendorStatus'), { ssr: false });
const RiskVendorsTrend = dynamic(() => import('@/charts/RiskVendorsTrend'), { ssr: false });
const TopVendors = dynamic(() => import('@/charts/TopVendors'), { ssr: false });
const DepartmentRequest = dynamic(() => import('@/charts/DepartmentRequest'), { ssr: false });

export default function Dashboard() {

  return (
    <div className="bg-white min-h-screen flex flex-col pl-14 pt-14">
      <h1 className="text-xl font-bold">Supplier 360 TPRM Dashboard</h1>
      <div className="p-4 flex flex-wrap gap-2">
        <div className="p-1 flex flex-col">
          <h2 className="text-lg font-semibold">Vendor Summary</h2>
          <VendorStatus />
        </div>
  
        <div className="p-1 flex flex-col">
          <h2 className="text-lg font-semibold">Department Request</h2>
          <DepartmentRequest />
        </div>
  
        {/* <div className="p-1 flex flex-col">
          <h2 className="text-lg font-semibold">High Risk Vendors Trend</h2>
          <RiskVendorsTrend />
        </div> */}

        <div className='p-1 flex flex-col'>
          <AlertBox />
        </div>

        {/* <div className='p-1 flex flex-col'>
          <TopVendors />
        </div> */}
      </div>
    </div>
  );
  
}


