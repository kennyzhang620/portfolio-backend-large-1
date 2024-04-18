const express = require('express');
const app = express();
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors') //cross-origin resource sharing
const axios = require('axios')
const url = require('url')
const bodyParser = require('body-parser');
const path = require('path')

const PORT = process.env.PORT || 5010;

app.use('/', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

var fs = require('fs');
var util = require('util');
var logFile = fs.createWriteStream('log.txt', { flags: 'a' });
  // Or 'w' to truncate the file every time the process starts.
var logStdout = process.stdout;

console.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n');
  logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.error = console.log;

function hashCode(str) {
    let hash = 0;
    for (var i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

app.use(cors({
    origin: '*' // change to webapp later
}));

const PRODUCTION = false;

if (PRODUCTION) {
app.use(function(request, response, next) {

    if (request.headers['x-forwarded-proto'] !== 'https') {
       return response.redirect("https://" + request.headers.host + request.url);
    }

    next();
})
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // allows us to export app for use in testing
