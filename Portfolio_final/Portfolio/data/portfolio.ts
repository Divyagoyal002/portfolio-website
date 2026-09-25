// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: "Divya Goyal",
  role: "AI/ML Engineer",
  company: "Onetab Generative",
  location: "Indore, India",
  email: "divyagoyalbg@gmail.com",
  resume:
    "https://drive.google.com/file/d/1uEu5Os0umwNjw9OmSJ1wbCaZdRRVv7mW/view?usp=sharing",
  topmate: "https://topmate.io/divya_goyal10",
  linktree: "https://linktr.ee/goyaldivya",
  github: "https://github.com/Divyagoyal002",
  linkedin: "https://linkedin.com/in/divyagoyalds",
  twitter: "https://x.com/divyagoyalbg",
  instagram: "https://instagram.com/heyits_divyana",
  rotatingRoles: [
    "real-time voice agents",
    "agentic document auditors",
    "prompt-to-app code generators",
    "physics-informed deep learning",
  ],
  intro:
    "I build AI systems that talk, read and reason, and I ship them to production. Right now that means phone agents that hold natural conversations in English, Hindi and Telugu, and multi-agent pipelines that audit documents faster than a human reviewer.",
};

export const stats = [
  { value: 7, suffix: "+", label: "voice agents built" },
  { value: 500, suffix: "+", label: "commits since 2025" },
  { value: 3, suffix: "", label: "languages spoken by my agents" },
  { value: 9.1, suffix: "", label: "CGPA, M.Tech AI & DS", decimals: 1 },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  current?: boolean;
  summary: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "AI/ML Engineer",
    org: "Onetab Generative Pvt. Ltd.",
    period: "2025 — Present",
    current: true,
    summary:
      "I own the real-time voice AI stack and build the agentic back-ends behind Onetab's products.",
    points: [
      "Designed and shipped real-time phone agents for ERP sales, hospital appointments, logistics support, freight lead qualification, travel sales and recruitment screening.",
      "Engineered the audio loop: μ-law telephony streams → OpenAI Realtime → streaming Cartesia TTS, with barge-in, echo cancellation, silence detection and per-turn latency tracking.",
      "Built per-call cost accounting across precall, transcription and extraction, plus call queues, retry scheduling, human handoff and lead dashboards.",
      "Extended oneAudit's document-verification agents with a Qwen OCR pipeline, guideline checks, forgery and signature detection.",
      "Took OneCode, a prompt-to-app code generator, to production with an edit-query router and automatic error fixing.",
      "Mentor the interns in our office: onboarding them onto the voice and agent stacks, reviewing their code and pairing on their first production features.",
    ],
    tags: ["OpenAI Realtime", "FastAPI", "WebSockets", "Cartesia", "Telephony", "Multi-agent", "VLM / OCR", "MongoDB", "Mentoring"],
  },
  {
    role: "AI/ML Intern",
    org: "Linkites InfoTech",
    period: "Feb 2025 — Jul 2025",
    summary:
      "Worked across deep learning and generative AI, from vision models to LLM agents.",
    points: [
      "Built CNN, LSTM and FaceNet models for computer vision and forecasting in PyTorch.",
      "Developed GenAI tools with LLM APIs, RAG pipelines and CrewAI agents.",
      "Created the first version of OneCode, a prompt-driven code generator for React + Node.js apps.",
      "Contributed to oneAudit, an AI assistant for domain-specific audit insights.",
    ],
    tags: ["PyTorch", "CNN", "LSTM", "FaceNet", "RAG", "CrewAI", "React", "Node.js"],
  },
  {
    role: "Data Analyst & Marketing Research Intern",
    org: "Synergy Ventures",
    period: "Sep 2023 — Nov 2023",
    summary: "Turned market data into pricing and marketing decisions.",
    points: [
      "Lifted conversion rates by 15% and revenue by 10% through data-driven marketing and pricing recommendations.",
      "Ran market research in Python, NumPy and Pandas and worked with sales and marketing to put the findings into practice.",
    ],
    tags: ["Python", "Pandas", "Market Research", "Pricing Strategy"],
  },
  {
    role: "M.Tech (Dual Degree), AI & Data Science",
    org: "School of Data Science and Forecasting, DAVV",
    period: "2021 — 2026",
    summary: "Graduated with a 9.1 CGPA. Also served as placement coordinator and symposium coordinator.",
    points: [
      "Symposium coordinator, iBCD 2024: content, data collection, team coordination and logistics.",
      "Organised Techhunterssss, a 36-hour pan-India hackathon, covering logistics, marketing, speakers and sponsor outreach.",
    ],
    tags: ["Deep Learning", "Statistics", "Forecasting", "Leadership"],
  },
];

export type Category = "Voice AI" | "Agents & GenAI" | "Research" | "ML & Data";

export type Project = {
  title: string;
  tagline: string;
  description: string;
  category: Category;
  year: string;
  context: "Work" | "Personal" | "Client";
  highlights: string[];
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  accent: string; // hex used for the card's glow
};

export const projects: Project[] = [
  {
    title: "Realtime Voice Agent Platform",
    tagline: "AI telecallers that handle real phone calls, end to end",
    description:
      "A FastAPI system between the phone network and the models. It streams live call audio to OpenAI Realtime, turns replies into speech with Cartesia while the model is still generating, and calls tools during the conversation. Built for seven businesses in sales, healthcare, logistics, travel and recruitment.",
    category: "Voice AI",
    year: "2026",
    context: "Work",
    featured: true,
    highlights: [
      "Greeting audio is generated before the call connects, so callers hear a voice right away",
      "Barge-in, echo cancellation and silence monitoring over 8 kHz μ-law audio",
      "Tool calls in the middle of a call: doctor lookup, shipment status, ticket raising, CRM checks",
      "Per-call cost tracking and per-turn latency logging in production",
      "English, Hindi and Telugu, tuned for Indian name pronunciation",
    ],
    stack: ["Python", "FastAPI", "OpenAI Realtime", "Cartesia TTS", "Smartflo", "WebSockets"],
    accent: "#7c5cff",
  },
  {
    title: "oneAudit AI",
    tagline: "Multi-agent document verification",
    description:
      "A set of specialised agents that classify documents, extract data, check them against lending guidelines and flag forgery, missing signatures and quality problems. The output is an auditor-ready checklist.",
    category: "Agents & GenAI",
    year: "2026",
    context: "Work",
    featured: true,
    highlights: [
      "Qwen-based OCR pipeline for scanned documents",
      "Guideline-table reasoning with semantic matching",
      "Forgery, signature, QR and image-quality agents",
    ],
    stack: ["Python", "VLMs", "Qwen", "Gemini", "MongoDB", "Webhooks"],
    accent: "#22d3ee",
  },
  {
    title: "OneCode",
    tagline: "Prompt → working React + Node app",
    description:
      "A code generation engine that turns a prompt into a multi-file React + Node.js project, then routes follow-up requests to targeted edits or full regeneration and fixes build errors on its own.",
    category: "Agents & GenAI",
    year: "2025",
    context: "Work",
    featured: true,
    highlights: [
      "Update-query router: edit only what changed",
      "Self-healing fix_errors loop",
      "Live preview and git suggestions",
    ],
    stack: ["Python", "LLMs", "Prompt Engineering", "React", "Node.js"],
    accent: "#f472b6",
  },
  {
    title: "Submesoscale Ocean Dynamics",
    tagline: "Physics-informed CNN super-resolution of ocean currents",
    description:
      "Reconstructs eddies and fronts smaller than 100 km from coarse satellite altimetry and SST. The loss includes geostrophic, Rossby-number and log-spectrum terms. Results are validated against independent drifting buoys and wavenumber spectra.",
    category: "Research",
    year: "2026",
    context: "Personal",
    featured: true,
    highlights: [
      "OSSE training on high-resolution reanalysis, applied to real Copernicus data",
      "Alboran–Balearic region at 1/24° during the SWOT era (2022–2024)",
      "Effective-resolution and 10–50 km band-energy diagnostics",
    ],
    stack: ["PyTorch", "xarray", "Oceanography", "Spectral analysis"],
    github: "https://github.com/Divyagoyal002/submesoscale",
    accent: "#38bdf8",
  },
  {
    title: "PawPath",
    tagline: "Wearable gait sensing for early canine joint disease",
    description:
      "An ESP32 + MPU6050 collar node streams IMU data over BLE. A signal-processing and ML pipeline (Random Forest and CNN-LSTM) flags lameness, spinal injury and arthritis, and a vet-facing dashboard reports the results.",
    category: "Research",
    year: "2026",
    context: "Personal",
    highlights: [
      "Firmware to dashboard in one repo",
      "Classical and deep learning tracks sharing one feature pipeline",
      "Dog-level train/test split to prevent data leakage",
    ],
    stack: ["ESP32", "Signal Processing", "scikit-learn", "PyTorch", "FastAPI"],
    github: "https://github.com/Divyagoyal002/pawPath",
    accent: "#fb923c",
  },
  {
    title: "SoundKraft",
    tagline: "Brain games that track cognitive change over time",
    description:
      "Four 10-minute games record accuracy, hesitation and tap dynamics. Each player is compared with their own baseline, and a caregiver dashboard flags sustained declines. It is a screening aid and does not diagnose.",
    category: "Research",
    year: "2026",
    context: "Personal",
    highlights: [
      "Per-person baselines instead of population norms",
      "Calibrated model trained on simulated players",
      "Tablet-first player app plus a PIN-gated clinician view",
    ],
    stack: ["Python", "FastAPI", "SQLite", "scikit-learn"],
    github: "https://github.com/Divyagoyal002/soundKraft",
    accent: "#a3e635",
  },
  {
    title: "Tactive AI Copilot",
    tagline: "Generative AI for financial advisors",
    description:
      "AI features for a financial-advisory SaaS: generated financial plans with charted PDFs, market commentary with cited disclosures, objection handling, conversation scripts, follow-ups and prospect pitch decks.",
    category: "Agents & GenAI",
    year: "2026",
    context: "Client",
    highlights: [
      "Source citation and signal detection across client context",
      "Compliance-aware disclosures",
      "Pitch-deck generation from the prospect engine",
    ],
    stack: ["TypeScript", "Next.js", "Prisma", "AWS", "LLMs"],
    accent: "#facc15",
  },
  {
    title: "Voice Agent Framework",
    tagline: "Provider-agnostic, multi-tenant voice agents",
    description:
      "A rebuild of what I learned in production as a reusable framework. LLM, STT, TTS and telephony providers are plug-ins, and business workflows are configured rather than coded.",
    category: "Voice AI",
    year: "2026",
    context: "Personal",
    highlights: ["Clean provider interfaces", "Postgres + Alembic, Docker", "Typed, linted, pre-commit"],
    stack: ["Python", "FastAPI", "Docker", "PostgreSQL"],
    accent: "#c084fc",
  },
  {
    title: "Fin Bot",
    tagline: "RAG chatbot over financial PDFs",
    description:
      "Parses PDFs (including scanned ones through OCR), chunks and embeds them into FAISS and answers questions with grounded, context-aware responses.",
    category: "Agents & GenAI",
    year: "2025",
    context: "Personal",
    highlights: ["OCR fallback for scanned PDFs", "Semantic chunking", "Gemini embeddings"],
    stack: ["LangChain", "FAISS", "Gemini", "Python"],
    github: "https://github.com/Divyagoyal002/Fin_Bot",
    accent: "#34d399",
  },
  {
    title: "SQL Chat",
    tagline: "Talk to your database in plain English",
    description:
      "A LangChain SQL agent on Llama 3 (Groq) that queries SQLite or MySQL from natural language, in a Streamlit chat UI with session history.",
    category: "Agents & GenAI",
    year: "2025",
    context: "Personal",
    highlights: ["SQLite and MySQL", "Llama 3 via Groq", "Session memory"],
    stack: ["LangChain", "Llama 3", "Groq", "Streamlit"],
    github: "https://github.com/Divyagoyal002/SQlChat",
    accent: "#60a5fa",
  },
  {
    title: "LinkedIn Content Agent",
    tagline: "Hands-free posting every 3 days",
    description:
      "Scrapes trending topics, drafts posts with GPT-4o, queues them in Google Sheets and publishes them on a schedule through Phantombuster.",
    category: "Agents & GenAI",
    year: "2025",
    context: "Personal",
    highlights: ["Trend scraping", "GPT-4o drafting", "Scheduled auto-posting"],
    stack: ["GPT-4o", "Google Sheets", "Phantombuster", "Python"],
    github: "https://github.com/Divyagoyal002/LinkedIn-Automation",
    accent: "#0ea5e9",
  },
  {
    title: "Face Similarity Detector",
    tagline: "Identity verification with deep face embeddings",
    description:
      "Detects faces with MTCNN, embeds them with InceptionResnetV1 (VGGFace2) and combines several similarity metrics for onboarding and verification.",
    category: "ML & Data",
    year: "2025",
    context: "Personal",
    highlights: ["MTCNN detection", "Hybrid similarity scoring", "Live Streamlit demo"],
    stack: ["PyTorch", "MTCNN", "FaceNet", "Streamlit"],
    github: "https://github.com/Divyagoyal002/FaceRecognition",
    live: "https://localhost8501-nbr4vayxnegzzuyms6wpeb.streamlit.app/",
    accent: "#f87171",
  },
  {
    title: "Entity Extraction from Images",
    tagline: "Product attributes from photos via OCR",
    description:
      "Extracts weight, brand and price from product images with EasyOCR, then cleans and standardises the text to improve prediction accuracy.",
    category: "ML & Data",
    year: "2024",
    context: "Personal",
    highlights: ["EasyOCR", "Unit normalisation", "Text cleaning pipeline"],
    stack: ["Python", "EasyOCR"],
    github: "https://github.com/Divyagoyal002/Entity_extraction_from_Image",
    accent: "#e879f9",
  },
  {
    title: "Twitter Sentiment Analysis",
    tagline: "Real-time brand sentiment monitor",
    description:
      "Classifies tweets with TextBlob and plots sentiment trends so marketing teams can track how a campaign is received.",
    category: "ML & Data",
    year: "2024",
    context: "Personal",
    highlights: ["Tweepy streaming", "TextBlob polarity", "Plotly trends"],
    stack: ["Python", "TextBlob", "Tweepy", "Plotly"],
    github: "https://github.com/Divyagoyal002/Sentimental-Analysis",
    accent: "#fbbf24",
  },
];

export const mentorship = {
  rating: 5,
  ratings: 4,
  bookings: 23,
  roles: [
    {
      title: "Mentoring interns at Onetab",
      body: "I guide the interns in our office from day one: architecture walkthroughs, code reviews and pairing until their work ships to production.",
    },
    {
      title: "1:1 mentorship on Topmate",
      body: "Career guidance in AI/ML, project reviews, and hands-on help with RAG, LLM apps and voice agents, through video calls or priority DMs.",
    },
    {
      title: "Teaching since college",
      body: "GDSC PR & Outreach Lead (tech sessions with 250+ attendees), mathematics tutor at KnowMerit, and programming instructor at WizKlub.",
    },
  ],
  services: [
    { name: "Ask me anything", format: "Priority DM", price: "Free" },
    { name: "1st session", format: "15-min video call", price: "Paid" },
    { name: "Discovery call", format: "20-min video call", price: "Paid" },
    { name: "Follow-up session", format: "30-min video call", price: "Paid" },
    { name: "Major / Minor project kit", format: "Data Science & AI", price: "Paid" },
  ],
  testimonials: [
    {
      quote:
        "Super helpful and well-structured guidance! Clear suggestions for setting up a local RAG pipeline with practical tools like Ollama, FAISS, and MiniLM embeddings. The tips on OCR integration were especially useful.",
      name: "Maneet",
    },
    {
      quote:
        "Your clear plan and guidance have been incredibly helpful, and I truly appreciate the time you took to assist me.",
      name: "Topmate mentee",
    },
    { quote: "Thank you much for the clarification and free advice.", name: "Gourav" },
  ],
};

export const skillGroups = [
  {
    title: "Voice & Realtime",
    items: ["OpenAI Realtime", "Cartesia", "VAD / turn detection", "Telephony (Smartflo, Twilio)", "WebSockets", "Audio DSP"],
  },
  {
    title: "LLMs & Agents",
    items: ["RAG", "Tool calling", "LangChain / LangGraph", "CrewAI", "Prompt engineering", "VLM / OCR", "Evaluation"],
  },
  {
    title: "Deep Learning",
    items: ["PyTorch", "CNN / LSTM", "Physics-informed losses", "FaceNet", "Super-resolution", "scikit-learn"],
  },
  {
    title: "Engineering",
    items: ["Python", "FastAPI", "TypeScript", "Next.js", "MongoDB", "PostgreSQL", "Docker", "AWS"],
  },
  {
    title: "Data & Analytics",
    items: ["SQL", "Pandas", "Statistics", "Power BI", "Tableau", "EDA", "R"],
  },
];
