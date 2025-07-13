# NodeJS

## Intro

Criando um servidor que retorna hello
```js
import {createServer} from 'node:http'

const server = createServer((request, response) => {
    response.write('Hello')

    return response.end()
})

server.listen(3333)
// localhost:3333=
```

## Terminal Commands

Comando para deixar o servidor sempre online e refletir as mudanças online
```shell
node --watch server.js
```

Comando para criar um package.json 
```shell
npm init -y
```

