import { DashboardLayout } from '@/components/layout/DashboardLayout';

export default function StudentDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Example cards - replace with actual content */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">My Courses</h2>
            <p className="mt-2 text-gray-600">View your enrolled courses</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Assignments</h2>
            <p className="mt-2 text-gray-600">Track your pending assignments</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Progress</h2>
            <p className="mt-2 text-gray-600">Monitor your learning progress</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 