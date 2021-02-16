<template>
    <div class="Footer">
        <p>copyright@2021</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .Footer{
        background-color: rgba($color: #000000, $alpha: .6);
        @include wh(100%,5vh);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        left: 0;
    }
</style>