// Mock data for portfolio - will be replaced with backend integration later

export const personalInfo = {
  name: "Sarvesh Pawar",
  role: "Generative AI Engineer",
  tagline: "LLM, RAG & Agentic Systems",
  headline: "Building production-grade AI systems that solve real-world problems",
  bio: "Generative AI Engineer with 3+ years of experience building production-grade LLM applications, RAG systems, and agentic AI workflows across cloud-native environments (Azure & AWS). Specialized in designing intelligent retrieval pipelines, scalable FastAPI services, and autonomous agents for enterprise use cases.",
  email: "sarveshpawar06@gmail.com",
  phone: "+91 XXXXX XXXXX",
  location: "India",
  linkedin: "https://linkedin.com/in/sarveshpawar-genai",
  // github: "https://github.com/sarveshpawar",
  resumeUrl: "/resume.pdf"
};

export const skillsData = {
  "LLM & GenAI": [
    "Azure OpenAI",
    "Llama Models",
    "RAG Systems",
    "Prompt Engineering",
    "Agentic AI",
    "LangChain",
    "Knowledge Graphs",
    "Geospatial AI"
  ],
  "Backend Engineering": [
    "Python",
    "FastAPI",
    "Flask",
    "Async REST APIs",
    "Microservices",
    "Config-driven Pipelines"
  ],
  "Vector Search & Retrieval": [
    "Azure AI Search",
    "Embeddings",
    "Hybrid Search",
    "Document Chunking",
    "Structured Outputs"
  ],
  "Cloud & MLOps": [
    "Azure AI Foundry",
    "Cosmos DB",
    "Azure Functions",
    "AWS Lambda",
    "Textract",
    "S3",
    "MLflow",
    "Galileo"
  ],
  "DevOps & Tools": [
    "Docker",
    "Git",
    "CI/CD",
    "Streamlit",
    "Jupyter",
    "PyTorch",
    "Hugging Face"
  ]
};

export const experience = [
  {
    id: 1,
    company: "Capgemini",
    role: "Senior Software Engineer",
    duration: "July 2024 - Present",
    location: "India",
    achievements: [
      "Leading development of Synapse Earth - Geospatial BNG Scoring System using satellite data and AI",
      "Built Agentic RAG Automation System with Azure AI Search and Cosmos DB",
      "Implemented on-prem GenAI solutions using Llama3.2-3B-Instruct with 4-bit quantization",
      "Designed enterprise-grade RAG using Azure Search and vector embeddings"
    ],
    tech: ["Azure OpenAI", "FastAPI", "LangChain", "Cosmos DB", "PyTorch"]
  },
  {
    id: 2,
    company: "Capgemini",
    role: "Software Engineer",
    duration: "January 2023 - June 2024",
    location: "India",
    achievements: [
      "Built AI-driven test case generation platform with FastAPI and React",
      "Automated SAP workflows using Robot Framework, reducing manual effort by 60%",
      "Developed serverless document processing pipeline using AWS Lambda and Textract",
      "Delivered responsive web applications with AI personalization features"
    ],
    tech: ["FastAPI", "React", "AWS Lambda", "Textract", "Robot Framework"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Synapse Earth - Geospatial BNG Scoring System",
    status: "Completed",
    problem: "Need to assess biodiversity impact using satellite and environmental datasets and provide actionable ecological restoration recommendations to improve Biodiversity Net Gain (BNG) scores",
    solution: "Designed and implemented a geospatial AI platform that processes satellite and environmental datasets, computes BNG scores, and generates region-specific biodiversity improvement recommendations using ecological intelligence.",
    features: [
      "Satellite and environmental data ingestion",
      "Geospatial preprocessing pipelines",
      "BNG score computation engine",
      "GBIF species and vegetation analysis",
      "Region-specific ecological recommendations",
      "Biodiversity restoration planning"
    ],
    tech: ["Geospatial Processing", "Agentic AI", "Python", "FastAPI", "Google Gemini", "LangChain"],
    impact: "Enables data-driven ecological improvement decisions for sustainability initiatives",
    architecture: "Geospatial data ingestion → Parameter extraction → BNG scoring → AI recommendation engine",
    screenshots: []
  },
  {
    id: 2,
    title: "Agentic RAG Automation System",
    status: "Completed",
    problem: "Enterprise systems need intelligent document retrieval with autonomous task planning and structured output generation.",
    solution: "Built an AI Foundry Agent integrated with Azure AI Search for intelligent retrieval, autonomous task planning, and auto-persistence to Cosmos DB.",
    features: [
      "Intelligent document retrieval with hybrid search",
      "Autonomous task planning and execution",
      "Structured output validation and formatting",
      "Auto-persistence to Cosmos DB for downstream consumption",
      "MCP-based design for agent context sharing",
      "Knowledge graph integration for enhanced reasoning"
    ],
    tech: ["Azure AI Search", "FastAPI", "Cosmos DB", "LangChain", "Knowledge Graphs"],
    impact: "Reduced manual document analysis time by 75% and improved accuracy of insights",
    architecture: "User prompt → Agent planning → Azure AI Search → Output validation → Cosmos DB",
    screenshots: []
  },
  {
    id: 3,
    title: "On-Prem Generative AI Solutions",
    status: "Completed",
    problem: "Enterprise clients need on-premises GenAI capabilities for automated test generation without external API dependencies.",
    solution: "Implemented Llama3.2-3B-Instruct with 4-bit quantization to generate automated test cases and scripts locally.",
    features: [
      "4-bit quantized LLM for efficient on-prem deployment",
      "Automated test case generation for Java, Python, JavaScript",
      "CSV-based test suite outputs",
      "Prompt quality evaluation using Galileo",
      "Model lifecycle management with MLflow",
      "Config-driven pipeline via Streamlit"
    ],
    tech: ["Llama3.2", "PyTorch", "Hugging Face", "MLflow", "Galileo", "Streamlit"],
    impact: "Enabled secure on-prem GenAI capabilities, reducing test creation time by 80%",
    architecture: "Code input → Llama3.2 inference → Test generation → Quality evaluation → MLflow tracking",
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
    impact: "Improved response accuracy by 60% and reduced query resolution time",
    architecture: "User query → Intent detection → RAG retrieval → Response generation → Validation",
    screenshots: []
  },
  {
    id: 5,
    title: "Serverless Document Processing Pipeline",
    status: "Completed",
    problem: "Manual document processing is time-consuming and error-prone for large-scale enterprise workflows.",
    solution: "Built a serverless pipeline using AWS Lambda and Textract for automated text extraction and processing.",
    features: [
      "Automated text extraction from various document formats",
      "Serverless architecture for scalability",
      "S3 integration for data storage",
      "Real-time processing triggers",
      "High availability and traceability"
    ],
    tech: ["AWS Lambda", "Textract", "S3", "Python"],
    impact: "Processed 10,000+ documents monthly with 99.5% accuracy",
    architecture: "S3 upload trigger → Lambda function → Textract extraction → Data storage",
    screenshots: []
  }
];

export const caseStudies = [
  {
    id: 1,
    projectId: 1,
    title: "Synapse Earth - Building a Geospatial AI Platform for Biodiversity Assessment",
    problem: "Organizations struggle to assess biodiversity impact and make data-driven ecological improvement decisions. Traditional methods are manual, inconsistent, and lack actionable recommendations.",
    approach: "Designed a comprehensive geospatial AI platform that leverages satellite data, environmental parameters, and agentic AI to automate BNG scoring and generate contextual recommendations.",
    architecture: {
      description: "Multi-stage pipeline with geospatial data ingestion, parameter extraction, scoring computation, and AI-powered recommendation generation.",
      components: [
        "Satellite and environmental data ingestion",
        "Geospatial preprocessing pipelines",
        "BNG score computation engine",
        "GBIF species and vegetation analysis",
        "Region-specific ecological recommendations",
        "Biodiversity restoration planning"
      ],
    },
    tradeoffs: [
      "Chose GEE over custom satellite data pipeline for faster development",
      "Implemented agentic approach vs rule-based for more contextual recommendations",
      "Used Azure VM for scalability despite higher initial cost"
    ],
    results: "Platform enables automated BNG assessment with AI-powered improvement strategies, reducing manual analysis time from weeks to minutes."
  },
  {
    id: 2,
    projectId: 2,
    title: "Enterprise Agentic RAG - Autonomous Document Intelligence System",
    problem: "Enterprise teams spend significant time manually searching through documents, extracting insights, and formatting outputs for downstream systems. Traditional keyword search is insufficient for complex queries.",
    approach: "Built an agentic RAG system with Azure AI Search that autonomously plans tasks, retrieves relevant information, and generates structured outputs with automatic validation and persistence.",
    architecture: {
      description: "Agent-driven pipeline with intelligent retrieval, task planning, output structuring, and auto-persistence.",
      components: [
        "Azure AI Foundry Agent for autonomous planning",
        "Azure AI Search with hybrid retrieval",
        "FastAPI service layer",
        "Output validation and formatting engine",
        "Cosmos DB for structured persistence",
        "Knowledge graph for entity relationships"
      ]
    },
    tradeoffs: [
      "Chose agentic approach over traditional RAG for better task automation",
      "Implemented structured output validation to ensure reliability",
      "Used MCP pattern for agent context sharing vs custom solution"
    ],
    results: "75% reduction in manual document analysis time, improved accuracy and reliability through structured outputs, seamless integration with downstream systems."
  }
];

export const certifications = [
  "Azure AI Fundamentals (AI-900)",
  "Azure Fundamentals (AZ-900)",
  "PCEP – Python Certified Entry-Level Programmer"
];

export const awards = [
  "Innovation Award – Sogeti (Data & AI Practice)",
  "Rockstar Award – Capgemini"
];

export const education = {
  institution: "Vidyalankar Institute of Technology, Mumbai",
  degree: "Bachelor of Technology in Electronics",
  duration: "2018 - 2022",
  cgpa: "8.57/10"
};

export const whyHireMe = [
  {
    title: "Production-Grade AI Systems",
    description: "Not just POCs - I build scalable, reliable LLM applications that handle real production workloads with proper error handling, monitoring, and evaluation."
  },
  {
    title: "Full-Stack AI Engineering",
    description: "From model selection and prompt engineering to FastAPI backends and cloud deployment - I handle the entire AI system lifecycle."
  },
  {
    title: "Agentic AI Expertise",
    description: "Deep experience in building autonomous agents with planning, reasoning, and tool use capabilities for complex enterprise workflows."
  },
  {
    title: "Cloud-Native Architecture",
    description: "Extensive hands-on experience with Azure and AWS, designing scalable microservices and serverless architectures for AI workloads."
  },
  {
    title: "Data-Driven Approach",
    description: "Strong focus on evaluation, monitoring, and continuous improvement using tools like MLflow and Galileo for prompt quality assessment."
  }
];
