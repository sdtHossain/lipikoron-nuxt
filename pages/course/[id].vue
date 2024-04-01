<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <!-- breadcrumb -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>

          <!-- course intro -->
          <div class="course-intro">
            <h3>{{ courseResp.course.title }}</h3>
            <p class="my-3">
              {{ courseResp.description[0].heading }}
            </p>
            <div class="rating">
              <strong class="me-2">{{
                courseResp.course.average_rating
              }}</strong>
              <span>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-half-s-line"></i>
                <i class="ri-star-s-line"></i>
              </span>
              <router-link to="/"
                >({{ courseResp.course.review_count }})</router-link
              >
              <span class="ms-2"
                >{{ courseResp.course.student_count }} student(s)</span
              >
            </div>
            <p class="my-3">
              Created by
              <router-link to="/">{{
                courseResp.course.instructor.name
              }}</router-link>
            </p>
            <p>
              <span><i class="ri-star-s-fill"></i> Last updated 02/2023</span>
              <span class="ms-3"><i class="ri-star-s-fill"></i> English</span>
              <span
                ><i class="ri-star-s-fill"></i> English, Arabic [Auto],
                <a href="#">13 more</a></span
              >
            </p>
          </div>

          <!-- What you will learn -->

          <div class="border p-3 mb-4">
            <h3>What you'll learn</h3>

            <ul
              class="d-flex flex-wrap justify-content-between horizontal-list"
            >
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>

          <!-- course includes -->
          <div>
            <h3>This course includes:</h3>
            <ul
              class="d-flex flex-wrap justify-content-between horizontal-list"
            >
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>

          <!-- course content -->
          <div class="mt-5">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div
                v-for="(chapter, index) in courseResp.chapters"
                :key="index"
                class="accordion-item"
              >
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    {{ chapter.title }}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                >
                  <div class="accordion-body">
                    <ul>
                      <li
                        v-for="(content, index) in chapter.contents"
                        :key="index"
                      >
                        <a :href="content.media">
                          <span>{{ content.title }}</span>
                          <span>{{ content.duration }}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Requirments -->
          <div>
            <h3>Requirments</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>

          <!-- Description -->
          <div>
            <h3>Description</h3>
            <div v-for="(description, index) in courseResp.description">
              <strong>{{ description.heading }}</strong>
              <p v-html="description.body"></p>
            </div>
          </div>

          <!-- who this course is for -->
          <div>
            <h3>Who this course is for</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            </ul>
          </div>

          <!-- featured review -->
          <div class="border p-3">
            <h3>Featured Review</h3>
            <div class="d-flex">
              <img
                src="~/assets/img/jose_Zuniga.jpg"
                class="img-fluid img-thumbnail img-avatar rounded-circle"
                alt=""
              />
              <div>
                <h5>Anthony N.</h5>
                <p>22 courses</p>
                <p>2 reviews</p>
              </div>
            </div>

            <div>
              <span>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-half-s-line"></i>
                <i class="ri-star-s-line"></i>
              </span>
              <span class="ms-2">4 years ago</span>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              laborum dolores deleniti aliquam unde sed, ipsum expedita quos
              totam iste, non dolorum nisi adipisci aperiam!
            </p>
          </div>

          <!-- Students also bought -->
          <div class="mt-5">
            <h3>Students also bought</h3>
            <div class="d-flex justify-content-between w-100">
              <div class="d-flex">
                <img
                  src="~/assets/img/Python_Course.png"
                  class="img-fluid img-thumbnail img-avatar me-2"
                  alt=""
                />
                <div>
                  <h5>Course title</h5>
                  <p>
                    <span class="badge bg-info text-dark">Info</span>
                    <strong class="mx-2">58.8 hours.</strong>
                    <span>Updated 3/2024</span>
                  </p>
                </div>
              </div>
              <div class="reviews">
                <strong>4.8</strong>
                <i class="ri-star-s-fill"></i>
              </div>
              <div>
                <i class="ri-group-fill"></i>
                12778
              </div>
              <div>
                <span>$440</span>
              </div>
              <div>
                <router-link
                  to="/"
                  class="border rounded-circle text-decoration-none heart-shape-border d-flex justify-content-center align-items-center"
                >
                  <i class="ri-heart-line"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card course-right-content">
            <img
              :src="courseResp.course.thumbnail"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item w-50" role="presentation">
                  <button
                    class="nav-link active w-100"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Home
                  </button>
                </li>
                <li class="nav-item w-50" role="presentation">
                  <button
                    class="nav-link w-100"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Profile
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <h4>Subscribe to Udemy’s top courses</h4>
                  <p>
                    Get this course, plus 11,000+ of our top-rated courses, with
                    Personal Plan.
                    <router-link to="/">Learn more</router-link>
                  </p>
                  <button class="btn btn-primary w-100" type="button">
                    Try Personal Plan for Free
                  </button>
                  <small>Starting at $13.00 per month after trial</small>
                  <div class="plan-divider my-4">or</div>
                  <!-- paid plan -->
                  <h5>$74.99</h5>
                  <button class="btn btn-outline-primary w-100" type="button">
                    Add to Cart
                  </button>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <h3>flet-ms business</h3>
                  <div class="btn btn-primary w-100">Try FletMS Business</div>
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>
              </div>
            </div>
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

<style scoped>
ul.horizontal-list li {
  width: calc(50% - 16px);
}
.heart-shape-border {
  width: 30px;
  height: 30px;
}
</style>
