import http from 'https'

const fetch = (url: string) => {
    return new Promise<string>((resolve) => {
        http.get(url, res => {
            let body = ''
            res.on('data', chunk => {
                body = body + String(chunk);
            })
            res.on('end', () => {
                console.log(body)
                resolve(body)
            })
        })
    })
}

export default fetch