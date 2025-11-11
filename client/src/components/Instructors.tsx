import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import instructor1 from "@assets/generated_images/Female_English_instructor_headshot_34b83f47.png";
import instructor2 from "@assets/generated_images/Male_English_instructor_headshot_b4442039.png";
import instructor3 from "@assets/generated_images/Young_female_instructor_headshot_8b2d5b85.png";
import instructor4 from "@assets/generated_images/Senior_male_instructor_headshot_b3db0c48.png";

const instructors = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Business English & IELTS",
    experience: "15 years",
    certifications: ["PhD in Linguistics", "CELTA", "TESOL"],
    image: instructor1,
  },
  {
    id: 2,
    name: "James Anderson",
    specialty: "Grammar & Writing",
    experience: "12 years",
    certifications: ["MA in Education", "DELTA", "CPE"],
    image: instructor2,
  },
  {
    id: 3,
    name: "Emily Chen",
    specialty: "Conversational English",
    experience: "8 years",
    certifications: ["BA in English", "CELTA", "TEFL"],
    image: instructor3,
  },
  {
    id: 4,
    name: "Prof. Robert Williams",
    specialty: "Advanced Academic English",
    experience: "20 years",
    certifications: ["PhD in Education", "DELTA", "Cambridge Examiner"],
    image: instructor4,
  },
];

export default function Instructors() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Meet Our Expert Instructors</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn from qualified professionals with years of teaching experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="text-center hover-elevate" data-testid={`card-instructor-${instructor.id}`}>
              <CardContent className="p-6">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={instructor.image} alt={instructor.name} />
                  <AvatarFallback>{instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">{instructor.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{instructor.specialty}</p>
                <Badge variant="secondary" className="mb-4">
                  {instructor.experience} experience
                </Badge>
                <div className="space-y-1">
                  {instructor.certifications.map((cert, index) => (
                    <p key={index} className="text-xs text-muted-foreground">
                      {cert}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
