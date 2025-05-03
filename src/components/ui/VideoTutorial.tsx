import React from "react";
import Button from '@/components/shared/Button'

const VideoTutorial = () => {
    return (
        <section className="py-16 text-center bg-[#e8efff]">
            <div className="max-w-6xl mx-auto rounded-md px-4">
                <div className="bg-[#ffffff] p-8 flex flex-col sm:flex-row gap-8 rounded-lg shadow-xl">
                    {/* Video Section */}
                    <div className="flex-1">
                        <video className="w-full rounded-lg shadow-lg" controls autoPlay loop muted playsInline>
                            <source src="/video/course1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 flex flex-col items-center justify-center space-y-6 sm:space-y-4 sm:text-left">
                        <h2 className="text-3xl font-bold text-gray-800">Watch Our Free Training</h2>
                        <p className="text-gray-600 text-lg">
                            Get a sneak peek of our courses with this tutorial.
                        </p>
                        <Button
                            text="Find out more"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoTutorial;
