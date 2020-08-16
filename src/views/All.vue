<template>
  <div>
    <div class="page-title">
      <h3>Все посты</h3>
    </div>

    <div class="row">
      <div v-for="post in info"  v-bind:key="post.post.id" class="col s12 m12 l9">
        <div class="card light-blue bill-card">
          <div class="card-content white-text">
            <span class="card-title">{{post.post.title}}</span>
            <p class="currency-line">
              {{post.post.content}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
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
</style> 
<script>
export default {
  name: "All",
  data:() => ({
    info: null
  }),
  mounted() {
      this.axios
      .get('http://imager.flcd.ru/api/all_posts')
      .then(response => (this.info = response.data.data));
  },
};
</script>
