// src/features/home/HomePage.jsx

import React from "react";

/**
 * HomePage Component
 * Displays a welcome message on the home route.
 */
export default function HomePage() {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Welcome Home
      </h1>
    </section>
  );
}
