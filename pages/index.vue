<template>
  <div>
    <App :user="user" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import App from '@/components/App.vue';
  import User from '~/src/User';

  @Component({
    components: {
      App,
    },
  })
  export default class Index extends Vue {
    user!: User;

    created() {
      this.user = {
        firstName: 'Maksimko',
        lastName: 'Passwordinko',
      };
    }
  }
</script>
