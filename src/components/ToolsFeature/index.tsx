import styles from './styles.module.css';

export default function ToolsFeature(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.textosInfo}>
        <p className={styles.title}>Ferramentas utilizadas</p>
        <p className={styles.subtitle}>Utilizamos uma variedade de ferramentas essenciais para otimizar o desenvolvimento, garantindo alta qualidade e eficiência:</p>
      </div>

      <div className={styles.tools}>
        {[
          { name: 'Figma', link: 'https://help.figma.com/hc/en-us/categories/360002051613-Get-started', icon: '/icons/tools/figma.svg' },
          { name: 'Canva', link: 'https://www.canva.com/pt_br/help/about-canva-docs/', icon: '/icons/tools/canva.svg' },
          { name: 'ClickUp', link: 'https://help.clickup.com/hc/en-us/articles/6328174371351-Intro-to-Docs', icon: '/icons/tools/clickup.svg' },
          { name: 'draw.io', link: 'https://www.drawio.com/doc/', icon: '/icons/tools/draw.svg' },
          { name: 'Azure', link: 'https://learn.microsoft.com/en-us/azure/?product=popular', icon: '/icons/tools/azure.svg' },
          { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: '/icons/tools/html.svg' },
          { name: 'Thunder Client', link: 'https://docs.thunderclient.com/', icon: '/icons/tools/thunder.svg' },
          { name: 'Git', link: 'https://git-scm.com/docs/git/pt_BR', icon: '/icons/tools/git.svg' },
          { name: 'Angular', link: 'https://v17.angular.io/docs', icon: '/icons/tools/angular.svg' },
          { name: 'Sass', link: 'https://sass-lang.com/documentation/', icon: '/icons/tools/sass.svg' },
          { name: 'Typescript', link: 'https://www.typescriptlang.org/', icon: '/icons/tools/typescript.svg' },
          { name: 'Apidog', link: 'https://apidog.com/pt/blog/java-api-documentation/', icon: '/icons/tools/apidog.svg' },
          { name: 'Automate', link: 'https://learn.microsoft.com/pt-br/power-automate/', icon: '/icons/tools/powerautomate.svg' },
          { name: 'Ubuntu', link: 'https://help.ubuntu.com/', icon: '/icons/tools/ubuntu.svg' },
          { name: 'ESLint', link: 'https://eslint.org/docs/latest/', icon: '/icons/tools/eslint.svg' },
          { name: 'React', link: 'https://pt-br.legacy.reactjs.org/docs/getting-started.html', icon: '/icons/tools/react.svg' },
          { name: 'Next JS', link: 'https://nextjs.org/docs', icon: '/icons/tools/next.svg' },
          { name: 'Tailwind CSS', link: 'https://v2.tailwindcss.com/docs', icon: '/icons/tools/tailwind.svg' },
          { name: 'BR Modelo', link: 'https://docs.brmodeloweb.com/#/', icon: '/icons/tools/brmodelo.svg' },
          { name: 'Python', link: 'https://docs.python.org/3/', icon: '/icons/tools/python.svg' },
          { name: 'Docker', link: 'https://docs.docker.com/', icon: '/icons/tools/docker.svg' },
          { name: 'Django', link: 'https://docs.djangoproject.com/en/5.1/', icon: '/icons/tools/django.svg' },
          { name: 'Web Socket', link: 'https://websockets.readthedocs.io/en/stable/', icon: '/icons/tools/web.svg' },
          { name: 'Postgre SQL', link: 'https://www.postgresql.org/docs/', icon: '/icons/tools/postgre.svg' },
          { name: 'Metabase', link: 'https://www.metabase.com/docs/latest/', icon: '/icons/tools/metabase.svg' },
          { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: '/icons/tools/css.svg' },
          { name: 'Raspberry', link: 'https://www.raspberrypi.com/documentation/', icon: '/icons/tools/raspberry.svg' },
          { name: 'pgAdmin', link: 'https://www.pgadmin.org/docs/', icon: '/icons/tools/pg.svg' },
        ].map((tool) => (
          <div className={styles.tool} key={tool.name}>
            <a href={tool.link} target="_blank" rel="noopener noreferrer">
              <img src={tool.icon} alt={`icon ${tool.name}`} />
              <p>{tool.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
