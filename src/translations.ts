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
      role: "Gourav Chandra · Commercial, Pricing & Data Strategist · Germany (EU)",
      title1: "Bridging the gap between",
      title2: "Data & Strategy.",
      subtitle: "Helping industry leaders turn complex market data into clear commercial decisions. Focused on pricing optimization, e-commerce sales strategy, multi-region scaling, and executive decision intelligence.",
      explore: "Strategic Focus",
      letsTalk: "Exchange Ideas",
      quickFacts: [
        { label: "Core Focus", value: "Pricing & Sales Strategy" },
        { label: "Growth", value: "Multi-Region Scaling" },
        { label: "Decision Intelligence", value: "Power BI & Commercial Models" },
        { label: "Scope", value: "DACH & European Markets" }
      ]
    },
    consulting: {
      tag: "01 · Strategic Focus",
      title: "Where data meets commercial leadership.",
      subtitle: "Practical frameworks built for decision-makers to protect margins, scale across regions, and steer daily business performance with clarity.",
      filterAll: "All Pillars",
      inquireAction: "Exchange perspective",
      services: [
        {
          id: "pricing",
          number: "01",
          category: "Pricing Strategy",
          title: "Pricing Optimization & Margin Protection",
          summary: "Clear pricing architecture that balances market competitiveness with healthy contribution margins.",
          desc: "Designing dynamic pricing frameworks, elasticity models, and competitor monitoring routines so commercial leaders know exactly when to hold price and when to promote across channels.",
          deliverables: "Price Elasticity · Contribution Margin Models · Channel Pricing · Discount Governance"
        },
        {
          id: "growth",
          number: "02",
          category: "Sales & Scaling",
          title: "E-Commerce Sales Strategy & Multi-Region Scaling",
          summary: "Structured commercial expansion across European markets and retail channels.",
          desc: "Aligning assortment strategy, regional localization, marketplace mix, and unit economics so brands can enter new European markets and scale revenue sustainably.",
          deliverables: "Multi-Region Rollout · Marketplace Strategy · Assortment Planning · Unit Economics"
        },
        {
          id: "bi",
          number: "03",
          category: "Decision Intelligence",
          title: "Executive Decision Systems",
          summary: "Direct, automated leadership views instead of fragmented weekly spreadsheets.",
          desc: "Connecting revenue, return behavior, marketing spend, and inventory health into one clear Power BI cockpit so executives can make fast, confident resource decisions.",
          deliverables: "Executive Cockpits · P&L Visibility · Cohort & Return Analysis · Demand Forecasting"
        },
        {
          id: "operations",
          number: "04",
          category: "Commercial Ops",
          title: "Automated Commercial Workflows",
          summary: "Reliable data foundations that free commercial teams from manual reporting.",
          desc: "Building clean SQL and Python pipelines behind the scenes to unify ERP, store, and marketplace data—giving strategy and buying teams accurate numbers every morning.",
          deliverables: "SQL & Python Pipelines · Inventory Buffers · Automated Alerts · System Integration"
        }
      ]
    },
    caseStudies: {
      tag: "02 · Selected Case Work",
      title: "Strategic execution in practice.",
      subtitle: "Examples of how structured data and commercial strategy solve real leadership challenges.",
      challengeLabel: "Context",
      solutionLabel: "Strategic Approach",
      resultLabel: "Business Impact",
      projects: [
        {
          id: "pricing-margin-strategy",
          index: "01",
          category: "Pricing Optimization · Commercial Strategy",
          title: "Multi-Channel Pricing & Contribution Margin Framework",
          overview: "Selling across direct online stores and major European marketplaces created constant price pressure, making it hard for leadership to see true net margins after platform fees, shipping, and returns.",
          solution: "Built a unified contribution margin model and automated price-positioning tracker that factors in real-time competitor shifts, return rates, and channel costs before recommending price adjustments.",
          outcome: "Decision-makers gained clear visibility into product-level profitability, protecting core margins while staying competitive during peak retail campaigns.",
          stack: "Pricing Strategy · Margin Modeling · Python · Power BI"
        },
        {
          id: "multiregion-ecommerce-scaling",
          index: "02",
          category: "Multi-Region Growth · E-Commerce Strategy",
          title: "European Cross-Border E-Commerce Expansion",
          overview: "A growing retail business wanted to expand beyond its home market into multiple European countries, each with different customer demand patterns, VAT rules, and fulfillment costs.",
          solution: "Designed a phased market-entry and sales strategy covering regional assortment selection, localized pricing tiers, and centralized multi-country storefront and inventory governance.",
          outcome: "Leadership launched and steered new regional sales channels from a single commercial playbook, scaling international revenue without operational bottlenecks.",
          stack: "Market Expansion · Sales Strategy · Multi-Country Catalog · ERP & Shopware"
        },
        {
          id: "executive-decision-cockpit",
          index: "03",
          category: "Decision Intelligence · Executive Reporting",
          title: "Automated Executive Sales & Inventory Cockpit",
          overview: "Senior management waited days every week for analysts to manually merge sales exports, warehouse stock sheets, and finance numbers before making purchasing or marketing decisions.",
          solution: "Created automated overnight data pipelines in SQL and Python feeding directly into an executive Power BI cockpit focused on daily revenue, net margin, stock cover, and return drivers.",
          outcome: "Executives now open a single view each morning to spot demand shifts early, prevent stockouts on key lines, and allocate capital with confidence.",
          stack: "Power BI · DAX · SQL · Python Automation"
        }
      ]
    },
    methodology: {
      tag: "03 · Strategic Approach",
      title: "How I approach complex decisions.",
      subtitle: "A structured four-step framework connecting raw operational reality to boardroom strategy.",
      steps: [
        {
          step: "01",
          title: "Commercial Diagnosis",
          desc: "Look past surface metrics to identify the real drivers of margin leakage, sales friction, or regional bottlenecks."
        },
        {
          step: "02",
          title: "Strategic Modeling",
          desc: "Translate business questions into clear pricing, unit-economics, or demand models that show trade-offs in plain terms."
        },
        {
          step: "03",
          title: "System Alignment",
          desc: "Connect reporting, store systems, and automated data flows so the strategy works reliably in daily operations."
        },
        {
          step: "04",
          title: "Leadership Clarity",
          desc: "Deliver clean decision views and playbooks that empower executives and teams to act quickly and independently."
        }
      ]
    },
    techStack: {
      tag: "04 · Core Toolkit",
      title: "Analytical & commercial stack.",
      subtitle: "Methods and technologies used to turn raw business data into strategic clarity.",
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
          summary: "Translating complex operational and financial datasets into clear leadership views."
        },
        {
          index: "03",
          title: "Multi-Region E-Commerce",
          tools: "Cross-Border Scaling · Marketplace Strategy · Demand Planning · Shopware",
          summary: "Scaling online retail operations and catalog governance across European markets."
        },
        {
          index: "04",
          title: "Data & Workflow Architecture",
          tools: "SQL · Python · Automated Data Pipelines · ERP & API Integration",
          summary: "Building dependable data foundations that keep strategic models accurate every day."
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
      responseTime: "Personal portfolio & professional networking · Essen, Germany (EU)",
      nonCommercialNote: "This site is a personal professional portfolio for networking and knowledge exchange—no commercial services are sold here.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@company.com",
        serviceLabel: "Discussion Topic",
        serviceOptions: [
          "Pricing Optimization & Margin Strategy",
          "E-Commerce Sales & Multi-Region Scaling",
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
            body: "This static site is hosted via GitHub Pages and routed through vizjourney.com over encrypted HTTPS connections. Standard technical server logs (such as IP addresses transiently processed by the hosting provider to deliver the webpage) are governed by GitHub's EU privacy commitments."
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
      letsTalk: "Vernetzten",
    },
    hero: {
      role: "Gourav Chandra · Commercial, Pricing & Data Strategist · Deutschland (EU)",
      title1: "Die Verbindung von",
      title2: "Daten & Strategie.",
      subtitle: "Unterstützung für Führungskräfte und Entscheider, um komplexe Marktdaten in klare kaufmännische Entscheidungen zu übersetzen. Fokus auf Preisoptimierung, E-Commerce-Vertriebsstrategie, internationale Skalierung und Decision Intelligence.",
      explore: "Strategischer Fokus",
      letsTalk: "Fachlicher Austausch",
      quickFacts: [
        { label: "Kernfokus", value: "Pricing & Vertriebsstrategie" },
        { label: "Wachstum", value: "Multi-Region Skalierung" },
        { label: "Decision Intelligence", value: "Power BI & Handelsmodelle" },
        { label: "Marktraum", value: "DACH & Europa" }
      ]
    },
    consulting: {
      tag: "01 · Strategische Schwerpunkte",
      title: "Wo Daten auf kaufmännische Führung treffen.",
      subtitle: "Klare Entscheidungsmodelle für Führungskräfte, um Margen zu sichern, in neue Märkte zu wachsen und das Tagesgeschäft präzise zu steuern.",
      filterAll: "Alle Säulen",
      inquireAction: "Fachaustausch starten",
      services: [
        {
          id: "pricing",
          number: "01",
          category: "Preisstrategie",
          title: "Preisoptimierung & Margensicherung",
          summary: "Klare Preisarchitektur für Wettbewerbsfähigkeit und gesunde Deckungsbeiträge.",
          desc: "Entwicklung dynamischer Preismodelle, Elastizitätsanalysen und Marktbeobachtungen, damit Entscheider genau wissen, wann Preise gehalten oder gezielt angepasst werden sollten.",
          deliverables: "Preiselastizität · Deckungsbeitragsmodelle · Kanal-Pricing · Rabattsteuerung"
        },
        {
          id: "growth",
          number: "02",
          category: "Vertrieb & Skalierung",
          title: "E-Commerce-Vertriebsstrategie & Internationale Skalierung",
          summary: "Strukturierte Expansion über europäische Märkte und digitale Vertriebskanäle.",
          desc: "Abstimmung von Sortimentsstrategie, Länderausrichtung, Marktplatz-Mix und Unit Economics, um Marken profitabel in neuen europäischen Regionen zu skalieren.",
          deliverables: "Länder-Rollout · Marktplatz-Strategie · Sortimentsplanung · Unit Economics"
        },
        {
          id: "bi",
          number: "03",
          category: "Decision Intelligence",
          title: "Management-Entscheidungssysteme",
          summary: "Direkte Führungs-Cockpits statt zeitraubender Excel-Zusammenstellungen.",
          desc: "Verknüpfung von Umsatz, Retourenverhalten, Marketingbudget und Lagerreichweite in einem klaren Power-BI-Cockpit für schnelle, fundierte Management-Entscheidungen.",
          deliverables: "Management-Cockpits · GuV-Transparenz · Retourenanalyse · Bedarfsprognose"
        },
        {
          id: "operations",
          number: "04",
          category: "Commercial Ops",
          title: "Automatisierte Daten- & Handelsprozesse",
          summary: "Verlässliche Datenprozesse, die Strategieteams von manueller Routinearbeit entlasten.",
          desc: "Aufbau sauberer SQL- und Python-Strecken im Hintergrund, die ERP-, Shop- und Marktplatzdaten zusammenführen – für verlässliche Zahlen jeden Morgen.",
          deliverables: "SQL- & Python-Pipelines · Sicherheitsbestände · Frühwarnsysteme · Systemintegration"
        }
      ]
    },
    caseStudies: {
      tag: "02 · Ausgewählte Fallbeispiele",
      title: "Strategische Umsetzung in der Praxis.",
      subtitle: "Wie strukturierte Datenmodelle und klare Handelsstrategie reale Führungsfragen lösen.",
      challengeLabel: "Ausgangslage",
      solutionLabel: "Strategischer Ansatz",
      resultLabel: "Wirkung",
      projects: [
        {
          id: "pricing-margin-strategy",
          index: "01",
          category: "Preisoptimierung · Handelsstrategie",
          title: "Kanalübergreifendes Preis- & Deckungsbeitragsmodell",
          overview: "Der parallele Verkauf über eigene Onlineshops und große europäische Marktplätze erzeugte hohen Preisdruck, während Gebühren, Versand und Retouren die wahre Nettomarge verschleierten.",
          solution: "Aufbau eines einheitlichen Deckungsbeitragsmodells und einer automatisierten Preisbeobachtung, die Wettbewerbsänderungen, Retourenquoten und Kanalkosten vor jeder Preisanpassung einberechnet.",
          outcome: "Führungskräfte erhielten volle Transparenz über die Profitabilität auf Artikelebene und schützten ihre Kernmarge auch in intensiven Aktionswochen.",
          stack: "Pricing-Strategie · Margenmodelle · Python · Power BI"
        },
        {
          id: "multiregion-ecommerce-scaling",
          index: "02",
          category: "Internationale Skalierung · E-Commerce",
          title: "Europäische Cross-Border E-Commerce-Expansion",
          overview: "Ein wachsendes Handelsunternehmen wollte über den Heimatmarkt hinaus in mehrere europäische Länder expandieren – mit jeweils eigener Nachfrage, Steuerlogik und Kostenstruktur.",
          solution: "Entwicklung einer gestuften Markt- und Vertriebsstrategie mit regionaler Sortimentsauswahl, lokaler Preisstaffelung sowie zentraler Katalog- und Bestandssteuerung.",
          outcome: "Die Geschäftsleitung steuerte neue Ländermärkte nach einem klaren kaufmännischen Leitfaden und skalierte den Auslandsumsatz ohne operative Reibungsverluste.",
          stack: "Marktexpansion · Vertriebsstrategie · Multi-Region Katalog · ERP & Shopware"
        },
        {
          id: "executive-decision-cockpit",
          index: "03",
          category: "Decision Intelligence · Management-Reporting",
          title: "Automatisiertes Management- & Bestands-Cockpit",
          overview: "Entscheider warteten jede Woche tagelang darauf, dass Verkaufsdaten, Lagerlisten und Finanzzahlen manuell zusammengeführt wurden, bevor Einkaufs- oder Budgetentscheidungen fielen.",
          solution: "Einrichtung automatisierter nächtlicher Datenstrecken in SQL und Python mit direkter Anbindung an ein Power-BI-Cockpit für Tagesumsatz, Nettomarge, Reichweite und Retourengründe.",
          outcome: "Das Management erkennt Nachfrageverschiebungen nun jeden Morgen auf einen Blick, vermeidet Engpässe bei Kernartikeln und steuert Kapital gezielt.",
          stack: "Power BI · DAX · SQL · Python-Automatisierung"
        }
      ]
    },
    methodology: {
      tag: "03 · Strategischer Ansatz",
      title: "Wie komplexe Entscheidungen klar werden.",
      subtitle: "Ein strukturierter Vier-Schritte-Ansatz, der operative Daten mit klarer Unternehmensstrategie verbindet.",
      steps: [
        {
          step: "01",
          title: "Kaufmännische Diagnose",
          desc: "Blick hinter oberflächliche Kennzahlen, um echte Margentreiber, Wachstumsbremsen oder regionale Engpässe zu erkennen."
        },
        {
          step: "02",
          title: "Strategisches Modell",
          desc: "Übersetzung von Geschäftsfragen in klare Preis-, Deckungsbeitrags- oder Bedarfsmodelle mit transparenten Handlungsoptionen."
        },
        {
          step: "03",
          title: "System-Verankerung",
          desc: "Verbindung von Reporting, Handelssystemen und automatisierten Datenflüssen, damit die Strategie im Alltag verlässlich greift."
        },
        {
          step: "04",
          title: "Entscheidungsklarheit",
          desc: "Bereitstellung übersichtlicher Cockpits und Leitfäden, mit denen Führungskräfte schnell und eigenständig steuern."
        }
      ]
    },
    techStack: {
      tag: "04 · Methodik & Werkzeuge",
      title: "Analytisches & kaufmännisches Fundament.",
      subtitle: "Methoden und Technologien, um aus Rohdaten belastbare strategische Entscheidungen zu formen.",
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
          summary: "Übersetzung komplexer Betriebs- und Finanzdaten in klare Entscheidungsgrundlagen."
        },
        {
          index: "03",
          title: "Multi-Region E-Commerce",
          tools: "Cross-Border-Skalierung · Marktplatz-Strategie · Bedarfsplanung · Shopware",
          summary: "Skalierung digitaler Vertriebskanäle und Katalogprozesse über europäische Märkte hinweg."
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
      subtitle: "Interesse an einem fachlichen Austausch zu Preisstrategie, internationaler E-Commerce-Skalierung oder Decision Intelligence? Ich freue mich über den Dialog mit Führungskräften und Fachkollegen.",
      directEmailTitle: "Direkter Kontakt",
      directEmail: "chandra572gourav@proton.me",
      copyEmail: "Adresse kopieren",
      copied: "Kopiert",
      responseTime: "Persönliches Portfolio & Fachnetzwerk · Essen, Deutschland (EU)",
      nonCommercialNote: "Diese Seite dient ausschließlich dem persönlichen Fachaustausch und als berufliches Portfolio – kein gewerbliches Dienstleistungsangebot.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Ihr Name",
        emailLabel: "E-Mail",
        emailPlaceholder: "name@unternehmen.de",
        serviceLabel: "Gesprächsthema",
        serviceOptions: [
          "Preisoptimierung & Margenstrategie",
          "E-Commerce-Vertrieb & Multi-Region-Skalierung",
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
            body: "Diese statische Seite wird über GitHub Pages bereitgestellt und verschlüsselt (HTTPS) unter vizjourney.com ausgeliefert. Technisch notwendige Verbindungsdaten beim Seitenaufruf unterliegen den europäischen Datenschutzrichtlinien von GitHub."
          }
        ]
      }
    }
  }
};
