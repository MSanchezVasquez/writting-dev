import { ArticleCard } from "./components/ArticleCard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavCategories } from "./components/NavCategories";
import { Navegacion } from "./components/Navegacion";
import data from "./data";

function App() {
  return (
    <>
      <Header />
      <NavCategories />
      <section className="articles">
        {data.map((article: any) => (
          <ArticleCard
            image={article.image}
            title={article.title}
            description={article.description}
            date={article.date}
            category={article.category}
          />
        ))}
      </section>
      <Navegacion />
      <Footer />
    </>
  );
}

export default App;
