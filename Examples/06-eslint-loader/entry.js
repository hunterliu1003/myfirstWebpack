import sayHello from './sayHello.js'
import {name, skills, location} from './Hunter.js'
require('./console.js')

sayHello('Hunter');

document.write(`
  <p>Hunter.js:</p>
  <h1>Hello, ${name}</h1>
  <h1>I know ${skills}</h1>
  <h1>I am from ${location}</h1>
`);