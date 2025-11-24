GitHub Training Kit

O GitHub Training Kit fornece materiais de treinamento open source desenvolvidos pela equipe de GitHub Professional Services. Este repositório contém recursos destinados a auxiliar usuários e equipes a aprender e aplicar práticas recomendadas no uso do Git e do GitHub.

Visão Geral

Este repositório atualmente disponibiliza:

Guias rápidos (cheat sheets) de Git e GitHub

Recursos básicos de referência

Materiais padronizados utilizados em treinamentos presenciais e remotos

Recursos anteriormente hospedados aqui, como treinamentos On-Demand, listas de leitura e recomendações adicionais, podem ser encontrados no seguinte commit histórico:

👉 https://github.com/github/training-kit/tree/4fbf180e980ef973ba4cc4b8ef3d5f278ddc8c08

Contribuindo

Agradecemos sua contribuição para melhorar e expandir este projeto.
Para começar:

Leia o arquivo CONTRIBUTING.md

Siga as diretrizes de formatação e envio

Abra um pull request com a descrição clara das alterações

Valorizamos contribuições de qualquer tipo — correções, melhorias de conteúdo, revisões técnicas ou novos materiais.

Tecnologias Utilizadas

Este projeto utiliza:

Jekyll — geração estática do site

Markdown — criação de conteúdo simples e legível

Primer CSS — estilização consistente com a identidade visual do GitHub

Empacotando para Ambientes Internos

Para servir o conteúdo atrás de um firewall corporativo, você pode gerar um pacote estático do site:

1. Gerar o pacote
script/package


Esse comando cria um arquivo no formato release-XXXXXXX.tgz.

2. Preparar o ambiente de teste
mkdir -p test_site/kit
tar -xzf release-XXXXXXX.tgz -C test_site/kit
cd test_site

3. Iniciar o servidor local

Escolha o comando compatível com sua versão do Python:

Python 2.x

python -m SimpleHTTPServer


Python 3.x

python -m http.server


O site estará disponível localmente para inspeção e testes.

Licenciamento

O conteúdo do GitHub Training Kit está licenciado sob CC-BY-4.0, permitindo que você:

copie

redistribua

adapte

utilize comercialmente

desde que forneça atribuição apropriada.

Exemplo de atribuição recomendada:

Conteúdo baseado em github.github.com/training-kit, utilizado sob a licença CC-BY-4.0.

O código deste repositório é licenciado sob CC0-1.0, renunciando a direitos autorais de forma a permitir livre reutilização.

⚠️ Importante: nenhum dos conteúdos ou códigos concede permissão para uso de marcas registradas do GitHub.
