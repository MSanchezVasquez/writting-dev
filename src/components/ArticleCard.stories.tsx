import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from "./ArticleCard";

const meta: Meta<typeof ArticleCard> = {
  title: "Blog/ArticleCard",
  component: ArticleCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

// Historia 1: El artículo de GitHub Actions
export const GitHubActions: Story = {
  args: {
    title: "Build continuous integration pipelines with GitHub Actions",
    description:
      "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications",
    date: "June 24, 2022",
    category: "DevOps",

    image: "/assets/github-actions-ci.png",
  },
};

// Historia 2: El artículo de Docker
export const Docker: Story = {
  args: {
    title: "Deploying applications with Docker",
    description:
      "Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.",
    date: "June 24, 2022",
    category: "DevOps",
    image: "/assets/docker-deployment.png",
  },
};
