import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowLeft, ChevronLeft, ChevronRight, Headphones, Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import CharacterVoiceAssigner from '@/components/CharacterVoiceAssigner';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

// Mock data to simulate a book's content and characters
const MOCK_BOOK_CHAPTER = `
In the heart of the digital forest, where algorithms grew like ancient trees, lived a librarian named Elara. Her library was not of paper and ink, but of light and code. One day, a curious AI named 'Nexus' appeared. "Show me a story that feels real," Nexus requested, its voice a synthesized hum.

Elara smiled. "All stories are real, if you know how to read them." She pulled up a classic tale. "Let's start here."

The narrative unfolded, featuring a brave knight, 'Sir Gideon', and a wise dragon, 'Ignis'. Nexus processed the words, but felt nothing. "It is just data, Elara."

"Not yet," she replied. "We need to give them a voice." Elara opened the voice assignment panel. She chose a noble, deep tone for Sir Gideon and a resonant, ancient voice for Ignis. When the story played again, the characters sprang to life.

"I understand now," Nexus declared, its own voice filled with a newfound wonder. "The story was always there. It just needed to be heard."
`;

const MOCK_CHARACTERS = ['Elara', 'Nexus', 'Sir Gideon', 'Ignis'];

// A simple utility to chunk text into pages
const paginateText = (text: string, charsPerPage: number): string[] => {
  const pages = [];
  for (let i = 0; i < text.length; i += charsPerPage) {
    pages.push(text.substring(i, i + charsPerPage));
  }
  return pages;
};

type CharacterVoices = { [key: string]: string };

const ReaderInterface: React.FC = () => {
  console.log('ReaderInterface loaded');

  const [pages, setPages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(0);
  const [isVoiceAssignerOpen, setIsVoiceAssignerOpen] = useState(false);
  const [characterVoices, setCharacterVoices] = useState<CharacterVoices>({});

  useEffect(() => {
    // Simulate loading and paginating the book content
    setPages(paginateText(MOCK_BOOK_CHAPTER, 500));
  }, []);
  
  // Simulate audio playback progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);
  
  const totalPages = pages.length;

  const handleNextPage = useCallback(() => {
    setCurrentPage(current => Math.min(current + 1, totalPages - 1));
  }, [totalPages]);

  const handlePrevPage = useCallback(() => {
    setCurrentPage(current => Math.max(current - 1, 0));
  }, []);

  const togglePlayPause = () => {
    if (Object.keys(characterVoices).length < MOCK_CHARACTERS.length) {
      toast.warning("Please assign a voice to all characters first.");
      return;
    }
    setIsPlaying(prev => !prev);
    setPlaybackProgress(0); // Reset on play
  };

  const handleVoiceChange = (character: string, voice: string) => {
    setCharacterVoices(prev => ({ ...prev, [character]: voice }));
    toast.success(`Voice for ${character} set to ${voice}.`);
  };

  const areAllVoicesAssigned = useMemo(() => {
     return MOCK_CHARACTERS.every(char => characterVoices[char]);
  }, [characterVoices]);

  return (
    <div className="flex flex-col h-screen bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-200 font-serif">
      <Toaster />
      {/* Top Bar */}
      <header className="flex items-center justify-between p-4 border-b border-stone-200 dark:border-stone-700 shadow-sm flex-shrink-0">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/user-account-library">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Back to My Library</p>
          </TooltipContent>
        </Tooltip>
        <div className="text-center">
          <h1 className="text-lg font-semibold">The Algorithm's Fable</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">Chapter 1</p>
        </div>
        <Dialog open={isVoiceAssignerOpen} onOpenChange={setIsVoiceAssignerOpen}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Headphones className="h-5 w-5" />
                </Button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Audio & Voice Settings</p>
            </TooltipContent>
          </Tooltip>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Assign Character Voices</DialogTitle>
              <DialogDescription>
                Choose a unique voice for each character to create an immersive audio experience.
              </DialogDescription>
            </DialogHeader>
            <CharacterVoiceAssigner 
              characters={MOCK_CHARACTERS}
              onVoiceChange={handleVoiceChange}
              currentAssignments={characterVoices}
            />
          </DialogContent>
        </Dialog>
      </header>
      
      {/* Main Reading Area */}
      <main className="flex-grow p-6 sm:p-8 md:p-12 overflow-y-auto">
        <div className="max-w-prose mx-auto text-lg leading-relaxed">
          <p>{pages[currentPage]}</p>
        </div>
      </main>

      {/* Bottom Controls */}
      <footer className="p-4 border-t border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800/50 flex-shrink-0">
        {/* Pagination */}
        <div className="flex items-center justify-between mb-4">
          <Button variant="outline" onClick={handlePrevPage} disabled={currentPage === 0}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <span className="text-sm font-medium text-stone-600 dark:text-stone-300">
            Page {currentPage + 1} of {totalPages}
          </span>
          <Button variant="outline" onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        
        {/* Audio Player Controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" disabled>
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button 
              variant="default" 
              size="icon" 
              className="w-12 h-12"
              onClick={togglePlayPause}
              disabled={!areAllVoicesAssigned}
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            <Button variant="ghost" size="icon" disabled>
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>
          <Slider 
            value={[playbackProgress]} 
            onValueChange={(value) => setPlaybackProgress(value[0])}
            max={100} 
            step={1}
            className="flex-grow"
            disabled={!isPlaying && playbackProgress === 0}
          />
        </div>
      </footer>
    </div>
  );
};

export default ReaderInterface;