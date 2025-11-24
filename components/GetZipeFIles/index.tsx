"use client";

import { gradientColor } from "@/helpers/gradientColor";
import { getZipFiles } from "@/services/certificateService";
import { downloadZipFile } from "@/services/filesZip";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function GetZipeFiles() {
    const [zipFiles, setZipFiles] = useState([]);

    async function handleGetZipFiles(){
          try {
            const response = await getZipFiles();

            if(!response.ok){
                toast.error(response.message || "Erro ao buscar arquivos zip");
                throw new Error("Erro ao buscar arquivos zip");
            }

            const data = await response?.data?.arquivos_zip
            setZipFiles(data);
        } catch (error) {
            return error;
        }
    }

    console.info(zipFiles);

    useEffect( () => {
      handleGetZipFiles();
    }, [])
    return(
        <>
            {zipFiles.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300">Nenhum certificado encontrado.</p>
           ) : (
            <div className="w-full ">
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">Total de certificados: {zipFiles.length} </h2>
                <div className={`mb-8 w-full h-1 rounded-sm ${gradientColor.bgGradient}`} />
                <div className="flex w-full flex-wrap gap-4">
                    {zipFiles.map((fileName: string, index: number) => (
                        <p className="flex w-fit items-center justify-between py-2 cursor-pointer border-b border-gray-200 dark:border-gray-700 gap-5" key={index} onClick={() => downloadZipFile(fileName)}>
                            {fileName}
                            <Download size={20} />
                        </p>
                    ))}
                </div>
            </div>
           )}
        </>
    )
}