import React from "react";
import Button from "../Compontents/Button";

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <section
        className="bg-white shadow-xl rounded-xl overflow-hidden max-w-7xl w-full grid md:grid-cols-2 gap-6 md:gap-0"
        data-aos="fade-right"
      >
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
            At THE SEA, we take pride in offering unparalleled hospitality services tailored to our guests’ needs. Established in 10, our hotel has been a symbol of elegance and sophistication, catering to travelers from around the world. Our team of dedicated professionals ensures that every guest enjoys a personalized and luxurious stay.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Prime location in Lahore, Pakistan</li>
            <li>Elegant and spacious accommodations</li>
            <li>Exceptional dining experiences</li>
            <li>Modern facilities and world-class amenities</li>
            <li>24/7 customer support</li>
          </ul>
          <div className="flex">
            <Button
              name="Book Now"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
            />
          </div>
        </div>

        <div className="relative">
          <img
            className="object-cover w-full h-full md:rounded-r-xl"
            data-aos="fade-left"
            alt="hotel view"
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </section>
    </div>
  );
};
