<template>
    <div>
      <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
          <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">4</div>
        </CarouselItem>
      </Carousel>
    </div>
</template>

<script>
    export default {
        name: "xs-study"
    }
</script>

<style scoped>

</style>
