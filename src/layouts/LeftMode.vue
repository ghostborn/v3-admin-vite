<script setup lang="ts">
import { ref, reactive } from "vue"
import { AppMain, Sidebar } from "./components"
</script>

<template>
  <div class="app-wrapper">
    <!-- 左侧边栏 -->
    <Sidebar class="sidebar-container" />
    <!-- 页面主体内容 -->
    <AppMain class="app-main" />
  </div>
</template>

<style lang="scss" scoped>
.sidebar-container {
  background-color: var(--v3-sidebar-menu-bg-color);
  // transition: width $transition-time;
  width: var(--v3-sidebar-width) !important;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.app-main {
  min-height: calc(100vh - var(--v3-navigationbar-height));
  position: relative;
  overflow: hidden;
}
</style>
