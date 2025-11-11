import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, BookOpen, Target, Heart } from "lucide-react";
import teamImage from "@assets/generated_images/English_teaching_team_collaboration_0005a2d4.png";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in language education with proven teaching methodologies.",
    },
    {
      icon: Heart,
      title: "Student-Centered",
      description: "Every lesson is tailored to meet individual learning goals and pace.",
    },
    {
      icon: Globe,
      title: "Cultural Diversity",
      description: "We celebrate diversity and create an inclusive learning environment for all.",
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "We combine traditional teaching methods with modern technology and techniques.",
    },
  ];

  const milestones = [
    { year: "2010", event: "Excel English Academy Founded" },
    { year: "2013", event: "Expanded to Online Learning Platform" },
    { year: "2016", event: "Reached 10,000 Students Worldwide" },
    { year: "2019", event: "Opened International Branch Offices" },
    { year: "2023", event: "Achieved 95% Student Success Rate" },
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "50,000+", label: "Students Taught" },
    { number: "95%", label: "Success Rate" },
    { number: "30+", label: "Expert Instructors" },
  ];

  return (
    <div>
      <section className="relative py-20 md:py-28 overflow-hidden bg-card">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={teamImage}
            alt="Excel English teaching team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
            About Excel English Academy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering students worldwide to achieve fluency and confidence in English through innovative teaching and personalized support.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-elevate" data-testid={`card-stat-${index}`}>
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Mission</h2>
          </div>
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Excel English Academy, we believe that language learning is more than just memorizing vocabulary and grammar rules. It's about opening doors to new opportunities, connecting with people from different cultures, and gaining the confidence to express yourself in any situation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to provide world-class English education that is accessible, effective, and tailored to each student's unique needs. We combine proven teaching methodologies with innovative technology to create an engaging and supportive learning environment where every student can thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-elevate" data-testid={`card-value-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              Milestones that shaped our academy
            </p>
          </div>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group"
                data-testid={`milestone-${index}`}
              >
                <div className="w-24 flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <div className="h-full pl-6 border-l-2 border-border pb-6">
                    <div className="bg-primary w-3 h-3 rounded-full -ml-[25px] mb-2" />
                    <p className="text-lg font-medium">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Teaching Methodology</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-methodology-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-md flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Interactive Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Small class sizes ensure personalized attention and maximum speaking practice through engaging activities and real-world scenarios.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-elevate" data-testid="card-methodology-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-md flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Proven Curriculum</h3>
                <p className="text-sm text-muted-foreground">
                  Our curriculum is based on internationally recognized standards and continuously updated to reflect modern language use.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-elevate" data-testid="card-methodology-3">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-md flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Cultural Immersion</h3>
                <p className="text-sm text-muted-foreground">
                  Learn English in cultural context through authentic materials, discussions, and exposure to diverse perspectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
