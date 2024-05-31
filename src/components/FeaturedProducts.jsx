import { Box, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: "$299",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: "$799",
  },
  {
    id: 3,
    name: "Smartwatch",
    image: "https://via.placeholder.com/150",
    price: "$199",
  },
  {
    id: 4,
    name: "Headphones",
    image: "https://via.placeholder.com/150",
    price: "$99",
  },
];

const FeaturedProducts = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Featured Products</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {sampleProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <VStack p={4} align="start">
              <Text fontWeight="bold">{product.name}</Text>
              <Text>{product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturedProducts;