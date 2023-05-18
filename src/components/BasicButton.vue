<template>
  <button :class="'basicButton ' + buttonType">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BasicButton',

  props: {
    buttonType: {
      type: String,
      validator(value) {
        return ['createButton', 'toggleButton', 'toggleButtonActive'].includes(value)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.basicButton{
  cursor: pointer;

  outline: none;
  border-radius: 5px;
  padding: 10px;

  border: 2px solid #340225;
  background-color: white;

  font-weight: bold;
  transition: transform .1s linear, background-color .1s linear, color .1s linear;
}

.createButton{
  &:active{
    transform: scale(.9);
  }

  &:hover{
    background-color: #340225;
    color: white;
  }
}

.toggleButton{
  border: none;
  border-bottom: 2px solid #340225;
  border-radius: 0;
  width: 120px;
}

.toggleButtonActive{
  width: 120px;
  border: none;
  border-radius: 0;
  background-color: #340225;
  color: white;
}

.createButton{
  margin-top: 10px;
}
</style>
