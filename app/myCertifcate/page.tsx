import { GetZipeFiles } from "@/components/GetZipeFIles";
import { gradientColor } from "@/helpers/gradientColor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meus Certificados",
  description: "Gerador de Certificados em Massa",
};


export default function MyCertificatesPage() {
    
   return (
       <div className="flex min-h-screen items-center justify-center font-sans w-full">
         <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-8 px-10 bg-white dark:bg-[#0A0A0A] sm:items-start ">
           <div className="w-full mb-8 text-center">
            <h1 className={`text-5xl font-bold ${gradientColor.textGradient} mb-4`}>Meus Certificados</h1>
            <p className="text-gray-600 dark:text-gray-300">Visualize e gerencie seus certificados gerados.</p>
           </div>
           <GetZipeFiles />
         </main>
       </div>
     );
}