'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DataTable } from '@/components/ui/DataTable';

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  course: {
    _id: string;
    title: string;
  };
  createdAt: string;
}

// Mock data
const mockInquiries: Inquiry[] = [
  {
    _id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    course: {
      _id: '1',
      title: 'Introduction to Web Development',
    },
    createdAt: '2024-03-20T00:00:00.000Z',
  },
  {
    _id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1987654321',
    course: {
      _id: '2',
      title: 'Advanced JavaScript',
    },
    createdAt: '2024-03-19T00:00:00.000Z',
  },
  {
    _id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    phone: '+1122334455',
    course: {
      _id: '3',
      title: 'React Fundamentals',
    },
    createdAt: '2024-03-18T00:00:00.000Z',
  },
];

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(mockInquiries);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    {
      key: 'course',
      label: 'Course',
      render: (value: Inquiry['course']) => value.title,
    },
    {
      key: 'createdAt',
      label: 'Created At',
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
  ];

  const handleDeleteInquiry = async (inquiry: Inquiry) => {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      setInquiries(inquiries.filter((i) => i._id !== inquiry._id));
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DataTable
          title="Course Inquiries"
          data={inquiries}
          columns={columns}
          onDelete={handleDeleteInquiry}
        />
      </div>
    </DashboardLayout>
  );
} 