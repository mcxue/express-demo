import express from 'express'
import http from 'http'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((request, response) => {
  const {method, httpVersion, path, hostname, query, body} = request
  console.log('method:', method)
  console.log('httpVersion:', httpVersion)
  console.log('path:', path)
  console.log('hostname:', hostname)
  console.log('query:', query)
  console.log('body:', body)
  response.end('welcome to my express server')
})

const server = http.createServer(app)

server.listen(8080)


