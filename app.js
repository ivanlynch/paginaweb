/**
 * Created by ivanlynch on 30/10/16.
 */
let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.sendfile('index.html');
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});