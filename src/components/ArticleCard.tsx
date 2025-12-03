interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

export const ArticleCard = ({
  image,
  title,
  description,
  date,
  category,
}: ArticleCardProps) => {
  return (
    <div className="article">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="info">
        <span>{date}</span>
        <span>.</span>
        <span>{category}</span>
      </div>
    </div>
  );
};
