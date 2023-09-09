import express from 'express'
const app = express()

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!',
    date: new Date(),
    env: process.env.NODE_ENV,
  })
})

const port = process.env.PORT ?? 3010

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
})
