<template>
  <Transition name="flow">
    <div v-show="commentShown" :class="classModifier">
      <slot></slot>
    </div>
  </Transition>
</template>

<script>
export default {
name: 'CommentWindow',

props: {
  commentShown: {
    background: String,
    type: Boolean
  },
},

computed: {

  classModifier() {
    if(this.background){
      return 'commentWindow commentWindow_' + this.background;
    }
    return 'commentWindow'
  }

},

}

</script>

<style scoped lang="scss">
.commentWindow{
  position: absolute;
  width: 600px;
  padding: 10px;
  margin-top: 10px;
  box-sizing: border-box;
  z-index: -1;

  &_green{
    background-color: #e8ffe6;
  }

  &_red{
    background-color: #ffe6e6;
  }
}

.flow-leave-active,
.flow-enter-active {
    transition: transform .25s linear;
}

.flow-leave-to,
.flow-enter-from{
    transform: translateY(-100%);
}
</style>
