<script setup lang="ts">
import { computed, getCurrentInstance, onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue"
import { type RouteRecordName, type RouteRecordRaw } from "vue-router"

interface Props {
  modelValue: RouteRecordName | undefined
  list: RouteRecordRaw[]
  isPressUpOrDown: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  "update:modelValue": [RouteRecordName | undefined]
}>()

const instance = getCurrentInstance()
const scrollbarHeight = ref<number>(0)

/** 选中的菜单 */
const activeRouteName = computed({
  get() {
    return props.modelValue
  },
  set(value: RouteRecordName | undefined) {
    emit("update:modelValue", value)
  }
})

/** 菜单的样式 */
const itemStyle = (item: RouteRecordRaw) => {
  const flag = item.name === activeRouteName.value
  return {
    background: flag ? "var(--el-color-primary)" : "",
    color: flag ? "#fff" : ""
  }
}

/** 鼠标移入 */
const handleMouseenter = (item: RouteRecordRaw) => {
  // 如果上键或下键与 mouseenter 事件同时生效，则以上下键为准，不执行该函数的赋值逻辑
  if (props.isPressUpOrDown) return
  activeRouteName.value = item.name
}

/** 计算滚动可视区高度 */
const getScrollbarHeight = () => {
  // el-scrollbar max-height="40vh"
  scrollbarHeight.value = Number((window.innerHeight * 0.4).toFixed(1))
}



</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
