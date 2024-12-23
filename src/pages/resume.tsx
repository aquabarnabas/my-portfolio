import "./resume.css";

export default function Resume() {
  return (
    <main>
      <h1>Resume</h1>
      <section>
        <h2>Front End</h2>
        <ul className="bullet-points">
          <li>React</li>
          <li>TypeScript</li>
          <li>TailwindCSS</li>
          <li>Bulma</li>
        </ul>
      </section>

      <h1>Bask End</h1>
      <ul className="bullet-points">
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
    </main>
  );
}
