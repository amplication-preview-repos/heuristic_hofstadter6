import { ImageCreateNestedManyWithoutGalleriesInput } from "./ImageCreateNestedManyWithoutGalleriesInput";

export type GalleryCreateInput = {
  images?: ImageCreateNestedManyWithoutGalleriesInput;
};
