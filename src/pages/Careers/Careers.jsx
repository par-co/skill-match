import "./Careers.css";
import { Link, useLoaderData } from "react-router-dom";
import CareerCard from "../../components/CareerCard/CareerCard";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <main className="careers">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam maxime
        velit officiis. Sapiente, nisi eos aut distinctio, vel eaque tenetur,
        incidunt veritatis est magnam dolore placeat labore natus rem maiores!
      </p>

      {careers.map((career) => (
        <div key={career.id} className="hover card-border gold-background mb-1">
          <Link to={career.id} className="link">
            <CareerCard career={career} />
          </Link>
        </div>
      ))}
    </main>
  );
}
