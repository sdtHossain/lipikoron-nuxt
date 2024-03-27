<template>
  <h4 class="mt-3"><i class="ri-vip-crown-line me-1"></i>Best Author</h4>
  <section class="grid template250">
    <AuthorCard
      v-for="(instructor, index) in instructorsReq.instructors"
      :key="index"
      :instructor="instructor"
    />
  </section>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

const { data: instructorsReq } = await $fetch(
  `${appConfig.theme.base_url}/instructor/list`
);
</script>

<style scoped></style>
