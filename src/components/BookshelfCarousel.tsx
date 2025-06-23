import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BookCoverCard from "@/components/BookCoverCard"; // Assuming this component exists

// Define the shape of a book object for type safety
export interface Book {
  id: string;
  slug: string; // For routing to the book's detail page
  title: string;
  coverUrl: string;
  author: string;
}

// Mock data to display in the carousel for preview purposes
const mockBooks: Book[] = [
  { id: '1', slug: 'the-great-gatsby', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'https://via.placeholder.com/300x450/4A2E2C/FFFFFF?text=The+Great+Gatsby' },
  { id: '2', slug: '1984', title: '1984', author: 'George Orwell', coverUrl: 'https://via.placeholder.com/300x450/2C3E50/FFFFFF?text=1984' },
  { id: '3', slug: 'to-kill-a-mockingbird', title: 'To Kill a Mockingbird', author: 'Harper Lee', coverUrl: 'https://via.placeholder.com/300x450/8D6E63/FFFFFF?text=To+Kill+a+Mockingbird' },
  { id: '4', slug: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: 'https://via.placeholder.com/300x450/5D4037/FFFFFF?text=Pride+and+Prejudice' },
  { id: '5', slug: 'the-catcher-in-the-rye', title: 'The Catcher in the Rye', author: 'J.D. Salinger', coverUrl: 'https://via.placeholder.com/300x450/795548/FFFFFF?text=The+Catcher+in+the+Rye' },
  { id: '6', slug: 'moby-dick', title: 'Moby Dick', author: 'Herman Melville', coverUrl: 'https://via.placeholder.com/300x450/3E2723/FFFFFF?text=Moby+Dick' },
  { id: '7', slug: 'war-and-peace', title: 'War and Peace', author: 'Leo Tolstoy', coverUrl: 'https://via.placeholder.com/300x450/A1887F/FFFFFF?text=War+and+Peace' },
  { id: '8', slug: 'the-lord-of-the-rings', title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/300x450/6D4C41/FFFFFF?text=Lord+of+the+Rings' },
];

// Define the props for the BookshelfCarousel component
interface BookshelfCarouselProps {
  title: string;
  books?: Book[];
}

const BookshelfCarousel: React.FC<BookshelfCarouselProps> = ({ title, books = mockBooks }) => {
  console.log('BookshelfCarousel loaded for collection:', title);

  if (!books || books.length === 0) {
    return (
      <div className="w-full py-8">
        <h2 className="text-3xl font-bold text-stone-700 mb-4 px-4">{title}</h2>
        <p className="text-center text-stone-500">No books to display in this collection.</p>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <h2 className="text-3xl font-bold text-stone-800 mb-6 px-4 font-serif">{title}</h2>
      
      {/* Bookshelf aesthetic container */}
      <div className="bg-yellow-950/70 rounded-lg p-6 shadow-inner" style={{ backgroundImage: 'url("/wood-texture.png")', backgroundSize: 'cover' }}>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {books.map((book) => (
              <CarouselItem key={book.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-[14%]">
                <div className="p-1">
                  {/* The BookCoverCard is assumed to exist and handle its own state and interactions */}
                  <BookCoverCard
                    id={book.id}
                    slug={book.slug}
                    title={book.title}
                    author={book.author}
                    coverUrl={book.coverUrl}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
      
       {/* Shelf bottom edge for 3D effect */}
      <div className="h-4 bg-yellow-900 rounded-b-lg shadow-2xl -mt-2 mx-2"></div>
    </div>
  );
};

export default BookshelfCarousel;