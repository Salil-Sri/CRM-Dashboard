export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  company: string
  notes: string
  createdAt: string
}

export const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "Amit Sharma",
    email: "amit.sharma@techsolutions.in",
    phone: "+91 98765 12345",
    company: "Tech Solutions Pvt Ltd",
    notes: "Interested in enterprise package",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Priya Verma",
    email: "priya.verma@designstudio.in",
    phone: "+91 91234 56789",
    company: "Creative Design Studio",
    notes: "Looking for custom integration",
    createdAt: "2024-02-20",
  },
  {
    id: "3",
    name: "Rohit Kumar",
    email: "rohit.kumar@startupco.in",
    phone: "+91 99876 54321",
    company: "StartupCo India",
    notes: "Early stage startup, budget conscious",
    createdAt: "2024-03-10",
  },
  {
    id: "4",
    name: "Sneha Iyer",
    email: "sneha.iyer@retailplus.in",
    phone: "+91 90123 45678",
    company: "Retail Plus India",
    notes: "Needs multi-location support",
    createdAt: "2024-03-25",
  },
  {
    id: "5",
    name: "Arjun Mehta",
    email: "arjun.mehta@consulting.in",
    phone: "+91 97654 32109",
    company: "Mehta Consulting",
    notes: "Referred by existing client",
    createdAt: "2024-04-05",
  },
  {
    id: "6",
    name: "Neha Gupta",
    email: "neha.gupta@healthtech.in",
    phone: "+91 98234 56701",
    company: "HealthTech Solutions",
    notes: "Compliance requirements discussion needed",
    createdAt: "2024-04-18",
  },
  {
    id: "7",
    name: "Vikram Singh",
    email: "vikram.singh@manufacturing.in",
    phone: "+91 93456 78901",
    company: "Singh Manufacturing",
    notes: "Large volume potential",
    createdAt: "2024-05-02",
  },
  {
    id: "8",
    name: "Anjali Nair",
    email: "anjali.nair@nonprofit.org.in",
    phone: "+91 94567 89012",
    company: "Community Nonprofit Trust",
    notes: "Seeking nonprofit discount",
    createdAt: "2024-05-15",
  },
]

// Chart data for new customers per month
export const chartData = [
  { month: "Jan", customers: 2 },
  { month: "Feb", customers: 3 },
  { month: "Mar", customers: 4 },
  { month: "Apr", customers: 2 },
  { month: "May", customers: 3 },
  { month: "Jun", customers: 1 },
]
