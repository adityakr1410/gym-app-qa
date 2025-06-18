interface Certificate {
  name: string;
  url: string;
}

interface UpcomingWorkouts {
  slot: string;
  duration: string;
  type: string;
}

interface Feedback {
  id: number;
  avatar: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

interface Coach {
  name: string;
  role: string;
  rating: number;
  description: string;
  imageUrl: string;
  about?: string;
  specialization?: string[];
  certificates?: Certificate[];
  upcomingWorkouts?: UpcomingWorkouts[];
  feedback?: Feedback[];
}

export default Coach;
