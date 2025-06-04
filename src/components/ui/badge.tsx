import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'destructive' | 'success';
  className?: string;
}

const variantStyles = {
  default: 'bg-blue-100 text-blue-800',
  secondary: 'bg-gray-100 text-gray-800',
  destructive: 'bg-red-100 text-red-800',
  success: 'bg-green-100 text-green-800',
};

export function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
} 