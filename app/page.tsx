import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, UserPlus, TrendingUp } from "lucide-react"
import { CustomerChart } from "@/components/customer-chart"
import { mockCustomers } from "@/lib/mock-data"

export default function Dashboard() {
  const totalCustomers = mockCustomers.length
  const thisMonth = new Date().getMonth()
  const newCustomersThisMonth = mockCustomers.filter((customer) => {
    const customerDate = new Date(customer.createdAt)
    return customerDate.getMonth() === thisMonth
  }).length

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold">CRM Dashboard</h1>
              <div className="flex space-x-4">
                <Link href="/" className="text-primary font-medium">
                  Dashboard
                </Link>
                <Link href="/customers" className="text-muted-foreground hover:text-foreground">
                  Customers
                </Link>
              </div>
            </div>
            <Link href="/customers">
              <Button>
                <UserPlus className="w-4 h-4 mr-2" />
                Add Customer
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Welcome to your CRM dashboard. Here's an overview of your customers.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCustomers}</div>
              <p className="text-xs text-muted-foreground">Active customer accounts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New This Month</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{newCustomersThisMonth}</div>
              <p className="text-xs text-muted-foreground">New customers added</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12%</div>
              <p className="text-xs text-muted-foreground">From last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle>New Customers Per Month</CardTitle>
            <CardDescription>Customer acquisition over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <CustomerChart />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
