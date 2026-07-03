# Relatório de Validação — Instituto Sorrisi
**Data:** Junho 2026  
**Escopo:** 21 arquivos HTML — acessibilidade (WCAG 2.1 / ARIA) + HTML W3C  

---

## Resumo Executivo

| Categoria | Status |
|---|---|
| Estrutura HTML (DOCTYPE, charset, title, lang) | ✅ Todos os 21 arquivos corretos |
| Semântica (main, nav, footer, section) | ✅ Correto em todos |
| Imagens (atributo alt) | ✅ 100% presentes |
| Links externos (rel="noopener noreferrer") | ✅ Corrigido em todos |
| Acessibilidade ARIA (aria-current, aria-label, aria-expanded) | ✅ Implementado |
| IDs duplicados | ✅ Corrigido (contato.html) |
| Travessões (—) em conteúdo visível | ✅ Removidos de todos os 21 arquivos |
| Erros W3C críticos restantes | ✅ 0 erros |

---

## Erros Encontrados e Corrigidos

### 1. `<p><script></p>` em index.html *(corrigido)*
**Arquivo:** `index.html`, linha 334  
**Problema:** A tag `<script src="main.js">` estava envolta em `<p>...</p>`, o que é inválido em HTML5 (phrasing content não pode conter scripts fora de phrasing context).  
**Correção:** Removido o wrapper `<p>`, `<script>` posicionado diretamente antes de `</body>`.

### 2. ID duplicado em contato.html *(corrigido)*
**Arquivo:** `contato.html`  
**Problema:** Dois elementos com `id="formEl"` — o `<div>` wrapper e o `<form>`.  
**Correção:** O div wrapper foi renomeado para `id="formWrapper"`.

### 3. `&mdash;` HTML entity em 7 arquivos *(corrigido)*
**Arquivos:** blog-facetas, blog-higiene, blog-invisalign, blog-clareamento, blog-implante, blog-odontopediatria, blog-ortodontia-invisalign  
**Problema:** Travessões codificados como `&mdash;` em conteúdo visível (parágrafos, listas, CTAs, referências).  
**Correção:** Substituídos por vírgulas, dois-pontos ou pontos conforme contexto. Citações de autores (`— Dr./Dra. X`) e títulos em inglês preservados intencionalmente.

---

## Avisos W3C (não são erros)

| Aviso | Ocorrência | Impacto |
|---|---|---|
| `role="navigation"` redundante em `<nav>` | 21 arquivos | Nenhum — HTML5 define o role implicitamente |

Este aviso é informativo. O W3C não classifica como erro, e a remoção seria apenas cosmética.

---

## Acessibilidade — Checklist WCAG 2.1

### Navegação
- ✅ Skip link `Pular para o conteúdo` em todos os arquivos
- ✅ `aria-current="page"` na página ativa do menu (18 arquivos com nav marcada)
- ✅ `aria-expanded`, `aria-controls`, `aria-label` no menu hambúrguer
- ✅ `aria-modal="true"`, `aria-hidden="true"` no menu mobile
- ✅ `role="dialog"` no overlay do menu mobile

### Conteúdo
- ✅ `lang="pt-BR"` em todos os 21 arquivos
- ✅ `<main id="main-content">` em todos os arquivos
- ✅ `<h1>` único por página
- ✅ Hierarquia de headings (h1 → h2 → h3) respeitada

### Imagens
- ✅ `alt` descritivo em todas as imagens informativas
- ✅ `alt=""` nos ícones decorativos (servicos.html)

### Formulários
- ✅ Todos os campos com `<label for="id">` correspondente
- ✅ Campos obrigatórios com `required` + `aria-required="true"`
- ✅ `aria-label` no elemento `<form>`
- ✅ IDs únicos em todos os campos

### Blog
- ✅ FAQ accordion com `aria-expanded` e `aria-controls`
- ✅ `aria-label` nos `<main>` dos artigos identificando o título

### Segurança
- ✅ `rel="noopener noreferrer"` em todos os links `target="_blank"`

---

## Em Aberto (próximas melhorias)

| # | Tarefa | Prioridade |
|---|---|---|
| 7 | Performance: `loading="lazy"` nas imagens + dimensões explícitas | Média |
| 8 | SEO: Schema.org JSON-LD nas páginas de especialidade | Média |
| — | `type="button"` nos botões hambúrguer (boa prática, não erro) | Baixa |

---

## Cobertura da Validação

**Arquivos validados (21/21):**

Páginas principais: `index.html`, `sobre.html`, `servicos.html`, `equipe.html`, `contato.html`, `depoimentos.html`, `privacidade.html`, `blog.html`

Blog (13 artigos): `blog-ortodontia-guia.html`, `blog-ortodontia-autoligado.html`, `blog-ortodontia-convencional.html`, `blog-ortodontia-ofm.html`, `blog-ortodontia-invisalign.html`, `blog-invisalign.html`, `blog-facetas.html`, `blog-higiene.html`, `blog-clareamento.html`, `blog-implante.html`, `blog-odontopediatria.html`, `blog-reabilitacao.html`, `blog-protese.html`
