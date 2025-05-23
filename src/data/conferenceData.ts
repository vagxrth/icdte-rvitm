import { Speaker, ImportantDate, CommitteeMember, Track, RegistrationType, Event } from '../types';

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
    title: 'Paper Submission Deadline',
    date: 'September 30, 2024',
    description: 'Deadline for submitting full papers and extended abstracts'
  },
  {
    id: 2,
    title: 'Notification of Acceptance',
    date: 'November 15, 2024',
    description: 'Authors will be notified about paper acceptance'
  },
  {
    id: 3,
    title: 'Camera-ready Submission',
    date: 'December 20, 2024',
    description: 'Final camera-ready papers due'
  },
  {
    id: 4,
    title: 'Early Bird Registration',
    date: 'January 15, 2025',
    description: 'Last day for early bird registration discount'
  },
  {
    id: 5,
    title: 'Conference Dates',
    date: 'March 10-12, 2025',
    description: 'Main conference events'
  }
];

export const committeeMembers: CommitteeMember[] = [
  {
    id: 1,
    name: 'Prof. David Williams',
    role: 'General Chair',
    affiliation: 'University of Cambridge',
    country: 'United Kingdom'
  },
  {
    id: 2,
    name: 'Dr. Li Wei',
    role: 'Program Chair',
    affiliation: 'Tsinghua University',
    country: 'China'
  },
  {
    id: 3,
    name: 'Dr. Ananya Patel',
    role: 'Technical Program Committee Chair',
    affiliation: 'Indian Institute of Technology Delhi',
    country: 'India'
  },
  {
    id: 4,
    name: 'Prof. Maria Gonzalez',
    role: 'Publication Chair',
    affiliation: 'Technical University of Madrid',
    country: 'Spain'
  },
  {
    id: 5,
    name: 'Dr. Kevin Park',
    role: 'Finance Chair',
    affiliation: 'Seoul National University',
    country: 'South Korea'
  },
  {
    id: 6,
    name: 'Prof. Lisa Brown',
    role: 'Publicity Chair',
    affiliation: 'University of Toronto',
    country: 'Canada'
  }
];

export const registrationTypes: RegistrationType[] = [
  {
    id: 1,
    type: 'Student',
    price: 200,
    description: 'For enrolled students',
    features: [
      'Access to all sessions',
      'Conference materials',
      'Coffee breaks',
      'Student networking event'
    ]
  },
  {
    id: 2,
    type: 'Academic',
    price: 350,
    description: 'For academic faculty and researchers',
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
    type: 'Industry',
    price: 550,
    description: 'For industry professionals',
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
    date: 'March 10, 2025',
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
        location: 'Grand Ballroom',
        speakers: ['Prof. David Williams']
      },
      {
        id: 103,
        time: '09:30 - 10:30',
        title: 'Keynote: Future of AI in Engineering',
        location: 'Grand Ballroom',
        speakers: ['Dr. Emma Rodriguez']
      },
      {
        id: 104,
        time: '10:30 - 11:00',
        title: 'Coffee Break',
        location: 'Exhibition Hall'
      },
      {
        id: 105,
        time: '11:00 - 12:30',
        title: 'Parallel Sessions: AI & Machine Learning',
        location: 'Room A & B'
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
    date: 'March 11, 2025',
    activities: [
      {
        id: 201,
        time: '09:00 - 10:00',
        title: 'Keynote: Quantum Computing Applications',
        location: 'Grand Ballroom',
        speakers: ['Prof. Hiroshi Tanaka']
      },
      {
        id: 202,
        time: '10:00 - 10:30',
        title: 'Coffee Break',
        location: 'Exhibition Hall'
      },
      {
        id: 203,
        time: '10:30 - 12:00',
        title: 'Parallel Sessions: Cybersecurity & IoT',
        location: 'Room A & B'
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
        location: 'Grand Ballroom',
        speakers: ['Dr. Sarah Johnson', 'Prof. Michael Chen']
      }
    ]
  }
];

export const conferenceInfo = {
  title: 'International Conference on Digital Technology and Engineering 2025',
  shortTitle: 'ICDTE 2025',
  dates: 'March 10-12, 2025',
  location: 'RV Institute of Technology and Management, Bengaluru',
  description: 'ICDTE 2025 brings together researchers, practitioners, and industry experts to share cutting-edge research, innovations, and applications in digital technology and engineering.',
  email: 'info.rvitm@rvei.edu.in',
  phone: '+91 8951758140',
  venueAddress: 'Chaithanya Layout, 8th Phase, JP Nagar, Bangalore, Karnataka - 560076',
  organizers: ['IEEE Singapore Section', 'National University of Singapore', 'Singapore Institute of Technology'],
  sponsors: [
    {
      name: 'TechCorp International',
      level: 'Platinum'
    },
    {
      name: 'InnovateSG',
      level: 'Gold'
    },
    {
      name: 'Future Systems',
      level: 'Silver'
    }
  ]
};