<template>
  <nav>
    <div id="NavDesktop">
      <nuxt-link exact-active-class="activeLink" :to="localePath('/')">
        {{ $t('Nav.About') }}
      </nuxt-link>
      <nuxt-link exact-active-class="activeLink" :to="localePath('/biography')">
        {{ $t('Nav.Biography') }}
      </nuxt-link>
      <nuxt-link exact-active-class="activeLink" :to="localePath('/dev-skills')">
        {{ $t('Nav.DevSkills') }}
      </nuxt-link>
      <nuxt-link exact-active-class="activeLink" :to="localePath('/contacts/')">
        {{ $t('Nav.Contacts') }}
      </nuxt-link>
      <LangSwitcher />
    </div>

    <transition name="showingMenu">
      <div v-if="isShown">
        <div id="NavMobile" class="showingMenuItems" @click="NavToggler">
          <nuxt-link exact-active-class="activeLink" :to="localePath('/')">
            {{ $t('Nav.About') }}
          </nuxt-link>
          <nuxt-link exact-active-class="activeLink" :to="localePath('/biography')">
            {{ $t('Nav.Biography') }}
          </nuxt-link>
          <nuxt-link exact-active-class="activeLink" :to="localePath('/dev-skills')">
            {{ $t('Nav.DevSkills') }}
          </nuxt-link>
          <nuxt-link exact-active-class="activeLink" :to="localePath('/contacts/')">
            {{ $t('Nav.Contacts') }}
          </nuxt-link>
          <LangSwitcher />
        </div>
      </div>
    </transition>
    <button :class="{ changeState: !isShown }" class="button" aria-label="Menu button" @click="NavToggler">
      <!--      {{ isShown ? '|':'X' }}-->
    </button>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Nav extends Vue {
  isShown: boolean = false;

  NavToggler ():void {
    this.isShown = !this.isShown
  }
}
</script>
<style lang="scss">
@import "./assets/scss/scss-variables";

.showingMenu-enter-active,
.showingMenu-leave-active {
  transition: opacity 0.125s;
}

.showingMenu-enter,
.showingMenu-leave-to {
  opacity: 0;
}

.activeLink {
  color: var(--colorFont);
}

nav {
  width: 100%;
  z-index: 3;

  a {
    text-transform: uppercase;
    font-weight: 500;
  }
}

#NavDesktop {
  min-height: $nav-footer-min-height;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  border-bottom: 0.1rem solid var(--colorFont);
  z-index: 10;
  color: var(--colorFont);
  background-color: var(--colorBackground);
}

.activeLink {
  color: var(--colorRed);
}

#NavMobile {
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem 0 0 1rem;
  display: flex;
  flex-direction: column;
  width: 19rem;
  height: 100vh;
  border-left: 0.1rem solid var(--colorRed);
  background-color: var(--colorBackground);
  z-index: 10;
  gap: 1rem;
}

//.nav-toggler {
//  position: fixed;
//  top: 0.75rem;
//  right: 1rem;
//  z-index: 10;
//  border: none;
//  border-radius: 0.5rem;
//  text-transform: uppercase;
//  margin: 0;
//  padding: 0.5em;
//  color: var(--colorBackground);
//  background-color: transparent;
//  box-shadow: none;
//}

.button {
  border: 0.15rem solid var(--colorRed);
  border-radius: 50%;
  background-color: var(--colorBackground);
  cursor: pointer;
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 100;
  transition-duration: 250ms;
}

.changeState {
  border: 0.15rem solid var(--colorFont);
  border-radius: 10%;
}

.changeColor {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  bottom: 1rem;
  left: 1rem;
  width: auto;
  height: 1.5rem;
  border: none;
  border-radius: 0.75rem;
  color: var(--colorBackground);
  background-color: var(--colorFont);
  padding: 0 0.5em;
  z-index: 100;
}

//@media (min-width: 1001px) and (max-width: 1440px) {
//  #NavDesktop {
//    padding: 0.75rem 5vw;
//  }
//}

@media (max-width: 1000px) {
  #NavDesktop {
    display: none;
  }

  #NavMobile {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    min-width: 100%;
    margin: 0;
    padding: 1rem 2rem;
    box-sizing: border-box;

    > * {
      font-size: 2.5rem;
    }
  }

  .button {
    width: 2rem;
    height: 2rem;
    box-sizing: border-box;
  }

  .changeColor {
    width: 1.5rem;
    padding: 0;
    left: unset;
    right: 1rem;
    border: 0.1rem solid var(--colorFont);
    box-sizing: border-box;
  }

  .changeColorText {
    display: none;
  }
}
</style>
