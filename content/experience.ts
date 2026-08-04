export type Experience = {
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    company: "Kitzmann Gruppe",
    position: "IT & ERP Specialist",
    startDate: "06/2026",
    current: true,
    description:
      "Mitwirkung an der qualitätsgesicherten Migration von Artikelstammdaten aus dem Legacy-ERP Beosys in APplus.",
    responsibilities: [
      "Analyse, Mapping und Validierung heterogener Artikelstammdaten",
      "Entwicklung reproduzierbarer Generator-, Import- und Preflight-Prozesse",
      "Abstimmung fachlicher Regeln und Datenqualitätsfragen mit Fachbereichen und Key-Usern",
    ],
    technologies: ["Python", "SQL Server", "Pandas", "Excel", "Git", "APplus"],
  },
  {
    company: "COMCAVE College",
    position: "Umschulung zum Fachinformatiker für Daten- und Prozessanalyse (IHK)",
    startDate: "02/2024",
    endDate: "01/2026",
    current: false,
    description:
      "Beruflicher Wechsel in die Datenwelt mit Schwerpunkt Datenanalyse, Prozessmodellierung, Datenbanken und Data Engineering.",
    responsibilities: [
      "Analyse und Modellierung von Daten und Geschäftsprozessen",
      "Konzeption relationaler und analytischer Datenmodelle",
      "IHK-Abschlussprojekt mit ETL-Prozess, Data Vault und dimensionalem Datenmodell",
    ],
    technologies: ["Python", "SQL", "PostgreSQL", "Data Vault", "ETL", "BPMN"],
  },
  {
    company: "Holtkamp Consulting",
    position: "Praktikum Data Engineering & Business Intelligence",
    startDate: "03/2025",
    endDate: "10/2025",
    current: false,
    description:
      "Betriebliche Praxisphase innerhalb der Umschulung mit Fokus auf Datenanalyse, ETL-Logik und analytische Datenstrukturen.",
    responsibilities: [
      "Erstellung und Optimierung von SQL-Abfragen und ETL-Logik",
      "Entwicklung und Dokumentation fachlicher und analytischer Datenmodelle",
      "Modellierung von Datenstrukturen und Geschäftsprozessen mit (S)ERM und BPMN",
    ],
    technologies: ["SQL", "ETL", "Data Modeling", "Business Intelligence", "BPMN", "SERM"],
  },
  {
    company: "FIEGE",
    position: "Teamleitung & operative Logistik",
    startDate: "07/2018",
    endDate: "04/2023",
    current: false,
    description:
      "Führung und Koordination operativer Logistikprozesse im E-Commerce-Umfeld als Fundament für mein heutiges Verständnis datengetriebener Abläufe.",
    responsibilities: [
      "Fachliche Führung und Einsatzkoordination im operativen Tagesgeschäft",
      "Steuerung und Kontrolle von Waren- und Prozessflüssen",
      "Arbeit mit Warenwirtschaftssystemen, Kennzahlen und operativen Systembuchungen",
    ],
    technologies: ["Warenwirtschaft", "Prozesssteuerung", "KPI", "Teamführung"],
  },
  {
    company: "Chemische Industrie",
    position: "Chemikant & Produktionsmitarbeiter",
    startDate: "2002",
    endDate: "2017",
    current: false,
    description:
      "Langjährige Tätigkeit in der chemischen Produktion mit hoher Verantwortung für Prozesssicherheit, Qualität und verlässliche Dokumentation.",
    responsibilities: [
      "Steuerung und Überwachung technischer Produktionsanlagen",
      "Durchführung und Dokumentation von Prozess- und Qualitätskontrollen",
      "Strukturiertes Arbeiten nach Sicherheits-, Qualitäts- und Verfahrensvorgaben",
    ],
    technologies: ["SAP", "Prozessüberwachung", "Qualitätssicherung", "Anlagensteuerung"],
  },
];