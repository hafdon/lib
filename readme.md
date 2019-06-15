# exports

## `readfile`

An async function that reads a file's contents

## installation

`npm i @hafdon/lib`

## use like this:

```javascript
const { readfile } = require('@hafdon/lib')

async function main() {
    const file = `${__dirname}/query1.sql`
    const package = await readfile(filename)

    if (!package._error && package.datatype === 'file:utf-8') {
        console.log(package.data)
    } else {
        console.log(package.error)
    }
}

main()
```
