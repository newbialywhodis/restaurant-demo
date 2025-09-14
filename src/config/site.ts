export const siteConfig = {
  name: "Ultra kebab",
  description: "Najlepszy kebab w mieście!",
  contact: {
    phone: "123-456-789",
    phoneHref: "tel:123-456-789",
    email: "kontakt@ultrakebab.pl",
    address: "ul. XYZ 1, Warszawa",
  },
  openingHours: [
    { day: "Poniedziałek", hours: "12:00 - 21:00" },
    { day: "Wtorek", hours: "12:00 - 21:00" },
    { day: "Środa", hours: "12:00 - 21:00" },
    { day: "Czwartek", hours: "12:00 - 21:00" },
    { day: "Piątek", hours: "12:00 - 22:00" },
    { day: "Sobota", hours: "12:00 - 22:00" },
    { day: "Niedziela", hours: "12:00 - 21:00" },
  ],
  partners: [
    {
      name: "Glovo",
      logoUrl: "/partners/glovo.webp",
      orderUrl: "https://glovoapp.com/",
      logoHeight: 25,
    },
    {
      name: "Pyszne.pl",
      logoUrl: "/partners/pysznepl.webp",
      orderUrl: "https://www.pyszne.pl/",
      logoHeight: 25,
    },
    {
      name: "Uber Eats",
      logoUrl: "/partners/ubereats.webp",
      orderUrl: "https://www.ubereats.com/",
      logoHeight: 25,
    },
  ],
};
