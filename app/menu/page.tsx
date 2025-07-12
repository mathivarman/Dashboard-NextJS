export default function MenuPage() {
  const items = [
    { name: 'Chicken Biryani', price: 1200 },
    { name: 'Veg Kottu', price: 600 },
    { name: 'Egg Hoppers', price: 100 },
    { name: 'Fish Curry', price: 950 }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-700">Price: Rs. {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
