const HELLO = 'Hello, ';

export default function sayHello(name) {
  document.write(`
    <p>sayHello.js:</p>
    <h1>${HELLO}${name}</h1>
  `);
}