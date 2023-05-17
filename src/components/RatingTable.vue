<template>
  <div>
    <h2>Рейтинг</h2>

    <div v-if="!rating[0]">Тут тоже пока ничего нет</div>
    
    <table class="ratingTable">
      <tr class="tableRow"
        v-for="(item, index) in rating"
        :key="index"
        >
        <td v-text="`${index + 1}`"></td>
        <td v-html="`У игрока <b>${item.name}</b> ${item.life} ${livesText(item.life)}`"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
name: 'RatingTable',

props: {
  rating: {
    type: Array
  },
},

data () {
  return {
    players: [],
  };
},

methods: {
  livesText(n){
      if (n > 10 && n < 15) {
        return 'жизней'
      }

      const lastCher = n > 10 ? (n).toString().slice(-1) : (n).toString()
      let str = ''

      switch (lastCher) {
        case '1':
          str = 'жизнь'
          break
        case '2':
        case '3':
        case '4':
          str = 'жизни'
          break
        default:
          str = 'жизней'
          break
      }

      return str
    }
  },
}
</script>

<style scoped lang="scss">
.ratingTable{
  border-spacing: 2px;
  width: 100%;

  .tableRow{
    td{
      border: none;
      background-color: #340225;
      color: #ffffff;
    }

    &:nth-child(n + 2){
      td{
        background-color: hsla(318, 93%, 11%, 0.75);
      }
    }

    &:nth-child(n + 3){
      td{
        background-color: hsla(318, 93%, 11%, 0.5);
      }
    }

    &:nth-child(n + 4){
      td{
        background-color: white;
        color: #340225;
      }
    }
  }
}
</style>
