<template>
  <div>
    <p><strong>Greeting</strong>: Hello, {{ fullName }}!</p>
    <p><strong>Message</strong>: {{ message }}</p>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import User from '~/src/User';

  @Component//({ name: 'App' })
  export default class App extends Vue {
    @Prop({
      type: Object as () => User,
      required: true,
    })
    user!: User

    message: string = 'This is Class API...';

    get fullName(): String {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  }
</script>
