import { toast } from "sonner";

export async function createCertificate(formData: FormData) {
  try {
    const response = await fetch("api/certificate", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      toast.error(error.message || "Erro ao gerar certificados");
      throw new Error(error.message || "Erro ao gerar certificados");
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function getZipFiles(){
  try {
    const response = await fetch("api/certificate")
    if (!response.ok) {
      const error = await response.json();
      toast.error(error.message || "Erro ao buscar arquivos zip");
      throw new Error(error.message || "Erro ao buscar arquivos zip");
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}
