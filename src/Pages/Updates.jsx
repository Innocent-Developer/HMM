import React from "react";
import Form from "./Mailbox";

export const Updates = () => {
  return (
    <div>
      <section class="text-gray-600 body-fon bg-gray-50">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              Subscribe to our newsletter.
            </h1>
            <p class="leading-relaxed mt-4">
              "Subscribe to our newsletter and stay updated with the latest
              offers, exclusive deals, and special events at our hotel. Be the
              first to know about seasonal promotions, luxurious getaway
              packages, and more!"
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};
