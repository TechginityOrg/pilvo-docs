import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h3 className="hero__title">Add SMS text messaging or voice calling functionality to your applications in minutes</h3>
      </div>
    </header>
  );
}

function Card({ title, description, link, imgSrc }) {
  return (
    <div className={clsx('col col--4', styles.card)}>
      <div className={styles.cardContent}>
        <img src={imgSrc} alt={title} className={styles.cardImg} />
        <div className={styles.cardText}>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link className="button-started" to={link}>Get Started &#8594; </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, cards }) {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">{title}</h2>
        <div className="row">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const sections = [
    {
      title: 'Messaging API Platform',
      cards: [
        {
          title: 'Messaging API Platform',
          description: 'Programmatically send and receive text messages globally.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/dist/images/v2/icon/ic-sms-colored.svg',
        },
        {
          title: 'Voice API Platform',
          description: 'Make and receive phone calls and add powerful functionality to your voice calls.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/dist/images/v2/header/drop-ic-voice.svg',
        },
        {
          title: 'Verify API',
          description: 'Verify users globally with a multi-channel 2FA solution.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/dist/images/v2/header/verify-api-ic.svg',
        },
      ],
    },
    {
      title: 'How-to guides',
      cards: [
        {
          title: 'Voice Notification',
          description: 'Send audio notifications using voice calls.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/posts/images/use-cases/voice-notification.svg',
        },
        {
          title: 'Voice Alerts',
          description: 'Alert users immediately using a voice call.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/posts/images/use-cases/voice-alert.svg',
        },
        {
          title: 'Voice Survey',
          description: 'Conduct surveys over a voice call.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/posts/images/use-cases/voice-survey.svg',
        },
        {
          title: 'Call Forwarding',
          description: 'Redirect incoming calls to another phone number.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/posts/images/use-cases/call-forwarding.svg',
        },
        {
          title: 'Conference with PIN',
          description: 'Connect multiple people in a secure voice call.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/posts/images/use-cases/conference.svg',
        },
        {
          title: 'SMS Notification',
          description: 'Notify users with regular updates using SMS.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/posts/images/use-cases/sms-notification.svg',
        },
        {
          title: 'SMS Survey',
          description: 'Send and receive SMS texts to conduct surveys.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/posts/images/use-cases/2-way-sms.svg',
        },
        {
          title: 'Phone System IVR',
          description: 'Deliver focused services based on customer inputs.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/posts/images/use-cases/ivr.svg',
        },
        {
          title: 'Voicemail',
          description: 'Record important customer information while you’re away.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/posts/images/use-cases/voicemail.svg',
        },
      ],
    },
    {
      title: 'Reference guides',
      cards: [
        {
          title: 'PHLO Reference',
          description: 'Drag, drop, and deploy to create voice calls and SMS messages in minutes.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/new_docs/images/ic-phlo.svg',
        },
        {
          title: 'API Reference',
          description: 'Build voice call and SMS applications in any web standard language.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/new_docs/images/ic-api-reference.svg',
        },
        {
          title: 'XML Reference',
          description: 'Synchronously control a call or a message.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/new_docs/images/ic-xml-reference.svg',
        },
      ],
    },
    {
      title: 'More resources',
      cards: [
        {
          title: 'Client SDKs',
          description: 'Embed VoIP in your web or mobile app.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/new_docs/images/ic-sdk.svg',
        },
        {
          title: 'Integrations',
          description: 'Out-of-the-box integrations with Plivo.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/new_docs/images/ic-integration.svg',
        },
        {
          title: 'Support',
          description: 'Find answers to all your questions.',
          link: '/',
          imgSrc: 'https://docs.plivo.com/assets/new_docs/images/ic-faq.svg',
        },
      ],
    },
  ];

  return (
    <Layout
      title="Plivo - World at Your Doorstep"
      description="Add SMS text messaging or voice calling functionality to your applications in minutes"
    >
      <HomepageHeader />
      <main>
        {sections.map((section, idx) => (
          <Section key={idx} {...section} />
        ))}
      </main>
    </Layout>
  );
}
