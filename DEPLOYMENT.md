# Deploy no GitHub Pages

## Configuração Automática com GitHub Actions

Sua aplicação está configurada para deploy automático no GitHub Pages usando GitHub Actions.

### O que foi configurado:

1. **Workflow do GitHub Actions** (`.github/workflows/deploy.yml`):
   - Build automático quando há push na branch `main` ou `master`
   - Deploy automático para o GitHub Pages
   - Usa Node.js 18 e npm para build

2. **Configuração do Vite** (`vite.config.ts`):
   - Base path configurado para `/animadeck-studio/`
   - Compatível com GitHub Pages

3. **Arquivo `.nojekyll`**:
   - Garante que o GitHub Pages processe corretamente os arquivos

### Como ativar o deploy:

1. **No GitHub, vá para Settings do seu repositório**
2. **Navegue para "Pages" no menu lateral**
3. **Em "Source", selecione "GitHub Actions"**
4. **Faça commit e push das alterações:**

```bash
git add .
git commit -m "Configure GitHub Actions for deployment"
git push origin main
```

### Após o primeiro push:

- O workflow será executado automaticamente
- Você pode acompanhar o progresso na aba "Actions" do seu repositório
- Após o sucesso, sua aplicação estará disponível em:
  `https://andrebrusco.github.io/animadeck-studio/`

### Comandos úteis:

```bash
# Build local para testar
npm run build

# Preview local do build
npm run preview

# Desenvolvimento local
npm run dev
```

### Troubleshooting:

- Se o deploy falhar, verifique a aba "Actions" para logs detalhados
- Certifique-se de que a branch principal está configurada como `main` ou `master`
- Verifique se o GitHub Pages está habilitado nas configurações do repositório
