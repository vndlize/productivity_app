import { Compass } from "lucide-react"
import DashboardStats from "@/components/dashboard-stats"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your productivity dashboard. Track your progress and stay organized.
        </p>
      </div>

      <DashboardStats />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/habits" className="group">
          <div className="rounded-lg border bg-card p-4 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Habit Tracker</h3>
                <p className="text-sm text-muted-foreground">Track your daily habits</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/todos" className="group">
          <div className="rounded-lg border bg-card p-4 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Todo List</h3>
                <p className="text-sm text-muted-foreground">Manage your tasks</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/schedule" className="group">
          <div className="rounded-lg border bg-card p-4 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Daily Schedule</h3>
                <p className="text-sm text-muted-foreground">Plan your day</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/wishlist" className="group">
          <div className="rounded-lg border bg-card p-4 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Wishlist</h3>
                <p className="text-sm text-muted-foreground">Track your goals and wishes</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/statistics" className="group">
          <div className="rounded-lg border bg-card p-4 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Statistics</h3>
                <p className="text-sm text-muted-foreground">View your progress</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
