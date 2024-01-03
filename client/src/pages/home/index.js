import React from 'react';
import { Card } from '../../components';
import { useTranslation } from 'react-i18next';
import Hero from './hero';
import Slider from './slider';
import PreFooter from './preFooter';
import img1 from '../../assets/img/img-assumption.svg';
import img2 from '../../assets/img/img-purchase.svg';
import img3 from '../../assets/img/img-service.svg';
import img4 from '../../assets/img/img-powerform.svg';
import img5 from '../../assets/img/img-webforms.svg';
import img6 from '../../assets/img/img-whatsapp.svg';
import { Row } from 'react-bootstrap';

const Home = () => {
  const { t } = useTranslation('Home');
  return (
    <>
      <div className="container-fluid home-container">
        <div className="hero-section" />
        <div className="justify-content-center text-center d-flex">
          <Row className="cards-container">
            <Hero />
            <Card
              additionalClass="card-1"
              img={img1}
              title={t('Card1.Title')}
              description={t('Card1.Description')}
              linkTo="/assumptionLiability"
              getStarted={t('Card1.Button')}
              featureTitle={t('Card1.FeaturesTitle')}
              featureList={t('Card1.FeaturesList')}
            />
            <div className="w-100 d-block d-md-none" />
            <Card
              additionalClass="card-2"
              img={img2}
              title={t('Card2.Title')}
              description={t('Card2.Description')}
              linkTo="/purchaseDevice"
              getStarted={t('Card2.Button')}
              featureTitle={t('Card2.FeaturesTitle')}
              featureList={t('Card2.FeaturesList')}
            />
            <div className="w-100 d-block d-md-none" />
            <Card
              additionalClass="card-3"
              img={img3}
              title={t('Card3.Title')}
              description={t('Card3.Description')}
              linkTo="/serviceChange"
              getStarted={t('Card3.Button')}
              featureTitle={t('Card3.FeaturesTitle')}
              featureList={t('Card3.FeaturesList')}
            />
          </Row>
        </div>
      </div>
      <div className="slider-homepage">
        <div className="justify-content-center text-center d-flex">
          <Slider />
        </div>
      </div>
      <div className="container-fluid">
        <div className="justify-content-center text-center d-flex">
          <Row className="cards-container">
            <Card
              additionalClass="card-1"
              img={img4}
              title={t('Card4.Title')}
              description={t('Card4.Description')}
              linkTo="/powerform"
              getStarted={t('Card4.Button')}
              featureTitle={t('Card4.FeaturesTitle')}
              featureList={t('Card4.FeaturesList')}
            />
            <div className="w-100 d-block d-md-none" />
            <Card
              additionalClass="card-2"
              img={img5}
              title={t('Card5.Title')}
              description={t('Card5.Description')}
              linkTo="/purchaseDevice"
              getStarted={t('Card5.Button')}
              featureTitle={t('Card5.FeaturesTitle')}
              featureList={t('Card5.FeaturesList')}
            />
            <div className="w-100 d-block d-md-none" />
            <Card
              additionalClass="card-3"
              img={img6}
              title={t('Card6.Title')}
              description={t('Card6.Description')}
              linkTo="/serviceChange"
              getStarted={t('Card6.Button')}
              featureTitle={t('Card6.FeaturesTitle')}
              featureList={t('Card6.FeaturesList')}
            />
          </Row>
        </div>
      </div>
      <PreFooter />
    </>
  );
};
export default Home;
