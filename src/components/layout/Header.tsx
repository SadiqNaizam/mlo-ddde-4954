import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BookOpen, Search, User, Menu, Library } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-primary ${isActive ? 'text-primary font-semibold' : 'text-muted-foreground'}`;

  const navLinks = (
    <>
      <NavLink to="/book-discovery" className={navLinkClasses}>
        Browse
      </NavLink>
      <NavLink to="/user-account-library" className={navLinkClasses}>
        My Library
      </NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium mt-6">
                <SheetClose asChild>
                  <Link to="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <BookOpen className="h-6 w-6" />
                    <span className="sr-only">The Reading Room</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                    <NavLink to="/book-discovery" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground"}>
                        Browse
                    </NavLink>
                </SheetClose>
                <SheetClose asChild>
                    <NavLink to="/user-account-library" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground"}>
                        My Library
                    </NavLink>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Logo & Nav */}
        <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
                <BookOpen className="h-6 w-6" />
                <span>The Reading Room</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
                {navLinks}
            </nav>
        </div>

        {/* Central Search Bar */}
        <div className="flex flex-1 items-center justify-center px-4 md:px-8">
            <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search for books, authors, or genres..." className="pl-9 w-full" />
            </div>
        </div>
        
        {/* User Account */}
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  );
};

export default Header;