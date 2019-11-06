<template>
  <div>
    Card
    <div v-if="loading">loading...</div>
    <div v-else>
      <div>{{cid}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { cid: 0, loading: true };
  },
  watch: {
    $route: {
      handler: "fetchData",
      immediate: true
    }
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.cid = this.$route.params.cid;
      }, 3000);
    }
  }
};
</script>
<style scoped>
</style>