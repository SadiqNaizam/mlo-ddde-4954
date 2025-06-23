import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page-Specific Components
import BookCoverCard from '@/components/BookCoverCard';
import BookshelfCarousel from '@/components/BookshelfCarousel';

// shadcn/ui Components for Layout and Controls
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@/components/ui/separator';

// Mock data for the main discovery grid
const discoveryBooks = [
  { bookId: 'b1', title: 'The Shadow of the Wind', imageUrl: 'https://via.placeholder.com/300x450/34495E/FFFFFF?text=The+Shadow+of+the+Wind', isOwned: true },
  { bookId: 'b2', title: 'Kafka on the Shore', imageUrl: 'https://via.placeholder.com/300x450/C0392B/FFFFFF?text=Kafka+on+the+Shore', isOwned: false },
  { bookId: 'b3', title: 'Dune', imageUrl: 'https://via.placeholder.com/300x450/D35400/FFFFFF?text=Dune', isOwned: true },
  { bookId: 'b4', title: 'The Name of the Wind', imageUrl: 'https://via.placeholder.com/300x450/27AE60/FFFFFF?text=The+Name+of+the+Wind', isOwned: false },
  { bookId: 'b5', title: 'Circe', imageUrl: 'https://via.placeholder.com/300x450/8E44AD/FFFFFF?text=Circe', isOwned: false },
  { bookId: 'b6', title: 'Project Hail Mary', imageUrl: 'https://via.placeholder.com/300x450/2C3E50/FFFFFF?text=Project+Hail+Mary', isOwned: true },
  { bookId: 'b7', title: 'American Gods', imageUrl: 'https://via.placeholder.com/300x450/7F8C8D/FFFFFF?text=American+Gods', isOwned: false },
  { bookId: 'b8', title: 'The Hobbit', imageUrl: 'https://via.placeholder.com/300x450/16A085/FFFFFF?text=The+Hobbit', isOwned: true },
  { bookId: 'b9', title: 'A Gentleman in Moscow', imageUrl: 'https://via.placeholder.com/300x450/F1C40F/000000?text=A+Gentleman+in+Moscow', isOwned: false },
  { bookId: 'b10', title: 'The Martian', imageUrl: 'https://via.placeholder.com/300x450/E67E22/FFFFFF?text=The+Martian', isOwned: false },
  { bookId: 'b11', title: 'Exhalation', imageUrl: 'https://via.placeholder.com/300x450/2980B9/FFFFFF?text=Exhalation', isOwned: true },
  { bookId: 'b12', title: 'Hyperion', imageUrl: 'https://via.placeholder.com/300x450/9B59B6/FFFFFF?text=Hyperion', isOwned: false },
];


const BookDiscoveryPage = () => {
    console.log('BookDiscoveryPage loaded');

    return (
        <div className="flex flex-col min-h-screen bg-stone-50">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                {/* Breadcrumb Navigation */}
                <Breadcrumb className="mb-6">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Browse</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                
                {/* Page Title and Sorting Controls */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                    <h1 className="text-4xl font-bold font-serif text-stone-800">Browse Books</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-stone-600">Sort by:</span>
                        <Select defaultValue="relevance">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="relevance">Relevance</SelectItem>
                                <SelectItem value="newest">Newest</SelectItem>
                                <SelectItem value="popularity">Popularity</SelectItem>
                                <SelectItem value="rating">Average Rating</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Main Grid of Books */}
                <section>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
                        {discoveryBooks.map(book => (
                            <BookCoverCard
                                key={book.bookId}
                                bookId={book.bookId}
                                title={book.title}
                                imageUrl={book.imageUrl}
                                isOwned={book.isOwned}
                            />
                        ))}
                    </div>
                </section>
                
                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>

                <Separator className="my-12" />

                {/* Featured Carousel Section */}
                <section>
                    <BookshelfCarousel title="Curated Collections" />
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default BookDiscoveryPage;