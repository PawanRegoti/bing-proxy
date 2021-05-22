import corsProxy from 'cors-anywhere'

var host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3030

corsProxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
