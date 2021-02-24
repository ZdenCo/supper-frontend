<template>
    <div class="Header_Main">
        <h2 class="Header_CompanyName">{{company}}</h2>
        <div class="Header_Welcome">
            <p>Welcome {{firstname}} {{lastname}}</p>
            <p v-on:click="emitLogOut">Log out</p>
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
        background-color: darkgoldenrod;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-right:3%;
        padding-left: 7%;
        .Header_Welcome{
            text-align: right;
        }
    }
</style>