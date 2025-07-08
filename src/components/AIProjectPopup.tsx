import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AIProjectPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const popupShown = localStorage.getItem('ai-project-popup-shown');
    
    if (!popupShown) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasBeenShown(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('ai-project-popup-shown', 'true');
  };

  const handleLearnMore = () => {
    // Redirect to Inkwell AI project on GitHub
    window.open('https://github.com/kskmr6390/inkwell_ai/blob/main/README.md', '_blank');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200/50 dark:border-purple-700/50 animate-scale-in">
        <CardContent className="p-6 relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                AI Project Alert!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Something exciting is brewing...
              </p>
            </div>
          </div>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Click here if you're curious about the AI project I'm working on currently! 
            It's going to be game-changing. 🚀
          </p>
          
          <div className="flex gap-3">
            <Button
              onClick={handleLearnMore}
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Tell me more!
            </Button>
            <Button
              variant="outline"
              onClick={handleClose}
              className="px-4"
            >
              Maybe later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIProjectPopup;