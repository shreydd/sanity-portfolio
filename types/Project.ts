import { PortableTextBlock } from "sanity";


export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    overview: string;
    image: string;
    url: string;
    github: string;
    alt: string;
    content: PortableTextBlock[]; // rich text
}