//Generate a JWT token manually using Node.js crypto library 

const crypto = require('crypto');
const base64url = require('base64url');
const header = {
    "alg": "HS256",
    "typ": "JWT"
  }
const headerB64 = base64url(JSON.stringify(header));

const payload = {foo:'bar'};
const payloadB64 = base64url(JSON.stringify(payload));
const secret = 'my secret';
const content = `${headerB64}.${payloadB64}`;
//Hashing
let signature = crypto.createHmac('sha256',secret).update(content).digest('hex');
let token = `${content}.${signature}`;
console.log(token);


//sign and verify token using npm 'jsonwevtoken'
const jwt = require('jsonwebtoken');
let token = jwt.sign({ foo: 'bar' }, 'shhhhh');
console.log(token);
