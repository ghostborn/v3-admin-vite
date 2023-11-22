<script setup lang="ts">
import Footer from "./Footer/index.vue"
</script>

<template>
  <section class="app-main">
    <div class="app-scrollbar">
      <router-view v-slot="{Component, route}">
        <transition name="el-fade-in" mode="out-in">
          <component :is="Component" :key="route.path" class="app-container-grow"/>
        </transition>
      </router-view>
      <!-- 页脚 -->
      <Footer/>
    </div>
    <!-- 返回顶部 -->
    <el-backtop />
    <el-backtop target=".app-scrollbar" />
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.app-main {
  width: 100%;
  background-color: var(--v3-body-bg-color);
  display: flex;
}

.app-scrollbar {
  flex-grow: 1;
  overflow: auto;
  @extend %scrollbar;
  display: flex;
  flex-direction: column;
  .app-container-grow {
    flex-grow: 1;
  }
}
</style>
