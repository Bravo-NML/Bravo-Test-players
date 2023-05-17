<template>

  <Transition name="pageChange">
    <div v-if="currentPage === CREATE_PLAYER">
      <CreatePlayer @handle-players-list="createdPlayers" />
    </div>
    <div v-else-if="currentPage === EDIT_PLAYERS">
      <EditPlayers :playersList="playersList" />
    </div>
  </Transition> 

  <BasicButton class="toggleButton" @click="changePage()">{{ buttonName }}</BasicButton>
</template>

<script>
import CreatePlayer from './components/CreatePlayer.vue'
import EditPlayers from './components/EditPlayers.vue'
import BasicButton from './components/BasicButton.vue'

export default {
  name: 'App',
  components: {
    CreatePlayer,
    EditPlayers,
    BasicButton,
  },
  data() {
    return {
      playersList: [],
      currentPage: "createPlayer",
    }
  },

  setup () {
    const CREATE_PLAYER = 'createPlayer';
    const EDIT_PLAYERS = 'editPlayer';

    return {
        CREATE_PLAYER, EDIT_PLAYERS
    }
  },   

  created() {
    
  },

  computed: {
    buttonName() {
      if (this.currentPage === this.EDIT_PLAYERS) {
        return 'Создать'
      }
      if (this.currentPage === this.CREATE_PLAYER) {
        return 'Редактировать'
      }

      return ''
    }
  },

  methods: {
    createdPlayers(newPlayer) {
      this.playersList.push(newPlayer);
    },

    changePage(){
      switch (this.currentPage) {
        case this.CREATE_PLAYER:
          this.currentPage = this.EDIT_PLAYERS
          break;

        case this.EDIT_PLAYERS:
          this.currentPage = this.CREATE_PLAYER
          break;
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b0b0b;
  margin: 60px auto;
  width: 600px;
  overflow: hidden;
}

.pageChange-leave-active {
  transition: transform .25s linear;
}

.pageChange-enter-active {
  transition: transform .25s .25s linear;
}

.pageChange-leave-to {
  transform: translateX(100%);
}
.pageChange-enter-from{
  transform: translateX(-100%);
}
</style>
