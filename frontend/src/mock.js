// Mock data for portfolio - will be replaced with backend integration later

export const personalInfo = {
  name: "Sarvesh Sanjeev Pawar",
  role: "Generative AI Engineer",
  tagline: "LLMs, RAG & Multi-Agent Workflows",
  headline: "Building production-grade AI systems that solve real-world problems",
  bio: "Generative AI Engineer with 3.8 years of experience building production-grade LLM applications, RAG pipelines, and agentic AI solutions using Python, FastAPI, Azure, and AWS. Experienced in enterprise GenAI systems, intelligent retrieval, LLM evaluation, multi-agent workflows, and scalable AI application development.",
  email: "sarveshpawar06@gmail.com",
  phone: "+91-9167988420",
  location: "Mumbai, India",
  linkedin: "https://www.linkedin.com/in/sarveshpawar-genai/",
  // github: "https://github.com/sarveshpawar",
  resumeUrl: "/resume.pdf"
};

export const skillsData = {
  "LLMs & GenAI": [
    "LLMs",
    "RAG Systems",
    "Prompt Engineering",
    "Agentic AI",
    "Multi-Agent Workflows",
    "LangChain",
    "LangGraph",
    "Amazon Bedrock",
    "Azure OpenAI",
    "Titan Embeddings",
    "LLM Evaluation",
    "Guardrails",
    "Hallucination Control",
    "Prompt Optimization",
    "Output Validation"
  ],
  "Languages & Backend": [
    "Python",
    "SQL",
    "FastAPI",
    "Flask",
    "REST APIs",
    "SQLAlchemy"
  ],
  "Data & Retrieval": [
    "Azure AI Search",
    "Embeddings",
    "Hybrid Search",
    "Vector Search",
    "pgvector",
    "PostgreSQL"
  ],
  "Cloud & DevOps": [
    "AWS",
    "Azure",
    "AWS CDK",
    "AWS Lambda",
    "S3",
    "CloudFront",
    "Secrets Manager",
    "Azure DevOps",
    "Docker",
    "Git",
    "CI/CD"
  ]
};

export const experience = [
  {
    id: 1,
    company: "Accenture",
    role: "Advanced Application Engineer",
    duration: "June 2026 - Present",
    location: "Mumbai, India",
    achievements: [
      "Implemented an end-to-end GenAI use-case recommendation solution using RAG, Amazon Bedrock, Titan Embeddings, PostgreSQL/pgvector, FastAPI, and AWS Lambda, with structured outputs and deterministic fallbacks.",
      "Designed enterprise role-based access control with Cognito JWT authentication, hierarchical data scoping, access-request approvals, and backend authorization.",
      "Built the solution with SQLAlchemy, RDS Proxy, S3, CloudFront, Secrets Manager, IAM, and AWS CDK, with Azure DevOps CI/CD."
    ],
    tech: ["Amazon Bedrock", "Titan Embeddings", "PostgreSQL", "pgvector", "FastAPI", "AWS Lambda", "AWS CDK", "Azure DevOps"]
  },
  {
    id: 2,
    company: "Capgemini",
    role: "Software Engineer",
    duration: "January 2023 - May 2026",
    location: "Mumbai, India",
    achievements: [
      "Built and productionized an agentic RAG system using Azure AI Search for intelligent document retrieval, task planning, and decision-making.",
      "Improved response reliability with prompt engineering, hallucination controls, and output validation; developed a FastAPI and Llama-based AI test-case generation platform with prompt tuning and evaluation.",
      "Designed Biodiversity Net Gain scoring logic from satellite and environmental datasets and developed agentic AI insights using GBIF species and vegetation data.",
      "Automated SAP workflows, reducing manual effort by approximately 60%, and developed a RAG-based virtual assistant using Flask and Azure Search."
    ],
    tech: ["Azure AI Search", "RAG", "FastAPI", "Llama", "Flask", "Prompt Evaluation", "Geospatial AI", "GBIF"]
  }
];

export const projects = [
  {
    id: 6,
    title: "GenAI Use-Case Recommendation Platform",
    status: "In Progress",
    problem: "Enterprise teams need relevant use-case recommendations grounded in their data, with secure access to information across organizational levels.",
    solution: "Implemented an end-to-end RAG solution using Amazon Bedrock, Titan Embeddings, PostgreSQL with pgvector, FastAPI, and AWS Lambda, with structured LLM outputs and deterministic fallbacks.",
    features: [
      "RAG-powered recommendations using Amazon Bedrock and Titan Embeddings",
      "PostgreSQL vector retrieval with pgvector",
      "Structured LLM outputs with deterministic fallbacks",
      "Cognito JWT authentication and role-based read/write permissions",
      "Hierarchical data scoping and access-request approvals",
      "AWS CDK infrastructure with Azure DevOps CI/CD"
    ],
    tech: ["Amazon Bedrock", "Titan Embeddings", "PostgreSQL", "pgvector", "FastAPI", "AWS Lambda", "Amazon Cognito", "AWS CDK", "Azure DevOps"],
    impact: "Provides secure, structured GenAI recommendations with authorization enforced throughout the application.",
    architecture: "Authenticated request → Role and scope authorization → RAG retrieval → Bedrock generation → Structured output and deterministic fallback",
    screenshots: []
  },
  {
    id: 1,
    title: "Geospatial BNG Scoring & Ecological Insights",
    status: "Completed",
    problem: "Assessing biodiversity impact requires analyzing satellite and environmental datasets to evaluate Biodiversity Net Gain (BNG) and ecological conditions.",
    solution: "Designed BNG scoring logic using satellite and environmental datasets and developed an agentic AI system using GBIF species and vegetation data to generate region-specific ecological insights and restoration recommendations.",
    features: [
      "BNG scoring logic based on satellite and environmental datasets",
      "GBIF species and vegetation data analysis",
      "Agentic AI-generated ecological insights",
      "Region-specific restoration recommendations"
    ],
    tech: ["Satellite Data", "Environmental Data", "GBIF", "Agentic AI"],
    impact: "Supports biodiversity assessment and region-specific ecological restoration planning.",
    architecture: "Satellite and environmental datasets → BNG scoring logic → GBIF-informed agentic ecological insights",
    screenshots: []
  },
  {
    id: 2,
    title: "Agentic RAG Automation System",
    status: "Completed",
    problem: "Enterprise systems need intelligent document retrieval with autonomous task planning and structured output generation.",
    solution: "Built and productionized an agentic RAG system using Azure AI Search for intelligent document retrieval, task planning, and enhanced decision-making.",
    features: [
      "Intelligent document retrieval with Azure AI Search",
      "Agentic task planning and decision-making",
      "Prompt engineering and hallucination control",
      "Output validation for improved response reliability"
    ],
    tech: ["Azure AI Search", "RAG", "LangChain"],
    impact: "Improves document retrieval and decision-making with validated, more reliable responses.",
    architecture: "User query → Agentic task planning → Azure AI Search retrieval → Response validation",
    screenshots: []
  },
  {
    id: 3,
    title: "AI-Driven Test Case Generation Platform",
    status: "Completed",
    problem: "Creating software test cases manually can be time-consuming and requires consistent, useful outputs.",
    solution: "Developed an AI-driven test case generation platform using FastAPI and Llama-based GenAI, with prompt tuning and evaluation frameworks to improve output quality and consistency.",
    features: [
      "Llama-based test case generation",
      "FastAPI application backend",
      "Prompt tuning to improve output quality",
      "Evaluation frameworks for output consistency"
    ],
    tech: ["FastAPI", "Llama", "Prompt Engineering", "LLM Evaluation"],
    impact: "Improves the quality and consistency of AI-generated test cases through prompt tuning and evaluation.",
    architecture: "Test input → Llama-based generation → Prompt tuning and evaluation → Test cases",
    screenshots: []
  },
  {
    id: 4,
    title: "GenAI Virtual Assistant Enhancement",
    status: "Completed",
    problem: "Virtual assistants need advanced capabilities for text generation, image processing, and contextual document analysis.",
    solution: "Integrated enterprise-grade RAG with Azure Search and vector embeddings to enhance virtual assistant workflows.",
    features: [
      "Azure AI Search retrieval",
      "RAG pipeline",
      "Context-aware responses",
      "Document intelligence",
      "Intent understanding",
      "Enterprise knowledge retrieval"
    ],
    tech: ["Flask", "Azure Search", "Vector Embeddings", "Azure OpenAI"],
    impact: "Provides a RAG-based virtual assistant using Azure Search for contextual knowledge retrieval.",
    architecture: "User query → Intent detection → RAG retrieval → Response generation → Validation",
    screenshots: []
  },
];

export const caseStudies = [
  {
    id: 1,
    projectId: 1,
    title: "Geospatial AI for Biodiversity Assessment",
    problem: "Organizations struggle to assess biodiversity impact and make data-driven ecological improvement decisions. Traditional methods are manual, inconsistent, and lack actionable recommendations.",
    approach: "Designed BNG scoring logic from satellite and environmental datasets and developed agentic AI insights using GBIF species and vegetation data to inform restoration recommendations.",
    architecture: {
      description: "Combines satellite and environmental data for BNG scoring with GBIF-informed agentic ecological insights.",
      components: [
        "Satellite and environmental datasets",
        "BNG scoring logic",
        "GBIF species and vegetation analysis",
        "Region-specific ecological insights and restoration recommendations"
      ],
    },
    tradeoffs: [
      "Grounded scoring logic in satellite and environmental datasets.",
      "Used GBIF species and vegetation data to support region-specific ecological insights."
    ],
    results: "Supports Biodiversity Net Gain assessment and region-specific ecological restoration recommendations."
  },
  {
    id: 2,
    projectId: 2,
    title: "Enterprise Agentic RAG - Autonomous Document Intelligence System",
    problem: "Enterprise teams spend significant time manually searching through documents, extracting insights, and formatting outputs for downstream systems. Traditional keyword search is insufficient for complex queries.",
    approach: "Built an agentic RAG system with Azure AI Search that autonomously plans tasks, retrieves relevant information, and generates structured outputs with automatic validation and persistence.",
    architecture: {
      description: "Agentic retrieval workflow with task planning and validation to support reliable document-based decision-making.",
      components: [
        "Azure AI Search for intelligent document retrieval",
        "Agentic task planning",
        "Prompt engineering and hallucination control",
        "Output validation"
      ]
    },
    tradeoffs: [
      "Combined retrieval with agentic planning to support enhanced decision-making.",
      "Added hallucination control and output validation to improve response reliability."
    ],
    results: "Improves document retrieval, task planning, and response reliability through validation."
  }
];

export const certifications = [
  "Azure AI Fundamentals (AI-900)",
  "Azure AI Associate (AI-102)"
];

export const awards = [
  "Innovation Award",
  "Rockstar Award – Capgemini"
];

export const education = {
  institution: "Vidyalankar Institute of Technology, Mumbai",
  degree: "B.E. in Electronics",
  duration: "August 2018 - June 2022",
  cgpa: "8.57/10"
};

export const whyHireMe = [
  {
    title: "Production-Grade GenAI",
    description: "Experience building and productionizing LLM applications, RAG pipelines, and agentic AI solutions for enterprise use cases."
  },
  {
    title: "End-to-End AI Engineering",
    description: "Hands-on experience across Python, FastAPI, LLM application development, retrieval, evaluation, and cloud services."
  },
  {
    title: "Reliable AI Workflows",
    description: "Applies prompt engineering, hallucination control, guardrails, and output validation to improve response reliability."
  },
  {
    title: "Azure & AWS",
    description: "Develops cloud-based GenAI applications using services across Azure and AWS."
  },
  {
    title: "Evaluation & Optimization",
    description: "Uses LLM evaluation, prompt optimization, and structured output validation to improve application quality."
  }
];
