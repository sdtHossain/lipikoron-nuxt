<template>
  <div>
    <h1>{{ courseResp.course.title }}</h1>
    <div class="row">
      <div class="col">
        <div class="single-course-left-align-wrapper">
          <div class="meta-area">
            <a href="index.html">Home</a>
            <i class="fa-solid fa-chevron-right"></i>
            <a class="active" href="#">Course Details</a>
          </div>
          <h1 class="title">
            The Complete Web Developer in <br />
            2024: Zero to Mastery
          </h1>
          <div class="rating-area">
            <div class="stars-area">
              <span>4.5</span>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="students">
              <i class="fa-thin fa-users"></i>
              <span>3054 Students</span>
            </div>
            <div class="calender-area-stars">
              <i class="fa-light fa-calendar-lines-pen"></i>
              <span>Last updated 12/2024</span>
            </div>
          </div>
          <div class="author-area">
            <div class="author">
              <!-- <img src="assets/images/breadcrumb/01.png" alt="breadcrumb" /> -->
              <h6 class="name"><span>By</span> William U.</h6>
            </div>
            <p><span>Categories: </span> Web Developments</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const appConfig = useAppConfig();
const { data: courseResp } = await $fetch(
  `${appConfig.theme.base_url}/course/show/${id}`
);
</script>

<style scoped></style>
