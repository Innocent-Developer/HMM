import React, { useState } from "react";
import { Loader2 } from 'lucide-react';

export default function HotelBookingForm() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [roomType, setRoomType] = useState("");
  const [Extras, setExtras] = useState("");
  const [numRooms, setNumRooms] = useState("");
  const [nonSmoking, setNonSmoking] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log({
        checkIn,
        checkOut,
        guests,
        roomType,
        Extras,
        numRooms,
        nonSmoking,
        message,
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl space-y-6"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">HOTEL BY THE SEA</h1>
          <p className="text-sm text-gray-600">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
          <p className="text-sm text-gray-600">+1 (808) 555-0111</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">Check-in</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <div>
            <label className="block text-gray-700">Check-out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <div>
            <label className="block text-gray-700"># of guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
            >
              <option value="">Select</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Room type</label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
            >
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>

          <div className="flex items-center space-x-2 mt-6">
            <input
              type="checkbox"
              checked={nonSmoking}
              onChange={(e) => setNonSmoking(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="text-gray-700">Non-smoking</label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700"># of rooms</label>
            <select
              value={numRooms}
              onChange={(e) => setNumRooms(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
            >
              <option value="">Select</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Extras</label>
            <select
              value={Extras}
              onChange={(e) => setExtras(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
            >
              <option value="">Select</option>
              <option value="breakfast">Breakfast</option>
              <option value="fitness">Fitness</option>
              <option value="parking">Parking</option>
              <option value="swimming_pool">Swimming Pool</option>
              <option value="restaurant">Restaurant</option>
              <option value="spa">Spa</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : null}
          {loading ? "Processing..." : "Book Now"}
        </button>
      </form>
    </div>
  );
}
