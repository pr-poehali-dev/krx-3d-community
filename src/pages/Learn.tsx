
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

// Стилизация для зеленой темы обучения
const learnStyles = {
  banner: "bg-gradient-to-r from-emerald-950 via-emerald-800 to-green-700",
  accent: "bg-emerald-700",
  button: "bg-emerald-600 hover:bg-emerald-700 text-white",
  card: "border-emerald-200 dark:border-emerald-800",
  icon: "text-emerald-600",
};

const LearnPage = () => {
  const [showModal, setShowModal] = useState(false);

  const courses = [
    {
      title: "Основы композиции",
      description: "Научитесь создавать визуально привлекательные композиции",
      level: "Начальный",
      duration: "4 недели",
      instructor: "Мария Иванова",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwY29tcG9zaXRpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Цифровая живопись",
      description: "Освойте продвинутые техники цифровой живописи",
      level: "Средний",
      duration: "6 недель",
      instructor: "Алексей Петров",
      image: "https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "3D моделирование",
      description: "Изучите основы 3D моделирования и рендеринга",
      level: "Продвинутый",
      duration: "8 недель",
      instructor: "Дмитрий Сидоров",
      image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBtb2RlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const tutorials = [
    {
      title: "Создание текстур в Substance Designer",
      views: 1254,
      likes: 87,
      duration: "15 мин",
      image: "https://images.unsplash.com/photo-1633193330954-c5f8e82d34b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRleHR1cmVzJTIwZGVzaWdufGVufDB8fDB8fHww",
    },
    {
      title: "Эффективные кисти для Photoshop",
      views: 875,
      likes: 54,
      duration: "9 мин",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJ1c2hlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Анимация персонажей в After Effects",
      views: 2143,
      likes: 122,
      duration: "22 мин",
      image: "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pattern-background">
      <Navigation onRegisterClick={() => setShowModal(true)} onLoginClick={() => setShowModal(true)} />
      
      {/* Баннер */}
      <div className={`${learnStyles.banner} py-20 text-white`}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Расширяйте свои навыки</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Онлайн курсы, интерактивные мастер-классы и профессиональная помощь для развития ваших творческих навыков
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className={learnStyles.button}>
              Все курсы <Icon name="ChevronRight" className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Статьи и руководства
            </Button>
          </div>
        </div>
      </div>
      
      {/* Основной контент */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="mb-8 w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="courses">Курсы</TabsTrigger>
            <TabsTrigger value="tutorials">Уроки</TabsTrigger>
            <TabsTrigger value="community">Сообщество</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className={`overflow-hidden ${learnStyles.card} hover:shadow-md transition-shadow`}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{course.title}</CardTitle>
                      <span className={`${learnStyles.accent} text-white text-xs px-2 py-1 rounded`}>
                        {course.level}
                      </span>
                    </div>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center">
                        <Icon name="Clock" className={`${learnStyles.icon} mr-1 w-4 h-4`} />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Icon name="User" className={`${learnStyles.icon} mr-1 w-4 h-4`} />
                        {course.instructor}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full ${learnStyles.button}`}>Записаться</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline">Показать больше курсов</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="tutorials">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial, index) => (
                <Card key={index} className={`overflow-hidden ${learnStyles.card} hover:shadow-md transition-shadow`}>
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={tutorial.image} 
                      alt={tutorial.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {tutorial.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center">
                        <Icon name="Eye" className="mr-1 w-4 h-4 opacity-70" />
                        {tutorial.views}
                      </div>
                      <div className="flex items-center">
                        <Icon name="Heart" className="mr-1 w-4 h-4 opacity-70" />
                        {tutorial.likes}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Icon name="Play" className="w-4 h-4 mr-1" /> Смотреть
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline">Показать больше уроков</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="community">
            <div className="text-center py-12">
              <Icon name="Users" className={`${learnStyles.icon} w-16 h-16 mx-auto mb-4`} />
              <h2 className="text-2xl font-bold mb-2">Присоединяйтесь к сообществу</h2>
              <p className="max-w-xl mx-auto mb-8 text-muted-foreground">
                Задавайте вопросы, делитесь своим прогрессом и получайте отзывы от других учеников и профессионалов.
              </p>
              <Button className={learnStyles.button}>
                Перейти на форум
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LearnPage;
