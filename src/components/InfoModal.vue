<template>
    <div class="container text-center">
        <div class="row">
            <div class="modalus">
    <div class="modal-content">
        <p>{{ this.modalMsg }}</p>
        <button @click="closeBtn">Close this bitch</button>
    </div>
</div>
        </div>
    </div>


    
</template>

<script>
    export default {
        name: "InfoModal",
        props:["modalMsg"],
        methods: {
            closeBtn(){
                this.$emit("close-btn")
            }
        }
        
        
    }
</script>

<style lang="scss" scoped>
.container {
    background: black;
}
.modalus{
    background: black;
    color:red;
    align-items: center;
}

</style>