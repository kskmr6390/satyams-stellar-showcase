
import { Calendar, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const TopmateMeeting = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group relative border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/25 flex items-center gap-3">
          <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Book on Topmate
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            NEW
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-center">
            Book a Meeting with Satyam
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <iframe
            src="https://topmate.io/satyam_chourasiya10/page/UKbicXJCYO?utm_source=spotlight&utm_medium=email"
            width="100%"
            height="600"
            style={{ border: 'none', borderRadius: '8px' }}
            title="Book a meeting with Satyam on Topmate"
            className="w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TopmateMeeting;
