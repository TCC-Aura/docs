import styles from './styles.module.css';

export default function DisplayFeature(): JSX.Element {
  return (
    <section className={styles.section}>
     <div className={styles.textosInfo}>
        <p className={styles.title}>Visor de Chamadas</p>
        <p className={styles.subtitle}>O visor de chamadas exibe o número da senha para que o paciente se encaminhe à sala correspondente.</p>
     </div>
    
     <div className={styles.video}>
        <video src="/video/display.mp4" autoPlay controls muted></video>
     </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src="/icons/sequence-checkmark.svg" alt="icon" className={styles.iconImg} />
          </div>

          <div className={styles.textosCard}>
            <p className={styles.titleInfo}>Exibição de senhas</p>
            <p className={styles.descriptionInfo}>O visor apresenta a senha atual em uso e as últimas chamadas atendidas, proporcionando uma visão clara e organizada do atendimento ao paciente.</p>
          </div>
        </div>

        <div className={styles.card}>
            <div className={styles.icon}>
              <img src="/icons/head-speaking-voice.svg" alt="icon" className={styles.iconImg}/>
            </div>

            <div className={styles.textosCard}>
              <p className={styles.titleInfo}>Narração de senhas</p>
              <p className={styles.descriptionInfo}>As senhas são narradas, facilitando o atendimento e promovendo acessibilidade.</p>
            </div>
        </div>
      </div>

    </section>
  );
}
