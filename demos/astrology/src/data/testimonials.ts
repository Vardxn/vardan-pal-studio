export interface TestimonialFrameworkItem {
  id: string;
  clientInitialsOrName: string;
  cityRegion: string;
  serviceCategory: string;
  theme: string;
  quotePlaceholder: string;
  isPlaceholderFormat: boolean;
}

export const testimonialsFramework: TestimonialFrameworkItem[] = [
  {
    id: "sample-1",
    clientInitialsOrName: "Sample Client Experience (Corporate Leader)",
    cityRegion: "Delhi NCR",
    serviceCategory: "Career & Financial Timing",
    theme: "Objective, Non-Fatalistic Perspective",
    quotePlaceholder: "[Demonstration Layout: Space reserved for a genuine client experience regarding career guidance, dasha timing, and practical decision-making. No fabricated reviews will be published without client verification.]",
    isPlaceholderFormat: true
  },
  {
    id: "sample-2",
    clientInitialsOrName: "Sample Client Experience (Family Matchmaking)",
    cityRegion: "Ahmedabad, Gujarat",
    serviceCategory: "Kundli Matching & Matrimonial Harmony",
    theme: "Respectful Family Counseling",
    quotePlaceholder: "[Demonstration Layout: Space reserved for a verified family reflection regarding Kundli matching, Manglik dosha clarification, and mature matrimonial counseling.]",
    isPlaceholderFormat: true
  },
  {
    id: "sample-3",
    clientInitialsOrName: "Sample Client Experience (NRI Seeker)",
    cityRegion: "Dubai, UAE",
    serviceCategory: "Comprehensive Kundli Reading",
    theme: "Seamless Time-Zone Scheduling",
    quotePlaceholder: "[Demonstration Layout: Space reserved for an overseas client reflection regarding remote consultation convenience, clear communication, and ongoing guidance.]",
    isPlaceholderFormat: true
  }
];
