
import Hero from "@/components/ui/Hero";
import CourseSection from "@/components/ui/CourseSection";
import VideoTutorial from "@/components/ui/VideoTutorial";
import TestimonialSection from "@/components/ui/TestimonialSection";
import LearnSection from "@/components/ui/Features";
import Cta from "@/components/ui/Cta";
import { MainLayout } from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <LearnSection />
      <CourseSection />
      <VideoTutorial />
      <TestimonialSection />
      <Cta/>
    </MainLayout>
  );
}
