import React from "react";
import CourseCard from "../../components/ui/CourseCard";
import courses from "@/Data/CoursesData";

const CourseSection = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Our Courses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseSection;
