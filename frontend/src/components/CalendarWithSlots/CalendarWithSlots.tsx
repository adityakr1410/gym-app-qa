import * as React from 'react';
import { useState, useEffect } from 'react';
import 'react-day-picker/dist/style.css';
import clsx from 'clsx';
import { format } from 'date-fns';
import { Calendar } from '../Calendar';

type Props = {
  availableSlots: Record<string, string[]>; // "YYYY-MM-DD": ["8:00 - 9:00 AM", ...]
  onDateSelect?: (date: Date) => void;
  onSlotSelect?: (date: Date, slot: string | null) => void;
  defaultDate?: Date;
  markedDates?: string[]; // Dates with upcoming workouts to show as dot
};

export const CalendarWithSlots: React.FC<Props> = ({
  availableSlots,
  onDateSelect,
  onSlotSelect,
  defaultDate,
  markedDates = [],
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [month, setMonth] = useState<Date>(new Date());

  const formatDateKey = (date: Date) => date.toLocaleDateString('en-CA');

  // Auto-select defaultDate or today's date (if available)
  useEffect(() => {
    if (defaultDate) {
      setSelectedDate(defaultDate);
      setMonth(defaultDate);
    } else {
      const today = new Date();
      if (availableSlots[formatDateKey(today)]) {
        setSelectedDate(today);
        setMonth(today);
      }
    }
  }, [defaultDate, availableSlots]);

  const dateKey = selectedDate ? formatDateKey(selectedDate) : null;
  const slots =
    dateKey && availableSlots[dateKey] ? availableSlots[dateKey] : [];

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    if (date) {
      onDateSelect?.(date);
    }
  };

  const handleSlotClick = (slot: string) => {
    // Toggle if user clicks the same slot again
    const newSlot = selectedSlot === slot ? null : slot;
    setSelectedSlot(newSlot);
    if (selectedDate) {
      onSlotSelect?.(selectedDate, newSlot);
    }
  };

  // Days that aren't in availableSlots become disabled
  const disabledDays = (date: Date) => !(formatDateKey(date) in availableSlots);

  return (
    <div className="mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Calendar Panel */}
        <div className="py-4">
          {/* <div className="flex justify-between items-center px-4 border-b border-[#DADADA] mx-2 mt-3 pb-1">
            <button className="p-1 cursor-pointer" onClick={handlePreviousMonth}>
              <ChevronLeft className="h-6 w-6" />
            </button>
            <h2 className="text-base font-light">{format(month, "MMMM yyyy")}</h2>
            <button className="p-1 cursor-pointer" onClick={handleNextMonth}>
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mt-4">
            <style>{`
              .rdp-day_selected:not([disabled]) { 
                background-color: #F6FFE5 !important;
                color: black !important;
                border: 1px solid #9EF300 !important;
              }
              .rdp-day:hover:not([disabled]) {
                background-color: #f0fdf4 !important;
              }
              .rdp-day_today { 
                border: 1px solid #10b981 !important;
              }
              .rdp-day[disabled] {
                color: #B7B6B6;
              }
              .marked-date::after {
                content: "";
                position: absolute;
                bottom: 2px;
                left: 50%;
                transform: translateX(-50%);
                width: 6px;
                height: 6px;
                background-color: #9EF300;
                border-radius: 50%;
              }
                
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
            `}</style>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleDateChange}
              month={month}
              onMonthChange={setMonth}
              disabled={disabledDays}
              modifiers={{
                marked: isMarkedDate
              }}
              formatters={{
                formatWeekdayName: (date: Date) => format(date, 'EEE')
              }}
              classNames={{
                root: "custom-day-picker",
                months: "flex flex-col",
                month: "space-y-4",
                caption: "hidden",
                caption_label: "hidden",
                nav: "hidden",
                nav_button: "hidden",
                nav_button_previous: "hidden",
                nav_button_next: "hidden",
                table: "w-full",
                head_row: "flex w-full px-4",
                head_cell: "text-[#323A3A] font-light w-full text-center text-xs uppercase",
                row: "flex w-full my-2 px-4",
                cell: "w-full flex justify-center p-0 relative font-light",
                day: "w-10 h-10 rounded-full flex items-center justify-center relative",
                day_selected: "rdp-day_selected",
                day_today: "rdp-day_today",
                day_outside: "invisible",
                day_disabled: "rdp-day[disabled]"
              }}
              modifiersClassNames={{
                marked: "marked-date"
              }}
              styles={{
                caption: { display: "none" },
                nav: { display: "none" },
              }}
            />
          </div> */}
          <Calendar
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
            month={month}
            showOutsideDays={false}
            onMonthChange={setMonth}
            disabledDays={disabledDays}
            markedDates={markedDates}
          />
        </div>

        {/* Slots Panel */}
        <div className="p-4">
          {/* Selected Date + Slots Count Header */}
          <div className="flex flex-col items-center md:flex-row md:justify-between mb-2 pb-6 border-b border-[#DADADA] px-8">
            <h2 className="text-base font-light">
              {selectedDate ? format(selectedDate, 'MMM d') : 'Select a date'}
            </h2>
            <span className="text-sm text-[#909090]">
              {slots.length > 0
                ? `${slots.length} slots available`
                : 'No slots'}
            </span>
          </div>

          {/* Slots List with max height and scroll */}
          <div
            className="space-y-2 max-h-68 overflow-y-auto hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {!selectedDate ? (
              <div className="text-sm text-gray-500">
                No date selected to show slots.
              </div>
            ) : slots.length === 0 ? (
              <div className="text-sm text-gray-500">
                No slots available for this day.
              </div>
            ) : (
              slots.map((slot) => (
                <button
                  key={slot}
                  className={clsx(
                    'w-full py-4 px-4 rounded-md text-center bg-[#F6FFE5] transition-all hover:bg-[#F6FFd5] cursor-pointer',
                    selectedSlot === slot
                      ? 'border-[1px] border-[#9EF300]'
                      : 'border border-green-50'
                  )}
                  onClick={() => handleSlotClick(slot)}
                >
                  {slot}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// example usage
// import { CalendarWithSlots } from "@/components/Calendar/CalendarWithSlots";
// <CalendarWithSlots
//         availableSlots={{
//           "2025-07-03": ["8:00 - 9:00 AM","9:00 - 10:00 AM", "10:00 - 11:00 AM", "11:00 - 12:00 PM", "12:00 - 1:00 PM", "1:00 - 2:00 PM", "2:00 - 3:00 PM"],
//           "2025-07-04": ["8:00 - 9:00 AM"],
//           "2025-07-09": ["10:00 - 11:00 AM"], // marked + has slot
//         }}
//         markedDates={["2025-07-09", "2025-07-15"]} // markedDates don't need to have slots
//         defaultDate={new Date("2025-07-03")} // optional: if omitted, today will auto-select if valid
//         onDateSelect={(date) => console.log("Selected date:", date)}
//         onSlotSelect={(date, slot) => console.log("Selected slot:", date, slot)}
//       />
