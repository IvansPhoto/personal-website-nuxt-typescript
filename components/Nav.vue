<template>
  <nav>
    <div id="NavDesktop">
      <nuxt-link exact-active-class="activeLink" :to="localePath('/')">
        {{ $t('Nav.About') }}
      </nuxt-link>
      <nuxt-link exact-active-class="activeLink" :to="localePath('/contacts/')">
        {{ $t('Nav.Contacts') }}
      </nuxt-link>
      <LangSwitcher />
    </div>

    <transition name="showingMenu">
      <div v-if="showNavMobile" id="NavMobile">
        <div class="showingMenuItems" @click="showNavMobile = !showNavMobile">
          <nuxt-link exact-active-class="activeLink" :to="localePath('/')">
            {{ $t('Nav.About') }}
          </nuxt-link>
          <nuxt-link exact-active-class="activeLink" :to="localePath('/contacts/')">
            {{ $t('Nav.Contacts') }}
          </nuxt-link>
          <LangSwitcher />
        </div>
      </div>
    </transition>
    <button :class="{ changeState: showNavMobile }" class="button" aria-label="Menu button" @click="showNavMobile = !showNavMobile">
      Show
    </button>
  </nav>
</template>

<script lang="ts">

</script>
<style lang="scss">
.showingMenu-enter-active,
.showingMenu-leave-active {
  transition: opacity 1.5s;
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

.company-logo {
  height: 3rem;
  width: 10rem;
  margin-top: 0.5rem;
  text-transform: none;
}

#NavDesktop {
  //height: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem 10vw;
  font-size: 1.25rem;
  border-bottom: 0.1rem solid var(--colorFont);
  z-index: 10;
  color: var(--colorFont);
  background-color: var(--colorBackground);

  //Gradient to hide the Inmed logo.
  //&:after {
  //	content: ' ';
  //	position: absolute;
  //	top: 5rem;
  //	left: 0;
  //	background: var(--navGradient);
  //	height: 5rem;
  //	width: 100%;
  //	z-index: 1;
  //}

  :first-child {
    margin-right: auto;
    padding: 0;
  }

  > * {
    padding: 0 1em;
    cursor: pointer;
  }
}

.activeLink {
  color: var(--colorCyanC);
}

#NavMobile {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  max-width: 35vw;
  min-width: 20rem;
  display: flex;
  font-size: 1.5rem;
  padding-top: 3em;
  padding-left: 3em;
  color: var(--colorFont);
  background-color: var(--colorBackground);
  border-left: var(--colorFont) solid 0.1rem;
  transition: opacity 0.3s;
  z-index: 10;

  .showingMenuItems {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    > * {
      margin: 1rem 0;
    }
  }
}

.button {
  all: unset;
  border: 0.25rem solid var(--colorCyanC);
  border-radius: 50%;
  background-color: var(--colorFont);
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
  transform: rotate(45deg);
  border: 0.25rem solid var(--colorFont);
  background-color: var(--colorCyanC);
  border-radius: 50% 0;
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

@media (min-width: 1001px) and (max-width: 1440px) {
  #NavDesktop {
    padding: 0.75rem 5vw;
  }
}

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
