<template>
  <NuxtLink :class="twMerge(button({ intent, size }))">
    <slot />
  </NuxtLink>
</template>

<script setup>
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "h-10",
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "text-center",
    "px-5",
    "text-sm",
    "font-medium",
    "text-primary-50",
    "rounded-lg",
    "active:scale-90",

    "focus:outline-2",
    "focus:outline-offset-2",

    "transition-colors",
  ],

  {
    variants: {
      intent: {
        primary: [
          "text-secondary-50",
          "bg-secondary-500",
          "hover:bg-secondary-600",
          "focus:outline-secondary-200",
        ],
        secondary: [
          "border",
          "border-primary-700",
          "text-primary-300",
          "hover:text-primary-50",
          "hover:border-primary-500",
          "focus:outline-primary-200",
        ],
      },
      size: {
        small: "small",
        medium: "medium",
      },
    },
  }
);

const props = defineProps({
  intent: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "small",
  },
});
</script>

<style scoped></style>
