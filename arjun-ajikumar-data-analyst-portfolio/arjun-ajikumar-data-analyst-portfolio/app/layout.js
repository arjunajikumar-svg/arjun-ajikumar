import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Motion from "@/components/Motion";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--font-serif", display: "swap" });

const favicon =
  "data:image/svg+xml," +
  encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><rect width='24' height='24' rx='5' fill='black'/><text x='12' y='17.5' text-anchor='middle' font-family='Arial' font-weight='700' font-size='16' fill='white'>A</text></svg>");

export const metadata = {
  title: "Arjun Ajikumar — Junior Data Analyst",
  description: "Junior Data Analyst skilled in Power BI, SQL, Python and Excel. Turns financial, payroll and sales data into clear, decision-ready reports.",
  icons: { icon: favicon },
};

export const viewport = { themeColor: "#000000" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body style={{ background: "#000", color: "#fff" }}>
        <div className="grain" aria-hidden="true" />
        <div className="page">
          <Header />
          {children}
        </div>
        <Motion />
      </body>
    </html>
  );
}
