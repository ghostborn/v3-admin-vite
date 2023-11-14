<script setup lang="ts">
import {useUserStore} from "@/store/modules/user";
import Admin from "@/views/dashboard/components/Admin.vue";
import Editor from "@/views/dashboard/components/Editor.vue";

const userStore = useUserStore()
const isAdmin = userStore.roles.includes('admin')

</script>

<template>
  <component :is="isAdmin ? Admin : Editor"></component>
</template>


