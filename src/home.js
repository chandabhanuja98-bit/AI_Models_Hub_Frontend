import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  const modelCategories = [
    {
      title: "Regression Models",
      description: "Predict numeric outcomes from real-world data patterns.",
      route: "/regression-models",
      badge: "Price Forecasting",
    },
    {
      title: "Classification Models",
      description: "Classify records into meaningful prediction categories.",
      route: "/classification-models",
      badge: "Decision Systems",
    },
  ];

  return (
    <div className="home-container">
      <div className="navbar">
        <div className="brand">
          <span className="brand-mark">ML</span>
          <span>PredictLab</span>
        </div>

        <button
          className="nav-btn"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>

        <button
          className="nav-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>

      <main className="home-content">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Machine Learning Workspace</p>
            <h1>Explore smart prediction models in one place.</h1>
            <p className="hero-text">
              Choose a model family and test predictions for prices, approvals,
              flowers, and more with a clean interactive interface.
            </p>

            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => navigate("/regression-models")}
              >
                Start Predicting
              </button>
              <button
                className="secondary-btn"
                onClick={() => navigate("/classification-models")}
              >
                View Classifiers
              </button>
            </div>
          </div>

          <div className="insight-panel">
            <div className="panel-header">
              <span>Model Overview</span>
              <span className="status-pill">Ready</span>
            </div>
            <div className="metric-grid">
              <div>
                <strong>4</strong>
                <span>Prediction Tools</span>
              </div>
              <div>
                <strong>2</strong>
                <span>Model Families</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Browser Based</span>
              </div>
            </div>
            <div className="chart-bars">
              <span className="bar bar-one"></span>
              <span className="bar bar-two"></span>
              <span className="bar bar-three"></span>
              <span className="bar bar-four"></span>
            </div>
          </div>
        </section>

        <section className="model-grid">
          {modelCategories.map((model) => (
            <button
              key={model.title}
              className="model-card"
              onClick={() => navigate(model.route)}
            >
              <span className="model-badge">{model.badge}</span>
              <strong>{model.title}</strong>
              <span>{model.description}</span>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}
