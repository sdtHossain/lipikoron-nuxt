<template>
  <CategoryCard
    v-for="(category, index) in categories.categories"
    :key="index"
    :categoryID="category.id"
    :category-name="category.title"
  />
  <SeriesItems />
  <BestAuthor />
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
console.log(appConfig.theme.base_url);

const { data: categories } = await $fetch(
  `${appConfig.theme.base_url}/categories?is_featured=true`
);
console.log(categories);
</script>

<style scoped></style>
