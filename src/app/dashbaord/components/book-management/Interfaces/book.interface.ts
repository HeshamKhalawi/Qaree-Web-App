export interface Book {
    name: string;
    authors: string[];
    description: string;
    id?: string;
    isbn?: string[];
    genres: string[];
    publishDate: string;
    image?: string;
  }