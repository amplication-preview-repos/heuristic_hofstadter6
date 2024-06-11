import { Gallery as TGallery } from "../api/gallery/Gallery";

export const GALLERY_TITLE_FIELD = "id";

export const GalleryTitle = (record: TGallery): string => {
  return record.id?.toString() || String(record.id);
};
