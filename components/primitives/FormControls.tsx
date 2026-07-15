import React from "react";
import { cn } from "@/lib/utils";

// --- Label ---
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "block text-sm font-medium text-brand-green-deep mb-1.5",
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
    </label>
  )
);
Label.displayName = "Label";

// --- Input ---
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-sm border border-brand-stone bg-white px-3 py-2 text-sm text-brand-green-deep file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-brand-text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:border-brand-sage disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          error && "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// --- Textarea ---
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[120px] w-full rounded-sm border border-brand-stone bg-white px-3 py-2 text-sm text-brand-green-deep placeholder:text-brand-text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:border-brand-sage disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          error && "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

// --- Select ---
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-sm border border-brand-stone bg-white px-3 py-2 text-sm text-brand-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:border-brand-sage disabled:cursor-not-allowed disabled:opacity-50 transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%232C332F%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] bg-no-repeat pr-10",
          error && "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

// --- Checkbox ---
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        className={cn(
          "h-4 w-4 rounded-sm border-brand-stone text-brand-sage focus:ring-brand-sage focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-ivory disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
    );
  }
);
Checkbox.displayName = "Checkbox";

// --- Radio ---
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        type="radio"
        ref={ref}
        className={cn(
          "h-4 w-4 border-brand-stone text-brand-sage focus:ring-brand-sage focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-ivory disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
    );
  }
);
Radio.displayName = "Radio";

// --- FormHelpText ---
export const FormHelpText = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-xs text-brand-text-muted mt-1.5", className)}
        {...props}
      />
    );
  }
);
FormHelpText.displayName = "FormHelpText";

// --- FormErrorMessage ---
export const FormErrorMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-xs font-medium text-red-600 mt-1.5", className)}
        {...props}
      />
    );
  }
);
FormErrorMessage.displayName = "FormErrorMessage";
