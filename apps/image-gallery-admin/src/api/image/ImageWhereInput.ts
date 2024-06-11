import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GalleryWhereUniqueInput } from "../gallery/GalleryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ImageWhereInput = {
  description?: StringNullableFilter;
  gallery?: GalleryWhereUniqueInput;
  id?: StringFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
