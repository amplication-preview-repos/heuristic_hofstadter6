import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";

export type GalleryWhereInput = {
  id?: StringFilter;
  images?: ImageListRelationFilter;
};
