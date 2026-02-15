import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import style from "./LocationGallery.module.scss";

export const LocationGallery = ({ gallery, poster }) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dqbdkdv4e' } });

  const publicId = Array.isArray(gallery) && gallery.length > 0
    ? gallery[0]
    : poster;

  const img = cld
    .image(publicId)
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(500));

  return <AdvancedImage cldImg={img} className={style.image} />;
};
