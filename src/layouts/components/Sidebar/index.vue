<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { storeToRefs } from "pinia"
import { useAppStore } from "@/store/modules/app"
import { usePermissionStore } from "@/store/modules/permission"
import { useSettingsStore } from "@/store/modules/setting"
import SidebarItem from "./SidebarItem.vue"
import Logo from "../Logo/index.vue"
import { getCssVariableValue } from "@/utils"
import { DeviceEnum } from "@/constants/app-key"

const v3SidebarMenuBgColor = getCssVariableValue("--v3-sidebar-menu-bg-color")
const v3SidebarMenuTextColor = getCssVariableValue("--v3-sidebar-menu-text-color")
const v3SidebarMenuActiveTextColor = getCssVariableValue("--v3-sidebar-menu-active-text-color")

const route = useRoute()
const appStore = useAppStore()
const permissionStore = usePermissionStore()
const settingsStore = useSettingsStore()

const { sidebar, device } = storeToRefs(appStore)
const { layoutMode, showLogo } = storeToRefs(settingsStore)

const activeMenu = computed(() => {
  const {
    meta: { activeMenu },
    path
  } = route
  return activeMenu ? activeMenu : path
})

const isCollapse = computed(() => !sidebar.value.opened)
const isLeft = computed(() => layoutMode.value === "left")
const isTop = computed(() => layoutMode.value === "top")
const isMobile = computed(() => device.value === DeviceEnum.Mobile)
const isLogo = computed(() => isLeft.value && showLogo)
const backgroundColor = computed(() => (isLeft.value ? v3SidebarMenuBgColor : undefined))
const textColor = computed(() => (isLeft.value ? v3SidebarMenuTextColor : undefined))
const activeTextColor = computed(() => (isLeft.value ? v3SidebarMenuActiveTextColor : undefined))
const sidebarMenuItemHeight = computed(() => {
  return layoutMode.value !== "top" ? "var(--v3-sidebar-menu-item-height)" : "var(--v3-navigationbar-height)"
})
const sidebarMenuHoverBgColor = computed(() => {
  return layoutMode.value !== "top" ? "var(--v3-sidebar-menu-hover-bg-color)" : "transparent"
})
const tipLineWidth = computed(() => {
  return layoutMode.value !== "top" ? "2px" : "0px"
})
// 当为顶部模式时隐藏垂直滚动条
const hiddenScrollbarVerticalBar = computed(() => {
  return layoutMode.value === "top" ? "none" : "block"
})
</script>

<template>
  <div :class="{ 'has-logo': isLogo }">
    <Logo v-if="isLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse && !isTop"
        :background-color="backgroundColor"
        :text-color="textColor"
        :active-text-color="activeTextColor"
        :unique-opened="true"
        :collapse-transition="false"
        :mode="isTop && !isMobile ? 'horizontal' : 'vertical'"
      >
        <SidebarItem
          v-for="route in permissionStore.routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
          :is-top="isTop"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
</style>
