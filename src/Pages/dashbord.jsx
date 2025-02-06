import React from 'react';

const HotelDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Hotel Dashboard</h1>
        <p className="text-sm mt-1">Welcome back, Hotel Manager!</p>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Guests */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-gray-500 text-sm font-semibold">Total Guests</h2>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
            <p className="text-sm text-gray-400 mt-1">+12% this month</p>
          </div>

          {/* Occupancy Rate */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-gray-500 text-sm font-semibold">Occupancy Rate</h2>
            <p className="text-3xl font-bold text-green-600">85%</p>
            <p className="text-sm text-gray-400 mt-1">+8% this month</p>
          </div>

          {/* Revenue */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-gray-500 text-sm font-semibold">Revenue</h2>
            <p className="text-3xl font-bold text-purple-600">$12,345</p>
            <p className="text-sm text-gray-400 mt-1">+15% this month</p>
          </div>
        </div>

        {/* Booking Overview and Room Availability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Booking Overview */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Booking Overview</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Check-ins Today</span>
                <span className="font-bold text-blue-600">45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Check-outs Today</span>
                <span className="font-bold text-green-600">30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Upcoming Reservations</span>
                <span className="font-bold text-purple-600">120</span>
              </div>
            </div>
          </div>

          {/* Room Availability */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Room Availability</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Rooms</span>
                <span className="font-bold text-blue-600">150</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Available Rooms</span>
                <span className="font-bold text-green-600">45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Occupied Rooms</span>
                <span className="font-bold text-purple-600">105</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Room 101 Checked-in</span>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Room 205 Checked-out</span>
              <span className="text-sm text-gray-400">4 hours ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">New Reservation for Room 301</span>
              <span className="text-sm text-gray-400">6 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDashboard;