import { Star } from 'lucide-react';

export interface Feedback {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
}

interface FeedbackCardProps {
  feedback: Feedback;
  carousel?: boolean;
}

export const FeedbackCard = ({ feedback, carousel }: FeedbackCardProps) => {
  return (
    <div
      className={`rounded-xl p-6 inset-shadow-2xs shadow-md min-w-[280px] ${carousel ? 'min-h-[316px]' : 'min-h-[280px]'}`}
    >
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img
            src={feedback.avatar}
            alt={feedback.name}
            className="w-11 h-11 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{feedback.name}</p>
            <p className="text-xs text-gray-500">{feedback.date}</p>
          </div>
        </div>
        <div className="mt-1 flex gap-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className={`w-3 h-3 ${
                idx < feedback.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-gray-200 text-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-700">{feedback.comment}</div>
    </div>
  );
};
