import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-[#0B2545] text-white hover:bg-[#133863] shadow-md hover:shadow-lg',
        gold: 'bg-[#C9A24B] text-[#0B2545] hover:bg-[#A88232] shadow-md hover:shadow-xl',
        ocean: 'bg-[#2C7DA0] text-white hover:bg-[#1f5a75] shadow-md hover:shadow-lg',
        outline: 'border border-[#C9A24B]/40 text-[#0B2545] hover:bg-[#C9A24B]/10',
        glass: 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-8 rounded-lg px-3 text-xs',
        lg: 'h-12 rounded-full px-8 text-base',
        icon: 'h-10 w-10 p-0 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
