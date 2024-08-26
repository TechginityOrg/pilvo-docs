import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'SMS API',
    Svg: require('@site/static/img/feature1.svg').default,  // Assuming you have the icon in this path
    description: (
      <>
        Programmatically send and receive text messages.
      </>
    ),
    link: '/docs/sms-api',  // Add the link for "Learn More"
  },
  {
    title: 'MMS API',
    Svg: require('@site/static/img/feature2.svg').default,  // Assuming you have the icon in this path
    description: (
      <>
        Engage your customers via picture, audio, and video message.
      </>
    ),
    link: '/docs/mms-api',
  },
  {
    title: 'VOICE API',
    Svg: require('@site/static/img/feature3.svg').default,  // Assuming you have the icon in this path
    description: (
      <>
        Integrate voice calling into your applications.
      </>
    ),
    link: '/docs/voice-api',
  },
  {
    title: 'ZENTRUNK',
    Svg: require('@site/static/img/feature4.svg').default,  // Assuming you have the icon in this path
    description: (
      <>
        Cloud SIP trunking for your VOIP infrastructure.
      </>
    ),
    link: '/docs/zentrunk',
  },
  {
    title: 'CX Platform',
    Svg: require('@site/static/img/feature5.svg').default,  // Assuming you have the icon in this path
    description: (
      <>
        One powerful platform to power your CX.
      </>
    ),
    link: '/docs/cx-platform',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <a className={styles.learnMore} href={link}>Learn More</a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

