import corsProxy from 'cors-anywhere'

var host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3030

corsProxy.createServer({
    originWhitelist: ['','pawanregoti.github.io/'], // Allow all origins
    requireHeader: [],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
