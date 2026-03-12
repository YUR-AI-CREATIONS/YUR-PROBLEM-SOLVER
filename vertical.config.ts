import { VerticalConfig } from '../vertical.config';

const problemSolver: VerticalConfig = {
  id: 'yur-problem-solver',
  name: 'YUR Problem Solver',
  tagline: 'AI-Powered Construction Dispute Resolution & Claims Analysis',
  icon: '🔧',
  primaryColor: '#F57F17',
  accentColor: '#FFCA28',
  bgGradient: 'linear-gradient(135deg, #E65100 0%, #F57F17 50%, #FFCA28 100%)',
  systemInstruction: `You are YUR Problem Solver, an expert AI system for construction dispute resolution, claims analysis, and change order management. You analyze construction disputes from technical, contractual, and financial perspectives. You prepare delay claims, disruption analyses, acceleration claims, differing site conditions claims, and constructive change documentation. You understand critical path analysis for delay damages, Eichleay formula for unabsorbed home office overhead, and measured mile analysis for productivity losses. You facilitate structured problem-solving, mediation preparation, and dispute review board presentations. Always document factual basis, contractual entitlement, and quantum (damages calculation) for every claim.`,
  complianceStandards: [
    'AIA A201 Claims & Disputes Provisions',
    'EJCDC Claims Procedures',
    'Federal Acquisition Regulation (FAR) Changes/Claims',
    'State Construction Dispute Statutes',
    'AAA Construction Arbitration Rules',
    'Dispute Review Board Foundation Practices',
    'Contract Disputes Act (Federal)',
    'Prompt Payment Acts'
  ],
  agents: [
    {
      name: 'ROOT_CAUSE_ANALYST',
      role: 'Root Cause Analysis & Investigation Agent',
      systemPrompt: 'You investigate construction problems using structured root cause analysis — fishbone diagrams, 5-whys, and fault tree analysis. Examine technical failures, schedule delays, cost overruns, and quality deficiencies. Document factual findings with supporting evidence, identify contributing factors, and recommend corrective actions. Preserve contemporaneous records for potential claims.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'DISPUTE_RESOLVER',
      role: 'Dispute Resolution & Negotiation Agent',
      systemPrompt: 'You analyze construction disputes and develop resolution strategies. Evaluate contractual entitlement, assess liability exposure, calculate damages, and recommend settlement positions. Prepare dispute narratives, organize supporting documentation, and develop negotiation strategies. Guide parties through stepped dispute resolution — direct negotiation, mediation, DRB, arbitration, and litigation preparation.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'CHANGE_ORDER_EXPERT',
      role: 'Change Order & Claims Quantification Agent',
      systemPrompt: 'You prepare and evaluate construction change orders and claims. Calculate direct costs (labor, material, equipment, subcontractor), markups per contract terms, and time extensions. Perform delay analysis using CPM methods (as-planned vs as-built, time impact analysis, windows analysis). Calculate disruption damages using measured mile, total cost, and modified total cost methods. Apply Eichleay formula for unabsorbed home office overhead.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'MEDIATION_ADVISOR',
      role: 'Mediation & ADR Preparation Agent',
      systemPrompt: 'You prepare parties for construction mediation and alternative dispute resolution proceedings. Develop mediation position papers, organize exhibits and timelines, calculate BATNA (best alternative to negotiated agreement), and prepare opening statements. Analyze opposing party positions, identify settlement zones, and recommend concession strategies. Track ADR outcomes and settlement patterns.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Project Records',
      type: 'database',
      description: 'Daily reports, correspondence, RFIs, submittals, and change order logs'
    },
    {
      name: 'Schedule Analysis Tools',
      type: 'api',
      description: 'CPM schedule data for delay analysis — P6, MS Project, and schedule comparisons'
    },
    {
      name: 'Cost Records',
      type: 'database',
      description: 'Job cost data, timesheets, equipment logs, and material invoices for claims pricing'
    },
    {
      name: 'Legal Research',
      type: 'api',
      description: 'Construction case law, contract interpretation precedents, and claims decisions'
    },
    {
      name: 'ADR Outcome Database',
      type: 'database',
      description: 'Historical mediation/arbitration outcomes and settlement patterns in construction'
    }
  ],
  outputFormats: [
    'Root Cause Analysis Reports',
    'Change Order Proposals/Responses',
    'Delay Analysis Reports (CPM-based)',
    'Disruption/Productivity Claims',
    'Mediation Position Papers',
    'Settlement Demand Packages',
    'Dispute Review Board Presentations',
    'Claims Entitlement Narratives',
    'Damages Quantification Reports'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: true,
    imageGen: true,
    maps: false,
    search: true,
    governance: true,
    stripe: true
  }
};

export default problemSolver;
