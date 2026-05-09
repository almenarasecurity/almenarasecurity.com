const en = {
  hero: {
    title: 'We find the breaches before attackers do.',
    subtitle: 'Professional pentesting and cybersecurity awareness training for SMBs and mid-sized companies. Enterprise quality, without the enterprise complexity.',
    cta_primary: 'Request a pentest',
    cta_secondary: 'View services',
  },
  why: {
    section_title: 'Why Almenara',
    items: {
      pentest: {
        title: 'Pentest by humans, accelerated by AI',
        description: 'Our security engineers lead every engagement. AI accelerates reconnaissance and pattern detection, so we find more in less time — but every finding is validated by an expert.',
      },
      reports: {
        title: 'Reports you can actually read',
        description: 'Two deliverables: a clear executive summary for decision-makers, and a detailed technical report with reproduction steps for your engineering team. No filler.',
      },
      training: {
        title: 'Training that sticks',
        description: 'Interactive sessions with real-world attack simulations adapted to your industry. Your team learns to spot threats in their daily workflow, not in abstract scenarios.',
      },
    },
  },
  services: {
    section_title: 'Our services',
    pentesting: {
      title: 'Pentesting',
      description: 'We simulate real attacks against your systems to find vulnerabilities before they become incidents.',
      bullets: [
        'Web applications, APIs, and infrastructure',
        'OWASP, PTES, and NIST methodologies',
        'Executive and technical reports with remediation guidance',
        'Post-delivery support session included',
      ],
      cta: 'Learn about pentesting',
    },
    awareness: {
      title: 'Awareness training',
      description: 'We turn your team into your first line of defense with practical cybersecurity training.',
      bullets: [
        'Customized phishing simulations',
        'Interactive online and in-person sessions',
        'Adapted to your sector and risk profile',
        'Measurable results with before/after metrics',
      ],
      cta: 'Learn about training',
    },
    consulting: {
      title: 'Security consulting',
      description: 'Strategic security guidance to embed security into your development lifecycle and operations.',
      bullets: [
        'Secure architecture design and review',
        'Threat modeling and code review',
        'DevSecOps pipeline integration',
        'ISO 27001 and SOC 2 compliance readiness',
      ],
      cta: 'Learn about consulting',
    },
    secdev: {
      title: 'Secure development',
      description: 'Custom security tools and applications built with security baked in from day one.',
      bullets: [
        'Security tooling and automation',
        'Web applications with security by design',
        'API development with built-in auth and access control',
        'Internal security platforms and dashboards',
      ],
      cta: 'Learn about secure development',
    },
    ppf: {
      title: 'Pay per finding',
      description: 'A no-risk pentest: if we don\'t find vulnerabilities, you don\'t pay. You only pay per confirmed finding, based on severity.',
      bullets: [
        'Zero upfront cost — pay only for real results',
        'Transparent pricing by severity (Critical/High/Medium/Low)',
        'Same methodology and rigor as a full pentest',
        'Ideal first engagement if you\'ve never had a pentest',
      ],
      cta: 'Learn about pay per finding',
    },
  },
  process: {
    section_title: 'How we work',
    section_subtitle: 'A structured methodology that adapts to your context, not the other way around.',
    steps: {
      recon: {
        number: '01',
        title: 'Reconnaissance',
        description: 'We map your attack surface and gather intelligence about your systems, just like a real attacker would.',
      },
      analysis: {
        number: '02',
        title: 'Analysis',
        description: 'We identify vulnerabilities through automated scanning and manual expert review, prioritizing by real business impact.',
      },
      exploitation: {
        number: '03',
        title: 'Controlled exploitation',
        description: 'We validate findings by safely exploiting them in a controlled manner, proving real risk without disrupting your operations.',
      },
      report: {
        number: '04',
        title: 'Report & recommendations',
        description: 'You get a clear report with prioritized findings, reproduction steps, and actionable remediation guidance.',
      },
    },
  },
  sectors: {
    section_title: 'Who we work with',
    section_subtitle: 'We help organizations across sectors that handle sensitive data and need pragmatic security.',
    items: {
      ecommerce: { title: 'E-commerce', description: 'Payment data and customer trust.' },
      saas: { title: 'SaaS B2B', description: 'Multi-tenant platforms and API security.' },
      legal: { title: 'Law firms & accountants', description: 'Client confidentiality and compliance.' },
      health: { title: 'Healthcare', description: 'Patient data and regulatory requirements.' },
      hospitality: { title: 'Digital hospitality', description: 'Booking systems and guest data.' },
      industry: { title: 'SME industry', description: 'OT/IT convergence and supply chain.' },
    },
  },
  testimonials: {
    section_title: 'What our clients say',
  },
  faq: {
    section_title: 'Frequently asked questions',
    items: [
      {
        q: 'How long does a pentest take?',
        a: 'A typical engagement takes 1 to 3 weeks depending on scope and complexity. We\'ll give you a clear timeline before starting, and we work within your operational windows.',
      },
      {
        q: 'Do you need to stop our service during testing?',
        a: 'No. We perform controlled testing designed to avoid service disruption. We agree on scope, timing, and escalation procedures before starting. Your operations continue normally.',
      },
      {
        q: 'What technical level does my team need to read the report?',
        a: 'None for the executive summary — it\'s written for business decision-makers. The technical appendix is detailed enough for your engineering team to reproduce and fix each finding.',
      },
      {
        q: 'Do you work with companies outside Spain?',
        a: 'Yes. We work with clients worldwide. Our reports and communication are available in both English and Spanish, and we\'re experienced in remote engagements.',
      },
      {
        q: 'What\'s the difference between an automated scan and a manual pentest?',
        a: 'An automated scanner finds known vulnerabilities from a database. A manual pentest involves a security engineer thinking like an attacker: chaining findings, testing business logic, and finding issues no tool would catch. We use both, but the human expertise is what makes the difference.',
      },
      {
        q: 'How do you guarantee confidentiality?',
        a: 'Every engagement is covered by a strict NDA. We follow secure data handling practices, encrypt all communications and deliverables, and delete client data after the agreed retention period.',
      },
    ],
  },
  cta_final: {
    title: 'Ready to know where your vulnerabilities are?',
    subtitle: 'Let\'s talk. No commitment, no sales pitch — just an honest conversation about your security posture.',
    cta: 'Get in touch',
  },
  pentesting_page: {
    title: 'Pentesting',
    meta_description: 'Professional penetration testing for web applications, APIs, and infrastructure. OWASP and PTES methodologies. Clear reports with remediation guidance.',
    hero_title: 'Find your vulnerabilities before attackers do',
    hero_subtitle: 'Professional penetration testing that goes beyond automated scanning. Our security engineers think like attackers to find the vulnerabilities that matter.',
    what: {
      title: 'What is a pentest?',
      description: 'A penetration test is a controlled simulation of a real cyberattack against your systems. Unlike automated vulnerability scanners that check against a known database, a pentest involves a security professional actively thinking like an attacker: looking for misconfigurations, logic flaws, chained vulnerabilities, and attack paths that automated tools miss.',
      description_2: 'The goal isn\'t to generate a long list of theoretical issues — it\'s to show you exactly how an attacker could compromise your systems and what you need to fix first.',
    },
    types: {
      title: 'Types of pentesting',
      web: {
        title: 'Web applications',
        description: 'Full assessment of your web applications following OWASP WSTG methodology. We test authentication, authorization, session management, input validation, and business logic.',
      },
      api: {
        title: 'APIs & web services',
        description: 'REST, GraphQL, and SOAP API security testing. We analyze authentication mechanisms, rate limiting, data exposure, and injection vectors.',
      },
      infra: {
        title: 'Infrastructure',
        description: 'Network and infrastructure assessment including servers, firewalls, VPNs, and cloud configurations. We identify misconfigurations and attack paths across your perimeter.',
      },
      social: {
        title: 'Social engineering',
        description: 'Controlled phishing campaigns and social engineering assessments to test your team\'s readiness against human-targeted attacks.',
      },
    },
    methodology: {
      title: 'Our methodology',
      description: 'We follow internationally recognized frameworks adapted to each engagement:',
      frameworks: [
        'OWASP Web Security Testing Guide (WSTG) v4.2',
        'OWASP Application Security Verification Standard (ASVS)',
        'PTES — Penetration Testing Execution Standard',
        'NIST SP 800-115 — Technical Guide to Information Security Testing',
      ],
    },
    deliverables: {
      title: 'What you get',
      items: [
        {
          title: 'Executive summary',
          description: 'A clear, non-technical overview of findings and risk level for decision-makers.',
        },
        {
          title: 'Technical report',
          description: 'Detailed findings with severity ratings (CVSS v3.1), reproduction steps, evidence, and specific remediation guidance.',
        },
        {
          title: 'Presentation session',
          description: 'A live walkthrough of findings with your technical and management teams to answer questions and prioritize remediation.',
        },
        {
          title: 'Remediation support',
          description: 'Post-delivery support to clarify findings and validate fixes. We\'re here until you\'re confident the issues are resolved.',
        },
      ],
    },
    pricing: {
      title: 'Pricing',
      description: 'Every engagement is scoped individually based on complexity, number of assets, and testing type. We believe in transparent pricing with no hidden fees.',
      note: 'Contact us for a detailed quote tailored to your specific needs.',
    },
    cta: {
      title: 'Ready to test your defenses?',
      subtitle: 'Tell us about your systems and we\'ll propose a tailored engagement.',
      button: 'Request a pentest',
    },
  },
  awareness_page: {
    title: 'Awareness training',
    meta_description: 'Cybersecurity awareness training for teams. Phishing simulations, interactive sessions, and measurable results. Adapted to your industry.',
    hero_title: 'Turn your team into your strongest defense',
    hero_subtitle: 'Practical cybersecurity training that changes behavior, not just knowledge. Because the best firewall in the world can\'t stop someone clicking a link.',
    human_factor: {
      title: 'The human factor',
      stat: '68%',
      stat_label: 'of breaches involve a human element',
      source: 'Verizon DBIR 2024',
      description: 'Technology alone can\'t protect your organization. Phishing, social engineering, and credential theft succeed because they target people, not systems. The most effective security investment you can make is ensuring your team knows how to recognize and respond to threats in their daily work.',
    },
    how: {
      title: 'How our training works',
      items: [
        {
          title: 'Online & in-person',
          description: 'Flexible delivery adapted to your team\'s schedule and location. Remote sessions, on-site workshops, or a hybrid approach.',
        },
        {
          title: 'Practical, not theoretical',
          description: 'Real examples from your industry, hands-on exercises, and attack simulations your team will actually encounter.',
        },
        {
          title: 'Measured results',
          description: 'Pre and post training assessments, phishing simulation metrics, and clear reports showing improvement over time.',
        },
        {
          title: 'Certification',
          description: 'Participants receive a certificate of completion. We also provide documentation for compliance audits.',
        },
      ],
    },
    topics: {
      title: 'Training topics',
      items: [
        'Phishing and spear-phishing recognition',
        'Password security and multi-factor authentication',
        'Secure remote work practices',
        'Social engineering tactics and defense',
        'Data handling and classification',
        'Incident reporting procedures',
        'Mobile device security',
        'Physical security awareness',
      ],
    },
    simulations: {
      title: 'Realistic phishing simulations',
      description: 'We design custom phishing campaigns that mimic the threats your organization actually faces. Not generic templates — scenarios tailored to your industry, your tools, and your communication patterns. We measure click rates, credential submissions, and reporting rates, then use the results to focus training where it matters most.',
    },
    cta: {
      title: 'Ready to strengthen your human firewall?',
      subtitle: 'Let\'s design a training program that fits your team and your risk profile.',
      button: 'Request training',
    },
  },
  consulting_page: {
    title: 'Security consulting',
    meta_description: 'Strategic cybersecurity consulting for SMBs. Secure architecture, threat modeling, DevSecOps, and compliance readiness. Practical guidance, not checkbox audits.',
    hero_title: 'Security strategy that fits your business',
    hero_subtitle: 'Practical security guidance from engineers who understand both the technical landscape and business constraints. We help you make the right security decisions at the right time.',
    what: {
      title: 'What is security consulting?',
      description: 'Security consulting is about making informed decisions before problems arise. We work alongside your team to understand your systems, identify risks, and build a security posture that matches your business goals — not just a compliance checklist.',
      description_2: 'Whether you\'re designing a new system, preparing for a compliance audit, or trying to understand where your biggest risks are, we provide clear, actionable guidance based on real-world offensive experience.',
    },
    areas: {
      title: 'Areas of expertise',
      architecture: {
        title: 'Secure architecture design',
        description: 'We review your system architecture and help you design security controls that are effective without being burdensome. From authentication flows to data storage, we ensure security is built in from the foundation.',
      },
      threat_modeling: {
        title: 'Threat modeling & code review',
        description: 'Systematic identification of threats to your applications using frameworks like STRIDE and PASTA. Combined with targeted code review to find vulnerabilities before they reach production.',
      },
      devsecops: {
        title: 'DevSecOps integration',
        description: 'We help your engineering team integrate security into their existing CI/CD pipelines. SAST, DAST, dependency scanning, and secrets detection — automated and practical, not blocking.',
      },
      compliance: {
        title: 'Compliance readiness',
        description: 'Practical preparation for ISO 27001, SOC 2, and GDPR compliance. We focus on building real security controls that satisfy auditors, not just filling documents.',
      },
    },
    approach: {
      title: 'Our approach',
      items: [
        {
          title: 'Understand your context',
          description: 'Every business has different risks, constraints, and priorities. We start by understanding yours before recommending anything.',
        },
        {
          title: 'Prioritize by impact',
          description: 'Not every risk is equal. We help you focus resources on the threats that actually matter to your business, not theoretical edge cases.',
        },
        {
          title: 'Actionable recommendations',
          description: 'No 200-page reports that gather dust. Clear, prioritized action items your team can actually implement with the resources they have.',
        },
        {
          title: 'Ongoing partnership',
          description: 'Security isn\'t a one-time project. We offer retainer models for continuous guidance as your systems and threat landscape evolve.',
        },
      ],
    },
    cta: {
      title: 'Need a security strategy that works?',
      subtitle: 'Let\'s discuss your security challenges and find the right approach for your business.',
      button: 'Request consulting',
    },
  },
  secdev_page: {
    title: 'Secure development',
    meta_description: 'Custom security tools, platforms, and applications built with security by design. Full-stack development with an offensive security mindset.',
    hero_title: 'Security tools built by security engineers',
    hero_subtitle: 'Custom applications, internal platforms, and security tooling built with an offensive security mindset. Security isn\'t an afterthought — it\'s the foundation.',
    what: {
      title: 'What is secure development?',
      description: 'Most security vulnerabilities are introduced during development, not after deployment. Secure development means building applications where security is a first-class concern from the first line of code — not a layer bolted on after the fact.',
      description_2: 'We combine full-stack development expertise with offensive security knowledge to build tools, platforms, and applications that are resilient by design. When the people who build your systems know how attackers think, the result is fundamentally more secure software.',
    },
    areas: {
      title: 'What we build',
      tooling: {
        title: 'Security tooling & automation',
        description: 'Custom scripts, scanners, and automation pipelines that fit your specific security workflow. From vulnerability management dashboards to automated compliance checks.',
      },
      web: {
        title: 'Web applications with security by design',
        description: 'Full-stack web applications built with secure coding practices, proper authentication, input validation, and defense in depth from the start.',
      },
      api: {
        title: 'APIs with built-in security',
        description: 'REST and GraphQL APIs with robust authentication, fine-grained authorization, rate limiting, input sanitization, and comprehensive logging built into the architecture.',
      },
      platforms: {
        title: 'Internal security platforms',
        description: 'Custom dashboards, reporting tools, and internal platforms that help your security and engineering teams work more effectively.',
      },
    },
    principles: {
      title: 'Our principles',
      items: [
        {
          title: 'Security by default',
          description: 'Secure configurations out of the box. Authentication, encryption, and access controls are enabled by default, not optional.',
        },
        {
          title: 'Minimal attack surface',
          description: 'Every feature, endpoint, and dependency is evaluated for the attack surface it introduces. Less is more in secure design.',
        },
        {
          title: 'Defense in depth',
          description: 'Multiple layers of security controls so that a single failure doesn\'t compromise the entire system.',
        },
        {
          title: 'Transparent & auditable',
          description: 'Clean code, comprehensive logging, and documentation that makes security review straightforward for your team and auditors.',
        },
      ],
    },
    cta: {
      title: 'Need security built into your tools?',
      subtitle: 'Tell us what you\'re building and we\'ll help you do it securely from day one.',
      button: 'Request a quote',
    },
  },
  ppf_page: {
    title: 'Pay per finding',
    meta_description: 'No-risk penetration testing. If we don\'t find vulnerabilities, you don\'t pay. Transparent pricing by severity. Ideal for SMBs new to pentesting.',
    hero_title: 'If we don\'t find anything, you don\'t pay',
    hero_subtitle: 'A pentest with zero financial risk for you. We audit your systems with the same rigor as a traditional engagement — but you only pay for confirmed vulnerabilities, based on their severity.',
    what: {
      title: 'How does it work?',
      description: 'Pay per finding is a penetration testing model where you only pay for the vulnerabilities we actually find and confirm. There\'s no upfront fee, no fixed cost — just a transparent pricing table based on the severity of each finding.',
      description_2: 'We define the scope together, sign an agreement with the severity-based pricing table, and then we go to work. If we find nothing, you pay nothing. If we find issues, you pay per finding according to the agreed rates. Every finding comes with the same quality deliverables as a traditional pentest: detailed reproduction steps, evidence, and remediation guidance.',
    },
    why: {
      title: 'Why pay per finding?',
      items: [
        {
          title: 'Zero risk for you',
          description: 'No upfront investment. If your systems are secure, you pay nothing and gain the confidence of knowing they\'ve been tested by professionals.',
        },
        {
          title: 'Aligned incentives',
          description: 'We only get paid when we deliver real value. Our motivation is to find every vulnerability that matters, not to pad a report.',
        },
        {
          title: 'Perfect first engagement',
          description: 'If you\'ve never had a pentest and aren\'t sure what to expect, this model lets you experience professional security testing with zero financial commitment.',
        },
        {
          title: 'Transparent and predictable',
          description: 'You know exactly what each finding costs before we start. No surprises, no hidden fees — just a clear price-per-severity table.',
        },
      ],
    },
    pricing: {
      title: 'Pricing by severity',
      description: 'Each confirmed vulnerability is priced according to its severity, assessed using the industry-standard CVSS v3.1 framework. Exact rates are agreed before the engagement starts.',
      tiers: [
        {
          severity: 'Critical',
          cvss: 'CVSS 9.0 – 10.0',
          description: 'Remote code execution, authentication bypass, full data breach vectors.',
        },
        {
          severity: 'High',
          cvss: 'CVSS 7.0 – 8.9',
          description: 'Privilege escalation, significant data exposure, impactful injection flaws.',
        },
        {
          severity: 'Medium',
          cvss: 'CVSS 4.0 – 6.9',
          description: 'Cross-site scripting, information disclosure, misconfigurations with limited impact.',
        },
        {
          severity: 'Low',
          cvss: 'CVSS 0.1 – 3.9',
          description: 'Minor information leaks, best-practice deviations, low-impact issues.',
        },
      ],
      cap_note: 'We agree on a maximum cap before starting, so you always know your worst-case cost.',
    },
    scope: {
      title: 'Scope and rules',
      items: [
        'We define the target systems and boundaries together before starting — same as a traditional pentest.',
        'A formal scope agreement and pricing table are signed before any testing begins.',
        'Testing follows OWASP, PTES, and NIST methodologies — no shortcuts.',
        'Duplicate or informational findings are not charged. Only confirmed, unique vulnerabilities count.',
        'You receive the same deliverables as a traditional pentest: executive summary, technical report, and remediation support.',
      ],
    },
    faq: {
      title: 'Common questions',
      items: [
        {
          q: 'What if you find a lot of vulnerabilities?',
          a: 'The maximum cap we agree on before starting protects you. Even if we find many issues, your total cost won\'t exceed the cap. Think of it as a traditional pentest price that you only reach if there are significant findings.',
        },
        {
          q: 'Is the methodology different from a regular pentest?',
          a: 'No. We apply the exact same methodology, tools, and rigor. The only difference is the pricing model — the quality of testing is identical.',
        },
        {
          q: 'What types of systems can be tested?',
          a: 'Web applications, APIs, infrastructure, and cloud environments. We agree on the specific scope during the initial conversation.',
        },
        {
          q: 'Who decides the severity of a finding?',
          a: 'Severity is assessed using CVSS v3.1, an industry-standard framework. We provide full evidence and reproduction steps so you can verify every assessment. If there\'s a disagreement, we discuss it transparently.',
        },
      ],
    },
    cta: {
      title: 'Ready to test your systems with zero risk?',
      subtitle: 'Let\'s define a scope and pricing table. If we don\'t find anything, you don\'t pay.',
      button: 'Request a pay-per-finding audit',
    },
  },
  about_page: {
    title: 'About us',
    meta_description: 'Almenara Security: cybersecurity firm based in Malaga, Spain. Professional pentesting and awareness training for SMBs. Enterprise quality, human scale.',
    hero_title: 'From watchtowers to networks',
    hero_subtitle: 'The same principle that protected the Mediterranean coast for centuries, applied to modern cybersecurity.',
    story: {
      p1: 'For centuries, the coast of Malaga lived under threat. Pirates, raids, attacks from the sea. The response wasn\'t to build higher walls — it was to build a network. Dozens of almenaras, watchtowers that could see each other, ready to light a fire at the first sign of danger. One tower detected. The next alerted. In minutes, the entire coast knew something was coming.',
      p2: 'Today the threats come through different channels, but the principle is the same: detect early, alert clearly, respond as a network.',
      p3: 'At Almenara Security we help SMBs and mid-sized companies protect themselves against digital threats with two things: technical pentesting that finds vulnerabilities before attackers do, and practical training that turns every employee into one more almenara in your organization. And we do it leveraging AI, because threats evolve fast and we need to move faster.',
      p4: 'We were born in Malaga, facing the same Mediterranean the original almenaras watched over. We work with clients and teams around the world. And we do it with one clear idea: serious cybersecurity shouldn\'t be a luxury reserved for large corporations.',
    },
    values: {
      title: 'Our values',
      items: [
        {
          title: 'Technical honesty',
          description: 'We tell you what we find, not what you want to hear. No inflated severity scores, no alarmism — just clear, actionable findings.',
        },
        {
          title: 'Closeness',
          description: 'We work with you, not around you. Direct communication, fast responses, and a team that understands your business context.',
        },
        {
          title: 'Continuous learning',
          description: 'The threat landscape changes daily. We invest in constant training, research, and tooling to stay ahead.',
        },
        {
          title: 'Confidentiality',
          description: 'Your data and findings are sacred. Strict NDAs, encrypted communications, and secure data handling are non-negotiable.',
        },
      ],
    },
    team: {
      title: 'Our team',
      julio: {
        name: 'Julio Martinez',
        role: 'Founder & Security Engineer',
        bio: 'Security engineer with 10+ years of hands-on experience securing digital products for leading tech companies. From identity management in defense to offensive security at global consultancies, vulnerability management at a major telecom operator, and senior security engineering at a leading tech platform.',
        bio_2: 'OSCP and C-AI/MLPen certified, Julio combines offensive security expertise with a deep understanding of how engineering teams build and ship software. He uses AI as a force multiplier — not a shortcut — to reduce timelines and expand coverage, while every finding is verified and validated by human expertise.',
        certifications: ['OSCP', 'C-AI/MLPen', 'CAPen', 'AWS Security Specialty', 'AWS Solutions Architect', 'LFCS', 'ITIL 4'],
        speaking: ['Cybercamp (INCIBE)', 'Navaja Negra'],
        linkedin: 'https://linkedin.com/in/julio-mart%C3%ADnez-mart%C3%ADnez-checa-91758596',
        github: 'https://github.com/julioxus',
      },
    },
    malaga: {
      title: 'Why Malaga',
      description: 'Born on the Mediterranean coast, we combine the warmth and accessibility of our origins with global ambition. Malaga\'s growing tech ecosystem is our home base, but our work reaches clients worldwide.',
    },
  },
  contact_page: {
    title: 'Contact',
    meta_description: 'Get in touch with Almenara Security. Request a pentest quote, ask about awareness training, or schedule a conversation about your security needs.',
    hero_title: 'Let\'s talk about your security',
    hero_subtitle: 'No commitment, no sales pitch. Tell us what you need and we\'ll get back to you within 24 hours.',
    expect: {
      title: 'What to expect',
      items: [
        'We reply within 24 hours on business days',
        'A brief call to understand your context and needs',
        'A tailored proposal with clear scope and pricing',
        'No obligation — if we\'re not the right fit, we\'ll tell you',
      ],
    },
    email_label: 'Or email us directly at',
    email: 'info@almenarasecurity.com',
  },
  legal_page: {
    title: 'Legal notice',
    meta_description: 'Legal notice and company information for Almenara Security.',
  },
  privacy_page: {
    title: 'Privacy policy',
    meta_description: 'Privacy policy of Almenara Security. How we collect, use, and protect your personal data.',
  },
  cookies_page: {
    title: 'Cookie policy',
    meta_description: 'Cookie policy of Almenara Security. Information about cookies used on this website.',
  },
} as const;

export default en;
