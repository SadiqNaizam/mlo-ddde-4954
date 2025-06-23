import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import BookDetailPage from "./pages/BookDetailPage";
import BookDiscoveryPage from "./pages/BookDiscoveryPage";
import DigitalReaderPlayerPage from "./pages/DigitalReaderPlayerPage";
import Homepage from "./pages/Homepage";
import UserAccountLibraryPage from "./pages/UserAccountLibraryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/book-detail" element={<BookDetailPage />} />
          <Route path="/book-discovery" element={<BookDiscoveryPage />} />
          <Route path="/digital-reader-player" element={<DigitalReaderPlayerPage />} />
          <Route path="/user-account-library" element={<UserAccountLibraryPage />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
