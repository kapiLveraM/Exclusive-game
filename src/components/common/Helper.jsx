import { GreenBulb, GreenValue, Mail, StartMan, Telephone } from "./Icons";

export const Slot = [
  "/assets/images/slots/jetX.webp",
  "/assets/images/slots/joker.webp",
  "/assets/images/slots/slots.webp",
  "/assets/images/slots/lucky.webp",
  "/assets/images/slots/helloSummer.webp",
  "/assets/images/slots/casino.webp",
];
// jackpot services
export const JackpotServices = [
  "Tecnología HTML5",
  "Versión PC y móvil",
  "Control de RTP (controlás qué porcentaje pagar)",
  "Bonos editables, happy hours, Jackpots, códigos  promocionales.",
  "Aplicación para android y windows de regalo.",
];

// Juegos content
export const Juegos = [
  "/assets/images/Juegos/blackJack.webp",
  "/assets/images/Juegos/europeanRoulette.webp",
  "/assets/images/Juegos/liveBetting.webp",
];
// EllosEligieron
export const EllosEligieron = [
  "/assets/images/EllosEligieron/giros.webp",
  "/assets/images/EllosEligieron/europeanRoulette.webp",
  "/assets/images/EllosEligieron/liveBetting.webp",
];

// mas card data
export const MasCards = [
  {
    icon: <GreenBulb />,
    title: "200",
    description: "Páginas creadas",
  },
  {
    icon: <StartMan />,
    title: "98%",
    description: "Clientes Satisfechas",
  },
  {
    icon: <GreenValue />,
    title: "200",
    description: "Divisas Disponibles",
  },
];

// accordian data
export const Accordian = [
  {
    title:
      " ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    title: "¿Cómo garantizan la seguridad de las operaciones en sus juegos?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    title:
      "¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    title: "¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    title: "¿Qué métodos de pago aceptan?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    title: "¿Puedo probar sus juegos antes de comprometerme?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
];


// footer icon
export const FooterLinks = [
  {
    title: "Menú principal",
    link: [
      {  links: "Hogar", path: "#Hogar" },
      { links: "Misión", path: "#Misión" },
      { links: "Tragamonedas", path: "#Tragamonedas" },
      { links: "Por qué elegirnos", path: "#Porqué" },
      { links: "Ofertas", path: "#Ofertas" },
    ],
  },
  {
    title: "Atención al cliente",
    link: [
      { links: "¿Necesitas ayuda?", path: "/" },
      { links: "política de privacidad", path: "/" },
      { links: "Términos de servicios", path: "/" },
    ],
  },
  {
    title: "Ponerse en contacto",
    link: [
      { links: "juegosexclusivos@gmail.com", path: "mail:juegosexclusivos@gmail.com",  icon: <Mail /> },
    { links: "(101)342-7873", path: "tel:(101)342-7873", icon: <Telephone /> },
    ],
  },
];