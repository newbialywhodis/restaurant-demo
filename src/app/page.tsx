import { Container, Stack, Card, SimpleGrid, Box } from "@mantine/core";
import Hero from "@/components/Hero/Hero";
import PopularDishes from "@/components/PopularDishes/PopularDishes";
import { getMenu } from "@/server/menu";
import { OpeningHours } from "@/components/OpeningHours/OpeningHours";
import { HomeContact } from "@/components/HomeContact/HomeContact";
import { HowToOrder } from "@/components/HowToOrder/HowToOrder";

export default async function HomePage() {
  const allDishes = await getMenu();
  const popularDishes = allDishes.filter((dish) => dish.popular);
  return (
    <Container size={"xl"} py="xl">
      <Stack gap="xl">
        <Hero />

        <PopularDishes popularDishes={popularDishes} />

        <Box id="how-to-order">
          <HowToOrder />
        </Box>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Card shadow="sm" padding="lg" withBorder>
            <OpeningHours />
          </Card>

          <Card shadow="sm" padding="lg" withBorder>
            <HomeContact />
          </Card>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
