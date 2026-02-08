import styles from "./Features.module.css";
import Section from "../Section/Section";
import Container from "../Container/Container";
import FEATURES_LIST from "../../app/featuresListData";
import FeaturesCard from "../FeaturesCard/FeaturesCard";

const Features = () => {
  return (
    <Section variant="features">
      <Container>
        <ul className={styles.list}>
          {FEATURES_LIST.map((feature) => (
            <FeaturesCard key={feature.id} feature={feature} />
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Features;
