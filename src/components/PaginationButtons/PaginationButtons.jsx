import styles from "./PaginationButtons.module.css";
import Button from "../Button/Button";

const PaginationButtons = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((i) => i + 1);
  if (totalPages <= 1) return null;

  return (
    <div className={styles.buttons}>
      {pageNumbers.map((number) => (
        <Button
          key={number}
          variant={currentPage === number ? "pagination-active" : "pagination"}
          onClick={() => onPageChange(number)}
        >
          {number}
        </Button>
      ))}
    </div>
  );
};

export default PaginationButtons;
