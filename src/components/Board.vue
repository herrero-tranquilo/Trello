<template>
  <div>
    board
    <div v-if="loading">loading....</div>
    <div v-else>
      <div>{{bid}}</div>
      <router-link :to="`/board/${bid}/card/1`">card1</router-link>
      <router-link :to="`/board/${bid}/card/2`">card2</router-link>
    </div>
    <hr />
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { bid: 0, loading: true };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.bid = this.$route.params.bid;
        this.loading = false;
      }, 3000);
    }
  }
};
</script>
<style scoped>
</style>