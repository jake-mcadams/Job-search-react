interface listingProps {
    [id: number]: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  }

  interface Categories {
    languages: string[];
    tools: string[];
  }

export type { listingProps, Categories };