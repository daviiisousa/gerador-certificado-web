import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type AlertSucessProps = {
  title: string;
  description: string;
};

export function AlertSucess({ title, description }: AlertSucessProps) {
  return (
    <Alert variant="success">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
