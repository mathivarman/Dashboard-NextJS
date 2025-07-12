import Sidebar from '../components/Sidebar'
import './globals.css'

export const metadata = {
  title: 'Mathi Dashboard',
  description: 'Restaurant analytics dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="ml-64 p-6 w-full bg-gray-50 min-h-screen">{children}</main>
      </body>
    </html>
  )
}
