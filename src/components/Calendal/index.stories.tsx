import { Meta, StoryObj } from "@storybook/react";
import { Calendal } from ".";

const meta: Meta<typeof Calendal> = {
    title: "Components/Calendal",
    component: Calendal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

// define possible stories of calendal
export const Solid: Story = {
    args: {
        variant: "solid",
        colorScheme: "primary",

    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        colorScheme: "primary",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        colorScheme: "primary",
    },
};