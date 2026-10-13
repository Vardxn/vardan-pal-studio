export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 
    | "दैनिक पंचांग (Daily Panchang)"
    | "दैनिक राशिफल (Daily Horoscope)"
    | "कुंडली योग व उपाय (Vedic Yogas)"
    | "आध्यात्मिक विचार (Spiritual Reflections)"
    | "Beginner Vedic Astrology" 
    | "Consultation Guidance" 
    | "Career & Life Timing" 
    | "Marriage & Compatibility";
  publishedDate: string;
  readTime: string;
  excerpt: string;
  contentHtml: string;
  author: string;
  tags: string[];
  isDemoSample?: boolean;
  isCustomPublished?: boolean;
  targetRegion?: string;
}

export const initialBlogsData: BlogPost[] = [
  {
    id: "aaj-ka-panchang-aur-shubh-muhurat",
    slug: "aaj-ka-panchang-aur-shubh-muhurat",
    title: "आज का दैनिक पंचांग, शुभ चौघड़िया व राहुकाल विचार",
    category: "दैनिक पंचांग (Daily Panchang)",
    publishedDate: "12 अक्टूबर 2026 (दैनिक पंचांग)",
    readTime: "3 min read",
    author: "Shubham Dixit (Jyotish Acharya)",
    tags: ["दैनिक पंचांग", "शुभ मुहूर्त", "राहुकाल", "अमृत चौघड़िया", "तिथी विचार"],
    isDemoSample: true,
    targetRegion: "Pan-India & Global Diaspora",
    excerpt: "आज की तिथि, नक्षत्र, करण, योग, अभिजीत मुहूर्त एवं राहुकाल का प्रामाणिक वैदिक विश्लेषण। शुभ कार्यों की शुरुआत के लिए अनुकूल समय।",
    contentHtml: `
      <p style="font-size: 1.15rem; color: var(--gold-antique); font-style: italic; border-left: 3px solid var(--orange-burnished); padding-left: 1rem; margin-bottom: 1.5rem;">
        ॥ ॐ सूर्याय नमः ॥ शुभस्य शीघ्रम — तिथि, वार, नक्षत्र, योग और करण इन पांचों अंगों का यथार्थ ज्ञान ही पंचांग है।
      </p>

      <h3>दैनिक पंचांग विवरण (Daily Vedic Coordinates)</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.95rem;">
        <tbody>
          <tr style="border-bottom: 1px solid rgba(215, 181, 109, 0.15);">
            <td style="padding: 0.65rem 0; color: var(--gold-antique); font-weight: 600; width: 35%;">वार (Day):</td>
            <td style="padding: 0.65rem 0; color: #FFFFFF;">सोमवार (Monday — चन्द्र देव की आराधना हेतु शुभ)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(215, 181, 109, 0.15);">
            <td style="padding: 0.65rem 0; color: var(--gold-antique); font-weight: 600;">पक्ष व तिथि (Paksha & Tithi):</td>
            <td style="padding: 0.65rem 0; color: #FFFFFF;">शुक्ल पक्ष, द्वितीया तिथि (संध्या काल तक)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(215, 181, 109, 0.15);">
            <td style="padding: 0.65rem 0; color: var(--gold-antique); font-weight: 600;">नक्षत्र (Nakshatra):</td>
            <td style="padding: 0.65rem 0; color: #FFFFFF;">स्वाति नक्षत्र (देव गुरु व राहु का सामंजस्य, व्यापार एवं विद्या हेतु शुभ)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(215, 181, 109, 0.15);">
            <td style="padding: 0.65rem 0; color: var(--gold-antique); font-weight: 600;">अभिजीत मुहूर्त (Abhijit Muhurat):</td>
            <td style="padding: 0.65rem 0; color: #4ADE80; font-weight: 600;">दोपहर 11:44 से 12:32 बजे तक (सर्वकार्य सिद्धि मुहूर्त)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(215, 181, 109, 0.15);">
            <td style="padding: 0.65rem 0; color: var(--gold-antique); font-weight: 600;">राहुकाल (Rahu Kaal — त्याज्य समय):</td>
            <td style="padding: 0.65rem 0; color: #F87171; font-weight: 600;">प्रातः 07:48 से 09:14 बजे तक (नया अनुबंध या निवेश टालें)</td>
          </tr>
        </tbody>
      </table>

      <h3>आज का विशेष ज्योतिषीय परामर्श</h3>
      <p>आज स्वाति नक्षत्र के प्रभाव से बुद्धि, नवाचार और कानूनी मामलों में प्रगति की संभावना प्रबल है। जिन जातकों की कुंडली में चन्द्रमा या तुला राशि का प्रभाव है, उन्हें मानसिक शांति के लिए भगवान शिव को जल अर्पित करना चाहिए। किसी भी महत्वपूर्ण दस्तावेज पर हस्ताक्षर करने से पूर्व अभिजीत मुहूर्त का चयन सर्वोत्तम रहेगा।</p>
    `
  },
  {
    id: "dada-guru-500-varshiya-parampara-sutra",
    slug: "dada-guru-500-varshiya-parampara-sutra",
    title: "500 वर्षीय कुल परंपरा के वैदिक सूत्र: गृह शांति एवं आत्मबल",
    category: "आध्यात्मिक विचार (Spiritual Reflections)",
    publishedDate: "11 अक्टूबर 2026 (पारंपरिक उपदेश)",
    readTime: "4 min read",
    author: "Pt. Ganesh Shankar Acharya Ji (Dada Guru)",
    tags: ["दादा गुरु", "500 वर्ष परंपरा", "गृह शांति", "वैदिक संस्कार", "पारंपरिक सूत्र"],
    isDemoSample: true,
    targetRegion: "All Yajmans & Global Shishyas",
    excerpt: "हमारे पूर्वजों द्वारा संरक्षित प्राचीन हस्तलिखित संहिताओं से प्राप्त गृह शांति, वास्तु स्पंदन और आत्मिक संतुलन के अनुभूत वैदिक नियम।",
    contentHtml: `
      <p style="font-size: 1.15rem; color: var(--gold-antique); font-style: italic; border-left: 3px solid var(--orange-burnished); padding-left: 1rem; margin-bottom: 1.5rem;">
        ॥ यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः ॥ कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
      </p>

      <h3>परंपरागत अनुभव के तीन स्वर्णिम नियम</h3>
      <p>हमारे परिवार की पांच शताब्दियों की ज्योतिषीय सेवा का मूल सार यही रहा है कि ज्योतिष कोई डराने वाला विषय नहीं है, अपितु जीवन के अंधकार में एक पावन दीपक है। जब यजमान हमारे पास अपनी व्याकुलता लेकर आते हैं, तो हम उन्हें केवल ग्रह दोष नहीं बताते, बल्कि उनके निवारण का सात्विक मार्ग दिखाते हैं:</p>

      <ul>
        <li><strong>प्रातः काल की सूर्य किरणें और जल अर्पण:</strong> तांबे के पात्र से पूर्व दिशा की ओर गायत्री मंत्र सहित अर्घ्य देने से आत्मबल, तेज और पिता-पुत्र संबंधों में कभी कटुता नहीं आती।</li>
        <li><strong>संध्या वेला का कपूर दीप:</strong> घर के ईशान कोण में सात्विक भीमसेनी कपूर का धुआं वातावरण की नकारात्मक ऊर्जा को शून्य कर देता है।</li>
        <li><strong>अन्न दान और मूक प्राणियों की सेवा:</strong> कुंडली में शनि, राहु या केतु का कितना भी भारी गोचर क्यों न हो, काले श्वान या गाय को प्रतिदिन प्रथम ग्रास देने से कष्टों की तीव्रता स्वतः क्षीण हो जाती है।</li>
      </ul>

      <p>शुभम दीक्षित अब इसी परंपरागत ज्ञान को देश-विदेश के जिज्ञासुओं तक आधुनिक माध्यमों से पहुंचा रहे हैं। हमारा आशीर्वाद सदैव सत्य और सनातन के मार्ग पर चलने वालों के साथ है।</p>
    `
  },
  {
    id: "daily-horoscope-planetary-transits",
    slug: "daily-horoscope-planetary-transits-guidance",
    title: "मेष से मीन: आज का द्वादश राशि फल एवं सावधानी संदेश",
    category: "दैनिक राशिफल (Daily Horoscope)",
    publishedDate: "10 अक्टूबर 2026 (राशिफल)",
    readTime: "5 min read",
    author: "Shubham Dixit (Jyotish Acharya)",
    tags: ["दैनिक राशिफल", "ग्रह गोचर", "मेष से मीन", "दैनिक उपाय"],
    isDemoSample: true,
    targetRegion: "Pan-India & Global Diaspora",
    excerpt: "आज चन्द्रमा के तुला राशि में संचरण से सभी 12 राशियों के जातकों के लिए आर्थिक, व्यावसायिक एवं पारिवारिक स्थिति का समग्र अवलोकन।",
    contentHtml: `
      <p>आज चन्द्रमा का तुला राशि में गोचर तुला, कुंभ और मिथुन राशि के जातकों के लिए विशेष रूप से आर्थिक लाभ और सुखद संवाद के योग बना रहा है।</p>

      <h3>संक्षिप्त राशि विचार (Zodiac Highlights)</h3>
      <ul>
        <li><strong>मेष (Aries):</strong> जीवनसाथी के साथ सामंजस्य बढ़ेगा। कार्यक्षेत्र में पदोन्नति के संकेत। शुभ रंग: सिंदूरी।</li>
        <li><strong>वृषभ (Taurus):</strong> गुप्त शत्रुओं से सतर्क रहें। स्वास्थ्य पर विशेष ध्यान दें। शुभ रंग: श्वेत।</li>
        <li><strong>मिथुन (Gemini):</strong> विद्यार्थियों व शोधार्थियों के लिए उत्कृष्ट दिन। अचानक धन लाभ संभव। शुभ रंग: हरा।</li>
        <li><strong>कर्क (Cancer):</strong> माता का स्नेह प्राप्त होगा। भूमि-भवन के मामलों में विचार-विमर्श करें। शुभ रंग: मोती श्वेत।</li>
        <li><strong>सिंह (Leo):</strong> पराक्रम में वृद्धि होगी। छोटे भाई-बहनों का सहयोग मिलेगा। शुभ रंग: स्वर्णिम पीला।</li>
        <li><strong>कन्या (Virgo):</strong> वाणी पर संयम रखें। कुटुंब में उत्सव का माहौल रहेगा। शुभ रंग: गहरा हरा।</li>
        <li><strong>तुला (Libra):</strong> आपके आत्मविश्वास में वृद्धि होगी। अटके हुए कार्य पूर्ण होंगे। शुभ रंग: गुलाबी।</li>
        <li><strong>वृश्चिक (Scorpio):</strong> व्यर्थ के खर्चों से बचें। विदेश संपर्कों से लाभ की संभावना। शुभ रंग: लाल।</li>
        <li><strong>धनु (Sagittarius):</strong> आय के नए स्रोत बनेंगे। मित्रों का पूरा साथ मिलेगा। शुभ रंग: पीला।</li>
        <li><strong>मकर (Capricorn):</strong> पिता व वरिष्ठ अधिकारियों से प्रशंसा प्राप्त होगी। शुभ रंग: नीला।</li>
        <li><strong>कुंभ (Aquarius):</strong> भाग्य का साथ मिलेगा। धार्मिक यात्रा की योजना बन सकती है। शुभ रंग: आसमानी।</li>
        <li><strong>मीन (Pisces):</strong> वाहन चलाते समय सावधानी बरतें। ॐ नमः शिवाय का जप फलदायी रहेगा। शुभ रंग: केसरिया।</li>
      </ul>
    `
  },
  {
    id: "understanding-kundli-matching",
    slug: "understanding-kundli-matching-beginners-guide",
    title: "Understanding Kundli Matching: A Beginner's Guide",
    category: "Beginner Vedic Astrology",
    publishedDate: "Provisional Demo Post",
    readTime: "5 min read",
    author: "Shubham Dixit (Jyotish Acharya)",
    tags: ["Kundli Matching", "Ashtakoota", "Guna Milan", "Marriage Basics"],
    isDemoSample: true,
    targetRegion: "Pan-India, USA, UAE, Canada",
    excerpt: "Why the traditional 36 Guna score is only the starting point of astrological compatibility, and what truly matters when two charts meet.",
    contentHtml: `
      <p>In traditional Indian matchmaking, few terms are as widely recognized—and as frequently misunderstood—as <strong>Kundli Milan</strong> or <strong>Guna Milan</strong>. Prospective couples and anxious parents often stare at an algorithmically generated score out of 36, assuming a high number guarantees harmony and a low number spells disaster. In authentic Vedic practice, reality is far more nuanced.</p>

      <h3>What is Ashtakoota Guna Milan?</h3>
      <p>The classical 36-point system, known as the <em>Ashtakoota</em>, evaluates eight specific factors based on the Moon's placement at the time of birth:</p>
      <ul>
        <li><strong>Varna (1 point):</strong> Work and ego compatibility.</li>
        <li><strong>Vashya (2 points):</strong> Mutual attraction and natural harmony.</li>
        <li><strong>Tara (3 points):</strong> Destiny, well-being, and longevity.</li>
        <li><strong>Yoni (4 points):</strong> Physical synergy and temperament.</li>
        <li><strong>Graha Maitri (5 points):</strong> Psychological friendship and intellectual wavelength.</li>
        <li><strong>Gana (6 points):</strong> Behavioral disposition (Deva, Manushya, or Rakshasa).</li>
        <li><strong>Bhakoot (7 points):</strong> Emotional bonding, prosperity, and family welfare.</li>
        <li><strong>Nadi (8 points):</strong> Genetic compatibility, vitality, and progeny.</li>
      </ul>

      <h3>Why the Guna Score is Only Part of the Picture</h3>
      <p>A score of 28 out of 36 may look stellar on an automated printout, but if the 7th house (the house of marriage) in either individual's chart is afflicted without protective planetary aspects, marital friction can still arise. Conversely, couples with a modest score of 19 or 20 often lead deeply fulfilling lives if their ascendant lords are friendly and both partners possess balanced temperaments.</p>

      <h3>The Mature Approach to Matchmaking</h3>
      <p>Astrology is meant to provide compassionate insight, not arbitrary vetoes. When reviewing two horoscopes, a thoughtful astrologer looks for shared values, emotional resilience, mutual patience, and practical ways both individuals can support each other through testing planetary phases.</p>
    `
  },
  {
    id: "questions-to-prepare-before-consultation",
    slug: "questions-to-prepare-before-astrology-consultation",
    title: "Questions to Prepare Before an Astrology Consultation",
    category: "Consultation Guidance",
    publishedDate: "Provisional Demo Post",
    readTime: "4 min read",
    author: "Shubham Dixit (Jyotish Acharya)",
    tags: ["Consultation Preparation", "Client Advice", "Vedic Guidance"],
    isDemoSample: true,
    targetRegion: "Pan-India, USA, UAE, Canada",
    excerpt: "How to organize your thoughts and birth information to gain the deepest, most constructive clarity from your one-on-one session.",
    contentHtml: `
      <p>An astrological consultation is most valuable when approached as an active dialogue rather than a passive listening exercise. Before entering your session with an astrologer, a small amount of reflection can dramatically increase the practical benefit you receive.</p>

      <h3>1. Verify Your Birth Details</h3>
      <p>The foundation of any Vedic chart is precision. An error of even 15 to 20 minutes in your recorded time of birth can alter your Ascendant (Lagna) or the divisional charts (Vargas) that govern specific domains like career and marriage. If your time is approximate, mention this openly to the astrologer beforehand so they can apply rectification checks.</p>

      <h3>2. Focus on Life Themes, Not Just Binary 'Yes/No' Predictions</h3>
      <p>While it is natural to ask, <em>"Will I get this job?"</em>, a more powerful question is: <em>"What does my chart indicate about my natural strengths during this upcoming Dasha period, and what pitfalls should I remain mindful of in professional partnerships?"</em> Broadening the question invites strategic, actionable counsel.</p>

      <h3>3. Prioritize Your Top Two or Three Concerns</h3>
      <p>A single 45-minute consultation cannot dissect every planetary influence over an eighty-year lifetime. Bring your two or three most pressing priorities—such as a career pivot, family health, or relationship timing—so the astrologer can dedicate adequate depth to your immediate questions.</p>

      <h3>4. Keep a Note for Follow-Up Reflection</h3>
      <p>Good astrological counsel often reveals its full value over several months as planetary transits unfold. Having a notebook or recording helps you revisit the discussion when making key life choices later.</p>
    `
  },
  {
    id: "introduction-to-career-astrology",
    slug: "introduction-to-career-astrology-timing",
    title: "An Introduction to Career Astrology: Planetary Timing & Vocational Paths",
    category: "Career & Life Timing",
    publishedDate: "Provisional Demo Post",
    readTime: "6 min read",
    author: "Shubham Dixit (Jyotish Acharya)",
    tags: ["Career Astrology", "10th House", "Mahadasha", "Professional Timing"],
    isDemoSample: true,
    targetRegion: "Delhi-NCR, Mumbai, USA & Canada",
    excerpt: "How the 10th house, planetary strengths, and dasha periods offer perspective on career satisfaction, pivots, and entrepreneurial timing.",
    contentHtml: `
      <p>In modern life, work is not merely a means of livelihood; it is deeply intertwined with personal identity, purpose, and self-worth. When careers experience sudden stagnation, intense organizational turbulence, or unexpected breakthroughs, Vedic astrology examines specific planetary indicators to understand the underlying currents.</p>

      <h3>The Anchor: The 10th House (Karma Bhava)</h3>
      <p>In a natal chart (Kundli), the 10th house reflects your professional activities, public reputation, leadership qualities, and relationship with authority. The zodiac sign placed on the 10th cusp, the planets seated within it, and the placement of the 10th lord reveal your natural vocational inclinations.</p>
      <ul>
        <li><strong>Sun (Surya) influence:</strong> Public administration, executive authority, government liaison, independent leadership.</li>
        <li><strong>Mercury (Budha) influence:</strong> Analytics, finance, media, technology, communication, and commercial enterprise.</li>
        <li><strong>Saturn (Shani) influence:</strong> Real estate, heavy industry, legal frameworks, public administration, systems requiring long-term discipline.</li>
        <li><strong>Mars (Mangal) influence:</strong> Engineering, defense, technical problem-solving, competitive ventures.</li>
      </ul>

      <h3>The Role of Vimshottari Dasha in Career Cycles</h3>
      <p>No career is static. Even the most capable professional can experience temporary friction during unsupportive sub-periods, while lesser-prepared individuals can rise swiftly during fortunate alignments. Understanding whether your current astrological climate calls for patient consolidation or bold expansion can save immense emotional energy.</p>

      <h3>Astrology Does Not Replace Diligence</h3>
      <p>Planetary alignments indicate favorable wind directions; you still need to set your sails and steer the vessel. Astrology is a navigational compass, meant to guide your preparation, not excuse inaction.</p>
    `
  },
  {
    id: "approaching-marriage-compatibility-readings",
    slug: "how-to-approach-marriage-compatibility-readings",
    title: "How to Approach Marriage Compatibility Readings With Maturity",
    category: "Marriage & Compatibility",
    publishedDate: "Provisional Demo Post",
    readTime: "5 min read",
    author: "Shubham Dixit (Jyotish Acharya)",
    tags: ["Marriage Compatibility", "Manglik Dosha", "Relationship Wisdom"],
    isDemoSample: true,
    targetRegion: "Pan-India, USA, UAE, Canada",
    excerpt: "Moving beyond fear-driven dogmas toward a balanced, compassionate evaluation of two individuals embarking on a shared journey.",
    contentHtml: `
      <p>Marriage is among the most solemn commitments two human beings can make. When families approach astrology for marriage compatibility, anxiety often runs high. Unverified proclamations of <em>Manglik Dosha</em>, <em>Nadi Dosha</em>, or <em>Bhakoot Dosha</em> can create distress between two individuals who are otherwise deeply suited to one another.</p>

      <h3>De-Mystifying Manglik Dosha</h3>
      <p>One of the most common anxieties in Indian matrimonial discussions is Mars' placement in the 1st, 2nd, 4th, 7th, 8th, or 12th houses from the Ascendant or Moon. Classical treatises contain dozens of specific cancellation criteria (Parihara)—including Mars being in its own sign, aspected by Jupiter, or offset by the partner's chart—that automated software routinely ignores. Over 70% of proclaimed 'Manglik' charts possess legitimate Shastric cancellations upon careful manual analysis.</p>

      <h3>The Value of Mutual Temperament Analysis</h3>
      <p>True compatibility requires examining whether both horoscopes support emotional patience, financial responsibility, and spiritual alignment. A mature consultation addresses questions such as:</p>
      <ul>
        <li>How does each partner process stress and anger?</li>
        <li>Are both partners entering life phases that support commitment and family harmony?</li>
        <li>What communication practices can strengthen their bond during challenging planetary transits?</li>
      </ul>

      <p>When conducted with empathy and deep textual knowledge, a compatibility reading offers peace of mind and realistic perspective for both families.</p>
    `
  }
];

// LocalStorage key for persisting test blog posts during client demo session
const DEMO_BLOGS_STORAGE_KEY = 'shubham_dixit_demo_blogs';

export const getStoredBlogs = (): BlogPost[] => {
  if (typeof window === 'undefined') return initialBlogsData;
  try {
    const raw = localStorage.getItem(DEMO_BLOGS_STORAGE_KEY);
    if (!raw) return initialBlogsData;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return [...parsed, ...initialBlogsData];
    }
  } catch (e) {
    console.error('Failed to parse demo blogs from storage', e);
  }
  return initialBlogsData;
};

export const saveDemoBlogPost = (post: BlogPost): BlogPost[] => {
  if (typeof window === 'undefined') return initialBlogsData;
  try {
    const raw = localStorage.getItem(DEMO_BLOGS_STORAGE_KEY);
    const existing: BlogPost[] = raw ? JSON.parse(raw) : [];
    const updated = [post, ...existing.filter(p => p.id !== post.id)];
    localStorage.setItem(DEMO_BLOGS_STORAGE_KEY, JSON.stringify(updated));
    return [...updated, ...initialBlogsData];
  } catch (e) {
    console.error('Failed to save demo blog', e);
    return initialBlogsData;
  }
};

export const resetDemoBlogPosts = (): BlogPost[] => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(DEMO_BLOGS_STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  }
  return initialBlogsData;
};

// Export active data for initial render
export const blogsData = initialBlogsData;
