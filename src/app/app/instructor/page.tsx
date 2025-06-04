import { DashboardLayout } from '@/components/layout/DashboardLayout';

export default function InstructorDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Instructor Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">My Courses</h2>
            <p className="mt-2 text-gray-600">Manage your courses</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Students</h2>
            <p className="mt-2 text-gray-600">View and manage enrolled students</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Assignments</h2>
            <p className="mt-2 text-gray-600">Create and grade assignments</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 