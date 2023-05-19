<template>
    <h1>Редактирование игроков</h1>

    <div v-if="!rating.length">Тут пока ничего нет</div>

    <div
      v-for="(user, index) in users"
      :key="index"
      class="row"
    >
        <input 
          class="name" 
          placeholder="Пожалуйста, не оставляйте это поле пустым" 
          v-model="user.name"
        >

        <button class="button" @click.prevent="updateLife(user, 'inc')">–</button>

        <span class="lifeCount">{{user.life}}</span>
        
        <button class="button" @click.prevent="updateLife(user, 'dec')">+</button>  
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
  
  computed: {
    users () {
      return [...this.playersList]
    },
    rating () {
      return [...this.users].sort((a, b) => b.life - a.life);
    }
  },
  
  methods: {
    updateLife (user, action) {
      action === 'dec' ? user.life++ : user.life > 0 ? user.life-- : 0;
    },
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