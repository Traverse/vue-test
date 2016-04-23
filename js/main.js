var Vue = require('vue');
var Post = require('./components/post');
var AppHeader = require('./components/header');

$vm = new Vue ({

    el: '#app',

    components: {
        Post,
        AppHeader
    },

    data: {
        posts: [
            {
                title: 'A post title',
                date: '23-04-2016',
                author: 'John Doe',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                title: 'Another post title',
                date: '23-04-2016',
                author: 'Jane Doe',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                title: 'A third post title',
                date: '23-04-2016',
                author: 'Jerry Doe',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ]
    },

    ready: function() {

    },

    methods: {

    }

});
