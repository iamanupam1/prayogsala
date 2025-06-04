'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/badge';
import { Modal } from '@/components/ui/Modal';

interface Student {
  _id: string;
  email: string;
  name: string;
  coursesEnrolled: {
    _id: string;
    title: string;
    progress: number;
    enabled: boolean;
  }[];
  joinedAt: string;
}

// Mock data for enrolled students
const mockStudents: Student[] = [
  {
    _id: '1',
    email: 'student1@example.com',
    name: 'John Doe',
    coursesEnrolled: [
      {
        _id: '1',
        title: 'Introduction to Web Development',
        progress: 75,
        enabled: true,
      },
      {
        _id: '2',
        title: 'Advanced JavaScript',
        progress: 30,
        enabled: true,
      },
    ],
    joinedAt: '2024-03-15T00:00:00.000Z',
  },
  {
    _id: '2',
    email: 'student2@example.com',
    name: 'Jane Smith',
    coursesEnrolled: [
      {
        _id: '1',
        title: 'Introduction to Web Development',
        progress: 45,
        enabled: true,
      },
    ],
    joinedAt: '2024-03-16T00:00:00.000Z',
  },
  {
    _id: '3',
    email: 'student3@example.com',
    name: 'Mike Johnson',
    coursesEnrolled: [
      {
        _id: '2',
        title: 'Advanced JavaScript',
        progress: 15,
        enabled: false,
      },
    ],
    joinedAt: '2024-03-17T00:00:00.000Z',
  },
];

export default function InstructorStudentsPage() {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingStudent(null);
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStudent) {
      const updatedStudents = students.map((s) => {
        if (s._id === editingStudent._id) {
          return {
            ...s,
            coursesEnrolled: s.coursesEnrolled.map((course) => ({
              ...course,
              enabled: !course.enabled,
            })),
          };
        }
        return s;
      });
      setStudents(updatedStudents);
    }
    handleModalClose();
  };

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    {
      key: 'coursesEnrolled',
      label: 'Enrolled Courses',
      render: (value: Student['coursesEnrolled'], student: Student) => value.length,
    },
    {
      key: 'coursesEnrolledProgress',
      label: 'Average Progress',
      render: (_: unknown, student: Student) => {
        const avgProgress =
          student.coursesEnrolled.reduce((sum, course) => sum + course.progress, 0) / 
          student.coursesEnrolled.length;
        return `${Math.round(avgProgress)}%`;
      },
    },
    {
      key: 'coursesEnrolledStatus',
      label: 'Status',
      render: (_: unknown, student: Student) => {
        const hasDisabledCourse = student.coursesEnrolled.some((course) => !course.enabled);
        return (
          <Badge variant={hasDisabledCourse ? 'destructive' : 'success'}>
            {hasDisabledCourse ? 'Restricted' : 'Active'}
          </Badge>
        );
      },
    },
    {
      key: 'joinedAt',
      label: 'Joined At',
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DataTable
          title="Enrolled Students"
          data={students}
          columns={columns}
          onEdit={handleEditStudent}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title="Manage Student Access"
        >
          {editingStudent && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{editingStudent.name}</h3>
                <p className="text-sm text-gray-500">{editingStudent.email}</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-700">Enrolled Courses</h4>
                {editingStudent.coursesEnrolled.map((course) => (
                  <div
                    key={course._id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                  >
                    <div>
                      <p className="font-medium">{course.title}</p>
                      <p className="text-sm text-gray-500">Progress: {course.progress}%</p>
                    </div>
                    <Badge variant={course.enabled ? 'success' : 'destructive'}>
                      {course.enabled ? 'Active' : 'Restricted'}
                    </Badge>
                  </div>
                ))}
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
                  Toggle Access
                </button>
              </div>
            </form>
          )}
        </Modal>
      </div>
    </DashboardLayout>
  );
} 