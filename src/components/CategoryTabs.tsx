import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { id: "all", label: "Все категории" },
  { id: "trending", label: "В тренде" },
  { id: "new", label: "Новое" },
  { id: "following", label: "Подписки" },
  { id: "characters", label: "Персонажи" },
  { id: "environments", label: "Окружение" },
  { id: "props", label: "Объекты" },
  { id: "concept", label: "Концепт-арт" },
  { id: "animation", label: "Анимация" },
  { id: "gamedev", label: "Геймдев" },
  { id: "tutorials", label: "Туториалы" },
  { id: "challenges", label: "Челленджи" },
];

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = React.useState("all");

  return (
    <div className="w-full px-4 py-6 bg-background/80 backdrop-blur-sm border-y border-border">
      <Tabs
        value={activeCategory}
        onValueChange={setActiveCategory}
        className="w-full"
      >
        <div className="max-w-full overflow-x-auto custom-scrollbar pb-2">
          <TabsList className="flex w-max justify-start rounded-none h-12 bg-transparent p-0 gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="tab-item-hover rounded-none data-[state=active]:bg-primary/10 data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:border-primary border border-border hover:border-primary/50 min-w-max px-4"
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
