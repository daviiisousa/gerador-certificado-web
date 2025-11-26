export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const response = await fetch(
      "http://localhost:5678/webhook/4acdd797-3a22-4eaf-83eb-b33b0c06bb6b",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      return Response.json(
        {
          ok: false,
          message: "Erro ao processar certificados no webhook",
        },
        { status: response.status }
      );
    }

    const result = await response.json();

    return Response.json({
      ok: true,
      message: "Certificados gerados com sucesso!",
      data: result,
    });
  } catch (error) {
    throw error;
  }
}

export async function GET(){
  try {
    
    const response = await fetch("http://localhost:8000/arquivos-zip")

    if (!response.ok) {
      return Response.json(
        {
          ok: false,
          message: "Erro ao buscar arquivos zip",
        },
        { status: response.status }
      );
    }

    const result = await response.json();

    return Response.json({
      ok: true,
      message: "Arquivos zip buscados com sucesso!",
      data: result,
    });
  } catch (error) {
    throw error;
  }
}