// All portfolio content lives here. Edit this file to update the site.
// Content comes from the resume and LinkedIn profile only.

export const profile = {
  name: "Arjun Ajikumar",
  title: "Junior Data Analyst",
  statement:
    "I turn payroll, finance and sales data into clean, decision-ready reports using Power BI, SQL, Python and Excel.",
  availability: "Open to junior and entry-level data analyst roles. Based in Idukki, Kerala, India.",
  resume: "/Arjun_Ajikumar_Resume.docx",
};

export const contact = {
  email: "arjunajikumar002@gmail.com",
  phone: "+91 7902245765",
  location: "Idukki, Kerala, India",
  linkedin: "https://linkedin.com/in/arjunajikumar002",
  github: "https://github.com/arjunajikumar-svg",
};

// Rows shown in the hero worksheet. Click a row to read the detail in the formula bar.
export const worksheet = [
  {
    metric: "Property sales analysed",
    value: "13,580",
    source: "Melbourne Housing Market Analysis",
    note: "Records and 21 attributes cleaned and explored in Python to find what drives sale price.",
  },
  {
    metric: "Sales records in dashboard",
    value: "1,000+",
    source: "Strategic Sales Analytics Dashboard",
    note: "Revenue, profitability, customer returns and sales performance in one interactive Power BI report.",
  },
  {
    metric: "Employees on automated payroll",
    value: "65+",
    source: "Payroll Automation System",
    note: "Six departments, with EPF, ESI, LWF and TDS calculated automatically in Excel.",
  },
  {
    metric: "Reconciliation turnaround",
    value: "3 days to under 1",
    source: "Payroll Automation System",
    note: "Reduced through automation and validation checks.",
  },
];

export const about = [
  "I came to data analytics through accounting. At Sterling Thekkady I turned raw operational and payroll data into structured monthly reports, and automated the calculations behind them.",
  "Since then I have built analysis projects in Python and Power BI, and I am completing a Certificate Program in Data Analytics covering SQL, Python, Power BI and ETL. My MA in Economics gives me a grounding in how to frame a business question before touching the data.",
];

export const projects = [
  {
    name: "Melbourne Housing Market Analysis",
    year: "2026",
    tools: ["Python", "Pandas", "NumPy", "Plotly"],
    links: [{ label: "View on GitHub", href: "https://github.com/arjunajikumar-svg/Melbourne-Housing-Snapshot" }],
    question: "What drives sale price across 13,580 Melbourne property sales?",
    did: [
      "Cleaned the dataset: removed duplicates, filled missing values with the median, corrected data types and filtered 612 price outliers using the IQR method.",
      "Engineered Sale Year, Sale Month, Property Age and Price per Sqm to support trend and valuation analysis.",
      "Built 10+ interactive Plotly visualizations and correlation analyses.",
    ],
    results: [
      { value: "~86%", label: "higher average price for houses than units ($1.12M vs $603K)" },
      { value: "$1.17M", label: "average price in Southern Metropolitan, the top-priced region" },
      { value: "r = 0.49", label: "Rooms, the strongest price driver" },
    ],
  },
  {
    name: "Strategic Sales Analytics Dashboard",
    year: "2026",
    tools: ["Power BI", "Power Query", "DAX"],
    links: [{ label: "View on GitHub", href: "https://github.com/arjunajikumar-svg/Structured-Sales-Analysis/tree/main/Project" }],
    question: "How are revenue, profitability and customer returns performing across 1,000+ sales records?",
    did: [
      "Cleaned and transformed the raw data in Power Query to improve reporting accuracy and dashboard performance.",
      "Created DAX measures and KPI cards for sales, revenue, profit and return ratio.",
      "Designed drill-down reports with slicers for Region, Year and Payment Method.",
    ],
    results: [
      { value: "$1M", label: "total sales" },
      { value: "$991K", label: "net revenue" },
      { value: "$979K", label: "net profit" },
      { value: "30.85%", label: "return ratio" },
    ],
  },
  {
    name: "Payroll Automation System",
    year: "2025",
    company: "Sterling Thekkady",
    tools: ["Excel", "Formulas", "Data Validation", "Financial Reporting"],
    links: [{ label: "View workbook on GitHub", href: "https://github.com/arjunajikumar-svg/Base---Excel-Assignments/blob/main/Payroll.xlsx" }],
    question: "How can monthly payroll for 65+ employees across 6 departments be calculated and reconciled accurately?",
    did: [
      "Designed an automated payroll database covering Admin, Front Office, F&B Service, F&B Production, Housekeeping and Engineering.",
      "Built an ETL-style workflow for salary adjustments and statutory calculations: EPF, ESI, LWF and TDS, plus loss-of-pay adjustments.",
      "Generated bank disbursement reports and debit/credit reconciliation for the accounts team.",
    ],
    results: [
      { value: "~40%", label: "less data entry time" },
      { value: "3 days to under 1", label: "reconciliation turnaround" },
      { value: "100%", label: "data integrity through debit/credit reconciliation" },
    ],
  },
];

export const experience = [
  {
    role: "Accountant Associate",
    company: "Sterling Thekkady",
    location: "Kumily, Kerala",
    href: "https://www.sterlingholidays.com/resorts-hotels/thekkady/",
    period: "Mar 2025 to Feb 2026",
    points: [
      "Maintained and processed financial data for 65+ employees across 6 departments with high accuracy.",
      "Converted raw operational data into structured financial reports for monthly reporting.",
      "Reduced report preparation time by approximately 35% through better data organization and workflow efficiency.",
      "Performed monthly reconciliations, identified variances and supported accurate submission of reports.",
    ],
  },
];

export const skills = [
  { group: "Tools and visualization", items: ["Power BI", "Power Query", "DAX", "Excel", "Charts", "KPI Dashboards"] },
  { group: "Programming and data", items: ["SQL", "Python", "Pandas", "NumPy", "Plotly"] },
  { group: "Analytics", items: ["Data Cleaning", "ETL", "Data Validation", "Data Modelling", "Reporting Automation"] },
  { group: "Business", items: ["Financial Reporting", "Reconciliation", "KPI Reporting", "Business Intelligence"] },
];

export const education = [
  {
    title: "MA in Economics",
    place: "M.E.S. College Nedumkandam, Mahatma Gandhi University",
    period: "Jun 2022 to Apr 2024",
  },
  {
    title: "BA in Economics",
    place: "M.E.S. College Nedumkandam",
    period: "Jun 2019 to Apr 2022",
  },
];

export const certifications = [
  {
    title: "Certificate Program in Data Analytics",
    place: "Entri Software Pvt Ltd, Illinois Tech (US) and NSDC",
    period: "Apr 2026 to Sep 2026",
    detail: "Hands-on training in SQL, Python, Power BI, data visualization, ETL and business intelligence fundamentals.",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    place: "Listed on LinkedIn",
  },
];

export const languages = [
  { name: "Malayalam", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Basic" },
];

// Lines typed out in the hero. Keep them true to the resume.
export const typed = [
  "Junior Data Analyst",
  "Power BI, SQL, Python, Excel",
  "Raw data into decision-ready reports",
];

export const summary =
  "Detail-oriented Junior Data Analyst with hands-on experience in data cleaning, reporting automation, dashboard creation, reconciliation and KPI tracking. Experienced in turning financial and payroll data into accurate, decision-ready reports.";

// Three numbers shown at the bottom of the landing page.
export const stats = [
  "13,580 property sales analysed",
  "65+ employees on automated payroll",
  "10 public repositories on GitHub",
];

// Every other public repository on github.com/arjunajikumar-svg.
// Descriptions use only what each repository itself says.
const gh = "https://github.com/arjunajikumar-svg/";
export const moreProjects = [
  { name: "Excel Data Cleaning and Analysis", desc: "Excel workbook for cleaning and analysing a dataset.", tools: ["Excel"], href: gh + "Excel-Data-Cleaning-and-Analysis" },
  { name: "Excel Dashboard", desc: "Dashboard creation in Excel.", tools: ["Excel"], href: gh + "Excel-Dashboard" },
  { name: "Healthcare Analysis", desc: "Healthcare data analysis using Excel.", tools: ["Excel"], href: gh + "Healthcare-Analysis-" },
  { name: "SQL Employee Management System", desc: "SQL coding challenge built around an employee management system.", tools: ["SQL"], href: gh + "sql-employee-management-system" },
  { name: "SQL Employee Rewards System", desc: "SQL coding challenge built around an employee rewards system.", tools: ["SQL"], href: gh + "sql-employee-rewards-system" },
  { name: "Portfolio Website", desc: "This portfolio site, deployed on Vercel.", tools: ["Next.js", "Tailwind CSS", "Vercel"], href: gh + "arjun-ajikumar-portfolio" },
  { name: "GitHub Profile README", desc: "Profile README with a short introduction, tech stack and GitHub stats.", tools: ["MySQL", "NumPy", "Power BI", "Pandas", "Plotly", "Python"], href: gh + "arjunajikumar-svg" },
];
