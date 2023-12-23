<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
const route = useRoute()
const router = useRouter()
router.replace({ path: "/" + route.params.path, query: route.query })
</script>

<template>
  <div />
</template>
