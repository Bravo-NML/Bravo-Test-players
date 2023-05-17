<template>
  <button class="basicButton">
    <slot></slot>

  </button>
</template>

<script>
export default {
  name: 'BasicButton',
}
</script>

<style scoped lang="scss">
.basicButton{
  cursor: pointer;

  outline: none !important;
  border-radius: 10px;
  padding: 10px;

  border: 2px solid #340225 !important;
  background-color: white;

  font-weight: bold;
  transition: transform .1s linear, background-color .1s linear, color .1s linear;

  &:active{
    transform: scale(.9);
  }

  &:hover{
    background-color: #340225;
    color: white;
  }
}

.toggleButton{
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #340225;
  color: white;
}

.createButton{
  margin-top: 10px;
}
</style>
