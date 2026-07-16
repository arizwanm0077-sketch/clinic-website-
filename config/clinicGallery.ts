import type { DemoMetadata } from "@/types/content";

export type AspectRatio = "4:3" | "3:2" | "16:10" | "4:5" | "3:4";
export type FocalPoint = "center" | "left" | "right" | "top" | "bottom";

export interface ClinicGalleryItem extends DemoMetadata {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: AspectRatio;
  focalPoint: FocalPoint;
  mobileFocalPoint: FocalPoint;
  title: string;
  shortDescription: string;
  replacementNotes: string;
}

export const clinicGalleryData: ClinicGalleryItem[] = [
  {
    id: "clinic-reception",
    src: "/images/clinic/clinic-reception.jpg",
    alt: "Demonstration image of a contemporary clinic reception and arrival area with warm neutral finishes and natural wood details.",
    width: 1600,
    height: 1200,
    aspectRatio: "4:3",
    focalPoint: "center",
    mobileFocalPoint: "center",
    title: "A considered arrival",
    shortDescription:
      "A warm, ivory-textured reception designed with natural timber elements and soft ambient daylight to set a calm tone from entry.",
    isDemo: true,
    contentStatus: "demo",
    requiresClientApproval: true,
    replacementNotes:
      "Replace with approved photography of the actual Aurevia reception area. Maintain warm daylight grading and neutral palette.",
  },
  {
    id: "clinic-waiting-lounge",
    src: "/images/clinic/clinic-waiting-lounge.jpg",
    alt: "Demonstration image of a contemporary clinic waiting lounge with soft sage seating and natural daylight from a side window.",
    width: 1800,
    height: 1200,
    aspectRatio: "3:2",
    focalPoint: "center",
    mobileFocalPoint: "center",
    title: "A comfortable wait",
    shortDescription:
      "A quiet lounge with low seating, a sand-toned coffee table, and soft daylight framing a private, unhurried environment.",
    isDemo: true,
    contentStatus: "demo",
    requiresClientApproval: true,
    replacementNotes:
      "Replace with approved photography of the actual Aurevia waiting lounge. Preserve calm framing and avoid visible branding.",
  },
  {
    id: "clinic-consultation-room",
    src: "/images/clinic/clinic-consultation-room.jpg",
    alt: "Demonstration image of a contemporary clinic consultation room with warm neutral finishes and a sand-toned desk.",
    width: 1600,
    height: 1200,
    aspectRatio: "4:3",
    focalPoint: "center",
    mobileFocalPoint: "center",
    title: "Private consultation",
    shortDescription:
      "A sound-insulated diagnostic room where unhurried assessments are conducted under controlled, natural light.",
    isDemo: true,
    contentStatus: "demo",
    requiresClientApproval: true,
    replacementNotes:
      "Replace with approved photography of the actual Aurevia consultation suite. Do not depict identifiable individuals.",
  },
  {
    id: "clinic-treatment-suite",
    src: "/images/clinic/clinic-treatment-suite.jpg",
    alt: "Demonstration image of a contemporary clinic treatment suite with an ivory treatment bed and clinical equipment.",
    width: 1400,
    height: 1750,
    aspectRatio: "4:5",
    focalPoint: "center",
    mobileFocalPoint: "top",
    title: "Prepared treatment spaces",
    shortDescription:
      "A clinical treatment suite maintained under strict procedural standards, with calibrated equipment and a calm ivory palette.",
    isDemo: true,
    contentStatus: "demo",
    requiresClientApproval: true,
    replacementNotes:
      "Replace with approved photography of the actual Aurevia treatment suite. Avoid graphic procedure imagery and visible logos.",
  },
  {
    id: "clinic-technology-detail",
    src: "/images/clinic/clinic-technology-detail.jpg",
    alt: "Demonstration image of modern clinical technology equipment on a deep-green surface with warm daylight.",
    width: 1800,
    height: 1200,
    aspectRatio: "3:2",
    focalPoint: "center",
    mobileFocalPoint: "center",
    title: "Modern clinical technology",
    shortDescription:
      "Precision energy-based platforms and calibrated instruments, arranged with sterile discipline on a clinical surface.",
    isDemo: true,
    contentStatus: "demo",
    requiresClientApproval: true,
    replacementNotes:
      "Replace with approved close-up photography of actual Aurevia equipment. Do not show patient records or identifiable labels.",
  },
  {
    id: "clinic-interior-detail",
    src: "/images/clinic/clinic-interior-detail.jpg",
    alt: "Demonstration image of an interior architectural detail with vertical wood slats and a sage arched niche.",
    width: 1400,
    height: 1750,
    aspectRatio: "4:5",
    focalPoint: "center",
    mobileFocalPoint: "top",
    title: "Thoughtful interior details",
    shortDescription:
      "An architectural moment pairing natural wood slats with a sage arched niche, reflecting the clinic's quiet material language.",
    isDemo: true,
    contentStatus: "demo",
    requiresClientApproval: true,
    replacementNotes:
      "Replace with approved architectural detail photography of the actual Aurevia interior. Maintain consistent warmth and contrast.",
  },
];
