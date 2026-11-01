import g1 from '../assets/g1.jpg';

export const invitationConfig = {
  // Couple details
  couple: {
    groom: "Mahmoud",
    groomTitle: "GROOM",
    bride: "Nour",
    brideTitle: "BRIDE",
    coverGroom: "Mahmoud",
    coverBride: "Nour",
    primary: "Mahmoud & Nour",
    initials: "M & N",
    monogram: "MN",
    eventTitle: "ENGAGEMENT OF",
    ceremonyHeader: "ENGAGEMENT CEREMONY INFO",
    announcementLine1: "WE JOYFULLY ANNOUNCE",
    announcementLine2: "THE ENGAGEMENT OF OUR CHILDREN",
    partyHeader: "THE ENGAGEMENT PARTY WILL TAKE PLACE AT:",
    quote: "Together with our families, we joyfully invite you to celebrate our engagement.",
  },

  // Date & Time (Wednesday, 20 January 2027 at 7:00 PM)
  eventDate: {
    display: "January 20, 2027",
    dayOfWeek: "WEDNESDAY",
    dayNumber: "20",
    monthName: "JANUARY",
    year: "2027",
    time: "7:00 PM",
    welcomeTime: "7:00 PM",
    targetIso: "2027-01-20T19:00:00",
    monthIndex: 0, // 0-based: January = 0
    highlightDay: 20,
  },

  // Venue details (Al Saraya For Parties - Zamalek)
  venue: {
    name: "Al Saraya For Parties",
    subtitle: "Zamalek, Cairo",
    address: "Al Saraya For Parties, Zamalek, Cairo",
    city: "Zamalek, Cairo",
    googleMapsLink: "https://maps.google.com/?q=30.041889,31.221247",
    mapEmbedUrl: "https://maps.google.com/maps?q=30.041889,31.221247&hl=en&z=15&output=embed",
    image: g1,
  },

  // Photos — single photo from public/images/p1.jpg
  gallery: [
    {
      id: 1,
      role: "Couple",
      src: "/images/p1.jpg",
      title: "Mahmoud & Nour",
    },
  ],

  // Schedule / Timeline
  timeline: [
    { time: "18:30", title: "Guest Welcome & Reception" },
    { time: "19:30", title: "Ceremony & Ring Exchange" },
    { time: "20:30", title: "Dinner & Toast" },
    { time: "21:30", title: "First Dance & Music Celebration" },
    { time: "23:00", title: "Cake Cutting & Photos" },
  ],

  // Initial guestbook wishes
  initialWishes: [
    {
      id: "w-1",
      name: "Lucas & Olivia",
      wishes: "Wishing Liam & Sophia a lifetime filled with love, laughter, and endless joy! Congratulations!",
      timestamp: "Today",
      likes: 24,
    },
    {
      id: "w-2",
      name: "Daniel & Emma",
      wishes: "Warmest congratulations Liam & Sophia on your wedding day! Wishing you both the very best!",
      timestamp: "Today",
      likes: 18,
    },
  ],
};
