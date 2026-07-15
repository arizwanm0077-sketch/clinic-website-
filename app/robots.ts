import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dev", "/book/success"],
    },
    sitemap: "https://aurevia.clinic/sitemap.xml",
  };
}
