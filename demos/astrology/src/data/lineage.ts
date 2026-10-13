export interface LineageProfile {
  name: string;
  role: string;
  relationshipNote: string;
  image: string;
  imageCaption: string;
  background: string;
  focusAreas: string[];
  quote: string;
  confirmationStatus: "Pending Client Confirmation" | "Verified";
}

export const traditionOverview = {
  headlineClaim: "Approximately 500+ Years Family Astrology Tradition",
  claimNote: "Notice: This historical claim was shared during initial client discussions and is marked as provisional demonstration content awaiting final factual confirmation before publication.",
  traditionalRoot: "Generations of Dedicated Offline Practice",
  traditionalContext: "The family's astrology work has historically been primarily offline, centered on longstanding relationships with local yajmans, community seekers, and disciples within a classical guru-shishya parampara.",
  transitionVision: "Shubham Dixit is preparing to extend this generational foundation into a thoughtful, accessible digital consultation presence for seekers across India and the diaspora.",
  profiles: [
    {
      name: "Pt. Ganesh Shankar Acharya Ji",
      role: "Senior Family Astrologer & Traditional Scholar (Revered as Dada Guru)",
      relationshipNote: "Exact relationship and formal public title to be confirmed by Shubham Dixit",
      image: "/images/dada-guru.jpg",
      imageCaption: "Client-supplied / Provisional archival portrait placeholder for Pt. Ganesh Shankar Acharya Ji",
      background: "Represents the senior scholarly anchor of the family's astrological tradition. Deeply grounded in classical Sanskrit texts, traditional Siddhanta, and offline guidance for loyal community families over decades.",
      focusAreas: [
        "Classical Parashari Jyotish principles",
        "Traditional yajman and family astrological counseling",
        "Satvik, non-fear-based remedial recommendations",
        "Custody of generational practice methods"
      ],
      quote: "Jyotish is an instrument of discernment and dharmic reflection, offering light when life presents difficult crossroads.",
      confirmationStatus: "Pending Client Confirmation"
    },
    {
      name: "Shubham Dixit",
      role: "Vedic Astrologer Carrying Forward the Family Tradition",
      relationshipNote: "Primary client and modern practitioner for online & remote consultations",
      image: "/images/shubham-dixit.jpg",
      imageCaption: "Provisional portrait placeholder — To be replaced with Shubham Dixit's official studio photograph",
      background: "Born into the family's astrological practice, Shubham Dixit brings traditional chart analysis to contemporary seekers. His goal is to provide patient, rational, and practical consultations that assist people with real-world questions in career, marriage, and family life.",
      focusAreas: [
        "Translating traditional chart principles for modern decision-making",
        "Patient, one-on-one conversational consultations",
        "Practical guidance for young professionals and families",
        "Reaching seekers across India, the USA, UAE, and global diaspora"
      ],
      quote: "Our role is not to dictate an unalterable destiny, but to illuminate the cosmic patterns so you can make informed, grounded decisions.",
      confirmationStatus: "Pending Client Confirmation"
    }
  ] as LineageProfile[]
};
