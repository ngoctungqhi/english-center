import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Star } from "lucide-react";
import asianStudent from "../assets/Asian_female_student_portrait_2dbe8568.png";
import hispanicStudent from "../assets/Hispanic_male_student_portrait_8aab15a1.png";
import middleEasternStudent from "../assets/Middle_Eastern_student_portrait_48218a64.png";
import africanStudent from "../assets/African_male_student_portrait_596c5fc7.png";
import europeanStudent from "../assets/European_female_student_portrait_ed9fd9cc.png";

const testimonials = [
  {
    id: 1,
    name: "Yuki Tanaka",
    country: "Japan",
    course: "Business English",
    image: asianStudent,
    rating: 5,
    quote: "Excel English Academy transformed my career. The instructors are incredibly supportive and the curriculum is perfectly structured for professionals.",
  },
  {
    id: 2,
    name: "Carlos Rodriguez",
    country: "Mexico",
    course: "IELTS Preparation",
    image: hispanicStudent,
    rating: 5,
    quote: "I achieved my target IELTS score thanks to the comprehensive preparation course. The practice tests and feedback were invaluable.",
  },
  {
    id: 3,
    name: "Fatima Al-Hassan",
    country: "UAE",
    course: "Conversational English",
    image: middleEasternStudent,
    rating: 5,
    quote: "The conversational classes helped me build confidence quickly. Now I can communicate effectively in any situation.",
  },
  {
    id: 4,
    name: "Kwame Osei",
    country: "Ghana",
    course: "Grammar Mastery",
    image: africanStudent,
    rating: 5,
    quote: "The grammar course was exactly what I needed. Complex concepts were explained clearly and the exercises were very practical.",
  },
  {
    id: 5,
    name: "Anna Kowalski",
    country: "Poland",
    course: "Online Learning",
    image: europeanStudent,
    rating: 5,
    quote: "The online platform is fantastic! I could learn at my own pace while still getting live support from excellent teachers.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Student Success Stories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from our students who have transformed their English skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover-elevate" data-testid={`card-testimonial-${testimonial.id}`}>
              <CardContent className="p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm italic mb-6 text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.country} • {testimonial.course}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
