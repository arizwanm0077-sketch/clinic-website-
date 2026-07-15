import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aurevia.clinic"; // Demo baseline URL
  const routes = [
    "",
    "/about",
    "/book",
    "/clinic",
    "/concerns",
    "/concerns/acne-and-acne-scars",
    "/contact",
    "/doctors",
    "/doctors/dr-ananya-rao",
    "/insights",
    "/insights/understanding-acne-scars",
    "/results",
    "/treatments",
    "/treatments/skin",
    "/treatments/skin/acne-scar-treatment",
    "/treatments/hair",
    "/treatments/laser",
    "/treatments/aesthetics"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/treatments") || route.startsWith("/concerns") ? 0.8 : 0.6,
  }));
}
