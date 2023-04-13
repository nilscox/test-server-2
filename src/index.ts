import { createServer } from 'http';

createServer((req, res) => {
  res.end();
}).listen(8854, '0.0.0.0', () => {
  console.log('server started on port 8854');
});
