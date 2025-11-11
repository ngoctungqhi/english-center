import { Button } from "../components/ui/button";
import { Link } from "wouter";
import heroImage from "../assets/Diverse_students_learning_English_99888941.png";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Diverse students learning English together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
          Master English with<br />Excel English Academy
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">
          Transform your language skills with expert instructors, personalized learning paths, and proven results. Join thousands of successful students worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="text-base px-8" data-testid="button-hero-consultation">
              Sign Up for Free Consultation
            </Button>
          </Link>
          <Link href="/courses">
            <Button size="lg" variant="outline" className="text-base px-8 backdrop-blur-sm bg-white/10 hover:bg-white/20 border-white/30 text-white" data-testid="button-hero-courses">
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
