const path = require('path')
const { execSync, spawn } = require('child_process')

// const res = execSync(path.resolve(__dirname, '..', 'vm_x64', 'node', 'npm.cmd') + ' ' + 'install')

spawn(
    path.resolve(__dirname, 'node', 'npm.cmd'),
    [
        'install', '--prefix', path.resolve(__dirname, '..', 'vm_x64'),
        'ffi', '@types/ffi',
        'ref', 'ref-array', 'ref-struct'
    ],
    {
        stdio: [process.stdin, process.stdout, process.stderr]
    }
)


// cmd.stdout.on('data', chunk => {
//     console.log(chunk.toString('utf8'))
// })

// cmd.on('close', () => {
//     console.log('DONE')
//     console.log('')
// })