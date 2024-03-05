const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    for (let i = 1; i <= 6; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        res.write(row + '\n');
    }

    res.end();
});

server.listen(5000);