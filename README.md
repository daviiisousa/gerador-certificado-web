# 🎓 Gerador de Certificados Web

Sistema web para geração automática de certificados em massa, com interface intuitiva para upload de templates, posicionamento de texto e processamento via CSV.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Funcionalidades

- 📤 **Upload de Templates**: Envie imagens PNG/JPG como base do certificado
- 📊 **Importação CSV**: Carregue dados em massa via planilha CSV
- 🎯 **Posicionamento Dinâmico**: Ajuste a posição X e Y do texto no certificado
- 👁️ **Preview em Tempo Real**: Visualize o template antes de gerar
- 🌓 **Dark Mode**: Tema claro e escuro integrado
- 📦 **Download de Certificados**: Baixe os certificados gerados em formato ZIP
- 🔄 **Integração com n8n**: Webhook para automação e processamento

## 🛠️ Tecnologias

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [TailwindCSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Ícones**: [Lucide React](https://lucide.dev/) + [Phosphor Icons](https://phosphoricons.com/)
- **Notificações**: [Sonner](https://sonner.emilkowal.ski/)
- **Temas**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📋 Pré-requisitos

- Node.js 20+ 
- npm ou yarn
- Servidor backend (Python/FastAPI) rodando na porta 8000
- n8n (opcional) rodando na porta 5678

## 🚀 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/daviiisousa/gerador-certificado-web.git
cd gerador-certificado-web
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
gerador-certificado-web/
├── app/
│   ├── api/
│   │   ├── certificate/          # Endpoint para geração de certificados
│   │   │   └── route.ts
│   │   └── zipFiles/             # Endpoint para download de arquivos ZIP
│   │       └── route.ts
│   ├── layout.tsx                # Layout principal com providers
│   └── page.tsx                  # Página inicial
├── components/
│   ├── Alerts/                   # Componentes de alerta
│   ├── FormData/                 # Formulário principal
│   ├── FormPosition/             # Controle de posição X/Y
│   ├── InputFile/                # Input de upload de arquivos
│   ├── Preview/                  # Preview do template
│   └── ui/                       # Componentes UI (shadcn/ui)
├── contexts/
│   └── CertificateContext.tsx    # Context API para estado global
├── services/
│   ├── certificateService.ts     # Serviço de geração de certificados
│   └── filesZip.ts               # Serviço de download de arquivos
└── lib/
    └── utils.ts                  # Utilitários (cn, etc)
```

## 🎯 Como Usar

### 1. Upload do Template
- Clique em "Template do Certificado"
- Selecione uma imagem PNG/JPG que servirá como base

### 2. Ajuste de Posição
- Use os campos **Posição X (%)** e **Posição Y (%)** para definir onde o texto será inserido
- Valores de 0 a 100 (percentual da largura/altura)

### 3. Upload da Planilha CSV
- Clique em "Planilha de Dados"
- Selecione um arquivo CSV com os dados dos certificados
- Formato esperado: colunas com informações dos participantes

### 4. Gerar Certificados
- Clique em "Gerar Certificados"
- O sistema processará e enviará para o webhook configurado
- Aguarde a confirmação de sucesso

### 5. Download dos Certificados
- Após o processamento, use a API `/api/zipFiles?nome=arquivo.zip`
- O arquivo ZIP será baixado automaticamente

## 🔌 APIs

### POST `/api/certificate`
Envia dados para geração de certificados via webhook n8n.

**Body (FormData):**
- `modeloCertificado`: Arquivo do template (File)
- `csvFile`: Arquivo CSV com dados (File)
- `positionX`: Posição horizontal (string)
- `positionY`: Posição vertical (string)

**Response:**
```json
{
  "ok": true,
  "message": "Certificados gerados com sucesso!",
  "data": {...}
}
```

### GET `/api/certificate`
Lista arquivos ZIP disponíveis.

**Response:**
```json
{
  "ok": true,
  "message": "Arquivos zip buscados com sucesso!",
  "data": [...]
}
```

### GET `/api/zipFiles?nome=arquivo.zip`
Baixa um arquivo ZIP específico.

**Query Params:**
- `nome`: Nome do arquivo ZIP

**Response:** Binary (application/zip)

## ⚙️ Configuração

### Webhook do n8n
Atualize a URL do webhook em `app/api/certificate/route.ts`:

```typescript
const response = await fetch(
  "http://localhost:5678/webhook-test/SEU-WEBHOOK-ID",
  {
    method: "POST",
    body: formData,
  }
);
```

### Backend
Certifique-se de que o servidor backend está rodando em:
- `http://localhost:8000` (FastAPI/Python)

## 🎨 Personalização

### Tema
O projeto usa `next-themes` para alternância de tema. O componente `ModeToggle` já está configurado.

### Componentes UI
Os componentes são baseados em [shadcn/ui](https://ui.shadcn.com/). Para adicionar novos:

```bash
npx shadcn@latest add [component-name]
```

## 📝 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linter
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

**Davi Sousa**
- GitHub: [@daviiisousa](https://github.com/daviiisousa)

---

Desenvolvido com ❤️ usando Next.js e TypeScript
