
import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VoiceIntroProps {
  text: string;
}

const VoiceIntro = ({ text }: VoiceIntroProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayIntro = () => {
    if (isPlaying) {
      // Stop current speech
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis is not supported in your browser.');
    }
  };

  return (
    <button
      onClick={handlePlayIntro}
      className={`group flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl ${
        isPlaying
          ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
          : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
      }`}
      title={isPlaying ? 'Stop voice intro' : 'Play voice intro'}
    >
      {isPlaying ? (
        <VolumeX className="w-5 h-5" />
      ) : (
        <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
      )}
      {isPlaying ? 'Stop Intro' : 'Voice Intro'}
    </button>
  );
};

export default VoiceIntro;
