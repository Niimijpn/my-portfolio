export interface Scrapbox {
  title: string;
  user: {
    id: string;
    name: string;
    displayName: string;
    photo: string;
  };
  descriptions: string[];
  pin: number;
  views: number;
  linked: number;
  commitId: string;
  created: number;
  updated: number;
  accessed: number;
  snapshotCreated: number;
  snapshotUpdated: number;
  lines: {
    id: string;
    text: string;
    userId: string;
    created: number;
    updated: number;
  }[];
  image: string;
  collaborators: string[];
  relatedPages: {
    links1hop: string[];
    links2hop: string[];
    projectLinks1hop: string[];
    hasBackLinksOrIcons: boolean;
    search: string;
    searchBackend: string;
  };
  links: string[];
  icons: string[];
  tags: string[];
}
