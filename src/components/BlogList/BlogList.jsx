import { useState, useEffect } from "react";
import BlogCard from "../BlogCard/BlogCard";
import styles from "../BlogList/BlogList.module.css";
import Button from "../Button/Button";

//TODO: Smooth Scroll

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    fetch("/data/posts.json")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error", error));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className={styles.articleSide}>
      <ul className={styles.list}>
        {currentPosts.map((post) => (
          <article className={styles.article} key={post.id}>
            <BlogCard post={post} />
          </article>
        ))}
      </ul>

      <ul className={styles.buttons}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Button
              onClick={() => paginate(number)}
              variant={
                currentPage === number ? "pagination-active" : "pagination"
              }
            >
              {number}
            </Button>
          </li>
        ))}
        <Button
          variant="pagination"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </ul>
    </div>
  );
};

export default BlogList;
