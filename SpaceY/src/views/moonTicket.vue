<template>
  <Header class="HEADER" />
  <Galaxy :density="0.6" :glow-intensity="0.08" :saturation="0" :twinkle-intensity="0.1" :rotation-speed="0.1"
    :starSpeed="0.1" />
  <div class="ticketPage">
    <div class="title">Ticket Generated Successfully !</div>
    <div class="ticket">
      <div class="Barcode">SPY-2026-000</div>
      <img :src="spaceY" alt="" class="LOGO">
      <img :src="Moon" alt="" class="Moon">
      <div class="subTitle">INTERPLANETARY VOYAGE PASS</div>
      <div class="destination">DESTINATION
        <div class="destinationName">{{ ticketData.destination }}</div>
      </div>
      <div class="vehicle">LAUNCH VEHICLE
        <div class="vehicleName">{{ ticketData.vehicle }}</div>
      </div>
      <div class="window">Choose Launch Window
        <div class="windowName">{{ ticketData.launchWindow }}</div>
      </div>
    </div>
    <ShareButton class="shareButton" />
    <BlackButton class="blackButton" @click="toHomePage">Home Page →</BlackButton>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import Header from '@/components/header.vue';
import Galaxy from '@/components/Galaxy.vue'
import spaceY from '@/assets/素材/test.png'
import Moon from '@/assets/素材/3gnvh0r68nrga0cxm33bxyq29w-removed-bg.png'
import ShareButton from '@/components/shareButton.vue'
import BlackButton from '@/components/blackButton.vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const ticketData = computed(() => ({
  destination: route.query.destination || 'Moon',
  vehicle: route.query.rocket || 'Sparrow Heavy',
  launchWindow: route.query.launchWindow || 'Seasonal Cosmic Window'
}))

const toHomePage = () => {
  router.push('/')
}

</script>

<style scoped lang="scss">
@font-face {
  font-family: 'LibreBarcode128Text-Regular';
  src: url('@/assets/font/LibreBarcode128Text-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'HammersmithOne-Regular';
  src: url('@/assets/font/HammersmithOne-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'HeptaSlab-VariableFont_wght-Regular';
  src: url('@/assets/font/HeptaSlab-VariableFont_wght.ttf') format('truetype');
}

.HEADER {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.ticketPage {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.title {
  font-size: 48px;
  color: #fff;
  margin-bottom: 2%;
}

.ticket {
  width: 55%;
  height: 40%;
  border-radius: 20px;
  border: 1px solid #E0E2E5;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: relative;
}

.Barcode {
  font-family: 'LibreBarcode128Text-Regular';
  font-size: 78px;
  color: #FFFFFF;
  white-space: nowrap;
  position: absolute;
  left: 20px;
  transform-origin: center left;
  transform: rotate(-90deg) translateX(-50%);
}

.LOGO {
  width: 30%;
  height: auto;
  margin-left: 20px;
  align-self: flex-start;
  margin-top: 0;
}

.subTitle {
  width: 100%;
  height: auto;
  margin-left: 20px;
  align-self: flex-start;
  margin-top: 15px;
  color: #fff;
  font-size: 28px;
  font-family: 'HammersmithOne-Regular';
  font-weight: regular;
}

.Moon {
  position: absolute;
  top: 95%;
  left: 90%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: auto;
}

.destination {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 25%;
  left: 10%;
  font-family: 'HeptaSlab-VariableFont_wght-Regular';
  color: #E0E2E5;
  font-size: 24px;
}

.destinationName {
  font-size: 20px;
  color: #fff;
}

.vehicle {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 25%;
  left: 40%;
  font-family: 'HeptaSlab-VariableFont_wght-Regular';
  color: #E0E2E5;
  font-size: 24px;
}

.vehicleName {
  font-size: 20px;
  color: #fff;
}

.window {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 65%;
  left: 10%;
  font-family: 'HeptaSlab-VariableFont_wght-Regular';
  color: #E0E2E5;
  font-size: 24px;
}

.windowName {
  font-size: 20px;
  color: #fff;
}

.shareButton {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.blackButton {
  position: absolute;
  top: 90%;
  left: 80%;
  transform: translate(-50%, -50%);
}
</style>
