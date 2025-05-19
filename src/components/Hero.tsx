import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero background with darker teal/green gradient */}
      <div className="absolute inset-0 bg-hero-pattern opacity-60"></div>

      <div className="w-full px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Сообщество 3D-художников и моделлеров
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Публикуйте свои работы, изучайте новые техники и находите
            вдохновение в KRX Community — платформе для 3D-художников, где
            каждый найдет что-то для себя.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-krx text-lg px-6 py-5 rounded-none text-dark-green">
              Начать публиковать
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              className="text-lg px-6 py-5 rounded-none"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
