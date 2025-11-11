import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Clock, Users, BookOpen, DollarSign } from "lucide-react";
import conversationImage from "../assets/Conversation_practice_group_session_d843f581.png";
import grammarImage from "../assets/English_grammar_study_materials_ec2e0868.png";
import businessImage from "../assets/Business_English_presentation_b1f51fce.png";
import onlineImage from "../assets/Online_English_learning_036d4bf1.png";
import testPrepImage from "../assets/English_test_preparation_9f414785.png";
import vocabularyImage from "../assets/English_vocabulary_learning_materials_2ec0d6bd.png";
import multiculturalImage from "../assets/Multicultural_language_exchange_f692033d.png";
import coursesHero from "../assets/Courses_page_hero_background_813fd7a2.png";

const allCourses = [
  {
    id: 1,
    title: "Conversational English - Beginner",
    level: "Beginner",
    description: "Build confidence in everyday conversations with interactive speaking practice, pronunciation drills, and real-world scenarios. Perfect for those starting their English journey.",
    duration: "12 weeks",
    schedule: "Mon & Wed, 6-8 PM",
    price: "$299",
    instructor: "Emily Chen",
    maxStudents: "12 students",
    image: conversationImage,
  },
  {
    id: 2,
    title: "English Grammar Mastery",
    level: "Intermediate",
    description: "Master English grammar rules, improve your writing skills, and gain confidence in using complex sentence structures through comprehensive lessons and practical exercises.",
    duration: "10 weeks",
    schedule: "Tue & Thu, 7-9 PM",
    price: "$349",
    instructor: "James Anderson",
    maxStudents: "15 students",
    image: grammarImage,
  },
  {
    id: 3,
    title: "Business English Professional",
    level: "Advanced",
    description: "Enhance your professional communication skills for meetings, presentations, negotiations, and business correspondence. Ideal for career advancement.",
    duration: "8 weeks",
    schedule: "Flexible online",
    price: "$449",
    instructor: "Dr. Sarah Mitchell",
    maxStudents: "10 students",
    image: businessImage,
  },
  {
    id: 4,
    title: "Online English Learning Platform",
    level: "All Levels",
    description: "Learn at your own pace with our comprehensive online platform featuring video lessons, interactive exercises, live sessions, and personalized feedback.",
    duration: "16 weeks",
    schedule: "Self-paced + Live",
    price: "$399",
    instructor: "Multiple Instructors",
    maxStudents: "Unlimited",
    image: onlineImage,
  },
  {
    id: 5,
    title: "IELTS Preparation Intensive",
    level: "Intermediate",
    description: "Comprehensive preparation for all four IELTS modules (Reading, Writing, Listening, Speaking) with expert strategies, practice tests, and personalized feedback.",
    duration: "10 weeks",
    schedule: "Sat & Sun, 10 AM-12 PM",
    price: "$499",
    instructor: "Dr. Sarah Mitchell",
    maxStudents: "15 students",
    image: testPrepImage,
  },
  {
    id: 6,
    title: "Vocabulary Building Workshop",
    level: "All Levels",
    description: "Expand your English vocabulary using proven memory techniques, context-based learning, and practical application in speaking and writing.",
    duration: "8 weeks",
    schedule: "Wed & Fri, 5-6:30 PM",
    price: "$249",
    instructor: "Emily Chen",
    maxStudents: "20 students",
    image: vocabularyImage,
  },
  {
    id: 7,
    title: "Advanced Writing & Composition",
    level: "Advanced",
    description: "Develop sophisticated writing skills for academic and professional contexts. Learn advanced techniques for essays, reports, and creative writing.",
    duration: "12 weeks",
    schedule: "Tue & Thu, 6-8 PM",
    price: "$429",
    instructor: "James Anderson",
    maxStudents: "12 students",
    image: grammarImage,
  },
  {
    id: 8,
    title: "Cultural English & Communication",
    level: "Intermediate",
    description: "Explore English through cultural contexts, idioms, and real-world communication scenarios. Perfect for those planning to study or work in English-speaking countries.",
    duration: "10 weeks",
    schedule: "Mon & Wed, 7-9 PM",
    price: "$379",
    instructor: "Multiple Instructors",
    maxStudents: "15 students",
    image: multiculturalImage,
  },
  {
    id: 9,
    title: "Conversational English - Intermediate",
    level: "Intermediate",
    description: "Take your speaking skills to the next level with advanced conversations, debates, presentations, and fluency-building activities.",
    duration: "12 weeks",
    schedule: "Tue & Thu, 6-8 PM",
    price: "$329",
    instructor: "Emily Chen",
    maxStudents: "12 students",
    image: conversationImage,
  },
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const levelColors: Record<string, string> = {
  "Beginner": "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  "Intermediate": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  "Advanced": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
  "All Levels": "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
};

export default function Courses() {
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredCourses = selectedLevel === "All Levels"
    ? allCourses
    : allCourses.filter(course => course.level === selectedLevel);

  return (
    <div>
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={coursesHero}
            alt="English courses classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Our Courses
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Comprehensive English programs designed for every skill level and learning goal
          </p>
        </div>
      </section>

      <section className="py-12 bg-background border-b sticky top-16 z-40 bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {levels.map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                onClick={() => setSelectedLevel(level)}
                data-testid={`button-filter-${level.toLowerCase().replace(' ', '-')}`}
              >
                {level}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover-elevate group flex flex-col" data-testid={`card-course-${course.id}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="gap-2 flex-grow">
                  <div className="flex items-center justify-between gap-2">
                    <Badge className={`${levelColors[course.level]} border`}>
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-primary">
                      <DollarSign className="w-4 h-4" />
                      <span>{course.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" data-testid={`button-enroll-${course.id}`}>
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Not Sure Which Course Is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation with our academic advisors to find the perfect course for your goals and current level.
          </p>
          <Button size="lg" data-testid="button-schedule-consultation">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
