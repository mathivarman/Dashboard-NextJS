'use client'

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Dine-In', value: 500 },
  { name: 'Takeaway', value: 300 },
  { name: 'Delivery', value: 200 },
]

const COLORS = ['#6366F1', '#34D399', '#F59E0B']

export default function PieChartCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-md">
      <h2 className="text-xl font-bold mb-2">Order Types</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
