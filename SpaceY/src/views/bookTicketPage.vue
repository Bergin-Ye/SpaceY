<template>
  <div class="pageContainer">
    <Header class="header"></Header>
    <div class="pageOne">
      <div class="pageOneLeft">
        <img :src="Moon" alt="" class="Moon" :class="{ hide: isHidden }" />
        <div class="PageOnebuttonLeft" :class="{ hide: isHidden }">
          <BlackButton @click="moonButtonClick">TO THE MOON →</BlackButton>
        </div>
      </div>
      <div class="pageOneCenter" :class="{ hide: isHidden }">Choose Your Destination</div>
      <div class="pageOneRight">
        <img :src="Mars" alt="" class="Mars" :class="{ hide: isHidden }" />
        <div class="PageOnebuttonRight" :class="{ hide: isHidden }">
          <BlackButton @click="marsButtonClick">TO THE MARS →</BlackButton>
        </div>
      </div>
      <div class="pageTwo">
        <!-- 背景图：默认藏在最底层 -->
        <img :src="bgc2" class="bgc2" :class="{ active: showBackground }" />
        <!-- 像素碎裂组件：默认藏底层 -->
        <PixelTransition ref="pixelRef" :class="{ show: pixelShow }" />
        <img :src="rocket1" class="rocket1" :class="{ active: launchRocket }" />
        <img :src="rocket2" class="rocket2" :class="{ active: launchRocket }" />
        <div class="PageTwoCenter" :class="{ active: showPage2Btn }">Choose Your Rocket</div>
        <BlackButton class="PageTwoBlackButtonLeft" :class="{ active: showPage2Btn }">Falcon 10</BlackButton>
        <BlackButton class="PageTwoBlackButtonRight" :class="{ active: showPage2Btn }">Falcon Heavy</BlackButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/header.vue';
import BlackButton from '@/components/blackButton.vue';
import Moon from '@/assets/素材/art002e009627~large.jpg';
import Mars from '@/assets/素材/mars_whymars_d(1).jpg';
import bgc2 from '@/assets/素材/F9_1.jpg';
import { ref } from 'vue';
import PixelTransition from '@/components/PixelTransition.vue';
import rocket1 from '@/assets/素材/hls_tanker.png';
import rocket2 from '@/assets/素材/170008x36ckYY4VneDTJqp.png';

const isHidden = ref(false);
const showBackground = ref(false); // 背景图层级
const pixelShow = ref(false); // 像素组件层级
const pixelRef = ref(null);
const launchRocket = ref(false);
const showPage2Btn = ref(false);

const moonButtonClick = () => {
  isHidden.value = true;
  setTimeout(() => {
    pixelShow.value = true;
    showBackground.value = true;
    setTimeout(() => {
      pixelRef.value?.startAnimation();
    }, 100);

  }, 1500);
  setTimeout(() => {
    launchRocket.value = true;
    showPage2Btn.value = true;
  }, 2500);
};

const marsButtonClick = () => {
  isHidden.value = true;
  setTimeout(() => {
    pixelShow.value = true;
    showBackground.value = true;
    setTimeout(() => {
      pixelRef.value?.startAnimation();
    }, 100);

  }, 1500);
  setTimeout(() => {
    launchRocket.value = true;
    showPage2Btn.value = true;
  }, 2500);
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'Inria Serif';
  src: url('@/assets/font/InriaSerif-Regular.ttf') format('truetype');
}

.header {
  width: 100%;
  height: 10%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.pageOne {
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: relative;
  overflow: hidden;
}

.Moon {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: auto;
  opacity: 1;
  transition: all 2s;
  z-index: 2;
}

.Moon.hide {
  transform: translate(-50%, -50%) translateX(-50vh);
  opacity: 0;
  visibility: hidden;
}

.Mars {
  position: absolute;
  top: 50%;
  left: 82%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: auto;
  opacity: 1;
  transition: all 2s;
  z-index: 2;
}

.Mars.hide {
  transform: translate(-50%, -50%) translateX(50vh);
  opacity: 0;
  visibility: hidden;
}

.PageOnebuttonLeft,
.PageOnebuttonRight {
  position: absolute;
  top: 90%;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: all 1.5s;
  z-index: 3;
}

.PageOnebuttonLeft {
  left: 20%;
}

.PageOnebuttonRight {
  left: 82%;
}

.PageOnebuttonLeft.hide,
.PageOnebuttonRight.hide {
  opacity: 0;
  visibility: hidden;
}

.pageOneCenter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 38px;
  color: #fff;
  font-family: 'Inria Serif';
  opacity: 1;
  transition: all 1.5s;
  z-index: 2;
}

.pageOneCenter.hide {
  opacity: 0;
  visibility: hidden;
}

/* 背景图：默认藏在最底部 */
.bgc2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
  /* 藏在黑色下面 */
  opacity: 0;
  transition: opacity 0.3s;
}

.bgc2.active {
  z-index: 5;
  /* 提升层级 */
  opacity: 1;
}

.rocket1 {
  position: absolute;
  top: 150%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 70px;
  z-index: 6;
  opacity: 0;
  transition: all 1.7s cubic-bezier(0.25, 1, 0.5, 1);
}

.rocket1.active {
  top: 50%;
  opacity: 1;
}



.rocket2 {
  position: absolute;
  top: 150%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: auto;
  z-index: 6;
  opacity: 0;
  transition: all 1.7s cubic-bezier(0.25, 1, 0.5, 1);
}

.rocket2.active {
  top: 50%;
  opacity: 1;
}

.PageTwoBlackButtonLeft,
.PageTwoBlackButtonRight {
  position: absolute;
  bottom: 10%;
  z-index: 7;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease;
  pointer-events: none;
}

.PageTwoBlackButtonLeft {
  left: 22%;
}

.PageTwoBlackButtonRight {
  right: 20.5%;
}

.PageTwoBlackButtonLeft.active,
.PageTwoBlackButtonRight.active {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.PageTwoCenter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 38px;
  color: #fff;
  font-family: 'Inria Serif';
  opacity: 0;
  transition: all 1.5s;
  z-index: 7;
  pointer-events: none;
}

.PageTwoCenter.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
</style>
