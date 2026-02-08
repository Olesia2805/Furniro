import { useState, useEffect } from "react";
import BlogCard from "../BlogCard/BlogCard";
import styles from "../BlogList/BlogList.module.css";
import { usePagination } from "../../hooks/usePagination";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { currentPage, totalPages, currentItems, handlePageChange } =
    usePagination(posts, 3);

  useEffect(() => {
    fetch("/data/posts.json")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error", error));
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className={styles.articleSide}>
      <ul className={styles.list}>
        {currentItems.map((post) => (
          <article className={styles.article} key={post.id}>
            <BlogCard post={post} />
          </article>
        ))}
      </ul>

      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogList;
