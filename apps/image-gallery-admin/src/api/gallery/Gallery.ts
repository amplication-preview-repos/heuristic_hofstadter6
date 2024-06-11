import { Image } from "../image/Image";

export type Gallery = {
  createdAt: Date;
  id: string;
  images?: Array<Image>;
  updatedAt: Date;
};
