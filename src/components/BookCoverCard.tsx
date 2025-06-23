import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { BookOpen, ShoppingCart } from 'lucide-react';

interface BookCoverCardProps {
  bookId: string;
  title: string;
  imageUrl: string;
  isOwned?: boolean;
}

const BookCoverCard: React.FC<BookCoverCardProps> = ({
  bookId,
  title,
  imageUrl,
  isOwned = false,
}) => {
  console.log(`BookCoverCard loaded for: ${title}`);

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-md shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
      <AspectRatio ratio={2 / 3}>
        <img
          src={imageUrl}
          alt={`Cover of ${title}`}
          className="h-full w-full object-cover"
        />
      </AspectRatio>
      
      {/* Overlay for action buttons, appears on hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/70 p-4 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-center text-lg font-bold text-white drop-shadow-md">{title}</h3>
        
        <div className="flex flex-col gap-2 w-full max-w-[150px]">
          {isOwned ? (
            <Button asChild className="w-full">
              {/* The user owns the book, so they can read it. This links to the reader page. */}
              <Link to="/digital-reader-player" state={{ bookId }}>
                <BookOpen className="mr-2 h-4 w-4" />
                Read Online
              </Link>
            </Button>
          ) : (
            <Button asChild className="w-full">
              {/* The user doesn't own the book, so they can purchase it. This links to the detail page. */}
              <Link to="/book-detail" state={{ bookId }}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Purchase
              </Link>
            </Button>
          )}
          
          <Button variant="secondary" asChild className="w-full">
            <Link to="/book-detail" state={{ bookId }}>
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCoverCard;