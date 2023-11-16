<style scoped>
@import './UploadFile.scss';
</style>

<script lang="ts">
import { checkFileSizeAndType } from './UploadFile.ts'

export default {
  data() {
    return {}
  },
  methods: {
    checkFileSizeAndType,
  }
}
</script>

<template>
  <q-uploader
    style="max-width: 300px"
    label="Somente arquivos .txt"
    :filter="checkFileSizeAndType"
    max-files="1"
  ></q-uploader>
</template>