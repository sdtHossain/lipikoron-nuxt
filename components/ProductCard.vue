<template>
  <div class="card border-0 shadow-sm">
    <img
      src="~/assets/img/thumbnail2.jpg"
      class="card-img-top cover-fit"
      height="165px"
      alt="Thumbnail"
    />
    <div class="card-body">
      <a
        href=""
        class="rounded-pill shadow-sm text-decoration-none bg-white text-secondary px-3 py-1 position-absolute post-card-cat"
        >{{ course?.category }}</a
      >
      <a
        href=""
        class="rounded-pill text-decoration-none border border-primary bg-white text-dark px-2 position-absolute post-card-views"
        ><i class="ri-eye-line me-1"></i>{{ course?.view_count }}</a
      >
      <router-link
        :to="`/course/${course?.id}`"
        class="text-decoration-none text-dark text-hover"
        ><h1 class="fs-6 fw-bold mt-2">
          {{ course?.title }}
        </h1></router-link
      >
      <p class="text-muted mb-1 fs-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sit? Eos,
        molestias numquam?...
      </p>
      <div class="d-flex justify-content-between">
        <a href="" class="text-decoration-none text-secondary"
          ><i class="ri-user-line me-1"></i>{{ course?.instructor.name }}</a
        >
        <a href="" class="text-decoration-none text-dark"
          ><i class="ri-thumb-up-line mx-1"></i>12</a
        >
        <a href="" class="text-decoration-none text-dark"
          ><i class="ri-chat-1-line mx-1"></i>23</a
        >
        <a href="" class="text-decoration-none text-dark"
          ><i class="ri-bookmark-line"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  course: {
    type: Object,
  },
});
</script>

<style scoped></style>
