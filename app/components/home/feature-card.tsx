import type { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  children?: ReactNode;
};

export default function FeatureCard({
  icon,
  title,
  children,
}: FeatureCardProps) {
  return (
    <div className="flex items-start space-x-4 space-x-reverse gap-4">
      <div className="flex-shrink-0 bg-blue-100 text-primary w-12 h-12 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}
