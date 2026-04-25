<template>
  <div class="page-container">
    <Header class="header"></Header>
    <div class="page-1">
      <div class="page-1-left">
        <img :src="Moon" alt="" class="moon-img" :class="{ hide: isHidden }" />
        <div class="page-1-btn-left" :class="{ hide: isHidden }">
          <BlackButton @click="moonButtonClick">TO THE MOON →</BlackButton>
        </div>
      </div>
      <div class="page-1-center" :class="{ hide: isHidden }">Choose Your Destination</div>
      <div class="page-1-right">
        <img :src="Mars" alt="" class="mars-img" :class="{ hide: isHidden }" />
        <div class="page-1-btn-right" :class="{ hide: isHidden }">
          <BlackButton @click="marsButtonClick">TO THE MARS →</BlackButton>
        </div>
      </div>
      <div class="page-2">
        <img :src="bgc2" class="bgc-2" :class="{ active: showBackground, hide: hidebgc }" />
        <PixelTransition ref="pixelRef" :class="{ show: pixelShow }" />
        <img :src="rocket1" class="rocket-1" :class="{ active: launchRocket, fly: rocketFlyAway }" />
        <img :src="rocket2" class="rocket-2" :class="{ active: launchRocket, fly: rocketFlyAway }" />
        <div class="page-2-center" :class="{ active: showPage2Btn, hide: hideTitle2 }">Choose Your Rocket</div>
        <BlackButton class="page-2-btn-left" :class="{ active: showPage2Btn, hide: hideButton2 }"
          @click="Falcon10Click">Falcon 10 →
        </BlackButton>
        <BlackButton class="page-2-btn-right" :class="{ active: showPage2Btn, hide: hideButton2 }"
          @click="FalconHeavyClick">Falcon Heavy →</BlackButton>
      </div>
      <div class="page-3">
        <img :src="bgc3" class="bgc-3" :class="{ active: showBackground2, hide: hidePage3Center }" />
        <PixelTransition ref="pixelRef2" :class="{ show: pixelShow2 }" />
        <div class="page-3-center" :class="{ active: showPage3Center, hide: hidePage3Center }">Choose Launch Window
        </div>
        <div class="page-3-info" :class="{ active: showPage3Center, hide: hidePage3Center }">
          <div class="page-3-info-left">
            Immediate Departure
            <div class="page-3-info-sub">Next Launch, No Wait</div>
            <BlackButton class="page-3-btn" @click="ImmediateDepartureClick">SELECT →</BlackButton>
          </div>
          <div class="page-3-info-middle">
            Premium Scheduled
            <div class="page-3-info-sub">Custom Date, Private Voyage</div>
            <BlackButton class="page-3-btn" @click="PremiumScheduledClick">SELECT →</BlackButton>
          </div>
          <div class="page-3-info-right">
            Seasonal Cosmic Window
            <div class="page-3-info-sub">Perfect Route, Ultra-Smooth Flight</div>
            <BlackButton class="page-3-btn" @click="SeasonalCosmicWindowClick">SELECT →</BlackButton>
          </div>
        </div>
      </div>
      <div class="page-4">
        <img :src="bgc4" class="bgc-4" :class="{ active: showBackground4 }" />
        <BlackButton class="page-4-btn" :class="{ active: showPage4 }" @click="generateTicket">GENERATE TICKET →
        </BlackButton>
        <PixelTransition ref="pixelRef4" :class="{ show: pixelShow4 }" />
        <div class="page-4-center" :class="{ active: showPage4 }">Add-On Mission Services</div>
        <div class="page-4-info" :class="{ active: showPage4 }">
          <div class="page-4-info-left">
            Custom Spacesuit
            <div class="page-4-info-sub">Personalized Embroidered Suit</div>
            <Checkbox></Checkbox>
          </div>
          <div class="page-4-info-middle">
            Surface Excursion
            <div class="page-4-info-sub">Lunar & Martian Terrain Walk</div>
            <Checkbox></Checkbox>
          </div>
          <div class="page-4-info-right">
            Mission Souvenir Kit
            <div class="page-4-info-sub">Official Badges & Keepsakes</div>
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
import { useRouter } from 'vue-router'
import PixelTransition from '@/components/PixelTransition.vue';
import rocket1 from '@/assets/素材/hls_tanker.png';
import rocket2 from '@/assets/素材/170008x36ckYY4VneDTJqp.png';
import bgc4 from '@/assets/素材/HelmetShot_Desktop.jpg';
import Checkbox from '@/components/checkbox.vue';

const isHidden = ref(false);
const showBackground = ref(false);
const showBackground2 = ref(false);
const pixelShow = ref(false);
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

const router = useRouter()
const data = ref({
  destination: '',
  rocket: '',
  launchWindow: '',
})

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

const generateTicket = () => {
  router.push({
    name: data.value.destination === 'Moon' ? 'moonTicket' : 'marsTicket',
    query: {
      destination: data.value.destination,
      rocket: data.value.rocket,
      launchWindow: data.value.launchWindow
    }
  })
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

.page-container {
  width: 100%;
  height: 100%;
}

.page-1 {
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: relative;
  overflow: hidden;
}

.moon-img {
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

.moon-img.hide {
  transform: translate(-50%, -50%) translateX(-50vh);
  opacity: 0;
  visibility: hidden;
}

.mars-img {
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

.mars-img.hide {
  transform: translate(-50%, -50%) translateX(50vh);
  opacity: 0;
  visibility: hidden;
}

.page-1-btn-left,
.page-1-btn-right {
  position: absolute;
  top: 90%;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: all 1.5s;
  z-index: 3;
}

.page-1-btn-left {
  left: 20%;
}

.page-1-btn-right {
  left: 82%;
}

.page-1-btn-left.hide,
.page-1-btn-right.hide {
  opacity: 0;
  visibility: hidden;
}

.page-1-center {
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

.page-1-center.hide {
  opacity: 0;
  visibility: hidden;
}

.bgc-2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}

.bgc-2.active {
  z-index: 5;
  opacity: 1;
}

.bgc-2.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 3s;
}

.bgc-3 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}

.bgc-3.active {
  z-index: 7;
  opacity: 1;
}

.bgc-3.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 3s;
}

.rocket-1 {
  position: absolute;
  top: 150%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 70px;
  z-index: 6;
  opacity: 0;
  transition: all 1.7s cubic-bezier(0.25, 1, 0.5, 1);
}

.rocket-1.active {
  top: 50%;
  opacity: 1;
}

.rocket-2 {
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

.rocket-2.active {
  top: 50%;
  opacity: 1;
}

.rocket-1.fly,
.rocket-2.fly {
  top: -50% !important;
  transition: all 3s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

.page-2-btn-left,
.page-2-btn-right {
  position: absolute;
  bottom: 10%;
  z-index: 7;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease;
  pointer-events: none;
}

.page-2-btn-left {
  left: 22%;
}

.page-2-btn-right {
  right: 20.5%;
}

.page-2-btn-left.active,
.page-2-btn-right.active {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.page-2-btn-left.hide,
.page-2-btn-right.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.page-2-center {
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

.page-2-center.active {
  opacity: 1;
  pointer-events: auto;
}

.page-2-center.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.page-3 {
  width: 100%;
  height: 100vh;
  position: relative;
}

.page-3-center {
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

.page-3-center.active {
  opacity: 1;
  pointer-events: auto;
}

.page-3-center.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.page-3-info {
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

.page-3-info.active {
  opacity: 1;
  pointer-events: auto;
}

.page-3-info.hide {
  opacity: 0;
  pointer-events: none;
}

.page-3-info-left,
.page-3-info-middle,
.page-3-info-right {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-3-info-sub {
  font-size: 18px;
  opacity: 0.8;
  margin-top: 5%;
  margin-bottom: 9%;
}

.page-3-btn {
  font-size: 16px;
}

.bgc-4 {
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

.bgc-4.active {
  opacity: 1;
  pointer-events: auto;
  z-index: 7;
  transform: scale(1.1);
}

.page-4-center {
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

.page-4-center.active {
  opacity: 1;
  pointer-events: auto;
}

.page-4-info {
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

.page-4-info.active {
  opacity: 1;
  pointer-events: auto;
}

.page-4-info-left,
.page-4-info-middle,
.page-4-info-right {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-4-info-sub {
  font-size: 16px;
  opacity: 0.8;
  margin-top: 5%;
  margin-bottom: 9%;
}

.page-4-btn {
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

.page-4-btn.active {
  opacity: 1;
  pointer-events: auto;
}
</style>
