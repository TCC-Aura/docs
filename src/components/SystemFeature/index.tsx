import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function SystemFeature(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <div className={styles.info}>
          <p className={styles.title}>Sistema de Gerenciamento Interno</p>
          <p className={styles.subtitle}>O Sistema Interno é a ferramenta que capacita os funcionários do ambulatório a gerenciarem todas as atividades e processos.</p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src="/icons/team-arrows-in.svg" alt="icon" className={styles.iconImg} />
            </div>

            <div className={styles.textosCard}>
              <p className={styles.titleInfo}>Gerenciamento de Pacientes</p>
              <p className={styles.descriptionInfo}>Organiza e acompanha informações dos pacientes de forma eficiente.</p>
            </div>
          </div>

          <div className={styles.card}>
              <div className={styles.icon}>
                <img src="/icons/desktop-graph-checkmark.svg" alt="icon" className={styles.iconImg}/>
              </div>

              <div className={styles.textosCard}>
                <p className={styles.titleInfo}>Controle Interno</p>
                <p className={styles.descriptionInfo}>Facilita a gestão e o monitoramento dos funcionários.</p>
              </div>
          </div>

          <div className={styles.card}>
              <div className={styles.icon}>
                <img src="/icons/core-data.svg" alt="icon" className={styles.iconImg}/>
              </div>

              <div className={styles.textosCard}>
                <p className={styles.titleInfo}>Gestão eficiente de Dados</p>
                <p className={styles.descriptionInfo}>Centraliza e organiza dados de maneira simples e acessível.</p>
              </div>
          </div>
          
          <div className={styles.card}>
              <div className={styles.icon}>
                <img src="/icons/plan-floorplan-edit.svg" alt="icon" className={styles.iconImg}/>
              </div>

              <div className={styles.textosCard}>
                <p className={styles.titleInfo}>Gerenciamento de Salas</p>
                <p className={styles.descriptionInfo}>A plataforma permite visualizar as salas disponíveis no ambulatório.</p>
              </div>
          </div>
        </div>
        
      </div>

      <div className={styles.right}>
        <div className={styles.image}>
          <img src="/icons/mockup-pc.svg" alt="pc aura" />
        </div>
      </div>
    </section>
  );
}
