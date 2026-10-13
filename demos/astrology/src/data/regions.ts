export interface RegionItem {
  slug: string;
  name: string;
  shortName: string;
  category: "Domestic Commercial Hub" | "Domestic Metro" | "National" | "International Diaspora";
  headline: string;
  overview: string;
  localRelevance: string;
  commonQuestions: string[];
  enquiryGuidance: string;
  timingNotice: string;
  confirmationNotice?: string;
}

export const regionsData: RegionItem[] = [
  {
    slug: "ahmedabad-surat",
    name: "Ahmedabad & Surat (Gujarat)",
    shortName: "Ahmedabad–Surat",
    category: "Domestic Commercial Hub",
    headline: "Vedic Astrology Consultations for Families & Businesses in Ahmedabad and Surat",
    overview: "Gujarat's bustling commercial centers have a deep-seated appreciation for authentic Vedic traditions, family values, and calculated risk-taking. Shubham Dixit offers thoughtful astrological guidance tailored for entrepreneurs, merchant families, and prospective matrimonial alliances in Ahmedabad, Surat, and surrounding cities.",
    localRelevance: "Whether you are a textile exporter in Surat weighing an auspicious expansion timeline, an Ahmedabad family planning an arranged marriage, or an industrialist navigating commercial partnerships, our consultations respect both traditional Shastric principles and pragmatic business realities.",
    commonQuestions: [
      "Favorable timing (Muhurta) for commercial agreements and property acquisitions",
      "Traditional Kundli Matching balancing family harmony and mutual respect",
      "Career trajectories for the next generation stepping into family businesses",
      "Vastu alignment suggestions for bungalows, offices, and commercial showrooms"
    ],
    enquiryGuidance: "Consultations for seekers in Ahmedabad and Surat are conducted via direct phone call or scheduled video meetings. Flexible morning and evening slots are arranged to accommodate business hours.",
    timingNotice: "Standard Indian Standard Time (IST) booking windows apply. Advance appointment is recommended."
  },
  {
    slug: "delhi-ncr",
    name: "Delhi National Capital Region (NCR)",
    shortName: "Delhi NCR",
    category: "Domestic Metro",
    headline: "Astrological Clarity for Corporate Leaders & Families Across Delhi, Gurugram & Noida",
    overview: "In the fast-moving corporate, bureaucratic, and entrepreneurial environment of Delhi-NCR, professionals often encounter high-stakes career crossroads, organizational transitions, and relationship pressures. Shubham Dixit provides grounded, non-fatalistic astrological perspectives to help bring calm and objective clarity to modern life questions.",
    localRelevance: "Tailored for software directors in Gurugram, corporate executives in Noida, public sector professionals, and young couples seeking a level-headed astrology consultation without fear-based claims or superstitious commercialization.",
    commonQuestions: [
      "Deciding between multinational corporate promotions vs. entrepreneurial startup ventures",
      "Navigating intense planetary phases such as Saturn (Shani) transits or Sade Sati with resilience",
      "Marriage compatibility discussions that prioritize emotional and psychological harmony",
      "Educational inclinations and career selection for school and university students"
    ],
    enquiryGuidance: "Sessions are arranged via private video call or dedicated phone line. Evening slots and weekend appointment windows are specifically opened for corporate working schedules.",
    timingNotice: "IST appointments available weekdays 6:30 PM – 9:00 PM and weekend daytime slots."
  },
  {
    slug: "mumbai-pune",
    name: "Mumbai & Pune (Maharashtra)",
    shortName: "Mumbai–Pune",
    category: "Domestic Metro",
    headline: "Thoughtful Vedic Consultations for Finance, Creative & Tech Seekers in Mumbai & Pune",
    overview: "Mumbai and Pune represent India's financial capital and thriving technological innovation corridor. Balancing high living costs, demanding schedules, and personal aspirations requires mental peace and directional clarity. Our consultation practice provides confidential, structured chart analysis designed for urban professionals.",
    localRelevance: "Consultations speak directly to banking professionals in BKC, creative and media figures in Mumbai's western suburbs, and engineering leaders across Pune's IT hubs, providing a calm space for reflective life planning.",
    commonQuestions: [
      "Timing high-value property commitments and relocation decisions",
      "Navigating prolonged burnout, office politics, or sudden corporate restructuring",
      "Evaluating prospective matrimonial alliances with realistic, mature discussions",
      "Personal spiritual focus and meditation remedies aligned with your natal moon"
    ],
    enquiryGuidance: "Conducted conveniently over Google Meet, Zoom, or high-definition voice call. All charts and discussion summaries can be shared digitally following the session.",
    timingNotice: "Flexible booking calendar with slots planned around busy commute and work patterns."
  },
  {
    slug: "pan-india",
    name: "All-India Remote Consultations",
    shortName: "Pan-India",
    category: "National",
    headline: "Accessible Remote Vedic Consultations for Seekers Across India",
    overview: "While Shubham Dixit's family lineage originated in traditional regional community circles, modern telecommunications enable seekers from Bengaluru, Hyderabad, Kolkata, Chennai, Jaipur, Lucknow, and all towns across India to access authentic astrological counsel from the comfort of their home.",
    localRelevance: "Distance should not be a barrier to sincere astrological advice. Remote sessions provide the exact same depth, chart examination rigor, and personal attention as traditional in-person meetings.",
    commonQuestions: [
      "In-depth birth chart analysis covering health, career, and family life",
      "Prashna Kundli for immediate, urgent decisions where birth time is unverified",
      "Remedies grounded in satvik practices (Daan, Mantra, behavior correction, not superstition)",
      "Yearly astrological forecasting (Varshaphala) to plan upcoming priorities"
    ],
    enquiryGuidance: "Available in Hindi and English. Simply enquire via our demo form or WhatsApp with your date, time, and city of birth.",
    timingNotice: "Standard IST working hours with slots scheduled throughout the week."
  },
  {
    slug: "usa",
    name: "United States (NRI Consultations)",
    shortName: "USA Diaspora",
    category: "International Diaspora",
    headline: "Vedic Astrology Consultations for the Indian Diaspora Across the United States",
    overview: "Living as an Indian expatriate or second-generation Indian-American in the US introduces unique life decisions—navigating H-1B or Green Card residency timelines, cross-cultural dating and marriage matching, career shifts in Silicon Valley or Wall Street, and retirement planning. Shubham Dixit offers culturally attuned, fluent astrological guidance.",
    localRelevance: "Designed for families in California (San Jose, San Francisco, Los Angeles), New York / New Jersey, Texas (Dallas, Austin, Houston), Washington (Seattle), and Chicago seeking traditional roots with modern communicative ease.",
    commonQuestions: [
      "Residency, visa transition, and relocation timing based on 9th and 12th house dasha periods",
      "Matrimonial Kundli Matching for NRI alliances across continents",
      "Startup equity choices, tech industry cycles, and long-term asset creation",
      "Children's cultural education, birth chart strengths, and academic choices"
    ],
    enquiryGuidance: "Consultations are conducted online via Zoom or WhatsApp Video. Time slots are coordinated specifically for US Eastern (EST), Central (CST), and Pacific (PST) time zones.",
    timingNotice: "Early morning US slots (corresponding to IST evening) and weekend evening US slots available."
  },
  {
    slug: "uae",
    name: "United Arab Emirates & Gulf Region (Dubai, Abu Dhabi, Sharjah)",
    shortName: "UAE & Gulf",
    category: "International Diaspora",
    headline: "Astrological Consultation Services for NRI Families in Dubai & the UAE",
    overview: "The UAE represents a dynamic hub where Indian professionals, entrepreneurs, and families pursue ambitious commercial and career milestones. With only a 1.5-hour time difference from India, scheduling consultations with Shubham Dixit is seamless and responsive.",
    localRelevance: "Trusted astrological guidance for trading business families in Deira, finance executives in DIFC, tech professionals in Dubai Internet City, and residents across Abu Dhabi and Sharjah.",
    commonQuestions: [
      "Auspicious timing for new business ventures and Gulf investment diversification",
      "Long-term residency options (Golden Visa periods) vs. eventual repatriation to India",
      "Marital compatibility and family life harmony in an expatriate setting",
      "Career acceleration and navigating competitive commercial environments"
    ],
    enquiryGuidance: "Available via direct WhatsApp video or phone call. Gulf Standard Time (GST) slots are readily accommodated throughout the working week.",
    timingNotice: "Convenient appointment windows matching UAE business hours and weekends."
  },
  {
    slug: "canada",
    name: "Canada (Toronto, Vancouver, Calgary)",
    shortName: "Canada Diaspora",
    category: "International Diaspora",
    headline: "Vedic Guidance for Indian Families & Students in Canada",
    overview: "Canada is home to a rapidly growing Indian diaspora navigating permanent residency processes, real estate investments, winter lifestyle adaptations, and family integration. Shubham Dixit provides empathetic astrological insights to assist seekers through major life transitions.",
    localRelevance: "Serving Indian communities across the Greater Toronto Area (Mississauga, Brampton), Metro Vancouver (Surrey), Calgary, and Edmonton who value authentic ancestral astrological traditions.",
    commonQuestions: [
      "Permanent residency (PR) and citizenship milestones viewed through natal planetary transits",
      "Navigating career restarts or foreign credential recognition phases",
      "Matrimonial matching between families in Canada and India",
      "Home purchase timing and space harmony considerations in North American layouts"
    ],
    enquiryGuidance: "Consultations are arranged online via Zoom or WhatsApp call, scheduled in coordination with Eastern (EST) and Pacific (PST) Canadian time zones.",
    timingNotice: "Target Region Note: Canada has been included as a demonstration regional template based on initial conversation notes. Final target region confirmation is pending with the client.",
    confirmationNotice: "Please note: Service availability for Canada is subject to client confirmation."
  }
];
