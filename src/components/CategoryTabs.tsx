
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = [
  { id: 'all', label: 'Все категории' },
  { id: 'trending', label: 'В тренде' },
  { id: 'new', label: 'Новое' },
  { id: 'following', label: 'Подписки' },
  { id: 'characters', label: 'Персонажи' },
  { id: 'environments', label: 'Окружение' },
  { id: 'props', label: 'Объекты' },
  { id: 'concept', label: 'Концепт-арт' }
];

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');

  return (
    <div className="container mx-auto px-4 py-6">
      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="flex w-full overflow-x-auto pb-2 justify-start">
          {categories.map(category => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="px-4 whitespace-nowrap"
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
