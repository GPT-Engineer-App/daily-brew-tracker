import { Container, Text, VStack, Heading, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [caffeineIntake, setCaffeineIntake] = useState(0);
  const toast = useToast();

  const handleAddCaffeine = () => {
    setCaffeineIntake(caffeineIntake + 1);
    toast({
      title: "Caffeine Added",
      description: `You have consumed ${caffeineIntake + 1} cups of coffee today.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Caffeine Tracker</Heading>
        <Text fontSize="xl">Track your daily caffeine intake</Text>
        <Text fontSize="2xl" fontWeight="bold">{caffeineIntake} cups</Text>
        <Button colorScheme="teal" size="lg" onClick={handleAddCaffeine}>Add a Cup</Button>
      </VStack>
    </Container>
  );
};

export default Index;