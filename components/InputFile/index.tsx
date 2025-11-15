import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type InputFileProps = {
  title: string;
  typeData?: string;
  className?: string;
  classNameInput?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputFile({
  title,
  typeData,
  className,
  classNameInput,
  onChange,
}: InputFileProps) {
  return (
    <div className={cn(`grid w-full items-center gap-3 ${className}`)}>
      <Label htmlFor="picture">{title}</Label>
      <Input
        id="picture"
        type="file"
        accept={typeData}
        className={classNameInput}
        onChange={onChange}
        required
      />
    </div>
  );
}
