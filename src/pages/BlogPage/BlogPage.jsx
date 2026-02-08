import BlogList from "../../components/BlogList/BlogList";
import Container from "../../components/Container/Container";
import Features from "../../components/Features/Features";
import HeroPage from "../../components/Hero/HeroPage";
import Section from "../../components/Section/Section";

const BlogPage = () => (
  <>
    <HeroPage title="Blog" />
    <Section variant="blog">
      <Container>
        <BlogList />
      </Container>
    </Section>

    <Features />
  </>
);

export default BlogPage;
