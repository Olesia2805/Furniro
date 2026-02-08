import ButtonLink from "../ButtonLink/ButtonLink";
import styles from "./BlogCard.module.css";
import { HiUser } from "react-icons/hi";
import { FaCalendar, FaTag } from "react-icons/fa";

const BlogCard = ({ post }) => {
  const { imageUrl, author, date, category, title, text } = post;

  return (
    <>
      <img
        className={styles.img}
        src={imageUrl}
        alt={title}
        width="815px"
        height="500px"
      />
      <ul className={styles.meta}>
        <li className={styles.metaItem}>
          <HiUser />
          <span>{author}</span>
        </li>
        <li className={styles.metaItem}>
          <FaCalendar />
          <span>{date}</span>
        </li>
        <li className={styles.metaItem}>
          <FaTag />
          <span>{category}</span>
        </li>
      </ul>
      <h3 className={styles.title}>{title}</h3>
      <p className={`muted ${styles.text}`}>{text}</p>
      <ButtonLink variant="blog">Read more</ButtonLink>
    </>
  );
};
export default BlogCard;
