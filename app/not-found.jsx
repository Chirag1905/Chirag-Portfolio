import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">
        Sorry, we couldn&apos;t find the page you&lsquo;re looking for.
      </p>
      <Link href="/">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Go back to Home
        </button>
      </Link>
    </div>
  );
}
