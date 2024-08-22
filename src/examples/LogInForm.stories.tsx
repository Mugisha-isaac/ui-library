import { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LogInForm";

const meta: Meta<typeof LoginForm> = {
  title: "Examples/LogInForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {};
