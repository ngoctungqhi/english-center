import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-serif font-bold text-primary">Excel</span>
              <span className="text-xl font-serif font-bold">English</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Transform your English skills with expert instructors and proven teaching methods.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 hover-elevate active-elevate-2 rounded-md" data-testid="link-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover-elevate active-elevate-2 rounded-md" data-testid="link-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover-elevate active-elevate-2 rounded-md" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-courses">Our Courses</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-blog">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">Beginner English</span></li>
              <li><span className="text-sm text-muted-foreground">Intermediate English</span></li>
              <li><span className="text-sm text-muted-foreground">Advanced English</span></li>
              <li><span className="text-sm text-muted-foreground">Business English</span></li>
              <li><span className="text-sm text-muted-foreground">IELTS Preparation</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Language Street, Education City, EC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@excelenglish.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Excel English Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
