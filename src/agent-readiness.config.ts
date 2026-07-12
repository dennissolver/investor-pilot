import type { AgentReadinessConfig } from "@caistech/webmcp-kit";

// PRODUCT_STANDARDS §11 Layer 1 (DISCOVERABLE). Drives /llms.txt, landing JSON-LD, /.well-known/agent.json.
export const agentConfig: AgentReadinessConfig = {
  "name": "InvestorPilot",
  "displayName": "InvestorPilot — Multi-channel direct outreach platform",
  "url": "https://investor-pilot-pi.vercel.app",
  "description": "Discover, score, draft, approve, and send across LinkedIn and email from one workspace. Compliance-aware, audit-logged, operator-controlled — direct outreach for investor and partner discovery.",
  "applicationCategory": "BusinessApplication",
  "keyPages": [
    {
      "title": "Pricing",
      "url": "/pricing",
      "description": "Plans and tiers"
    },
    {
      "title": "Playbook",
      "url": "/playbook",
      "description": "How the outreach workflow runs"
    },
    {
      "title": "Demo",
      "url": "/demo"
    },
    {
      "title": "About",
      "url": "/about"
    },
    {
      "title": "Contact",
      "url": "/contact"
    }
  ],
  "provider": {
    "name": "Global Buildtech Australia Pty Ltd",
    "url": "https://corporateaisolutions.com",
    "legalId": "ABN 54 672 395 685"
  },
  "contactEmail": "dennis@corporateaisolutions.com"
};
