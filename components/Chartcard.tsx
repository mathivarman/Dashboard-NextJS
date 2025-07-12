'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', sales: 400 },
  { name: 'Tue', sales: 300 },
  { name: 'Wed', sales: 500 },
  { name: 'Thu', sales: 200 },
  { name: 'Fri', sales: 600 },
  { name: 'Sat', sales: 700 },
  { name: 'Sun', sales: 450 },
]

export default function ChartCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-xl">
      <h2 className="text-xl font-bold mb-2">Weekly Sales</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#6366F1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
