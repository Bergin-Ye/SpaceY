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
        <img :src="bgc2" class="bgc2" :class="{ active: showBackground, hide: hidebgc }" />
        <!-- 像素碎裂组件：默认藏底层 -->
        <PixelTransition ref="pixelRef" :class="{ show: pixelShow }" />
        <img :src="rocket1" class="rocket1" :class="{ active: launchRocket, fly: rocketFlyAway }" />
        <img :src="rocket2" class="rocket2" :class="{ active: launchRocket, fly: rocketFlyAway }" />
        <div class="PageTwoCenter" :class="{ active: showPage2Btn, hide: hideTitle2 }">Choose Your Rocket</div>
        <BlackButton class="PageTwoBlackButtonLeft" :class="{ active: showPage2Btn, hide: hideButton2 }"
          @click="Falcon10Click">Falcon 10 →
        </BlackButton>
        <BlackButton class="PageTwoBlackButtonRight" :class="{ active: showPage2Btn, hide: hideButton2 }"
          @click="FalconHeavyClick">Falcon
          Heavy →</BlackButton>
      </div>
      <div class="pageThree">
        <img :src="bgc3" class="bgc3" :class="{ active: showBackground2, hide: hidePage3Center }" />
        <PixelTransition ref="pixelRef2" :class="{ show: pixelShow2 }" />
        <div class="pageThreeCenter" :class="{ active: showPage3Center, hide: hidePage3Center }">Choose Launch Window
        </div>
        <div class="pageThreeinfo" :class="{ active: showPage3Center, hide: hidePage3Center }">
          <div class="pageThreeinfoL">Immediate Departure
            <div class="pageThreeinfoLSub">Next Launch, No Wait</div>
            <BlackButton class="pageThreeButton" @click="ImmediateDepartureClick">SELECT →</BlackButton>
          </div>
          <div class="pageThreeinfoM">Premium Scheduled
            <div class="pageThreeinfoMSub">Custom Date, Private Voyage</div>
            <BlackButton class="pageThreeButton" @click="PremiumScheduledClick">SELECT →</BlackButton>
          </div>
          <div class="pageThreeinfoR">Seasonal Cosmic Window
            <div class="pageThreeinfoRSub">Perfect Route, Ultra-Smooth Flight</div>
            <BlackButton class="pageThreeButton" @click="SeasonalCosmicWindowClick">SELECT →</BlackButton>
          </div>
        </div>
      </div>
      <div class="pageFour">
        <img :src="bgc4" class="bgc4" :class="{ active: showBackground4 }" />
        <BlackButton class="pageFourButton" :class="{ active: showPage4 }" @click="">GENERATE TICKET →</BlackButton>
        <PixelTransition ref="pixelRef4" :class="{ show: pixelShow4 }" />
        <div class="pageFourCenter" :class="{ active: showPage4 }">Add-On Mission Services</div>
        <div class="pageFourinfo" :class="{ active: showPage4 }">
          <div class="pageFourinfoL">Custom Spacesuit
            <div class="pageFourinfoLSub">Personalized Embroidered Suit</div>
            <Checkbox></Checkbox>
          </div>
          <div class="pageFourinfoM">Surface Excursion
            <div class="pageFourinfoMSub">Lunar & Martian Terrain Walk</div>
            <Checkbox></Checkbox>
          </div>
          <div class="pageFourinfoR">Mission Souvenir Kit
            <div class="pageFourinfoRSub">Official Badges & Keepsakes</div>
            <Checkbox></Checkbox>
          </div>
        </div>
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
import bgc3 from '@/assets/素材/FH_1.jpg';
import { ref } from 'vue';
import PixelTransition from '@/components/PixelTransition.vue';
import rocket1 from '@/assets/素材/hls_tanker.png';
import rocket2 from '@/assets/素材/170008x36ckYY4VneDTJqp.png';
import bgc4 from '@/assets/素材/HelmetShot_Desktop.jpg';
import Checkbox from '@/components/checkbox.vue';


const isHidden = ref(false);
const showBackground = ref(false); // 背景图层级
const showBackground2 = ref(false); // 背景图层级
const pixelShow = ref(false); // 像素组件层级
const pixelRef = ref(null);
const pixelRef2 = ref(null);
const pixelShow2 = ref(false);
const launchRocket = ref(false);
const showPage2Btn = ref(false);
const rocketFlyAway = ref(false);
const hideTitle2 = ref(false);
const hideButton2 = ref(false);
const hidebgc = ref(false);
const showPage3Center = ref(false);
const hidePage3Center = ref(false);
const showBackground4 = ref(false);
const pixelShow4 = ref(false);
const pixelRef4 = ref(null);
const showPage4 = ref(false);
const hidePage4 = ref(true);


const data = ref({
  destination: '',
  rocket: '',
  launchWindow: '',
})

// 1

const moonButtonClick = () => {
  data.value.destination = 'Moon';
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
  data.value.destination = 'Mars';
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

// 2

const Falcon10Click = () => {
  hidebgc.value = true;
  data.value.rocket = 'Falcon 10';
  rocketFlyAway.value = true;
  hideTitle2.value = true;
  hideButton2.value = true;
  setTimeout(() => {
    pixelShow2.value = true;
    showBackground2.value = true;
    setTimeout(() => {
      pixelRef2.value?.startAnimation();
    }, 100);
  }, 1500);
  setTimeout(() => {
    showPage3Center.value = true;
  }, 2500);
}
const FalconHeavyClick = () => {
  hidebgc.value = true;
  data.value.rocket = 'Falcon Heavy';
  rocketFlyAway.value = true;
  hideTitle2.value = true;
  hideButton2.value = true;
  setTimeout(() => {
    pixelShow2.value = true;
    showBackground2.value = true;
    setTimeout(() => {
      pixelRef2.value?.startAnimation();
    }, 100);
  }, 1500);
  setTimeout(() => {
    showPage3Center.value = true;
  }, 2500);
}

// 3
const ImmediateDepartureClick = () => {
  hidePage3Center.value = true;
  data.value.launchWindow = 'Immediate Departure';
  setTimeout(() => {
    pixelShow4.value = true;
    showBackground4.value = true;
    setTimeout(() => {
      pixelRef4.value?.startAnimation();
    }, 100);
  }, 1500);
  setTimeout(() => {
    showPage4.value = true;
  }, 2500);
}
const PremiumScheduledClick = () => {
  hidePage3Center.value = true;
  data.value.launchWindow = 'Premium Scheduled';
  setTimeout(() => {
    pixelShow4.value = true;
    showBackground4.value = true;
    setTimeout(() => {
      pixelRef4.value?.startAnimation();
    }, 100);
  }, 1500);
  setTimeout(() => {
    showPage4.value = true;
  }, 2500);
}
const SeasonalCosmicWindowClick = () => {
  hidePage3Center.value = true;
  data.value.launchWindow = 'Seasonal Cosmic Window';
  setTimeout(() => {
    pixelShow4.value = true;
    showBackground4.value = true;
    setTimeout(() => {
      pixelRef4.value?.startAnimation();
    }, 100);
  }, 1500);
  setTimeout(() => {
    showPage4.value = true;
  }, 2500);
}


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
  position: absolute;
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

.bgc2.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 3s;
}



.bgc3 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  /* 藏在黑色下面 */
  opacity: 0;
  transition: opacity 0.3s;
}

.bgc3.active {
  z-index: 5;
  opacity: 2;
  z-index: 7;
}

.bgc3.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 3s;
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

/* 火箭向上飞出屏幕 */
.rocket1.fly,
.rocket2.fly {
  top: -50% !important;
  transition: all 3s cubic-bezier(0.25, 1, 0.5, 1) !important;
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

.PageTwoBlackButtonLeft.hide,
.PageTwoBlackButtonRight.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
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

.PageTwoCenter.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.pageThree {
  width: 100%;
  height: 100vh;
  position: relative;
}


.pageThreeCenter {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: #fff;
  font-family: 'Inria Serif';
  transition: all 1.5s;
  z-index: 7;
  opacity: 0;
  pointer-events: none;

}

.pageThreeCenter.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pageThreeCenter.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.pageThreeinfo {
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  z-index: 7;
  font-size: 30px;
  color: #fff;
  opacity: 0;
  pointer-events: none;
  transition: all 1.5s;
}

.pageThreeinfo.active {
  opacity: 1;
  pointer-events: auto;
}

.pageThreeinfo.hide {
  opacity: 0;
  pointer-events: none;
}



.pageThreeinfoL,
.pageThreeinfoM,
.pageThreeinfoR {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pageThreeinfoLSub,
.pageThreeinfoMSub,
.pageThreeinfoRSub {
  font-size: 18px;
  opacity: 0.8;
  margin-top: 5%;
  margin-bottom: 9%;
}

.pageThreeButton {
  font-size: 16px;
}


.bgc4 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 1;
  transition: opacity 0.3s;
  pointer-events: none;
}

.bgc4.active {
  opacity: 1;
  pointer-events: auto;
  z-index: 7;
  transform: scale(1.1);
}

.pageFourCenter {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: #fff;
  font-family: 'Inria Serif';
  opacity: 0;
  pointer-events: none;
  z-index: 8;
}

.pageFourCenter.active {
  opacity: 1;
  pointer-events: auto;
}

.pageFourinfo {
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  z-index: 8;
  font-size: 30px;
  color: #fff;
  opacity: 0;
  pointer-events: none;
  transition: all 1.5s;
}

.pageFourinfo.active {
  opacity: 1;
  pointer-events: auto;
}


.pageFourinfoL,
.pageFourinfoM,
.pageFourinfoR {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pageFourinfoLSub,
.pageFourinfoMSub,
.pageFourinfoRSub {
  font-size: 16px;
  opacity: 0.8;
  margin-top: 5%;
  margin-bottom: 9%;
}

.pageFourButton {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  z-index: 8;
  opacity: 0;
  pointer-events: none;
  transition: all 1.5s;
}

.pageFourButton.active {
  opacity: 1;
  pointer-events: auto;
}
</style>
