import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-[#0B2545] text-white shadow',
        gold: 'border-[#C9A24B]/40 bg-[#C9A24B]/20 text-[#C9A24B] border',
        goldSolid: 'bg-[#C9A24B] text-[#0B2545] font-bold shadow-md',
        ocean: 'bg-[#2C7DA0]/10 text-[#2C7DA0] border border-[#2C7DA0]/30',
        outline: 'text-slate-700 border border-slate-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
