<template>
<div>

    <div class="container">
        <ul>
        <li v-for="post in posts" :key="post.id">
           <div class="card">
          <b>Titolo post:</b> {{post.title}}
           <b>Messaggio:</b> {{post.content}}
           <b>Categoria:</b> {{post.category.name}}</div>
        </li>
    </ul>
    </div>

</div>

</template>

<script>
export default {

    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/posts",
            posts: []
        }
    },

    methods: {
        getApi() {
            axios.get(this.apiUrl).then((r) => {
                this.posts = r.data;
            });
        },
    },

    mounted() {
        this.getApi();
    }

}
</script>

<style>

@import'~bootstrap/dist/css/bootstrap.css';

ul{
    list-style: none;
}



.card{
    margin: 10px 0;
}


</style>
