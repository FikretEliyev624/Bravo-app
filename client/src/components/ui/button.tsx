import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] px-4 text-sm font-medium transition-[transform,background-color,color] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[var(--bravo-green-500)] text-[var(--white)] hover:bg-[var(--bravo-green-400)]',
        secondary: 'bg-[var(--gray-100)] text-[var(--gray-900)] hover:bg-[var(--gray-200)]',
        ghost: 'bg-transparent text-[var(--gray-600)] hover:bg-[var(--gray-100)]'
      },
      size: {
        default: 'h-11',
        sm: 'h-9 rounded-[var(--radius-sm)] px-3 text-xs',
        icon: 'h-11 w-11 rounded-[var(--radius-full)] p-0'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)

Button.displayName = 'Button'

export { Button }
