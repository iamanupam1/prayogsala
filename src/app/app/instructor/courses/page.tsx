'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/badge';
import { Modal } from '@/components/ui/Modal';

interface Course {
  _id: string;
  title: string;
  shortDescription: string;
  price: number;
  enabled: boolean;
  enrolledStudents: number;
  createdAt: string;
}

// Mock data for instructor's courses
const mockCourses: Course[] = [
  {
    _id: '1',
    title: 'Introduction to Web Development',
    shortDescription: 'Learn the basics of web development',
    price: 99.99,
    enabled: true,
    enrolledStudents: 45,
    createdAt: '2024-03-20T00:00:00.000Z',
  },
  {
    _id: '2',
    title: 'Advanced JavaScript',
    shortDescription: 'Master JavaScript programming',
    price: 149.99,
    enabled: true,
    enrolledStudents: 32,
    createdAt: '2024-03-19T00:00:00.000Z',
  },
  {
    _id: '3',
    title: 'React Fundamentals',
    shortDescription: 'Build modern web applications with React',
    price: 129.99,
    enabled: false,
    enrolledStudents: 28,
    createdAt: '2024-03-18T00:00:00.000Z',
  },
];

export default function InstructorCoursesPage() {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    price: 0,
  });

  const resetForm = () => {
    setFormData({
      title: '',
      shortDescription: '',
      price: 0,
    });
    setEditingCourse(null);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleAddCourse = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      shortDescription: course.shortDescription,
      price: course.price,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourse) {
      // Update existing course
      setCourses(courses.map(course => 
        course._id === editingCourse._id 
          ? { ...course, ...formData }
          : course
      ));
    } else {
      // Create new course
      const newCourse: Course = {
        _id: (courses.length + 1).toString(),
        ...formData,
        enabled: true,
        enrolledStudents: 0,
        createdAt: new Date().toISOString(),
      };
      setCourses([...courses, newCourse]);
    }
    handleModalClose();
  };

  const handleDeleteCourse = async (course: Course) => {
    if (confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter((c) => c._id !== course._id));
    }
  };

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'shortDescription', label: 'Description' },
    {
      key: 'price',
      label: 'Price',
      render: (value: number) => `$${value.toFixed(2)}`,
    },
    {
      key: 'enrolledStudents',
      label: 'Students',
      render: (value: number) => value,
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

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DataTable
          title="My Courses"
          data={courses}
          columns={columns}
          onAdd={handleAddCourse}
          onEdit={handleEditCourse}
          onDelete={handleDeleteCourse}
          addButtonLabel="Create Course"
        />

        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={editingCourse ? "Edit Course" : "Create New Course"}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
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
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleModalClose}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
              >
                {editingCourse ? 'Update Course' : 'Create Course'}
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </DashboardLayout>
  );
} 