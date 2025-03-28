# WriteIm

## Descrição
WriteIm é um projeto que consiste em um backend desenvolvido com Spring Boot e um frontend desenvolvido com React. O objetivo do projeto é fornecer uma aplicação de chat com funcionalidades de autenticação e gerenciamento de usuários.

## Instruções de Setup

### Backend (T1-Back)
1. Certifique-se de ter o Java 21 e o Maven instalados em sua máquina.
2. Navegue até o diretório `T1-Back`.
3. Execute o comando abaixo para instalar as dependências e compilar o projeto:
    ```sh
    ./mvnw clean install
    ```
4. Configure o banco de dados PostgreSQL conforme as propriedades definidas em `src/main/resources/application.properties`.
5. Execute a aplicação:
    ```sh
    ./mvnw spring-boot:run
    ```

### Frontend (T1-Front)
1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
2. Navegue até o diretório `T1-Front/t1front`.
3. Instale as dependências do projeto:
    ```sh
    npm install
    ```
4. Inicie a aplicação:
    ```sh
    npm start
    ```

## Uso
1. Acesse o frontend da aplicação em `http://localhost:3000`.
2. Registre um novo usuário ou faça login com um usuário existente.
3. Utilize a aplicação de chat para enviar e receber mensagens.
4. Gerencie seu perfil de usuário, incluindo atualização de informações e exclusão de conta.

## Diretrizes para Contribuidores
1. Faça um fork do repositório.
2. Crie uma nova branch para sua feature ou correção de bug:
    ```sh
    git checkout -b minha-feature
    ```
3. Faça commit das suas alterações:
    ```sh
    git commit -m 'Adiciona minha feature'
    ```
4. Envie para o branch original:
    ```sh
    git push origin minha-feature
    ```
5. Crie um Pull Request.

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.