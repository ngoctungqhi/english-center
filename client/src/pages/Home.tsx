import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonials from "@/components/Testimonials";
import Instructors from "@/components/Instructors";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCourses />
      <Testimonials />
      <Instructors />
      <BlogPreview />
    </div>
  );
}
