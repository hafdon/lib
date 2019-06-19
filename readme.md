## installation

`npm i @hafdon/lib`

# exports

## `readfile`

An async function wrapper of `fs-extra` that reads a file's contents and returns a data object of type :

```javascript
const DATATYPE = ['file:utf8']

const Package = {
    error: Object, // Error() object
    _error: Boolean, // true if Error() object attached
    data: Object, // the file contents
    datatype: String, // string of enum DATATYPE
}
```

### use like this:

```javascript
const { readfile } = require('@hafdon/lib')

async function main() {
    const file = `${__dirname}/query1.sql`
    const package = await readfile(filename)

    if (!package._error && package.datatype === 'file:utf8') {
        console.log(package.data)
    } else {
        // throw the error (throw new Error(package.error)) if you want to
        // but it fails silently by default
        console.log(package.error)
    }
}

main()
```

## `sanitizeFloat`

## `sanitizeInt`
