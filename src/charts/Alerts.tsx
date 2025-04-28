"use client";

import React from 'react';
import { TbAlertTriangleFilled } from "react-icons/tb";

interface NotificationItem {
  id: string;
  message: string;
  priority: 'high' | 'medium';
  date: string;
}

const Alerts: React.FC = () => {
  const notifications: NotificationItem[] = [
    {
      id: '1',
      message: 'To review the attached contract changes and sign by 28 Apr 25 for VDD.',
      priority: 'medium',
      date: '28 Apr 25'
    },
    {
      id: '2',
      message: 'Scheduling failed: Unable to schedule due diligence for Gem Solution Pvt Ltd.',
      priority: 'high',
      date: '7 Apr 25'
    },
    {
      id: '3',
      message: 'Regular reminders for annual risk assessments',
      priority: 'medium',
      date: '10 Apr 25'
    }
  ];

  return (
    <div className="w-lg bg-[#F9F9F9] rounded shadow p-4">
      <div className="flex flex-col divide-y divide-[#E9E9E9]">
        {notifications.map((notification) => (
          <div key={notification.id} className="py-4 flex justify-between items-start relative">
            {/* Icon and Message */}
            <div className="flex items-start">
              <div className="mr-3 pt-1">
                <TbAlertTriangleFilled
                  className={notification.priority === 'high' ? "text-[#EB0A1E]" : "text-[#F09D00]"}
                  size={20}
                />
              </div>
              <p className="text-sm font-semibold text-gray-700 max-w-[300px]">{notification.message}</p>
            </div>

            {/* Date Top Right */}
            <span className="absolute right-0 top-0 text-xs text-gray-500">{notification.date}</span>
          </div>
        ))}
      </div>

      {/* More Button Bottom Right */}
      <div className="flex justify-end mt-1">
        <button className="text-blue-500 text-sm">More</button>
      </div>
    </div>
  );
};

export default Alerts;
