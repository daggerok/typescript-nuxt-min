<template>
  <div>
    <App :user="user"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from '@vue/composition-api';
  import App from '@/components/App.vue';
  import User from '~/src/User';

  export default defineComponent({
    components: {
      App,
    },
    setup() {
      const user = reactive<User>({
        firstName: 'Maksimko',
        lastName: 'Passwordinko',
      });
      return {
        user,
      };
    }
  });
</script>
