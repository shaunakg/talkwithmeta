var express = require('express');
var app = express();
var http = require('http').createServer(app);
const webport = process.env.PORT || 8080;

let av = Math.round(Math.random() * 100);

app.get("/", (req, res) => {

    if (!req.query.t && !req.query.d) {
        return res.status(400).end(":( Unable to parse query parameters - none or wrong ones given.")
    }

    if (req.query.auth == av) {

        av = Math.round(Math.random() * 100);

        res.write("<!doctype html><html><head>");
        res.write(`<title>${decodeURIComponent(req.query.t)}</title>`);
        res.write(`<meta name="description" content="${decodeURIComponent(req.query.d)}" />`)
        return res.end("</head></html>")

    } else {

        res.write("<!doctype html><html><head>");
        res.write(`<title>hi! my name's abinash!</title>`);
        res.write(`<meta name="description" content="I suck" />`)
        return res.end("</head></html>")

    }
});

app.get("/_auth", (req, res) => {
    res.end(av.toString());
})

http.listen(webport, function(){
    console.log('listening on *:' + webport);
});