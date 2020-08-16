<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{date | date('datetime')}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a class="dropdown-trigger black-text" href="#" data-target="dropdown" ref="dropdown">
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li v-if="isLogin">
              <router-link to="/myposts" class="black-text">
                <i class="material-icons">account_circle</i>Мои посты
              </router-link>
            </li>
            <li v-if="isLogin">
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
            <li v-if="!isLogin">
              <router-link to="/login" class="black-text">
                <i class="material-icons">account_circle</i>Войти
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
    isLogin: localStorage.token ? true : false
  }),
  methods: {
    async logout() {
      const header = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.token
      }
      await this.axios
        .post("http://imager.flcd.ru/api/logout", "1", {headers: header
        }).then(()=> {
          this.$router.push("/login?message=logout");
          localStorage.token = "";
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
    this.dropdown = window.M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false,
    });
  },
  beforeDestroy() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  },
};
</script>