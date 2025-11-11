import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";
import { Link } from "wouter";
import conversationImage from "@assets/generated_images/Conversation_practice_group_session_d843f581.png";
import grammarImage from "@assets/generated_images/English_grammar_study_materials_ec2e0868.png";
import businessImage from "@assets/generated_images/Business_English_presentation_b1f51fce.png";
import onlineImage from "@assets/generated_images/Online_English_learning_036d4bf1.png";
import testPrepImage from "@assets/generated_images/English_test_preparation_9f414785.png";
import vocabularyImage from "@assets/generated_images/English_vocabulary_learning_materials_2ec0d6bd.png";

const courses = [
  {
    id: 1,
    title: "Conversational English",
    level: "Beginner",
    description: "Build confidence in everyday conversations with interactive speaking practice and real-world scenarios.",
    duration: "12 weeks",
    schedule: "Mon & Wed, 6-8 PM",
    image: conversationImage,
  },
  {
    id: 2,
    title: "English Grammar Mastery",
    level: "Intermediate",
    description: "Master English grammar rules and improve your writing skills with comprehensive lessons and exercises.",
    duration: "10 weeks",
    schedule: "Tue & Thu, 7-9 PM",
    image: grammarImage,
  },
  {
    id: 3,
    title: "Business English",
    level: "Advanced",
    description: "Enhance your professional communication skills for meetings, presentations, and business correspondence.",
    duration: "8 weeks",
    schedule: "Flexible online",
    image: businessImage,
  },
  {
    id: 4,
    title: "Online English Learning",
    level: "All Levels",
    description: "Learn at your own pace with our comprehensive online platform featuring video lessons and live sessions.",
    duration: "16 weeks",
    schedule: "Self-paced + Live",
    image: onlineImage,
  },
  {
    id: 5,
    title: "IELTS Preparation",
    level: "Intermediate",
    description: "Comprehensive preparation for all four IELTS modules with expert strategies and practice tests.",
    duration: "10 weeks",
    schedule: "Sat & Sun, 10 AM-12 PM",
    image: testPrepImage,
  },
  {
    id: 6,
    title: "Vocabulary Building",
    level: "All Levels",
    description: "Expand your English vocabulary with proven techniques, context-based learning, and practical usage.",
    duration: "8 weeks",
    schedule: "Wed & Fri, 5-6:30 PM",
    image: vocabularyImage,
  },
];

const levelColors: Record<string, string> = {
  "Beginner": "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  "Intermediate": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  "Advanced": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
  "All Levels": "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
};

export default function FeaturedCourses() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Featured Courses</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our diverse range of English courses designed for all skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover-elevate group" data-testid={`card-course-${course.id}`}>
              <div className="aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="gap-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge className={`${levelColors[course.level]} border`} data-testid={`badge-level-${course.id}`}>
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{course.schedule}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/courses" className="w-full">
                  <Button variant="outline" className="w-full" data-testid={`button-learn-more-${course.id}`}>
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/courses">
            <Button size="lg" data-testid="button-view-all-courses">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
