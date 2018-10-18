<template lang="html">
    <div>
        <h1>Counter: {{ counter }}</h1>
        <slot name="title"></slot>
        <hr>
        <slot name="text"></slot>
    </div>
</template>

<script>
    import {eventEmitter} from './main';
    export default {
        data(){
            return {
                counter: 0
            }
        },
        created(){
            eventEmitter.$on('counterUpdated', () => {
                this.counter++
            })
        }
    }
</script>

<style lang="css">

</style>
