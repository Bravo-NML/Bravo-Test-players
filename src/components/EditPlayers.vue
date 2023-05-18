<template>
  <div>
    <h1>Редактирование игроков</h1>

    <div v-if="!rating.length">Тут пока ничего нет</div>

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

        <button class="button" href="#" @click.prevent="minusLife(item)">–</button>

        <span class="lifeCount">{{item.life}}</span>
        
        <button class="button" href="#" @click.prevent="plusLife(item)">+</button>  
    </div>

    <RatingTable :rating="rating"/>
  </div>  
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
      min-width: 24px;
      height: 24px;
      padding: 5px;
      text-decoration: none;
      font-weight: bold;
      color: #ffffff;
      background-color: #340225;
      border-radius: 5px;
      // font-size: 2em;

      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
      outline: none !important;
      border: none !important;

      transition: transform .1s linear;

      &:active{
        transform: scale(.8);
      }

    }

    .lifeCount {
      margin: 0 12px;
      min-width: 32px;
    }
}

</style>