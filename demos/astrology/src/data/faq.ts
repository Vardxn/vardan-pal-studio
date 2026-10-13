export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Consultation Process" | "Birth Details" | "Remedies & Outcomes" | "Privacy & Ethics";
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What information do I need to prepare before booking a consultation?",
    answer: "You will need your exact date of birth, time of birth (as accurate as possible, ideally from a hospital birth certificate or reliable family records), and city/town of birth. If your birth time is only approximate, please let Shubham Dixit know in advance so suitable verification checks can be incorporated.",
    category: "Birth Details"
  },
  {
    id: "faq-2",
    question: "How are consultations conducted for remote or international clients?",
    answer: "Remote consultations are typically conducted through secure 1-on-1 video calls (Google Meet or Zoom) or direct private telephone calls, depending on your preference. Time slots are coordinated to match your local time zone across India, the USA, UAE, and other regions.",
    category: "Consultation Process"
  },
  {
    id: "faq-3",
    question: "Do you guarantee 100% predictions or immediate life outcomes?",
    answer: "No. Authentic Vedic astrology is an analytical and spiritual science of probabilities, tendencies, and divine timing—not fatalistic magic. We do not guarantee fixed outcomes. Our purpose is to help you understand active planetary influences so you can make informed, thoughtful, and ethical life choices.",
    category: "Remedies & Outcomes"
  },
  {
    id: "faq-4",
    question: "What kind of remedies are suggested if a chart indicates challenging planetary periods?",
    answer: "Our practice adheres strictly to traditional Satvik approaches: devotional chanting (Mantra Japa), acts of charity and service (Daan), conscious lifestyle adjustments, and meditative practices. We do not promote fear-inducing rituals, extortionate gem sales, or superstitious procedures.",
    category: "Remedies & Outcomes"
  },
  {
    id: "faq-5",
    question: "Is my personal birth data and conversation kept confidential?",
    answer: "Yes, completely. Confidentiality is a sacred principle of traditional family astrology practice. Your birth coordinates, family details, and personal concerns are never shared, published, or repurposed for marketing without explicit consent.",
    category: "Privacy & Ethics"
  },
  {
    id: "faq-6",
    question: "Can I consult regarding a family member's or child's chart?",
    answer: "Yes. Consultations are frequently arranged by parents for their children's educational choices, or by families evaluating prospective matrimonial matches. When discussing another adult's chart, discussions are handled with appropriate respect and ethical discretion.",
    category: "Consultation Process"
  }
];
