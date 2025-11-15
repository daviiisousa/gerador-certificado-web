"use client";

import { createCertificate } from "@/services/certificateService";
import { FormPosition } from "../FormPosition";
import { InputFile } from "../InputFile";
import { Button } from "../ui/button";
import { useCertificate } from "@/contexts/CertificateContext";
import { toast } from "sonner";

export function FormDataCertificate() {
  const {
    setPreviewImage,
    setDataModelCertificate,
    dataModelCertificate,
    position,
    setPosition,
    setCsvFile,
    csvFile,
  } = useCertificate();

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e?.target?.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setDataModelCertificate(file);
    setPreviewImage(imageUrl);
  }

  function handleFileCSVChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e?.target?.files?.[0];
    if (!file) return;
    setCsvFile(file);
  }

  async function handleSubmitCertificate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!dataModelCertificate || !csvFile) {
      return toast.error("Por favor, envie todos os arquivos necessários.");
    }

    try {
      const formData = new FormData();

      formData.append("modeloCertificado", dataModelCertificate);
      formData.append("csvFile", csvFile);

      const response = await createCertificate(formData);

      if (response.ok) {
        return toast.success("Sucesso!", {
          description: response.message,
        });
      } else {
        return toast.error("Erro ao gerar certificados: ", {
          description: response.message,
        });
      }
    } catch (error) {
      return error;
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmitCertificate}
        className="mt-8 flex w-full max-w-2xl flex-col bg-white dark:bg-neutral-900 p-5 rounded-sm shadow-md h-fit"
      >
        <div className="w-full">
          <InputFile
            classNameInput="w-full"
            title="Template do Certificado"
            typeData="image/*"
            onChange={handleFileChange}
          />
          <span className="text-xs text-[#6B7B90] dark:text-gray-200 mt-2">
            Faça upload da imagem do certificado (PNG, JPG, etc)
          </span>
        </div>
        <div className="flex items-center gap-4 mt-4 w-full">
          <FormPosition
            title="Posição X (%)"
            description="Posição horizontal do texto"
            value={position.x}
            onChange={(value) => setPosition({ ...position, x: value })}
          />
          <FormPosition
            title="Posição Y (%)"
            description="Posição vertical do texto"
            value={position.y}
            onChange={(value) => setPosition({ ...position, y: value })}
          />
        </div>
        <InputFile
          title="Planilha de Dados"
          typeData=".csv"
          className="mt-4"
          onChange={handleFileCSVChange}
        />
        <span className="text-xs text-[#6B7B90] dark:text-gray-200 mt-2">
          Faça upload da planilha CSV com os dados dos certificados
        </span>
        <Button
          className="mt-4"
          disabled={!dataModelCertificate || !csvFile}
          type="submit"
        >
          Gerar Certificados
        </Button>
      </form>
    </>
  );
}
