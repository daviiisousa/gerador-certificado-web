export async function downloadZipFile(nomeArquivo: string) {
    try {
        const response = await fetch(`api/zipFiles?nome=${encodeURIComponent(nomeArquivo)}`);
        
        if (!response.ok) {
            throw new Error("Erro ao baixar o arquivo zip");
        }

        const blob = await response.blob();
        
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = nomeArquivo;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);

    } catch (error) {
        throw error;
    }
}