<template>
    <div class="car">
        <h3>Name: {{ carName }}</h3>
        <p>Year: {{ carYear }}</p>
        <button @click="changeName">Change name</button>
        <button @click="changeFunc()">Change name from parent</button>
        <button @click="updateCounter">Update counter</button>
    </div>
</template>

<script>
    import {eventEmitter} from './main';
    export default {
        // props: ['carName', 'carYear'],
        props: {
            carName: {
                type: String,
                required: true
            },
            carYear: Number,
            // counter: Number,
            changeFunc: Function
        },
        methods: {
            changeName(){
                this.carName = "Mazda"
                this.$emit('nameChanged', this.carName)
            },
            updateCounter(){
                eventEmitter.$emit('counterUpdated');
                // this.$emit('counterUpdated', this.counter + 1)
            }
        }
    }

</script>

<style scoped>
    .car {
        border: 1px solid black;
    }
    .car h3{
        margin-bottom: 5px;
    }
</style>
