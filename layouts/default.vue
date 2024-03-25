<template>
  <div>
    <AppHeader />

    <section class="container-fluid">
      <div class="row">
        <AppSidebar />
        <section class="bg-light body-area">
          <!-- Category Panel -->
          <AppCategory />

          <div class="content-area pe-lg-5 me-lg-5 mt-3">
            <slot />
          </div>
          <AppFooter />
        </section>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
