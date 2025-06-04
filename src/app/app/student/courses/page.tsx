'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import Link from 'next/link';
import { ExternalLink, PlayCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Course {
  _id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  instructor: {
    _id: string;
    email: string;
  };
  progress: number;
  status: 'not-started' | 'in-progress' | 'completed';
}

// Mock enrolled courses data
const mockEnrolledCourses: Course[] = [
  {
    _id: '1',
    title: 'Introduction to Web Development',
    shortDescription: 'Learn the basics of web development including HTML, CSS, and JavaScript.',
    thumbnail: '/course-1.jpg',
    instructor: {
      _id: '2',
      email: 'instructor1@example.com',
    },
    progress: 75,
    status: 'in-progress',
  },
  {
    _id: '2',
    title: 'Advanced JavaScript',
    shortDescription: 'Master JavaScript programming with advanced concepts and patterns.',
    thumbnail: '/course-2.jpg',
    instructor: {
      _id: '2',
      email: 'instructor1@example.com',
    },
    progress: 30,
    status: 'in-progress',
  },
  {
    _id: '3',
    title: 'React Fundamentals',
    shortDescription: 'Build modern web applications with React.',
    thumbnail: '/course-3.jpg',
    instructor: {
      _id: '3',
      email: 'instructor2@example.com',
    },
    progress: 0,
    status: 'not-started',
  },
];

export default function StudentCoursesPage() {
  const [courses] = useState<Course[]>(mockEnrolledCourses);

  const getStatusColor = (status: Course['status']) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'default';
      default:
        return 'secondary';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Courses</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course._id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-video w-full bg-gray-100">
                {/* Replace with actual image */}
                <div className="flex h-full items-center justify-center bg-gray-200">
                  <span className="text-gray-400">Course Thumbnail</span>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant={getStatusColor(course.status)}>
                    {course.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                  <span className="text-sm text-gray-500">{course.progress}% Complete</span>
                </div>
                <h2 className="mb-2 text-xl font-semibold">{course.title}</h2>
                <p className="mb-4 text-sm text-gray-600">{course.shortDescription}</p>
                <div className="mb-4 h-2 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full bg-purple-600 transition-all"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Instructor: {course.instructor.email}
                  </span>
                  <Link
                    href={`/app/student/courses/${course._id}`}
                    className="flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700"
                  >
                    {course.progress === 0 ? (
                      <>
                        Start Course
                        <PlayCircle className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Continue Learning
                        <ExternalLink className="h-4 w-4" />
                      </>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
} 