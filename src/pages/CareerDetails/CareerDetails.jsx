import "./CareerDetails.css";
import { useLoaderData } from "react-router-dom";
import Section from "../../components/Section/Section";
import CareerCard from "../../components/CareerCard/CareerCard";

export default function CareerDetails() {
  const career = useLoaderData();

  return (
    <main className="career-details">
      <CareerCard career={career} />
      <p className="description">{career.description}</p>
      <Section
        sectionTitle={"Responsibilities"}
        bulletPoints={career.responsibilities}
      />
      <Section
        sectionTitle={"Required Skills"}
        bulletPoints={career.requiredSkills}
      />
      <Section
        sectionTitle={"Benefits & Perks"}
        bulletPoints={career.benefitsAndPerks}
      />
    </main>
  );
}
