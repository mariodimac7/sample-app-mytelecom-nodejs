import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'react-bootstrap/Image';
import image5 from '../../assets/img/slider-homepage.png';

const Slider = () => {
  const { t } = useTranslation('Home');
  return (
    <>
      <Image src={image5} fluid />
    </>
  );
};
export default Slider;
