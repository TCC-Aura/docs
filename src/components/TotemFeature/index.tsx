import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function TotemFeatures(): JSX.Element {
  return (
    <section className={styles.section}>
      <section className={styles.features}>
        <div className={styles.textos}>
          <h1>Como funciona</h1>
          <p>
            A plataforma é composta por um fluxo integrado de três componentes: 
            <span className={styles.destaque}> totem</span>, 
            <span className={styles.destaque}> visor</span> e 
            <span className={styles.destaque}> sistema</span>. 
            Esses elementos estão interconectados, permitindo o envio de dados em tempo real.
          </p>
        </div>

      </section>

      <div className={styles.container}>
        <div className={styles.containerElements}></div>
        <img src="/icons/totem.svg" alt="totem" className={styles.totemImage}/>

        <div className={styles.info}>
          <p className={styles.title}>Totem de Pré-Triagem de Acesso</p> 
          <p className={styles.subtitle}>O totem facilita o processo de triagem e agiliza o atendimento ao usuário.</p> 

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <img src="/icons/user-desktop.svg" alt="icon" className={styles.iconImg} />
              </div>

                <div className={styles.textosCard}>
                  <p className={styles.titleInfo}>Primeiro Contato do Usuário</p>
                  <p className={styles.descriptionInfo}>O Totem serve como o ponto de partida para o atendimento do paciente, proporcionando uma experiência acolhedora logo ao entrar no ambulatório.</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.icon}>
                  <img src="/icons/health.svg" alt="icon" className={styles.iconImg}/>
                </div>

                <div className={styles.textosCard}>
                  <p className={styles.titleInfo}>Escolha de Serviços</p>
                  <p className={styles.descriptionInfo}>Uma solução prática onde o usuário insere seu nome e seleciona o serviço desejado.</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.icon}>
                  <img src="/icons/chat-language-CHN.svg" alt="icon" className={styles.iconImg}/>
                </div>

                <div className={styles.textosCard}>
                  <p className={styles.titleInfo}>Acessibilidade e Multilinguismo para Todos os Usuários</p>
                  <p className={styles.descriptionInfo}>O totem oferece recursos acessíveis e suporte a múltiplos idiomas, garantindo uma experiência inclusiva para todos.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
