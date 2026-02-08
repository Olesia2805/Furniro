import { useState, useEffect } from "react";
import Features from "../../components/Features/Features";
import HeroPage from "../../components/Hero/HeroPage";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import ProductCard from "../../components/ProductCard/ProductCard";
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons";
import styles from "./ShopPage.module.css";
import { usePagination } from "../../hooks/usePagination";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { currentPage, totalPages, currentItems, handlePageChange } =
    usePagination(products, 16);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <>
      <HeroPage title="Shop" />
      <Section variant="shop">
        <Container variant="products">
          {isLoading ? (
            <p>Loading products...</p>
          ) : (
            <>
              <ul className={styles.list}>
                {currentItems.map((product) => (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>
              <PaginationButtons
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </Container>
      </Section>

      <Features />
    </>
  );
};

export default ShopPage;
