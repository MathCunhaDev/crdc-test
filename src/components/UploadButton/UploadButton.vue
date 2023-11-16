<style scoped>
@import './UploadButton.scss';
</style>

<script lang="ts">
export default {
  data() {
    return {}
  },
  computed: {
    isLoading(): any {
      return this.$store.state.isLoading
    }
  },
  methods: {}
}
</script>

<template>
  <q-btn label="Enviar arquivo" v-bind:disable="isLoading" v-on:click="() => {}" />
</template>
