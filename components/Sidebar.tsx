'use client'

import Link from 'next/link'
import {
  LayoutDashboard,
  ShoppingCart,
  FileBarChart2,
  Utensils,
  Settings
} from 'lucide-react'

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed">
      <div className="text-2xl font-bold p-5 border-b border-gray-700">
        🍽️ Mathi
      </div>
      <ul className="p-4 space-y-4 text-sm">
        <li className="flex items-center space-x-2">
          <LayoutDashboard className="w-4 h-4" />
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="flex items-center space-x-2">
          <ShoppingCart className="w-4 h-4" />
          <Link href="/orders">Orders</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FileBarChart2 className="w-4 h-4" />
          <Link href="/reports">Reports</Link>
        </li>
        <li className="flex items-center space-x-2">
          <Utensils className="w-4 h-4" />
          <Link href="/menu">Menu</Link>
        </li>
        <li className="flex items-center space-x-2">
          <Settings className="w-4 h-4" />
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  )
}
