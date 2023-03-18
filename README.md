# Consumindo API de cotação da B3 utilizando React

### `Funcionamento`

Foram utilizadas algumas APIs encontradas pela web.

-   A lista de ativos é populada por uma API que retorna todos os ativos.
-   Os preços são populados com base em outra API que retorna preços individuais com base em cada ativo.

-   Atualmente é possível utilizar o arquivo local (conversão do retorno da API), ou importar um novo no formato .json.
-   A opção por URL foi descontinuada momentaneamente pois a URL utilizada tinha bloqueio por CORS.

### `Desenvolvimento`

-   Retorno dos preços com cotação atualizada utilizando a API. Atualmente é retornado por um arquivo local com dados desatualizados.

-   Encontrar alguma API sem bloqueio CORS.

-   Implementar busca por ativos indiduais.

-   Corrigir responsividade para mobile.

### `Objetivo do projeto`

-   Ter um primeiro contato com o React e suas tecnologias, o qual ainda não havia utilizado.
-   Implementar essa extração de dados da B3 em outro projeto no qual estou trabalhando.
