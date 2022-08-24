(async () => {
    var WP = require('wordpress');

    var client = WP.createClient({
        url      : 'localhost:8001',
        username : 'unbiased',
        password : 'coder'
    });
    client.getPosts(function(error: any, posts: any ) {
        posts.forEach((post: any) => {
            console.log('Found post titled: ', post.title, 'With link: ', post.link);
        });
    });
})();