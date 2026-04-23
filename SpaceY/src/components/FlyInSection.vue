<template>
  <div class="fly-content">
    <div class="title">
      <div class="leftTitle">Fly in</div>
      <div class="rightTitle">LUXURY</div>
    </div>

    <div class="subTitle">
      <div class="leftSubTitle">
        Luxury<br>
        that moves<br>
        with you
      </div>
      <div class="rightSubTitle">
        <div class="divider-line"></div>
        Falcon 10
        <p>
          Falcon 10 is a reusable, two-stage rocket designed and manufactured <br>
          by SpaceY for the reliable and safe transport of people and<br>
          payloads into Earth orbit and beyond. Falcon 10 is the<br>
          world’s first orbital class reusable rocket.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: 'CrimsonText';
  src: url('@/assets/font/CrimsonText-Regular.ttf') format('truetype');
}

/* 容器：全屏定位 */
.fly-content {
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
  padding: 0 12%;
  font-family: 'CrimsonText';
  color: #E0E2E5;
  background-color: transparent;
}

/* 🔥 核心：让标题【绝对在屏幕正中间】 */
.title {
  position: absolute;
  top: 50%;
  left: 7%;
  right: 5%;
  transform: translateY(-50%);

  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.leftTitle {
  font-size: 128px;
  font-weight: normal;
  line-height: 1.1;
}

.rightTitle {
  font-size: 128px;
  font-weight: normal;
  letter-spacing: 3px;
  line-height: 1.1;
}

/* 下面的文字放在标题下方即可 */
.subTitle {
  position: absolute;
  top: calc(50% + 100px);
  left: 7%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.leftSubTitle {
  font-size: 36px;
  line-height: 1.4;
}

.rightSubTitle {
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  padding-left: 100px
}

.divider-line {
  width: 100%;
  height: 1px;
  background: #D9D9D9;
  opacity: 0.5;
}


.rightSubTitle p {
  margin: 0;
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.85;
  text-align: center;

}
</style>
