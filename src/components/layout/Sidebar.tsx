'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  BookOpen, 
  GraduationCap, 
  ClipboardList, 
  Users, 
  Settings, 
  BarChart,
  Layout,
  FileText,
  Bell
} from 'lucide-react';

const navigationConfig = {
  student: [
    { name: 'Dashboard', href: '/app/student', icon: Layout },
    { name: 'My Courses', href: '/app/student/courses', icon: BookOpen },
  ],
  instructor: [
    { name: 'Dashboard', href: '/app/instructor', icon: Layout },
    { name: 'My Courses', href: '/app/instructor/courses', icon: BookOpen },
    { name: 'Students', href: '/app/instructor/students', icon: GraduationCap },
  ],
  admin: [
    { name: 'Dashboard', href: '/app/admin', icon: Layout },
    { name: 'Users', href: '/app/admin/users', icon: Users },
    { name: 'Courses', href: '/app/admin/courses', icon: BookOpen },
    { name: 'Inquiries', href: '/app/admin/inquiries', icon: BarChart }
  ],
};

export function Sidebar() {
  const pathname = usePathname();
  let role: 'student' | 'instructor' | 'admin' = 'student';
  
  // Determine the role based on the pathname
  if (pathname.startsWith('/app/instructor')) {
    role = 'instructor';
  } else if (pathname.startsWith('/app/admin')) {
    role = 'admin';
  }

  const navigation = navigationConfig[role];

  return (
    <div className="flex min-h-full w-64 flex-col bg-white border-r border-gray-200">
      <div className="flex h-16 items-center px-4 border-b border-gray-200">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Prayogsala
        </h1>
      </div>
      <div className="flex flex-col flex-1">
        <nav className="flex-1 space-y-1 px-2 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'group flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150',
                  isActive
                    ? 'bg-gray-100 text-purple-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
                )}
              >
                <Icon
                  className={cn(
                    'h-5 w-5 flex-shrink-0 transition-colors duration-150',
                    isActive ? 'text-purple-600' : 'text-gray-400 group-hover:text-purple-600'
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <span className="text-xs font-medium text-white">
                {role === 'student' ? 'S' : role === 'instructor' ? 'I' : 'A'}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">
                {role.charAt(0).toUpperCase() + role.slice(1)} View
              </span>
              <span className="text-xs text-gray-500">Active Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 