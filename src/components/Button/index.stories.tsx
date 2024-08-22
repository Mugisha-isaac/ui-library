import {Meta, StoryObj} from '@storybook/react';
import {Button} from '.';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters:{
        layout: 'centered',
    },
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args:{
        children: 'Click me',
        variant: 'solid',
        size: 'md',
        colorScheme: 'primary',
    }
}

export const Outline: Story = {
    args:{
        children: 'Click me',
        variant: 'outline',
        size: 'md',
        colorScheme: 'primary',
    }
}

export const Ghost: Story = {
    args:{
        children: 'Click me',
        variant: 'ghost',
        size: 'md',
        colorScheme: 'primary',
    }
}