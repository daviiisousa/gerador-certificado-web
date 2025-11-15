import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormPositionProps = {
  title: string;
  className?: string;
  description?: string;
  onChange?: (value: number) => void;
  value?: number;
};

export function FormPosition({
  title,
  className,
  description,
  onChange,
  value,
}: FormPositionProps) {
  return (
    <div className={className}>
      <Label className="mb-2">{title}</Label>
      <Input
        type="number"
        onChange={(e) => onChange?.(Number(e?.target?.value))}
        value={value}
        required
      />
      <span className="text-xs text-gray-500 dark:text-gray-300">
        {description}
      </span>
    </div>
  );
}
