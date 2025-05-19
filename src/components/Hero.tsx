
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero background with pattern and gradient overlay */}
      <div className="absolute inset-0 pattern-background opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-krx">
            Сообщество 3D-художников и моделлеров
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Публикуйте свои работы, изучайте новые техники и находите вдохновение в KRX Community — платформе для 3D-художников, где каждый найдет что-то для себя.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-krx text-lg px-6 py-5">
              Начать публиковать
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            
            <Button variant="outline" className="text-lg px-6 py-5">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
