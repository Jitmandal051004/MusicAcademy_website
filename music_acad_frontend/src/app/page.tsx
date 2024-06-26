import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased overflow-hidden">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs /> 
      <MusicSchoolTestimonial />
    </main>
  );
}
