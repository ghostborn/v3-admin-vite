<script setup lang="ts">
import { ref } from "vue"
import { Setting } from "@element-plus/icons-vue"

interface Props {
  buttonTop?: number
}

const props = withDefaults(defineProps<Props>(), {
  buttonTop: 350
})

const buttonTopCss = `${props.buttonTop}px`
const show = ref(false)
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
