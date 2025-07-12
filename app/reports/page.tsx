export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reports</h1>
      <p className="text-gray-700">
        Download sales and performance reports for the week or month.
      </p>

      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Download Weekly Report
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Download Monthly Report
        </button>
      </div>

      <div className="mt-8 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Last 7 Days Summary</h2>
        <ul className="list-disc pl-5 text-gray-800">
          <li>Total Orders: 123</li>
          <li>Total Revenue: Rs. 45,000</li>
          <li>Top Dish: Chicken Biryani</li>
        </ul>
      </div>
    </div>
  )
}
