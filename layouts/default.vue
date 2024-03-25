<template>
  <div>
    <!-- Header -->
    <header
      class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm px-lg-3"
    >
      <div class="container-fluid">
        <button class="navbar-toggler border-0">
          <i class="ri-menu-2-line"></i>
        </button>
        <a class="navbar-brand mx-auto mx-md-0 py-0" href="index.html">
          <img
            src="~/assets/img/logo.png"
            alt="Lipikoron"
            width="155"
            height="40"
          />
        </a>
        <button
          class="navbar-toggler border-0"
          data-bs-toggle="modal"
          data-bs-target="#login"
        >
          <i class="ri-user-line"></i>
        </button>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>

        <div class="collapse navbar-collapse">
          <form class="ms-5 me-auto input-group" style="width: 32%">
            <input
              type="search"
              class="form-control border-2 border-primary ps-3"
              placeholder="সার্চ করুন যেকোনো কিছু..."
              style="
                border-top-left-radius: 25px;
                border-bottom-left-radius: 25px;
              "
            />
            <button
              class="btn btn-primary bg-primary border border-2 border-primary pe-3"
              type="submit"
              id="button-addon2"
              style="
                border-top-right-radius: 25px;
                border-bottom-right-radius: 25px;
              "
            >
              <i class="ri-search-2-line"></i>
            </button>
          </form>
          <button class="btn border-0 p-0 m-1">
            <i
              class="ri-sun-line rounded-circle p-2 fs-5 header-dropdown-btn"
            ></i>
          </button>
          <div class="dropdown">
            <button
              class="btn border-0 p-0 m-1"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="ri-shopping-bag-line rounded-circle p-2 fs-5 header-dropdown-btn"
              ></i>
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end shadow"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a href="" class="dropdown-item d-flex my-1 py-2 pe-5">
                  <div class="me-3">
                    <img
                      src="~/assets/img/T-shirt.jpg"
                      height="50px"
                      width="50px"
                      class="rounded cover-fit"
                    />
                  </div>
                  <div>
                    <b class="d-block">লিপিকরণ টি-শার্ট</b>
                    <span class="me-1">৳ 250</span
                    ><small class="fs-7 text-muted">(x4)</small>
                  </div>
                </a>
              </li>

              <li>
                <a href="" class="dropdown-item d-flex my-1 py-2 pe-5">
                  <div class="me-3">
                    <img
                      src="~/assets/img/cup.jpg"
                      height="50px"
                      width="50px"
                      class="rounded cover-fit"
                    />
                  </div>
                  <div>
                    <b class="d-block">লিপিকরণ কাপ</b>
                    <span class="me-1">৳ 250</span
                    ><small class="fs-7 text-muted">(x4)</small>
                  </div>
                </a>
              </li>

              <li>
                <a href="" class="dropdown-item d-flex my-1 py-2 pe-5">
                  <div class="me-3">
                    <img
                      src="~/assets/img/Hoodie.jpg"
                      height="50px"
                      width="50px"
                      class="rounded cover-fit"
                    />
                  </div>
                  <div>
                    <b class="d-block">লিপিকরণ হুডি</b>
                    <span class="me-1">৳ 250</span
                    ><small class="fs-7 text-muted">(x4)</small>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn border-0 p-0 m-1"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="ri-chat-1-line rounded-circle p-2 fs-5 header-dropdown-btn"
              ></i>
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end shadow"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a href="" class="dropdown-item d-flex my-1 py-2">
                  <div class="me-2">
                    <img
                      src="~/assets/img/Jose_Zuniga.jpg"
                      height="50px"
                      width="50px"
                      class="rounded-circle cover-fit"
                    />
                  </div>
                  <div>
                    <b class="d-block"
                      >জোসে জুনিগা<i
                        class="ri-signal-tower-line fw-normal text-primary ms-2"
                      ></i
                    ></b>
                    <span class="me-2">Hi!</span>•<small
                      class="fs-7 text-muted ms-2"
                      >১ মিনিট আগে</small
                    >
                  </div>
                </a>
              </li>

              <li>
                <a href="" class="dropdown-item d-flex my-1 py-2">
                  <div class="me-2">
                    <img
                      src="~/assets/img/Kendall_Morgan.jpeg"
                      height="50px"
                      width="50px"
                      class="rounded-circle cover-fit"
                    />
                  </div>
                  <div>
                    <b class="d-block"
                      >ক্যান্ডেল মরগ্যান<i
                        class="ri-signal-tower-line fw-normal text-primary ms-2"
                      ></i
                    ></b>
                    <span class="me-2">আপনার লিপিতে...</span>•<small
                      class="fs-7 text-muted ms-2"
                      >১ মিনিট আগে</small
                    >
                  </div>
                </a>
              </li>

              <li>
                <a href="" class="dropdown-item d-flex my-1 py-2">
                  <div class="me-2">
                    <img
                      src="~/assets/img/Rafeh_Qazi.jpg"
                      height="50px"
                      width="50px"
                      class="rounded-circle cover-fit"
                    />
                  </div>
                  <div>
                    <b class="d-block">রাফেহ কাজি</b>
                    <span class="me-2">Hello!</span>•<small
                      class="fs-7 text-muted ms-2"
                      >১ মিনিট আগে</small
                    >
                  </div>
                </a>
              </li>

              <li>
                <a href="" class="dropdown-item d-flex my-1 py-2">
                  <div class="me-2">
                    <img
                      src="~/assets/img/Riley_Griffin.jpg"
                      height="50px"
                      width="50px"
                      class="rounded-circle cover-fit"
                    />
                  </div>
                  <div>
                    <b class="d-block"
                      >রাইলি গ্রিফিন<i
                        class="ri-signal-tower-line fw-normal text-primary ms-2"
                      ></i
                    ></b>
                    <span class="me-2">আপনাকে মেসেজ পাছিয়ে...</span>•<small
                      class="fs-7 text-muted ms-2"
                      >১ মিনিট আগে</small
                    >
                  </div>
                </a>
              </li>

              <li>
                <a href="" class="dropdown-item d-flex my-1 py-2">
                  <div class="me-2">
                    <img
                      src="~/assets/img/Jose_Zuniga.jpg"
                      height="50px"
                      width="50px"
                      class="rounded-circle cover-fit"
                    />
                  </div>
                  <div>
                    <b class="d-block">রাফেহ কাজি</b>
                    <span class="me-2">কেমন আছেন?</span>•<small
                      class="fs-7 text-muted ms-2"
                      >১ মিনিট আগে</small
                    >
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn border-0 p-0 m-1"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="ri-notification-3-line rounded-circle p-2 fs-5 header-dropdown-btn"
              ></i>
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end shadow"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a href="" class="dropdown-item"
                  ><i class="ri-chat-1-line me-1"></i><b>সোহানুর রহমান</b>,
                  আপনার লিপিতে কমেন্ট করেছেন।<br /><small class="ps-3"
                    >১ মিনিট আগে</small
                  ></a
                >
              </li>
              <li>
                <a href="" class="dropdown-item"
                  ><i class="ri-thumb-up-line me-1"></i><b>সোহানুর রহমান</b>,
                  আপনার লিপিতে লাইক করেছেন।<br /><small class="ps-3"
                    >৩০ মিনিট আগে</small
                  ></a
                >
              </li>
              <li>
                <a href="" class="dropdown-item"
                  ><i class="ri-error-warning-line me-1"></i><b>দুঃখিত</b>,
                  আপনার লিপিটি অপসারণ করা হয়েছে।<br /><small class="ps-3"
                    >২ ঘন্টা আগে</small
                  ></a
                >
              </li>
              <li>
                <a href="" class="dropdown-item"
                  ><i class="ri-chat-1-line me-1"></i><b>আনিকা তাহাসীন</b>,
                  আপনার লিপিতে কমেন্ট করেছেন।<br /><small class="ps-3"
                    >৩ দিন আগে</small
                  ></a
                >
              </li>
              <li>
                <a href="" class="dropdown-item"
                  ><i class="ri-information-line me-1"></i><b>অভিনন্দন</b>,
                  আপনাকে লিপিকার করা হয়েছে।<br /><small class="ps-3"
                    >১ সপ্তাহ আগে</small
                  ></a
                >
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="~/assets/img/Jose_Zuniga.jpg"
                class="cover-fit rounded-circle p-1 border border-primary shadow-sm"
                height="42px"
                width="42px"
              />
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end shadow"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="ri-file-user-line me-1"></i>প্রোফাইল</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="ri-settings-line me-1"></i>সেটিংস</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="ri-user-2-line me-1"></i>সাইট অ্যাডমিন</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="ri-shut-down-line me-1"></i>সাইন অফ</a
                >
              </li>
            </ul>
          </div>
          <!-- <button class="btn btn-outline-primary rounded-pill px-3 mx-1" data-bs-toggle="modal" data-bs-target="#login"><i class="ri-login-box-line me-1"></i>লগ ইন</button>
          <button class="btn btn-primary rounded-pill px-3 mx-1" data-bs-toggle="modal" data-bs-target="#register"><i class="ri-user-add-line me-1"></i>সাইন আপ</button> -->
        </div>
      </div>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
