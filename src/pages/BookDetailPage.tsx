import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn/ui Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Icons
import { ShoppingCart, BookOpen, PlayCircle, Star } from 'lucide-react';

// Mock data for a single book. In a real app, this would come from an API based on a URL parameter.
const bookData = {
  id: 'b1',
  title: "The Algorithm's Fable",
  author: 'Elara Vance',
  coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop',
  synopsis: "In the heart of the digital forest, where algorithms grew like ancient trees, lived a librarian named Elara. Her library was not of paper and ink, but of light and code. This is the tale of her quest to find the soul of a story within the machine.",
  reviews: [
    { user: 'DigitalReader', rating: 5, comment: "A thought-provoking and beautifully written story. A must-read for the modern age!" },
    { user: 'Bookworm_82', rating: 4, comment: "An interesting concept, though I wished for more character development for Nexus." },
  ],
  price: '$14.99',
  isOwned: true, // To show the 'Read Online' button
};

const BookDetailPage: React.FC = () => {
  console.log('BookDetailPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Header />
      <main className="flex-grow container px-4 py-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/book-discovery">Books</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{bookData.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column: Book Cover */}
          <div className="md:col-span-1">
            <Card className="overflow-hidden shadow-lg">
                <img
                  src={bookData.coverUrl}
                  alt={`Cover of ${bookData.title}`}
                  className="h-full w-full object-cover"
                />
            </Card>
          </div>

          {/* Right Column: Book Details */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h1 className="text-4xl font-bold font-serif text-stone-800">{bookData.title}</h1>
            <p className="text-xl text-stone-600">by {bookData.author}</p>
            <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-bold">4.5</span>
                <span className="text-sm text-muted-foreground">({bookData.reviews.length} reviews)</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              {bookData.isOwned ? (
                 <Button asChild size="lg">
                    <Link to="/digital-reader-player" state={{ bookId: bookData.id }}>
                        <BookOpen className="mr-2 h-5 w-5" />
                        Read Online
                    </Link>
                 </Button>
              ) : (
                <Button size="lg">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Purchase for {bookData.price}
                </Button>
              )}
               <Button size="lg" variant="outline">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Listen to Sample
               </Button>
            </div>
            
            {/* Accordion for Synopsis and Reviews */}
            <div className="pt-6">
                <Accordion type="single" collapsible defaultValue="synopsis" className="w-full">
                    <AccordionItem value="synopsis">
                        <AccordionTrigger className="text-xl font-semibold">Synopsis</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                            {bookData.synopsis}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="reviews">
                        <AccordionTrigger className="text-xl font-semibold">User Reviews</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-6">
                                {bookData.reviews.map((review, index) => (
                                    <div key={index} className="border-b pb-4 last:border-b-0">
                                        <div className="flex items-center gap-4 mb-2">
                                            <p className="font-semibold">{review.user}</p>
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetailPage;