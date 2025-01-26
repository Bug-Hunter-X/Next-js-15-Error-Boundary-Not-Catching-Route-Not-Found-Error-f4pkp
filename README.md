# Next.js 15 Error Boundary Not Catching Route Not Found Error

This repository demonstrates a bug in Next.js 15 where the error boundary does not catch a route not found error.  The issue occurs when attempting to access a route that does not exist within the application.  The provided solution demonstrates a method for correctly handling this scenario.

## Bug Description:

A Next.js application using the App Router might not catch a 404 error when a route is not found, preventing graceful error handling. This can lead to unexpected behavior and a poor user experience.

## How to Reproduce:

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the development server: `npm run dev`.
4. Access a route that doesn't exist (e.g., `/nonexistent`).
5. Observe that the default Next.js error page is displayed instead of a custom error boundary.

## Solution:

The provided `bugSolution.js` demonstrates how to handle the 404 error gracefully using an error boundary and Next.js's built-in error handling mechanisms.  This ensures a more user-friendly experience by providing a custom error message instead of the default error page.