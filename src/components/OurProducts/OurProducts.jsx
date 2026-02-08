import styles from "./OurProducts.module.css";
import Section from "../Section/Section";
import Container from "../Container/Container";
import ProductCard from "../ProductCard/ProductCard";
import ButtonLink from "../ButtonLink/ButtonLink";
import { ROUTER } from "../../app/routes";
import { useState, useEffect } from "react";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <Section variant="primary">
      <Container variant="products">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h3 className={styles.title}>Our Products</h3>
            <ul className={styles.list}>
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
            <div className={styles.actions}>
              <ButtonLink to={ROUTER.SHOP} variant="secondary">
                Show More
              </ButtonLink>
            </div>
          </>
        )}
      </Container>
    </Section>
  );
};

export default OurProducts;
