import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import blog1 from "../assets/English_vocabulary_learning_materials_2ec0d6bd.png";
import blog2 from "../assets/Multicultural_language_exchange_f692033d.png";
import blog3 from "../assets/English_course_achievement_celebration_30ed3251.png";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Building Your English Vocabulary",
    excerpt: "Discover proven strategies to expand your vocabulary and remember new words effectively through daily practice and context-based learning.",
    category: "Learning Tips",
    author: "Dr. Sarah Mitchell",
    date: "Nov 8, 2025",
    readTime: "5 min read",
    image: blog1,
  },
  {
    id: 2,
    title: "The Power of Cultural Exchange in Language Learning",
    excerpt: "Learn how understanding different cultures enhances your English learning journey and helps you communicate more effectively in global contexts.",
    category: "Culture",
    author: "James Anderson",
    date: "Nov 5, 2025",
    readTime: "7 min read",
    image: blog2,
  },
  {
    id: 3,
    title: "Celebrating Student Success: IELTS Achievement Stories",
    excerpt: "Read inspiring stories from students who achieved their dream IELTS scores and how our preparation course helped them succeed.",
    category: "Success Stories",
    author: "Emily Chen",
    date: "Nov 2, 2025",
    readTime: "6 min read",
    image: blog3,
  },
];

const categoryColors: Record<string, string> = {
  "Learning Tips": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  "Culture": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
  "Success Stories": "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
};

export default function BlogPreview() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Latest from Our Blog</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tips, insights, and stories to support your English learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover-elevate group" data-testid={`card-blog-${post.id}`}>
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${categoryColors[post.category]} border`}>
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <h3 className="font-semibold text-xl line-clamp-2 leading-tight">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="outline" size="lg" data-testid="button-view-all-blog">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
