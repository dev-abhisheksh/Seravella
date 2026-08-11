import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

export function DatePickerField({
  label,
  value,
  onChange,
  min,
  required = false,
  className,
  id,
}) {
  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-semibold text-[#C9A24B] uppercase tracking-wider flex items-center gap-1.5 font-sans"
        >
          <CalendarIcon className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
          <span>{label}</span>
        </label>
      )}

      <div className="relative flex items-center w-full">
        <input
          id={id}
          type="date"
          required={required}
          value={value}
          onChange={onChange}
          min={min}
          className="w-full min-h-[48px] bg-[#0B2545] hover:bg-[#133863] border border-[#C9A24B]/40 focus:border-[#C9A24B] focus:ring-2 focus:ring-[#C9A24B]/30 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white transition-all duration-200 cursor-pointer outline-none shadow-md flex items-center justify-between dark-date-input"
        />
      </div>
    </div>
  );
}
