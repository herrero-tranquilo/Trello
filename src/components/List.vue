<template>
  <div class="list">
    <div class="list-header">
      <div class="list-header-title">{{data.title}}</div>
    </div>
    <div class="card-list">
      <CardItem v-for="card in data.cards" :key="card.id" :data="card" />
    </div>
    <div v-if="isAddCard">
      <AddCard @close="isAddCard=false" :list-id="data.id" />
    </div>
    <div v-else>
      <a class="add-card-btn" href @click.prevent.stop="isAddCard=true">&plus; Add a Card...</a>
      <!-- 강의에 버그가 있는듯 해 stop을 추가 이벤트 버블링때문에 AddCard에서 바로 close가 emit되버림-->
    </div>
  </div>
</template>

<script>
import AddCard from "./AddCard";
import CardItem from "./CardItem";
export default {
  components: { AddCard, CardItem },
  props: ["data"],
  data() {
    return {
      isAddCard: false
    };
  },
  methods: {}
};
</script>
<style>
.list {
  background-color: #e2e4e6;
  border-radius: 3px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  vertical-align: top;
  width: 100%;
  max-height: 100%;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}

.list-header {
  flex: 0 0 auto;
  height: 30px;
  padding: 10px 8px 8px;
  position: relative;
}
.list-header-title {
  font-size: 16px;
  font-weight: 700;
  padding-left: 8px;
  line-height: 30px;
}
.input-title {
  width: 90%;
}
.delete-list-btn {
  position: absolute;
  right: 10px;
  top: 8px;
  text-decoration: none;
  color: #aaa;
  font-size: 24px;
}
.card-list {
  flex: 1 1 auto;
  overflow-y: scroll;
}
.empty-card-item {
  height: 10px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
}
.add-card-btn {
  flex: 0 0 auto;
  display: block;
  padding: 8px 10px;
  color: #8c8c8c;
  text-decoration: none;
}
.add-card-btn:focus,
.add-card-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>