-----------------------------------------------------------------------------
Clone o repositorio

depois execute o seguinte comando:

npm install

npx expo start
-----------------------------------------------------------------------------
JWT

Me dá nota

Use o NPM install para instalar os arquivos necessário.

No Root do projeto crie uma pasta config com um arquivo config.js exportando a SecretKey e a conexão com o banco de dados MongoDB

Foi realizado testes com postman, criando usuario no UserRoutes dando um post no http://localhost:3000/register onde você fornece os valores no postman de {"name":"","Email":"","password":"",} fazendo assim a criação do usuario no banco com a senha ja hasheada e para realizar a autenticação do JWT se faz necessário você dar outro post no http://localhost:3000/login com os dados de {"Email":"", "password"} fazendo assim a autenticação e fornecimento do token JWT.

Com esses dados criados e autenticados você consegue realizar um GET no http://localhost:3000/getuser com o {"token":""} para checar os usuarios do banco que estão cadastrados.

vale ressaltar que se faz necessário passar os comandos citados pelo body em formato JSON.