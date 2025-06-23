import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

// Mock data for available voices. In a real app, this would come from a config or API.
const availableVoices = [
  { id: 'voice_0', name: 'Default Narrator' },
  { id: 'voice_1', name: 'Elder Sage (Deep, Calm)' },
  { id: 'voice_2', name: 'Young Heroine (Bright, Clear)' },
  { id: 'voice_3', name: 'Gruff Warrior (Gravelly)' },
  { id: 'voice_4', 'name': 'Wise Queen (Elegant)' },
  { id: 'voice_5', 'name': 'Mischievous Trickster (Light)' },
];

export interface CharacterVoiceAssignments {
  [characterName: string]: string; // Maps character name to voice ID
}

interface CharacterVoiceAssignerProps {
  /** An array of detected character names from the text. */
  characters: string[];
  /** The currently saved voice assignments. */
  initialAssignments?: CharacterVoiceAssignments;
  /** Callback function invoked when the user saves the new assignments. */
  onSave: (assignments: CharacterVoiceAssignments) => void;
  /** Optional callback to handle closing the component (e.g., closing a dialog). */
  onClose?: () => void;
}

const CharacterVoiceAssigner: React.FC<CharacterVoiceAssignerProps> = ({
  characters,
  initialAssignments = {},
  onSave,
  onClose,
}) => {
  console.log('CharacterVoiceAssigner loaded');

  const [assignments, setAssignments] = useState<CharacterVoiceAssignments>(initialAssignments);

  useEffect(() => {
    // Sync state if the initial assignments from props change
    setAssignments(initialAssignments);
  }, [initialAssignments]);

  const handleVoiceChange = (character: string, voiceId: string) => {
    setAssignments(prev => ({
      ...prev,
      [character]: voiceId,
    }));
  };

  const handleSaveChanges = () => {
    onSave(assignments);
    if(onClose) {
      onClose(); // Often, saving also closes the dialog
    }
  };

  return (
    <Card className="w-full max-w-lg border-0 shadow-none">
      <CardHeader>
        <CardTitle>Assign Character Voices</CardTitle>
        <CardDescription>
          Choose a unique voice for each character to create an immersive listening experience.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 max-h-[60vh] overflow-y-auto pr-4">
        {characters.length > 0 ? (
          characters.map((char) => (
            <div key={char} className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor={`select-${char}`} className="text-right font-medium truncate">
                {char}
              </Label>
              <div className="col-span-2">
                <Select
                  value={assignments[char] || ''}
                  onValueChange={(value) => handleVoiceChange(char, value)}
                >
                  <SelectTrigger id={`select-${char}`}>
                    <SelectValue placeholder="Select a voice..." />
                  </SelectTrigger>
                  <SelectContent>
                    {availableVoices.map((voice) => (
                      <SelectItem key={voice.id} value={voice.id}>
                        {voice.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-sm text-muted-foreground py-8">
            <p>No characters have been detected in this section yet.</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end gap-2 pt-6">
        {onClose && (
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        )}
        <Button onClick={handleSaveChanges} disabled={characters.length === 0}>
          Apply Changes
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CharacterVoiceAssigner;