<template>
    <div>
        <h1>Добавить нового игрока</h1>
        <div class="row">
            <input 
                id="name" 
                @focus="commentShown = false" 
                type="text" 
                v-model="players_name" 
                placeholder="Имя"
            />
            <input 
                id="life" 
                @focus="commentShown = false" 
                type="number" 
                v-model="players_life" 
                placeholder="Жизней"
            />
            <BasicButton buttonType="createButton" @click="createPlayer()">Создать</BasicButton>
        </div>

        <CommentWindow 
            :commentShown="commentShown" 
            :background="comment.background"
        >
            {{ comment.text }}
        </CommentWindow>
    </div>
</template>

<script>
import BasicButton from './BasicButton.vue'
import CommentWindow from './CommentWindow.vue'
import { declinationOfNumberCurrying as getConj} from '../ConjGenerator.js'

export default {
  name: 'CreatePlayer',

  components: {
    BasicButton,
    CommentWindow,
  },

  data () {
    return {
      players_name: '',
      players_life: '',
      commentShown: false,
      comment: {
        text: '',
        background: '',
      }   
    };
  },

  methods: {
    createPlayer() {
        this.commentShown = true

        if (this.checkIfError()) return

        const newPlayer = {
            'name': this.players_name,
            'life': this.players_life,
        }        

        this.players_name = '';
        this.players_life = '';

        this.$emit('handle-create-player', newPlayer);
    },

    checkIfError(){
        if(this.players_name === '' || this.players_name === undefined) {
            this.comment.text = 'Укажите имя';
            this.comment.background = 'red';
            return true;
        }

        if(this.players_life === '' || this.players_life === undefined) {
            this.comment.text = 'Укажите количество жизней';
            this.comment.background = 'red';
            return true;
        }

        if(this.players_life <= 0) {
            this.comment.text = 'Значение должно быть больше нуля';
            this.comment.background = 'red';
            return true;
        }

        this.comment.text = 
        'Игрок ' + this.players_name + ' с ' + this.players_life + ' ' + this.livesText(this.players_life) + ' успешно создан'

        this.comment.background = 'green'

        return false;
    },

    livesText(n){
        const getWord = getConj(['жизнью', 'жизнями', 'жизнями'])

        return getWord(n)
    }
  },
}
</script>

<style scoped lang="scss">
.row {
    display: flex;
    align-items: flex-end;
    margin-top: 20px;
    background-color: white;

    input {
        margin-right: 12px;
        width: 100%;
        height: 24px;
        border: none;
        outline: none;
        border-bottom: 2px solid #340225;
    }
}

#life {
    width: 70px;
    padding: 5px;
    border: 2px solid #340225 !important;
    border-radius: 5px;
}
</style>
