<style scoped>
.mouse-btn {
  margin: 15px auto;
  width: 35px;
  height: 80px;
  border: 3px solid rgba(255, 255, 255, 0.918);
  border-radius: 20px;
  display: flex;
}

.mouse-scroll {
  display: block;
  width: 20px;
  height: 20px;
  background: linear-gradient(170deg, rgba(172, 178, 193, 0.918), rgb(37, 4, 107));
  border-radius: 50%;
  margin: auto;
  animation: scrolling13 1.5s linear infinite;
}

@keyframes scrolling13 {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(20px);
  }
}

.text {
  color: white;
  font-size: 22px;
}
</style>

<template>
  <div class="container_mouse">
    <span class="mouse-btn">
      <span class="mouse-scroll"></span>
    </span>
    <span class="text"> Scroll Down</span>
  </div>
</template>
