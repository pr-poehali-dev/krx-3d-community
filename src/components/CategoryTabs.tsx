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
];

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = React.useState("all");

  return (
    <div className="w-full px-4 py-6 bg-background">
      <Tabs
        value={activeCategory}
        onValueChange={setActiveCategory}
        className="w-full"
      >
        <TabsList className="flex w-full justify-between rounded-none h-12 bg-transparent p-0">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex-1 rounded-none data-[state=active]:bg-background/10 data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
