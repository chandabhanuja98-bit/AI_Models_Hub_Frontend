import { useNavigate } from "react-router-dom";
import "./home.css";

export default function RegressionModels() {
  const navigate = useNavigate();
  const regressionModels = [
    {
      title: "House Price Prediction",
      description: "Estimate property prices using housing and area details.",
      route: "/house-price-prediction",
      tag: "Real Estate",
      metric: "Numeric Output",
    },
    {
      title: "Mobile Price Prediction",
      description: "Predict a mobile phone price range from feature inputs.",
      route: "/mobile-price-prediction",
      tag: "Product Pricing",
      metric: "Market Value",
    },
  ];

  return (
    <div className="models-page regression-models-container">
      <nav className="models-nav">
        <button className="back-btn" onClick={() => navigate("/")}>
          Back Home
        </button>
      </nav>

      <section className="models-hero">
        <p className="eyebrow">Regression Suite</p>
        <h1>Predict continuous values with focused regression tools.</h1>
        <p>
          Select a regression model to estimate prices and numeric outcomes from
          structured input data.
        </p>
      </section>

      <section className="model-list">
        {regressionModels.map((model) => (
          <button
            key={model.title}
            className="feature-model-card"
            onClick={() => navigate(model.route)}
          >
            <span className="model-badge">{model.tag}</span>
            <strong>{model.title}</strong>
            <span className="model-description">{model.description}</span>
            <span className="model-meta">{model.metric}</span>
          </button>
        ))}
      </section>
    </div>
  );
}
