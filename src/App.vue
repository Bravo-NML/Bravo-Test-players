<template>
  <div>
    <div class="tabs">
      <BasicButton
        :buttonType="currentPage === CREATE_PLAYER ? 'toggleButtonActive' : 'toggleButton'" 
        @click="changePage(CREATE_PLAYER)"
      >
        Создать
      </BasicButton>

      <BasicButton
        :buttonType="currentPage === EDIT_PLAYERS ? 'toggleButtonActive' : 'toggleButton'" 
        @click="changePage(EDIT_PLAYERS)"
      >
        Редактировать
      </BasicButton>
    </div>

    <Transition name="pageChange">
      <CreatePlayer v-if="currentPage === CREATE_PLAYER" @handle-create-player="createdPlayers" />
      <EditPlayers v-else-if="currentPage === EDIT_PLAYERS" :playersList="playersList" />
    </Transition> 
  </div>
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
      CREATE_PLAYER: 'createPlayer',
      EDIT_PLAYERS: 'editPlayer',
    }
  },

  computed: {
  },

  methods: {
    changePage(page) {
      this.currentPage = page
    },

    createdPlayers(newPlayer) {
      this.playersList.push(newPlayer);
    },
  },
}
</script>

<style>
.tabs{
  width: 50%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
}

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
