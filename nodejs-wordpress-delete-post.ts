(async () => {
    var WP = require('wordpress');

    var client = WP.createClient({
        url      : 'localhost:8001',
        username : 'unbiased',
        password : 'coder'
    });

    client.deletePost(129, 
                            function(error: any) {
                                console.log('Any errors set are: ', error);
                            });
})();
