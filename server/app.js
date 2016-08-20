var express = require('express')
var requestPack = require('request')

var app = express()

app.get('/', function(request, response){
  requestPack('https://api.twitch.tv/kraken/channels/darkwaywardsoul',function(error, res, body){

    response.send(body)
  })
})

app.listen(1337, function(){
  console.log('Listening on port 1337')
})
