
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import RegistrationModal from "@/components/RegistrationModal";

// Стилизация для красно-розовой темы вакансий
const jobsStyles = {
  banner: "bg-gradient-to-r from-pink-950 via-pink-700 to-rose-500",
  accent: "bg-pink-500",
  button: "bg-pink-500 hover:bg-pink-600 text-white",
  outlineBtn: "border-pink-500 text-pink-500 hover:bg-pink-500/10",
  card: "border-pink-200 dark:border-pink-800",
  icon: "text-pink-500",
};

const jobListings = [
  {
    id: 1,
    title: "3D-художник (персонажи)",
    company: "GameStudio Pro",
    location: "Москва (Удаленно)",
    salary: "от 150 000 ₽",
    tags: ["Blender", "Maya", "ZBrush"],
    posted: "2 дня назад",
    featured: true,
    logo: "https://images.unsplash.com/photo-1560415755-bd80d06eda60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGxvZ298ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Технический художник",
    company: "CreativeAgency",
    location: "Санкт-Петербург",
    salary: "120 000 - 180 000 ₽",
    tags: ["Unity", "Unreal Engine", "Shader"],
    posted: "5 дней назад",
    logo: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3JlYXRpdmUlMjBsb2dvfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Концепт-художник",
    company: "ArtLab Studios",
    location: "Удаленно",
    salary: "Договорная",
    tags: ["Photoshop", "Concept Art", "Illustration"],
    posted: "Вчера",
    featured: true,
    logo: "https://images.unsplash.com/photo-1567604823173-f6124fed6d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydCUyMGxvZ298ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "Аниматор персонажей",
    company: "Motion Pictures",
    location: "Москва",
    salary: "от 130 000 ₽",
    tags: ["Maya", "Motion Capture", "Character Animation"],
    posted: "3 дня назад",
    logo: "https://images.unsplash.com/photo-1598301257982-0529a29cebf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdGlvbiUyMGxvZ298ZW58MHx8MHx8fDA%3D",
  },
];

const Jobs = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const toggleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col pattern-background">
      <Navigation 
        onRegisterClick={() => setIsRegistrationModalOpen(true)} 
        onLoginClick={() => setIsRegistrationModalOpen(true)} 
      />
      
      {/* Баннер */}
      <div className={`${jobsStyles.banner} py-20 text-white`}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Найдите работу мечты</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Лучшие вакансии для 3D-художников, аниматоров, дизайнеров и других креативных специалистов
          </p>
          
          <div className="mt-8 bg-black/20 p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block text-white/80">Должность, ключевые слова</label>
                <Input placeholder="Например: 3D-художник" className="bg-white/10 border-white/20 placeholder:text-white/60 text-white" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block text-white/80">Расположение</label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Любое расположение" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Любое расположение</SelectItem>
                    <SelectItem value="moscow">Москва</SelectItem>
                    <SelectItem value="spb">Санкт-Петербург</SelectItem>
                    <SelectItem value="remote">Удаленно</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className={`w-full ${jobsStyles.button}`}>
                  <Icon name="Search" className="mr-2 h-4 w-4" /> Найти вакансии
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Основной контент */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="all">Все вакансии</TabsTrigger>
            <TabsTrigger value="remote">Удаленная работа</TabsTrigger>
            <TabsTrigger value="saved">Сохраненные</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="space-y-4">
              {jobListings.map(job => (
                <Card key={job.id} className={`overflow-hidden ${job.featured ? 'border-pink-500 border-2' : jobsStyles.card}`}>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 sm:col-span-2 p-4 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                        <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-7 p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold">{job.title}</h3>
                        {job.featured && (
                          <Badge className={jobsStyles.accent}>Горячая вакансия</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{job.company} • {job.location}</p>
                      <p className="font-medium mt-2">{job.salary}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="bg-background">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-3 p-4 flex flex-col justify-between border-t sm:border-t-0 sm:border-l">
                      <div className="text-sm text-muted-foreground text-right">
                        Опубликовано {job.posted}
                      </div>
                      <div className="flex flex-col gap-2 mt-4">
                        <Button className={jobsStyles.button}>
                          Откликнуться
                        </Button>
                        <Button variant="outline" 
                          className={savedJobs.includes(job.id) ? jobsStyles.button : 'border-pink-300 text-pink-700'}
                          onClick={() => toggleSaveJob(job.id)}
                        >
                          {savedJobs.includes(job.id) ? (
                            <>
                              <Icon name="Check" className="mr-2 h-4 w-4" /> Сохранено
                            </>
                          ) : (
                            <>
                              <Icon name="Bookmark" className="mr-2 h-4 w-4" /> Сохранить
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="remote">
            <div className="space-y-4">
              {jobListings.filter(job => job.location.includes('Удаленно')).map(job => (
                <Card key={job.id} className={`overflow-hidden ${job.featured ? 'border-pink-500 border-2' : jobsStyles.card}`}>
                  {/* Такая же структура карточки как и выше */}
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 sm:col-span-2 p-4 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                        <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-7 p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold">{job.title}</h3>
                        {job.featured && (
                          <Badge className={jobsStyles.accent}>Горячая вакансия</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{job.company} • {job.location}</p>
                      <p className="font-medium mt-2">{job.salary}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="bg-background">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-3 p-4 flex flex-col justify-between border-t sm:border-t-0 sm:border-l">
                      <div className="text-sm text-muted-foreground text-right">
                        Опубликовано {job.posted}
                      </div>
                      <div className="flex flex-col gap-2 mt-4">
                        <Button className={jobsStyles.button}>
                          Откликнуться
                        </Button>
                        <Button variant="outline" 
                          className={savedJobs.includes(job.id) ? jobsStyles.button : 'border-pink-300 text-pink-700'}
                          onClick={() => toggleSaveJob(job.id)}
                        >
                          {savedJobs.includes(job.id) ? (
                            <>
                              <Icon name="Check" className="mr-2 h-4 w-4" /> Сохранено
                            </>
                          ) : (
                            <>
                              <Icon name="Bookmark" className="mr-2 h-4 w-4" /> Сохранить
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="saved">
            {savedJobs.length > 0 ? (
              <div className="space-y-4">
                {jobListings.filter(job => savedJobs.includes(job.id)).map(job => (
                  <Card key={job.id} className={`overflow-hidden ${job.featured ? 'border-pink-500 border-2' : jobsStyles.card}`}>
                    {/* Такая же структура карточки как и выше */}
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 sm:col-span-2 p-4 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                          <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="col-span-12 sm:col-span-7 p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold">{job.title}</h3>
                          {job.featured && (
                            <Badge className={jobsStyles.accent}>Горячая вакансия</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground">{job.company} • {job.location}</p>
                        <p className="font-medium mt-2">{job.salary}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {job.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="bg-background">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-12 sm:col-span-3 p-4 flex flex-col justify-between border-t sm:border-t-0 sm:border-l">
                        <div className="text-sm text-muted-foreground text-right">
                          Опубликовано {job.posted}
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                          <Button className={jobsStyles.button}>
                            Откликнуться
                          </Button>
                          <Button variant="outline" 
                            className={jobsStyles.button}
                            onClick={() => toggleSaveJob(job.id)}
                          >
                            <Icon name="X" className="mr-2 h-4 w-4" /> Удалить из сохраненных
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Bookmark" className={`${jobsStyles.icon} w-16 h-16 mx-auto mb-4 opacity-50`} />
                <h2 className="text-2xl font-bold mb-2">У вас нет сохраненных вакансий</h2>
                <p className="text-muted-foreground mb-6">
                  Сохраняйте интересные вакансии, чтобы вернуться к ним позже
                </p>
                <Button 
                  variant="outline" 
                  className={jobsStyles.outlineBtn}
                  onClick={() => document.querySelector('[data-value="all"]')?.dispatchEvent(new MouseEvent('click'))}
                >
                  Перейти к списку вакансий
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Подвал */}
      <footer className="border-t py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 mr-2 bg-pink-500 rounded-none">
                  <span className="text-pink-950 font-bold text-sm">K</span>
                </div>
                <span className="font-semibold">KRX Вакансии</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Работа для творческих профессионалов
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">Для соискателей</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">Для работодателей</a>
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

export default Jobs;
