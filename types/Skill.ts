export type Skill = {
    _id: string;
    _createdAt: Date;
    name: string;
    image: string;
    alt: string;
    project:Array<{
        name: string | null;
        slug: string | null;
    }> | null;
}