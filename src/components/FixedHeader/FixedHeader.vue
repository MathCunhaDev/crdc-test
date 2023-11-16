<style scoped>
@import './FixedHeader.scss';
</style>

<script setup lang="ts">
import CompContainer from '@/components/CompContainer/CompContainer.vue'
</script>

<template>
  <header class="header">
    <CompContainer>
      <nav class="nav">
        <q-btn label="Deslogar" icon="logout" color="accent"></q-btn>
      </nav>
    </CompContainer>
  </header>
</template>
