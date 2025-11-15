import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type AlertErrorProps = {
  title: string;
  description: string;
};

export function AlertError({ title, description }: AlertErrorProps) {
  return (
    <Alert variant="error">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
