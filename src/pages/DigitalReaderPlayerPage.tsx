import React from 'react';
import ReaderInterface from '@/components/ReaderInterface';

/**
 * DigitalReaderPlayerPage Component
 * 
 * This page provides the core immersive reading and listening experience. 
 * It is designed to be a clean, distraction-free interface that focuses solely on the book's content.
 * The primary functionality is encapsulated within the `ReaderInterface` component, which handles
 * text rendering, pagination, and the innovative text-to-speech audio controls.
 */
const DigitalReaderPlayerPage: React.FC = () => {
  console.log('DigitalReaderPlayerPage loaded');

  return (
    // The ReaderInterface component is designed to be a full-page experience,
    // so no additional layout components like a global header or footer are needed here
    // to maintain the "distraction-free" goal.
    <div className="w-full h-full bg-stone-50">
      <ReaderInterface />
    </div>
  );
};

export default DigitalReaderPlayerPage;