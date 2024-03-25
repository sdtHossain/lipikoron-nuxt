<template>
  <div>
    <!-- Recent Items -->
    <h4 class="mt-3"><i class="ri-history-line me-1"></i>{{ categoryName }}</h4>
    <section class="grid template250">
      <ProductCard />

      <ProductCard />
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
  categoryName: {
    type: String,
    default: "Recent",
  },
});
</script>

<style scoped></style>
