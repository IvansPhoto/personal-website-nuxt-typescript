<template>
  <div class="responsibilities">
    <p style="grid-area: p"><strong>{{ $t('Biography.Responsibilities') }}</strong></p>
    <button class="resp-button" style="grid-area: button" @click="getRespList">
      <span v-if="!isShown">{{ $t('Biography.Show') }}</span>
      <span v-if="isShown">{{ $t('Biography.Hide') }}</span>
    </button>
    <div v-if="isShown" style="grid-area: div">
      <p v-for="(res, key) in RespList" :key="key">
        {{ res }}
      </p>
    </div>
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
    this.RespList = this.Resp?.split('\\n')
    this.isShown = !this.isShown
  }
}
</script>

<style lang="scss">
 .responsibilities{
   display: grid;
   grid-template-columns: auto 1fr;
   grid-template-areas: 'p button' 'div div';
   row-gap: 1rem;
   column-gap: 1rem;
   align-items: center;
   align-content: center;
 }

 .resp-button {
   font-weight: 300;
   font-size: 1.5rem;
   border: 0.1rem solid var(--colorRed);
   color: var(--colorFont);
   background-color: var(--colorBackground);
   border-radius: 0.3em;
   width: min-content;
 }
</style>
