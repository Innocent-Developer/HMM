import React from "react";
import Button from "../Compontents/Button";

export const About = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
              About Us
            </h1>
            <p class="mb-8 leading-relaxed dark:text-white">
              At THE SEA, we take pride in offering unparalleled
              hospitality services tailored to our guests’ needs. Established in
              10, our hotel has been a symbol of elegance and sophistication,
              catering to travelers from around the world. Our team of dedicated
              professionals ensures that every guest enjoys a personalized and
              luxurious stay.
            </p>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4 dark:text-white">Why Choose Us?</h2>
            <ul class="list-disc list-inside text-gray-700 mb-8 dark:text-white">
              <li>Prime location in [City, Country]</li>
              <li>Elegant and spacious accommodations</li>
              <li>Exceptional dining experiences</li>
              <li>Modern facilities and world-class amenities</li>
              <li>24/7 customer support</li>
            </ul>
            <div class="flex justify-center">
            <Button name="Book Now" />
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
