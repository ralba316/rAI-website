import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Research',
    //Svg: require('@site/static/img/research.svg').default,
    description: (
      <>
        Follow us in our current research
      </>
    ),
  },
  {
    title: 'Products',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Transforming AI infrastructure for the future
      </>
    ),
  },
  {
    title: 'About Us',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Join us in shaping the future of AI
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
