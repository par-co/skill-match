import "./CareerCard.css";
import { FiMapPin, FiClock } from "react-icons/fi";

export default function CareerCard({ career }) {
  return (
    <div className="career-card">
      <h3 className="career-card-title ">{career.title}</h3>
      <div className="icon-and-tag">
        <FiMapPin className="icon" />
        <span className="tag">{career.location}</span>
      </div>
      <div className="icon-and-tag">
        <FiClock className="icon" />
        <span className="tag">{career.type}</span>
      </div>
    </div>
  );
}
