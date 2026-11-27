// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: "Divya Goyal",
  role: "AI Engineer",
  company: "Brain Inventory",
  location: "Indore, India",
  email: "divyagoyal6224@gmail.com",
  resume: "/resume.pdf",
  topmate: "https://topmate.io/divya_goyal10",
  linktree: "https://linktr.ee/goyaldivya",
  github: "https://github.com/Divyagoyal002",
  linkedin: "https://linkedin.com/in/divyagoyalds",
  twitter: "https://x.com/divyagoyalbg",
  // Set to a public path (e.g. "/calls/sample.mp3") once a real test-call recording is added to /public.
  callRecording: "/calls/stock2track-call.mp3" as string | null,
  intro:
    "AI engineer with 1.5+ years building production agentic AI: multi-agent systems in LangChain and LangGraph, RAG over Valkey and FAISS, Python services on FastAPI, and multilingual voice agents on the OpenAI Realtime API. Now building document intelligence at Brain Inventory.",
};

export const stats = [
  { value: 1.5, suffix: "+", label: "years building production agentic AI", decimals: 1 },
  { value: 8, suffix: "", label: "AI/ML interns mentored to production" },
  { value: 3, suffix: "", label: "languages spoken by my voice agents" },
  { value: 8.6, suffix: "", label: "CGPA, M.Tech (Integrated) AI & DS", decimals: 1 },
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
    role: "AI Engineer",
    org: "Brain Inventory",
    period: "Oct 2026 — Present",
    current: true,
    summary:
      "Building a document-intelligence system that checks scanned and digital documents for integrity and authenticity, combining computer-vision models with LLM-based extraction.",
    points: [
      "Designing the evaluation datasets and validation workflows that measure detection accuracy and drive down false positives.",
      "Built the PDF-tampering detection feasibility POC: eleven forensic checks behind a FastAPI endpoint, with each finding boxed on the page. On a controlled set it flagged 14 of 19 tampered files and 0 of 12 clean ones, and the report recommends it as a triage tool, not a verifier.",
    ],
    tags: ["Document AI", "Computer vision", "LLM extraction", "Evals", "FastAPI"],
  },
  {
    role: "AI/ML Engineer",
    org: "Onetab Generative AI, Indore",
    period: "Apr 2025 — Sep 2026",
    summary:
      "TACTIVE, a production agentic AI financial-advisory platform for RIA firms (regulated fintech), plus production voice agents and GenAI tools.",
    points: [
      "Designed a multi-agent architecture in LangChain where one planning layer routes tasks to 5 specialized retrieval agents (financials, CRM, documents, portfolio, compliance) and merges their results, cutting duplicated tool code from ~1,500 to ~200 lines and raising automation efficiency by 40%.",
      "Integrated 22 internal and external REST APIs as callable agent tools and unified their data in a single Valkey (Redis-compatible) vector store, cutting search latency from ~500 ms to under 100 ms (80%) and manual workload by 70%.",
      "Processed and modeled large financial and portfolio datasets on Databricks (Spark, SQL) to feed retrieval pipelines and analytics across advisory, compliance and CRM sources.",
      "Built a compliance-monitoring agent that scans advisor communications for SEC/FINRA violations, with real-time alerting, audit-trail logging and deterministic guardrails against hallucinated actions.",
      "Shipped tool-augmented document-generation agents (Financial Plans, IPS, Meeting Prep, Pitch Decks) on OpenAI and Claude that pull live data from GoHighLevel CRM and Black Diamond portfolio APIs.",
      "Implemented AgentOps in Langfuse (tracing, prompt versioning, evaluation, cost monitoring) to debug agent pipelines and validate CI/CD releases; automated CRM operations with 10+ modular n8n flows.",
      "Client project (Catchus.in): owned the end-to-end architecture of a multilingual (English/Hindi/Telugu) voice agent for Stock2Track, a client ERP platform, on the OpenAI Realtime API, streaming audio in real time with function-calling tools (slot lookup, account verification, ticket logging) over CRM and lead-status REST APIs; reached 55% demo-booking conversion on qualified calls.",
      "Built a post-call extraction agent that turns transcripts into schema-constrained JSON (lead qualification, call outcome, follow-up) feeding CRM update pipelines, removing manual call-note entry.",
      "Internal project: built Priya, a bilingual (English/Hindi) outbound sales agent for live objection handling, using a deterministic control-tag protocol so state changes (hangup, callback, demo booked) run in backend code, not model text.",
      "Built OneCode, a dual-mode app generator (prompt-to-Next.js on the Claude API and image-to-HTML/CSS) with parallel requests, exponential backoff, a 5-category intent classifier for edits and a two-stage self-correcting TypeScript build-fix loop, cutting development time by 30%.",
      "Primary GenAI point of contact for product and backend teams on design and integration; mentored 8 AI/ML interns until they shipped production components.",
    ],
    tags: ["LangChain", "LangGraph", "Valkey", "Databricks", "Langfuse", "n8n", "OpenAI Realtime", "Claude", "FastAPI", "Mentoring"],
  },
  {
    role: "AI/ML Intern",
    org: "Linkites, Indore",
    period: "Feb 2025 — Apr 2025",
    summary: "Deep learning models and LLM tools, deployed as services.",
    points: [
      "Trained CNN, FaceNet and LSTM models in PyTorch and deployed them as Flask microservices for real-time inference.",
      "Built a RAG-based document-to-form auto-population agent using LLM APIs.",
    ],
    tags: ["PyTorch", "CNN", "LSTM", "FaceNet", "Flask", "RAG"],
  },
  {
    role: "Data Analyst and Marketing Research Intern",
    org: "Synergy Ventures, Indore",
    period: "Sep 2023 — Oct 2023",
    summary: "Turned consumer data into pricing decisions.",
    points: [
      "Analyzed consumer data with Python and Pandas; pricing recommendations drove a 15% conversion lift and 10% revenue growth.",
    ],
    tags: ["Python", "Pandas", "Pricing"],
  },
  {
    role: "M.Tech (Integrated), AI and Data Science",
    org: "School of Data Science and Forecasting, DAVV, Indore",
    period: "2021 — May 2026",
    summary: "CGPA 8.6 · GATE (DA) 2025 qualified.",
    points: [
      "Certifications: Introduction to Agent Skills (Claude AI), Anthropic, 2026; Complete Generative AI Course with LangChain and Hugging Face, KRISHAI Technologies, 2025.",
    ],
    tags: ["Machine Learning", "Statistics", "Forecasting"],
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
  measured?: { items: { value: string; label: string }[]; note: string; source?: string };
  org?: string; // employer, shown instead of the generic "Work" label
  status?: string; // honest one-line state, e.g. "Tested on synthetic data only"
  slug?: string; // set for projects with a case-study page at /work/<slug>
  earlier?: boolean; // older, smaller work: listed in one line under "Earlier work"
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
    org: "Onetab",
    slug: "voice-agents",
    highlights: [
      "Greeting audio is generated before the call connects, so callers hear a voice right away",
      "Barge-in, echo cancellation and silence monitoring over 8 kHz μ-law audio",
      "Tool calls in the middle of a call: doctor lookup, shipment status, ticket raising, CRM checks",
      "Per-call cost tracking and per-turn latency logging in production",
      "English, Hindi and Telugu, tuned for Indian name pronunciation",
      "Stock2Track (client project via Catchus.in): 55% demo-booking conversion on qualified calls",
      "Priya, an English/Hindi outbound sales agent, uses a deterministic control-tag protocol so hangups, callbacks and bookings run in backend code, not model text",
      "Post-call extraction agent turns transcripts into schema-constrained JSON for CRM updates, evaluated on fixed multilingual and adversarial transcript sets",
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
    slug: "merchant-ops-copilot",
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
      source: "https://github.com/Divyagoyal002/merchant-ops-copilot/blob/eval/metrics/METRICS.md",
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
    live: "https://merchant-ops-copilot.onrender.com", // free plan: first load takes up to a minute
    accent: "#2dd4bf",
  },
  {
    title: "TACTIVE",
    tagline: "Production agentic AI financial-advisory platform for RIA firms",
    description:
      "A regulated-fintech platform where one planning layer routes advisor requests to 5 specialized retrieval agents (financials, CRM, documents, portfolio, compliance) and merges the results. Agents call 22 internal and external REST APIs as tools, generate financial plans, IPS documents, meeting prep and pitch decks from live CRM and portfolio data, and a compliance agent watches advisor communications for SEC/FINRA issues.",
    category: "Agents & GenAI",
    year: "2026",
    featured: true,
    context: "Work",
    org: "Onetab",
    slug: "tactive-retrieval",
    highlights: [
      "Multi-agent architecture in LangChain with a planning layer over 5 retrieval agents; duplicated tool code went from ~1,500 to ~200 lines",
      "22 REST APIs unified in one Valkey vector store; search latency from ~500 ms to under 100 ms",
      "Financial and portfolio datasets processed on Databricks (Spark, SQL) to feed retrieval and analytics",
      "Compliance-monitoring agent with real-time alerts, audit-trail logging and deterministic guardrails",
      "Document-generation agents on OpenAI and Claude using live GoHighLevel CRM and Black Diamond portfolio data",
      "AgentOps in Langfuse (tracing, prompt versioning, evals, cost) and 10+ n8n flows for CRM operations",
      "Later benchmarked the retrieval layer: vectors handle paraphrased questions but miss exact account numbers, so identifier lookups should be routed to exact search",
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
    stack: ["LangChain", "Valkey vector search", "Databricks", "Langfuse", "n8n", "OpenAI", "Claude", "TypeScript"],
    accent: "#facc15",
  },
  {
    title: "oneAudit AI",
    tagline: "Multi-agent document verification",
    description:
      "A set of specialised agents that classify documents, extract data, check them against lending guidelines and flag forgery, missing signatures and quality problems. The output is an auditor-ready checklist.",
    category: "Agents & GenAI",
    year: "2026",
    context: "Work",
    org: "Onetab",
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
      "A feasibility POC. It runs eleven checks (revision history, signatures, font and baseline consistency, overlays, OCR vs the text layer, scan-noise maps) and returns a verdict with each suspicious region boxed on the page. It's served as a FastAPI endpoint.",
    category: "ML & Data",
    featured: true,
    year: "2026",
    context: "Work",
    org: "Brain Inventory",
    slug: "pdf-tampering",
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
    tagline: "Dual-mode app generator: prompt to Next.js, image to HTML/CSS",
    description:
      "Turns a prompt into a multi-file Next.js project on the Claude API, or an image into HTML/CSS. Follow-up requests go through an intent classifier that picks a targeted edit or a regeneration, and a two-stage build-fix loop corrects TypeScript errors. It cut development time by 30%.",
    category: "Agents & GenAI",
    year: "2025",
    context: "Work",
    org: "Onetab",
    highlights: [
      "5-category intent classifier for edit requests: change only what's needed",
      "Two-stage self-correcting TypeScript build-fix loop",
      "Parallel requests with exponential backoff",
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
    stack: ["Python", "Claude API", "Next.js", "TypeScript", "Prompt engineering"],
    accent: "#f472b6",
  },
  {
    title: "Submesoscale Ocean Dynamics",
    tagline: "Physics-informed CNN super-resolution of ocean currents",
    description:
      "Reconstructs eddies and fronts smaller than 100 km from coarse satellite altimetry and SST. The loss includes geostrophic, Rossby-number and log-spectrum terms. It is built to be validated against independent drifting buoys and wavenumber spectra.",
    category: "Research",
    year: "2026",
    context: "Personal",
    status: "Pipeline runs end to end on a synthetic ocean; real-data results not yet published",
    highlights: [
      "OSSE training on high-resolution reanalysis, then application to real Copernicus data",
      "Alboran–Balearic region at 1/24° during the SWOT era (2022–2024)",
      "Effective-resolution and 10–50 km band-energy diagnostics",
    ],
    stack: ["PyTorch", "xarray", "Oceanography", "Spectral analysis"],
    github: "https://github.com/Divyagoyal002/submesoscale",
    accent: "#38bdf8",
  },
  {
    title: "Crewzy",
    tagline: "AI workforce management platform · IIT Indore E-Summit Hackathon (Mappls-sponsored)",
    description:
      "I built the AI layer of a team-built platform: a GPT-4o-mini agent that turns free-text questions into MongoDB queries behind an LLM authorization check, and a task-assignment pipeline that matches workers to tasks with OpenAI embeddings, cosine similarity and Haversine distance.",
    category: "Agents & GenAI",
    year: "2026",
    context: "Personal",
    highlights: [
      "Natural-language questions become MongoDB queries, checked by an LLM authorization step before they run",
      "Task assignment combines skill match (embedding cosine similarity) with distance (Haversine)",
      "Team project; I owned the AI layer",
    ],
    stack: ["GPT-4o-mini", "MongoDB", "OpenAI embeddings", "Python"],
    accent: "#14b8a6",
  },
  {
    title: "AI-Based Timetable Generation System",
    tagline: "Smart India Hackathon 2025",
    description:
      "A constraint-based scheduling agent for NEP 2020-aligned institutions, with 80% faster scheduling and 85% fewer conflicts than manual timetabling.",
    category: "Agents & GenAI",
    year: "2025",
    context: "Personal",
    highlights: [
      "Constraint-based scheduling for NEP 2020 course structures",
      "80% faster scheduling and 85% fewer conflicts than manual timetabling",
    ],
    stack: ["Python", "Constraint-based scheduling"],
    accent: "#a78bfa",
  },
  {
    title: "Bayesian Marketing Mix Model",
    tagline: "Channel ROI and budget recommendations with credible intervals",
    description:
      "A Google Meridian pipeline that estimates ROI, marginal ROI, adstock and saturation per marketing channel, then turns the posterior into fixed- and flexible-budget recommendations. Before running on the client's data, it is checked on public simulated geo data where the true ROIs are known.",
    category: "ML & Data",
    year: "2026",
    context: "Client",
    highlights: [
      "Input validation before any sampling: missing columns, nulls, duplicates, date gaps, negative spend, unbalanced geo panels",
      "EDA for media mix problems: spend share, variation, correlation and VIF, outliers, seasonality",
      "Typed YAML configs where each variant changes one thing from its parent, with every run logged to MLflow",
      "A registration gate on R-hat, holdout accuracy and prior-to-posterior shift, so a model that didn't converge, or that only repeats its priors, can't be registered",
      "A CI guard that blocks client data and model artifacts from being committed",
    ],
    stack: ["Google Meridian", "Bayesian inference", "Python", "MLflow", "pytest", "GitHub Actions"],
    accent: "#e11d48",
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
    status: "Tested on synthetic gait data; no real dog data collected yet",
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
    status: "Software complete; simulated players only, no participant study yet",
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
    earlier: true,
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
    earlier: true,
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
    earlier: true,
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
    earlier: true,
    highlights: ["MTCNN detection", "Hybrid similarity scoring", "Live Streamlit demo"],
    stack: ["PyTorch", "MTCNN", "FaceNet", "Streamlit"],
    github: "https://github.com/Divyagoyal002/FaceRecognition",
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
    earlier: true,
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
      body: "Mentored 8 AI/ML interns from day one: architecture walkthroughs, code reviews and pairing until they shipped production components.",
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
    title: "Agentic AI",
    items: ["Multi-agent orchestration", "Agent architecture design", "Planning and routing layers", "Tool and function calling", "Memory modules", "Agent evaluation and debugging"],
  },
  {
    title: "GenAI frameworks",
    items: ["LangGraph", "LangChain", "CrewAI", "RAG", "Embeddings", "Prompt engineering", "Conversational AI", "NLP"],
  },
  {
    title: "LLMs and voice",
    items: ["OpenAI (incl. Realtime API)", "Azure OpenAI", "Claude (Anthropic)", "Cartesia", "Tata Tele Smartflo"],
  },
  {
    title: "AgentOps, LLMOps and safety",
    items: ["Langfuse (tracing, prompt versioning, evals, cost)", "Guardrails", "Schema-constrained outputs", "Audit-trail logging", "n8n"],
  },
  {
    title: "Python microservices",
    items: ["Python", "FastAPI", "Flask", "REST APIs", "Async and streaming endpoints", "Docker", "CI/CD", "Git"],
  },
  {
    title: "Data, databases and cloud",
    items: ["PostgreSQL (JSONB)", "SQL", "MongoDB", "Valkey/Redis vector search", "FAISS", "Databricks (Spark, SQL)", "Vercel", "AWS · Azure · GCP (working familiarity)"],
  },
  {
    title: "Machine learning",
    items: ["PyTorch", "Scikit-learn", "CNNs", "LSTMs", "FaceNet", "Sentence-transformers"],
  },
  {
    title: "Languages",
    items: ["Python", "TypeScript", "SQL"],
  },
];
