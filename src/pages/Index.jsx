import { Container, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Navbar />
      <VStack spacing={8} mt={8}>
        <FeaturedProducts />
      </VStack>
    </Container>
  );
};

export default Index;