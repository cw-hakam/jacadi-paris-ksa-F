import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  max?: number;
}

export function QuantitySelector({ quantity, onQuantityChange, max = 10 }: QuantitySelectorProps) {
  return (
    <div className="space-y-3">
      <span className="font-display font-semibold text-foreground">Quantity</span>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onQuantityChange(Math.min(max, quantity + 1))}
          disabled={quantity >= max}
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
