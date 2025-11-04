// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'joel-sousa', // Your GitHub org/user name. (This is the only required config)
    // imageUrl: 'https://github.com/ffsdf',
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'Joel-Sousa/util-mask', 
          'Joel-Sousa/Poket', 
          'Joel-Sousa/NewSMCA-PHP', 
          'Joel-Sousa/Feminicidio-JS', 
          'Joel-Sousa/AdoCao-JS', 
          'Joel-Sousa/SGT-JS', 
          'Joel-Sousa/LocaWeb-PHP', 
          'Joel-Sousa/NewCarWash-Java', 
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projetos',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'CPM (Cliente na palma da mão)',
          description:
            'O projeto CPM (Cliente na Palma da Mão) pretende oferecer praticidade na geração de relatórios e dashboards, ' + 
            'permitindo visualizar, monitorar e analisar dados de maneira dinâmica e centralizada. Foi desenvolvido para ' + 
            'facilitar a tomada de decisões, oferecendo insights detalhados e rápidos sobre o desempenho de operações, atividades ' + 
            'de negócio ou processos específicos.',
          imageUrl:
            'https://ncdn0.infojobs.com.br/logos/Company_Evaluation/56900.jpg',
          link: 'https://www.sonda.com/pt/inicio',
        },
        {
          title: 'Formulário de Denúncia de Violações aos Direitos Humanos',
          description:
             'A Defensoria Pública da União está oferecendo à população a possibilidade de preencher um formulário' +
             'para denunciar e pedir ajuda em caso de violação de direitos humanos. O Formulário de Atendimento pode ' +
             'ser respondido virtualmente por qualquer pessoa e as respostas são registradas automaticamente no sistema da DPU.' +
             'Essa iniciativa busca otimizar a atuação na defesa dos direitos humanos, padronizar a assistência jurídica integral' +
             'e gratuita e aperfeiçoar a recepção de demandas externas.',
          imageUrl:
            'data:image/jpeg;base64,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',
          link: 'https://peticoes.dpu.def.br/',
        },
        {
          title: 'OGES (Observatório sobre garimpo e efeitos socioambientais)',
          description:
             'Observatório Nacional da Defensoria Pública da União sobre Garimpo e Efeitos Socioambientais ' +
             '(OGES), com o objetivo de planejar, definir, coordenar e promover ações estratégicas da Defensoria ' +
             'Pública da União voltadas a incumbência de promover os direitos humanos e a defesa, em todos os graus,' +
             'judicial e extrajudicial, dos direitos individuais e coletivos, de forma integral e gratuita, aos necessitados.',
          imageUrl:
            'data:image/jpeg;base64,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',
          link: 'https://oges.dpu.def.br/',
        },
        {
          title: 'Concurso de redação',
          description:
             'A Defensoria Pública da União - DPU - lança o concurso de redação anualmente, visando proporcionar ' +
             'discussões de temas relevantes e presentes na realidade social brasileira e no mundo. Tanto as escolas ' + 
             'públicas como os órgãos do sistema prisional e suas unidades socioeducativas refletem sobre o acesso à ' +
             ' justiça e os serviços jurídicos prestados pela instituição, como forma efetiva do exercício da cidadania, presentes na Constituição Brasileira.',
          imageUrl:
            'data:image/jpeg;base64,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',
          link: 'https://concursoderedacao.dpu.def.br/',
        },
        {
          title: 'Teletrabalho',
          description:
             'Fornece ferramentas para gerenciar, monitorar e otimizar o trabalho remoto de funcionários, garantindo produtividade, comunicação eficiente e segurança de dados.',
          imageUrl:
            'data:image/jpeg;base64,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',
          link: 'https://www.dpu.def.br/',
        },
        {
          title: 'SISCON',
          description:
             'Automatiza e facilita a administração de condomínios residenciais e comerciais. Ele reúne diversas funcionalidades para síndicos, administradoras e moradores, garantindo eficiência e transparência na gestão',
          imageUrl:
            'data:image/png;base64,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',
          link: 'https://focuscondominios.com.br/',
        },
        {
          title: 'Analise Criminal',
          description:
             'A análise criminal é uma ferramenta utilizada para planejamento da segurança pública, visto que ' + 
            'se vale de métodos científicos para estabelecer um diagnóstico das principais causas do cometimento de ' + 
            'ilícitos, o que colabora para o desenvolvimento de políticas de enfrentamento aos problemas de segurança ' + 
            'que cotidianamente afetam a vida da sociedade ',
          imageUrl:
            'https://analisecriminal.ssp.df.gov.br/images/SSP.png',
          link: 'https://analisecriminal.ssp.df.gov.br/Acesso/Login?ReturnUrl=%2F',
        },
        {
          title: 'TAO (Talentos e oportunidades)',
          description:
             'Neste projeto foi abordado a questão acerca dos talentos existentes sobre as oportunidades de crescimento ' + 
             'que são oferecidas. Especificamente, será tratado sobre o método de identificação de talentos e oportunidades utilizado ' + 
             'pela empresa Banco do Brasil. Busca-se avaliar um conjunto de fatores existentes, definidos e estruturados que fazem parte ' + 
             'deste processo. Será avaliado esse modelo denominado TAO, sistema que orienta os gestores nessa importante tarefa, conhecer ' + 
             'sua força de trabalho nos pontos de excelência e insuficiência.',
          imageUrl:
            'https://t.ctcdn.com.br/uty-qsFeDcV-IrDWVSpY3HmGx_g=/i620291.jpeg',
            link: 'https://www.bb.com.br/site/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio Joel Sousa',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'joelsousa95',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: 'joel-sousa-5',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'joelfsousa95@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1f6ITIL9t708VzKjKjozrR1d1MggQF82A/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'React.js',
    'Typescript',
    'JavaScript',
    'MySQL',
    'SQLServer',
    'Git',
    'Git Flow',
    'GitHub',
    'GitLab',
    'PHPUnit',
    'Lumen',
    'Codeigniter',
    'AWS',
    'Filament PHP',
    'Docker',
    'Html',
    'CSS',
    'Bootstrap',
    'TailwindCSS',
    'RabbitMQ',
    'Vue.js',
    'Node.js',
    'MongoDB',
    'CI/CD',
    'Redis',
    'Angular.js',
    'Angular 8',
    'C#',
    '.Net',
    'Material-UI',
    'JQuery',
    'AJAX',
    'JSON',
    'DevOps',
    'Windowns',
    'Linux',
    'Java',
    'JUnit',
    'Android',
    'Spring Boot',
    'Scrum',
    'Kanban',
    'Arquitetura MVC',
    'Padrões de projeto',
  ],
  experiences: [
    {
      company: 'Montreal IT',
      position: 'Desenvolvedor Fullstack',
      from: 'Agosto 2025',
      to: '(Atualmente)',
      companyLink: 'https://montreal.com.br/',
    },
    {
      company: 'Freelancer',
      position: 'Desenvolvedor Fullstack',
      from: 'Novembro 2024',
      to: 'Julho 2025 | 09 meses ',
      companyLink: '',
    },
    {
      company: 'Sonda IT',
      position: 'Desenvolvedor Fullstack',
      from: 'Dezembro 2021',
      to: 'Outubro 2024 | 2 anos e 10 meses',
      companyLink: 'https://www.sonda.com/pt',
    },
    {
      company: 'Focus Gestão Condominial',
      position: 'Desenvolvedor Fullstack',
      from: 'Janeiro 2021',
      to: 'Março 2021 | 3 Meses',
      companyLink: 'https://focuscondominios.com.br/',
    },
    {
      company: 'Secretaria de Segurança Pública do Distrito Federal',
      position: 'Desenvolvedor Fullstack',
      from: 'Junho 2020',
      to: 'Outubro 2020 | 5 Meses',
      companyLink: 'https://www.ssp.df.gov.br/',
    },
    {
      company: 'Banco do Brasil',
      position: 'Desenvolvedor AngularJS - Estágio',
      from: 'Setembro 2019',
      to: 'Setembro 2020 | 1 ano',
      companyLink: 'https://www.bb.com.br/site/',
    },
    {
      company: 'Plan Automação',
      position: 'Suporte Técnico - Estágio',
      from: 'Março 2018',
      to: 'Abril 2019 | 1 ano e 2 meses',
      companyLink: 'https://planautomacao.com.br/',
    },
  ],
  certifications: [
    {
      name: 'AWS, na prática!',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Julho 2025',
      link: 'https://www.udemy.com/certificate/UC-31010024-bbc2-451f-87e5-b39341b37317/',
    },
    {
      name: 'FilamentPHP Tenant Driven / V3',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Setembro 2024',
      link: 'https://api.codeexperts.com.br/api/v2/certificados/get/8a64eb19-8603-4657-bffc-702a664cce6d',
    },
    {
      name: 'FilamentPHP V2 na Prática - Painéis Admin Produtivos',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Agosto 2024',
      link: 'https://www.udemy.com/certificate/UC-a670b318-68fa-4410-a012-ecc950a95791/',
    },
    {
      name: 'Testes unitários e TDD com PHP e PHPUnit',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Março 2024',
      link: 'https://www.udemy.com/certificate/UC-1cd8ef04-5b75-4c43-9c49-15b5ff2ff19f/',
    },
    {
      name: 'GitLab CI - Para Pipelines CI/CD & DevOps',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Julho 2023',
      link: 'https://www.udemy.com/certificate/UC-62d7f04b-dae1-40ed-b8ab-012ec7ccf2b7/',
    },
    {
      name: 'Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Fevereiro 2023',
      link: 'https://www.udemy.com/certificate/UC-b4f242a3-44bb-4152-8bdc-7ce7881e0d1d/',
    },
    {
      name: 'Docker: Ferramenta essencial para Desenvolvedores',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Novembro 2022',
      link: 'https://www.udemy.com/certificate/UC-5c4773e2-0343-40f1-9866-075ccbcf20da/',
    },
    {
      name: 'Fundamentos de Expressões Regulares (Regex)',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Novembro 2022',
      link: 'https://www.udemy.com/certificate/UC-f7adadaf-50eb-44ef-96c6-776d570c2f0b/',
    },
    {
      name: 'Introdução ao Laravel',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Novembro 2022',
      link: 'https://www.udemy.com/certificate/UC-d5d7e305-3de7-4b48-8c58-4d4a48a1df4c/',
    },
    {
      name: 'Aprenda React, React Hooks, Redux, Laravel e Mercado Pago',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Julho 2022',
      link: 'https://www.udemy.com/certificate/UC-95c7feff-2439-4ec1-bb98-0e1a3b52fb3c/',
    },
    {
      name: 'Spring Boot Expert: JPA, REST, Security, JWT, OAuth2 e Mais',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Outubro 2021',
      link: 'https://www.udemy.com/certificate/UC-2a76a6c3-22ee-441a-8633-e0ab0f503524/',
    },
    {
      name: 'Testes unitários em JAVA: Domine JUnit 4, Mockito e TDD',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Setembro 2021',
      link: 'https://www.udemy.com/certificate/UC-1e069042-1a04-4946-bb48-15233ba6e663/',
    },
    {
      name: 'Android Studio 2018 com WEB Services e API',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Agosto 2021',
      link: 'https://www.udemy.com/certificate/UC-f9e1edbf-71ca-44ba-8fd2-148c0d0a0a72/',
    },
    {
      name: 'Java COMPLETO: Do Zero ao Profissional + Projetos!',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Agosto 2021',
      link: 'https://www.udemy.com/certificate/UC-b10022b7-0e25-441c-9935-d2b5b1458b4a/',
    },
    {
      name: 'Curso Web Moderno Completo com JavaScript + Projetos',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Julho 2021',
      link: 'https://www.udemy.com/certificate/UC-a98ff0b5-05fb-410b-923e-bd47f055fa85/',
    },
    {
      name: 'C# COMPLETO Programação Orientada a Objetos + Projetos',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Novembro 2020',
      link: 'https://www.udemy.com/certificate/UC-ccf04fcf-f37d-4eec-9c4d-b62780d86eae/',
    },
    {
      name: 'Kaban Foundation. (KIKF)',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Setembro 2020',
      link: '',
    },
    {
      name: 'Scrum Foundation Professional Certificate. (SFPC)',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Setembro 2020',
      link: '',
    },
    {
      name: 'DevOps Essentials Professional Certificate. (DEPC)',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Agosto 2020',
      link: '',
    },
    {
      name: 'Curso Rápido de Integração Contínua com o GitLab',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Junho 2020',
      link: 'https://www.udemy.com/certificate/UC-41023b81-e7a9-4aa0-926d-34a24eec2ad9/',
    },
    {
      name: 'Scrum para Desenvolvedores de Software',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Junho 2020',
      link: 'https://www.udemy.com/certificate/UC-8bd08458-712b-4e27-ac5a-da7c744938c6/',
    },
    {
      name: 'Gitlab CI: Pipelines, Continuous Delivery e Deployment',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Maio 2020',
      link: 'https://www.udemy.com/certificate/UC-3f47d6fc-e5ea-4950-aa87-8d21ff82fc5c/',
    },
    {
      name: 'Angular - The Complete Guide (2024 Edition)',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Abril 2020',
      link: 'https://www.udemy.com/certificate/UC-74c6bc12-3339-4156-8d3b-c027a5d15edf/',
    },
    {
      name: 'Programação em Java do básico ao avançado',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Abril 2019',
      link: 'https://www.udemy.com/certificate/UC-OPE4E9ES/',
    },
  ],
  educations: [
    {
      institution: 'PUC Minas',
      degree: 'Pós - Graduação | Engenharia de Software',
      from: 'Cursando | 2025',
      to: '2026',
    },
    {
      institution: 'UniProjeção',
      degree: ' Graduação | Sistemas de Informação',
      from: 'Completo | 2017',
      to: '2021',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
