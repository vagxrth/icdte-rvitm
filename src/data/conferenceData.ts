import { Speaker, ImportantDate, Track, RegistrationType, Event } from '../types';

export const tracks: Track[] = [
  {
    id: 1,
    title: 'Artificial Intelligence and Machine Learning',
    description: 'Latest advances in AI/ML algorithms, applications, and methodologies',
    topics: [
      'Deep Learning Architectures and Applications',
      'Natural Language Processing and Conversational AI',
      'Explainable AI and Ethical Machine Learning',
      'AI for Healthcare, Finance, and Smart Cities',
      'Reinforcement Learning and Autonomous Systems',
      'Generative AI and Foundation Models'
    ]
  },
  {
    id: 2,
    title: 'Internet of Things (IoT) and Cyber-Physical Systems',
    description: 'Innovative solutions in IoT architectures and cyber-physical system integration',
    topics: [
      'Smart Sensors and Actuators in IoT',
      'IoT Protocols and Edge Intelligence',
      'Cyber-Physical Systems for Smart Manufacturing and Industry 4.0',
      '5G/6G and Wireless Technologies for IoT Applications',
      'Security and Privacy in IoT Systems',
      'Energy-Efficient IoT and Sustainable Connectivity',
      'Interoperability and Standardization in IoT Ecosystems'
    ]
  },
  {
    id: 3,
    title: 'Cybersecurity and Blockchain',
    description: 'Advanced security solutions and distributed ledger technologies',
    topics: [
      'Network Security and Threat Detection',
      'Blockchain Technologies for Secure Transactions and Identity Management',
      'Cryptography and Secure Protocols',
      'AI in Cyber Threat Prediction and Response',
      'Cybersecurity Challenges in Critical Infrastructure and IoT'
    ]
  },
  {
    id: 4,
    title: 'Cloud, Fog, Edge, and Next-Generation Networks',
    description: 'Cutting-edge research in distributed computing and network architectures',
    topics: [
      'Cloud-Native Application Development and Orchestration',
      'Fog and Edge Computing for Low Latency Applications',
      'Next-Gen Network Architectures (SDN/NFV)',
      'Resource Allocation and Load Balancing in Distributed Systems',
      'Security and Privacy in Multi-Tier Computing Environments'
    ]
  },
  {
    id: 5,
    title: 'Embedded Systems and Robotics',
    description: 'Innovations in embedded technology and robotic systems',
    topics: [
      'Real-Time Operating Systems and Embedded Software Design',
      'Autonomous and Swarm Robotics',
      'Hardware-Software Co-design and Optimization',
      'Robotics in Healthcare, Agriculture, and Industry',
      'Sensor Fusion and Control Algorithms in Embedded Platforms'
    ]
  }
];

export const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Dr. Emma Rodriguez',
    title: 'Professor of Artificial Intelligence',
    organization: 'Stanford University',
    bio: 'Dr. Rodriguez specializes in neural networks and deep learning with over 15 years of experience in AI research.',
    image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=800',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    }
  },
  {
    id: 2,
    name: 'Prof. Hiroshi Tanaka',
    title: 'Director of Quantum Computing Institute',
    organization: 'Tokyo Institute of Technology',
    bio: 'Leading researcher in quantum computing algorithms and applications with numerous patents in the field.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
    social: {
      linkedin: 'https://linkedin.com',
      website: 'https://example.com',
    }
  },
  {
    id: 3,
    name: 'Dr. Sarah Johnson',
    title: 'Chief Technology Officer',
    organization: 'TechFusion Innovations',
    bio: 'Industrial leader with expertise in bridging academic research and practical applications in advanced engineering.',
    image: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=800',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    }
  },
  {
    id: 4,
    name: 'Prof. Michael Chen',
    title: 'Head of Robotics Department',
    organization: 'MIT',
    bio: 'Pioneer in autonomous robotic systems and human-robot interaction paradigms.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      website: 'https://example.com',
    }
  },
];

export const importantDates: ImportantDate[] = [
  {
    id: 1,
    title: 'Manuscript Submission Starts',
    date: 'June 05, 2025',
    description: 'Authors can submit their manuscripts'
  },
  {
    id: 2,
    title: 'Manuscript Submission Deadline',
    date: 'July 10, 2025',
    description: 'Last day for submitting manuscripts'
  },
  {
    id: 3,
    title: 'Notification of Acceptance',
    date: 'July 18, 2025',
    description: 'Notification of acceptance will be sent to authors'
  },
  {
    id: 4,
    title: 'Early Bird Registration Deadline',
    date: 'August 08, 2025',
    description: 'Last day for early bird registration'
  },
  {
    id: 5,
    title: 'Camera-ready Submission',
    date: 'September 01, 2025',
    description: 'Deadline for submitting camera-ready papers'
  },
  {
    id: 6,
    title: 'Registration Deadline',
    date: 'September 15, 2025',
    description: 'Last day for registration'
  },
  {
    id: 7,
    title: 'Conference Dates',
    date: 'October 16-17, 2025',
    description: 'Main dates of the conference'
  }
];

export const registrationTypes: RegistrationType[] = [
  {
    id: 1,
    type: 'Under Graduate Students ',
    price: 3500,
    description: 'For Under Graduate Students',
    features: [
      'Access to all sessions',
      'Conference materials',
      'Coffee breaks',
      'Student networking event'
    ]
  },
  {
    id: 2,
    type: 'Post Graduate Students',
    price: 4000,
    description: 'For Post Graduate Students',
    features: [
      'Access to all sessions',
      'Conference materials',
      'Coffee breaks and lunches',
      'Welcome reception',
      'Gala dinner'
    ]
  },
  {
    id: 3,
    type: 'Academicians',
    price: 4500,
    description: 'For Academicians',
    features: [
      'Access to all sessions',
      'Conference materials',
      'Coffee breaks and lunches',
      'Welcome reception',
      'Gala dinner',
      'Industry networking event'
    ]
  },
  {
    id: 4,
    type: 'Industry Delegates',
    price: 5000,
    description: 'For Industry Delegates',
    features: [
      'Access to all sessions',
      'Conference materials',
      'Coffee breaks and lunches',
      'Welcome reception',
      'Gala dinner',
      'Industry networking event'
    ]
  }
];

export const conferenceSchedule: Event[] = [
  {
    id: 1,
    day: 'Day 1',
    date: 'October 16, 2025',
    activities: [
      {
        id: 101,
        time: '08:00 - 09:00',
        title: 'Registration',
        location: 'Main Lobby'
      },
      {
        id: 102,
        time: '09:00 - 09:30',
        title: 'Opening Ceremony',
        location: 'RVITM Auditorium',
        speakers: ['To be announced']
      },
      {
        id: 103,
        time: '09:30 - 10:30',
        title: 'Keynote: Future of AI in Engineering',
        location: 'RVITM Auditorium',
        speakers: ['To be announced']
      },
      {
        id: 104,
        time: '10:30 - 11:00',
        title: 'Coffee Break',
        location: 'RVITM Auditorium'
      },
      {
        id: 105,
        time: '11:00 - 12:30',
        title: 'Parallel Sessions: AI & Machine Learning',
        location: 'Seminar Hall'
      },
      {
        id: 106,
        time: '12:30 - 14:00',
        title: 'Lunch',
        location: 'Dining Hall'
      }
    ]
  },
  {
    id: 2,
    day: 'Day 2',
    date: 'October 17, 2025',
    activities: [
      {
        id: 201,
        time: '09:00 - 10:00',
        title: 'Keynote: Quantum Computing Applications',
        location: 'RVITM Auditorium',
        speakers: ['To be announced']
      },
      {
        id: 202,
        time: '10:00 - 10:30',
        title: 'Coffee Break',
        location: 'RVITM Auditorium'
      },
      {
        id: 203,
        time: '10:30 - 12:00',
        title: 'Parallel Sessions: Cybersecurity & IoT',
        location: 'Seminar Hall'
      },
      {
        id: 204,
        time: '12:00 - 13:30',
        title: 'Lunch',
        location: 'Dining Hall'
      },
      {
        id: 205,
        time: '13:30 - 15:00',
        title: 'Panel Discussion: Industry 4.0',
        location: 'RVITM Auditorium',
        speakers: ['To be announced']
      }
    ]
  }
];

export const conferenceInfo = {
  title: 'International Conference on Digital Technology and Engineering 2025',
  shortTitle: 'ICDTE 2025',
  dates: 'October 16-17, 2025',
  location: 'RV Institute of Technology and Management, Bengaluru',
  description: 'ICDTE 2025 brings together Researchers, Practitioners, and Industry Experts to share cutting-edge Research, Innovations, and Applications in Digital Technology and Engineering.',
  email: 'conference.rvitm@rvei.edu.in',
  phone: '+91 99641 57771',
  venueAddress: 'Chaithanya Layout, 8th Phase, JP Nagar, Bangalore, Karnataka - 560076',
  partners: [
    {
      name: 'Springer',
      logo: '/springer.jpg'
    }
  ]
};