<template>
  <main id="Contacts">
    <h1>{{ $t('Contacts.H1') }}</h1>
    <div id="Address">
      <p>You can reach me on social media:</p>
      <div class="sm-links">
        <a href="https://vk.com/ivanpavlovphoto"><img src="/images/icons/vk.svg" alt="vk icon"></a>
        <a href="https://www.facebook.com/profile.php?id=1835855816"><img src="/images/icons/facebook-circular-logo.svg" alt="facebook icon"></a>
        <a href="https://www.linkedin.com/in/ivanpavlovnik/"><img src="/images/icons/linkedin.svg" alt="linkedin icon"></a>
      </div>
    </div>

    <form v-if="!submitted" netlify name="contact" netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
      <label style="display: none">Don’t fill this out if you're human: <input name="bot-field" type="text"></label>
      <label for="Name">{{ $t('Contacts.Name') }}</label>
      <input id="Name" type="text" name="name" :placeholder="[[$t('Contacts.NameText')]]" maxlength="100" required>

      <label for="Email">Email</label>
      <input id="Email" type="email" name="email" :placeholder="[[$t('Contacts.EmailText')]]" maxlength="100" required>

      <label for="Telephone">{{ $t('Contacts.Phone') }}</label>
      <input id="Telephone" type="tel" name="telephone" placeholder="+** **** *******">

      <label for="Role">{{ $t('Contacts.Role') }}</label>
      <input id="Role" type="text" name="role" placeholder="HR / Manager / Developer" maxlength="100">

      <label for="Message">{{ $t('Contacts.Message') }}</label>
      <textarea id="Message" name="message" :placeholder="[[$t('Contacts.MessageText')]]" autocomplete="off" rows="4" cols="50" maxlength="1000" required />

      <div data-netlify-recaptcha="true" />

      <button class="button-contact" type="submit">
        Send the message
      </button>
    </form>
    <article v-if="submitted">
      <h2>You send the follow message:</h2>
      <h3>Name:</h3>
      <p>{{ userName }}</p>
      <h3>Email:</h3>
      <p>{{ userEmail }}</p>
      <h3 v-if="userTelephone">
        Phone:
      </h3>
      <p v-if="userTelephone">
        {{ userTelephone }}
      </p>
      <h3 v-if="userRole">
        Role:
      </h3>
      <p v-if="userRole">
        {{ userRole }}
      </p>
      <h3>Message:</h3>
      <p>{{ userMessage }}</p>
    </article>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Contacts extends Vue {
  submitted: boolean = false;

  userName: string | null = null
  userEmail: string | null = null
  userTelephone: string | null = null
  userRole: string | null = null
  userMessage: string | null = null

  data () {
    return {
      userName: '',
      userEmail: '',
      userTelephone: '',
      userRole: '',
      userMessage: ''
    }
  }

  createFormDataObj (data: any): any {
    const formData = new FormData()
    for (const key of Object.keys(data)) {
      formData.append(key, data[key])
    }
    return formData
  }

  handleSubmit () {
    const data = {
      'form-name': 'contact',
      name: this.userName,
      email: this.userEmail,
      telephone: this.userTelephone,
      role: this.userRole,
      message: this.userMessage
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(this.createFormDataObj(data)).toString()
    })
      .then(() => { this.submitted = true })
      .catch(error => alert(error))
  }

  head () {
    return {
      title: this.$t('Contacts.Title'),
      meta: [{ hid: 'description', name: 'description', content: this.$t('Contacts.Description') }]
    }
  }
}
</script>

<style lang="scss">
#Contacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  align-items: start;
  justify-items: center;
  justify-content: center;
  padding: 2em;
  margin: 0 auto;
  box-sizing: border-box;
  color: var(--colorFont);

  h3 {
    margin-top: 1rem;
  }

  input,
  textarea {
    all: unset;
    max-width: 100%;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 0.1rem solid var(--colorFont);
  }

  form {
    width: 35vw;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 1.5rem;
    font-weight: 500;

    span {
      color: var(--colorRed);
    }
  }

  button {
    width: 100%;
    height: 3rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
    border: 0.1rem solid var(--colorRed);
    color: var(--colorRed);
    background-color: var(--colorBackground);

    &[disabled] {
      color: grey;
      border-color: grey;
    }
  }

  h1 {
    align-self: flex-end;
    justify-self: center;
    grid-column: 1 / 3;
    margin: 3rem 0 2rem 0;
  }
}

#Address {
  display: flex;
  flex-direction: column;
}

.sm-links {
  display: flex;
  justify-content: space-evenly;
  margin-top: 3rem;

  img {
    width: 5rem;
    height: 5rem;
  }
}

.form-hidden {
  display: none !important;
}

@media (max-width: 900px) {
  #Contacts {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1.5rem;
    justify-items: stretch;

    h1 {
      grid-column: span 1;
    }

    form {
      width: 80vw;
    }

    button {
      height: 3rem;
    }
  }
  .sm-links {
    justify-content: space-between;
    margin-top: 1.5rem;

    img {
      width: 3rem;
      height: 3rem;
    }
  }
}

</style>
