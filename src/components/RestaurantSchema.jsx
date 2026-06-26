import { restaurantInfo } from "../data/restaurantInfo";

function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",

    name: restaurantInfo.name,
    url: restaurantInfo.url,
    logo: restaurantInfo.logo,
    image: restaurantInfo.image,

    telephone: restaurantInfo.telephone,
    email: restaurantInfo.email,

    address: {
      "@type": "PostalAddress",
      ...restaurantInfo.address,
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurantInfo.geo.latitude,
      longitude: restaurantInfo.geo.longitude,
    },

    openingHoursSpecification: restaurantInfo.openingHoursSpecification,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default RestaurantSchema;
