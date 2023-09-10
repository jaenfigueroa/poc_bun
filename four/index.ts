// const file = Bun.file('./data/users.json')

const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response('cscs')
  },
})

console.log(`Listening on localhost:${server.port}`)

// mostra con formato un json
// console.log(await file.json())

// copiar en index.html la respuesta de una peticion
// await Bun.write('index.html', await fetch('https://www.deepl.com/es/translator'))

// hashear una contraseña
// const password = '11657805065593803149n'
// const hashPassword = Bun.hash(password)
// console.log(hashPassword)

//Leer valores del .env sin tener que instalar dotenv
// console.log(Bun.env.VALOR)
