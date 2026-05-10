import jsPDF from "jspdf";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer
} from "recharts";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;700&display=swap');

:root{
  --ink:#0f0e17;
  --paper:#fffcf5;
  --card:#ffffff;
  --border:#e8e4dc;
  --muted:#8c8a8a;
  --accent:#ff6b35;
  --accent2:#0066cc;
}

*{
  box-sizing:border-box;
}

.analytics-root{
  min-height:100vh;
  background:var(--paper);
  font-family:'DM Sans',sans-serif;
  color:var(--ink);
  position:relative;
  overflow-x:hidden;
}

.analytics-root::before{
  content:'';
  position:fixed;
  top:-200px;
  right:-200px;
  width:600px;
  height:600px;
  border-radius:50%;
  background:radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%);
  z-index:0;
}

.analytics-root::after{
  content:'';
  position:fixed;
  bottom:-150px;
  left:-150px;
  width:500px;
  height:500px;
  border-radius:50%;
  background:radial-gradient(circle, rgba(0,102,204,0.07) 0%, transparent 70%);
  z-index:0;
}

.analytics-inner{
  position:relative;
  z-index:1;
  max-width:1400px;
  margin:0 auto;
  padding:48px;
}

.header{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:24px;
  margin-bottom:48px;
  flex-wrap:wrap;
}

.brand-eyebrow{
  display:inline-block;
  font-size:11px;
  font-weight:600;
  letter-spacing:0.18em;
  text-transform:uppercase;
  color:var(--accent);
  padding:5px 12px;
  border:1px solid rgba(255,107,53,0.3);
  border-radius:999px;
  margin-bottom:14px;
}

.page-title{
  font-family:'Syne',sans-serif;
  font-size:64px;
  font-weight:800;
  line-height:0.95;
  letter-spacing:-0.04em;
  margin:0;
}

.page-title span{
  color:var(--accent);
}

.page-subtitle{
  margin-top:16px;
  color:var(--muted);
  font-size:15px;
  max-width:600px;
  line-height:1.7;
}

.download-btn{
  border:none;
  outline:none;
  cursor:pointer;
  background:var(--ink);
  color:white;
  padding:16px 28px;
  border-radius:14px;
  font-family:'Syne',sans-serif;
  font-size:15px;
  font-weight:700;
  transition:all .2s ease;
  border:2px solid var(--ink);
  min-width:220px;
}

.download-btn:hover{
  background:var(--accent);
  border-color:var(--accent);
  transform:translateY(-2px);
  box-shadow:0 14px 30px rgba(255,107,53,0.25);
}

.summary-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:24px;
  margin-bottom:48px;
}

.summary-card{
  background:var(--card);
  border:1.5px solid var(--border);
  border-radius:28px;
  padding:30px;
  position:relative;
  overflow:hidden;
  transition:all .2s ease;
}

.summary-card:hover{
  transform:translateY(-5px);
  box-shadow:0 18px 40px rgba(0,0,0,0.08);
}

.summary-card::after{
  content:'';
  position:absolute;
  right:-25px;
  bottom:-25px;
  width:110px;
  height:110px;
  border-radius:50%;
  opacity:.08;
}

.summary-card:nth-child(1)::after{
  background:var(--accent);
}

.summary-card:nth-child(2)::after{
  background:var(--accent2);
}

.summary-card:nth-child(3)::after{
  background:#7c3aed;
}

.summary-card:nth-child(4)::after{
  background:#059669;
}

.summary-label{
  font-size:12px;
  font-weight:600;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--muted);
  margin-bottom:12px;
}

.summary-value{
  font-family:'Syne',sans-serif;
  font-size:44px;
  font-weight:800;
  letter-spacing:-0.04em;
}

.summary-card:nth-child(1) .summary-value{
  color:var(--accent);
}

.summary-card:nth-child(2) .summary-value{
  color:var(--accent2);
}

.summary-card:nth-child(3) .summary-value{
  color:#7c3aed;
}

.summary-card:nth-child(4) .summary-value{
  color:#059669;
}

.charts-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:28px;
}

.chart-card{
  background:var(--card);
  border:1.5px solid var(--border);
  border-radius:30px;
  padding:32px;
  transition:all .2s ease;
}

.chart-card:hover{
  transform:translateY(-4px);
  box-shadow:0 18px 40px rgba(0,0,0,0.08);
}

.chart-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:24px;
}

.chart-title{
  font-family:'Syne',sans-serif;
  font-size:28px;
  font-weight:800;
  letter-spacing:-0.03em;
}

.chart-tag{
  padding:7px 14px;
  border-radius:999px;
  font-size:11px;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
}

.orange-tag{
  background:#fff1eb;
  color:#c2410c;
}

.blue-tag{
  background:#eef4ff;
  color:#1d4ed8;
}

@media(max-width:1100px){
  .summary-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .charts-grid{
    grid-template-columns:1fr;
  }
}

@media(max-width:768px){

  .analytics-inner{
    padding:28px 20px;
  }

  .page-title{
    font-size:46px;
  }

  .summary-grid{
    grid-template-columns:1fr;
  }

  .chart-card{
    padding:22px;
  }

  .download-btn{
    width:100%;
  }
}
`;

function BudgetAnalytics() {

    const expenseData = [
        { name: "Hotels", value: 12000 },
        { name: "Transport", value: 8000 },
        { name: "Food", value: 5000 },
        { name: "Activities", value: 7000 }
    ];

    const dailyData = [
        { day: "Day 1", expense: 3000 },
        { day: "Day 2", expense: 4500 },
        { day: "Day 3", expense: 5000 },
        { day: "Day 4", expense: 3500 },
        { day: "Day 5", expense: 6000 }
    ];

    const COLORS = [
        "#ff6b35",
        "#0066cc",
        "#7c3aed",
        "#059669"
    ];

    const generatePDF = () => {

        const doc = new jsPDF();

        let y = 20;

        doc.setFontSize(22);
        doc.text("Traveloop Budget Report", 20, y);

        y += 16;

        doc.setFontSize(12);

        doc.text("Total Budget: ₹32,000", 20, y);
        y += 10;

        doc.text("Average Per Day: ₹4,800", 20, y);
        y += 10;

        doc.text("Trip Duration: 5 Days", 20, y);

        y += 18;

        doc.setFontSize(15);
        doc.text("Expense Breakdown", 20, y);

        y += 12;

        expenseData.forEach((item) => {

            doc.text(
                `• ${item.name}: ₹${item.value}`,
                28,
                y
            );

            y += 8;
        });

        y += 10;

        doc.setFontSize(15);
        doc.text("Daily Spending", 20, y);

        y += 12;

        dailyData.forEach((item) => {

            doc.text(
                `• ${item.day}: ₹${item.expense}`,
                28,
                y
            );

            y += 8;
        });

        doc.save("traveloop-budget-report.pdf");
    };

    return (

        <>
            <style>{styles}</style>

            <div className="analytics-root">

                <div className="analytics-inner">

                    {/* HEADER */}
                    <div className="header">

                        <div>

                            <div className="brand-eyebrow">
                                Smart Expense Insights
                            </div>

                            <h1 className="page-title">
                                Budget <span>Analytics</span>
                            </h1>

                            <p className="page-subtitle">
                                Visualize your travel spending,
                                monitor daily expenses, and
                                download professional trip reports.
                            </p>

                        </div>

                        <button
                            onClick={generatePDF}
                            className="download-btn"
                        >
                            ↓ Download Trip PDF
                        </button>

                    </div>

                    {/* SUMMARY */}
                    <div className="summary-grid">

                        <div className="summary-card">

                            <div className="summary-label">
                                Total Budget
                            </div>

                            <div className="summary-value">
                                ₹32K
                            </div>

                        </div>

                        <div className="summary-card">

                            <div className="summary-label">
                                Avg / Day
                            </div>

                            <div className="summary-value">
                                ₹4.8K
                            </div>

                        </div>

                        <div className="summary-card">

                            <div className="summary-label">
                                Highest Expense
                            </div>

                            <div className="summary-value">
                                Hotels
                            </div>

                        </div>

                        <div className="summary-card">

                            <div className="summary-label">
                                Trip Duration
                            </div>

                            <div className="summary-value">
                                5 Days
                            </div>

                        </div>

                    </div>

                    {/* CHARTS */}
                    <div className="charts-grid">

                        {/* PIE CHART */}
                        <div className="chart-card">

                            <div className="chart-header">

                                <h2 className="chart-title">
                                    Expense Breakdown
                                </h2>

                                <div className="chart-tag orange-tag">
                                    Analytics
                                </div>

                            </div>

                            <ResponsiveContainer
                                width="100%"
                                height={380}
                            >

                                <PieChart>

                                    <Pie
                                        data={expenseData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={130}
                                        dataKey="value"
                                        label
                                    >

                                        {expenseData.map(
                                            (entry, index) => (

                                                <Cell
                                                    key={index}
                                                    fill={
                                                        COLORS[
                                                            index %
                                                            COLORS.length
                                                        ]
                                                    }
                                                />

                                            )
                                        )}

                                    </Pie>

                                    <Tooltip />
                                    <Legend />

                                </PieChart>

                            </ResponsiveContainer>

                        </div>

                        {/* BAR CHART */}
                        <div className="chart-card">

                            <div className="chart-header">

                                <h2 className="chart-title">
                                    Daily Spending
                                </h2>

                                <div className="chart-tag blue-tag">
                                    Timeline
                                </div>

                            </div>

                            <ResponsiveContainer
                                width="100%"
                                height={380}
                            >

                                <BarChart data={dailyData}>

                                    <CartesianGrid strokeDasharray="3 3" />

                                    <XAxis dataKey="day" />

                                    <YAxis />

                                    <Tooltip />

                                    <Legend />

                                    <Bar
                                        dataKey="expense"
                                        fill="#0066cc"
                                        radius={[12, 12, 0, 0]}
                                    />

                                </BarChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default BudgetAnalytics;