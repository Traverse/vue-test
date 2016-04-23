module.exports = {
    template: '<article><h1>{{ post.title }}</h1><time>{{ post.date }}</time><p><a href="#">{{ post.author }}</a></p><p>{{ post.content }}</p></article>',
    props: ['post'],
}
