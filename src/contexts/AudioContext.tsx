import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import * as Tone from 'tone';

type AudioContextType = {
  isPlaying: boolean;
  toggleAudio: () => void;
  playTransition: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState<Tone.Player | null>(null);
  const [filter, setFilter] = useState<Tone.Filter | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeAudio = async () => {
    if (isInitialized) return;

    try {
      // Only start Tone.js after a user gesture
      await Tone.start();
      console.log("AudioContext started");
      
      const newFilter = new Tone.Filter({
        frequency: 20000,
        type: "lowpass"
      }).toDestination();

      const newPlayer = new Tone.Player({
        url: "/audio/ambient.mp3",
        loop: true,
        volume: -20,
        onload: () => {
          console.log("Audio loaded");
        }
      }).connect(newFilter);

      setFilter(newFilter);
      setPlayer(newPlayer);
      setIsInitialized(true);
    } catch (error) {
      console.error("Failed to initialize audio:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (player) {
        player.stop().dispose();
      }
      if (filter) {
        filter.dispose();
      }
    };
  }, [player, filter]);

  const toggleAudio = async () => {
    try {
      // Initialize audio only on first user interaction
      if (!isInitialized) {
        await initializeAudio();
      }

      if (!player) return;
      
      if (!isPlaying) {
        await player.start();
        setIsPlaying(true);
      } else {
        player.stop();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Error toggling audio:", error);
    }
  };

  const playTransition = async () => {
    if (!filter || !isInitialized) return;

    const currentFreq = filter.frequency.value;
    filter.frequency.rampTo(1000, 0.1);
    setTimeout(() => {
      filter.frequency.rampTo(currentFreq, 0.3);
    }, 100);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio, playTransition }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}; 