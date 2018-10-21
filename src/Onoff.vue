<template lang="html">
  <div class="">
      <button type="button" class="on" :class="{'active': value}" @click="onChange(true)">on</button>
      <button type="button" class="off" :class="{'active': !value}" @click="onChange(false)">off</button>
  </div>
</template>

<script>

export default {
    props: ['value'],
    methods: {
        onChange(newValue){
            this.$emit('input', newValue)
        }
    }
}
</script>

<style lang="css">
    .on.active{
        background-color: green;
        color: #fff;
    }
    .off.active{
        background-color: red;
        color: #fff;
    }
</style>
