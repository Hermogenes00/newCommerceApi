# newCommerceApi

O projeto <b>newCommerceApi</b> disponibiliza uma api REST, que permite o acesso a vários serviços:

* Address
* Category
* Company
* Institucional
* itemOrder
* Order
* Payment
* Printer
* Product
* Slide
* SubCategory
* Supplier
* User
* Variation

## Métodos

Método | Descrição
---- | ----------
GET | Retorna informações de um ou mais registros.
POST | Utilizado para criar um novo registro.
PUT | Utilizado para realizar a alteração de um registro.
DELETE | Utilizado para realizar a deleção de um registro.


## Status de respostas


Código | Descrição
---- | ----------
200 | Requisição executada com sucesso (success).
400 | Erros de validação ou os campos informados não existem no sistema.
401 | Dados de acesso inválidos.
404 | Registro pesquisado não encontrado (Not found).
405 | Método não implementado.
410 | Registro pesquisado foi apagado do sistema e não esta mais disponível.
422 | Dados informados estão fora do escopo definido para o campo.
429 | Número máximo de requisições atingido. (aguarde alguns segundos e tente novamente)



## Autenticação

Nossa api trabalha com autenticação no formato JWT.

O token pode ser obtido através do endpoint POST /user/auth

Dados para envio no body do POST

Campo | Descrição
----- | ---------
email | Email previamente cadastrado no sistema.
passowrd| Password previamente vinculado ao email.
 
 >Exemplo de resposta
 ~~~javascript
 {
    "token": "eyJhbGciOiJIUzIaaa1NiIsInR5cfadfadsfadfaCI6IkpXVCJ9.
    eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsIm5vbWUiOiJIZXJtw7NnZW5lc3MgTmV0byIsImlhdCI6MTYyMDczODc3MSwiZXhwIjoxNjUyMjc0NzcxfQ.
    jhYyc8ux30EmWNoDmgWEP4XvNRb0aTPNnu0RfadsfaTQbscb4",
    "data": {
        "email": "admin@email.com",
        "nome": "Hermógeness Neto"
    }
}
 ~~~
 
Para consumir qualquer endpoint, exceto Post /user/auth, é obrigatório informar o token obtido no headers
>  Exemplo de requisição GET no endpoint /product
~~~javascript
var axios = require('axios');
var data = JSON.stringify({
  "email": "admin@email.com",
  "password": "123"
});

var config = {
  method: 'get',
  url: 'http://ecommerce.api/product',
  headers: {     
    'Authorization': 'Bearer eyJhbGciaaaOiJIUzI1NiIaaaasInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsIm5vbWUiOiJIZXJtw7NnZW5lc3MgTmV0byIsImlhdCI6MTYyMDY0NzE0MSwiZXhwIjoxNjUyMTgzMTQxfQ.e40b7FIXYjegnEalm_7eQMRajhZdFw7kKktTRiVYafadfV4M', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
~~~

> Response - Status 200
~~~javascript
[
    {
        "id": 1,
        "nome": "OUTLET ZAP CAMISETAS ALGODÃO TRANSFER ESPECIAL PRETA P",
        "descricao": "<p style=\"text-align: justify;\">Camisetas personalizadas s&atilde;o um grande atrativo para conquistar novos clientes e aumentar suas vendas! Estas camisas possuem, gola vi&eacute;s e tecido 100% algod&atilde;o fio 30.1 premium - Tamanho P: 68x50cm - Cuidados ao utilizar o material: N&atilde;o deixar de molho, n&atilde;o utiliza ferro de passar diretamente na estampa lavar &agrave; m&atilde;o e secar na sombra. Veja mais informa&ccedil;&otilde;es no PDF de dicas do gabarito.</p>\r\n<p>&nbsp;</p>",
        "codRef": "CAMAP1C",
        "tamFinalAltura": "250.00",
        "tamFinalLargura": "200.00",
        "vlrProduto": "20.000",
        "material": "CAMISA ALGODAO PRETA",
        "gramatura": "10.00",
        "peso": "150.00",
        "tamSangriaAltura": "190.00",
        "tamSangriaLargura": "240.00",
        "qtd": 1000,
        "propriedadeDivisao": 100,
        "slug": "OUTLET-ZAP-CAMISETAS-ALGODAO-TRANSFER-ESPECIAL-PRETA-P",
        "gabarito": "Arquivo vazioo.rar-1614604274131.rar",
        "previsaoProducao": 15,
        "und": "und",
        "ativo": 1,
        "createdAt": "2021-02-23T22:08:26.000Z",
        "updatedAt": "2021-03-12T23:00:22.000Z",
        "categoriaId": 1,
        "subcategoriaId": 1,
        "impressoraId": 2,
        "desconto": "0.100",
        "variation": []
    },
    {
        "id": 2,
        "nome": "CARTOES DE VISITA COUCHE 250G VERNIZ UV TOTAL F",
        "descricao": "<p style=\"text-align: justify;\">Cart&atilde;o de visita couch&ecirc; 250g da Zap Gr&aacute;fica &eacute; produzido com a mais alta qualidade na impress&atilde;o e visa atender um mercado muito exigente. O Cart&atilde;o de Visita Couch&ecirc; 250g com aplica&ccedil;&atilde;o de verniz UV total frente &eacute; excelente para quem procura qualidade e menor pre&ccedil;o no mesmo material. Entregamos em todo Brasil.</p>",
        "codRef": "C2503",
        "tamFinalAltura": "88.00",
        "tamFinalLargura": "48.00",
        "vlrProduto": "5.300",
        "material": "COUCHÊ",
        "gramatura": "250.00",
        "peso": "1150.00",
        "tamSangriaAltura": "51.00",
        "tamSangriaLargura": "91.00",
        "qtd": 10000,
        "propriedadeDivisao": 100,
        "slug": "CARTOES-DE-VISITA-COUCHE-250G-VERNIZ-UV-TOTAL-F",
        "gabarito": null,
        "previsaoProducao": 10,
        "und": "und",
        "ativo": 1,
        "createdAt": "2021-03-02T14:28:12.000Z",
        "updatedAt": "2021-03-16T23:08:08.000Z",
        "categoriaId": 3,
        "subcategoriaId": 6,
        "impressoraId": 2,
        "desconto": "0.009",
        "variation": []
    }   
]
~~~
