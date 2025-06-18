import { useState, useEffect, useRef } from 'react';
import { FeedbackCard, Feedback } from './FeedbackCard';
import { RiArrowRightDoubleFill, RiArrowLeftDoubleFill } from 'react-icons/ri';

interface FeedbackListProps {
  feedbackData: Feedback[];
  itemsPerPage?: number;
  sortType?: '' | 'rating' | 'date';
  styling?: string;
  carousel?: boolean;
}

export const FeedbackList = ({
  feedbackData,
  itemsPerPage = 6,
  sortType = '',
  styling = 'grid grid-cols-1 min-[800px]:grid-cols-2 min-[1180px]:grid-cols-3 gap-4',
  carousel = false,
}: FeedbackListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedFeedback, setSortedFeedback] = useState<Feedback[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(sortedFeedback.length / itemsPerPage);

  useEffect(() => {
    const sorted = [...feedbackData];
    if (sortType === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortType === 'date') {
      sorted.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
    setSortedFeedback(sorted);
  }, [feedbackData, sortType]);

  // Sync page on scroll
  useEffect(() => {
    if (!carousel || !scrollRef.current) return;

    const container = scrollRef.current;

    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const newPage = Math.round(scrollLeft / containerWidth) + 1;

      if (newPage !== currentPage) {
        setCurrentPage(newPage);
      }
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [carousel, currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    if (carousel && scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        left: containerWidth * (pageNumber - 1),
        behavior: 'smooth',
      });
    }
  };

  const getCarouselGroups = () => {
    const groups = [];
    for (let i = 0; i < sortedFeedback.length; i += itemsPerPage) {
      groups.push(sortedFeedback.slice(i, i + itemsPerPage));
    }
    return groups;
  };

  const renderedContent = carousel
    ? getCarouselGroups().map((group, index) => (
        <div key={index} className="snap-start flex gap-4 px-2">
          {group.map((feedback) => (
            <div key={feedback.id} className="min-w-[300px] ">
              <FeedbackCard feedback={feedback} carousel={carousel} />
            </div>
          ))}
        </div>
      ))
    : sortedFeedback
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ));

  return (
    <div>
      <div
        ref={scrollRef}
        key={!carousel ? currentPage : undefined}
        className={
          carousel
            ? 'flex overflow-x-auto py-1 snap-x snap-mandatory scroll-smooth scrollbar-hide'
            : `${styling}`
        }
      >
        {renderedContent}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
              aria-label="Previous page"
            >
              <RiArrowLeftDoubleFill />
            </button>
          )}

          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNumber = index + 1;
            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
            ) {
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`h-8 w-8 flex items-center justify-center cursor-pointer ${
                    currentPage === pageNumber
                      ? 'font-semibold border-b-2 border-[#9EF300]'
                      : 'text-gray-700 hover:bg-gray-100 rounded-full'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            } else if (
              (pageNumber === currentPage - 2 && pageNumber > 1) ||
              (pageNumber === currentPage + 2 && pageNumber < totalPages)
            ) {
              return (
                <span key={pageNumber} className="text-gray-500">
                  ...
                </span>
              );
            }
            return null;
          })}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
              aria-label="Next page"
            >
              <RiArrowRightDoubleFill />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

//example usage
// import { FeedbackList } from '@/components/Feedback';
{
  /* <FeedbackList
  feedbackData={mockFeedbackData}
  itemsPerPage={3}
  sortType={sortType}
  carousel={false}
  // styling=''
/>; */
}
