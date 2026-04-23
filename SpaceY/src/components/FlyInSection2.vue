<template>
  <!-- 干净容器：只负责显示内容，不自带任何定位！ -->
  <div class="fly-in-section-2">
    <!-- 你原来的内容直接放这里 ↓↓↓ -->
    <div class="box">
      <div class="left">
        <div class="left-title">
          <div class="title-top">Falcon 10</div>
          <div class="title-bottom">OVERVIEW</div>
        </div>

        <div class="left-list">
          <div class="list-item">
            <span class="label">HEIGHT</span>
            <span class="value">70m/229.6ft</span>
          </div>
          <div class="list-item">
            <span class="label">DIAMETER</span>
            <span class="value">3.7m/12 ft</span>
          </div>
          <div class="list-item">
            <span class="label">MASS</span>
            <span class="value">549,054 kg / 1,207,920 lbs</span>
          </div>
          <div class="list-item">
            <span class="label">PAYLOAD TO LEO</span>
            <span class="value">22,800 kg / 50,265 lbs</span>
          </div>
          <div class="list-item">
            <span class="label">PAYLOAD TO GTO</span>
            <span class="value">8,300 kg / 18,300 lbs</span>
          </div>
          <div class="list-item no-border">
            <span class="label">PAYLOAD TO MARS</span>
            <span class="value">4,020 kg / 8,860 lbs</span>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="right-title">
          <div class="title-top">Lunar Express</div>
          <div class="title-bottom">Rocket</div>
        </div>

        <div class="right-list">
          <div class="line"></div>
          <div class="sub-title">
            Direct Access to<br />
            Celestial Travel
          </div>
          <div class="des-title">
            A true cosmic time-saving machine. It brings Earth
            and the Moon days closer, and at over 25,000 mph of
            escape velocity, it can deliver payloads to lunar orbit
            with pinpoint precision.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LaunchButton from '@/components/lunchButton.vue'
export default {
  name: 'FlyInSection2'
}
</script>

<style scoped>
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

/* ------------ 【关键修复】最外层干净容器，无任何定位！------------ */
.fly-in-section-2 {
  width: 100%;
  height: auto;
  /* 完全不写：position / left / top / transform */
  /* 完全交给父页面控制！ */
}

/* ------------ 以下是你原本的样式，完全保留 ------------ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.box {
  background-color: transparent;
  color: #fff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 0 50px;
  gap: 500px;
}

.left {
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: flex-start;
}

.left-title {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title-top {
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 5px;
  font-family: 'CrimsonText';
  font-weight: bold;
}

.title-bottom {
  font-size: 48px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Inter';
}

.left-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Inter';
}

.list-item {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #333;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.list-item .label {
  font-weight: 300;
  color: #ffffff;
  min-width: 140px;
}

.list-item .value {
  font-weight: 500;
  color: #fff;
  text-align: right;
  flex-grow: 1;
}

.list-item.no-border {
  border-bottom: none;
}

.right {
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: flex-start;
  margin-bottom: 100px;
}

.right-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;
}

.right .title-top {
  font-size: 24px;
}

.right .title-bottom {
  font-size: 48px;
  font-weight: 700;
}

.right-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.line {
  width: 100%;
  height: 1px;
  background-color: #444;
  margin-bottom: 20px;
}

.sub-title {
  font-size: 16px;
  letter-spacing: 2px;
  margin-bottom: 25px;
  font-family: 'CrimsonText';
  font-weight: bold;

}

.des-title {
  font-size: 14px;
  line-height: 1.8;
  color: #E0E2E5;
  max-width: 400px;
  font-family: 'CrimsonText';
}
</style>
