import { useState } from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Calendar, Clock, Search } from "lucide-react";
import blog1 from "../assets/English_vocabulary_learning_materials_2ec0d6bd.png";
import blog2 from "../assets/Multicultural_language_exchange_f692033d.png";
import blog3 from "../assets/English_course_achievement_celebration_30ed3251.png";
import blog4 from "../assets/Conversation_practice_group_session_d843f581.png";
import blog5 from "../assets/English_grammar_study_materials_ec2e0868.png";
import blog6 from "../assets/Business_English_presentation_b1f51fce.png";
import blogHero from "../assets/Blog_page_hero_background_b1bfed85.png";

const allPosts = [
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
  {
    id: 4,
    title: "Mastering English Conversations: From Basic to Fluent",
    excerpt: "Step-by-step guide to improving your conversational English skills, from understanding basic phrases to holding complex discussions.",
    category: "Learning Tips",
    author: "Emily Chen",
    date: "Oct 28, 2025",
    readTime: "8 min read",
    image: blog4,
  },
  {
    id: 5,
    title: "Common Grammar Mistakes and How to Avoid Them",
    excerpt: "Identify and correct the most common English grammar errors that even advanced learners make, with practical examples and exercises.",
    category: "Grammar",
    author: "James Anderson",
    date: "Oct 25, 2025",
    readTime: "6 min read",
    image: blog5,
  },
  {
    id: 6,
    title: "Business English: Essential Phrases for Professional Success",
    excerpt: "Master key business English expressions and etiquette to excel in meetings, presentations, emails, and professional networking.",
    category: "Business English",
    author: "Dr. Sarah Mitchell",
    date: "Oct 20, 2025",
    readTime: "9 min read",
    image: blog6,
  },
];

const categories = ["All", "Learning Tips", "Culture", "Success Stories", "Grammar", "Business English"];

const categoryColors: Record<string, string> = {
  "Learning Tips": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  "Culture": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
  "Success Stories": "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  "Grammar": "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
  "Business English": "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={blogHero}
            alt="English learning blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              English Learning Blog
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Tips, insights, and stories to support your English learning journey
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-blog"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background border-b sticky top-16 z-40 bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                data-testid={`button-category-${category.toLowerCase().replace(' ', '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover-elevate group flex flex-col" data-testid={`card-blog-${post.id}`}>
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
                  <CardHeader className="flex-grow">
                    <h3 className="font-semibold text-xl leading-tight">
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
                    <Button variant="outline" className="w-full" data-testid={`button-read-${post.id}`}>
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
