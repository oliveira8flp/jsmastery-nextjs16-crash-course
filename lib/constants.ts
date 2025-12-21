export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string; // e.g., "2025-11-07"
    time: string; // e.g., "09:00 AM"
};

export const events: EventItem[] = [
    {
        image: "/images/event1.png",
        title: "React Summit US 2025",
        slug: "react-summit-us-2025",
        location: "San Francisco, CA, USA",
        date: "2025-11-07",
        time: "09:00 AM",
    },
    {
        image: "/images/event2.png",
        title: "Next.js Conf",
        slug: "nextjs-conf-2025",
        location: "New York City, NY, USA",
        date: "2025-10-24",
        time: "10:00 AM",
    },
    {
        image: "/images/event3.png",
        title: "Global AI Hackathon",
        slug: "global-ai-hackathon",
        location: "Austin, TX, USA",
        date: "2025-09-15",
        time: "08:30 AM",
    },
    {
        image: "/images/event4.png",
        title: "Tailwind CSS Workshop",
        slug: "tailwind-workshop-online",
        location: "Remote / Online",
        date: "2025-12-01",
        time: "02:00 PM",
    },
    {
        image: "/images/event5.png",
        title: "DevOps Days Europe",
        slug: "devops-days-2025",
        location: "Berlin, Germany",
        date: "2025-11-20",
        time: "09:30 AM",
    }
];