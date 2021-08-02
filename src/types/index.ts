import { ImageDataLike } from 'gatsby-plugin-image';

export interface FrontmatterProps {
  title?: string;
  date?: Date;
  publishedOn?: string;
  thumb: ImageDataLike;
  url: string;
  secondaryUrl?: string;
  headline?: string;
  description?: string;
}

export interface QueryNode {
  frontmatter: FrontmatterProps;
  id: string;
}
