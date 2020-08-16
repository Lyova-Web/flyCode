<template>
  <div>
    <div class="page-title">
      <h3>Мои посты</h3>
    </div>

    <div class="row">
      <div v-for="post in info" v-bind:key="post.post.id" class="col s12 m12 l9">
        <div class="card orange bill-card">
          <div class="card-content white-text"> 
            <span class="card-title">{{post.post.title}}</span> <span>
              <a href="/postchange" @click.prevent="postChange(post.post.id)"  
               >Редактировать</a>
              <a href="delete" @click.prevent="postDelete(post.post.id)"
              >Удалить</a></span>
            <p class="currency-line">{{post.post.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "My",
  data: () => ({
    info: null,
  }),
  mounted() {
    const header = {
      "Authorization": "Bearer " + localStorage.token,
    };
    this.axios
      .get("http://imager.flcd.ru/api/posts", {headers: header})
      .then((response => (this.info = response.data.data)))
  },
  methods: {
    postChange(id) {
      this.$router.push('/changepost?id=' + id)
    },
    postDelete(id) {
      const header = {
      "Authorization": "Bearer " + localStorage.token,
      };
      this.axios
      .delete("http://imager.flcd.ru/api/posts/" + id, {headers: header})
      .then(()=> {
        this.$router.push('/allposts')
        this.$message("Пост удален")
        })
      .catch((error)=> console.log(error))
    }
  }
};
</script>

<style lang="sass">
a
  color: #fff
  &:hover
    text-decoration: underline
.currency-line
  border-bottom: none
  font-size: 16px
  font-weight: 300
.card .card-content .card-title
  margin-bottom: 0
  border-bottom: 1px solid #fff
  padding-bottom: 20px
.bill-card
  height: auto
a
  margin-right: 10px
  margin-left: 10px
</style> 
