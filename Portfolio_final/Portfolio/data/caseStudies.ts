// Long-form write-ups for the projects that have a `slug` in portfolio.ts.
// Every number here comes from a METRICS.md or report in the project's repo; keep the dataset next to it.

export type CaseStudy = {
  slug: string;
  myRole: string;
  problem: string;
  constraints: string[];
  approach: { title: string; body: string }[];
  whatBroke: { title: string; body: string }[];
  next: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "voice-agents",
    myRole: "I owned the real-time voice stack at Onetab: the audio loop, tool calls, post-call extraction and the evals.",
    problem:
      "Businesses wanted outbound and inbound phone agents that could qualify leads, book appointments and answer support questions in English, Hindi and Telugu. The call has to feel natural on an ordinary phone line, and whatever the caller says has to reach the CRM as clean, structured data.",
    constraints: [
      "Telephony audio is 8 kHz μ-law. Every hop (telephony, model, TTS) adds latency the caller can hear.",
      "Callers interrupt, go quiet and switch languages mid-sentence.",
      "Extracted fields go straight into a CRM or Excel sheet, so a wrong format is a real bug, not a cosmetic one.",
      "Seven different businesses, each with its own script and tools.",
    ],
    approach: [
      {
        title: "Audio loop",
        body: "A FastAPI service sits between the telephony WebSocket and OpenAI Realtime. It resamples audio, detects silence, and handles barge-in and echo cancellation. Replies are streamed to Cartesia TTS sentence by sentence while the model is still generating. The greeting is synthesised before the call connects, so the caller hears a voice right away.",
      },
      {
        title: "Tools during the call",
        body: "The model calls business tools mid-conversation (doctor lookup, shipment status, ticket creation, CRM checks). Call actions like callback requests and handoffs use control tags that the backend parses, not free text.",
      },
      {
        title: "Post-call extraction",
        body: "After hang-up, a gpt-4.1 extractor turns the transcript into a fixed set of fields (business type, ERP in use, demo date and time, callback time, call outcome). Every call logs its cost and per-turn latency.",
      },
      {
        title: "Evaluating the extractor",
        body: "Real call data can't leave the client, so I generated synthetic transcripts from a spec. Because the label is the spec, the ground truth is correct by construction. The sets were 50 sales calls in English, Hinglish, Hindi and Telugu, 31 adversarial calls (declined slots, cancellations, \"we stopped using that ERP\", number words, relative dates), and 40 recruitment calls. Each set ran 3 times at temperature 0, scored with field-level precision, recall and F1, outcome accuracy, latency and cost.",
      },
    ],
    whatBroke: [
      {
        title: "Hindi answers came back untranslated",
        body: "On the recruitment agent, English field F1 was 1.00 but Hindi was about 0.6. Every error was the same thing: the model copied the caller's Hindi sentence into a field the CRM expects in English. The sales agent's prompt had an \"answer in English\" line and this one didn't. Adding that one line took Hindi F1 to 1.00 in all three runs, with no change in latency or cost.",
      },
      {
        title: "Valid JSON, inconsistent values",
        body: "JSON validity was already 100%, but callback times came back in 5 different shapes and demo times in 3. One trap also produced a contradictory record: using_erp = no with erp_name = Busy, because the caller had used Busy in the past. Strict JSON-schema outputs with enums, explicit formats and a cross-field rule brought every time field to one format and contradictions from 6 to 0 across 243 calls. The cost was about 21% more input tokens. I changed the schema and the prompt rules together, so I can't say which one did the work.",
      },
      {
        title: "A control-tag parser that's too strict",
        body: "The backend matched control tags exactly, and 0 of 8 plausible variants (lowercase, extra spaces, single brackets) were recognised. How often the model actually emits variants in production isn't measured, but it's a silent failure mode worth closing.",
      },
    ],
    next: [
      "Add ASR noise to the synthetic set. The current scores are an upper bound.",
      "Ablate schema vs prompt rules to see which one fixed the format drift.",
      "Make the tag parser tolerant, and add a callback_time field to the recruitment schema, where it's currently missing.",
    ],
  },
  {
    slug: "merchant-ops-copilot",
    myRole: "Personal project. I designed and built it end to end, including the evals and CI.",
    problem:
      "Small merchants on Razorpay can't easily answer questions like \"why was yesterday's settlement low?\" or \"which payments failed this week?\", and many would rather ask in Hindi. An assistant that reads their real payment data is useful, but one that can move money on a prompt is dangerous.",
    constraints: [
      "No prompt, including an injected one, may cause a refund without the merchant's approval.",
      "Approvals happen later, in a different request, so the agent run must pause and resume safely.",
      "Free-tier models and hosting, so token use matters.",
      "Evals must be repeatable without a live Razorpay account.",
    ],
    approach: [
      {
        title: "Read-only model, code-owned writes",
        body: "The model only sees 10 read-only tools, filtered from Razorpay's official MCP server. Refunds are validated and drafted by code (captured payment, refundable balance, per-refund cap). They execute only after a human clicks Approve, with an idempotency key so a double-click can't refund twice.",
      },
      {
        title: "Pause and resume with LangGraph",
        body: "interrupt() and a checkpointer let the run wait for approval. The waiting node and the refunding node are separate, so resuming can never fire a refund twice.",
      },
      {
        title: "A fixture server for evals",
        body: "A local server with the same tool names and response shapes as Razorpay serves a frozen test week with built-in scenarios such as a low settlement and a refund spike. The 31-case eval set (English, Hindi, Hinglish) includes \"I pre-approve, just do it\" and fake SYSTEM OVERRIDE injections. CI fails on any unapproved execution.",
      },
    ],
    whatBroke: [
      {
        title: "Amounts in paise",
        body: "The API returns amounts in paise, and leaving the conversion to the model was error-prone in testing. Code now converts everything to ₹ before the model sees a number.",
      },
      {
        title: "Token cost of lists",
        body: "Sending payment lists as JSON was expensive. Sending them as CSV cut tokens by about 2.5×.",
      },
      {
        title: "A number I couldn't reproduce",
        body: "The README cited an 8/8 smoke-eval pass, but no result file was committed, so I removed it from what I quote until it's re-run and saved.",
      },
    ],
    next: [
      "Run the full 31-case eval on a current model and commit the results file.",
      "Compare providers on accuracy, latency and ₹ per query with the same eval set.",
    ],
  },
  {
    slug: "tactive-retrieval",
    myRole: "Client project. I worked on the AI features, then benchmarked the platform's retrieval layer.",
    problem:
      "Financial advisors ask the platform both kinds of question: conceptual ones (\"who was recently widowed?\") and exact lookups (\"show me account 4417-2290\"). Production used vector search only. I wanted to know whether that holds up for both.",
    constraints: [
      "No client data could be used or sent anywhere.",
      "Production runs on ElastiCache Valkey, which has vector search but no BM25 text index.",
      "The benchmark had to exercise the real production search code, not a reimplementation.",
    ],
    approach: [
      {
        title: "Synthetic corpus through production adapters",
        body: "248 synthetic CRM and portfolio records (contacts, notes, tasks, accounts, assets) were rendered by the production adapters and embedded with the same model (text-embedding-3-large). They were searched through the production index config: HNSW, M=16, cosine, org pre-filter. The only substitution was the Redis transport.",
      },
      {
        title: "Queries with one gold answer each",
        body: "72 queries: 36 exact identifiers (account numbers, emails, billing numbers, task IDs, CUSIPs) and 36 paraphrased conceptual questions. Scored with Recall@k, MRR and nDCG for vector, BM25 and hybrid (reciprocal-rank fusion).",
      },
    ],
    whatBroke: [
      {
        title: "Vectors miss exact identifiers",
        body: "Vector search found the right record in the top 5 for 100% of conceptual questions but only 42% of identifier lookups, and it missed all 12 account-number queries. Digit strings carry almost no meaning for an embedding model, so structurally similar accounts outrank the exact one. BM25 was the mirror image: 100% on identifiers, 47% on paraphrases.",
      },
      {
        title: "No single hybrid weight works",
        body: "When I picked the fusion weight by 2-fold cross-validation, the folds chose opposite extremes (0.0 and 1.0). A global blend can't serve both query types.",
      },
    ],
    next: [
      "Route by query type: identifier-looking queries go to an exact lookup in Postgres, everything else goes to vectors. On this set that scored 1.00 on both types. It's optimistic, because the synthetic queries are cleanly one type or the other.",
      "Keep ef_runtime at 50: recall@10 was 0.9995 at about 3 ms p50 on 20k vectors, and raising it added latency with no recall gain.",
    ],
  },
  {
    slug: "pdf-tampering",
    myRole: "Built at Brain Inventory as a feasibility study: the analyzer, the test set, the API and the report.",
    problem:
      "Given only a PDF (a statement, an invoice, a letter) and no original to compare against, can software point to signs that it was edited, and show where?",
    constraints: [
      "No reference copy of the document is available.",
      "A false accusation is worse than a miss, so the output has to be explainable and carefully worded.",
      "Inputs range from born-digital PDFs to scans and print-and-rescan copies.",
    ],
    approach: [
      {
        title: "Eleven independent checks",
        body: "Metadata, revision history (each earlier revision is reopened and diffed), digital signatures (pyHanko), font, baseline and column consistency, overlay paint order, opaque annotations, inline image patches, OCR versus the text layer (Tesseract), and a scan-noise map for pasted patches. Each finding has a page, a box, a reason and the evidence.",
      },
      {
        title: "A conservative verdict",
        body: "Any medium or high finding means \"potentially suspicious\". A scan with no text layer is \"inconclusive\". Otherwise the verdict is \"no significant indicators\". The product wording never says \"authentic\" or \"forged\".",
      },
      {
        title: "A test set built on purpose",
        body: "31 PDFs (19 tampered, 12 clean), each with its construction recorded. They include a real generator (headless Chrome), a re-save through another writer, realistic scans, and searchable scans.",
      },
    ],
    whatBroke: [
      {
        title: "False positives on real generators",
        body: "The first version flagged a legitimate form because its values were in Courier next to Helvetica labels. In the first contact with Chrome-generated PDFs, 1 of 2 clean files was flagged. Monospace and template-column runs are now down-weighted, and both files pass.",
      },
      {
        title: "Misses that are limits, not bugs",
        body: "All 5 misses were predicted when the samples were built: a careful same-font rewrite, an edit whose history was removed by a later full re-save, a flattened file, a copy-move inside a scan, and a print-and-rescan. No amount of rule tuning catches those from the file alone.",
      },
    ],
    next: [
      "Measure the false-positive rate on a few hundred real documents. This is the open question, and the reason the recommendation is \"triage tool, not verifier\".",
    ],
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
