import { Coach } from '../types';

// coach Images import
import Kristin from '../assets/Coaches/Kristin.svg';
import Wade from '../assets/Coaches/Wade.svg';
import Cameron from '../assets/Coaches/Cameron.svg';
import Jenny from '../assets/Coaches/Jenny.svg';
import Jacob from '../assets/Coaches/Jacob.svg';
import Guy from '../assets/Coaches/Guy.svg';
import Brooklyn from '../assets/Coaches/Brooklyn.svg';
import Bessie from '../assets/Coaches/Bessie.svg';

// Feedback Users image import
import User1 from '../assets/feedbackUsers/user1.png';
import User2 from '../assets/feedbackUsers/user2.png';
import User3 from '../assets/feedbackUsers/user3.png';
import User4 from '../assets/feedbackUsers/user4.png';
import User5 from '../assets/feedbackUsers/user5.png';

export const Coaches: Coach[] = [
  {
    name: 'Kristin Watson',
    role: 'Certified Personal Yoga Trainer',
    rating: 4.96,
    description:
      'A Yoga Expert dedicated to crafting personalized workout plans that align with your goals.',
    imageUrl: Kristin,
    about:
      'I have 8 years of experience in the field, having studied various styles of yoga and completed rigorous training programs. I have taught diverse groups, from beginners to advanced practitioners, in both studio and private settings. I have regularly engaged in community events and wellness retreats, inspiring others on their yoga journeys.',
    specialization: [
      'Yoga',
      'Nutrition',
      'Wellness',
      'Mindfulness',
      'Stress Management',
    ],
    certificates: [
      {
        name: 'Mindfulness-Based Stress Reduction (MBSR) Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj73ccY1A/_aJHYcuzBr1k5R4VMKnEUA/edit/',
      },
      {
        name: 'Integrative Yoga Therapy Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj7yrorhs/hu2hzSL_Zdxum5psUnwflQ/edit',
      },
    ],
    upcomingWorkouts: [
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
    ],
    feedback: [
      {
        id: 1,
        avatar: User1,
        name: 'Ava Thompson',
        rating: 5,
        date: '6/2/2025',
        comment:
          "I've been attending classes with Kristin Watson for six months, and the transformation in my flexibility and overall well-being has been incredible. Her calm demeanor and expert guidance make each session a refreshing experience. Highly recommend for anyone looking to enhance their yoga practice!",
      },
      {
        id: 2,
        avatar: User2,
        name: 'Noah Mitchell',
        rating: 4,
        date: '6/8/2024',
        comment:
          'I started sessions with Cameron Hayes three months ago, and I can already feel a significant improvement in my posture and mental clarity. Cameron’s positive energy and personalized approach create such a welcoming environment. Truly a game-changer for my wellness journey!',
      },
      {
        id: 3,
        avatar: User3,
        name: 'Mia Robinson',
        rating: 5,
        date: '6/6/2023',
        comment:
          "Practicing with Devon Lane has been an absolute joy. Her ability to blend mindfulness and physical challenge is unmatched. I leave every class feeling grounded and revitalized. I can't imagine my week without her classes.",
      },
      {
        id: 4,
        avatar: User4,
        name: 'Ethan Carter',
        rating: 3,
        date: '1/8/2023',
        comment:
          "Working with Brooklyn Simmons has brought a new level of balance and peace to my life. Her sessions are thoughtfully structured and always leave me feeling both relaxed and accomplished. She's a fantastic instructor with a true gift for teaching.",
      },
      {
        id: 5,
        avatar: User5,
        name: 'Lily Bennett',
        rating: 5,
        date: '9/8/2023',
        comment:
          'Joining yoga classes with Wade Warren has been one of the best decisions for my health. His clear instructions and gentle encouragement have helped me progress more than I thought possible. Every session is a step toward a better me!',
      },
    ],
  },
  {
    name: 'Wade Warren',
    role: 'Climbing Coach',
    rating: 4.8,
    description:
      'Scale new challenges with our Climbing Coach. Get instruction to improve climbing skills, and build confidence on the wall.',
    imageUrl: Wade,
    about:
      'I have 8 years of experience in the field, having studied various styles of yoga and completed rigorous training programs. I have taught diverse groups, from beginners to advanced practitioners, in both studio and private settings. I have regularly engaged in community events and wellness retreats, inspiring others on their yoga journeys.',
    specialization: [
      'Yoga',
      'Nutrition',
      'Wellness',
      'Mindfulness',
      'Stress Management',
    ],
    certificates: [
      {
        name: 'Mindfulness-Based Stress Reduction (MBSR) Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj73ccY1A/_aJHYcuzBr1k5R4VMKnEUA/edit/',
      },
      {
        name: 'Integrative Yoga Therapy Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj7yrorhs/hu2hzSL_Zdxum5psUnwflQ/edit',
      },
    ],
    upcomingWorkouts: [
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
    ],
    feedback: [
      {
        id: 1,
        avatar: User1,
        name: 'Ava Thompson',
        rating: 5,
        date: '6/2/2025',
        comment:
          "I've been attending classes with Kristin Watson for six months, and the transformation in my flexibility and overall well-being has been incredible. Her calm demeanor and expert guidance make each session a refreshing experience. Highly recommend for anyone looking to enhance their yoga practice!",
      },
      {
        id: 2,
        avatar: User2,
        name: 'Noah Mitchell',
        rating: 4,
        date: '6/8/2024',
        comment:
          'I started sessions with Cameron Hayes three months ago, and I can already feel a significant improvement in my posture and mental clarity. Cameron’s positive energy and personalized approach create such a welcoming environment. Truly a game-changer for my wellness journey!',
      },
      {
        id: 3,
        avatar: User3,
        name: 'Mia Robinson',
        rating: 5,
        date: '6/6/2023',
        comment:
          "Practicing with Devon Lane has been an absolute joy. Her ability to blend mindfulness and physical challenge is unmatched. I leave every class feeling grounded and revitalized. I can't imagine my week without her classes.",
      },
      {
        id: 4,
        avatar: User4,
        name: 'Ethan Carter',
        rating: 3,
        date: '1/8/2023',
        comment:
          "Working with Brooklyn Simmons has brought a new level of balance and peace to my life. Her sessions are thoughtfully structured and always leave me feeling both relaxed and accomplished. She's a fantastic instructor with a true gift for teaching.",
      },
      {
        id: 5,
        avatar: User5,
        name: 'Lily Bennett',
        rating: 5,
        date: '9/8/2023',
        comment:
          'Joining yoga classes with Wade Warren has been one of the best decisions for my health. His clear instructions and gentle encouragement have helped me progress more than I thought possible. Every session is a step toward a better me!',
      },
    ],
  },
  {
    name: 'Cameron Williamson',
    role: 'Strength Coach',
    rating: 5.0,
    description:
      'Achieve peak performance with our Strength Coach, a specialist in building muscle and increasing power.',
    imageUrl: Cameron,
    about:
      'I have 8 years of experience in the field, having studied various styles of yoga and completed rigorous training programs. I have taught diverse groups, from beginners to advanced practitioners, in both studio and private settings. I have regularly engaged in community events and wellness retreats, inspiring others on their yoga journeys.',
    specialization: [
      'Yoga',
      'Nutrition',
      'Wellness',
      'Mindfulness',
      'Stress Management',
    ],
    certificates: [
      {
        name: 'Mindfulness-Based Stress Reduction (MBSR) Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj73ccY1A/_aJHYcuzBr1k5R4VMKnEUA/edit/',
      },
      {
        name: 'Integrative Yoga Therapy Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj7yrorhs/hu2hzSL_Zdxum5psUnwflQ/edit',
      },
    ],
    upcomingWorkouts: [
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
    ],
    feedback: [
      {
        id: 1,
        avatar: User1,
        name: 'Ava Thompson',
        rating: 5,
        date: '6/2/2025',
        comment:
          "I've been attending classes with Kristin Watson for six months, and the transformation in my flexibility and overall well-being has been incredible. Her calm demeanor and expert guidance make each session a refreshing experience. Highly recommend for anyone looking to enhance their yoga practice!",
      },
      {
        id: 2,
        avatar: User2,
        name: 'Noah Mitchell',
        rating: 4,
        date: '6/8/2024',
        comment:
          'I started sessions with Cameron Hayes three months ago, and I can already feel a significant improvement in my posture and mental clarity. Cameron’s positive energy and personalized approach create such a welcoming environment. Truly a game-changer for my wellness journey!',
      },
      {
        id: 3,
        avatar: User3,
        name: 'Mia Robinson',
        rating: 5,
        date: '6/6/2023',
        comment:
          "Practicing with Devon Lane has been an absolute joy. Her ability to blend mindfulness and physical challenge is unmatched. I leave every class feeling grounded and revitalized. I can't imagine my week without her classes.",
      },
      {
        id: 4,
        avatar: User4,
        name: 'Ethan Carter',
        rating: 3,
        date: '1/8/2023',
        comment:
          "Working with Brooklyn Simmons has brought a new level of balance and peace to my life. Her sessions are thoughtfully structured and always leave me feeling both relaxed and accomplished. She's a fantastic instructor with a true gift for teaching.",
      },
      {
        id: 5,
        avatar: User5,
        name: 'Lily Bennett',
        rating: 5,
        date: '9/8/2023',
        comment:
          'Joining yoga classes with Wade Warren has been one of the best decisions for my health. His clear instructions and gentle encouragement have helped me progress more than I thought possible. Every session is a step toward a better me!',
      },
    ],
  },
  {
    name: 'Jenny Wilson',
    role: 'Certified Personal Yoga Trainer',
    rating: 5.0,
    description:
      'A Yoga Expert dedicated to crafting personalized workout plans that align with your goals.',
    imageUrl: Jenny,
    about:
      'I have 8 years of experience in the field, having studied various styles of yoga and completed rigorous training programs. I have taught diverse groups, from beginners to advanced practitioners, in both studio and private settings. I have regularly engaged in community events and wellness retreats, inspiring others on their yoga journeys.',
    specialization: [
      'Yoga',
      'Nutrition',
      'Wellness',
      'Mindfulness',
      'Stress Management',
    ],
    certificates: [
      {
        name: 'Mindfulness-Based Stress Reduction (MBSR) Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj73ccY1A/_aJHYcuzBr1k5R4VMKnEUA/edit/',
      },
      {
        name: 'Integrative Yoga Therapy Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj7yrorhs/hu2hzSL_Zdxum5psUnwflQ/edit',
      },
    ],
    upcomingWorkouts: [
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
    ],
    feedback: [
      {
        id: 1,
        avatar: User1,
        name: 'Ava Thompson',
        rating: 5,
        date: '6/2/2025',
        comment:
          "I've been attending classes with Kristin Watson for six months, and the transformation in my flexibility and overall well-being has been incredible. Her calm demeanor and expert guidance make each session a refreshing experience. Highly recommend for anyone looking to enhance their yoga practice!",
      },
      {
        id: 2,
        avatar: User2,
        name: 'Noah Mitchell',
        rating: 4,
        date: '6/8/2024',
        comment:
          'I started sessions with Cameron Hayes three months ago, and I can already feel a significant improvement in my posture and mental clarity. Cameron’s positive energy and personalized approach create such a welcoming environment. Truly a game-changer for my wellness journey!',
      },
      {
        id: 3,
        avatar: User3,
        name: 'Mia Robinson',
        rating: 5,
        date: '6/6/2023',
        comment:
          "Practicing with Devon Lane has been an absolute joy. Her ability to blend mindfulness and physical challenge is unmatched. I leave every class feeling grounded and revitalized. I can't imagine my week without her classes.",
      },
      {
        id: 4,
        avatar: User4,
        name: 'Ethan Carter',
        rating: 3,
        date: '1/8/2023',
        comment:
          "Working with Brooklyn Simmons has brought a new level of balance and peace to my life. Her sessions are thoughtfully structured and always leave me feeling both relaxed and accomplished. She's a fantastic instructor with a true gift for teaching.",
      },
      {
        id: 5,
        avatar: User5,
        name: 'Lily Bennett',
        rating: 5,
        date: '9/8/2023',
        comment:
          'Joining yoga classes with Wade Warren has been one of the best decisions for my health. His clear instructions and gentle encouragement have helped me progress more than I thought possible. Every session is a step toward a better me!',
      },
    ],
  },
  {
    name: 'Jacob Jones',
    role: 'Climbing Coach',
    rating: 4.6,
    description:
      'Scale new challenges with our Climbing Coach. Get instruction to improve climbing skills, and build confidence on the wall.',
    imageUrl: Jacob,
    about:
      'I have 8 years of experience in the field, having studied various styles of yoga and completed rigorous training programs. I have taught diverse groups, from beginners to advanced practitioners, in both studio and private settings. I have regularly engaged in community events and wellness retreats, inspiring others on their yoga journeys.',
    specialization: [
      'Yoga',
      'Nutrition',
      'Wellness',
      'Mindfulness',
      'Stress Management',
    ],
    certificates: [
      {
        name: 'Mindfulness-Based Stress Reduction (MBSR) Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj73ccY1A/_aJHYcuzBr1k5R4VMKnEUA/edit/',
      },
      {
        name: 'Integrative Yoga Therapy Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj7yrorhs/hu2hzSL_Zdxum5psUnwflQ/edit',
      },
    ],
    upcomingWorkouts: [
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
    ],
    feedback: [
      {
        id: 1,
        avatar: User1,
        name: 'Ava Thompson',
        rating: 5,
        date: '6/2/2025',
        comment:
          "I've been attending classes with Kristin Watson for six months, and the transformation in my flexibility and overall well-being has been incredible. Her calm demeanor and expert guidance make each session a refreshing experience. Highly recommend for anyone looking to enhance their yoga practice!",
      },
      {
        id: 2,
        avatar: User2,
        name: 'Noah Mitchell',
        rating: 4,
        date: '6/8/2024',
        comment:
          'I started sessions with Cameron Hayes three months ago, and I can already feel a significant improvement in my posture and mental clarity. Cameron’s positive energy and personalized approach create such a welcoming environment. Truly a game-changer for my wellness journey!',
      },
      {
        id: 3,
        avatar: User3,
        name: 'Mia Robinson',
        rating: 5,
        date: '6/6/2023',
        comment:
          "Practicing with Devon Lane has been an absolute joy. Her ability to blend mindfulness and physical challenge is unmatched. I leave every class feeling grounded and revitalized. I can't imagine my week without her classes.",
      },
      {
        id: 4,
        avatar: User4,
        name: 'Ethan Carter',
        rating: 3,
        date: '1/8/2023',
        comment:
          "Working with Brooklyn Simmons has brought a new level of balance and peace to my life. Her sessions are thoughtfully structured and always leave me feeling both relaxed and accomplished. She's a fantastic instructor with a true gift for teaching.",
      },
      {
        id: 5,
        avatar: User5,
        name: 'Lily Bennett',
        rating: 5,
        date: '9/8/2023',
        comment:
          'Joining yoga classes with Wade Warren has been one of the best decisions for my health. His clear instructions and gentle encouragement have helped me progress more than I thought possible. Every session is a step toward a better me!',
      },
    ],
  },
  {
    name: 'Guy Hawkins',
    role: 'Functional Fitness Trainer',
    rating: 4.89,
    description:
      'Transform your fitness with our Functional Fitness Trainer, who focuses on exercises that mimic real-life movements.',
    imageUrl: Guy,
    about:
      'I have 8 years of experience in the field, having studied various styles of yoga and completed rigorous training programs. I have taught diverse groups, from beginners to advanced practitioners, in both studio and private settings. I have regularly engaged in community events and wellness retreats, inspiring others on their yoga journeys.',
    specialization: [
      'Yoga',
      'Nutrition',
      'Wellness',
      'Mindfulness',
      'Stress Management',
    ],
    certificates: [
      {
        name: 'Mindfulness-Based Stress Reduction (MBSR) Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj73ccY1A/_aJHYcuzBr1k5R4VMKnEUA/edit/',
      },
      {
        name: 'Integrative Yoga Therapy Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj7yrorhs/hu2hzSL_Zdxum5psUnwflQ/edit',
      },
    ],
    upcomingWorkouts: [
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
    ],
    feedback: [
      {
        id: 1,
        avatar: User1,
        name: 'Ava Thompson',
        rating: 5,
        date: '6/2/2025',
        comment:
          "I've been attending classes with Kristin Watson for six months, and the transformation in my flexibility and overall well-being has been incredible. Her calm demeanor and expert guidance make each session a refreshing experience. Highly recommend for anyone looking to enhance their yoga practice!",
      },
      {
        id: 2,
        avatar: User2,
        name: 'Noah Mitchell',
        rating: 4,
        date: '6/8/2024',
        comment:
          'I started sessions with Cameron Hayes three months ago, and I can already feel a significant improvement in my posture and mental clarity. Cameron’s positive energy and personalized approach create such a welcoming environment. Truly a game-changer for my wellness journey!',
      },
      {
        id: 3,
        avatar: User3,
        name: 'Mia Robinson',
        rating: 5,
        date: '6/6/2023',
        comment:
          "Practicing with Devon Lane has been an absolute joy. Her ability to blend mindfulness and physical challenge is unmatched. I leave every class feeling grounded and revitalized. I can't imagine my week without her classes.",
      },
      {
        id: 4,
        avatar: User4,
        name: 'Ethan Carter',
        rating: 3,
        date: '1/8/2023',
        comment:
          "Working with Brooklyn Simmons has brought a new level of balance and peace to my life. Her sessions are thoughtfully structured and always leave me feeling both relaxed and accomplished. She's a fantastic instructor with a true gift for teaching.",
      },
      {
        id: 5,
        avatar: User5,
        name: 'Lily Bennett',
        rating: 5,
        date: '9/8/2023',
        comment:
          'Joining yoga classes with Wade Warren has been one of the best decisions for my health. His clear instructions and gentle encouragement have helped me progress more than I thought possible. Every session is a step toward a better me!',
      },
    ],
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Strength Coach',
    rating: 5.0,
    description:
      'Achieve peak performance with our Strength Coach, a specialist in building muscle and increasing power.',
    imageUrl: Brooklyn,
    about:
      'I have 8 years of experience in the field, having studied various styles of yoga and completed rigorous training programs. I have taught diverse groups, from beginners to advanced practitioners, in both studio and private settings. I have regularly engaged in community events and wellness retreats, inspiring others on their yoga journeys.',
    specialization: [
      'Yoga',
      'Nutrition',
      'Wellness',
      'Mindfulness',
      'Stress Management',
    ],
    certificates: [
      {
        name: 'Mindfulness-Based Stress Reduction (MBSR) Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj73ccY1A/_aJHYcuzBr1k5R4VMKnEUA/edit/',
      },
      {
        name: 'Integrative Yoga Therapy Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj7yrorhs/hu2hzSL_Zdxum5psUnwflQ/edit',
      },
    ],
    upcomingWorkouts: [
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
    ],
    feedback: [
      {
        id: 1,
        avatar: User1,
        name: 'Ava Thompson',
        rating: 5,
        date: '6/2/2025',
        comment:
          "I've been attending classes with Kristin Watson for six months, and the transformation in my flexibility and overall well-being has been incredible. Her calm demeanor and expert guidance make each session a refreshing experience. Highly recommend for anyone looking to enhance their yoga practice!",
      },
      {
        id: 2,
        avatar: User2,
        name: 'Noah Mitchell',
        rating: 4,
        date: '6/8/2024',
        comment:
          'I started sessions with Cameron Hayes three months ago, and I can already feel a significant improvement in my posture and mental clarity. Cameron’s positive energy and personalized approach create such a welcoming environment. Truly a game-changer for my wellness journey!',
      },
      {
        id: 3,
        avatar: User3,
        name: 'Mia Robinson',
        rating: 5,
        date: '6/6/2023',
        comment:
          "Practicing with Devon Lane has been an absolute joy. Her ability to blend mindfulness and physical challenge is unmatched. I leave every class feeling grounded and revitalized. I can't imagine my week without her classes.",
      },
      {
        id: 4,
        avatar: User4,
        name: 'Ethan Carter',
        rating: 3,
        date: '1/8/2023',
        comment:
          "Working with Brooklyn Simmons has brought a new level of balance and peace to my life. Her sessions are thoughtfully structured and always leave me feeling both relaxed and accomplished. She's a fantastic instructor with a true gift for teaching.",
      },
      {
        id: 5,
        avatar: User5,
        name: 'Lily Bennett',
        rating: 5,
        date: '9/8/2023',
        comment:
          'Joining yoga classes with Wade Warren has been one of the best decisions for my health. His clear instructions and gentle encouragement have helped me progress more than I thought possible. Every session is a step toward a better me!',
      },
    ],
  },
  {
    name: 'Bessie Cooper',
    role: 'Functional Fitness Trainer',
    rating: 4.97,
    description:
      'Transform your fitness with our Functional Fitness Trainer, who focuses on exercises that mimic real-life movements.',
    imageUrl: Bessie,
    about:
      'I have 8 years of experience in the field, having studied various styles of yoga and completed rigorous training programs. I have taught diverse groups, from beginners to advanced practitioners, in both studio and private settings. I have regularly engaged in community events and wellness retreats, inspiring others on their yoga journeys.',
    specialization: [
      'Yoga',
      'Nutrition',
      'Wellness',
      'Mindfulness',
      'Stress Management',
    ],
    certificates: [
      {
        name: 'Mindfulness-Based Stress Reduction (MBSR) Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj73ccY1A/_aJHYcuzBr1k5R4VMKnEUA/edit/',
      },
      {
        name: 'Integrative Yoga Therapy Certificate.pdf',
        url: 'https://www.canva.com/design/DAGj7yrorhs/hu2hzSL_Zdxum5psUnwflQ/edit',
      },
    ],
    upcomingWorkouts: [
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
      {
        slot: 'July 9, 9:30',
        duration: '1 hour',
        type: 'Yoga',
      },
    ],
    feedback: [
      {
        id: 1,
        avatar: User1,
        name: 'Ava Thompson',
        rating: 5,
        date: '6/2/2025',
        comment:
          "I've been attending classes with Kristin Watson for six months, and the transformation in my flexibility and overall well-being has been incredible. Her calm demeanor and expert guidance make each session a refreshing experience. Highly recommend for anyone looking to enhance their yoga practice!",
      },
      {
        id: 2,
        avatar: User2,
        name: 'Noah Mitchell',
        rating: 4,
        date: '6/8/2024',
        comment:
          'I started sessions with Cameron Hayes three months ago, and I can already feel a significant improvement in my posture and mental clarity. Cameron’s positive energy and personalized approach create such a welcoming environment. Truly a game-changer for my wellness journey!',
      },
      {
        id: 3,
        avatar: User3,
        name: 'Mia Robinson',
        rating: 5,
        date: '6/6/2023',
        comment:
          "Practicing with Devon Lane has been an absolute joy. Her ability to blend mindfulness and physical challenge is unmatched. I leave every class feeling grounded and revitalized. I can't imagine my week without her classes.",
      },
      {
        id: 4,
        avatar: User4,
        name: 'Ethan Carter',
        rating: 3,
        date: '1/8/2023',
        comment:
          "Working with Brooklyn Simmons has brought a new level of balance and peace to my life. Her sessions are thoughtfully structured and always leave me feeling both relaxed and accomplished. She's a fantastic instructor with a true gift for teaching.",
      },
      {
        id: 5,
        avatar: '../assets/feedbackUsers/user5.png',
        name: 'Lily Bennett',
        rating: 5,
        date: '9/8/2023',
        comment:
          'Joining yoga classes with Wade Warren has been one of the best decisions for my health. His clear instructions and gentle encouragement have helped me progress more than I thought possible. Every session is a step toward a better me!',
      },
    ],
  },
];
