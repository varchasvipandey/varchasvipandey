import { ImageDataLike } from 'gatsby-plugin-image';
import * as CSS from 'csstype';

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

export interface StyleExtension {
  style?: CSS.Properties;
}
