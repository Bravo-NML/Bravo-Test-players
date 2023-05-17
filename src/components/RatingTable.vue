<template>
  <div>
    <h2>Рейтинг</h2>

    <div v-if="!rating.length">Тут тоже пока ничего нет</div>
    
    <table class="ratingTable">
      <tr class="tableRow"
        v-for="(item, index) in rating"
        :key="index"
        >
        <td v-text="`${index + 1}`"></td>
        <td v-html="playerText(item)"></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { declinationOfNumberCurrying as getConj} from '../ConjGenerator.js';

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
        const getWord = getConj(['жизнь', 'жизни', 'жизней'])

        return getWord(n)
    },

    playerText(item){
      return `У игрока <b>${item.name}</b> ${item.life} ${this.livesText(item.life)}`
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
        outline-offset: -2px;
        outline: 2px solid hsla(318, 93%, 11%, 0.5);
      }
    }
  }
}
</style>
