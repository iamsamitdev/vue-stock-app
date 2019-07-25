<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">Stock Application</router-link>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/create" class="nav-link" active-class="active">Add Product</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/posts" class="nav-link" active-class="active">Product list</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
      <div class="container mt-4">
        <!-- <transition name="slide-up"> -->
          <router-view></router-view>
         <!-- </transition> -->
      </div>
  </div>

</template>

<script>
export default 
{ 
};
</script>

<style>
.slide-up-enter-active {
  transition: all 0.5s ease;
}
.slide-up-leave-active {
  transition: all 0.1 cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-up-enter,
.slide-fade-leave-to {
  transform: translateY(3vh);
  opacity: 0;
}
</style>
