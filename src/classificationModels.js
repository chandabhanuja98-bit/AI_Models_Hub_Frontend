import { useNavigate } from "react-router-dom";
import "./home.css";

export default function ClassificationModels() {
  const navigate = useNavigate();
  const classificationModels = [
    {
      title: "Iris Flower Prediction",
      description: "Identify iris flower species from sepal and petal values.",
      route: "/iris-flower-prediction",
      tag: "Flower Classifier",
      metric: "Species Label",
    },
    {
      title: "Loan Approval Prediction",
      description: "Classify loan applications using income, credit, and amount.",
      route: "/loan-approval-prediction",
      tag: "Finance",
      metric: "Approval Result",
    },
  ];

  return (
    <div className="models-page classification-models-container">
      <nav className="models-nav">
        <button className="back-btn" onClick={() => navigate("/")}>
          Back Home
        </button>
      </nav>

      <section className="models-hero">
        <p className="eyebrow">Classification Suite</p>
        <h1>Turn input features into clear prediction categories.</h1>
        <p>
          Choose a classifier to predict labels, decisions, and categories from
          your model inputs.
        </p>
      </section>

      <section className="model-list">
        {classificationModels.map((model) => (
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
