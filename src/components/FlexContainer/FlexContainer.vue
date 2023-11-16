<style scoped>
@import './FlexContainer.scss';
</style>

<script lang="ts">
import { CSSProperties } from 'vue'
import { FlexDirection, JustifyContent, AlignItems } from '../../models/custom-types'

export default {
  name: 'FlexContainer',
  props: {
    flexDirection: {
      type: String as () => FlexDirection,
      default: 'row'
    },
    justifyContent: {
      type: String as () => JustifyContent,
      default: 'center'
    },
    alignItems: {
      type: String as () => AlignItems,
      default: 'center'
    }
  },
  computed: {
    containerStyle(): CSSProperties {
      return {
        display: 'flex',
        flexDirection: this.flexDirection,
        justifyContent: this.justifyContent,
        alignItems: this.alignItems
      }
    }
  }
}
</script>

<template>
  <div class="row" :style="containerStyle">
    <slot></slot>
  </div>
</template>
