import React from "react";
import Link from "next/link";

// icons
import { MdAccessTime } from "react-icons/md";

interface CourseProps {
    id: string;
    title: string;
    description: string;
    image: string;
    duration: string;
}

const CourseCard: React.FC<CourseProps> = ({ id, title, description, image, duration }) => {
    return (
        <Link href={`/courses/${id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition">
                <img src={image} alt={title} className="w-full h-40 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-3">{description}</p>
                    <div className="flex gap-2 items-center text-gray-600 text-sm mt-2">
                        <MdAccessTime />
                        <p>{duration}</p>
                    </div>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        View Details
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;
