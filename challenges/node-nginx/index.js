const express = require("express")
const app = express()
const process = require('process')
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people (name) VALUES ('Wesley')`
connection.query(sql)

app.get('/', async (req, res) => {
  connection.query('SELECT * FROM people', (_, result) => {
    let html = `<h1>Full Cycle</h1>`
    html += `<hr>`
    for(const person of result) {
      html += `<p><b>${person.name}</b></p>`
    }
    res.send(html)
  })
})

process.on('SIGTERM', () => {
  connection.end()
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})