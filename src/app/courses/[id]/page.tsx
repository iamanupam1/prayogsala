// components
import { notFound } from "next/navigation";
import CourseCard from "@/components/ui/CourseCard";
import courses from "@/Data/CoursesData";
import Button from "@/components/shared/Button";

//shadcn ui
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// icons
import { MdAccessTime } from "react-icons/md";

export default function CourseDetailPage({params}) {
    
    const fieldId = params["id"];
    const course = courses.find((c) => c.id === fieldId.id);

    if (!course) return notFound();

    // Filter out the current course from the list of other courses
    const otherCourses = courses.filter((c) => c.id !== params.id);

    return (
        <div>
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10 z-0">
                <div className="max-w-6xl mx-auto flex flex-col gap-4 sm:flex-row mb-8">
                    <div>
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-60 object-cover"
                        />
                    </div>
                    <div className="pb-6 px-4">
                        <h1 className="text-3xl font-bold mt-4">{course.title}</h1>
                        <p className="text-lg text-gray-100 my-1">
                            {course.description}
                        </p>
                        <p className="text-base text-gray-100"><strong>Level :</strong> {course.level}</p>
                        <div className="flex gap-2 items-center text-gray-100 text-base mb-4 mt-1">
                            <MdAccessTime />
                            <p>{course.duration}</p>
                        </div>
                        <Button href="/inquiry" text="Inquiry Now" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto mt-10 flex flex-col items-start justify-center gap-4 sm:flex-row">
                <div className="bg-white py-6 px-4 md:flex-4/6">
                    <h2 className="mb-4 text-3xl">About this course</h2>
                    <p className="text-base leading-relaxed">{course.about}</p>

                    <h2 className="text-3xl mt-10 mb-6 text-gray-900 tracking-tight">
                        What you’ll learn in this course
                    </h2>

                    <Accordion type="single" collapsible className="space-y-4">
                        {course.syllabus.map((chp, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="text-xl font-medium text-gray-800 hover:no-underline">
                                    {chp.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc pl-6 text-lg leading-relaxed text-gray-700 space-y-1">
                                        {chp.items.map((item, idx) => (
                                            <li key={idx} className="text-base">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="bg-white py-6 px-4 md:flex-2/6 p-4">
                    <h2 className="text-2xl mb-4">Other courses</h2>
                    <div className="grid gap-8">
                        {otherCourses.slice(0, 2).map((course, index) => (
                            <CourseCard key={index} {...course} />
                        ))}
                    </div>
                    <div className="mt-12 m-4">
                        <Button href="/courses" text="View All Courses" />
                    </div>
                </div>
            </div>
        </div>
    );
}
