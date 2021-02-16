<template>
    <div class="Header_Main">
        <h1>Supper</h1>
        <h2>{{company}}</h2>
        <span>Welcome {{firstname}} {{lastname}}</span>
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
    },
}
</script>
<style lang="scss">
    .Header_Main{
        background-color: darkgoldenrod;
        display: flex;
        flex-direction: row;
    }
</style>