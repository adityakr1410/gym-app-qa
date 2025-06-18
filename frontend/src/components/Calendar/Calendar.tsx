import * as React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-day-picker/dist/style.css';

type Props = {
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  month: Date;
  showOutsideDays: boolean;
  onMonthChange: (date: Date) => void;
  disabledDays?: (date: Date) => boolean;
  markedDates?: string[];
  autoClose?: boolean;
};

export const Calendar: React.FC<Props> = ({
  selectedDate,
  onDateChange,
  month,
  showOutsideDays,
  onMonthChange,
  disabledDays,
  markedDates = [],
}) => {
  const formatDateKey = (date: Date) => date.toLocaleDateString('en-CA');
  const isMarkedDate = (date: Date) =>
    markedDates.includes(formatDateKey(date));

  const handlePreviousMonth = () => {
    onMonthChange(subMonths(month, 1));
  };

  const handleNextMonth = () => {
    onMonthChange(addMonths(month, 1));
  };

  return (
    <div>
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
      `}</style>

      {/* Header */}
      <div className="flex justify-between items-center px-4 border-b border-[#DADADA] mx-2 pb-1 mt-3">
        <button className="p-1 cursor-pointer" onClick={handlePreviousMonth}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h2 className="text-base font-light">{format(month, 'MMMM yyyy')}</h2>
        <button className="p-1 cursor-pointer" onClick={handleNextMonth}>
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Calendar */}
      <div className="mt-4">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={onDateChange}
          month={month}
          onMonthChange={onMonthChange}
          disabled={disabledDays}
          showOutsideDays={showOutsideDays}
          modifiers={{ marked: isMarkedDate }}
          formatters={{
            formatWeekdayName: (date: Date) => format(date, 'EEE'),
          }}
          classNames={{
            root: 'custom-day-picker',
            months: 'flex flex-col',
            month: 'space-y-4',
            caption: 'hidden',
            table: 'w-full',
            head_row: 'flex w-full px-4',
            head_cell:
              'text-[#323A3A] font-light w-full text-center text-xs uppercase',
            row: 'flex w-full my-2 px-4',
            cell: 'w-full flex justify-center p-0 relative font-light',
            day: 'w-10 h-10 rounded-full flex items-center justify-center relative',
            day_selected: 'rdp-day_selected',
            day_today: 'rdp-day_today',
            day_outside: 'opacity-30',
            day_disabled: 'rdp-day[disabled]',
          }}
          modifiersClassNames={{
            marked: 'marked-date',
          }}
          styles={{
            caption: { display: 'none' },
            nav: { display: 'none' },
          }}
        />
      </div>
    </div>
  );
};
