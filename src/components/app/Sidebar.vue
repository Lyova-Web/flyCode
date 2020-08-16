<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <li
      v-for="link in links"
      :key="link.url"
    >
    <router-link
      active-class="active"
      :to="link.url"
      :exact="link.exact"
      class="waves-effect waves-orange pointer"
      v-if="isLogin || link.url=='/allposts' || link.url=='/'"
      >
      {{link.title}}
    </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    isLogin: localStorage.token ? true : false,
    links: [
      { title: "Главная", url: "/", exact: true },
      { title: "Все посты", url: "/allposts"},
      { title: "Мои посты", url: "/myposts" },
      { title: "Новый пост", url: "/record" }
    ],
  }),
};
</script>