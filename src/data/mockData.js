// ─── USERS ──────────────────────────────────────────────────────────────────
export const USERS = [
  { id: 'u1', fullName: 'Jane Smith', email: 'jane.smith@company.com', role: 'Risk Champion', avatar: 'JS', status: 'Active' },
  { id: 'u2', fullName: 'Michael Chen', email: 'm.chen@company.com', role: 'Risk Owner', avatar: 'MC', status: 'Active' },
  { id: 'u3', fullName: 'Sarah Johnson', email: 's.johnson@company.com', role: 'Control Owner', avatar: 'SJ', status: 'Active' },
  { id: 'u4', fullName: 'David Okafor', email: 'd.okafor@company.com', role: 'EXHo', avatar: 'DO', status: 'Active' },
  { id: 'u5', fullName: 'Lisa Wang', email: 'l.wang@company.com', role: 'Risk Owner', avatar: 'LW', status: 'Active' },
  { id: 'u6', fullName: 'Tom Adeyemi', email: 't.adeyemi@company.com', role: 'EXCO', avatar: 'TA', status: 'Active' },
  { id: 'u7', fullName: 'Admin User', email: 'admin@company.com', role: 'Admin', avatar: 'AU', status: 'Active' },
  { id: 'u8', fullName: 'Priya Nair', email: 'p.nair@company.com', role: 'Risk Champion', avatar: 'PN', status: 'Active' },
];

// ─── AUTH ACCOUNTS (email → password) ───────────────────────────────────────
export const AUTH_ACCOUNTS = {
  'jane.smith@company.com': { password: 'password123', userId: 'u1' },
  'm.chen@company.com': { password: 'password123', userId: 'u2' },
  's.johnson@company.com': { password: 'password123', userId: 'u3' },
  'd.okafor@company.com': { password: 'password123', userId: 'u4' },
  'admin@company.com': { password: 'admin123', userId: 'u7' },
};

// ─── ROLES ───────────────────────────────────────────────────────────────────
export const ROLES = [
  { id: 'r1', roleName: 'Risk Owner', roleCode: 'RISK_OWNER', description: 'Owns the LOS; approves publication; receives workflow tasks' },
  { id: 'r2', roleName: 'Risk Champion', roleCode: 'RISK_CHAMPION', description: 'Supports risk owner; inputs Risk Assessment data' },
  { id: 'r3', roleName: 'Control Owner', roleCode: 'CONTROL_OWNER', description: 'Responsible for control effectiveness; action-plan assignee' },
  { id: 'r4', roleName: 'EXHo', roleCode: 'EXHO', description: 'Governance oversight; final sign-off authority' },
  { id: 'r5', roleName: 'EXCO', roleCode: 'EXCO', description: 'Committee-level review of published LOS' },
  { id: 'r6', roleName: 'Admin', roleCode: 'ADMIN', description: 'Backend master-data management; user provisioning' },
];

// ─── LOCAL MARKETS ────────────────────────────────────────────────────────────
export const LOCAL_MARKETS = [
  { id: 'm1', marketCode: 'SG', marketName: 'Singapore', region: 'Asia Pacific', marketType: 'Market', status: 'Active' },
  { id: 'm2', marketCode: 'ZA', marketName: 'South Africa', region: 'Africa', marketType: 'Market', status: 'Active' },
  { id: 'm3', marketCode: 'NG', marketName: 'Nigeria', region: 'Africa', marketType: 'Market', status: 'Active' },
  { id: 'm4', marketCode: 'KE', marketName: 'Kenya', region: 'Africa', marketType: 'Market', status: 'Active' },
  { id: 'm5', marketCode: 'MY', marketName: 'Malaysia', region: 'Asia Pacific', marketType: 'Market', status: 'Active' },
  { id: 'm6', marketCode: 'GRP', marketName: 'Group', region: 'Global', marketType: 'Group', status: 'Active' },
  { id: 'm7', marketCode: 'GH', marketName: 'Ghana', region: 'Africa', marketType: 'Market', status: 'Active' },
];

// ─── RISK CATEGORIES ──────────────────────────────────────────────────────────
export const RISK_CATEGORIES = [
  { id: 'rc1', categoryName: 'Operational Risk', categoryCode: 'OPR', status: 'Active' },
  { id: 'rc2', categoryName: 'Credit Risk', categoryCode: 'CRD', status: 'Active' },
  { id: 'rc3', categoryName: 'Market Risk', categoryCode: 'MKT', status: 'Active' },
  { id: 'rc4', categoryName: 'Liquidity Risk', categoryCode: 'LIQ', status: 'Active' },
  { id: 'rc5', categoryName: 'Compliance Risk', categoryCode: 'CMP', status: 'Active' },
];

// ─── RISKS ────────────────────────────────────────────────────────────────────
export const RISKS = [
  {
    id: 'risk1',
    riskCode: 'OPR-001',
    riskName: 'Operational Resilience Risk',
    riskDescription: 'Risk of disruption to critical business services due to operational failures, technology outages, or third-party dependencies.',
    riskCategoryId: 'rc1',
    riskAppetiteStatement: 'The organisation has a low appetite for operational resilience risk. We expect critical business services to be maintained within agreed tolerances. Any disruption exceeding defined impact tolerances must be reported and remediated within defined timeframes.',
    parentRiskId: null,
    tierLevel: 1,
    status: 'Active',
    ownerIds: ['u2', 'u5'],
    championIds: ['u1', 'u8'],
  },
  {
    id: 'risk2',
    riskCode: 'OPR-001-01',
    riskName: 'Technology & Systems Failure',
    riskDescription: 'Risk of core banking and technology system outages affecting customer-facing and internal operations.',
    riskCategoryId: 'rc1',
    riskAppetiteStatement: '',
    parentRiskId: 'risk1',
    tierLevel: 2,
    status: 'Active',
    ownerIds: ['u3'],
    championIds: ['u1'],
  },
  {
    id: 'risk3',
    riskCode: 'OPR-001-02',
    riskName: 'Third-Party & Outsourcing Risk',
    riskDescription: 'Risk arising from reliance on external service providers and outsourced functions.',
    riskCategoryId: 'rc1',
    riskAppetiteStatement: '',
    parentRiskId: 'risk1',
    tierLevel: 2,
    status: 'Active',
    ownerIds: ['u3'],
    championIds: ['u8'],
  },
  {
    id: 'risk4',
    riskCode: 'OPR-001-03',
    riskName: 'Cyber Security Incident',
    riskDescription: 'Risk of unauthorized access, data breach, or cyber-attack compromising systems or data.',
    riskCategoryId: 'rc1',
    riskAppetiteStatement: '',
    parentRiskId: 'risk1',
    tierLevel: 2,
    status: 'Active',
    ownerIds: ['u5'],
    championIds: ['u1'],
  },
  {
    id: 'risk5',
    riskCode: 'CRD-001',
    riskName: 'Credit Concentration Risk',
    riskDescription: 'Risk arising from concentration of credit exposure to single counterparties, sectors or geographies.',
    riskCategoryId: 'rc2',
    riskAppetiteStatement: 'The organisation maintains a moderate appetite for credit risk within defined concentration limits.',
    parentRiskId: null,
    tierLevel: 1,
    status: 'Active',
    ownerIds: ['u2'],
    championIds: ['u8'],
  },
  {
    id: 'risk6',
    riskCode: 'CMP-001',
    riskName: 'Regulatory Compliance Risk',
    riskDescription: 'Risk of failing to comply with laws, regulations, and regulatory requirements across operating jurisdictions.',
    riskCategoryId: 'rc5',
    riskAppetiteStatement: 'Zero tolerance for deliberate non-compliance. Systemic compliance failures are unacceptable.',
    parentRiskId: null,
    tierLevel: 1,
    status: 'Active',
    ownerIds: ['u5'],
    championIds: ['u1'],
  },
];

// ─── IMPACT CATEGORIES ────────────────────────────────────────────────────────
export const IMPACT_CATEGORIES = [
  { id: 'ic1', categoryName: 'Financial', categoryCode: 'FIN', sortOrder: 1, status: 'Active' },
  { id: 'ic2', categoryName: 'Operational', categoryCode: 'OPS', sortOrder: 2, status: 'Active' },
  { id: 'ic3', categoryName: 'Regulatory', categoryCode: 'REG', sortOrder: 3, status: 'Active' },
  { id: 'ic4', categoryName: 'Reputational', categoryCode: 'REP', sortOrder: 4, status: 'Active' },
];

// ─── IMPACT TABLE RATIONALES (ITR) ────────────────────────────────────────────
export const IMPACT_TABLE_RATIONALES = [
  // Financial
  { id: 'itr1', impactCategoryId: 'ic1', marketId: 'm1', impactDescription: 'Direct financial loss exceeding USD 10M from operational failure', impactRating: 'High', riskRating: 'High', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 1, status: 'Active' },
  { id: 'itr2', impactCategoryId: 'ic1', marketId: 'm1', impactDescription: 'Revenue loss from customer attrition due to service disruption', impactRating: 'Medium', riskRating: 'Medium', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 2, status: 'Active' },
  { id: 'itr3', impactCategoryId: 'ic1', marketId: 'm1', impactDescription: 'Fines and penalties from regulatory breach', impactRating: 'High', riskRating: 'High', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 3, status: 'Active' },
  { id: 'itr4', impactCategoryId: 'ic1', marketId: 'm1', impactDescription: 'Increased cost of remediation and recovery activities', impactRating: 'Medium', riskRating: 'Low', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 4, status: 'Active' },
  { id: 'itr5', impactCategoryId: 'ic1', marketId: 'm1', impactDescription: 'Market value impact from adverse credit events', impactRating: 'Low', riskRating: 'Low', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 5, status: 'Active' },
  // Operational
  { id: 'itr6', impactCategoryId: 'ic2', marketId: 'm1', impactDescription: 'Disruption to critical payment processing services (> 4 hours)', impactRating: 'High', riskRating: 'High', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 1, status: 'Active' },
  { id: 'itr7', impactCategoryId: 'ic2', marketId: 'm1', impactDescription: 'Loss of key personnel or operational capacity', impactRating: 'Medium', riskRating: 'Medium', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 2, status: 'Active' },
  { id: 'itr8', impactCategoryId: 'ic2', marketId: 'm1', impactDescription: 'Third-party service provider outage impacting core operations', impactRating: 'High', riskRating: 'High', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 3, status: 'Active' },
  { id: 'itr9', impactCategoryId: 'ic2', marketId: 'm1', impactDescription: 'Data integrity failure affecting customer records', impactRating: 'Medium', riskRating: 'Medium', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 4, status: 'Active' },
  // Regulatory
  { id: 'itr10', impactCategoryId: 'ic3', marketId: 'm1', impactDescription: 'Breach of MAS Technology Risk Management Guidelines', impactRating: 'High', riskRating: 'High', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 1, status: 'Active' },
  { id: 'itr11', impactCategoryId: 'ic3', marketId: 'm1', impactDescription: 'Failure to meet PDPA data protection obligations', impactRating: 'High', riskRating: 'Medium', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 2, status: 'Active' },
  { id: 'itr12', impactCategoryId: 'ic3', marketId: 'm1', impactDescription: 'Non-compliance with outsourcing notification requirements', impactRating: 'Medium', riskRating: 'Low', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 3, status: 'Active' },
  // Reputational
  { id: 'itr13', impactCategoryId: 'ic4', marketId: 'm1', impactDescription: 'Negative media coverage due to major service outage', impactRating: 'High', riskRating: 'High', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 1, status: 'Active' },
  { id: 'itr14', impactCategoryId: 'ic4', marketId: 'm1', impactDescription: 'Loss of customer trust following data breach', impactRating: 'High', riskRating: 'High', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 2, status: 'Active' },
  { id: 'itr15', impactCategoryId: 'ic4', marketId: 'm1', impactDescription: 'Regulatory public censure or enforcement action', impactRating: 'Medium', riskRating: 'Medium', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 3, status: 'Active' },
  { id: 'itr16', impactCategoryId: 'ic4', marketId: 'm1', impactDescription: 'Social media backlash affecting brand perception', impactRating: 'Low', riskRating: 'Low', guidanceDocumentUrl: '/docs/impact-guidance.pdf', sortOrder: 4, status: 'Active' },
];

// ─── CONTROLS ─────────────────────────────────────────────────────────────────
export const CONTROLS = [
  { id: 'ctrl1', controlCode: 'CTR-001', controlName: 'Business Continuity Management Framework', controlDescription: 'Comprehensive BCP/DRP framework with tested recovery procedures for critical systems.', controlType: 'Preventive', ownerIds: ['u3'], isKeyControl: true, applicableMarkets: ['m1', 'm2', 'm3'], riskIds: ['risk1', 'risk2'], scope: 'Both', source: 'Central', status: 'Active' },
  { id: 'ctrl2', controlCode: 'CTR-002', controlName: 'Cyber Security Monitoring & SIEM', controlDescription: '24/7 Security Operations Centre with SIEM platform for threat detection and response.', controlType: 'Detective', ownerIds: ['u3'], isKeyControl: true, applicableMarkets: ['m1'], riskIds: ['risk4'], scope: 'Group', source: 'Central', status: 'Active' },
  { id: 'ctrl3', controlCode: 'CTR-003', controlName: 'Third-Party Risk Management Process', controlDescription: 'Structured process for onboarding, monitoring, and offboarding third-party service providers.', controlType: 'Preventive', ownerIds: ['u3'], isKeyControl: false, applicableMarkets: ['m1', 'm5'], riskIds: ['risk3'], scope: 'Market', source: 'Central', status: 'Active' },
  { id: 'ctrl4', controlCode: 'CTR-004', controlName: 'Technology Change Management Controls', controlDescription: 'Change control procedures including testing, approval, and rollback mechanisms.', controlType: 'Preventive', ownerIds: ['u3'], isKeyControl: true, applicableMarkets: ['m1'], riskIds: ['risk2'], scope: 'Both', source: 'Central', status: 'Active' },
  { id: 'ctrl5', controlCode: 'CTR-005', controlName: 'Data Backup & Recovery Testing', controlDescription: 'Regular backup procedures with quarterly recovery testing to validate RTO/RPO targets.', controlType: 'Corrective', ownerIds: ['u3'], isKeyControl: false, applicableMarkets: ['m1', 'm2', 'm3', 'm4'], riskIds: ['risk2', 'risk4'], scope: 'Market', source: 'Ad-hoc', status: 'Active' },
  { id: 'ctrl6', controlCode: 'CTR-006', controlName: 'Incident Management & Escalation Framework', controlDescription: 'Structured incident classification, escalation, and resolution process with defined SLAs.', controlType: 'Corrective', ownerIds: ['u3'], isKeyControl: true, applicableMarkets: ['m1', 'm2'], riskIds: ['risk1'], scope: 'Both', source: 'Central', status: 'Active' },
  { id: 'ctrl7', controlCode: 'CTR-007', controlName: 'Regulatory Reporting & Compliance Monitoring', controlDescription: 'Automated regulatory reporting framework with compliance calendar and escalation alerts.', controlType: 'Detective', ownerIds: ['u3'], isKeyControl: false, applicableMarkets: ['m1'], riskIds: ['risk6'], scope: 'Market', source: 'Central', status: 'Active' },
  { id: 'ctrl8', controlCode: 'CTR-008', controlName: 'Information Security Awareness Training', controlDescription: 'Mandatory annual information security training with quarterly phishing simulations.', controlType: 'Preventive', ownerIds: ['u3'], isKeyControl: false, applicableMarkets: ['m1', 'm5'], riskIds: ['risk4'], scope: 'Both', source: 'Central', status: 'Active' },
];

// ─── KRI INDICATORS ───────────────────────────────────────────────────────────
export const KRI_INDICATORS = [
  { id: 'kri1', riskId: 'risk1', kriName: 'System Availability Rate (%)', desiredRange: '≥ 99.5%', escalationThreshold: '< 99.0%', status: 'Active' },
  { id: 'kri2', riskId: 'risk1', kriName: 'Mean Time to Recover (MTTR) - hours', desiredRange: '≤ 4 hours', escalationThreshold: '> 8 hours', status: 'Active' },
  { id: 'kri3', riskId: 'risk1', kriName: 'Number of Critical Incidents (monthly)', desiredRange: '≤ 2', escalationThreshold: '> 5', status: 'Active' },
  { id: 'kri4', riskId: 'risk1', kriName: 'Third-Party SLA Breaches (quarterly)', desiredRange: '0', escalationThreshold: '> 2', status: 'Active' },
  { id: 'kri5', riskId: 'risk4', kriName: 'Cyber Incident Rate (monthly)', desiredRange: '< 5', escalationThreshold: '> 10', status: 'Active' },
];

// ─── ASSESSMENT PERIODS ───────────────────────────────────────────────────────
export const ASSESSMENT_PERIODS = [
  { id: 'ap1', year: 2025, quarter: 1, startDate: '2025-01-01', endDate: '2025-03-31', isActive: false },
  { id: 'ap2', year: 2025, quarter: 2, startDate: '2025-04-01', endDate: '2025-06-30', isActive: true },
  { id: 'ap3', year: 2025, quarter: 3, startDate: '2025-07-01', endDate: '2025-09-30', isActive: false },
  { id: 'ap4', year: 2025, quarter: 4, startDate: '2025-10-01', endDate: '2025-12-31', isActive: false },
  { id: 'ap5', year: 2026, quarter: 1, startDate: '2026-01-01', endDate: '2026-03-31', isActive: false },
  { id: 'ap6', year: 2026, quarter: 2, startDate: '2026-04-01', endDate: '2026-06-30', isActive: true },
];

// ─── LOS RECORDS ──────────────────────────────────────────────────────────────
export const INITIAL_LOS_RECORDS = [
  {
    id: 'los1',
    losName: 'Market LOS – Q2 2025',
    losType: 'Market',
    riskId: 'risk1',
    marketId: 'm1',
    assessmentPeriodId: 'ap2',
    status: 'Draft',
    versionNumber: 1,
    createdBy: 'u1',
    createdAt: '2025-04-15T09:15:00Z',
    updatedBy: 'u1',
    updatedAt: '2025-05-20T10:30:00Z',
    ownerIds: ['u2', 'u5'],
    championIds: ['u1', 'u8'],
    overviewContent: '<p>This Line of Sight assessment covers the <strong>Operational Resilience Risk</strong> for the Singapore market for Q2 2025 (April – June 2025).</p><p>The assessment evaluates the effectiveness of controls in place to mitigate operational disruptions, technology failures, and third-party risks impacting critical business services.</p><ul><li>Assessment scope includes all critical business services as defined by MAS</li><li>Key focus areas: technology resilience, third-party dependencies, and cyber security posture</li><li>Assessment aligned with MAS Technology Risk Management Guidelines (2021)</li></ul>',
    scenarioText: 'A major cloud service provider experiences a multi-region outage lasting 48+ hours, simultaneously impacting core banking platform, payment processing systems, and customer digital channels. This coincides with a critical end-of-quarter settlement period. The incident triggers cascading failures across third-party integrations, preventing transaction processing for over 200,000 customers and resulting in regulatory breach of MAS mandated service availability thresholds.',
  },
  {
    id: 'los2',
    losName: 'Market LOS – Q1 2025',
    losType: 'Market',
    riskId: 'risk1',
    marketId: 'm1',
    assessmentPeriodId: 'ap1',
    status: 'Published',
    versionNumber: 2,
    createdBy: 'u1',
    createdAt: '2025-01-10T08:00:00Z',
    updatedBy: 'u2',
    updatedAt: '2025-03-28T15:45:00Z',
    ownerIds: ['u2'],
    championIds: ['u1'],
    overviewContent: '<p>Q1 2025 assessment for Operational Resilience Risk – Singapore market.</p>',
    scenarioText: '',
  },
  {
    id: 'los3',
    losName: 'Group LOS – Q2 2025',
    losType: 'Group',
    riskId: 'risk1',
    marketId: null,
    assessmentPeriodId: 'ap2',
    status: 'In Review',
    versionNumber: 1,
    createdBy: 'u2',
    createdAt: '2025-04-20T10:00:00Z',
    updatedBy: 'u2',
    updatedAt: '2025-05-18T09:20:00Z',
    ownerIds: ['u2'],
    championIds: ['u8'],
    overviewContent: '<p>Group-level Line of Sight assessment for Operational Resilience Risk, covering all markets for Q2 2025.</p>',
    scenarioText: 'Coordinated cyber attack targeting multiple markets simultaneously, compromising authentication systems across Africa and Asia Pacific regions.',
  },
  {
    id: 'los4',
    losName: 'Market LOS – Q2 2025',
    losType: 'Market',
    riskId: 'risk5',
    marketId: 'm2',
    assessmentPeriodId: 'ap2',
    status: 'Endorsed',
    versionNumber: 1,
    createdBy: 'u5',
    createdAt: '2025-04-18T11:00:00Z',
    updatedBy: 'u5',
    updatedAt: '2025-05-15T14:30:00Z',
    ownerIds: ['u2', 'u5'],
    championIds: ['u8'],
    overviewContent: '<p>Credit Concentration Risk assessment for South Africa market, Q2 2025.</p>',
    scenarioText: '',
  },
  {
    id: 'los5',
    losName: 'Market LOS – Q2 2025',
    losType: 'Market',
    riskId: 'risk6',
    marketId: 'm3',
    assessmentPeriodId: 'ap2',
    status: 'Closed',
    versionNumber: 3,
    createdBy: 'u5',
    createdAt: '2025-04-10T08:30:00Z',
    updatedBy: 'u5',
    updatedAt: '2025-05-25T16:00:00Z',
    ownerIds: ['u5'],
    championIds: ['u1'],
    overviewContent: '<p>Regulatory Compliance Risk assessment for Nigeria market, Q2 2025.</p>',
    scenarioText: '',
  },
  {
    id: 'los6',
    losName: 'Group LOS – Q1 2025',
    losType: 'Group',
    riskId: 'risk1',
    marketId: null,
    assessmentPeriodId: 'ap1',
    status: 'Published',
    versionNumber: 2,
    createdBy: 'u2',
    createdAt: '2025-01-05T09:00:00Z',
    updatedBy: 'u4',
    updatedAt: '2025-03-20T11:00:00Z',
    ownerIds: ['u2'],
    championIds: ['u8'],
    overviewContent: '<p>Group-level Q1 2025 Operational Resilience Risk assessment.</p>',
    scenarioText: 'Severe operational disruption scenario for group assessment.',
  },
];

// ─── LOS ASSESSMENT ITEMS (ITR assessments per LOS) ──────────────────────────
export const INITIAL_LOS_ASSESSMENT_ITEMS = [
  // los1 Financial
  { id: 'lai1', losId: 'los1', itrId: 'itr1', applicability: 'Applicable', reasonAndScope: 'Applicable given our critical payment processing volumes exceeding USD 5M daily. Direct financial exposure from prolonged outage is material.', updatedBy: 'u1', updatedAt: '2025-05-20T10:10:00Z' },
  { id: 'lai2', losId: 'los1', itrId: 'itr2', applicability: 'Applicable', reasonAndScope: 'Revenue at risk from customer churn estimated at 2-5% of quarterly revenue. Applicable as we operate retail banking services.', updatedBy: 'u1', updatedAt: '2025-05-20T10:10:00Z' },
  { id: 'lai3', losId: 'los1', itrId: 'itr3', applicability: 'Applicable', reasonAndScope: 'MAS has authority to impose fines under the Banking Act for significant breaches.', updatedBy: 'u1', updatedAt: '2025-05-20T10:10:00Z' },
  { id: 'lai4', losId: 'los1', itrId: 'itr4', applicability: 'Not Applicable', reasonAndScope: 'Remediation costs are within normal operating budget and not material to financial statements.', updatedBy: 'u1', updatedAt: '2025-05-20T09:45:00Z' },
  { id: 'lai5', losId: 'los1', itrId: 'itr5', applicability: 'Not Applicable', reasonAndScope: 'No direct credit exposure from operational resilience events in scope.', updatedBy: 'u1', updatedAt: '2025-05-20T09:45:00Z' },
  // los1 Operational
  { id: 'lai6', losId: 'los1', itrId: 'itr6', applicability: 'Applicable', reasonAndScope: 'Payment processing is a critical service per MAS CPS definition. Disruption over 4 hours triggers regulatory notification.', updatedBy: 'u1', updatedAt: '2025-05-20T09:45:00Z' },
  { id: 'lai7', losId: 'los1', itrId: 'itr7', applicability: 'Applicable', reasonAndScope: 'Key person dependencies identified in core technology team. BCP covers succession planning.', updatedBy: 'u1', updatedAt: '2025-05-20T09:45:00Z' },
  { id: 'lai8', losId: 'los1', itrId: 'itr8', applicability: 'Applicable', reasonAndScope: 'Three critical third-party providers identified as single points of failure.', updatedBy: 'u1', updatedAt: '2025-05-20T09:45:00Z' },
  { id: 'lai9', losId: 'los1', itrId: 'itr9', applicability: 'Not Applicable', reasonAndScope: 'Data integrity controls are separately assessed under the Data Management risk framework.', updatedBy: 'u1', updatedAt: '2025-05-20T09:45:00Z' },
  { id: 'lai10', losId: 'los1', itrId: 'itr10', applicability: 'Not Applicable', reasonAndScope: 'N/A', updatedBy: 'u1', updatedAt: '2025-05-19T16:20:00Z' },
  // los1 Regulatory
  { id: 'lai11', losId: 'los1', itrId: 'itr10', applicability: 'Applicable', reasonAndScope: 'MAS TRM Guidelines require notification within 1 hour of significant disruptions.', updatedBy: 'u1', updatedAt: '2025-05-19T16:20:00Z' },
  { id: 'lai12', losId: 'los1', itrId: 'itr11', applicability: 'Not Applicable', reasonAndScope: 'PDPA obligations are managed under the Data Privacy risk pillar.', updatedBy: 'u1', updatedAt: '2025-05-19T16:20:00Z' },
  { id: 'lai13', losId: 'los1', itrId: 'itr12', applicability: 'Not Applicable', reasonAndScope: 'All outsourcing arrangements have been pre-approved and notified to MAS.', updatedBy: 'u1', updatedAt: '2025-05-19T16:20:00Z' },
  // los1 Reputational
  { id: 'lai14', losId: 'los1', itrId: 'itr13', applicability: 'Applicable', reasonAndScope: 'Major service outage would attract media attention and potentially erode customer trust.', updatedBy: 'u1', updatedAt: '2025-05-19T15:15:00Z' },
  { id: 'lai15', losId: 'los1', itrId: 'itr14', applicability: 'Applicable', reasonAndScope: 'Data breach would significantly impact customer trust and market position.', updatedBy: 'u1', updatedAt: '2025-05-19T15:15:00Z' },
  { id: 'lai16', losId: 'los1', itrId: 'itr15', applicability: 'Not Applicable', reasonAndScope: 'Regulatory censure managed separately under compliance risk assessment.', updatedBy: 'u1', updatedAt: '2025-05-19T15:15:00Z' },
  { id: 'lai17', losId: 'los1', itrId: 'itr16', applicability: 'Not Applicable', reasonAndScope: 'Social media monitoring is a brand/marketing function outside operational risk scope.', updatedBy: 'u1', updatedAt: '2025-05-19T15:15:00Z' },
];

// ─── LOS CONTROLS ─────────────────────────────────────────────────────────────
export const INITIAL_LOS_CONTROLS = [
  { id: 'lc1', losId: 'los1', controlId: 'ctrl1', effectiveness: 'Effective', comments: 'BCP tested successfully in Q1 2025. Recovery time achieved within 2.5 hours, meeting 4-hour RTO.', isAdhoc: false, updatedBy: 'u3', updatedAt: '2025-05-20T10:00:00Z' },
  { id: 'lc2', losId: 'los1', controlId: 'ctrl2', effectiveness: 'Partially Effective', comments: 'SIEM platform operational but gap identified in detection rules for lateral movement attacks. Enhancement in progress.', isAdhoc: false, updatedBy: 'u3', updatedAt: '2025-05-20T09:00:00Z' },
  { id: 'lc3', losId: 'los1', controlId: 'ctrl3', effectiveness: 'Effective', comments: 'TPRM process fully implemented. All critical vendors assessed in Q1 2025.', isAdhoc: false, updatedBy: 'u3', updatedAt: '2025-05-19T14:00:00Z' },
  { id: 'lc4', losId: 'los1', controlId: 'ctrl4', effectiveness: 'Effective', comments: 'Change management controls operating effectively. Zero failed changes in Q1 2025.', isAdhoc: false, updatedBy: 'u3', updatedAt: '2025-05-19T14:00:00Z' },
  { id: 'lc5', losId: 'los1', controlId: 'ctrl5', effectiveness: 'Ineffective', comments: 'Backup recovery testing failed in March 2025. RTO exceeded by 6 hours. Root cause under investigation.', isAdhoc: false, updatedBy: 'u3', updatedAt: '2025-05-18T11:00:00Z' },
  { id: 'lc6', losId: 'los1', controlId: 'ctrl6', effectiveness: 'Effective', comments: 'Incident management framework operating as designed. All P1 incidents escalated within defined timeframes.', isAdhoc: false, updatedBy: 'u3', updatedAt: '2025-05-18T11:00:00Z' },
];

// ─── KRI ASSESSMENTS ──────────────────────────────────────────────────────────
export const INITIAL_KRI_ASSESSMENTS = [
  { id: 'ka1', losId: 'los1', indicatorId: 'kri1', currentValue: '99.7%', aboveToleranceFlag: false, updatedBy: 'u1', updatedAt: '2025-05-20T10:00:00Z' },
  { id: 'ka2', losId: 'los1', indicatorId: 'kri2', currentValue: '3.2 hours', aboveToleranceFlag: false, updatedBy: 'u1', updatedAt: '2025-05-20T10:00:00Z' },
  { id: 'ka3', losId: 'los1', indicatorId: 'kri3', currentValue: '7', aboveToleranceFlag: true, updatedBy: 'u1', updatedAt: '2025-05-20T10:00:00Z' },
  { id: 'ka4', losId: 'los1', indicatorId: 'kri4', currentValue: '1', aboveToleranceFlag: false, updatedBy: 'u1', updatedAt: '2025-05-20T10:00:00Z' },
];

// ─── SUB-RISK ASSIGNMENTS ─────────────────────────────────────────────────────
export const INITIAL_LOS_SUB_RISKS = [
  { id: 'lsr1', losId: 'los1', riskId: 'risk2', addedBy: 'u1', addedAt: '2025-04-15T09:30:00Z' },
  { id: 'lsr2', losId: 'los1', riskId: 'risk3', addedBy: 'u1', addedAt: '2025-04-15T09:30:00Z' },
  { id: 'lsr3', losId: 'los1', riskId: 'risk4', addedBy: 'u1', addedAt: '2025-04-16T10:00:00Z' },
];

// ─── ACTION PLANS ─────────────────────────────────────────────────────────────
export const INITIAL_ACTION_PLANS = [
  {
    id: 'ap1',
    losId: 'los1',
    losControlId: 'lc2',
    controlId: 'ctrl2',
    title: 'Enhance SIEM Detection Rules for Lateral Movement',
    description: 'Update SIEM platform detection rules to include advanced lateral movement attack patterns. Engage vendor for rule library update and conduct red-team validation exercise.',
    ownerId: 'u3',
    targetDueDate: '2025-06-30',
    priority: 'High',
    status: 'In-Progress',
    createdAt: '2025-05-10T09:00:00Z',
  },
  {
    id: 'ap2',
    losId: 'los1',
    losControlId: 'lc5',
    controlId: 'ctrl5',
    title: 'Remediate Backup Recovery Failure – DR Testing',
    description: 'Conduct root cause analysis of March 2025 recovery test failure. Implement fixes and schedule re-test by end of June 2025. Update DR procedures documentation.',
    ownerId: 'u3',
    targetDueDate: '2025-06-15',
    priority: 'Critical',
    status: 'Open',
    createdAt: '2025-05-18T12:00:00Z',
  },
  {
    id: 'ap3',
    losId: 'los3',
    losControlId: null,
    controlId: 'ctrl1',
    title: 'Group BCP Cross-Market Integration Testing',
    description: 'Conduct integrated BCP test spanning all 5 markets simultaneously to validate group-level resilience posture.',
    ownerId: 'u2',
    targetDueDate: '2025-07-31',
    priority: 'Medium',
    status: 'Open',
    createdAt: '2025-05-05T10:00:00Z',
  },
  {
    id: 'ap4',
    losId: 'los2',
    losControlId: null,
    controlId: 'ctrl4',
    title: 'Automate Change Rollback Procedures',
    description: 'Implement automated rollback capability for tier-1 system changes to reduce MTTR.',
    ownerId: 'u3',
    targetDueDate: '2025-04-30',
    priority: 'Medium',
    status: 'Closed',
    createdAt: '2025-02-01T09:00:00Z',
  },
];

// ─── WORKFLOW TASKS ───────────────────────────────────────────────────────────
export const INITIAL_WORKFLOW_TASKS = [
  { id: 'wt1', losId: 'los1', taskType: 'Review Published LOS', actionPlanId: null, assignedTo: 'u1', dueDate: '2025-05-28', priority: 'High', status: 'Open', completedAt: null, createdAt: '2025-05-23T08:00:00Z' },
  { id: 'wt2', losId: 'los1', taskType: 'Validate Control Effectiveness', actionPlanId: null, assignedTo: 'u3', dueDate: '2025-06-02', priority: 'High', status: 'Open', completedAt: null, createdAt: '2025-05-23T08:00:00Z' },
  { id: 'wt3', losId: 'los1', taskType: 'Create/Update Action Plans', actionPlanId: 'ap2', assignedTo: 'u3', dueDate: '2025-05-24', priority: 'Critical', status: 'Overdue', completedAt: null, createdAt: '2025-05-23T08:00:00Z' },
  { id: 'wt4', losId: 'los1', taskType: 'Complete KRI Current Values', actionPlanId: null, assignedTo: 'u1', dueDate: '2025-05-30', priority: 'Medium', status: 'Open', completedAt: null, createdAt: '2025-05-23T08:00:00Z' },
  { id: 'wt5', losId: 'los1', taskType: 'EXCO Committee Review', actionPlanId: null, assignedTo: 'u6', dueDate: '2025-06-07', priority: 'Medium', status: 'Open', completedAt: null, createdAt: '2025-05-23T08:00:00Z' },
  { id: 'wt6', losId: 'los1', taskType: 'EXHo Sign-off', actionPlanId: null, assignedTo: 'u4', dueDate: '2025-06-12', priority: 'High', status: 'Open', completedAt: null, createdAt: '2025-05-23T08:00:00Z' },
  { id: 'wt7', losId: 'los3', taskType: 'Review Published LOS', actionPlanId: null, assignedTo: 'u8', dueDate: '2025-05-25', priority: 'High', status: 'Completed', completedAt: '2025-05-24T14:30:00Z', createdAt: '2025-05-20T08:00:00Z' },
  { id: 'wt8', losId: 'los4', taskType: 'Validate Control Effectiveness', actionPlanId: null, assignedTo: 'u3', dueDate: '2025-06-01', priority: 'High', status: 'Open', completedAt: null, createdAt: '2025-05-22T08:00:00Z' },
];

// ─── LOS VERSION HISTORY ──────────────────────────────────────────────────────
export const LOS_VERSIONS = [
  { id: 'lv1', losId: 'los1', versionNumber: 1, status: 'Active', publishedAt: null, publishedBy: null, changeSummary: 'Initial draft created' },
  { id: 'lv2', losId: 'los2', versionNumber: 1, status: 'Superseded', publishedAt: '2025-02-01T10:00:00Z', publishedBy: 'u2', changeSummary: 'Initial publication' },
  { id: 'lv3', losId: 'los2', versionNumber: 2, status: 'Active', publishedAt: '2025-03-28T15:45:00Z', publishedBy: 'u2', changeSummary: 'Updated control effectiveness ratings and KRI values' },
];

// ─── CHANGE LOG ───────────────────────────────────────────────────────────────
export const CHANGE_LOG = [
  { id: 'cl1', losId: 'los1', losVersionId: 'lv1', fieldName: 'status', oldValue: null, newValue: 'Draft', changedBy: 'u1', changedAt: '2025-04-15T09:15:00Z', changeType: 'Create' },
  { id: 'cl2', losId: 'los1', losVersionId: 'lv1', fieldName: 'overviewContent', oldValue: '', newValue: 'Updated overview section', changedBy: 'u1', changedAt: '2025-05-10T11:00:00Z', changeType: 'Update' },
  { id: 'cl3', losId: 'los1', losVersionId: 'lv1', fieldName: 'losControl.ctrl5.effectiveness', oldValue: 'Effective', newValue: 'Ineffective', changedBy: 'u3', changedAt: '2025-05-18T11:00:00Z', changeType: 'Update' },
  { id: 'cl4', losId: 'los2', losVersionId: 'lv2', fieldName: 'status', oldValue: 'Endorsed', newValue: 'Published', changedBy: 'u2', changedAt: '2025-02-01T10:00:00Z', changeType: 'Update' },
  { id: 'cl5', losId: 'los2', losVersionId: 'lv3', fieldName: 'losControl.ctrl1.effectiveness', oldValue: 'Partially Effective', newValue: 'Effective', changedBy: 'u3', changedAt: '2025-03-28T14:00:00Z', changeType: 'Update' },
];

// ─── NOTIFICATIONS ────────────────────────────────────────────────────────────
export const INITIAL_NOTIFICATIONS = [
  { id: 'n1', losId: 'los1', taskId: 'wt1', userId: 'u1', notificationType: 'Task Due Soon', message: 'Task "Review Published LOS" is due in 2 days', isRead: false, createdAt: '2025-05-26T08:00:00Z' },
  { id: 'n2', losId: 'los1', taskId: 'wt3', userId: 'u3', notificationType: 'Task Overdue', message: 'Task "Create/Update Action Plans" is overdue by 1 day', isRead: false, createdAt: '2025-05-25T08:00:00Z' },
  { id: 'n3', losId: 'los3', taskId: 'wt7', userId: 'u8', notificationType: 'Task Completed', message: 'Task "Review Published LOS" for Group LOS has been completed', isRead: true, createdAt: '2025-05-24T14:30:00Z' },
  { id: 'n4', losId: 'los1', taskId: null, userId: 'u2', notificationType: 'LOS Status Change', message: 'Market LOS – Q2 2025 has been submitted for review', isRead: false, createdAt: '2025-05-20T10:30:00Z' },
  { id: 'n5', losId: 'los4', taskId: 'wt8', userId: 'u3', notificationType: 'Task Assigned', message: 'New task assigned: Validate Control Effectiveness for Market LOS – Q2 2025 (ZA)', isRead: false, createdAt: '2025-05-22T09:00:00Z' },
  { id: 'n6', losId: 'los1', taskId: 'wt4', userId: 'u1', notificationType: 'Task Due Soon', message: 'Task "Complete KRI Current Values" is due in 4 days', isRead: false, createdAt: '2025-05-26T08:00:00Z' },
  { id: 'n7', losId: 'los2', taskId: null, userId: 'u1', notificationType: 'LOS Published', message: 'Market LOS – Q1 2025 has been published', isRead: true, createdAt: '2025-03-28T16:00:00Z' },
  { id: 'n8', losId: 'los3', taskId: null, userId: 'u2', notificationType: 'LOS Status Change', message: 'Group LOS – Q2 2025 has moved to In Review status', isRead: true, createdAt: '2025-05-18T09:20:00Z' },
];
