'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/badge';
import { Modal } from '@/components/ui/Modal';

interface User {
  _id: string;
  email: string;
  role: 'admin' | 'instructor' | 'student';
  enabled: boolean;
  createdAt: string;
}

// Mock data
const mockUsers: User[] = [
  {
    _id: '1',
    email: 'admin@example.com',
    role: 'admin',
    enabled: true,
    createdAt: '2024-03-20T00:00:00.000Z',
  },
  {
    _id: '2',
    email: 'instructor1@example.com',
    role: 'instructor',
    enabled: true,
    createdAt: '2024-03-19T00:00:00.000Z',
  },
  {
    _id: '3',
    email: 'instructor2@example.com',
    role: 'instructor',
    enabled: false,
    createdAt: '2024-03-18T00:00:00.000Z',
  },
  {
    _id: '4',
    email: 'student1@example.com',
    role: 'student',
    enabled: true,
    createdAt: '2024-03-17T00:00:00.000Z',
  },
  {
    _id: '5',
    email: 'student2@example.com',
    role: 'student',
    enabled: true,
    createdAt: '2024-03-16T00:00:00.000Z',
  },
];

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    email: '',
    role: 'student' as User['role'],
    password: '',
  });

  const columns = [
    { key: 'email', label: 'Email' },
    {
      key: 'role',
      label: 'Role',
      render: (value: string) => (
        <Badge
          variant={
            value === 'admin'
              ? 'destructive'
              : value === 'instructor'
              ? 'default'
              : 'secondary'
          }
        >
          {value}
        </Badge>
      ),
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

  const handleAddUser = () => {
    setIsCreateModalOpen(true);
  };

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    const user: User = {
      _id: (users.length + 1).toString(),
      ...newUser,
      enabled: true,
      createdAt: new Date().toISOString(),
    };
    setUsers([...users, user]);
    setNewUser({ email: '', role: 'student', password: '' });
    setIsCreateModalOpen(false);
  };

  const handleEditUser = (user: User) => {
    // TODO: Implement user editing
    console.log('Edit user:', user);
  };

  const handleDeleteUser = async (user: User) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter((u) => u._id !== user._id));
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DataTable
          title="Users Management"
          data={users}
          columns={columns}
          onAdd={handleAddUser}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
          addButtonLabel="Add User"
        />

        <Modal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          title="Create New User"
        >
          <form onSubmit={handleCreateUser} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                id="role"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value as User['role'] })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                required
              >
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
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
                Create User
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </DashboardLayout>
  );
} 