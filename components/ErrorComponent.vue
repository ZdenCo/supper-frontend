<template>
    <div class="Error_Main">
        <h2>{{Error}}</h2>
    </div>
</template>
<script>
export default {
    props:[
        'Error'
    ]
}
</script>
<style lang="scss">
    .Error_Main{
        position: absolute;
        @include wh(100vw,100vh);
        top: 0;
        left: 0;
    }
</style>