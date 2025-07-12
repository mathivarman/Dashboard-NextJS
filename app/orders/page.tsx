export default function OrdersPage() {
  const orders = [
    { id: 1, item: 'Chicken Biryani', qty: 2, status: 'Delivered' },
    { id: 2, item: 'Mutton Curry', qty: 1, status: 'In Progress' },
    { id: 3, item: 'Veg Fried Rice', qty: 3, status: 'Cancelled' }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Orders</h1>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Order ID</th>
            <th className="p-3">Item</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.item}</td>
              <td className="p-3">{order.qty}</td>
              <td className="p-3">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
