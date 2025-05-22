import "./Section.css";

export default function Section({ sectionTitle, bulletPoints }) {
  return (
    <div className="bullet-points">
      <h3>{sectionTitle}</h3>
      <ul>
        {bulletPoints.map((bulletPoint) => (
          <li key={bulletPoint.id} className="bullet-point">
            {bulletPoint.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
