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
    "tool-using agents with human approval",
    "evals for LLM systems",
    "document AI pipelines",
  ],
  intro:
    "I build LLM systems that run in production and I measure them. Most of my work is phone agents that hold conversations in English, Hindi and Telugu, agents that act on real business data behind approval gates, and the eval sets that tell me whether a change actually helped.",
};

export const stats = [
  { value: 7, suffix: "+", label: "voice agents built" },
  { value: 4, suffix: "", label: "production systems benchmarked with reproducible evals" },
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
    period: "Apr 2025 — Present",
    current: true,
    summary:
      "I own the real-time voice AI stack and build the agentic back-ends behind Onetab's products.",
    points: [
      "Designed and shipped real-time phone agents for ERP sales, hospital appointments, logistics support, freight lead qualification, travel sales and recruitment screening.",
      "Engineered the audio loop: μ-law telephony streams → OpenAI Realtime → streaming Cartesia TTS, with barge-in, echo cancellation, silence detection and per-turn latency tracking.",
      "Built per-call cost accounting across precall, transcription and extraction, plus call queues, retry scheduling, human handoff and lead dashboards.",
      "Built eval harnesses for post-call extraction on synthetic multilingual transcripts. One run traced every Hindi field error to a missing output-language rule; adding one prompt line lifted Hindi field F1 from about 0.6 to 1.0. Another moved extraction to strict JSON-schema outputs and cut callback-time formats from 5 to 1.",
      "Extended oneAudit's document-verification agents with a Qwen OCR pipeline, guideline checks, forgery and signature detection, and built a PDF-tampering feasibility POC (14 of 19 tampered files flagged, 0 of 12 clean files on a controlled set).",
      "Took OneCode, a prompt-to-app code generator, to production with an edit-query router and build-error fix endpoints.",
      "Mentor the interns in our office: onboarding them onto the voice and agent stacks, reviewing their code and pairing on their first production features.",
    ],
    tags: ["OpenAI Realtime", "FastAPI", "WebSockets", "Cartesia", "Telephony", "Structured Outputs", "Evals", "VLM / OCR", "MongoDB", "Mentoring"],
  },
  {
    role: "AI/ML Intern",
    org: "Linkites InfoTech",
    period: "Feb 2025 — Mar 2025",
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
  builtWith?: { tech: string; why: string }[]; // optional "how it's built" notes shown in the modal
  // optional measured results; `note` states the dataset and caveats, so a number never appears without them
  measured?: { items: { value: string; label: string }[]; note: string };
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
    featured: true,
    context: "Work",
    highlights: [
      "Greeting audio is generated before the call connects, so callers hear a voice right away",
      "Barge-in, echo cancellation and silence monitoring over 8 kHz μ-law audio",
      "Tool calls in the middle of a call: doctor lookup, shipment status, ticket raising, CRM checks",
      "Per-call cost tracking and per-turn latency logging in production",
      "English, Hindi and Telugu, tuned for Indian name pronunciation",
      "Post-call extraction to the CRM, evaluated on fixed multilingual and adversarial transcript sets",
    ],
    measured: {
      items: [
        { value: "0.6 → 1.0", label: "Hindi field F1 after one output-language prompt line (recruitment agent)" },
        { value: "5 → 1", label: "callback-time formats after moving to strict JSON-schema outputs" },
        { value: "6 → 0", label: "self-contradictory ERP records across 243 extraction calls" },
        { value: "2.4 s · $0.002", label: "p95 latency and cost per post-call extraction" },
      ],
      note: "Synthetic transcripts with labels generated from the spec (50 + 31 adversarial calls for the sales agent, 40 for the recruitment agent; English, Hinglish, Hindi, Telugu), 3 runs each on gpt-4.1. No ASR noise, so the scores are an upper bound. The strict-schema change added about 21% to input tokens.",
    },
    stack: ["Python", "FastAPI", "OpenAI Realtime", "Cartesia TTS", "Smartflo", "WebSockets", "Structured Outputs"],
    accent: "#7c5cff",
  },
  {
    title: "Merchant Ops Copilot",
    tagline: "A payments assistant for small Indian merchants, in Hindi or English",
    description:
      "A shop owner can ask \"why did yesterday's settlement come in low?\", \"which payments failed this week?\" or \"ऑर्डर 1058 का पूरा पैसा वापस कर दो\" and get an answer from their real Razorpay data. The agent reads payments, orders, refunds and settlements through Razorpay's official MCP server. It can draft a refund or payment link, but nothing moves until the merchant clicks Approve. Every morning it also sends a short health digest on its own.",
    category: "Agents & GenAI",
    year: "2026",
    featured: true,
    context: "Personal",
    highlights: [
      "The model never gets a write tool: only 10 read-only Razorpay tools are allowlisted, so no prompt can make it refund anything",
      "Refunds are checked and drafted by code (captured payment, refundable balance, per-refund cap) and run only after a human approves, with an idempotency key so a double-click can't refund twice",
      "31-case eval set in English, Hindi and Hinglish, including \"I pre-approve, just do it\" and fake SYSTEM OVERRIDE injections; CI fails on any unapproved execution",
      "Daily digest: code computes failure rate, top failure reasons and refund spikes, and the model only writes the summary",
      "Fixes that came from testing, not planning: converting paise to ₹ before the model sees it, and sending lists as CSV to cut tokens about 2.5x",
    ],
    measured: {
      items: [
        { value: "17 / 17", label: "guardrail tests pass (no write tools, approval gate, idempotent refunds)" },
        { value: "55%", label: "line coverage; core graph and copilot modules 82–92%" },
      ],
      note: "Run offline against the fixture server. The 31-case model eval is in the repo and runs in CI; I'll add its scores here after the next full run.",
    },
    stack: ["LangGraph", "Razorpay MCP", "LangChain MCP adapters", "Groq (gpt-oss)", "Gradio", "Langfuse", "GitHub Actions", "Render"],
    builtWith: [
      {
        tech: "LangGraph",
        why: "A plain tool loop is enough for questions, but approvals need a run to pause and resume later from a different request. interrupt() and the checkpointer handle that, and keeping the waiting node and the refunding node separate means a resume can never fire a refund twice.",
      },
      {
        tech: "Razorpay MCP server",
        why: "Razorpay's own tool layer, loaded through LangChain's MCP adapters. I use it for reads and filter it down to the tools the agent needs, which also shrinks the schema sent with every call.",
      },
      {
        tech: "Groq + open models",
        why: "Open-weight gpt-oss models served fast on a free tier. Providers are swappable (Groq, OpenRouter, Gemini), so the same evals can compare models on accuracy, latency and ₹ per query.",
      },
      {
        tech: "Offline fixture server",
        why: "Same tool names and response shapes as Razorpay, on a frozen test week with built-in scenarios like a low settlement and a refund spike. Evals stay repeatable, and the demo works without a Razorpay account.",
      },
      {
        tech: "Langfuse",
        why: "One trace per question, grouped by conversation, so I can see which tool calls a wrong answer came from and what each turn cost.",
      },
      {
        tech: "GitHub Actions",
        why: "Guardrail tests and an 8-case smoke eval on every push, the full 31 nightly (a full run uses a whole day of the free token quota). A second scheduled workflow sends the digest at 9 AM IST.",
      },
      {
        tech: "Gradio on Render",
        why: "A chat UI with real Approve and Reject buttons, deployed from a single blueprint file on a free plan.",
      },
    ],
    github: "https://github.com/Divyagoyal002/merchant-ops-copilot",
    live: "https://merchant-ops-copilot.onrender.com",
    accent: "#2dd4bf",
  },
  {
    title: "Tactive AI Copilot",
    tagline: "Generative AI for financial advisors",
    description:
      "AI features for a financial-advisory SaaS: generated financial plans with charted PDFs, market commentary with cited disclosures, objection handling, conversation scripts, follow-ups and prospect pitch decks.",
    category: "Agents & GenAI",
    year: "2026",
    featured: true,
    context: "Client",
    highlights: [
      "Source citation and signal detection across client context",
      "Compliance-aware disclosures",
      "Pitch-deck generation from the prospect engine",
      "Benchmarked the production vector search (Valkey HNSW, 3072-d embeddings) against BM25: vectors handle paraphrased questions, but miss exact account numbers",
      "Tuning one hybrid weight didn't work (cross-validation folds picked opposite extremes). The recommended design routes identifier lookups to exact search and everything else to vectors",
    ],
    measured: {
      items: [
        { value: "1.00 vs 0.42", label: "vector Recall@5 on conceptual questions vs exact-identifier lookups" },
        { value: "1.00", label: "Recall@5 on both query types with an identifier router" },
        { value: "0.9995 · 3 ms", label: "HNSW recall@10 and p50 search latency at the production ef_runtime" },
        { value: "358 / 358", label: "existing tests passing after fixing one stale assertion" },
      ],
      note: "248 synthetic CRM and portfolio records, 72 queries with one gold record each, run through the production search code. The query types are cleanly separated, so the router result is optimistic. HNSW numbers are from 20k synthetic vectors on a single local node. No client data was used.",
    },
    stack: ["TypeScript", "Next.js", "Prisma", "AWS", "Valkey vector search", "OpenAI embeddings", "Vitest"],
    accent: "#facc15",
  },
  {
    title: "oneAudit AI",
    tagline: "Multi-agent document verification",
    description:
      "A set of specialised agents that classify documents, extract data, check them against lending guidelines and flag forgery, missing signatures and quality problems. The output is an auditor-ready checklist.",
    category: "Agents & GenAI",
    year: "2026",
    featured: true,
    context: "Work",
    highlights: [
      "Qwen-based OCR pipeline for scanned documents",
      "Guideline-table reasoning with semantic matching",
      "Forgery, signature, QR and image-quality agents",
    ],
    stack: ["Python", "VLMs", "Qwen", "Gemini", "MongoDB", "Webhooks"],
    accent: "#22d3ee",
  },
  {
    title: "PDF Tampering Detection",
    tagline: "Finds signs of editing in a PDF without the original",
    description:
      "A feasibility POC for the document-audit product. It runs eleven checks (revision history, signatures, font and baseline consistency, overlays, OCR vs the text layer, scan-noise maps) and returns a verdict with each suspicious region boxed on the page. It's served as a FastAPI endpoint.",
    category: "ML & Data",
    year: "2026",
    context: "Work",
    highlights: [
      "Every finding carries a page, a region, a reason and the evidence, so a reviewer can check it",
      "Verdicts are worded as indicators, never 'authentic' or 'forged'",
      "All 5 misses were predicted when the samples were built: structural limits such as print-and-rescan, not tuning problems",
      "Next step written into the report: measure false positives on a few hundred real documents",
    ],
    measured: {
      items: [
        { value: "14 / 19", label: "tampered files flagged, with the edited region boxed in 13" },
        { value: "0 / 12", label: "clean files flagged" },
      ],
      note: "A controlled set of 31 PDFs, mostly synthetic. The false-positive rate on real-world documents is not yet known.",
    },
    stack: ["Python", "PyMuPDF", "pyHanko", "Tesseract OCR", "FastAPI"],
    accent: "#f59e0b",
  },
  {
    title: "OneCode",
    tagline: "Prompt → working React + Node app",
    description:
      "A code generation engine that turns a prompt into a multi-file React + Node.js project, then routes follow-up requests to targeted edits or full regeneration, with endpoints that suggest and apply fixes for build errors.",
    category: "Agents & GenAI",
    year: "2025",
    context: "Work",
    highlights: [
      "Update-query router: edit only what changed",
      "Build-error fix and apply endpoints, plus a post-generation icon-import fixer",
      "Retry with jitter on model overload errors",
      "Live preview and git suggestions",
      "Later added the first test suite (14 deterministic tests) and measured the fixers against the real package exports",
    ],
    measured: {
      items: [
        { value: "0.70 → 0.97", label: "simulated call success with overload retry at a 30% overload rate" },
        { value: "230 / 230", label: "icon import paths rewritten correctly for the v2 package" },
        { value: "10 / 120", label: "renamed icons repaired. Too low; the fix is to generate the rename map from both package versions" },
      ],
      note: "Deterministic checks only. The original model versions are retired, so generation quality wasn't re-measured.",
    },
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
    title: "Business Ops App with an AI Assistant",
    tagline: "Bookkeeping for an event-decoration company, with a chat assistant that can't change data on its own",
    description:
      "Events, payments, expenses, payroll, inventory and reports for a small business, live in production since v1.0. The owner can type \"420 khana, 300 petrol\" and get expense rows to check, or ask the assistant in Hindi or English about anything in the books.",
    category: "Agents & GenAI",
    year: "2026",
    context: "Client",
    highlights: [
      "The assistant is read-only. It can prepare entries, but they're saved only when the user taps Confirm",
      "Every answer has a folded Source with the exact figures from the records",
      "Scoped to business questions and hardened against prompt injection",
      "Argon2 auth, CSRF, strict CSP, nightly backups and one-command deploys with migrations",
    ],
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Docker Compose", "LLM tool calling"],
    accent: "#10b981",
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
    title: "LoRA Text-to-SQL",
    tagline: "Fine-tuning a 0.5B model on a laptop",
    description:
      "A LoRA fine-tune of Qwen2.5-0.5B-Instruct on sql-create-context with PEFT. The loss is masked to the answer tokens. One script compares base and adapter on held-out questions with exact match, using the same model object, and another merges the adapter for inference with no overhead.",
    category: "ML & Data",
    year: "2026",
    context: "Personal",
    highlights: [
      "Adapters on attention and MLP projections, about 1–2% of parameters trainable",
      "Prompt-token masking (labels = -100) so the model learns only the SQL",
      "Runs on Apple MPS, CUDA or CPU",
    ],
    stack: ["PyTorch", "Hugging Face", "PEFT / LoRA", "Qwen2.5"],
    accent: "#818cf8",
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
    title: "Agents & LLM Apps",
    items: [
      "Tool calling",
      "Structured Outputs (JSON schema)",
      "LangGraph (state, interrupts, checkpoints)",
      "MCP servers & clients",
      "Human-in-the-loop approvals",
      "Guardrails & prompt-injection tests",
      "RAG",
      "Hybrid retrieval (vector, BM25, routing)",
      "VLM / OCR document pipelines",
      "Fine-tuning (LoRA / PEFT)",
      "OpenAI · Claude · Gemini · Groq · Ollama",
    ],
  },
  {
    title: "Evals & Observability",
    items: [
      "Eval set design (synthetic, adversarial)",
      "Field-level P / R / F1",
      "Recall@k · MRR · nDCG",
      "p50 / p95 latency, cost per call",
      "Error analysis → fix → re-measure",
      "Langfuse tracing",
      "Evals & guardrail tests in CI",
    ],
  },
  {
    title: "Voice & Realtime",
    items: ["OpenAI Realtime", "Cartesia", "VAD / turn detection", "Telephony (Smartflo, Twilio)", "WebSockets", "Audio DSP"],
  },
  {
    title: "Engineering & Infra",
    items: ["Python", "FastAPI", "TypeScript", "Next.js", "PostgreSQL", "MongoDB", "Valkey / Redis vector search", "Docker", "AWS", "GitHub Actions"],
  },
  {
    title: "ML & Data",
    items: ["PyTorch", "scikit-learn", "CNN / LSTM", "Physics-informed losses", "Statistics", "SQL", "Pandas", "MLflow"],
  },
];
