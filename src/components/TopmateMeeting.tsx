
import { Calendar, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const TopmateMeeting = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="group relative border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-green-500/25 flex items-center gap-3 animate-bounce hover:animate-none">
          <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          Schedule Meeting
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            NEW
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0 transition-all duration-700 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-center animate-fade-in">
            Book a Meeting with Satyam
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 animate-fade-in">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 animate-pulse"></div>
            <iframe
              src="https://topmate.io/satyam_chourasiya10/page/UKbicXJCYO?utm_source=spotlight&utm_medium=email"
              width="100%"
              height="600"
              style={{ 
                border: 'none', 
                borderRadius: '8px',
                transition: 'all 0.8s ease-in-out'
              }}
              title="Book a meeting with Satyam on Topmate"
              className="w-full transform transition-all duration-1000 ease-in-out hover:scale-[1.02]"
              onLoad={(e) => {
                // Smooth scroll effect when iframe loads
                const iframe = e.target as HTMLIFrameElement;
                iframe.style.opacity = '0';
                iframe.style.transform = 'translateY(20px)';
                setTimeout(() => {
                  iframe.style.transition = 'all 1s ease-in-out';
                  iframe.style.opacity = '1';
                  iframe.style.transform = 'translateY(0)';
                }, 100);
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TopmateMeeting;
