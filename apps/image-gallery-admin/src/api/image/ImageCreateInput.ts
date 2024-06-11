import { GalleryWhereUniqueInput } from "../gallery/GalleryWhereUniqueInput";

export type ImageCreateInput = {
  description?: string | null;
  gallery?: GalleryWhereUniqueInput | null;
  title?: string | null;
  url?: string | null;
};
