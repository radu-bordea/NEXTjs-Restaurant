"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      {/* Illustration */}
      <div className="mb-8">
        <svg
          className="mx-auto h-48 w-48 text-amber-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m7.5-7.5a9 9 0 11-15 7.5"
          />
        </svg>
      </div>

      {/* Text */}
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mb-6">
        The page you’re looking for might have been removed or never existed.
      </p>

      {/* Back Home Button */}
      <Link
        href="/"
        className="inline-block rounded-lg bg-amber-600 px-6 py-3 text-white font-medium transition hover:bg-amber-500"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
