import { StaticImageData } from 'next/image'; // Assuming Next.js or similar Image type, otherwise remove
// Fallback if StaticImageData is not available or remove if not using Next.js Image component
type ImageSrc = string | StaticImageData;

export interface Video {
  id: string;
  thumbnail: ImageSrc;
  title: string;
  channelName: string;
  channelAvatar: ImageSrc;
  views: number;
  uploadDate: string;
  duration: string;
  description: string;
  videoUrl: string;
}

export const videos: Video[] = [
  {
    id: '1',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg',
    title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
    channelName: 'Rick Astley',
    channelAvatar: 'https://yt3.ggpht.com/a-/AAuE7mB-yJ1v-jK4_J1_X1Q1Y1Z1A1B1C1D1E1F1G=s68-c-k-c0x00ffffff-no-rj-mo',
    views: 1500000000,
    uploadDate: '2009-10-25T14:30:00Z',
    duration: '3:33',
    description: 'The official video for “Never Gonna Give You Up” by Rick Astley. \n\nListen to Rick Astley: https://RickAstley.lnk.to/listenYD\n\nSubscribe to the official Rick Astley YouTube channel: https://RickAstley.lnk.to/subscribeYD\n\nFollow Rick Astley:\nFacebook: https://RickAstley.lnk.to/followFI/facebook\nInstagram: https://RickAstley.lnk.to/followFI/instagram\nTwitter: https://RickAstley.lnk.to/followFI/twitter\nWebsite: https://RickAstley.lnk.to/followFI/website\nSpotify: https://RickAstley.lnk.to/followFI/spotify',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    id: '2',
    thumbnail: 'https://i.ytimg.com/vi/kLq1U_N4sH4/hq720.jpg',
    title: 'Lo-fi hip hop radio - beats to relax/study to',
    channelName: 'Lofi Girl',
    channelAvatar: 'https://yt3.ggpht.com/a-/AAuE7mB_R1Z2Y3X4W5V6U7T8S9A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S=s68-c-k-c0x00ffffff-no-rj-mo',
    views: 800000000,
    uploadDate: '2018-02-28T10:00:00Z',
    duration: 'LIVE',
    description: '🎶 Listen to Lofi Girl on all platforms: https://fanlink.to/lofigirl-music\n\n🌎 Lofi Girl social media:\nDiscord: https://discord.gg/lofigirl\nInstagram: https://www.instagram.com/lofii.girl/\nTwitter: https://twitter.com/lofigirl\nWebsite: https://www.lofii.girl/\n\n🎨 Artwork by Juan Pablo Machado\nInstagram: https://www.instagram.com/juan_pablo_machado/\nWebsite: https://www.juanpablomachado.com/',
    videoUrl: 'https://www.youtube.com/embed/kLq1U_N4sH4?autoplay=1',
  },
  {
    id: '3',
    thumbnail: 'https://i.ytimg.com/vi/q_q6pq4qK4M/hq720.jpg',
    title: 'MKBHD - iPhone 15 Pro Review: It’s a Phone!',
    channelName: 'Marques Brownlee',
    channelAvatar: 'https://yt3.ggpht.com/a-/AAuE7mB_S5T6R7Q8P9O0N1M2L3K4J5I6H7G8F9E0D1C2B3A4S5R6Q7P8O9N0M1L2K3J4I5H6G7F8E9D0C1B2A3=s68-c-k-c0x00ffffff-no-rj-mo',
    views: 15000000,
    uploadDate: '2023-09-22T18:00:00Z',
    duration: '12:34',
    description: 'iPhone 15 Pro review after using it for a week. Is it a good upgrade? What\'s new with the Dynamic Island, USB-C, Action Button, and camera?\n\nFollow me on social media!\nTwitter: https://twitter.com/MKBHD\nInstagram: https://www.instagram.com/mkbhd\nFacebook: https://www.facebook.com/MKBHD',
    videoUrl: 'https://www.youtube.com/embed/q_q6pq4qK4M?autoplay=1',
  },
  {
    id: '4',
    thumbnail: 'https://i.ytimg.com/vi/JGwWc8A-GzE/hq720.jpg',
    title: 'React Crash Course 2024 | Learn React in One Video',
    channelName: 'Traversy Media',
    channelAvatar: 'https://yt3.ggpht.com/a-/AAuE7mB_T7S8R9Q0P1O2N3M4L5K6J7I8H9G0F1E2D3C4B5A6S7R8Q9P0O1N2M3L4K5J6I7H8G9F0E1D2C3B4A5=s68-c-k-c0x00ffffff-no-rj-mo',
    views: 2300000,
    uploadDate: '2024-01-15T12:00:00Z',
    duration: '1:45:00',
    description: 'Learn React from scratch in this crash course for beginners. We\'ll cover components, props, state, hooks, routing, and more!',
    videoUrl: 'https://www.youtube.com/embed/JGwWc8A-GzE?autoplay=1',
  },
  {
    id: '5',
    thumbnail: 'https://i.ytimg.com/vi/X_z4R2d4D7I/hq720.jpg',
    title: 'The Simplest AI Explanation Ever',
    channelName: '3Blue1Brown',
    channelAvatar: 'https://yt3.ggpht.com/a-/AAuE7mB_U9T0S1R2Q3P4O5N6M7L8K9J0I1H2G3F4E5D6C7B8A9S0R1Q2P3O4N5M6L7K8J9I0H1G2F3E4D5C6B7A8=s68-c-k-c0x00ffffff-no-rj-mo',
    views: 18000000,
    uploadDate: '2023-05-10T16:00:00Z',
    duration: '25:10',
    description: 'An intuitive introduction to what artificial intelligence is and how it works, focusing on neural networks and deep learning.',
    videoUrl: 'https://www.youtube.com/embed/X_z4R2d4D7I?autoplay=1',
  },
  {
    id: '6',
    thumbnail: 'https://i.ytimg.com/vi/0p_w-N2f43A/hq720.jpg',
    title: 'Cooking with Samin Nosrat: Salt, Fat, Acid, Heat',
    channelName: 'Netflix',
    channelAvatar: 'https://yt3.ggpht.com/a-/AAuE7mB_V0T1S2R3Q4P5O6N7M8L9K0J1I2H3G4F5E6D7C8B9A0S1R2Q3P4O5N6M7L8K9J0I1H2G3F4E5D6C7B8A9=s68-c-k-c0x00ffffff-no-rj-mo',
    views: 7500000,
    uploadDate: '2018-10-11T19:00:00Z',
    duration: '52:00',
    description: 'Chef and food writer Samin Nosrat travels the world to explore the four basic keys to great cooking: salt, fat, acid, and heat.',
    videoUrl: 'https://www.youtube.com/embed/0p_w-N2f43A?autoplay=1',
  }
];
