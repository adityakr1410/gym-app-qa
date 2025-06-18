import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CalendarWithSlots } from '../components/CalendarWithSlots';
import { OutlinedButton, SolidButton } from '../components/Button';
import { Star } from 'lucide-react';
import { Coaches } from '../mocks/Coaches';

import PdfIcon from '../assets/pdf.svg';
import { FeedbackList } from '@/components/Feedback';
import { filterType } from '../types';

import clockIcon from '../assets/clockIcon.svg';
import { ConfirmBookingPopup } from '@/components/popUp';

import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import Error404 from './Error404';
import { useToast } from '@/hooks/useToast';

import { UserRoleProp } from '../types';

const CoachDetailPage: React.FC<UserRoleProp> = ({ userRole }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (userRole === 'coach') {
      navigate('/dashboard');
    }
  }, [userRole]);

  const [filterType, setFilterType] = React.useState<filterType>('rating');
  const [dateSelected, setDateSelected] = React.useState<string>('');
  const [slotStartTime, setSlotStartTime] = React.useState<string>('');
  const [workoutDuration, setWorkoutDuration] = React.useState<number>(0);
  const [isFilterMenuVisible, setIsFilterMenuVisible] = React.useState(false);
  const { showToast } = useToast();
  const { coach_name } = useParams<{ coach_name: string }>();
  const coach = Coaches.find(
    (coach) => coach.name === coach_name?.split('_').join(' ')
  );
  const specializations = coach?.specialization || [];
  const certificates = coach?.certificates || [];
  const feedbackData = coach?.feedback || [];

  const filterRef = useRef<HTMLDivElement>(null);
  const filterTypeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // closing filter-dropdown on clikng outside
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target === filterTypeRef.current) return;
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node) &&
        filterTypeRef.current &&
        !filterTypeRef.current.contains(event.target as Node)
      ) {
        setIsFilterMenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const updateSelectedDate = (date: Date) => {
    const months: { [key: string]: string } = {
      Jan: 'January',
      Feb: 'February',
      Mar: 'March',
      Apr: 'April',
      May: 'May',
      Jun: 'June',
      Jul: 'July',
      Aug: 'August',
      Sep: 'September',
      Oct: 'October',
      Nov: 'November',
      Dec: 'December',
    };

    const str = date.toString();
    const arr = str.split(' ');
    const monthSelected = months[arr[1]];
    const dateSelected = arr[2];

    setDateSelected(monthSelected + ' ' + dateSelected);
  };

  const calculateDuration = (startTime: string, endTime: string): void => {
    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);
    setWorkoutDuration(endHour - startHour);
  };

  const updateSelectedSlot = (date: Date, slot: any) => {
    // updateSelectedDate(date);
    const selectedSlot = slot.toString();
    const arr = selectedSlot.split(' ');
    const startTime = arr[0];
    const endTime = arr[2];
    const meridiem = arr[3];

    const [startH, startM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);

    if ((meridiem === 'PM' && endH === 12 && startH < 12) || meridiem === 'AM')
      setSlotStartTime(startTime + ' AM');
    else setSlotStartTime(startTime + ' PM');
    calculateDuration(startTime, endTime);
  };

  return (
    <>
      {coach ? (
        <>
          <div className="pl-6 flex gap-3 items-center pt-4">
            <Link
              to="/coaches"
              className="text-[14px]/[20px] font-medium text-[#323A3A] cursor-pointer"
            >
              Coaches
            </Link>
            <span className="text-[#929FA1]">
              <IoIosArrowForward />
            </span>
            <span className="text-[#4B5563] text-[14px]/[20px] font-light">
              {coach?.name}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
            {/* Left Column - Coach Info */}
            <div className="col-span-1 md:col-span-1">
              <div className="bg-white rounded-2xl shadow">
                <img
                  src={coach ? coach.imageUrl : ''}
                  alt={coach ? coach.name : 'some coach'}
                  className="w-full rounded-t-xl h-full"
                />
                <div className="mt-4 p-5">
                  <h2 className="text-[14px]/[20px] font-semibold flex items-center justify-between">
                    {coach?.name}
                    <span className="flex items-center text-[#4B5563]">
                      {coach?.rating}{' '}
                      <Star className="w-4 h-4 ml-1 fill-[#FDD63B] text-[#FDD63B]" />
                    </span>
                  </h2>
                  <p className="text-sm text-gray-600">{coach?.role}</p>

                  <div className="mt-4">
                    <h3 className="font-semibold text-sm mb-1">About coach</h3>
                    <p className="text-[14px]/[20px] text-[#4B5563] font-[300]">
                      {coach?.about}
                    </p>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-sm mb-1">
                      Specialization
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {specializations?.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#EEEEEE] text-[12px]/[16px] font-[300] rounded-[4px] text-[#4B5563]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-sm mb-1">Certificates</h3>
                    <ul className="text-sm list-inside flex flex-col gap-2">
                      {certificates.map((cert, i) => (
                        <li key={i} className="flex gap-2">
                          <figure className="shrink-0">
                            <img src={PdfIcon} alt="pdf-icon" />
                          </figure>
                          <a
                            href={cert.url}
                            target="_blank"
                            className="underline text-[#323232]"
                          >
                            {cert.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <ConfirmBookingPopup
                      trigger={<SolidButton buttonText="Book Workout" />}
                      coach={{
                        name: coach?.name,
                        title: coach?.role,
                        rating: coach?.rating,
                        avatarUrl: coach?.imageUrl,
                        workoutType: specializations[0],
                        workoutTime: `${workoutDuration}h`,
                        workoutDate: `${dateSelected}, ${slotStartTime}`,
                      }}
                      onCancel={() => console.log('Booking canceled.')}
                      onConfirm={() => {
                        console.log('Booking confirmed!');

                        navigate('/workouts');

                        showToast(
                          'success',
                          'Success',
                          'Coach Booked successfully'
                        );
                      }}
                    />

                    <OutlinedButton buttonText="Repeat Previous Workout" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Schedule, upcoming workouts  and feedbacks  */}
            <div className="col-span-1 md:col-span-3">
              <div className="mx-auto py-4">
                <h2 className="font-light text-[14px]/[24px] mb-2">Schedule</h2>
                <CalendarWithSlots
                  availableSlots={{
                    '2025-07-03': [
                      '8:00 - 9:00 AM',
                      '9:00 - 10:00 AM',
                      '10:00 - 11:00 AM',
                      '11:00 - 12:00 PM',
                      '12:00 - 1:00 PM',
                      '1:00 - 2:00 PM',
                      '2:00 - 3:00 PM',
                    ],
                    '2025-07-04': ['8:00 - 9:00 AM'],
                    '2025-07-09': ['10:00 - 11:00 AM'], // marked + has slot
                  }}
                  markedDates={['2025-07-09', '2025-07-15']} // markedDates don't need to have slots
                  // defaultDate={new Date('2025-07-03')} // optional: if omitted, today will auto-select if valid
                  onDateSelect={(date) => {
                    console.log(date);
                    updateSelectedDate(date);
                  }}
                  onSlotSelect={(date, slot) => {
                    console.log(date);
                    console.log(slot);
                    updateSelectedSlot(date, slot);
                  }}
                />

                <div className="mt-6">
                  <h3 className="font-light text-[14px]/[24px] mb-1">
                    Upcoming Workouts
                  </h3>
                  <div className="text-sm h-10 bg-[#dbeefa] flex items-center justify-between rounded-sm">
                    <div className="h-full flex items-center gap-5">
                      <div className="h-full w-2 bg-[#b7e4ff] rounded-l-sm"></div>
                      <span className="text-[18px][24px] font-medium text-[#222222]">
                        {specializations[0]}
                      </span>
                      <span className="text-[#323A3A] text-[14px]/[20px] font-light">
                        July 9, 9:30
                      </span>
                    </div>
                    <figure className="text-gray-400 flex gap-2 mr-5">
                      <img src={clockIcon} alt="clockIcon" />
                      <figcaption>1 hour</figcaption>
                    </figure>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto py-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-light text-[14px]/[24px]">Feedback</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px]/[20px] font-light text-[#909090]">
                      Sort by
                    </span>
                    <div className="text-sm px-2 py-1 flex flex-col gap-2 justify-center">
                      <div
                        ref={filterTypeRef}
                        className="flex gap-2 items-center"
                        onClick={() =>
                          setIsFilterMenuVisible(!isFilterMenuVisible)
                        }
                      >
                        <span className="text-[14px] font-medium text-[#323A3A] w-10">
                          {`${filterType?.charAt(0).toUpperCase()}${filterType?.slice(1)}`}
                        </span>{' '}
                        {isFilterMenuVisible ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* select dropdown */}
                <div
                  ref={filterRef}
                  className={`${isFilterMenuVisible ? 'block' : 'hidden'} absolute right-0 py-1 bg-[#fff5f5] rounded-md text-[14px] font-light flex flex-col w-23 z-50 top-12 text-center h-20 justify-center`}
                >
                  <div
                    onClick={() => {
                      setFilterType('rating');
                      setIsFilterMenuVisible(false);
                    }}
                    className="cursor-pointer hover:bg-[#F6FFE5] w-full h-[50%] flex items-center justify-center"
                  >
                    Rating
                  </div>
                  <div
                    onClick={() => {
                      setFilterType('date');
                      setIsFilterMenuVisible(false);
                    }}
                    className="cursor-pointer hover:bg-[#F6FFE5] w-full h-[50%] flex items-center justify-center"
                  >
                    Date
                  </div>
                </div>

                {/* <div className="flex space-x-4"> */}
                <FeedbackList
                  feedbackData={feedbackData}
                  itemsPerPage={3}
                  sortType={filterType}
                  carousel={true}
                  styling="w-[300px]"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default CoachDetailPage;
