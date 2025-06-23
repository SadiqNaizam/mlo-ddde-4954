import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookshelfCarousel from '@/components/BookshelfCarousel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Homepage = () => {
  console.log('Homepage loaded');

  // Placeholder data for carousels. In a real app, this would be fetched.
  // The component has its own mock data, but we could pass different sets if we had them.
  const newArrivals = [
      { id: '1', slug: 'the-great-gatsby', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=300&auto=format&fit=crop' },
      { id: '2', slug: '1984', title: '1984', author: 'George Orwell', coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=300&auto=format&fit=crop' },
      { id: '3', slug: 'to-kill-a-mockingbird', title: 'To Kill a Mockingbird', author: 'Harper Lee', coverUrl: 'https://images.unsplash.com/photo-1589879542138-1a49a1d4b6b7?q=80&w=300&auto=format&fit=crop' },
      { id: '4', slug: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: 'https://images.unsplash.com/photo-1619894982466-f5555c4a5203?q=80&w=300&auto=format&fit=crop' },
      { id: '5', slug: 'the-catcher-in-the-rye', title: 'The Catcher in the Rye', author: 'J.D. Salinger', coverUrl: 'https://images.unsplash.com/photo-1593340316413-17b5bf3b3a4a?q=80&w=300&auto=format&fit=crop' },
      { id: '6', slug: 'moby-dick', title: 'Moby Dick', author: 'Herman Melville', coverUrl: 'https://images.unsplash.com/photo-1572627995538-80a566ee693b?q=80&w=300&auto=format&fit=crop' },
  ];

  const bestsellers = [
      { id: '7', slug: 'war-and-peace', title: 'War and Peace', author: 'Leo Tolstoy', coverUrl: 'https://images.unsplash.com/photo-1543623508-0158a48d8892?q=80&w=300&auto=format&fit=crop' },
      { id: '8', slug: 'the-lord-of-the-rings', title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', coverUrl: 'https://images.unsplash.com/photo-1600189261867-30e5a40b9918?q=80&w=300&auto=format&fit=crop' },
      { id: '1', slug: 'the-great-gatsby', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=300&auto=format&fit=crop' },
      { id: '4', slug: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: 'https://images.unsplash.com/photo-1619894982466-f5555c4a5203?q=80&w=300&auto=format&fit=crop' },
      { id: '2', slug: '1984', title: '1984', author: 'George Orwell', coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=300&auto=format&fit=crop' },
      { id: '5', slug: 'the-catcher-in-the-rye', title: 'The Catcher in the Rye', author: 'J.D. Salinger', coverUrl: 'https://images.unsplash.com/photo-1593340316413-17b5bf3b3a4a?q=80&w=300&auto=format&fit=crop' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative py-24 sm:py-32 flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1528&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight drop-shadow-lg">
              Welcome to The Reading Room
            </h1>
            <p className="mt-6 text-lg max-w-2xl mx-auto text-stone-200 drop-shadow">
              Discover your next great read. A library of classics and new worlds awaits,
              ready to be heard in a way you've never experienced before.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link to="/book-discovery">
                  <Search className="mr-2 h-5 w-5" />
                  Explore the Collection
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Bookshelf Carousels Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          <BookshelfCarousel title="New Arrivals" books={newArrivals} />
          <BookshelfCarousel title="Bestsellers" books={bestsellers} />
          <BookshelfCarousel title="Curated Collections" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;