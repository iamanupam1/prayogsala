"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <MainLayout>
            <div className="flex min-h-[90vh] items-center justify-center p-4">
                <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
                    <h2 className="mb-4 text-center text-2xl font-semibold text-gray-700">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-500">
                        Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </MainLayout>
    );
}
