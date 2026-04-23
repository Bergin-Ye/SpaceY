<template>
  <div class="testimonials-container">
    <!-- 左侧：独立图片堆叠区域（正方形） -->
    <div class="image-stack-wrapper">
      <div v-for="(item, index) in testimonials" :key="index" class="image-card" :class="getImageClass(index)"
        :style="getImageStyle(index)">
        <img :src="item.image" :alt="item.name" />
      </div>
    </div>

    <!-- 右侧：独立文字区域 -->
    <div class="text-content-container">
      <div v-for="(item, index) in testimonials" :key="index" class="text-card" :class="getTextClass(index)">
        <blockquote class="quote">"{{ item.quote }}"</blockquote>
        <div class="user-info">
          <div class="name">{{ item.name }}</div>
          <div class="designation">{{ item.designation }}</div>
        </div>
      </div>

      <!-- 固定独立按钮 永久不动 -->
      <div class="nav-buttons-bottom">
        <button class="nav-btn prev-btn" @click="handlePrev">
          <div class="left">←</div>

        </button>
        <button class="nav-btn next-btn" @click="handleNext">
          <div class="right">→</div>

        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import img1 from '@/assets/素材/art002e008487~large.jpg'
import img2 from '@/assets/素材/art002e008486~large.jpg'
import img3 from '@/assets/素材/art002e009007~large.jpg'

const testimonials = ref([
  {
    quote: "To look down at Earth from above, surrounded by silence and stars this isn’t just travel. It’s a perspective that changes everything. Smooth, serene, and flawlessly executed. An experience beyond words.",
    name: "Christina Koch",
    designation: "Mission Specialist",
    image: img1,
  },
  {
    quote: "To see Earth whole from deep space is to understand our place in the universe. On this journey to the Moon, we carry not just craft and purpose, but the boundless curiosity of humanity itself.",
    name: "Reid Wiseman",
    designation: "Commander",
    image: img2,
  },
  {
    quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Victor J. Glover",
    designation: "Pilot",
    image: img3,
  },
])

const currentIndex = ref(0)
let intervalId = null

const startAutoPlay = () => {
  if (intervalId) clearInterval(intervalId)
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  }, 8000)
}

const handleNext = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  startAutoPlay()
}

const handlePrev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
  startAutoPlay()
}

const getImageClass = (index) => {
  const len = testimonials.value.length
  const prev = (currentIndex.value - 1 + len) % len
  const next = (currentIndex.value + 1) % len
  if (index === currentIndex.value) return 'active'
  if (index === prev) return 'prev'
  if (index === next) return 'next'
  return 'hidden'
}

const getTextClass = (index) => {
  return index === currentIndex.value ? 'active' : 'hidden'
}

const getImageStyle = (index) => {
  const len = testimonials.value.length
  const prev = (currentIndex.value - 1 + len) % len
  const next = (currentIndex.value + 1) % len

  if (index === currentIndex.value) {
    return {
      transform: 'translateX(0) scale(1) rotate(0deg)',
      zIndex: 30,
      opacity: 1,
      filter: 'blur(0)',
    }
  }
  if (index === prev) {
    return {
      transform: 'translateX(-60px) scale(0.85) rotate(-4deg)',
      zIndex: 20,
      opacity: 0.7,
      filter: 'blur(1px)',
    }
  }
  if (index === next) {
    return {
      transform: 'translateX(60px) scale(0.85) rotate(4deg)',
      zIndex: 20,
      opacity: 0.7,
      filter: 'blur(1px)',
    }
  }
  return {
    transform: 'scale(0.7)',
    zIndex: 10,
    opacity: 0,
    pointerEvents: 'none',
  }
}

onMounted(() => startAutoPlay())
onUnmounted(() => clearInterval(intervalId))
</script>

<style scoped>
@font-face {
  font-family: 'DMSerifDisplay';
  src: url('@/assets/font/DMSerifDisplay-Regular.ttf') format('truetype');
}

/* 主容器 */
.testimonials-container {
  width: 100%;
  max-width: 1400px;
  min-height: 700px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding: 40px;
  background: #000;
  border-radius: 28px;
  overflow: hidden;
  perspective: 1500px;
}

/* ======================
   左侧：正方形图片堆叠
====================== */
.image-stack-wrapper {
  position: relative;
  width: 400px;
  height: 400px;
  flex-shrink: 0;
}

.image-card {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 35px 70px rgba(0, 0, 0, 0.7);
  border: 2px solid #ffffff;
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* ======================
   右侧：文字区域
====================== */
.text-content-container {
  width: 580px;
  position: relative;
  height: 450px;
  /* 固定高度 */
}

.text-card {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  filter: blur(10px);
  transform: translateY(40px) scale(0.9);
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  pointer-events: none;
}

.text-card.active {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0) scale(1);
  pointer-events: initial;
}

.quote {
  font-size: 1.5rem;
  line-height: 1.8;
  color: #f3f4f6;
  font-style: italic;
  margin-bottom: 40px;
}

.user-info {
  border-top: 1px solid #374151;
  padding-top: 24px;
  margin-bottom: 32px;
}

.name {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  font-family: 'DMSerifDisplay';
}

.designation {
  font-size: 1.5rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* ======================
   固定独立按钮
====================== */
.nav-buttons-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  /* 永久固定底部 */
  display: flex;
  gap: 20px;
}

.left,
.right {
  font-size: 24px;
}

.nav-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #1f2937;
  border: 1px solid #4b5563;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.nav-btn:hover {
  background: #374151;
  border-color: #fff;
  transform: scale(1.1);
}

/* ======================
   移动端适配
====================== */
@media (max-width: 1024px) {
  .testimonials-container {
    flex-direction: column;
    gap: 50px;
    padding: 60px 20px;
  }

  .image-stack-wrapper {
    width: 380px;
    height: 380px;
  }

  .text-content-container {
    width: 100%;
    height: 450px;
  }
}
</style>
