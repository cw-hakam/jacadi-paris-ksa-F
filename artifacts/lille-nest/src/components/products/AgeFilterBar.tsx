import { ageFilters } from '@/data/products';
import { cn } from '@/lib/utils';

interface AgeFilterBarProps {
  selectedAge: string | null;
  onSelect: (age: string | null) => void;
}

const ageEmojis: Record<string, string> = {
  baby: '👶',
  toddler: '🧒',
  kids: '👧',
  tweens: '🧑',
};

export function AgeFilterBar({ selectedAge, onSelect }: AgeFilterBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "px-5 py-2.5 rounded font-display font-semibold text-sm transition-all duration-200",
          selectedAge === null
            ? "bg-primary text-primary-foreground shadow-soft"
            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
        )}
      >
        All Ages
      </button>
      {ageFilters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onSelect(filter.id)}
          className={cn(
            "px-5 py-2.5 rounded font-display font-semibold text-sm transition-all duration-200 flex items-center gap-2",
            selectedAge === filter.id
              ? `age-badge-${filter.id} shadow-soft`
              : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
          )}
        >
          <span>{ageEmojis[filter.id]}</span>
          {filter.label}
        </button>
      ))}
    </div>
  );
}
