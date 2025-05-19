
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CategoryTabs from '@/components/CategoryTabs';
import InfiniteGallery from '@/components/InfiniteGallery';
import RegistrationModal from '@/components/RegistrationModal';

const Index = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleLoginClick = () => {
    // For now, just open the registration modal
    // In a future iteration, we would create a separate login modal
    setIsRegistrationModalOpen(true);
  };

  return (
    <div className="min-h-screen pattern-background">
      <Navigation 
        onRegisterClick={handleRegisterClick} 
        onLoginClick={handleLoginClick} 
      />
      
      <Hero />
      
      <main>
        <CategoryTabs />
        <InfiniteGallery />
      </main>
      
      <footer className="border-t py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 mr-2 bg-gradient-krx rounded-md">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="font-semibold">KRX Community</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Платформа для 3D-художников и моделлеров
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                О проекте
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Правила
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Конфиденциальность
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Обратная связь
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2025 KRX Community. Все права защищены.
          </div>
        </div>
      </footer>
      
      {/* Modals */}
      <RegistrationModal 
        isOpen={isRegistrationModalOpen} 
        onClose={() => setIsRegistrationModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
