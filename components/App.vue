<template>
  <div>
    <p><strong>Greeting</strong>: Hello, {{ fullName }}!</p>
    <p><strong>Message</strong>: {{ message }}</p>
  </div>
</template>

<script lang="ts"> // <--- THIS lang="ts" IS REALLY IMPORTANT!
import { computed, defineComponent, ref } from '@vue/composition-api';
import User from '~/src/User';

export default defineComponent({
  name: 'App',

  props: {
    user: {
      type: Object as () => User,
      required: true,
    }
  },

  setup({ user }) {
    console.log('user', user);
    const fullName = computed(() => `${user.firstName} ${user.lastName}`);
    const message = ref('ololo-trololo...');

    return {
      fullName,
      message,
    };
  },
});
</script>
