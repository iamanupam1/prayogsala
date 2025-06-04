'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, FileText, CheckCircle2 } from 'lucide-react';

interface Module {
  _id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
}

interface Course {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  instructor: {
    _id: string;
    email: string;
  };
  modules: Module[];
  progress: number;
  status: 'not-started' | 'in-progress' | 'completed';
}

// Mock course data
const mockCourse: Course = {
  _id: '1',
  title: 'Introduction to Web Development',
  shortDescription: 'Learn the basics of web development',
  fullDescription:
    'This comprehensive course covers all the fundamentals of web development, including HTML, CSS, and JavaScript. Perfect for beginners who want to start their journey in web development.',
  thumbnail: '/course-1.jpg',
  instructor: {
    _id: '2',
    email: 'instructor1@example.com',
  },
  modules: [
    {
      _id: '1',
      title: 'HTML Fundamentals',
      description: 'Learn the basic structure of web pages',
      duration: '1h 30m',
      completed: true,
    },
    {
      _id: '2',
      title: 'CSS Styling',
      description: 'Style your web pages with CSS',
      duration: '2h 15m',
      completed: true,
    },
    {
      _id: '3',
      title: 'JavaScript Basics',
      description: 'Add interactivity to your websites',
      duration: '3h 00m',
      completed: false,
    },
    {
      _id: '4',
      title: 'Responsive Design',
      description: 'Make your websites work on all devices',
      duration: '2h 45m',
      completed: false,
    },
  ],
  progress: 75,
  status: 'in-progress',
};

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const [course] = useState<Course>(mockCourse);

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
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <p className="mt-2 text-gray-600">{course.shortDescription}</p>
            </div>
            <Badge variant={getStatusColor(course.status)}>
              {course.status.replace('-', ' ').toUpperCase()}
            </Badge>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Course Progress</span>
              <span className="text-sm text-gray-500">{course.progress}% Complete</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full bg-purple-600 transition-all"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">About This Course</h2>
            <p className="text-gray-600">{course.fullDescription}</p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Course Content</h2>
            <div className="space-y-4">
              {course.modules.map((module) => (
                <div
                  key={module._id}
                  className="flex items-start justify-between rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
                >
                  <div className="flex items-start gap-4">
                    {module.completed ? (
                      <CheckCircle2 className="mt-1 h-5 w-5 text-green-500" />
                    ) : (
                      <PlayCircle className="mt-1 h-5 w-5 text-gray-400" />
                    )}
                    <div>
                      <h3 className="font-medium">{module.title}</h3>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{module.duration}</span>
                    {module.completed ? (
                      <Badge variant="success">Completed</Badge>
                    ) : (
                      <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
                        {course.progress === 0 ? 'Start' : 'Continue'}
                        <PlayCircle className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 