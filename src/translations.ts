export type Language = 'en' | 'de';

export const t = {
  en: {
    nav: {
      solutions: "Strategy",
      work: "Case Work",
      process: "Approach",
      techStack: "Toolkit",
      contact: "Connect",
      letsTalk: "Connect",
    },
    hero: {
      role: "Gourav Chandra · Commercial, Pricing & Data Strategist · Germany",
      title1: "Bridging the gap between",
      title2: "Data & Strategy.",
      subtitle: "Helping business leaders turn complex market data into clear commercial decisions—across pricing optimization, e-commerce sales strategy, multi-region growth, and executive reporting.",
      explore: "Strategic Focus",
      letsTalk: "Exchange Ideas",
      quickFacts: [
        { label: "Strategy", value: "Pricing & Margin Optimization" },
        { label: "Commerce", value: "E-Commerce & Channel Growth" },
        { label: "Intelligence", value: "Power BI & Decision Models" },
        { label: "Markets", value: "Multi-Region Operations" }
      ]
    },
    consulting: {
      tag: "01 · Strategic Focus",
      title: "Where data meets commercial leadership.",
      subtitle: "Core areas where structured analytics and commercial strategy drive profitable decisions.",
      filterAll: "All Pillars",
      inquireAction: "Exchange perspective",
      services: [
        {
          id: "pricing",
          number: "01",
          category: "Pricing Strategy",
          title: "Pricing Optimization & Margin Protection",
          summary: "Dynamic pricing and contribution margin models that protect profitability across channels.",
          deliverables: "Price Elasticity · Margin Models · Channel Pricing"
        },
        {
          id: "growth",
          number: "02",
          category: "Sales & Scaling",
          title: "E-Commerce Sales & Multi-Region Growth",
          summary: "Commercial playbooks for entering new regions, aligning assortments, and scaling marketplaces.",
          deliverables: "Market Expansion · Marketplace Mix · Unit Economics"
        },
        {
          id: "bi",
          number: "03",
          category: "Decision Intelligence",
          title: "Executive Decision Systems",
          summary: "Unified Power BI cockpits giving leadership a single daily view of revenue, stock, and P&L.",
          deliverables: "Executive Cockpits · P&L Visibility · Demand Planning"
        },
        {
          id: "operations",
          number: "04",
          category: "Commercial Ops",
          title: "Automated Commercial Workflows",
          summary: "Clean SQL and Python data pipelines that eliminate manual reporting across systems.",
          deliverables: "SQL & Python · Stock Buffers · System Sync"
        }
      ]
    },
    caseStudies: {
      tag: "02 · Selected Case Work",
      title: "Strategic execution in practice.",
      subtitle: "Selected initiatives across pricing strategy, regional expansion, and executive reporting.",
      outcomeLabel: "Impact",
      projects: [
        {
          id: "pricing-margin-strategy",
          index: "01",
          category: "Pricing Strategy",
          title: "Multi-Channel Pricing & Margin Framework",
          summary: "Unified contribution margin and competitor-tracking model across direct stores and marketplaces.",
          outcome: "Full visibility into product-level net margins and disciplined promotional pricing.",
          stack: "Pricing Strategy · Margin Modeling · Python · Power BI"
        },
        {
          id: "multiregion-ecommerce-scaling",
          index: "02",
          category: "Market Expansion",
          title: "Multi-Region E-Commerce Expansion",
          summary: "Commercial rollout framework aligning regional pricing tiers, local assortments, and inventory.",
          outcome: "Scalable multi-market revenue growth steered from a single commercial playbook.",
          stack: "Sales Strategy · Market Rollout · Assortment Planning"
        },
        {
          id: "executive-decision-cockpit",
          index: "03",
          category: "Decision Intelligence",
          title: "Automated Executive Sales & Inventory Cockpit",
          summary: "Automated SQL, Python, and Power BI reporting replacing fragmented weekly spreadsheets.",
          outcome: "Daily leadership clarity on demand shifts, stock cover, and capital allocation.",
          stack: "Power BI · DAX · SQL · Python"
        }
      ]
    },
    methodology: {
      tag: "03 · Strategic Approach",
      title: "How I approach complex decisions.",
      subtitle: "Four steps from raw operational data to boardroom clarity.",
      steps: [
        {
          step: "01",
          title: "Commercial Diagnosis",
          desc: "Identify the real drivers behind margin loss, sales friction, or operational bottlenecks."
        },
        {
          step: "02",
          title: "Strategic Modeling",
          desc: "Translate business questions into clear pricing, margin, and demand models."
        },
        {
          step: "03",
          title: "System Alignment",
          desc: "Connect reporting, commerce platforms, and automated data flows."
        },
        {
          step: "04",
          title: "Leadership Clarity",
          desc: "Deliver concise decision views that let executives act quickly and independently."
        }
      ]
    },
    techStack: {
      tag: "04 · Core Toolkit",
      title: "Analytical & commercial stack.",
      subtitle: "Methods and tools used to turn business data into strategic clarity.",
      groups: [
        {
          index: "01",
          title: "Commercial & Pricing Strategy",
          tools: "Price Elasticity · Contribution Margin · Unit Economics · Assortment Strategy",
          summary: "Structuring profitable pricing tiers, promotional rules, and channel economics."
        },
        {
          index: "02",
          title: "Executive Decision Intelligence",
          tools: "Power BI · DAX · Executive Cockpits · Cohort & P&L Modeling",
          summary: "Turning operational and financial datasets into clear leadership views."
        },
        {
          index: "03",
          title: "E-Commerce & Market Expansion",
          tools: "Multi-Region Scaling · Marketplace Strategy · Demand Planning · Shopware",
          summary: "Growing digital retail channels and assortments across regions."
        },
        {
          index: "04",
          title: "Data & Workflow Architecture",
          tools: "SQL · Python · Automated Data Pipelines · ERP & API Integration",
          summary: "Dependable data foundations that keep strategic models accurate every day."
        }
      ]
    },
    contact: {
      tag: "05 · Professional Exchange",
      title: "Connect & exchange ideas.",
      subtitle: "Interested in discussing pricing strategy, multi-region e-commerce growth, or executive decision systems? Always glad to connect with fellow leaders and peers.",
      directEmailTitle: "Direct Contact",
      directEmail: "chandra572gourav@proton.me",
      copyEmail: "Copy Address",
      copied: "Copied",
      responseTime: "Personal portfolio & professional networking · Essen, Germany",
      nonCommercialNote: "This site is a personal professional portfolio for networking and knowledge exchange—no commercial services are sold here.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@company.com",
        serviceLabel: "Discussion Topic",
        serviceOptions: [
          "Pricing Optimization & Margin Strategy",
          "E-Commerce Sales & Multi-Region Growth",
          "Executive Decision Intelligence & Power BI",
          "Professional Networking & Peer Exchange"
        ],
        messageLabel: "Note",
        messagePlaceholder: "Share a thought, strategic topic, or connection note...",
        submitBtn: "Open in Email Client",
        submitting: "Opening Mail Client...",
        successTitle: "Email Draft Ready",
        successDesc: "Your local mail program has opened with your note pre-filled. Zero data was stored on this website.",
        resetBtn: "Reset Form"
      }
    },
    footer: {
      summary: "Gourav Chandra · Data & Commercial Strategy",
      domain: "vizjourney.com",
      privacyLink: "Privacy & Legal Notice",
      backToTop: "Top ↑",
      legalModal: {
        title: "Privacy & Non-Commercial Notice (EU / Germany)",
        closeBtn: "Close",
        sections: [
          {
            heading: "1. Non-Commercial Personal Portfolio (§ 5 DDG)",
            body: "vizjourney.com is the private, non-commercial professional portfolio of Gourav Chandra (based in Essen, Germany). It serves exclusively for professional networking, career presentation, and peer exchange on data and commercial strategy. No paid consulting, freelance services, or commercial business activities are offered or billed through this website."
          },
          {
            heading: "2. Zero Cookies & Zero Tracking (GDPR / DSGVO & TDDDG)",
            body: "This website does not use cookies, tracking pixels, analytics services, or local storage profiling. In accordance with Art. 6 GDPR (DSGVO) and § 25 TDDDG (German Telecommunications Digital Services Data Protection Act), no cookie consent banner is required because no information is stored on or read from your terminal device for tracking purposes."
          },
          {
            heading: "3. Zero Server-Side Data Collection",
            body: "When you use the message composer in the Connect section, your input is processed strictly inside your browser to generate a local mailto: link for your own email client. No form data or personal information is transmitted to, processed by, or stored on any backend database."
          },
          {
            heading: "4. Hosting & Security",
            body: "This static site is hosted via GitHub Pages and routed through vizjourney.com over encrypted HTTPS connections. Standard technical server logs (such as IP addresses transiently processed by the hosting provider to deliver the webpage) are governed by GitHub's privacy commitments."
          }
        ]
      }
    }
  },
  de: {
    nav: {
      solutions: "Strategie",
      work: "Fallbeispiele",
      process: "Ansatz",
      techStack: "Methodik",
      contact: "Austausch",
      letsTalk: "Vernetzen",
    },
    hero: {
      role: "Gourav Chandra · Commercial, Pricing & Data Strategist · Deutschland",
      title1: "Die Verbindung von",
      title2: "Daten & Strategie.",
      subtitle: "Unterstützung für Führungskräfte und Entscheider, um komplexe Marktdaten in klare kaufmännische Entscheidungen zu übersetzen – in den Bereichen Preisoptimierung, E-Commerce-Vertriebsstrategie, Multi-Region-Skalierung und Decision Intelligence.",
      explore: "Strategischer Fokus",
      letsTalk: "Fachlicher Austausch",
      quickFacts: [
        { label: "Strategie", value: "Pricing & Margensteuerung" },
        { label: "Handel", value: "E-Commerce & Kanalwachstum" },
        { label: "Analytics", value: "Power BI & Entscheidungsmodelle" },
        { label: "Märkte", value: "Multi-Region Steuerung" }
      ]
    },
    consulting: {
      tag: "01 · Strategische Schwerpunkte",
      title: "Wo Daten auf kaufmännische Führung treffen.",
      subtitle: "Kernbereiche, in denen strukturierte Analytik und Handelsstrategie profitable Entscheidungen ermöglichen.",
      filterAll: "Alle Säulen",
      inquireAction: "Fachaustausch",
      services: [
        {
          id: "pricing",
          number: "01",
          category: "Preisstrategie",
          title: "Preisoptimierung & Margensicherung",
          summary: "Dynamische Preis- und Deckungsbeitragsmodelle, die Margen über alle Kanäle hinweg schützen.",
          deliverables: "Preiselastizität · Margenmodelle · Kanal-Pricing"
        },
        {
          id: "growth",
          number: "02",
          category: "Vertrieb & Skalierung",
          title: "E-Commerce-Vertrieb & Multi-Region-Wachstum",
          summary: "Kaufmännische Leitfäden für neue Regionen, regionale Sortimente und Marktplatz-Skalierung.",
          deliverables: "Marktexpansion · Marktplatz-Mix · Unit Economics"
        },
        {
          id: "bi",
          number: "03",
          category: "Decision Intelligence",
          title: "Management-Entscheidungssysteme",
          summary: "Zentrale Power-BI-Cockpits für den täglichen Überblick über Umsatz, Bestand und GuV.",
          deliverables: "Management-Cockpits · GuV-Transparenz · Bedarfsplanung"
        },
        {
          id: "operations",
          number: "04",
          category: "Commercial Ops",
          title: "Automatisierte Daten- & Handelsprozesse",
          summary: "Saubere SQL- und Python-Pipelines, die manuelles Reporting zwischen Systemen ablösen.",
          deliverables: "SQL & Python · Sicherheitsbestände · Systemabgleich"
        }
      ]
    },
    caseStudies: {
      tag: "02 · Ausgewählte Fallbeispiele",
      title: "Strategische Umsetzung in der Praxis.",
      subtitle: "Ausgewählte Initiativen aus Preisstrategie, Marktexpansion und Management-Reporting.",
      outcomeLabel: "Wirkung",
      projects: [
        {
          id: "pricing-margin-strategy",
          index: "01",
          category: "Preisstrategie",
          title: "Kanalübergreifendes Preis- & Margenmodell",
          summary: "Einheitliches Deckungsbeitrags- und Preisbeobachtungsmodell für Onlineshops und Marktplätze.",
          outcome: "Volle Transparenz über Netto-Margen auf Artikelebene und gezielte Aktionssteuerung.",
          stack: "Pricing-Strategie · Margenmodelle · Python · Power BI"
        },
        {
          id: "multiregion-ecommerce-scaling",
          index: "02",
          category: "Marktexpansion",
          title: "Multi-Region E-Commerce-Expansion",
          summary: "Abgestimmte Markt- und Vertriebsstrategie für regionale Preisstaffeln, Sortimente und Bestände.",
          outcome: "Skalierbares Umsatzwachstum über mehrere Märkte nach einem klaren kaufmännischen Leitfaden.",
          stack: "Vertriebsstrategie · Markt-Rollout · Sortimentsplanung"
        },
        {
          id: "executive-decision-cockpit",
          index: "03",
          category: "Decision Intelligence",
          title: "Automatisiertes Management- & Bestands-Cockpit",
          summary: "Automatisierte SQL-, Python- und Power-BI-Strecken anstelle manueller Wochenberichte.",
          outcome: "Tägliche Entscheidungsklarheit über Nachfrage, Lagerreichweite und Kapitalallokation.",
          stack: "Power BI · DAX · SQL · Python"
        }
      ]
    },
    methodology: {
      tag: "03 · Strategischer Ansatz",
      title: "Wie komplexe Entscheidungen klar werden.",
      subtitle: "In vier Schritten von operativen Rohdaten zu klarer Führungsstrategie.",
      steps: [
        {
          step: "01",
          title: "Kaufmännische Diagnose",
          desc: "Echte Margentreiber, Wachstumsbremsen und operative Engpässe identifizieren."
        },
        {
          step: "02",
          title: "Strategisches Modell",
          desc: "Geschäftsfragen in klare Preis-, Margen- und Bedarfsmodelle übersetzen."
        },
        {
          step: "03",
          title: "System-Verankerung",
          desc: "Reporting, Handelssysteme und automatisierte Datenflüsse nahtlos verbinden."
        },
        {
          step: "04",
          title: "Entscheidungsklarheit",
          desc: "Übersichtliche Cockpits bereitstellen, mit denen Führungskräfte schnell steuern."
        }
      ]
    },
    techStack: {
      tag: "04 · Methodik & Werkzeuge",
      title: "Analytisches & kaufmännisches Fundament.",
      subtitle: "Methoden und Werkzeuge für belastbare strategische Entscheidungen.",
      groups: [
        {
          index: "01",
          title: "Handels- & Preisstrategie",
          tools: "Preiselastizität · Deckungsbeitragsrechnung · Unit Economics · Sortimentssteuerung",
          summary: "Aufbau profitabler Preisstrukturen, Aktionslogiken und Kanalkalkulationen."
        },
        {
          index: "02",
          title: "Executive Decision Intelligence",
          tools: "Power BI · DAX · Management-Cockpits · Kohorten- & GuV-Modelle",
          summary: "Übersetzung von Betriebs- und Finanzdaten in klare Entscheidungsgrundlagen."
        },
        {
          index: "03",
          title: "E-Commerce & Marktexpansion",
          tools: "Multi-Region-Skalierung · Marktplatz-Strategie · Bedarfsplanung · Shopware",
          summary: "Skalierung digitaler Vertriebskanäle und Sortimente über mehrere Regionen."
        },
        {
          index: "04",
          title: "Daten- & Prozessarchitektur",
          tools: "SQL · Python · Automatisierte Datenstrecken · ERP- & API-Anbindung",
          summary: "Verlässliche Datenfundamente, die strategische Modelle täglich aktuell halten."
        }
      ]
    },
    contact: {
      tag: "05 · Fachlicher Austausch",
      title: "Vernetzen & Perspektiven teilen.",
      subtitle: "Interesse an einem fachlichen Austausch zu Preisstrategie, Multi-Region E-Commerce oder Decision Intelligence? Ich freue mich über den Dialog mit Führungskräften und Fachkollegen.",
      directEmailTitle: "Direkter Kontakt",
      directEmail: "chandra572gourav@proton.me",
      copyEmail: "Adresse kopieren",
      copied: "Kopiert",
      responseTime: "Persönliches Portfolio & Fachnetzwerk · Essen, Deutschland",
      nonCommercialNote: "Diese Seite dient ausschließlich dem persönlichen Fachaustausch und als berufliches Portfolio – kein gewerbliches Dienstleistungsangebot.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Ihr Name",
        emailLabel: "E-Mail",
        emailPlaceholder: "name@unternehmen.de",
        serviceLabel: "Gesprächsthema",
        serviceOptions: [
          "Preisoptimierung & Margenstrategie",
          "E-Commerce-Vertrieb & Multi-Region-Wachstum",
          "Executive Decision Intelligence & Power BI",
          "Fachlicher Austausch & Networking"
        ],
        messageLabel: "Nachricht",
        messagePlaceholder: "Teilen Sie Ihre Gedanken, ein strategisches Thema oder eine kurze Vernetzungsnachricht...",
        submitBtn: "Im E-Mail-Programm öffnen",
        submitting: "E-Mail-Programm öffnet...",
        successTitle: "E-Mail-Entwurf bereit",
        successDesc: "Ihr lokales E-Mail-Programm wurde mit Ihrer Nachricht geöffnet. Es wurden keinerlei Daten auf dieser Webseite gespeichert.",
        resetBtn: "Zurücksetzen"
      }
    },
    footer: {
      summary: "Gourav Chandra · Data & Commercial Strategy",
      domain: "vizjourney.com",
      privacyLink: "Datenschutz & Hinweis",
      backToTop: "Nach oben ↑",
      legalModal: {
        title: "Datenschutz & Rechtlicher Hinweis (EU / Deutschland)",
        closeBtn: "Schließen",
        sections: [
          {
            heading: "1. Nicht-kommerzielles persönliches Portfolio (§ 5 DDG)",
            body: "vizjourney.com ist das private, nicht-kommerzielle Fachportfolio von Gourav Chandra (Essen, Deutschland). Die Seite dient ausschließlich der beruflichen Vorstellung sowie dem fachlichen Meinungs- und Erfahrungsaustausch zu Daten- und Handelsstrategie. Über diese Webseite werden keine entgeltlichen Beratungsleistungen, Freelance-Aufträge oder sonstigen gewerblichen Dienstleistungen angeboten."
          },
          {
            heading: "2. Keine Cookies & Kein Tracking (DSGVO & TDDDG)",
            body: "Diese Webseite verwendet keinerlei Cookies, Tracking-Pixel, Analyse-Tools oder Profilbildung im Browser-Speicher. Gemäß Art. 6 DSGVO und § 25 TDDDG ist daher kein Cookie-Banner erforderlich, da keine Informationen zu Tracking-Zwecken auf Ihrem Endgerät gespeichert oder ausgelesen werden."
          },
          {
            heading: "3. Keine serverseitige Datenspeicherung",
            body: "Wenn Sie das Nachrichtenfeld im Bereich Austausch nutzen, wird Ihre Eingabe ausschließlich lokal in Ihrem Browser verwendet, um einen mailto:-Link für Ihr eigenes E-Mail-Programm zu erzeugen. Es werden keine Formulardaten oder personenbezogenen Angaben an einen Server übertragen oder dort gespeichert."
          },
          {
            heading: "4. Hosting & Sicherheit",
            body: "Diese statische Seite wird über GitHub Pages bereitgestellt und verschlüsselt (HTTPS) unter vizjourney.com ausgeliefert. Technisch notwendige Verbindungsdaten beim Seitenaufruf unterliegen den Datenschutzrichtlinien von GitHub."
          }
        ]
      }
    }
  }
};
