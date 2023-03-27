import * as path from 'path'
import { spawn } from 'child_process'

const NODE_PATH = path.resolve(__dirname, '.', 'node', 'node.exe')

export const invoke = (params: any[]) => new Promise<Buffer>((resolve, reject) => {
    const res = spawn(NODE_PATH, params, {
        // stdio: [process.stdin, process.stdout, process.stderr],
    })

    const chunks: Buffer[] = []

    res.stdout.on('data', chunk => {
        chunks.push(chunk)
    })

    res.on('error', err => {
        reject(err)
    })

    res.on('close', (err) => {
        resolve(Buffer.concat(chunks))
    })
})
