"use client";
import { Code, PenTool, Zap } from "lucide-react";

import MotionDiv from "./MotionDiv";

interface ServicesSectionProps {
  dict: {
    title: string;
    subtitle: string;
    items: {
      web: {
        title: string;
        description: string;
      };
      mobile: {
        title: string;
        description: string;
      };
      design: {
        title: string;
        description: string;
      };
      strategy: {
        title: string;
        description: string;
      };
      ecommerce: {
        title: string;
        description: string;
      };
      branding: {
        title: string;
        description: string;
      };
    };
  };
}

export default function ServicesSection({ dict }: ServicesSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.title}</h2>
          <p className="text-xl text-muted-foreground">{dict.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MotionDiv
            className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-800/10 hover:border-primary-700/30"
            delay={0.6}
            type="fadeInUp"
          >
            <div className="w-12 h-12 rounded-full bg-primary-400/20 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary-400" />
            </div>
            <h3 className="font-medium text-xl mb-2">{dict.items.web.title}</h3>
            <p className="text-muted-foreground">
              {dict.items.web.description}
            </p>
          </MotionDiv>

          <MotionDiv
            className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-800/10 hover:border-primary-700/30"
            delay={0.8}
            type="fadeInUp"
          >
            <div className="w-12 h-12 rounded-full bg-primary-400/20 flex items-center justify-center mb-4">
              <PenTool className="h-6 w-6 text-primary-400" />
            </div>
            <h3 className="font-medium text-xl mb-2">
              {dict.items.design.title}
            </h3>
            <p className="text-muted-foreground">
              {dict.items.design.description}
            </p>
          </MotionDiv>

          <MotionDiv
            className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-800/10 hover:border-primary-700/30"
            delay={1.0}
            type="fadeInUp"
          >
            <div className="w-12 h-12 rounded-full bg-primary-400/20 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary-400" />
            </div>
            <h3 className="font-medium text-xl mb-2">
              {dict.items.strategy.title}
            </h3>
            <p className="text-muted-foreground">
              {dict.items.strategy.description}
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
