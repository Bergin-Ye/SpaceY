<template>
  <Header class="header" />
  <Galaxy :density="0.6" :glow-intensity="0.08" :saturation="0" :twinkle-intensity="0.1" :rotation-speed="0.1"
    :starSpeed="0.1" />

  <section class="hero">
    <!-- 标题 -->
    <div ref="heroTitle" class="hero-title" :class="{ 'hide': isHidden }">
      <div class="hero-title-main">Leave<br>The Cradle</div>
      <div class="hero-title-sub">From the Blue Planet to the Stars.</div>
      <div class="hero-title-desc">
        Experience the cosmos like never before. <br>
        This interactive project takes you from Earth's orbit to the surface of Mars <br>
        bridging the gap between reality and imagination.
      </div>
    </div>
    <!-- 地球图片 -->
    <img ref="earth" :src="Earth" alt="" class="earth" :class="{ 'hide': isHidden }" />
    <!-- 按钮 -->
    <LightButton ref="button" class="button" @click="hideHeroTitle" :class="{ 'hide': isHidden }" />
  </section>

  <!-- 滚动提示图标 -->
  <Scroll class="scroll" :class="{ active: isShowScroll }" />

  <!-- 舞台 存储所有动画元素 -->
  <div class="stage">
    <!-- 动态获取标题位移的Y -->
    <FlyInSection class="secondTitle" :style="{ transform: titleTranslateY }" />
    <div class="rocket" :class="{ launch: isLaunched }"
      :style="{ transform: `translate(-50%, -50%) ${rocketTranslateY}` }">
      <!-- 动态获取火箭位移的Y -->
      <img :src="Rocket" alt="" class="rocket-img">
    </div>
    <FlyInSection2 class="secondTitle2" :style="{ transform: secondTitle2TranslateY }"
      :class="{ 'hide': isLaunched }" />
    <LaunchButton class="LaunchButton" :class="{ 'active': isShowLaunchButton }" @click="launchRocket" />
  </div>
  <LongPage v-if="showLongPage" class="long-page-container" />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import Header from '@/components/header.vue'
import LightButton from '@/components/lightButton.vue'
import Earth from '@/assets/素材/earth.png'
import Galaxy from '@/components/Galaxy.vue'
import Scroll from '@/components/scroll.vue'
import FlyInSection from '@/components/FlyInSection.vue'
import Rocket from '@/assets/素材/hls_tanker.png'
import FlyInSection2 from '@/components/FlyInSection2.vue'
import BlackButton from '@/components/blackButton.vue'
import LongPage from '@/components/longPage.vue'
import LaunchButton from '@/components/lunchButton.vue'



const isHidden = ref(false)
const isShowScroll = ref(false)
const scrollUnlock = ref(false)
const isShowBlackButton = ref(false)
const isShowLaunchButton = ref(false)
const isLaunched = ref(false)
const hasLaunched = ref(false)
const showLongPage = ref(false)

// 总滚动进度
const scrollProgress = ref(0)
// 平滑滚动进度
const smoothProgress = ref(0)

//动画参数
const TRIGGER_ROCKET_AT = 58      // 标题到多少时，火箭开始动
const ROCKET_ANIM_LENGTH = 42     // 火箭自己的动画长度
const SMOOTH_SPEED = 0.06         // 平滑度

// 目标进度
const targetProgress = ref(0)

//标题 按钮 图片 隐藏动画 滚动解锁
const hideHeroTitle = () => {
  isHidden.value = true
  isShowScroll.value = true
  scrollUnlock.value = true
}

// 滚轮事件
const handleScroll = (e) => {
  //解锁判断
  if (!scrollUnlock.value) return
  //滚动值 增加减少
  targetProgress.value += e.deltaY > 0 ? 5 : -5
  //最大范围限制
  targetProgress.value = Math.max(0, Math.min(220, targetProgress.value))
}


// 平滑动画循环
let rafId
const smoothUpdate = () => {
  // 核心：线性插值平滑 让滚轮滚动平滑
  smoothProgress.value += (targetProgress.value - smoothProgress.value) * SMOOTH_SPEED
  scrollProgress.value = Math.max(0, Math.min(220, smoothProgress.value))
  rafId = requestAnimationFrame(smoothUpdate)
}

watch(scrollProgress, (val) => {
  //滚动10 scrolldown动画消失
  if (val >= 10) {
    isShowScroll.value = false
  }
  //滚动100 按钮出现
  if (val >= 100) {
    isShowBlackButton.value = true
  }
  isShowLaunchButton.value = !hasLaunched.value && val >= 200
})

//标题动画
const titleTranslateY = computed(() => {
  //标题1 滚动动画1
  //获取当前滚动进度 用一个p存储
  const p = scrollProgress.value
  if (p <= 100) {
    //动画第一段 根据滚动进度 计算向上位移
    return `translate(-50%, -50%) translateY(${100 - p}vh)`
  }
  if (p <= 115) {
    return `translate(-50%, -50%) translateY(0vh)` // 保持不动
  }
  //动画第二段 根据滚动进度 计算向下位移
  const down = p - 115
  return `translate(-50%, -50%) translateY(${down}vh)`
})

const secondTitle2TranslateY = computed(() => {
  const p = scrollProgress.value

  if (p <= 120) {
    return `translate(-50%, -50%) translateY(-120vh)`
  }
  const down = p - 120
  return `translate(-50%, -50%) translateY(${down}vh)`
})

//火箭动画
const rocketTranslateY = computed(() => {
  // 异步动画 触发点
  if (scrollProgress.value < TRIGGER_ROCKET_AT) {
    return `translateY(100vh)`
  }
  // 获取火箭滚动进度
  const rocketP = Math.min(100, ((scrollProgress.value - TRIGGER_ROCKET_AT) / ROCKET_ANIM_LENGTH) * 100)
  // 通过计算火箭位移的Y值 来返回位移样式给html里面的 响应式样式
  return `translateY(${100 - rocketP}vh)`
})

const launchRocket = () => {
  isLaunched.value = true
  hasLaunched.value = true
  isShowLaunchButton.value = false
  setTimeout(() => {
    showLongPage.value = true
  }, 1500)
}



//生命周期函数 挂载时添加滚轮事件监听
onMounted(() => {
  window.addEventListener('wheel', handleScroll)
  smoothUpdate() // 启动平滑循环
})

//生命周期函数 卸载时移除滚轮事件监听
onUnmounted(() => {
  window.removeEventListener('wheel', handleScroll)
  cancelAnimationFrame(rafId)
})
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'Inter';
  src: url('@/assets/font/Inter[opsz,wght].ttf') format('truetype');
}

@font-face {
  font-family: 'Alike';
  src: url('@/assets/font/Alike-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'CrimsonText';
  src: url('@/assets/font/CrimsonText-Regular.ttf') format('truetype');
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-title {
  display: flex;
  flex-direction: column;
  transition: all 1s ease;
}

.hero-title.hide {
  transform: translateY(10%);
  opacity: 0;
  visibility: hidden;
}

.hero-title-main {
  margin-top: 1.5%;
  font-size: 100px;
  color: #fff;
  font-family: 'Inter';
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
}

.hero-title-sub {
  margin-top: 1%;
  margin-bottom: 0.4%;
  font-size: 26px;
  color: #fff;
  font-family: 'Alike';
  text-align: center;
}

.hero-title-desc {
  font-size: 16px;
  color: #fff;
  font-family: 'Alike';
  text-align: center;
}

.earth {
  width: 80%;
  height: auto;
  position: absolute;
  left: 50%;
  top: 128%;
  transform: translate(-50%, -50%);
  transition: all 1.5s ease;
}

.earth.hide {
  transform: translate(-50%, -50%) translateY(50vh);
  opacity: 0;
  visibility: hidden;
}

:deep(.button) {
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
}

:deep(.button.hide) {
  opacity: 0;
  visibility: hidden;
}

.scroll {
  position: fixed;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  transition: all 1s ease 0.5s;
  z-index: 20;
}

.scroll.active {
  visibility: visible;
  opacity: 1;
}

.Blackbutton {
  position: absolute;
  left: 50%;
  top: 96%;
  transform: translate(-50%, -50%);
  transition: opacity 1s ease 0.5s, visibility 1s ease 0.5s;
  z-index: 20;
  visibility: hidden;
  opacity: 0;
}

.Blackbutton.active {
  visibility: visible;
  opacity: 1;
}



.secondTitle {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 15;
  transition: none;
  visibility: visible;
  opacity: 1;
}

.rocket {
  width: 6%;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  pointer-events: none;
  transition: none;
  visibility: visible;
  opacity: 1;
  transition: none;
}

.rocket.launch {
  animation: rocketLaunch 2s ease-in forwards;
  z-index: 2;
}

// 关键帧 初始位置
@keyframes rocketLaunch {
  0% {
    transform: translate(-50%, -50%) translateY(0);
    opacity: 1;
  }

  // 结束位置
  100% {
    transform: translate(-50%, -50%) translateY(-200vh) rotate(-3deg) scale(0.6);
    opacity: 0;
  }
}



.rocket-img {
  width: 100%;
  height: auto;
  display: block;
}

.secondTitle2 {
  position: fixed;
  left: 50%;
  top: -50%;
  z-index: 15;
  pointer-events: none;
  visibility: visible;
  opacity: 1;
}

.secondTitle2.hide {
  opacity: 0;
  visibility: hidden;
  transition: all 2s ease;
  transform: translateY(80px);
}

.LaunchButton {
  position: absolute;
  left: 70%;
  top: 70%;
  transform: translate(-50%, -50%);
  transition: all 1s ease;
  visibility: hidden;
  opacity: 0;
}

.LaunchButton.active {
  visibility: visible;
  opacity: 1;
}


.long-page-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  overflow-y: auto;
  animation: longPageFadeIn 1.2s ease-out forwards;
}

@keyframes longPageFadeIn {
  0% {
    opacity: 0;
    transform: translateY(80px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
