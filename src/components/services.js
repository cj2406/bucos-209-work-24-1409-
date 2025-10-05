//i used a module to link the css
import "../css/services.css";

//this is my services component
function Services() {
  return (
    //className alliows me to add css
    <section className="services">
      <h2>services section</h2>
      <div className="service-list">
        <div className="service-card">
          <h3>Space Tours</h3>
          <p>Experience zero gravity and see Earth from orbit.</p>
        </div>
        <div className="service-card">
          <h3>Training Programs</h3>
          <p>Prepare like a real astronaut with our expert team.</p>
        </div>
        <div className="service-card">
          <h3>Research Missions</h3>
          <p>Collaborate with scientists on groundbreaking space projects.</p>
        </div>
      </div>
    </section>
  );
}

//exports the component
export default Services;
