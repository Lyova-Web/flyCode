<template>
  <div>
    <div class="page-title">
      <h3>Новый пост</h3>
    </div>

    <form class="form" @submit.prevent="newPost">
      <div class="input-field">
      </div>

      <div class="input-field">
        <input
          id="title"
          type="text"
          v-model.trim="postTitle"
          :class="{invalid: ($v.postTitle.$dirty && !$v.postTitle.required)}"
        />
        <label for="title">Заголовок поста</label>
        <small
          v-if="$v.postTitle.$dirty && !$v.postTitle.required"
          class="helper-text invalid"
        >Обязательное поле</small>
      </div>

      <div class="input-field">
        <textarea
          name
          id="description"
          cols="30"
          rows="10"
          v-model.trim="postContent"
          :class="{invalid: ($v.postContent.$dirty && !$v.postContent.required)}"
        ></textarea>
        <label for="description">Текст поста</label>
        <small
          v-if="$v.postContent.$dirty && !$v.postContent.required"
          class="helper-text invalid"
        >Обязательное поле</small>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>



<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Record",
  data: () => ({
    postTitle: null,
    postContent: null,
  }),
  validations: {
    postTitle: { required },
    postContent: { required },
  },
  mounted () {
    if(!localStorage.token){
      this.$router.push('/login')
    }
  },
  methods: {
    newPost() {
      const header = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.token
      }
      const data = {
        title: this.postTitle,
        content: this.postContent,
        images: []
      }
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.axios
        .post("http://imager.flcd.ru/api/posts", data, { headers: header })
        .then(() => {
          this.$message("Новый пост создан")
           this.$router.push("/myposts");
        })
        .catch((error) => console.log(error));
    }
  },
};
</script>


<style lang="sass">
textarea
  border: none
  border-bottom: 1px solid #9e9e9e
  outline: none
  height: auto
  min-height: 150px
  resize: none
  &:focus
    border-bottom: 1px solid #26a69a
    box-shadow: 0 1px 0 0 #26a69a
  &:focus ~ label
    color: #26a69a
  &.invalid
    border-bottom: 1px solid red
    box-shadow: 0 1px 0 0 red
  &:focus.invalid ~ label
    color: red
 
</style>
