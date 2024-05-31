import { useState } from "react";
import { Box, Container, Flex, Heading, HStack, Image, Input, Link, SimpleGrid, Text, VStack, Select } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: 699,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    brand: "Brand A"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: 999,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    brand: "Brand B"
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: 199,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    brand: "Brand C"
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: 299,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
    brand: "Brand A"
  }
];

const categories = ["All", "Electronics", "Fashion", "Home Appliances"];
const brands = ["All", "Brand A", "Brand B", "Brand C"];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [brand, setBrand] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    const [min, max] = event.target.value.split("-");
    setPriceRange([parseInt(min), parseInt(max)]);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand = brand === "All" || product.brand === brand;
    return matchesCategory && matchesPriceRange && matchesBrand;
  });

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
        <HStack spacing={4} mb={6}>
          <Select placeholder="Select category" value={category} onChange={handleCategoryChange}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Select>
          <Select placeholder="Select price range" value={priceRange.join("-")} onChange={handlePriceRangeChange}>
            <option value="0-100">$0 - $100</option>
            <option value="100-500">$100 - $500</option>
            <option value="500-1000">$500 - $1000</option>
          </Select>
          <Select placeholder="Select brand" value={brand} onChange={handleBrandChange}>
            {brands.map((br) => (
              <option key={br} value={br}>{br}</option>
            ))}
          </Select>
        </HStack>
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
                <Text fontWeight="bold" mt={2}>${product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;