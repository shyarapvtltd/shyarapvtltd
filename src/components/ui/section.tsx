import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  container?: "tight" | "wide" | "full";
}

export const Section = ({ 
  children, 
  className, 
  id,
  container = "wide" 
}: SectionProps) => {
  const containerClass = {
    tight: "container-tight",
    wide: "container-wide",
    full: "w-full px-6",
  }[container];

  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className={containerClass}>
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  align = "center",
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-12 md:mb-16",
      align === "center" && "text-center",
      className
    )}>
      <h2 className="text-headline font-semibold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Section;
