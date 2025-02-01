import React from "react";
import Button from "../Compontents/Button";

export const Homepage = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Welcome to THE SEA</h1>
            <p className="py-6 text-1xl">
              Experience luxury, comfort, and world-class hospitality in the
              heart of Lahore. Whether you're traveling for business or
              leisure, we ensure a stay that is both memorable and relaxing.
            </p>
            <h2 className="text-2xl font-bold mb-2">Book Your Stay Today</h2>
            <Button name="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
};
