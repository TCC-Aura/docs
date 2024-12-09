import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


// Tipo que define as propriedades de cada recurso
type FeatureItem = {
  title: string;
  description: string;
};

// Lista de recursos com suas informações
const features: FeatureItem[] = [
  {
    title: 'Totem',
    description: 'Totem de Pré-triagem de Acesso aos recursos do ambulatório.',
  },
  {
    title: 'Sistema Interno',
    description: 'Sistema Interno para acompanhamento dos pacientes e gerenciamento interno.',
  },
  {
    title: 'Visor',
    description: 'Visor para exibição de senhas.',
  },
];

// Componente que renderiza um único recurso
function Feature({ title, description }: FeatureItem) {
 // Adicione este log para depuração
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" style={ { color: '#087cbc'}}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Componente principal que renderiza a lista de recursos
export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
