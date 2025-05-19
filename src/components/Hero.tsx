import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero background with pattern and gradient overlay */}
      <div className="absolute inset-0 pattern-background opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>

      <div className="w-full px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="floating-element-slow">
            <div className="inline-block mb-3 bg-primary/10 px-4 py-1 border border-primary/20 text-primary">
              Вершина 3D творчества
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground relative">
            <span className="relative">
              Сообщество 3D-художников и моделлеров
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-krx"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Публикуйте свои работы, изучайте новые техники и находите
            вдохновение в KRX Community — платформе для 3D-художников, где
            каждый найдет что-то для себя.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-krx text-lg px-6 py-5 rounded-none text-dark-green glow-effect">
              Начать публиковать
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              className="text-lg px-6 py-5 rounded-none border border-primary/50 hover:bg-primary/5"
            >
              Узнать больше
            </Button>
          </div>

          <div className="mt-8 flex justify-center gap-12 text-sm text-muted-foreground">
            <div className="floating-element">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary">25K+</span>
                <span>Художников</span>
              </div>
            </div>
            <div className="floating-element-slow">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary">138K+</span>
                <span>Проектов</span>
              </div>
            </div>
            <div className="floating-element">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary">5.2M+</span>
                <span>Просмотров</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
