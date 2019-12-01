# Passo a passo do bughunter-backend

## Para rodar o projeto

- Criar um database no banco postgress chamado bugbackend, no passo a passo que segui tem lá como criar o database

```
  sudo -iu postgres
  createdb -O postgres node-postgres-pg
  psql -d node-postgres-pg
```

- Colocar suas credenciais do postgress no database.js dentro de api -- postgres://[usuario]:[senha]@127.0.0.1:5432/bugbackend

- Usuario e senha normalmente são postgres e postgres, no fim colocar o nome do database que você criou

- ter o nodemon instalado globalmente

- Usar nodemon index.js para rodar o projeto

## Links uteis

- [Postgress](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04) descobrir suas credenciais, ou [mudar caso não lembre](https://chartio.com/resources/tutorials/how-to-set-the-default-user-password-in-postgresql/)

- O que segui para criar esse server, [guia bem básico](https://dev.to/miku86/nodejs-postgresql-how-to-connect-our-database-to-our-simple-express-server-without-an-orm-10o0)

- [Node postgres ](https://node-postgres.com/) que vai ser para ajudar nas queries

- [Drop tables no postgress](https://makandracards.com/makandra/62111-how-to-drop-all-tables-in-postgresql)
