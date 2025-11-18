import { FormDataCertificate } from "@/components/FormData";
import { ModeToggle } from "@/components/ModeToggle";
import { Preview } from "@/components/Preview";
import { gradientColor } from "@/helpers/gradientColor";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans w-full">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-center py-8 px-10 bg-white dark:bg-[#0A0A0A] sm:items-start ">
        <div className="w-full flex justify-center">
          <div className="w-full mb-8">
            <h1
              className={`text-5xl font-bold text-center mb-4 ${gradientColor.textGradient}`}
            >
              Gerador de Certificados
            </h1>
            <p className="text-center mb-4 text-gray-600 dark:text-gray-300">
              Configure seu template e gere certificados em massa
            </p>
          </div>
          <ModeToggle />
        </div>
        <div className="w-full flex justify-center gap-10">
          <FormDataCertificate />

          <Preview />
        </div>
      </main>
    </div>
  );
}
