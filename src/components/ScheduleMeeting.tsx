
import { useState } from 'react';
import { Calendar, Clock, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const ScheduleMeeting = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleScheduleMeeting = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time');
      return;
    }

    const meetingDateTime = new Date(selectedDate);
    const [hours, minutes] = selectedTime.split(':');
    meetingDateTime.setHours(parseInt(hours), parseInt(minutes));

    // Format for Google Calendar
    const startTime = meetingDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endTime = new Date(meetingDateTime.getTime() + 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting with Satyam Kumar Chourasiya&dates=${startTime}/${endTime}&details=Professional meeting with Satyam Kumar Chourasiya - Senior Backend Engineer&location=Google Meet`;

    window.open(googleCalendarUrl, '_blank');
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <button className="group border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/25 flex items-center gap-3">
          <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          Schedule Meeting
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Video className="w-5 h-5 text-green-500" />
            Schedule a Google Meet
          </DialogTitle>
          <DialogDescription>
            Select a date and time for our professional discussion. I'll be happy to discuss opportunities, projects, or answer any questions.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Date Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Time (IST)</label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={cn(
                    "flex items-center justify-center gap-2 p-3 border rounded-lg transition-all",
                    selectedTime === time
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-200 hover:border-green-500 hover:bg-green-50"
                  )}
                >
                  <Clock className="w-4 h-4" />
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Meeting Details */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Meeting Details:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Duration: 1 hour</li>
              <li>• Platform: Google Meet</li>
              <li>• Meeting link will be included in calendar invite</li>
              <li>• Please join 2-3 minutes early</li>
            </ul>
          </div>

          <Button 
            onClick={handleScheduleMeeting} 
            className="w-full bg-green-500 hover:bg-green-600"
            disabled={!selectedDate || !selectedTime}
          >
            Create Google Calendar Event
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleMeeting;
