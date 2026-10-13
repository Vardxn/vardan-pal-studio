export interface ServiceItem {
  id: string;
  title: string;
  sanskritTerm?: string;
  category: "Chart Analysis" | "Relationships" | "Career & Life" | "Vastu & Space" | "Specific Queries";
  summary: string;
  scope: string[];
  suitableFor: string;
  format: string;
  priceNote: string;
  isProvisional: boolean;
  whatsappMessage: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "kundli-reading",
    title: "Comprehensive Kundli (Birth Chart) Reading",
    sanskritTerm: "सम्पूर्ण जन्म पत्रिका विचार",
    category: "Chart Analysis",
    summary: "A systematic review of your birth chart coordinates, planetary placements (Graha Sthiti), and active Mahadasha cycles to provide clear perspective on life themes.",
    scope: [
      "Ascendant (Lagna) and core temperament analysis",
      "Examination of key houses: Dharma (purpose), Artha (wealth), Kama (desires), Moksha (spiritual path)",
      "Vimshottari Dasha timeline review for upcoming life phases",
      "Discussion of natural planetary strengths and traditional Satvik remedies"
    ],
    suitableFor: "Seekers wanting a foundational overview of their life direction, planetary periods, and personal clarity.",
    format: "Proposed 45–60 min Session (Mode to be confirmed: Audio/Video Call)",
    priceNote: "Consultation Fee: Awaiting Client Confirmation (Provisional Example)",
    isProvisional: true,
    whatsappMessage: "Hi Vardan, mujhe aapki website bohot achhi lagi, especially Kundli Reading section. Kya hum is website ke baare mein aur baat kar sakte hain aur aage proceed kar sakte hain?"
  },
  {
    id: "kundli-matching",
    title: "Kundli Matching & Marriage Compatibility",
    sanskritTerm: "विवाह मेलापक एवं गुण मिलान",
    category: "Relationships",
    summary: "Balanced marital compatibility analysis integrating traditional Ashtakoota Guna Milan with deeper planetary harmony, mutual respect, and emotional alignment.",
    scope: [
      "Detailed 36 Guna evaluation alongside 7th house (Kalatra Bhava) analysis",
      "Manglik consideration review and classical cancellation factors",
      "Temperament, health, family alignment, and longevity considerations",
      "Practical conversational perspective without fear-inducing fatalism"
    ],
    suitableFor: "Prospective couples, families planning arranged alliances, and partners seeking astrological perspective.",
    format: "Proposed 45–60 min Joint or Family Session (To be confirmed)",
    priceNote: "Consultation Fee: Awaiting Client Confirmation (Provisional Example)",
    isProvisional: true,
    whatsappMessage: "Hi Vardan, mujhe aapki website bohot achhi lagi, especially Kundli Matching section. Kya hum is website ke baare mein aur baat kar sakte hain aur aage proceed kar sakte hain?"
  },
  {
    id: "career-guidance",
    title: "Career Transitions & Financial Timing",
    sanskritTerm: "कर्म भाव एवं अर्थ योग विचार",
    category: "Career & Life",
    summary: "Astrological examination of professional timing, business vs. employment suitability, job transitions, and financial decision cycles based on the 10th house and dasha timeline.",
    scope: [
      "10th House (Karma) and 11th House (Labha) planetary influences",
      "Timing of career transitions, promotions, or business initiatives",
      "Analysis of supportive vs. testing astrological phases",
      "Realistic strategic timing to complement your practical professional effort"
    ],
    suitableFor: "Working professionals, business owners, and graduates weighing job transitions or venture timing.",
    format: "Proposed 40–50 min Focused Session (To be confirmed)",
    priceNote: "Consultation Fee: Awaiting Client Confirmation (Provisional Example)",
    isProvisional: true,
    whatsappMessage: "Hi Vardan, mujhe aapki website bohot achhi lagi, especially Career Guidance section. Kya hum is website ke baare mein aur baat kar sakte hain aur aage proceed kar sakte hain?"
  },
  {
    id: "vastu-consultation",
    title: "Vastu & Space Energy Alignment",
    sanskritTerm: "वास्तु शास्त्र एवं स्थान संतुलन",
    category: "Vastu & Space",
    summary: "Traditional space harmony guidance for residences and workplaces, focusing on directional energy balance, restful living, and non-destructive adjustments.",
    scope: [
      "Directional elemental balance (Pancha Mahabhuta)",
      "Main entrance, workspace, and core residential zones review",
      "Non-demolition remedial adjustments and simple spatial realignment",
      "Integration with the primary resident's astrological orientation"
    ],
    suitableFor: "Homeowners, prospective property buyers, and commercial spaces seeking spatial harmony.",
    format: "Proposed Blueprint Review or Virtual Walkthrough (To be confirmed)",
    priceNote: "Consultation Fee: Awaiting Client Confirmation (Provisional Example)",
    isProvisional: true,
    whatsappMessage: "Hi Vardan, mujhe aapki website bohot achhi lagi, especially Vastu Consultation section. Kya hum is website ke baare mein aur baat kar sakte hain aur aage proceed kar sakte hain?"
  },
  {
    id: "prashna-kundli",
    title: "Prashna Kundli (Specific Question Consultation)",
    sanskritTerm: "प्रश्न शास्त्र विचार",
    category: "Specific Queries",
    summary: "Horary astrology applied to an urgent, specific decision or dilemma, cast precisely at the moment the seeker's sincere inquiry is posed.",
    scope: [
      "Direct focus on one urgent dilemma (e.g., job offer choice, legal matter, missing item)",
      "Chart erected for the exact moment of inquiry receipt",
      "Clear, focused timeline assessment based on classical Prashna principles",
      "No prerequisite of precise birth time required"
    ],
    suitableFor: "Individuals facing an immediate crossroads or those with uncertain exact birth times.",
    format: "Proposed 25–30 min Focused Query Session (To be confirmed)",
    priceNote: "Consultation Fee: Awaiting Client Confirmation (Provisional Example)",
    isProvisional: true,
    whatsappMessage: "Hi Vardan, mujhe aapki website bohot achhi lagi, especially Prashna Kundli section. Kya hum is website ke baare mein aur baat kar sakte hain aur aage proceed kar sakte hain?"
  }
];
