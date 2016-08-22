var express = require('express')
var requestPack = require('request')
//var path = require('path')

var app = express()
console.log(__dirname)

app.use('/',express.static('./public'))

app.get('/twitchapi', function(request, response){
  requestPack('https://api.twitch.tv/kraken/streams/HSdogdog',function(error, res, body){
    response.send(JSON.parse(body))
  })
})

var port = process.env.PORT || 1337

app.listen(port, function(){
  console.log('Listening on port 1337')
})
