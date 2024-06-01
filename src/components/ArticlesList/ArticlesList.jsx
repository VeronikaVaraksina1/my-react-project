export const ArticlesList = ({ articles }) => {
  return (
    <>
      <h2>List of Articles:</h2>
      <ul>
        {articles.map(article => (
          <li key={article.story_id}>
            <a target="_blank" rel="noreferrer noopener" href={article.url}>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
