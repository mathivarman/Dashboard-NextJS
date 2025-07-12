import ChartCard from '../../components/Chartcard'
import PieChartCard from '../../components/PieChartCard'
import ExportButtons from '../../components/ExportButtons'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <ExportButtons />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard />
        <PieChartCard />
      </div>
    </div>
  )
}
