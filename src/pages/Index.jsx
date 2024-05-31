import { useState } from "react";
import { Box, Container, Flex, Heading, HStack, Image, Input, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$199",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: "$299",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <FaShoppingCart />
        </HStack>
      </Flex>

      <Box as="section" mt={10}>
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          mb={6}
        />
        <Heading as="h2" size="xl" mb={6} textAlign="center">Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold" mt={2}>{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;