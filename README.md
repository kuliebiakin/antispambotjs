# Antispambot JS

JavaScript implementation of WordPress PHP function. Converts selected email addresses characters to HTML entities to block spam bots. Not all characters in the email address are converted: the selection is random and changes each time the function is called.

## Installation
```
$ npm i --save antispambotjs
```

## Usage

```
antispambot(emailAddress, hexEncoding);
```

## Example

```
import antispambot from 'antispambotjs';

let encoded = antispambot('test@test.com');

console.log(encoded); // te&#115;t&#64;&#116;es&#116;.c&#111;&#109;
```

## License

MIT