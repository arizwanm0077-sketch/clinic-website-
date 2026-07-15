import { HomepageHero } from "@/components/sections/HomepageHero";
import { HomepageSections } from "@/components/sections/HomepageSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurevia Skin & Hair Clinic | Specialist-led care in Bengaluru",
  description: "Explore evidence-led skin, hair, laser, and aesthetic care through personalised consultations in a calm, private clinical setting.",
};

export default function Home() {
  return (
    <>
      <HomepageHero />
      <HomepageSections />
    </>
  );
}
