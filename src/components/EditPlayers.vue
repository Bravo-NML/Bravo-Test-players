<template>
  <h1>Редактирование игроков</h1>

  <div v-if="!rating[0]">Тут пока ничего нет</div>

  <div
    v-for="(item, index) in usersLife"
    :key="index"
    class="row"
  >
      <input 
        class="name" 
        placeholder="Пожалуйста, не оставляйте это поле пустым" 
        v-model="item.name"
      >

      <a class="button" href="#" @click.prevent="minusLife(item)">-</a>

      <span class="lifeCount">{{item.life}}</span>
      
      <a class="button" href="#" @click.prevent="plusLife(item)">+</a>  
  </div>

  <RatingTable :rating="rating"/>
  
</template>

<script>
import RatingTable from './RatingTable.vue'

export default {
  name: 'LifeCounter',

  props: {
    playersList: {
      type: Array
    },
  },

  components: {
    RatingTable,
  },
  
  data () {
    return {
    };
  },
  
  created() {
    for (let i = 0; i < this.playersList; i++) {
      this.usersLife.push({
        name: this.playersList.name,
        life: this.playersList.life
      });
    }
  },
  
  computed: {
    usersLife () {
      return [...this.playersList]
    },
    rating () {
      let places = [...this.usersLife];
  
      places.sort((a, b) => b.life - a.life);
      return places;
    }
  },
  
  methods: {
    plusLife (item) {
      item.life++;
    },

    minusLife (item) {

      if (item.life > 0) {
        item.life--;
      }
    }
  },
}
</script>

<style scoped lang="scss">
.row {
    display: flex;
    align-items: center;
    margin-top: 20px;

    input {
        margin-right: 12px;
        width: 100%;
        height: 24px;
        border-left: none !important;
        border-right: none !important;
        border-top: none !important;
        outline: none !important;
        border-bottom: 2px solid #340225;
    }

    .button {
      min-width: 16px;
      height: 16px;
      text-decoration: none;
      font-weight: bold;
      color: white;
      background-color: #340225;
      border-radius: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: transform .1s linear;

      &:active{
        transform: scale(.8);
      }

    }

    .lifeCount {
      margin: 0 12px;
      width: 32px;
    }
}

</style>