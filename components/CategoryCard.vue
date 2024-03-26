<template>
  <div v-if="coursesByCategory.courses.length">
    <!-- Recent Items -->
    <h4 class="mt-3"><i class="ri-history-line me-1"></i>{{ categoryName }}</h4>
    <section class="grid template250">
      <ProductCard
        v-for="(course, index) in coursesByCategory.courses"
        :key="index"
        :course="course"
      />
    </section>

    <!-- see more -->
    <div class="text-center my-3">
      <button
        class="btn bg-white border-primary rounded-pill fs-7 px-3 btn-outline-primary-light"
      >
        See More <i class="ri-arrow-down-s-line"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  categoryID: {
    type: Number,
  },
  categoryName: {
    type: String,
    default: "Recent",
  },
});
const appConfig = useAppConfig();
const { data: coursesByCategory } = await $fetch(
  `${appConfig.theme.base_url}/course/list?category_id=${props.categoryID}`
);
console.log(coursesByCategory);
</script>

<style scoped></style>
