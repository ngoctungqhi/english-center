import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseLevel: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", courseLevel: "", message: "" });
  };

  return (
    <div>
      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for course inquiries, consultations, or any questions about learning English
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          data-testid="input-phone"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="courseLevel">Interested Course Level</Label>
                        <Select
                          value={formData.courseLevel}
                          onValueChange={(value) => setFormData({ ...formData, courseLevel: value })}
                        >
                          <SelectTrigger id="courseLevel" data-testid="select-course-level">
                            <SelectValue placeholder="Select a level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="business">Business English</SelectItem>
                            <SelectItem value="ielts">IELTS Preparation</SelectItem>
                            <SelectItem value="not-sure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        placeholder="Tell us about your learning goals, questions, or how we can help you..."
                        data-testid="input-message"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto" data-testid="button-submit">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Our Location</p>
                      <p className="text-sm text-muted-foreground">
                        123 Language Street<br />
                        Education City, EC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-sm text-muted-foreground">
                        info@excelenglish.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Office Hours</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Schedule a Free Consultation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Not sure which course is right for you? Book a free 30-minute consultation with our academic advisors.
                  </p>
                  <Button className="w-full" data-testid="button-book-consultation">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-muted-foreground" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
