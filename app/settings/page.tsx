'use client'

import { useState } from 'react'

export default function SettingsPage() {
  const [restaurantName, setRestaurantName] = useState('Mathi')
  const [openTime, setOpenTime] = useState('09:00')
  const [closeTime, setCloseTime] = useState('22:00')

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <form className="bg-white p-6 rounded shadow space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-medium">Restaurant Name</label>
          <input
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Open Time</label>
          <input
            type="time"
            value={openTime}
            onChange={(e) => setOpenTime(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Close Time</label>
          <input
            type="time"
            value={closeTime}
            onChange={(e) => setCloseTime(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Save Settings
        </button>
      </form>
    </div>
  )
}
