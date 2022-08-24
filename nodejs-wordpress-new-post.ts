(async () => {
    var WP = require('wordpress');

    var client = WP.createClient({
        url      : 'localhost:8001',
        username : 'unbiased',
        password : 'coder'
    });
    let new_post: any = {
        'title': 'Unbiased Coder Title',
        'content': '<h2>Fun section 1</h2><p>content for section1</p><h2>Fun section 2</h2><p>content for section2</p>',
    };
    client.newPost(new_post, 
                            function(error: any, post_id: number ) {
                                console.log('Successfully created post with id: ', post_id);
                            });
})();
