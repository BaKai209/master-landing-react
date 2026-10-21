import React from "react";
import "./Features.css";


function features() {
    
    const services = [
        {
            id: 1,
            title: "Premium web Development",
            description: "Custom High-performance React architectures Optimized for load speed and client conversion"
        },
        {
            id: 2,
            title:"Automated Support Suites",
            description: "Integrated real-time API monitoring and error handling modules to ensure 100% website uptime"
        },
        {
            id: 3,
            title: "Data Operations & CRM",
            description: "Structured relational database management to seamleesly filter and synchronize your customer metrics."
        }
    ];
    
    return(
        <section id="features" className="features-container">
            <h2 className="features-main-title">Our Digital Solutions Suite</h2>
            <p className="features-main-subtitle">Engineered to Scale business profiles with elite performance.</p>

            <div className="features-grid">
                {services.map(service =>(
                    <div key={service.id} className="feature-card">
                        <div className="feature-icon-wrapper">{service.id}</div>
                    <h3 className="feature-card-title">{service.title}</h3>
                    <p className="feature-card-desc">{service.description}</p>
                    </div>
                ))};

            </div>

        </section>
    )
}

export default features;