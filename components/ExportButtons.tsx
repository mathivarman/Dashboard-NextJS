'use client'

export default function ExportButtons() {
  const handleExport = (type: 'daily' | 'weekly') => {
    // Replace with real export logic
    alert(`${type.toUpperCase()} report exported successfully!`)
  }

  return (
    <div className="flex space-x-4 mb-6">
      <button
        onClick={() => handleExport('daily')}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Export Daily Report
      </button>
      <button
        onClick={() => handleExport('weekly')}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Export Weekly Report
      </button>
    </div>
  )
}
