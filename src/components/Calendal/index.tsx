import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps, forwardRef } from "react"

const calendalStyles = cva(
    [
        "w-full",
        "rounded-md",
        "font-semibold",
        "focus:outline-none",
        "disabled:cursor-not-allowed"
    ],
    {
        variants: {
            variant: {
                solid: "",
                outline: "border-2",
                ghost: "transition-colors duration-300"
            },
            size: {
                sm: "px-4 py-2 text-sm",
                md: "px-4 py-2 text-base",
                lg: "px-6 py-3 text-lg"
            },
            colorScheme: {
                primary: "bg-blue-500 text-white"
            }
        },
        compoundVariants: [
            {
                variant: "solid",
                colorScheme: "primary",
                className: "bg-primary-500 hover:bg-blue-600"
            },
            {
                variant: "outline",
                colorScheme: "primary",
                className: "text-primary-600 border-primary-500 hover:bg-primary-100 bg-transparent"
            },
            {
                variant: "ghost",
                colorScheme: "primary",
                className: "text-primary-600 bg-transparent hover:bg-primary-100"
            }
        ],
        defaultVariants: {
            variant: "solid",
            size: "md",
            colorScheme: "primary"
        }
    }
)

type CalendalProps = ComponentProps<"input"> & VariantProps<typeof calendalStyles>;

export const Calendal = forwardRef<HTMLInputElement, CalendalProps>(
    ({ variant, size, colorScheme, className, ...props }, ref) => {
        return (
            <input
                type="date"
                ref={ref}
                className={cn(calendalStyles({ variant, size, colorScheme }), className)}
                {...props}
            />
        )
    }
);