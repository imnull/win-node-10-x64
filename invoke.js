#!/usr/bin/env node

const { invoke } = require('./exec')

const params = process.argv.slice(2)

if (params.length > 0) {
    invoke(params).then(function (res) {
        console.log({ success: true, data: res.toString('utf-8').trim() })
    }, function (err) {
        console.log({ success: false, error: err })
    })
} else {
    console.log({ success: false, error: 'No params, exit.' })
}