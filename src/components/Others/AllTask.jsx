import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">
        Employee Task Overview
      </h1>

      {/* Table Header */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-teal-700 text-white font-semibold text-center rounded-lg py-2">
        <h1 className="text-sm sm:text-base md:text-lg">Employee Name</h1>
        <h1 className="text-sm sm:text-base md:text-lg">Completed Tasks</h1>
        <h1 className="text-sm sm:text-base md:text-lg">New Tasks</h1>
        <h1 className="text-sm sm:text-base md:text-lg">Failed Tasks</h1>
      </div>

      {/* Data Rows */}
      <div className="divide-y divide-gray-700 mt-3 ">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-3 items-center bg-gray-800 hover:bg-gray-700 transition-all rounded-lg"
          >
            {/* Employee Name */}
            <h1 className="text-sm sm:text-base font-medium break-words">
              {elem.firstName}
            </h1>
            {/* Completed Tasks */}
            <h1 className="bg-green-600 text-white py-2 rounded-md text-sm sm:text-base">
              {elem.taskCounts.completed}
            </h1>
            {/* New Tasks */}
            <h1 className="bg-pink-600 text-white py-2 rounded-md text-sm sm:text-base">
              {elem.taskCounts.newTask}
            </h1>
            {/* Failed Tasks */}
            <h1 className="bg-red-600 text-white py-2 rounded-md text-sm sm:text-base">
              {elem.taskCounts.failed}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
