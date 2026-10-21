import react from 'react';
import './Analytics.css';

function Analytics(){
   const metrics =[
    {id: 1, label: "Avarege Page Load Time", value: "0.24s", status: "optimal" },
    {id: 2, label: "Core Web Vital Score", value: "99/100", status: "passed" },
    {id: 3, label: "Client Conversion lift", value: "+34.5%", status: "Accelerating" },
   ]

   return (
    <section id="analytics" className="analytics-container">
        <div className="analytics-wrapper">
            <div classname="analytics-text-side">
                <h2 className="analytics-title">Real-Time Infrastructure Analytics</h2>
                <p className="analytics-description">
                    We don't just build sites; we optimize network payloads. Every interface we deploy
                    is structurally engineereed to maintain sub-second rendering times, ensuring your 
                    customers never face loading bottlenecks.
                </p>
            </div>

            <div className="analytics-dashboard-side">
                <div className="dashboard-frame">
                    <div className="dashboard-header">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                        <span className="header-tittle">performance_metrics.json</span>
                    </div>

                    <div className="dashboard-body">
                        {metrics.map(metric=> (
                            <div key={metric.id} className="metric-arrow">
                                <div className="metric-info">
                                    <span className="metric-label">{metric.label}</span>
                                    <span className="metric-value">{metric.value}</span>
                                </div>
                                <div className="metric-status-bar">
                                    <div className="status-indicator-dot"></div>
                                    <span className="status-text">{metric.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
   )
}

export default Analytics;