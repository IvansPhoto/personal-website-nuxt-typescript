<template>
  <div class="responsibilities">
    <button>Show</button>
    <p>{{ $t('Responsibilities') }}</p>
    <p>{{ RespList }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Biography extends Vue {
  @Prop(String) readonly Resp: string | undefined

  isShown = false;

  RespList: string[] | undefined

  getRespList (): void {
    this.RespList = this.Resp?.split('\n')
    this.isShown = !this.isShown
  }
}
</script>

<style lang="scss">
 .responsibilities{
   display: flex;
   flex-direction: column;
 }
</style>
