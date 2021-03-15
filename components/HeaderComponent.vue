<template>
    <div class="Header_Main">
        <h1 class="Header_CompanyName">{{company}}</h1>
        <div class="Header_Welcome">
            <p>Vítejte {{firstname}} {{lastname}} </p>
            <p class="LogOut" v-on:click="emitLogOut">Odhlásit</p>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'title',
        'company',
        'firstname',
        'lastname'
    ],
    methods: {
        emitLogOut() {
            this.$emit('childToParentLogOut');
        },
    },
}
</script>
<style lang="scss">
    .Header_Main{
        border-bottom: 1px white solid;
        background-color: $grey-color;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-right:3%;
        padding-left: 1.5rem;
        .Header_Welcome{
            text-align: right;
        }
        .LogOut{
            cursor: pointer;
        }
    }
</style>