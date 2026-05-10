import { useEffect, useState } from "react";
import axios from "axios";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
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

.budget-root{
  min-height:100vh;
  background:var(--paper);
  font-family:'DM Sans',sans-serif;
  color:var(--ink);
  position:relative;
  overflow-x:hidden;
}

.budget-root::before{
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

.budget-root::after{
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

.budget-inner{
  position:relative;
  z-index:1;
  max-width:1350px;
  margin:0 auto;
  padding:48px;
}

.header{
  margin-bottom:50px;
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
  font-size:68px;
  font-weight:800;
  line-height:0.95;
  letter-spacing:-0.04em;
  margin:0;
}

.page-title span{
  color:var(--accent);
}

.page-subtitle{
  margin-top:18px;
  color:var(--muted);
  font-size:15px;
  max-width:600px;
  line-height:1.7;
}

.cards-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:24px;
  margin-bottom:40px;
}

.budget-card{
  background:var(--card);
  border:1.5px solid var(--border);
  border-radius:28px;
  padding:30px;
  position:relative;
  overflow:hidden;
  transition:all .2s ease;
}

.budget-card:hover{
  transform:translateY(-5px);
  box-shadow:0 18px 40px rgba(0,0,0,0.08);
}

.budget-card::after{
  content:'';
  position:absolute;
  right:-20px;
  bottom:-20px;
  width:100px;
  height:100px;
  border-radius:50%;
  opacity:.08;
}

.budget-card:nth-child(1)::after{
  background:var(--accent);
}

.budget-card:nth-child(2)::after{
  background:var(--accent2);
}

.budget-card:nth-child(3)::after{
  background:#7c3aed;
}

.budget-card:nth-child(4)::after{
  background:#059669;
}

.card-label{
  font-size:12px;
  font-weight:600;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--muted);
  margin-bottom:12px;
}

.card-value{
  font-family:'Syne',sans-serif;
  font-size:42px;
  font-weight:800;
  letter-spacing:-0.04em;
}

.budget-card:nth-child(1) .card-value{
  color:var(--accent);
}

.budget-card:nth-child(2) .card-value{
  color:var(--accent2);
}

.budget-card:nth-child(3) .card-value{
  color:#7c3aed;
}

.budget-card:nth-child(4) .card-value{
  color:#059669;
}

.chart-card{
  background:var(--card);
  border:1.5px solid var(--border);
  border-radius:32px;
  padding:34px;
  height:560px;
  transition:all .2s ease;
}

.chart-card:hover{
  transform:translateY(-4px);
  box-shadow:0 18px 40px rgba(0,0,0,0.08);
}

.chart-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}

.chart-title{
  font-family:'Syne',sans-serif;
  font-size:30px;
  font-weight:800;
  letter-spacing:-0.03em;
}

.chart-tag{
  padding:7px 14px;
  border-radius:999px;
  background:#fff1eb;
  color:#c2410c;
  font-size:11px;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
}

.empty-state{
  background:var(--card);
  border:2px dashed var(--border);
  border-radius:28px;
  padding:60px;
  text-align:center;
  color:var(--muted);
  font-size:16px;
}

.loading-text{
  color:var(--muted);
  font-size:14px;
  letter-spacing:.05em;
}

@media(max-width:1100px){

  .cards-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:768px){

  .budget-inner{
    padding:28px 20px;
  }

  .page-title{
    font-size:48px;
  }

  .cards-grid{
    grid-template-columns:1fr;
  }

  .chart-card{
    height:500px;
    padding:22px;
  }
}
`;

function Budget() {

    const [budget, setBudget] = useState([]);

    const COLORS = [
        "#ff6b35",
        "#0066cc",
        "#7c3aed",
        "#059669",
        "#f59e0b",
        "#ec4899"
    ];

    // Fetch Budget
    const fetchBudget = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/budget"
            );

            setBudget(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {
        fetchBudget();
    }, []);

    return (

        <>
            <style>{styles}</style>

            <div className="budget-root">

                <div className="budget-inner">

                    {/* HEADER */}
                    <div className="header">

                        <div className="brand-eyebrow">
                            Smart Expense Tracking
                        </div>

                        <h1 className="page-title">
                            Budget <span>Planner</span>
                        </h1>

                        <p className="page-subtitle">
                            Analyze your travel spending,
                            monitor category-wise expenses,
                            and visualize your complete trip budget.
                        </p>

                    </div>

                    {/* LOADING */}
                    {budget.length === 0 ? (

                        <div className="loading-text">
                            Loading budget details...
                        </div>

                    ) : (

                        <>
                            {/* BUDGET CARDS */}
                            <div className="cards-grid">

                                {budget.map((item, index) => (

                                    <div
                                        key={index}
                                        className="budget-card"
                                    >

                                        <div className="card-label">
                                            {item.category}
                                        </div>

                                        <div className="card-value">
                                            ₹ {item.total}
                                        </div>

                                    </div>

                                ))}

                            </div>

                            {/* CHART */}
                            <div className="chart-card">

                                <div className="chart-header">

                                    <h2 className="chart-title">
                                        Expense Breakdown
                                    </h2>

                                    <div className="chart-tag">
                                        Analytics
                                    </div>

                                </div>

                                <ResponsiveContainer
                                    width="100%"
                                    height="90%"
                                >

                                    <PieChart>

                                        <Pie
                                            data={budget}
                                            dataKey="total"
                                            nameKey="category"
                                            outerRadius={160}
                                            innerRadius={70}
                                            paddingAngle={4}
                                            label
                                        >

                                            {budget.map(
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
                        </>
                    )}

                    {/* EMPTY STATE */}
                    {!budget.length && (

                        <div className="empty-state">
                            No budget records found.
                        </div>

                    )}

                </div>

            </div>
        </>
    );
}

export default Budget;