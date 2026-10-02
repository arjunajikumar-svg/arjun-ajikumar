// All site content lives in this file. Everything comes from the resume PDF.

export type Category = "Python" | "Power BI" | "SQL" | "Excel";

export interface Metric { value: string; label: string }

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  year: string;
  context?: string;
  featured?: boolean;
  tools: string[];
  summary: string;
  did: string[];
  findings: string;
  metrics: Metric[];
  github: string;
}

export const profile = {
  name: "Arjun Ajikumar",
  role: "Data Analyst (Entry Level)",
  intro:
    "Entry-level Data Analyst with an MA in Economics and hands-on projects across healthcare, e-commerce, banking and financial reconciliation, built with Power BI, SQL, Python and Advanced Excel.",
  badge: "Open to entry-level Data Analyst roles",
  resume: "/Arjun_Ajikumar_Data_Analyst_Resume.pdf",
};

export const contact = {
  email: "arjunajikumar002@gmail.com",
  phone: "+91 7902245765",
  location: "Idukki, Kerala, India",
  linkedin: "https://linkedin.com/in/arjunajikumar002",
  github: "https://github.com/arjunajikumar-svg",
};

export const tools = [
  "Power BI", "SQL", "Python", "Advanced Excel", "DAX", "Power Query", "Pandas", "NumPy",
  "Scikit-learn", "Plotly", "Seaborn", "Matplotlib", "MySQL", "PostgreSQL", "Power Pivot",
];

export const aboutParagraphs = [
  "I am an aspiring data analyst with a Master's in Economics, focused on econometrics and statistical inference, and practical experience in data cleaning, exploratory analysis, dashboard creation and KPI reporting.",
  "Before moving into analytics I worked as an Accountant Associate at Sterling Thekkady, turning raw operational records into structured monthly reports and reconciling balances for 65+ people across 6 departments.",
];

export const aboutStats = [
  { value: 12, suffix: "", label: "Data projects, each with its own write-up" },
  { value: 13580, suffix: "", label: "Property records analysed in Python" },
  { value: 5630, suffix: "+", label: "Customer records queried in SQL" },
  { value: 65, suffix: "+", label: "Employees on automated payroll" },
];

export const capabilities: {
  title: string;
  text: string;
  icon: "chart" | "table" | "database" | "code" | "workflow" | "file";
  category?: Category;
}[] = [
  { title: "Dashboards & BI", text: "Power BI with DAX, Power Query and data modelling. Multi-page dashboards, slicers, drill-through and KPI tracking.", icon: "chart", category: "Power BI" },
  { title: "Advanced Excel", text: "Power Pivot, XLOOKUP and pivot tables for payroll automation, reconciliation and healthcare reporting.", icon: "table", category: "Excel" },
  { title: "SQL & Databases", text: "MySQL and PostgreSQL: CTEs, window functions, stored procedures, views and recursive queries.", icon: "database", category: "SQL" },
  { title: "Python Analysis", text: "Pandas, NumPy and Scikit-learn for exploratory analysis, text processing and classification models.", icon: "code", category: "Python" },
  { title: "Data Cleaning & ETL", text: "Missing-value handling, IQR outlier detection, feature engineering and repeatable ETL pipelines.", icon: "workflow" },
  { title: "Business Reporting", text: "Financial reporting, payroll reconciliation, churn analysis and customer retention metrics.", icon: "file" },
];

export const process = [
  { title: "Understand the data", points: ["Profile the dataset and its attributes", "Spot missing values and extreme outliers", "Decide what needs cleaning first"] },
  { title: "Clean and prepare", points: ["Median imputation for missing values", "IQR method to remove extreme outliers", "Feature engineering, such as Price per Sqm"] },
  { title: "Analyse and model", points: ["Exploratory and correlation analysis", "SQL CTEs and window functions", "Classification models for risk and approval"] },
  { title: "Report and visualise", points: ["Power BI dashboards with DAX measures", "Slicers and drill-through for each audience", "Work documented on GitHub"] },
];

export const experience = {
  role: "Accountant Associate",
  company: "Sterling Thekkady",
  location: "Kumily, Kerala",
  href: "https://sterlingholidays.com/",
  period: "Mar 2025 – Feb 2026",
  points: [
    "Managed day-to-day operational financial data and payroll spreadsheets for 65+ personnel across 6 resort departments with high accuracy.",
    "Transformed raw operational records into structured spreadsheets and monthly financial summary reports for management review.",
    "Conducted monthly balance reconciliations, identified variance discrepancies and supported senior staff with routine data audits.",
  ],
};

export const education = {
  title: "MA in Economics",
  place: "M.E.S. College Nedumkandam, Mahatma Gandhi University, Kerala, India",
  detail: "Core focus: Econometrics, Statistical Inference, Quantitative Economics, Micro/Macroeconomics and Mathematical Optimization.",
};

export const certification = {
  title: "Certificate Program in Data Analytics",
  place: "Entri Software Pvt Ltd, Illinois Tech (US) and NSDC",
  period: "Apr 2026 – Sep 2026 (In Progress)",
  detail: "Hands-on training in SQL, Python, Power BI, advanced data visualization, ETL architecture and business intelligence principles.",
};

export const languages = ["Malayalam (Native)", "English (Professional)", "Hindi (Basic)"];

const gh = "https://github.com/arjunajikumar-svg/";

export const projects: Project[] = [
  {
    slug: "melbourne-housing-market-analysis",
    title: "Melbourne Housing Market Analysis",
    subtitle: "Python & EDA",
    category: "Python",
    year: "2026",
    featured: true,
    tools: ["Python", "Pandas", "NumPy", "Plotly"],
    summary: "Exploratory data analysis of 13,580 property records (21 attributes) to find the main drivers of sale price.",
    did: [
      "Handled missing values using median imputation and removed 612 extreme price outliers with the Interquartile Range (IQR) technique to keep the distribution valid.",
      "Engineered Sale Year, Sale Month, Property Age and Price per Sqm to evaluate appreciation over time and land utility.",
      "Used Pandas, NumPy and Plotly to run the analysis and visualise the valuation drivers.",
    ],
    findings: "Standalone houses sold for an average of $1.12M, a premium of about 85.7% over units at $603K. Southern Metropolitan was the highest-priced region at $1.17M, and number of rooms had the strongest correlation with sale price (r = 0.49).",
    metrics: [
      { value: "~85.7%", label: "price premium for houses ($1.12M) over units ($603K)" },
      { value: "$1.17M", label: "average price in Southern Metropolitan, the top region" },
      { value: "r = 0.49", label: "number of rooms, the strongest correlation with price" },
      { value: "612", label: "extreme price outliers removed with the IQR method" },
    ],
    github: gh + "Melbourne-Housing-Snapshot",
  },
  {
    slug: "strategic-sales-analytics-dashboard",
    title: "Strategic Sales Analytics Dashboard",
    subtitle: "Power BI & DAX",
    category: "Power BI",
    year: "2026",
    featured: true,
    tools: ["Power BI", "DAX", "Power Query"],
    summary: "An interactive multi-page business intelligence dashboard on 1,000+ sales records to evaluate profitability and regional customer order flows.",
    did: [
      "Built Power Query transformations and custom DAX measures for real-time tracking of net margins, product returns and discount leakage.",
      "Configured multi-dimensional slicers (Region, Year, Payment Channel) and drill-through hierarchies for actionable commercial visibility.",
    ],
    findings: "The dashboard covers $1,000,000 in gross sales, $991,000 net revenue and $979,000 net profit (a 97.9% net margin), and flags an elevated product return ratio of 30.85% that calls for a catalog audit.",
    metrics: [
      { value: "$1,000,000", label: "gross sales covered" },
      { value: "$991,000", label: "net revenue" },
      { value: "$979,000", label: "net profit, a 97.9% net margin" },
      { value: "30.85%", label: "product return ratio flagged for a catalog audit" },
    ],
    github: gh + "Structured-Sales-Analysis/tree/main/Project",
  },
  {
    slug: "festive-retail-sales-performance-analytics",
    title: "Festive Retail Sales Performance Analytics",
    subtitle: "Power BI (.PBIX)",
    category: "Power BI",
    year: "2026",
    tools: ["Power BI", "DAX", "Star schema"],
    summary: "A seasonal sales intelligence report modelling peak festival transactions, order fulfilment timelines and category demand surges.",
    did: [
      "Formulated a dedicated festive-season report covering peak transactions, fulfilment timelines and category demand.",
      "Implemented star-schema data models and DAX time-intelligence metrics that compare the festive peak run-rate with annual historical baselines.",
    ],
    findings: "Festival campaigns drove a 42.6% surge in total order volume, led by a 64.8% spike in traditional retail categories and a 19.2% increase in average transaction value (ATV) over regular periods.",
    metrics: [
      { value: "42.6%", label: "surge in total order volume during festival campaigns" },
      { value: "64.8%", label: "spike in traditional retail categories" },
      { value: "19.2%", label: "increase in average transaction value over regular periods" },
    ],
    github: gh + "Structured-Sales-Analysis/blob/main/Onam.pbix",
  },
  {
    slug: "payroll-automation-statutory-reconciliation",
    title: "Payroll Automation & Statutory Reconciliation System",
    subtitle: "Advanced Excel",
    category: "Excel",
    year: "2025",
    context: "Sterling Thekkady",
    tools: ["Advanced Excel", "Formulas", "Data Validation", "Financial Reporting"],
    summary: "An automated payroll database for 65+ employees across 6 operational departments, built at Sterling Thekkady.",
    did: [
      "Designed the payroll database to cover Admin, Front Office, F&B Service, F&B Production, Housekeeping and Engineering.",
      "Automated EPF, ESI, LWF and TDS calculations, with loss-of-pay (LOP) based salary adjustment.",
      "Generated bank disbursement reports and debit/credit reconciliation for the accounts team.",
    ],
    findings: "Manual data entry time was cut by 40%, and reconciliation turnaround dropped from about 3 days to under 1 day.",
    metrics: [
      { value: "65+", label: "employees on automated payroll" },
      { value: "6", label: "operational departments covered" },
      { value: "40%", label: "less manual data entry time" },
      { value: "3 days to <1", label: "reconciliation turnaround" },
    ],
    github: gh + "Base---Excel-Assignments/blob/main/Payroll.xlsx",
  },
  {
    slug: "healthcare-patient-inpatient-billing-analytics",
    title: "Healthcare Patient Inpatient & Billing Analytics",
    subtitle: "Advanced Excel",
    category: "Excel",
    year: "2026",
    tools: ["Advanced Excel", "Power Pivot", "Pivot Tables"],
    summary: "Analysis of hospital admissions, bed occupancy, doctor caseloads and insurance settlement lifecycles.",
    did: [
      "Used dynamic nested formulas and Power Pivot to analyse admissions, occupancy, caseloads and insurance settlements.",
      "Built interactive pivot dashboards monitoring Length of Stay (LOS), emergency department triage rates and insurance claim deduction ratios.",
    ],
    findings: "Average patient stay was 4.8 days, high-occupancy wards exceeded 88.4% capacity, and self-pay patients showed a 22.5% higher delayed collection rate than covered insurance claims.",
    metrics: [
      { value: "4.8 days", label: "average patient length of stay" },
      { value: "88.4%", label: "capacity exceeded in high-occupancy wards" },
      { value: "22.5%", label: "higher delayed collection rate for self-pay patients" },
    ],
    github: gh + "Base---Excel-Assignments/blob/main/Healthcare%20(1).xlsx",
  },
  {
    slug: "survey-feedback-sentiment-analyzer",
    title: "Automated Survey Feedback & Sentiment Analyzer",
    subtitle: "Python & NLP",
    category: "Python",
    year: "2026",
    tools: ["Python", "NLP", "Text processing"],
    summary: "An end-to-end Python text-processing pipeline that ingests raw customer survey records, cleans unstructured text and classifies sentiment.",
    did: [
      "Tokenised responses, removed stop words and computed Net Promoter Scores (NPS).",
      "Correlated text polarity scores with product rating attributes.",
    ],
    findings: "Across 500+ text reviews the analysis found an overall 68.4% positive sentiment index and a Net Promoter Score of +42, and isolated negative sentiment clusters around customer support turnaround time (a 31.6% dissatisfaction share).",
    metrics: [
      { value: "500+", label: "text reviews analysed" },
      { value: "68.4%", label: "overall positive sentiment index" },
      { value: "+42", label: "Net Promoter Score" },
      { value: "31.6%", label: "dissatisfaction share tied to support turnaround time" },
    ],
    github: gh + "Base-Python-Assignment-/blob/main/Module_End_Assessment_4_Python_Survey_Feedback_Analyzer_.ipynb",
  },
  {
    slug: "statistical-data-visualization-exploratory-analysis",
    title: "Statistical Data Visualization & Exploratory Analysis",
    subtitle: "Python (Seaborn & Matplotlib)",
    category: "Python",
    year: "2026",
    tools: ["Python", "Seaborn", "Matplotlib"],
    summary: "Automated visualization workflows that validate hypothesis models using violin plots, heatmaps, box plots and multivariate regression distributions.",
    did: [
      "Built automated visualization workflows producing violin plots, heatmaps, box plots and regression distributions.",
      "Ran bivariate statistical tests and skewness transformations to prepare skewed variables for downstream predictive modelling.",
    ],
    findings: "Raw feature multicollinearity was reduced by removing 3 redundant attributes with VIF above 8.5, and a positive linear trend between spend and customer lifetime score was identified (R² = 0.72).",
    metrics: [
      { value: "3", label: "redundant attributes removed (VIF > 8.5)" },
      { value: "R² = 0.72", label: "linear trend between spend and customer lifetime score" },
    ],
    github: gh + "Base-Python-Assignment-/blob/main/Python_DA_Assignment_2_Data_Visualization_.ipynb",
  },
  {
    slug: "social-media-engagement-analytics",
    title: "Multi-Channel Social Media Engagement Analytics",
    subtitle: "Python & Pandas",
    category: "Python",
    year: "2026",
    tools: ["Python", "Pandas"],
    summary: "Engagement metrics (impressions, clicks, shares, comments) normalised across YouTube, Instagram and LinkedIn campaigns.",
    did: [
      "Extracted and normalised engagement metrics across the three platforms.",
      "Calculated engagement rates per post type and modelled time-of-day posting performance to maximise organic reach.",
    ],
    findings: "Video and carousel media earned a 4.82% average engagement rate against 1.94% for static text, a 148% lift. Posting between 6:00 PM and 8:30 PM boosted reach by 34.1%.",
    metrics: [
      { value: "4.82%", label: "average engagement for video and carousel posts" },
      { value: "1.94%", label: "average engagement for static text, so a 148% lift" },
      { value: "34.1%", label: "reach boost from posting between 6:00 PM and 8:30 PM" },
    ],
    github: gh + "Base-Python-Assignment-/blob/main/Social%20Media%20Engagement%20Analytics.ipynb",
  },
  {
    slug: "banking-loan-eligibility-risk-model",
    title: "Banking Loan Eligibility & Risk Process Model",
    subtitle: "Python & Scikit-Learn",
    category: "Python",
    year: "2026",
    tools: ["Python", "Scikit-learn", "Classification"],
    summary: "An end-to-end applicant credit risk pipeline evaluating income, co-applicant assets, credit history and loan terms.",
    did: [
      "Preprocessed categorical features, imputed missing records and addressed class imbalance.",
      "Modelled approval probabilities with classification models.",
    ],
    findings: "Applicant credit history was the largest determinant of approval, with an 82.4% predictive importance weighting. The model reached 81.3% test accuracy and a 0.84 ROC-AUC across 614 applicant files.",
    metrics: [
      { value: "82.4%", label: "predictive importance of applicant credit history" },
      { value: "81.3%", label: "test accuracy" },
      { value: "0.84", label: "ROC-AUC" },
      { value: "614", label: "applicant files" },
    ],
    github: gh + "python-data-analytics-projects/blob/main/loan_eligibility_process_.ipynb",
  },
  {
    slug: "ecommerce-customer-churn-cohort-analysis",
    title: "E-Commerce Customer Churn & Cohort Analysis",
    subtitle: "SQL & Advanced Queries",
    category: "SQL",
    year: "2026",
    featured: true,
    tools: ["SQL", "CTEs", "Subqueries", "Window functions"],
    summary: "Advanced SQL over 5,630+ e-commerce customer transaction records to track retention curves and spot early churn signals.",
    did: [
      "Wrote CTEs, subqueries and window functions to track retention across the customer base.",
      "Segmented users by order recency, purchase frequency, cashback usage and dispute tickets to detect early-stage churn precursors.",
    ],
    findings: "The overall churn rate was 16.8%, peaking at 48.3% for customers who reported order complaints. Accounts inactive for more than 6 months had an 83.1% probability of permanent abandonment.",
    metrics: [
      { value: "5,630+", label: "customer transaction records queried" },
      { value: "16.8%", label: "overall churn rate" },
      { value: "48.3%", label: "churn among customers who reported order complaints" },
      { value: "83.1%", label: "abandonment probability after 6+ months inactive" },
    ],
    github: gh + "E-Commerce-Customer-Churn-Analysis/blob/main/E-Commerce%20Customer%20Churn%20Analysis.sql",
  },
  {
    slug: "employee-rewards-bonus-allocation-system",
    title: "Employee Rewards, Recognition & Bonus Allocation System",
    subtitle: "SQL",
    category: "SQL",
    year: "2026",
    tools: ["SQL", "Triggers", "Stored procedures", "DENSE_RANK", "NTILE"],
    summary: "Relational SQL schemas, triggers and stored procedures that calculate objective performance tiers and incentive payouts across departments.",
    did: [
      "Constructed relational schemas, triggers and stored procedures for performance tiers and payouts.",
      "Used DENSE_RANK(), NTILE(4) and conditional aggregation to remove human bias from quarterly incentive distribution.",
    ],
    findings: "Bonus distribution was automated across 120+ team members, reallocating $145,000 in incentive pools with 100% calculation accuracy and cutting reward processing cycle time by 75%.",
    metrics: [
      { value: "120+", label: "team members covered" },
      { value: "$145,000", label: "incentive pool reallocated" },
      { value: "100%", label: "calculation accuracy" },
      { value: "75%", label: "shorter reward processing cycle" },
    ],
    github: gh + "sql-employee-rewards-system/blob/main/Coding%20Challenge%202.sql",
  },
  {
    slug: "employee-management-operational-hierarchy",
    title: "Relational Employee Management & Operational Hierarchy",
    subtitle: "SQL",
    category: "SQL",
    year: "2026",
    tools: ["SQL", "Recursive CTEs", "Joins", "Views"],
    summary: "A normalised multi-table database linking employees, departments, compensation bands, project assignments and direct managers.",
    did: [
      "Engineered the normalised multi-table architecture.",
      "Wrote complex joins, recursive CTEs to traverse organisational hierarchies, and automated salary audit views to monitor internal pay parity.",
    ],
    findings: "Relational queries were indexed and optimised for sub-second execution (under 45 ms) across 15+ linked tables, identifying and fixing 14 pay-equity anomalies across technical departments.",
    metrics: [
      { value: "< 45 ms", label: "query execution time" },
      { value: "15+", label: "linked tables" },
      { value: "14", label: "pay-equity anomalies identified and fixed" },
    ],
    github: gh + "sql-employee-management-system/blob/main/Coding%20Challenges/Coding%20challenge.sql",
  },
];
