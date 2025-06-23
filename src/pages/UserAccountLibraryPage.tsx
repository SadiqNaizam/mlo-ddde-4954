import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookCoverCard from '@/components/BookCoverCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Library, Heart, User } from 'lucide-react';

// Mock data for the user's library
const myLibraryBooks = [
  { id: '1', bookId: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', imageUrl: 'https://via.placeholder.com/300x450/4A2E2C/FFFFFF?text=The+Great+Gatsby', isOwned: true },
  { id: '2', bookId: '2', title: '1984', author: 'George Orwell', imageUrl: 'https://via.placeholder.com/300x450/2C3E50/FFFFFF?text=1984', isOwned: true },
  { id: '3', bookId: '3', title: 'To Kill a Mockingbird', author: 'Harper Lee', imageUrl: 'https://via.placeholder.com/300x450/8D6E63/FFFFFF?text=To+Kill+a+Mockingbird', isOwned: true },
];

// Mock data for the user's wishlist
const myWishlistBooks = [
  { id: '4', bookId: '4', title: 'Pride and Prejudice', author: 'Jane Austen', imageUrl: 'https://via.placeholder.com/300x450/5D4037/FFFFFF?text=Pride+and+Prejudice', isOwned: false },
  { id: '5', bookId: '5', title: 'The Catcher in the Rye', author: 'J.D. Salinger', imageUrl: 'https://via.placeholder.com/300x450/795548/FFFFFF?text=The+Catcher+in+the+Rye', isOwned: false },
  { id: '8', bookId: '8', title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', imageUrl: 'https://via.placeholder.com/300x450/6D4C41/FFFFFF?text=Lord+of+the+Rings', isOwned: false },
  { id: '7', bookId: '7', title: 'War and Peace', author: 'Leo Tolstoy', imageUrl: 'https://via.placeholder.com/300x450/A1887F/FFFFFF?text=War+and+Peace', isOwned: false },
];

const UserAccountLibraryPage = () => {
    console.log('UserAccountLibraryPage loaded');

    return (
        <div className="flex flex-col min-h-screen bg-stone-50 text-stone-800">
            <Header />
            <main className="flex-1 container py-8 md:py-12 px-4">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold font-serif text-stone-800">
                        My Account
                    </h1>
                    <p className="text-muted-foreground mt-2">Manage your books, wishlist, and personal settings.</p>
                </div>
                
                <Tabs defaultValue="library" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 max-w-md">
                        <TabsTrigger value="library"><Library className="w-4 h-4 mr-2" />My Library</TabsTrigger>
                        <TabsTrigger value="wishlist"><Heart className="w-4 h-4 mr-2" />Wishlist</TabsTrigger>
                        <TabsTrigger value="settings"><User className="w-4 h-4 mr-2" />Settings</TabsTrigger>
                    </TabsList>
                    
                    {/* My Library Tab */}
                    <TabsContent value="library" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>My Book Collection</CardTitle>
                                <CardDescription>All the books you have purchased. Select a book to start reading.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {myLibraryBooks.length > 0 ? (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                                        {myLibraryBooks.map((book) => (
                                            <BookCoverCard
                                                key={book.id}
                                                bookId={book.bookId}
                                                title={book.title}
                                                imageUrl={book.imageUrl}
                                                isOwned={book.isOwned}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <p className="text-muted-foreground">Your library is empty.</p>
                                        <Button variant="link" asChild><a href="/book-discovery">Browse books to get started</a></Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    
                    {/* Wishlist Tab */}
                    <TabsContent value="wishlist" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>My Wishlist</CardTitle>
                                <CardDescription>Books you want to read next.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {myWishlistBooks.length > 0 ? (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                                        {myWishlistBooks.map((book) => (
                                            <BookCoverCard
                                                key={book.id}
                                                bookId={book.bookId}
                                                title={book.title}
                                                imageUrl={book.imageUrl}
                                                isOwned={book.isOwned}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <p className="text-muted-foreground">Your wishlist is empty.</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    
                    {/* Settings Tab */}
                    <TabsContent value="settings" className="mt-6">
                        <Card className="max-w-2xl mx-auto">
                            <CardHeader>
                                <CardTitle>Account Settings</CardTitle>
                                <CardDescription>Make changes to your personal information.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" defaultValue="Alex Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" defaultValue="alex.doe@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">New Password</Label>
                                    <Input id="password" type="password" placeholder="Enter a new password (optional)" />
                                </div>
                                <Button>Save Changes</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
            <Footer />
        </div>
    );
};

export default UserAccountLibraryPage;