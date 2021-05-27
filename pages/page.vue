<template>
  <main id="Main">
    <section>
      <p>{{ counter }}</p>
      <button @click="increase()">
        +
      </button>
      <button @click="decrease()">
        -
      </button>
      <button @click="reset()">
        0
      </button>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Blog extends Vue {
  counter: number = 1;

  increase (): void {
    this.counter++
  }

  decrease (): void {
    this.counter--
  }

  reset (): void {
    this.counter = 0
  }
}
</script>

<style scoped>

</style>
