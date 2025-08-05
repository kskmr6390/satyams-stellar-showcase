
import { Calendar, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

const TopmateMeeting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let idleTimer: NodeJS.Timeout;
    let autoCloseTimer: NodeJS.Timeout;

    const resetIdleTimer = () => {
      setIsIdle(false);
      clearTimeout(idleTimer);
      
      // Set user as idle after 30 seconds of inactivity
      idleTimer = setTimeout(() => {
        setIsIdle(true);
      }, 30000);
    };

    const handleUserActivity = () => {
      resetIdleTimer();
      // Close popup if user becomes active
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Track various user activities
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    events.forEach(event => {
      document.addEventListener(event, handleUserActivity, true);
    });

    // Initial timer setup
    resetIdleTimer();

    return () => {
      clearTimeout(idleTimer);
      clearTimeout(autoCloseTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleUserActivity, true);
      });
    };
  }, [isOpen]);

  // Show popup when user becomes idle
  useEffect(() => {
    if (isIdle && !isOpen) {
      const showTimer = setTimeout(() => {
        setIsOpen(true);
      }, 2000); // Show 2 seconds after becoming idle

      // Auto-close after 10 seconds
      const closeTimer = setTimeout(() => {
        setIsOpen(false);
      }, 12000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [isIdle, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="group relative border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-green-500/25 flex items-center gap-3 animate-bounce hover:animate-none">
          <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col items-center">
            <span>Schedule Meeting</span>
            <div className="flex items-center gap-2 text-sm">
              <span className="line-through text-red-400">₹2999</span>
              <span className="text-yellow-300 font-bold">Only ₹999</span>
            </div>
          </div>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            NEW
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl max-h-[90vh] w-[95vw] p-0 overflow-y-auto transition-all duration-1000 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-center animate-fade-in">
            Book a Meeting with Satyam
          </DialogTitle>
          <div className="text-center mt-2">
            <span className="text-lg line-through text-red-500 mr-3">₹2999</span>
            <span className="text-2xl font-bold text-green-500">Special Offer: Only ₹999!</span>
          </div>
        </DialogHeader>
        <div className="p-6 animate-fade-in">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 animate-pulse"></div>
            <iframe
              src="https://topmate.io/satyam_chourasiya10/page/UKbicXJCYO?utm_source=spotlight&utm_medium=email"
              width="100%"
              height="700"
              style={{ 
                border: 'none', 
                borderRadius: '8px',
                transition: 'all 1.5s ease-in-out',
                scrollBehavior: 'smooth'
              }}
              title="Book a meeting with Satyam"
              className="w-full transform transition-all duration-2000 ease-in-out hover:scale-[1.02]"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
              onLoad={(e) => {
                // Smooth scroll effect when iframe loads
                const iframe = e.target as HTMLIFrameElement;
                iframe.style.opacity = '0';
                iframe.style.transform = 'translateY(30px)';
                setTimeout(() => {
                  iframe.style.transition = 'all 2s ease-in-out';
                  iframe.style.opacity = '1';
                  iframe.style.transform = 'translateY(0)';
                  
                  // Slow scroll effect inside iframe
                  setTimeout(() => {
                    try {
                      if (iframe.contentWindow) {
                        iframe.contentWindow.scrollTo({
                          top: 100,
                          behavior: 'smooth'
                        });
                        setTimeout(() => {
                          iframe.contentWindow?.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
                        }, 1500);
                      }
                    } catch (e) {
                      // Cross-origin restrictions might prevent this
                      console.log('Iframe scroll not accessible due to cross-origin policy');
                    }
                  }, 500);
                }, 300);
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TopmateMeeting;
