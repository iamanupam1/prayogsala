import { DashboardLayout } from '@/components/layout/DashboardLayout';
import Link from 'next/link';
import { Users, BookOpen, MessageSquare } from 'lucide-react';

export default function AdminDashboard() {
  const cards = [
    {
      title: 'Users',
      description: 'Manage instructors and students',
      icon: Users,
      href: '/app/admin/users',
      stats: {
        total: '150+',
        label: 'Active Users'
      }
    },
    {
      title: 'Courses',
      description: 'Oversee all courses',
      icon: BookOpen,
      href: '/app/admin/courses',
      stats: {
        total: '25+',
        label: 'Published Courses'
      }
    },
    {
      title: 'Inquiries',
      description: 'View course inquiries',
      icon: MessageSquare,
      href: '/app/admin/inquiries',
      stats: {
        total: '10',
        label: 'New Inquiries'
      }
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold group-hover:text-purple-600">
                    {card.title}
                  </h2>
                  <Icon className="h-6 w-6 text-gray-400 group-hover:text-purple-600" />
                </div>
                <p className="mt-2 text-gray-600">{card.description}</p>
                <div className="mt-4 flex items-center justify-between border-t pt-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {card.stats.total}
                  </span>
                  <span className="text-sm text-gray-500">{card.stats.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
} 