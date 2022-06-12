import { Dispatch, SetStateAction } from "react";

interface listingProps extends searchProps{
    // [id: number]: number;
    readonly id?: string;
    company?: string;
    logo?: string;
    new?: boolean;
    featured?: boolean;
    position?: string;
    role?: string;
    level?: string;
    postedAt?: string;
    contract?: string;
    location?: string;
    languages?: string[];
    tools?: string[];
    children?: React.ReactNode;
  }

interface searchProps {
  filter?: string[],
  toggleFilter?: Dispatch<SetStateAction<string[] >>;
  clearFilter?: () => any;
  updateFilter?: (params: string[]) =>any;
}



export type { listingProps, searchProps };