<template>
  <div class="container">
    <div class="left">
      <button>Reserve Trip
        <img :src="pix" alt="Reserve Trip" class="pix">
      </button>
    </div>

    <div class="right">
      <img :src="logo" class="logo" @click="handleClick">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

import logo from '@/assets/素材/test.png'

import pix from '@/assets/素材/pixel-art-32x32.svg'

const handleClick = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
//字体Risque引入
@font-face {
  font-family: 'Risque';
  src: url('@/assets/font/Risque-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Silkscreen';
  src: url('@/assets/font/Silkscreen-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}


.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0, 0, 0, 0);
  padding: 0 30px;
}

.left {
  display: flex;
  font-family: 'Silkscreen';

  button {
    padding-left: 18px;
    padding-right: 0;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    transition: all 0.3s ease;
    font-size: 16px;

    &:hover {
      background: rgba(255, 255, 255, 1);
      border-color: rgba(255, 255, 255, 0.6);
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4), 0 0 8px rgba(255, 255, 255, 0.15);
      color: #000;
    }
  }
}

.right {
  display: flex;
  gap: 16px;
  font-family: 'Risque';
}

.logo {
  width: 172px;
  height: auto;
  object-fit: contain;
  display: block;
  margin-bottom: 1px;
}

button {
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
  padding: 8px 12px;
  transition: all 0.3s ease;
  color: white;
}

button:hover {
  color: #b3b3b3;
}

.pix {
  color: #fff;
  width: 12px;
  height: auto;
  margin: 0;
  padding: 0;
}
</style>
