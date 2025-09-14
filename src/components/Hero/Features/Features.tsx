import {
  SimpleGrid,
  Text,
  Container,
  Paper,
  ThemeIcon,
  Box,
  Group,
} from "@mantine/core";
import { IconCar, IconLeaf, IconFlag } from "@tabler/icons-react";

const features = [
  {
    icon: IconCar,
    title: "Szybka dostawa",
    description: "Twoje zamówienie dotrze do Ciebie w mgnieniu oka.",
  },
  {
    icon: IconLeaf,
    title: "Naturalne składniki",
    description: "Korzystamy tylko ze świeżych i sprawdzonych produktów.",
  },
  {
    icon: IconFlag,
    title: "Polska firma",
    description: "Jesteśmy dumni, że możemy wspierać lokalną gospodarkę.",
  },
];

export default function Features() {
  return (
    <Container size="lg" py="xl">
      <Paper p="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {features.map((feature) => (
            <Group key={feature.title} align="flex-start" gap="md">
              <ThemeIcon size={65} variant="light" color="warmOrange">
                <feature.icon size={30} />
              </ThemeIcon>
              <Box style={{ flex: 1 }}>
                <Text fw={600} size="lg" mb={4}>
                  {feature.title}
                </Text>
                <Text size="sm" c="dimmed" lh={1.4}>
                  {feature.description}
                </Text>
              </Box>
            </Group>
          ))}
        </SimpleGrid>
      </Paper>
    </Container>
  );
}
