// Single source for links, verified stats, plans and gallery assets.

export const LINKS = {
  enroll: 'https://forms.gle/Qsgw5EGWJuNaVai36',
  book: 'https://calendly.com/liftingmonkfitness/consulation-call',
  instagram: 'https://www.instagram.com/lifting_monk?igsh=bzN5cnhianNrbnJm',
  youtube: 'https://youtube.com/@lifting_monk?si=i05FHNZKNzb_9xrv',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/plans', label: 'Plans' },
  { href: '/transformations', label: 'Transformations' },
];

export const STATS = [
  { value: '10+', label: 'Years in fitness' },
  { value: '100+', label: 'Clients transformed' },
  { value: '10K+', label: 'Followers' },
  { value: '5M+', label: 'Content views' },
];

export const BENEFITS = [
  { title: 'Personalized Training Plan', text: 'Structured workouts based on your goal and lifestyle.' },
  { title: 'Simple Nutrition Plan', text: 'No extreme dieting. Just practical eating you can follow daily.' },
  { title: 'Habit & Discipline Coaching', text: 'Build routines that keep you consistent even on bad days.' },
  { title: 'Weekly Check-ins', text: 'Track progress and make smart adjustments.' },
  { title: '1:1 Consultation Calls', text: 'Fix your mistakes and get clarity instantly.' },
  { title: 'Daily Accountability Support', text: 'Stay on track. No excuses.' },
];

export const PLANS = [
  {
    id: '3',
    value: '3 Months',
    numeral: '03',
    eyebrow: 'Foundation',
    description:
      'A structured start. Learn the training, the eating and the routines that everything else is built on.',
  },
  {
    id: '6',
    value: '6 Months',
    numeral: '06',
    eyebrow: 'Progression',
    description:
      'Time to turn consistency into a habit, and to keep progressing with weekly adjustments along the way.',
  },
  {
    id: '12',
    value: '12 Months',
    numeral: '12',
    eyebrow: 'Commitment',
    description:
      'A full year with your coach. For people serious about long-term change and a lifestyle that lasts.',
  },
];

// One entry per client transformation, all shown in the same square before/after frame.
// `photos` is either one ready-made collage (before left, after right) or a [before, after] pair.
// Natural sizes are kept for the full-size viewer; `position` sets what the square frame keeps.
export const GALLERY = [
  { id: 'gallery9', photos: [{ src: '/gallery9.jpg', width: 1024, height: 1024 }] },
  { id: 'gallery8', photos: [{ src: '/gallery8.jpg', width: 1024, height: 1024 }] },
  { id: 'gallery1', photos: [{ src: '/gallery1.jpg', width: 1024, height: 1024 }] },
  // Slightly taller collage with a caption strip at the bottom; the frame keeps the top.
  { id: 'gallery5', photos: [{ src: '/gallery5.jpg', width: 617, height: 677, position: 'top' }] },
  {
    id: 'client-a',
    photos: [
      { src: '/client-a-2.jpg', width: 720, height: 1074, position: 'top' },
      { src: '/client-a-1.jpg', width: 511, height: 1080, position: 'top' },
    ],
  },
  {
    id: 'client-b',
    photos: [
      { src: '/client-b-2.jpg', width: 1201, height: 967 },
      { src: '/client-b-1.jpg', width: 1202, height: 977 },
    ],
  },
].map((g, i, all) => ({
  ...g,
  alt: `Client transformation, before and after, ${i + 1} of ${all.length}`,
}));

export const FOR_YOU = [
  'You start but never stay consistent',
  'You lack discipline in routine',
  'You want a strong, aesthetic physique',
  "You're serious about long-term change",
];

export const NOT_FOR_YOU = [
  'You want quick results without effort',
  'You rely only on motivation',
  "You're not ready to stay consistent",
];
