export const restaurantInfo = {
  name: "Grano e Gusto Pizzeria Ristorante",

  //   url: "https://www.granoegusto.it",

  logo: "https://www.granoegusto.it/logo_scontornato.png",

  //   image: "https://www.granoegusto.it/og-image.jpg",

  telephone: "+39 0114918422",

  email: "info@granoegusto.it",

  address: {
    streetAddress: "Via Torino, 27",
    postalCode: "10050",
    addressLocality: "Sant'Antonino di Susa",
    addressRegion: "TO",
    addressCountry: "IT",
  },

  geo: {
    latitude: 45.1070752,
    longitude: 7.2682837,
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "19:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday", "Sunday"],
      opens: "19:00",
      closes: "23:59",
    },
  ],
};
