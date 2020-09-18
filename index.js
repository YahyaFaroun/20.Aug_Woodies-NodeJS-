const http = require('http')
const fs = require('fs')
const path = require('path')

from = "/*"
to = "/index.html"
status = 200

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
    if (req.url === '/') {
        fs.readFile('./public/index.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/about') {
        fs.readFile('./public/about.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/how') {
        fs.readFile('./public/howItWorks.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/categories') {
        fs.readFile('./public/categories.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/testimony') {
        fs.readFile('./public/testimony.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/style.css') {
        fs.readFile('./public/style.css', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/css' })
            res.end(data)
        })
    }
    if (req.url === '/Img/Logo.jpg') {
        fs.readFile('./public/Img/Logo.jpg', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'image/jpg' })
            res.end(data)
        })
    }
    if (req.url === '/Img/tisch.png') {
        fs.readFile('./public/Img/tisch.png', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'image/png' })
            res.end(data)
        })
    }
    if (req.url === '/Img/route.png') {
        fs.readFile('./public/Img/route.png', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'image/png' })
            res.end(data)
        })
    }
})


server.on('connection', () => {
    console.log("connected")
})

server.listen(3000, () => {
    console.log('server connected')
})