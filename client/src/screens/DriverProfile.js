import React from 'react';
import '../screens/DriverProfile.css';

function DriverProfile() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-300 to-gray-500">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Driver</h2>
        <div className="form-container">
          <div className="mb-4">
            <label className="font-bold block">First Name</label>
            <input type="text" className="form-control" placeholder="First Name" />
          </div>
          <div className="mb-4">
            <label className="font-bold block">Last Name</label>
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div className="mb-4">
            <label className="font-bold block">Email</label>
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label className="font-bold block">Phone Number</label>
            <input type="text" className="form-control" placeholder="Phone Number" />
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default DriverProfile;
