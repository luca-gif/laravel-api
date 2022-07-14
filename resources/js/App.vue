<template>
<div>

    <div class="container">
        <ul>
        <li v-for="post in posts" :key="post.id">
           <div class="card">
           <b>Titolo post:</b> {{post.title}}
           <b>Messaggio:</b> {{post.content}}
           <span v-if="post.category"><b>Categoria:</b> {{post.category.name}}</span>
           </div>
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
    padding: 10px;
    background-image: linear-gradient(#c2c2c2 10%, #fff) ;
}

</style>
