const es = {
  hero: {
    title: 'Detectamos las brechas antes que los atacantes.',
    subtitle: 'Pentesting profesional y formación en ciberseguridad para pymes y empresas medianas. Calidad enterprise, sin la complejidad enterprise.',
    cta_primary: 'Solicitar pentest',
    cta_secondary: 'Ver servicios',
  },
  why: {
    section_title: '¿Por qué Almenara?',
    items: {
      pentest: {
        title: 'Pentest hecho por humanos, acelerado por IA',
        description: 'Nuestros ingenieros de seguridad lideran cada proyecto. La IA acelera el reconocimiento y la detección de patrones, así encontramos más en menos tiempo, pero cada hallazgo lo valida un experto.',
      },
      reports: {
        title: 'Informes que se entienden',
        description: 'Dos entregables: un resumen ejecutivo claro para quien toma decisiones, y un informe técnico detallado con pasos de reproducción para tu equipo de ingeniería. Sin relleno.',
      },
      training: {
        title: 'Formación que cala',
        description: 'Sesiones interactivas con simulaciones de ataques reales adaptadas a tu sector. Tu equipo aprende a detectar amenazas en su flujo de trabajo diario, no en escenarios abstractos.',
      },
    },
  },
  services: {
    section_title: 'Nuestros servicios',
    pentesting: {
      title: 'Pentesting',
      description: 'Simulamos ataques reales contra tus sistemas para encontrar vulnerabilidades antes de que se conviertan en incidentes.',
      bullets: [
        'Aplicaciones web, APIs e infraestructura',
        'Metodologías OWASP, PTES y NIST',
        'Informes ejecutivos y técnicos con guía de remediación',
        'Sesión de presentación post-entrega incluida',
      ],
      cta: 'Conocer pentesting',
    },
    awareness: {
      title: 'Formación en concienciación',
      description: 'Convertimos a tu equipo en tu primera línea de defensa con formación práctica en ciberseguridad.',
      bullets: [
        'Simulaciones de phishing personalizadas',
        'Sesiones interactivas online y presenciales',
        'Adaptadas a tu sector y perfil de riesgo',
        'Resultados medibles con métricas antes/después',
      ],
      cta: 'Conocer formación',
    },
    consulting: {
      title: 'Consultoría de seguridad',
      description: 'Orientación estratégica para integrar la seguridad en tu ciclo de desarrollo y operaciones.',
      bullets: [
        'Diseño y revisión de arquitectura segura',
        'Modelado de amenazas y revisión de código',
        'Integración DevSecOps en pipelines',
        'Preparación para ISO 27001 y SOC 2',
      ],
      cta: 'Conocer consultoría',
    },
    secdev: {
      title: 'Desarrollo seguro',
      description: 'Herramientas de seguridad y aplicaciones construidas con seguridad integrada desde el primer día.',
      bullets: [
        'Herramientas de seguridad y automatización',
        'Aplicaciones web con security by design',
        'Desarrollo de APIs con auth y control de acceso',
        'Plataformas y dashboards de seguridad internos',
      ],
      cta: 'Conocer desarrollo seguro',
    },
    ppf: {
      title: 'Pago por hallazgo',
      description: 'Un pentest sin riesgo: si no encontramos vulnerabilidades, no pagas. Solo pagas por hallazgo confirmado, según su severidad.',
      bullets: [
        'Cero coste inicial — pagas solo por resultados reales',
        'Precios transparentes por severidad (Crítica/Alta/Media/Baja)',
        'Misma metodología y rigor que un pentest completo',
        'Ideal como primer proyecto si nunca has hecho un pentest',
      ],
      cta: 'Conocer pago por hallazgo',
    },
  },
  process: {
    section_title: 'Cómo trabajamos',
    section_subtitle: 'Una metodología estructurada que se adapta a tu contexto, no al revés.',
    steps: {
      recon: {
        number: '01',
        title: 'Reconocimiento',
        description: 'Mapeamos tu superficie de ataque y recopilamos inteligencia sobre tus sistemas, igual que lo haría un atacante real.',
      },
      analysis: {
        number: '02',
        title: 'Análisis',
        description: 'Identificamos vulnerabilidades mediante escaneo automatizado y revisión manual experta, priorizando por impacto real de negocio.',
      },
      exploitation: {
        number: '03',
        title: 'Explotación controlada',
        description: 'Validamos los hallazgos explotándolos de forma segura y controlada, demostrando el riesgo real sin afectar tus operaciones.',
      },
      report: {
        number: '04',
        title: 'Informe y recomendaciones',
        description: 'Recibes un informe claro con hallazgos priorizados, pasos de reproducción y guía de remediación accionable.',
      },
    },
  },
  sectors: {
    section_title: '¿Con quién trabajamos?',
    section_subtitle: 'Ayudamos a organizaciones de sectores que manejan datos sensibles y necesitan seguridad pragmática.',
    items: {
      ecommerce: { title: 'E-commerce', description: 'Datos de pago y confianza del cliente.' },
      saas: { title: 'SaaS B2B', description: 'Plataformas multi-tenant y seguridad de APIs.' },
      legal: { title: 'Despachos y gestoría', description: 'Confidencialidad de clientes y cumplimiento.' },
      health: { title: 'Sanidad', description: 'Datos de pacientes y requisitos regulatorios.' },
      hospitality: { title: 'Hostelería digital', description: 'Sistemas de reservas y datos de huéspedes.' },
      industry: { title: 'Industria pyme', description: 'Convergencia OT/IT y cadena de suministro.' },
    },
  },
  testimonials: {
    section_title: 'Lo que dicen nuestros clientes',
  },
  faq: {
    section_title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Cuánto tarda un pentest?',
        a: 'Un proyecto típico dura de 1 a 3 semanas dependiendo del alcance y la complejidad. Te damos un calendario claro antes de empezar, y trabajamos dentro de tus ventanas operativas.',
      },
      {
        q: '¿Es necesario parar el servicio durante las pruebas?',
        a: 'No. Realizamos pruebas controladas diseñadas para no interrumpir el servicio. Acordamos alcance, horarios y procedimientos de escalado antes de empezar. Tus operaciones continúan con normalidad.',
      },
      {
        q: '¿Qué nivel técnico necesita mi equipo para leer el informe?',
        a: 'Ninguno para el resumen ejecutivo: está escrito para quienes toman decisiones de negocio. El anexo técnico es lo suficientemente detallado para que tu equipo de ingeniería reproduzca y solucione cada hallazgo.',
      },
      {
        q: '¿Trabajáis con empresas fuera de España?',
        a: 'Sí. Trabajamos con clientes en todo el mundo. Nuestros informes y comunicación están disponibles en inglés y español, y tenemos experiencia en proyectos remotos.',
      },
      {
        q: '¿Cuál es la diferencia entre un escáner automatizado y un pentest manual?',
        a: 'Un escáner automatizado busca vulnerabilidades conocidas en una base de datos. Un pentest manual implica a un ingeniero de seguridad pensando como un atacante: encadenando hallazgos, probando lógica de negocio, y encontrando problemas que ninguna herramienta detectaría. Usamos ambos, pero la experiencia humana es lo que marca la diferencia.',
      },
      {
        q: '¿Cómo garantizáis la confidencialidad?',
        a: 'Cada proyecto está cubierto por un NDA estricto. Seguimos prácticas de manejo seguro de datos, ciframos todas las comunicaciones y entregables, y eliminamos los datos del cliente tras el periodo de retención acordado.',
      },
    ],
  },
  cta_final: {
    title: '¿Listo para saber dónde están tus vulnerabilidades?',
    subtitle: 'Hablemos. Sin compromiso, sin discurso comercial: solo una conversación honesta sobre tu postura de seguridad.',
    cta: 'Contactar',
  },
  pentesting_page: {
    title: 'Pentesting',
    meta_description: 'Pentesting profesional para aplicaciones web, APIs e infraestructura. Metodologías OWASP y PTES. Informes claros con guía de remediación.',
    hero_title: 'Encuentra tus vulnerabilidades antes que los atacantes',
    hero_subtitle: 'Pentesting profesional que va más allá del escaneo automatizado. Nuestros ingenieros de seguridad piensan como atacantes para encontrar las vulnerabilidades que importan.',
    what: {
      title: '¿Qué es un pentest?',
      description: 'Un test de penetración es una simulación controlada de un ciberataque real contra tus sistemas. A diferencia de los escáneres automáticos de vulnerabilidades que comprueban contra una base de datos conocida, un pentest implica a un profesional de seguridad pensando activamente como un atacante: buscando errores de configuración, fallos de lógica, vulnerabilidades encadenadas y rutas de ataque que las herramientas automáticas no detectan.',
      description_2: 'El objetivo no es generar una lista larga de problemas teóricos, sino mostrarte exactamente cómo un atacante podría comprometer tus sistemas y qué necesitas arreglar primero.',
    },
    types: {
      title: 'Tipos de pentesting',
      web: {
        title: 'Aplicaciones web',
        description: 'Evaluación completa de tus aplicaciones web siguiendo la metodología OWASP WSTG. Probamos autenticación, autorización, gestión de sesiones, validación de entrada y lógica de negocio.',
      },
      api: {
        title: 'APIs y servicios web',
        description: 'Pruebas de seguridad de APIs REST, GraphQL y SOAP. Analizamos mecanismos de autenticación, rate limiting, exposición de datos y vectores de inyección.',
      },
      infra: {
        title: 'Infraestructura',
        description: 'Evaluación de red e infraestructura incluyendo servidores, firewalls, VPNs y configuraciones cloud. Identificamos errores de configuración y rutas de ataque en tu perímetro.',
      },
      social: {
        title: 'Ingeniería social',
        description: 'Campañas de phishing controladas y evaluaciones de ingeniería social para probar la preparación de tu equipo frente a ataques dirigidos a personas.',
      },
    },
    methodology: {
      title: 'Nuestra metodología',
      description: 'Seguimos marcos de trabajo reconocidos internacionalmente, adaptados a cada proyecto:',
      frameworks: [
        'OWASP Web Security Testing Guide (WSTG) v4.2',
        'OWASP Application Security Verification Standard (ASVS)',
        'PTES — Penetration Testing Execution Standard',
        'NIST SP 800-115 — Technical Guide to Information Security Testing',
      ],
    },
    deliverables: {
      title: '¿Qué entregas recibes?',
      items: [
        {
          title: 'Resumen ejecutivo',
          description: 'Una visión clara y no técnica de los hallazgos y el nivel de riesgo para quienes toman decisiones.',
        },
        {
          title: 'Informe técnico',
          description: 'Hallazgos detallados con clasificación de severidad (CVSS v3.1), pasos de reproducción, evidencias y guía de remediación específica.',
        },
        {
          title: 'Sesión de presentación',
          description: 'Un repaso en directo de los hallazgos con tus equipos técnico y de dirección para resolver dudas y priorizar la remediación.',
        },
        {
          title: 'Soporte de remediación',
          description: 'Soporte post-entrega para aclarar hallazgos y validar correcciones. Estamos contigo hasta que estés seguro de que los problemas están resueltos.',
        },
      ],
    },
    pricing: {
      title: 'Precios',
      description: 'Cada proyecto se dimensiona individualmente según la complejidad, el número de activos y el tipo de pruebas. Creemos en la transparencia de precios sin costes ocultos.',
      note: 'Contáctanos para un presupuesto detallado adaptado a tus necesidades.',
    },
    cta: {
      title: '¿Listo para poner a prueba tus defensas?',
      subtitle: 'Cuéntanos sobre tus sistemas y te propondremos un proyecto a medida.',
      button: 'Solicitar pentest',
    },
  },
  awareness_page: {
    title: 'Formación en concienciación',
    meta_description: 'Formación en concienciación de ciberseguridad para equipos. Simulaciones de phishing, sesiones interactivas y resultados medibles. Adaptada a tu sector.',
    hero_title: 'Convierte a tu equipo en tu mejor defensa',
    hero_subtitle: 'Formación práctica en ciberseguridad que cambia comportamientos, no solo conocimientos. Porque el mejor firewall del mundo no puede evitar que alguien haga clic en un enlace.',
    human_factor: {
      title: 'El factor humano',
      stat: '68%',
      stat_label: 'de las brechas involucran un elemento humano',
      source: 'Verizon DBIR 2024',
      description: 'La tecnología sola no puede proteger tu organización. El phishing, la ingeniería social y el robo de credenciales funcionan porque atacan a personas, no a sistemas. La inversión más efectiva en seguridad que puedes hacer es asegurar que tu equipo sabe reconocer y responder a amenazas en su trabajo diario.',
    },
    how: {
      title: '¿Cómo funciona nuestra formación?',
      items: [
        {
          title: 'Online y presencial',
          description: 'Formato flexible adaptado al horario y ubicación de tu equipo. Sesiones remotas, talleres presenciales o un enfoque híbrido.',
        },
        {
          title: 'Práctica, no teórica',
          description: 'Ejemplos reales de tu sector, ejercicios prácticos y simulaciones de ataques que tu equipo encontrará en su día a día.',
        },
        {
          title: 'Resultados medidos',
          description: 'Evaluaciones pre y post formación, métricas de simulaciones de phishing e informes claros que muestran la mejora en el tiempo.',
        },
        {
          title: 'Certificación',
          description: 'Los participantes reciben un certificado de finalización. También proporcionamos documentación para auditorías de cumplimiento.',
        },
      ],
    },
    topics: {
      title: 'Temas de formación',
      items: [
        'Reconocimiento de phishing y spear-phishing',
        'Seguridad de contraseñas y autenticación multifactor',
        'Prácticas de teletrabajo seguro',
        'Tácticas de ingeniería social y defensa',
        'Manejo y clasificación de datos',
        'Procedimientos de reporte de incidentes',
        'Seguridad en dispositivos móviles',
        'Concienciación en seguridad física',
      ],
    },
    simulations: {
      title: 'Simulaciones de phishing realistas',
      description: 'Diseñamos campañas de phishing personalizadas que imitan las amenazas reales que enfrenta tu organización. No plantillas genéricas: escenarios adaptados a tu sector, tus herramientas y tus patrones de comunicación. Medimos tasas de clic, envío de credenciales y tasas de reporte, y usamos los resultados para enfocar la formación donde más importa.',
    },
    cta: {
      title: '¿Listo para reforzar tu firewall humano?',
      subtitle: 'Diseñemos un programa de formación que encaje con tu equipo y tu perfil de riesgo.',
      button: 'Solicitar formación',
    },
  },
  consulting_page: {
    title: 'Consultoría de seguridad',
    meta_description: 'Consultoría estratégica de ciberseguridad para pymes. Arquitectura segura, modelado de amenazas, DevSecOps y preparación para cumplimiento. Orientación práctica, no auditorías de checklist.',
    hero_title: 'Estrategia de seguridad que encaja con tu negocio',
    hero_subtitle: 'Orientación práctica de ingenieros que entienden tanto el panorama técnico como las restricciones de negocio. Te ayudamos a tomar las decisiones de seguridad correctas en el momento adecuado.',
    what: {
      title: '¿Qué es la consultoría de seguridad?',
      description: 'La consultoría de seguridad consiste en tomar decisiones informadas antes de que surjan los problemas. Trabajamos junto a tu equipo para entender tus sistemas, identificar riesgos y construir una postura de seguridad que se alinee con tus objetivos de negocio, no solo con un checklist de cumplimiento.',
      description_2: 'Ya estés diseñando un sistema nuevo, preparándote para una auditoría de cumplimiento o intentando entender dónde están tus mayores riesgos, proporcionamos orientación clara y accionable basada en experiencia real en seguridad ofensiva.',
    },
    areas: {
      title: 'Áreas de especialización',
      architecture: {
        title: 'Diseño de arquitectura segura',
        description: 'Revisamos tu arquitectura de sistemas y te ayudamos a diseñar controles de seguridad efectivos sin ser una carga. Desde flujos de autenticación hasta almacenamiento de datos, aseguramos que la seguridad esté integrada desde los cimientos.',
      },
      threat_modeling: {
        title: 'Modelado de amenazas y revisión de código',
        description: 'Identificación sistemática de amenazas a tus aplicaciones utilizando frameworks como STRIDE y PASTA. Combinado con revisión de código dirigida para encontrar vulnerabilidades antes de que lleguen a producción.',
      },
      devsecops: {
        title: 'Integración DevSecOps',
        description: 'Ayudamos a tu equipo de ingeniería a integrar seguridad en sus pipelines CI/CD existentes. SAST, DAST, escaneo de dependencias y detección de secretos — automatizado y práctico, sin bloquear.',
      },
      compliance: {
        title: 'Preparación para cumplimiento',
        description: 'Preparación práctica para cumplimiento ISO 27001, SOC 2 y RGPD. Nos enfocamos en construir controles de seguridad reales que satisfagan a los auditores, no solo en rellenar documentos.',
      },
    },
    approach: {
      title: 'Nuestro enfoque',
      items: [
        {
          title: 'Entender tu contexto',
          description: 'Cada negocio tiene diferentes riesgos, restricciones y prioridades. Empezamos entendiendo los tuyos antes de recomendar nada.',
        },
        {
          title: 'Priorizar por impacto',
          description: 'No todos los riesgos son iguales. Te ayudamos a enfocar recursos en las amenazas que realmente importan a tu negocio, no en casos extremos teóricos.',
        },
        {
          title: 'Recomendaciones accionables',
          description: 'Nada de informes de 200 páginas que acumulan polvo. Acciones claras y priorizadas que tu equipo puede implementar con los recursos que tiene.',
        },
        {
          title: 'Colaboración continua',
          description: 'La seguridad no es un proyecto puntual. Ofrecemos modelos de retainer para orientación continua a medida que tus sistemas y el panorama de amenazas evolucionan.',
        },
      ],
    },
    cta: {
      title: '¿Necesitas una estrategia de seguridad que funcione?',
      subtitle: 'Hablemos de tus retos de seguridad y encontremos el enfoque adecuado para tu negocio.',
      button: 'Solicitar consultoría',
    },
  },
  secdev_page: {
    title: 'Desarrollo seguro',
    meta_description: 'Herramientas de seguridad, plataformas y aplicaciones a medida con security by design. Desarrollo full-stack con mentalidad de seguridad ofensiva.',
    hero_title: 'Herramientas de seguridad hechas por ingenieros de seguridad',
    hero_subtitle: 'Aplicaciones a medida, plataformas internas y herramientas de seguridad construidas con mentalidad ofensiva. La seguridad no es una ocurrencia tardía — es la base.',
    what: {
      title: '¿Qué es el desarrollo seguro?',
      description: 'La mayoría de las vulnerabilidades de seguridad se introducen durante el desarrollo, no después del despliegue. El desarrollo seguro significa construir aplicaciones donde la seguridad es una prioridad desde la primera línea de código — no una capa añadida a posteriori.',
      description_2: 'Combinamos experiencia en desarrollo full-stack con conocimiento de seguridad ofensiva para construir herramientas, plataformas y aplicaciones que son resilientes por diseño. Cuando quienes construyen tus sistemas saben cómo piensan los atacantes, el resultado es software fundamentalmente más seguro.',
    },
    areas: {
      title: '¿Qué construimos?',
      tooling: {
        title: 'Herramientas de seguridad y automatización',
        description: 'Scripts personalizados, escáneres y pipelines de automatización adaptados a tu flujo de trabajo de seguridad. Desde dashboards de gestión de vulnerabilidades hasta comprobaciones de cumplimiento automatizadas.',
      },
      web: {
        title: 'Aplicaciones web con security by design',
        description: 'Aplicaciones web full-stack construidas con prácticas de codificación segura, autenticación adecuada, validación de entrada y defensa en profundidad desde el inicio.',
      },
      api: {
        title: 'APIs con seguridad integrada',
        description: 'APIs REST y GraphQL con autenticación robusta, autorización granular, rate limiting, saneamiento de entrada y logging exhaustivo integrado en la arquitectura.',
      },
      platforms: {
        title: 'Plataformas de seguridad internas',
        description: 'Dashboards personalizados, herramientas de reporting y plataformas internas que ayudan a tus equipos de seguridad e ingeniería a trabajar de forma más efectiva.',
      },
    },
    principles: {
      title: 'Nuestros principios',
      items: [
        {
          title: 'Seguridad por defecto',
          description: 'Configuraciones seguras de serie. Autenticación, cifrado y controles de acceso activados por defecto, no opcionales.',
        },
        {
          title: 'Superficie de ataque mínima',
          description: 'Cada funcionalidad, endpoint y dependencia se evalúa por la superficie de ataque que introduce. Menos es más en diseño seguro.',
        },
        {
          title: 'Defensa en profundidad',
          description: 'Múltiples capas de controles de seguridad para que un fallo único no comprometa el sistema completo.',
        },
        {
          title: 'Transparente y auditable',
          description: 'Código limpio, logging exhaustivo y documentación que hace que la revisión de seguridad sea sencilla para tu equipo y auditores.',
        },
      ],
    },
    cta: {
      title: '¿Necesitas seguridad integrada en tus herramientas?',
      subtitle: 'Cuéntanos qué estás construyendo y te ayudamos a hacerlo de forma segura desde el primer día.',
      button: 'Solicitar presupuesto',
    },
  },
  ppf_page: {
    title: 'Pago por hallazgo',
    meta_description: 'Pentesting sin riesgo. Si no encontramos vulnerabilidades, no pagas. Precios transparentes por severidad. Ideal para pymes que se inician en pentesting.',
    hero_title: 'Si no encontramos nada, no pagas',
    hero_subtitle: 'Un pentest con cero riesgo financiero para ti. Auditamos tus sistemas con el mismo rigor que un proyecto tradicional, pero solo pagas por vulnerabilidades confirmadas, según su severidad.',
    what: {
      title: '¿Cómo funciona?',
      description: 'Pago por hallazgo es un modelo de pentesting donde solo pagas por las vulnerabilidades que realmente encontramos y confirmamos. No hay coste inicial, no hay precio fijo — solo una tabla de precios transparente basada en la severidad de cada hallazgo.',
      description_2: 'Definimos el alcance juntos, firmamos un acuerdo con la tabla de precios por severidad, y nos ponemos a trabajar. Si no encontramos nada, no pagas nada. Si encontramos problemas, pagas por hallazgo según las tarifas acordadas. Cada hallazgo viene con los mismos entregables de calidad que un pentest tradicional: pasos de reproducción detallados, evidencias y guía de remediación.',
    },
    why: {
      title: '¿Por qué pago por hallazgo?',
      items: [
        {
          title: 'Cero riesgo para ti',
          description: 'Sin inversión inicial. Si tus sistemas son seguros, no pagas nada y ganas la tranquilidad de saber que han sido probados por profesionales.',
        },
        {
          title: 'Incentivos alineados',
          description: 'Solo cobramos cuando aportamos valor real. Nuestra motivación es encontrar cada vulnerabilidad que importa, no rellenar un informe.',
        },
        {
          title: 'Primer proyecto perfecto',
          description: 'Si nunca has contratado un pentest y no sabes qué esperar, este modelo te permite experimentar testing de seguridad profesional sin compromiso financiero.',
        },
        {
          title: 'Transparente y predecible',
          description: 'Sabes exactamente lo que cuesta cada hallazgo antes de empezar. Sin sorpresas, sin costes ocultos — solo una tabla clara de precio por severidad.',
        },
      ],
    },
    pricing: {
      title: 'Precios por severidad',
      description: 'Cada vulnerabilidad confirmada se tarifica según su severidad, evaluada con el estándar de la industria CVSS v3.1. Las tarifas exactas se acuerdan antes de empezar el proyecto.',
      tiers: [
        {
          severity: 'Crítica',
          cvss: 'CVSS 9.0 – 10.0',
          description: 'Ejecución remota de código, bypass de autenticación, vectores de brecha de datos completa.',
        },
        {
          severity: 'Alta',
          cvss: 'CVSS 7.0 – 8.9',
          description: 'Escalada de privilegios, exposición significativa de datos, fallos de inyección con impacto.',
        },
        {
          severity: 'Media',
          cvss: 'CVSS 4.0 – 6.9',
          description: 'Cross-site scripting, divulgación de información, errores de configuración con impacto limitado.',
        },
        {
          severity: 'Baja',
          cvss: 'CVSS 0.1 – 3.9',
          description: 'Fugas de información menores, desviaciones de buenas prácticas, problemas de bajo impacto.',
        },
      ],
      cap_note: 'Acordamos un tope máximo antes de empezar, para que siempre sepas tu coste en el peor caso.',
    },
    scope: {
      title: 'Alcance y reglas',
      items: [
        'Definimos los sistemas objetivo y los límites juntos antes de empezar — igual que en un pentest tradicional.',
        'Se firma un acuerdo formal de alcance y tabla de precios antes de cualquier prueba.',
        'Las pruebas siguen metodologías OWASP, PTES y NIST — sin atajos.',
        'Los hallazgos duplicados o informativos no se cobran. Solo cuentan vulnerabilidades únicas y confirmadas.',
        'Recibes los mismos entregables que un pentest tradicional: resumen ejecutivo, informe técnico y soporte de remediación.',
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué pasa si encontráis muchas vulnerabilidades?',
          a: 'El tope máximo que acordamos antes de empezar te protege. Aunque encontremos muchos problemas, tu coste total no superará el tope. Piensa en ello como el precio de un pentest tradicional al que solo llegas si hay hallazgos significativos.',
        },
        {
          q: '¿La metodología es diferente a un pentest normal?',
          a: 'No. Aplicamos exactamente la misma metodología, herramientas y rigor. La única diferencia es el modelo de precios — la calidad del testing es idéntica.',
        },
        {
          q: '¿Qué tipos de sistemas se pueden probar?',
          a: 'Aplicaciones web, APIs, infraestructura y entornos cloud. Acordamos el alcance específico durante la conversación inicial.',
        },
        {
          q: '¿Quién decide la severidad de un hallazgo?',
          a: 'La severidad se evalúa usando CVSS v3.1, un estándar de la industria. Proporcionamos evidencias completas y pasos de reproducción para que puedas verificar cada evaluación. Si hay desacuerdo, lo discutimos de forma transparente.',
        },
      ],
    },
    cta: {
      title: '¿Listo para probar tus sistemas sin riesgo?',
      subtitle: 'Definamos un alcance y tabla de precios. Si no encontramos nada, no pagas.',
      button: 'Solicitar auditoría por hallazgo',
    },
  },
  about_page: {
    title: 'Sobre nosotros',
    meta_description: 'Almenara Security: empresa de ciberseguridad en Málaga. Pentesting profesional y formación en concienciación para pymes. Calidad enterprise, escala humana.',
    hero_title: 'De las torres a las redes',
    hero_subtitle: 'El mismo principio que protegió la costa mediterránea durante siglos, aplicado a la ciberseguridad moderna.',
    story: {
      p1: 'Durante siglos, la costa malagueña vivió bajo amenaza. Piratas, incursiones, ataques desde el mar. La respuesta no fue construir murallas más altas: fue construir una red. Decenas de almenaras, torres de vigilancia que se veían entre sí, listas para encender una hoguera al primer indicio de peligro. Una torre detectaba. La siguiente avisaba. En cuestión de minutos, toda la costa sabía que algo se acercaba.',
      p2: 'Hoy las amenazas vienen por otros canales, pero el principio es el mismo: detectar a tiempo, avisar con claridad, responder en red.',
      p3: 'En Almenara Security ayudamos a pymes y empresas medianas a protegerse de las amenazas digitales con dos cosas: pentesting técnico que encuentra las vulnerabilidades antes que los atacantes, y formación práctica que convierte a cada empleado en una almenara más en tu organización. Y lo hacemos apoyándonos en IA, porque las amenazas evolucionan rápido y nosotros tenemos que ir más rápido todavía.',
      p4: 'Nacimos en Málaga, frente al mismo Mediterráneo que vieron las almenaras originales. Trabajamos con clientes y equipos en todo el mundo. Y lo hacemos con una idea clara: la ciberseguridad seria no debería ser un lujo de grandes corporaciones.',
    },
    values: {
      title: 'Nuestros valores',
      items: [
        {
          title: 'Honestidad técnica',
          description: 'Te contamos lo que encontramos, no lo que quieres oír. Sin severidades infladas, sin alarmismo: solo hallazgos claros y accionables.',
        },
        {
          title: 'Cercanía',
          description: 'Trabajamos contigo, no alrededor de ti. Comunicación directa, respuestas rápidas y un equipo que entiende el contexto de tu negocio.',
        },
        {
          title: 'Aprendizaje continuo',
          description: 'El panorama de amenazas cambia a diario. Invertimos en formación constante, investigación y herramientas para ir siempre un paso por delante.',
        },
        {
          title: 'Confidencialidad',
          description: 'Tus datos y hallazgos son sagrados. NDAs estrictos, comunicaciones cifradas y manejo seguro de datos son innegociables.',
        },
      ],
    },
    team: {
      title: 'Nuestro equipo',
      julio: {
        name: 'Julio Martinez',
        role: 'Fundador e Ingeniero de Seguridad',
        bio: 'Ingeniero de seguridad con más de 10 años de experiencia práctica protegiendo productos digitales en empresas tecnológicas líderes. Desde gestión de identidad en defensa hasta seguridad ofensiva en consultoras globales, gestión de vulnerabilidades en un gran operador de telecomunicaciones e ingeniería de seguridad senior en una plataforma tecnológica líder.',
        bio_2: 'Certificado OSCP y C-AI/MLPen, Julio combina experiencia en seguridad ofensiva con un profundo conocimiento de cómo los equipos de ingeniería construyen y despliegan software. Utiliza la IA como multiplicador de fuerza — no como atajo — para reducir plazos y ampliar cobertura, verificando y validando cada hallazgo con experiencia humana.',
        certifications: ['OSCP', 'C-AI/MLPen', 'CAPen', 'AWS Security Specialty', 'AWS Solutions Architect', 'LFCS', 'ITIL 4'],
        speaking: ['Cybercamp (INCIBE)', 'Navaja Negra'],
        linkedin: 'https://linkedin.com/in/julio-mart%C3%ADnez-mart%C3%ADnez-checa-91758596',
        github: 'https://github.com/julioxus',
      },
    },
    malaga: {
      title: '¿Por qué Málaga?',
      description: 'Nacidos en la costa mediterránea, combinamos la calidez y cercanía de nuestro origen con ambición global. El creciente ecosistema tecnológico de Málaga es nuestra base, pero nuestro trabajo llega a clientes en todo el mundo.',
    },
  },
  contact_page: {
    title: 'Contacto',
    meta_description: 'Contacta con Almenara Security. Solicita presupuesto de pentesting, pregunta sobre formación en concienciación o agenda una conversación sobre tus necesidades de seguridad.',
    hero_title: 'Hablemos de tu seguridad',
    hero_subtitle: 'Sin compromiso, sin discurso comercial. Cuéntanos qué necesitas y te respondemos en menos de 24 horas.',
    expect: {
      title: '¿Qué puedes esperar?',
      items: [
        'Respondemos en menos de 24 horas en días laborables',
        'Una breve llamada para entender tu contexto y necesidades',
        'Una propuesta a medida con alcance y precios claros',
        'Sin obligación: si no somos el mejor encaje, te lo diremos',
      ],
    },
    email_label: 'O escríbenos directamente a',
    email: 'info@almenarasecurity.com',
  },
  legal_page: {
    title: 'Aviso legal',
    meta_description: 'Aviso legal e información de la empresa Almenara Security.',
  },
  privacy_page: {
    title: 'Política de privacidad',
    meta_description: 'Política de privacidad de Almenara Security. Cómo recogemos, usamos y protegemos tus datos personales.',
  },
  cookies_page: {
    title: 'Política de cookies',
    meta_description: 'Política de cookies de Almenara Security. Información sobre las cookies utilizadas en este sitio web.',
  },
} as const;

export default es;
