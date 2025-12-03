export const NavCategories = () => {
  return (
    <nav className="container" aria-label="Categorías">
      <div className="icons">
        <img src="./assets/Grid Icon.svg" alt="Vista en cuadrícula" />
        <img src="./assets/List Icon.svg" alt="Vista en lista" />
      </div>
      <a href="#">JavaScript</a>
      <a href="#">DevOps</a>
      <a href="#">Cloud</a>
      <a href="#">Terraform</a>
      <a href="#">Architecture</a>
      <a href="#">Scalability</a>
      <span>
        <a href="#">Explainers</a>
        <div className="linear-gradient"></div>
      </span>
    </nav>
  );
};
