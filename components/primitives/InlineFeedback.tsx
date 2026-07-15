import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";

export interface InlineFeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  message: string;
  action?: React.ReactNode;
}

export function InlineFeedback({
  className,
  variant = "info",
  title,
  message,
  action,
  ...props
}: InlineFeedbackProps) {
  const Icon = {
    info: Info,
    success: CheckCircle2,
    warning: AlertTriangle,
    error: AlertCircle,
  }[variant];

  return (
    <div
      role={variant === "error" || variant === "warning" ? "alert" : "status"}
      aria-live="polite"
      className={cn(
        "rounded-sm border p-4 flex items-start gap-3",
        {
          "bg-blue-50 border-blue-200 text-blue-800": variant === "info",
          "bg-green-50 border-green-200 text-green-800": variant === "success",
          "bg-yellow-50 border-yellow-200 text-yellow-800": variant === "warning",
          "bg-red-50 border-red-200 text-red-800": variant === "error",
        },
        className
      )}
      {...props}
    >
      <Icon className={cn(
        "h-5 w-5 shrink-0 mt-0.5",
        {
          "text-blue-600": variant === "info",
          "text-green-600": variant === "success",
          "text-yellow-600": variant === "warning",
          "text-red-600": variant === "error",
        }
      )} aria-hidden="true" />
      
      <div className="flex-1 space-y-1">
        {title && <h4 className="font-medium">{title}</h4>}
        <p className="text-sm opacity-90 leading-relaxed">{message}</p>
        {action && <div className="mt-3">{action}</div>}
      </div>
    </div>
  );
}
