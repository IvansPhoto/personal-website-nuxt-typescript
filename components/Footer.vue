<template>
  <footer>
    <p>{{ $t('Footer.RightsReserved') }} {{ new Date().getFullYear() }}.</p>
    <p>This website is built on Angular.</p>
    <p>The source code can be found on <a href="https://gitlab.com/gutehaltung/">GitLab</a>.
    </p>
    <LangSwitcher/>
  </footer>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher.vue'

export default {
  name: 'Footer',
  components: {
    LangSwitcher
  }
}
</script>

<style lang="scss">
@import "./assets/scss/scss-variables";

footer {
  width: 100%;
  min-height: $nav-footer-min-height;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  padding: 0 1rem;
  border-top: 0.1rem solid var(--colorFont);
  color: var(--colorFont);
  background-color: var(--colorBackground);

  .address,
  .phones,
  .terms {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;

    p,
    a {
      font-size: 1.25rem;
      text-align: center;
      font-weight: 500;
      padding: 0;
    }
  }
}

@media (max-width: 1000px) {
  footer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    p,
    a {
      text-align: center;
      font-size: 1rem;
    }
  }
}
</style>
