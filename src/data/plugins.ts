export type Plugin = {
    slug: string;
    name: string;
    description: string;
    category: string;
    status: 'In development' | 'Coming soon';
    version: string;
    minecraft: string;
    repository: string;
    releaseUrl: string;
    docsUrl: string;
};

export const plugins: Plugin[] = [
];
