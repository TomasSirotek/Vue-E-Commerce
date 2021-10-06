<template>
     <div class="container">
       
    <div class="header text-center">
      <h2 class="my-3">
    {{ cardsSection.title}}
      </h2>
        <div class="row ">
            <LargeCardsDisplay
            v-for="card in cardsSection.cards"
            :key="card.id"
            :card="card"
            />
        </div>
    </div>

  </div> 

</template>

<script>
 import LargeCardsDisplay from '@/components/LargeCardsDisplay.vue'
    export default {
        props: ["cardsSection"],
        name:"MainCardsDisplay",
        components: {
            LargeCardsDisplay
        },
         
    }
</script>

<style lang="scss" scoped>

</style>