
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import RegistrationModal from "@/components/RegistrationModal";

// Стилизация для оранжево-желтой темы магазина
const shopStyles = {
  banner: "bg-gradient-to-r from-amber-950 via-amber-700 to-orange-500",
  accent: "bg-amber-500",
  button: "bg-amber-500 hover:bg-amber-600 text-amber-950",
  outlineBtn: "border-amber-500 text-amber-500 hover:bg-amber-500/10",
  card: "border-amber-200 dark:border-amber-800",
  icon: "text-amber-500",
};

const products = [
  {
    id: 1,
    title: "Текстурный атлас: Природа",
    price: 1200,
    discountPrice: 990,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    badgeText: "Хит",
  },
  {
    id: 2,
    title: "Кисти для концепт-арта",
    price: 850,
    rating: 4.5,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1615184960519-195d5c2c4500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFydCUyMGJydXNoZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "3D модели: Научная фантастика",
    price: 2400,
    discountPrice: 1900,
    rating: 4.9,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1624277904878-06e064184edb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    badgeText: "Новинка",
  },
  {
    id: 4,
    title: "Набор HDRI окружений",
    price: 1600,
    rating: 4.7,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNreSUyMGhkcml8ZW58MHx8MHx8fDA%3D",
  },
];

const ShopPage = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(id => id !== productId));
  };

  const isInCart = (productId: number) => {
    return cart.includes(productId);
  };

  return (
    <div className="min-h-screen flex flex-col pattern-background">
      <Navigation 
        onRegisterClick={() => setIsRegistrationModalOpen(true)} 
        onLoginClick={() => setIsRegistrationModalOpen(true)} 
      />
      
      {/* Баннер */}
      <div className={`${shopStyles.banner} py-20 text-white`}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Творческие ресурсы для ваших проектов</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Высококачественные ассеты, текстуры, модели и инструменты для ваших творческих работ
          </p>
          <div className="mt-8 relative max-w-md">
            <Input 
              placeholder="Поиск ресурсов, моделей, текстур..." 
              className="pr-10 bg-white/10 border-white/20 placeholder:text-white/60 text-white"
            />
            <Button variant="ghost" className="absolute right-0 top-0 h-full aspect-square text-white">
              <Icon name="Search" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Основной контент */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Популярные ресурсы</h2>
          <div className="flex items-center">
            <Button variant="ghost" className="relative">
              <Icon name="ShoppingCart" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="3d">3D Модели</TabsTrigger>
            <TabsTrigger value="textures">Текстуры</TabsTrigger>
            <TabsTrigger value="tools">Инструменты</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className={`overflow-hidden ${shopStyles.card} hover:shadow-md transition-shadow`}>
              <div className="relative h-44 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
                {product.badgeText && (
                  <Badge className={`absolute top-2 right-2 ${shopStyles.accent}`}>
                    {product.badgeText}
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="flex items-baseline gap-2">
                  {product.discountPrice ? (
                    <>
                      <span className="text-xl font-bold">{product.discountPrice} ₽</span>
                      <span className="text-sm text-muted-foreground line-through">{product.price} ₽</span>
                    </>
                  ) : (
                    <span className="text-xl font-bold">{product.price} ₽</span>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${isInCart(product.id) ? 'bg-amber-700' : shopStyles.button}`}
                  onClick={() => isInCart(product.id) ? removeFromCart(product.id) : addToCart(product.id)}
                >
                  {isInCart(product.id) ? (
                    <>
                      <Icon name="Check" className="mr-2 h-4 w-4" /> В корзине
                    </>
                  ) : (
                    <>
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" /> Купить
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Популярные категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['3D модели', 'Текстуры', 'Кисти', 'Плагины'].map((category, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-amber-700 to-orange-600 h-32 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <span className="text-xl font-bold text-white">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Подвал */}
      <footer className="border-t py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 mr-2 bg-amber-500 rounded-none">
                  <span className="text-amber-950 font-bold text-sm">K</span>
                </div>
                <span className="font-semibold">KRX Магазин</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Качественные ресурсы для творчества
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">О магазине</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">Условия</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">Помощь</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Модальные окна */}
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </div>
  );
};

export default ShopPage;
