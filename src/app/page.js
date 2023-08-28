"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating defaultValue={0} size="lg" />
      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        mt="xs"
        minRows={3}
      />
      <Button color="orange" mt="xs">
        Submit Review
      </Button>
      <Divider mt="sm"></Divider>
      <Group position="center" mt="sm" size="100px">
        <Title order={4}>Elon Musk</Title>
        <Rating defaultValue={5} />
      </Group>
      <Group position="center">
        <Text c="dimmed">Best pizza in this world. I give you X score.</Text>
      </Group>
      <Divider mt="sm"></Divider>
      <Group position="center" mt="sm">
        <Title order={4}>Mark Zuck</Title>
        <Rating defaultValue={4} />
      </Group>
      <Group position="center">
        <Text c="dimmed">My favourite part is pepperoni</Text>
      </Group>
      <Pagination color="orange" total={20} position="center" mt="md" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Wayu Tharai 650610806
      </Text>
    </Container>
  );
}
