<template>
  <div class="app">
    <h1>Hello, {{ id }} and option API!</h1>
  </div>
</template>

<script lang="ts"> // <--- THIS lang="ts" IS REALLY IMPORTANT!
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      const id: string = 'TypeScript';

      return {
        id,
      };
    }
  });
</script>
