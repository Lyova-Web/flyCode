<template>
  <div>
    <div class="page-title">
      <h3>Тестовое задание FlyCode by Lyova Avetisyan</h3>
    </div>
    </div>
</template>

<script>
import messages from "../utils/messages";
// @ is an alias to /src
export default {
  name: "Home",
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
};
</script>
