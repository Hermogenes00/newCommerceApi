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
>Novos models/services e controllers sendo escritos


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

>Novos models/services e controllers sendo escritos

## Autenticação

Nossa api trabalha com autenticação no formato JWT.

O token pode ser obtido através do endpoint POST /user/auth

Dados para envio no POST
Campo | Descrição
----- | ---------
email | Email previamente cadastrado no sistema.
passowrd| Password previamente vinculado ao email.

>Authenticação via JWT
