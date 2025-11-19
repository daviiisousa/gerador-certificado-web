export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const nomeArquivo = searchParams.get('nome');

    try {
        const response = await fetch(`http://localhost:8000/download-zip/${nomeArquivo}`)

        if (!response.ok) {
            return Response.json(
                {
                    ok: false,
                    message: "Erro ao baixar o arquivo zip",
                },
                { status: response.status }
            );
        }

        const blob = await response.blob();

        return new Response(blob, {
            status: 200,
            headers: {
                'Content-Type': 'application/zip',
                'Content-Disposition': `attachment; filename="${nomeArquivo}"`,
            },
        });
    } catch (error) {
       throw error;
    }
}