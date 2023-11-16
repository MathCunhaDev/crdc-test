<script setup lang="ts">
import FixedHeader from '@/components/FixedHeader/FixedHeader.vue'
import CompContainer from '@/components/CompContainer/CompContainer.vue'
import UploadFile from '@/components/UploadFile/UploadFile.vue'
import UploadButton from '@/components/UploadButton/UploadButton.vue'
import FlexContainer from '@/components/FlexContainer/FlexContainer.vue'
</script>

<template>
  <FixedHeader />
  <CompContainer>
    <FlexContainer :flexDirection="'column'" justifyContent="'center'" style="margin-top: 80px">
      <UploadFile />
      <UploadButton />
    </FlexContainer>
  </CompContainer>
</template>
