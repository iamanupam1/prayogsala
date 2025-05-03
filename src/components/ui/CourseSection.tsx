import React from "react";
import CourseCard from "./CourseCard";
import Button from "../shared/Button";
import courses from "@/Data/CoursesData"

const CourseSection = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Our Courses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.slice(0, 3).map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
                <div className="pt-8 mx-auto text-center">
                    <Button href="/courses" text="View All Courses" />
                </div>
            </div>
        </section>
    );
};

export default CourseSection;
