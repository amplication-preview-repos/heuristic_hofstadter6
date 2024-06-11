import { Gallery } from "../gallery/Gallery";

export type Image = {
  createdAt: Date;
  description: string | null;
  gallery?: Gallery | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  url: string | null;
};
