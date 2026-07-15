export const navigationConfig = {
  trustStrip: {
    text: "Specialist-led consultations in a calm, private clinical setting.",
    mobileText: "Consultations by appointment · Bengaluru",
    actions: [
      { label: "Call clinic", href: "tel:+918000000000" },
      { label: "WhatsApp", href: "https://wa.me/919000000000" }
    ]
  },
  mainNav: [
    { label: "Treatments", href: "/treatments", hasMegaMenu: true },
    { label: "Concerns", href: "/concerns" },
    { label: "Doctors", href: "/doctors" },
    { label: "Clinic", href: "/clinic" },
    { label: "Results", href: "/results" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  megaMenu: {
    treatments: [
      { label: "Skin", href: "/treatments/skin", description: "Advanced dermatology & resurfacing" },
      { label: "Hair", href: "/treatments/hair", description: "Restoration & scalp health" },
      { label: "Laser", href: "/treatments/laser", description: "Precision clinical lasers" },
      { label: "Aesthetics", href: "/treatments/aesthetics", description: "Refined, natural enhancement" },
      { label: "View all treatments", href: "/treatments", description: "Explore our complete range" }
    ]
  },
  footer: {
    groups: [
      {
        title: "Treatments",
        links: [
          { label: "Skin", href: "/treatments/skin" },
          { label: "Hair", href: "/treatments/hair" },
          { label: "Laser", href: "/treatments/laser" },
          { label: "Aesthetics", href: "/treatments/aesthetics" }
        ]
      },
      {
        title: "Clinic",
        links: [
          { label: "About", href: "/about" },
          { label: "Doctors", href: "/doctors" },
          { label: "Results", href: "/results" },
          { label: "Insights", href: "/insights" },
          { label: "Contact", href: "/contact" }
        ]
      }
    ],
    legal: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" }
    ]
  },
  mobileActions: [
    { label: "Call", href: "tel:+918000000000", icon: "phone" },
    { label: "WhatsApp", href: "https://wa.me/919000000000", icon: "message" },
    { label: "Book", href: "/book", icon: "calendar" }
  ]
};
