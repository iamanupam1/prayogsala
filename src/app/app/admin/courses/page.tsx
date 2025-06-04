'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/badge';
import { Modal } from '@/components/ui/Modal';

interface Course {
  _id: string;
  title: string;
  instructor: {
    _id: string;
    email: string;
  };
  shortDescription: string;
  price: number;
  enabled: boolean;
  createdAt: string;
}

// Mock data
const mockCourses: Course[] = [
  {
    _id: '1',
    title: 'Introduction to Web Development',
    instructor: {
      _id: '2',
      email: 'instructor1@example.com',
    },
    shortDescription: 'Learn the basics of web development',
    price: 99.99,
    enabled: true,
    createdAt: '2024-03-20T00:00:00.000Z',
  },
  {
    _id: '2',
    title: 'Advanced JavaScript',
    instructor: {
      _id: '2',
      email: 'instructor1@example.com',
    },
    shortDescription: 'Master JavaScript programming',
    price: 149.99,
    enabled: true,
    createdAt: '2024-03-19T00:00:00.000Z',
  },
  {
    _id: '3',
    title: 'React Fundamentals',
    instructor: {
      _id: '3',
      email: 'instructor2@example.com',
    },
    shortDescription: 'Build modern web applications with React',
    price: 129.99,
    enabled: false,
    createdAt: '2024-03-18T00:00:00.000Z',
  },
];

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    shortDescription: '',
    price: 0,
    instructor: {
      _id: '2', // Default instructor
      email: 'instructor1@example.com',
    },
  });

  const columns = [
    { key: 'title', label: 'Title' },
    {
      key: 'instructor',
      label: 'Instructor',
      render: (value: Course['instructor']) => value.email,
    },
    {
      key: 'price',
      label: 'Price',
      render: (value: number) => `$${value.toFixed(2)}`,
    },
    {
      key: 'enabled',
      label: 'Status',
      render: (value: boolean) => (
        <Badge variant={value ? 'success' : 'destructive'}>
          {value ? 'Active' : 'Disabled'}
        </Badge>
      ),
    },
    {
      key: 'createdAt',
      label: 'Created At',
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
  ];

  const handleAddCourse = () => {
    setIsCreateModalOpen(true);
  };

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    const course: Course = {
      _id: (courses.length + 1).toString(),
      ...newCourse,
      enabled: true,
      createdAt: new Date().toISOString(),
    };
    setCourses([...courses, course]);
    setNewCourse({
      title: '',
      shortDescription: '',
      price: 0,
      instructor: {
        _id: '2',
        email: 'instructor1@example.com',
      },
    });
    setIsCreateModalOpen(false);
  };

  const handleEditCourse = (course: Course) => {
    // TODO: Implement course editing
    console.log('Edit course:', course);
  };

  const handleDeleteCourse = async (course: Course) => {
    if (confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter((c) => c._id !== course._id));
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DataTable
          title="Courses Management"
          data={courses}
          columns={columns}
          onAdd={handleAddCourse}
          onEdit={handleEditCourse}
          onDelete={handleDeleteCourse}
          addButtonLabel="Add Course"
        />

        <Modal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          title="Create New Course"
        >
          <form onSubmit={handleCreateCourse} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Short Description
              </label>
              <textarea
                id="description"
                value={newCourse.shortDescription}
                onChange={(e) => setNewCourse({ ...newCourse, shortDescription: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                rows={3}
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price ($)
              </label>
              <input
                type="number"
                id="price"
                value={newCourse.price}
                onChange={(e) => setNewCourse({ ...newCourse, price: parseFloat(e.target.value) })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsCreateModalOpen(false)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
              >
                Create Course
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </DashboardLayout>
  );
} 