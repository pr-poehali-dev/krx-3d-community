
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchBar: React.FC = () => {
  return (
    <div className="hidden md:flex items-center relative rounded-md">
      <Input
        type="search"
        placeholder="Поиск..."
        className="pl-8 w-[200px]"
      />
      <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
    </div>
  );
};

export default SearchBar;
