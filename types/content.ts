export interface DemoMetadata {
  isDemo: boolean;
  contentStatus: "demo" | "client-approved" | "placeholder";
  requiresClientApproval: boolean;
}

export interface FictionalDoctor extends DemoMetadata {
  id: string;
  name: string;
  role: string;
  specialty: string;
  philosophy: string;
  interests: string[];
  languages: string[];
  approach: string;
  relatedTreatments: string[];
  portraitUrl?: string;
}

export interface FictionalTreatment extends DemoMetadata {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  benefits: string[];
  duration: string;
  recovery: string;
  imageUrl?: string;
}
