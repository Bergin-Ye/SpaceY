<template>
  <div class="longPage">
    <div class="pageOne">
      <div class="pageOneTitle">DESTINATIONS</div>
      <div class="pic">
        <img :src="earth" alt="" class="earth">
        <img :src="Satellite" alt="" class="satellite">
        <img :src="rocket" alt="" class="rocket">
        <img :src="moon" alt="" class="moon">
        <img :src="mars" alt="" class="mars">
        <div class="half-circle1"></div>
        <div class="half-circle2"></div>
        <div class="half-circle3"></div>
      </div>
    </div>
    <div class="pageTwo">
      <div class="conut">
        <div class="counup1">
          <CountUp :to=626 class="count1" :duration="2.5" :startWhen="true" />
          <span>COMPLETED MISSIONS</span>
        </div>

        <div class="counup2">
          <CountUp :to=580 class="count2" :duration="3" :startWhen="true" />
          <span>TOTAL LANDINGS</span>
        </div>
        <div class="counup3">
          <CountUp :to=545 class="count3" :duration="2.6" :startWhen="true" />
          <span>TOTAL REFLIGHTS</span>
        </div>
      </div>
      <div class="title">Your Journey <br>to the <br>Stars</div>
      <img :src="stars" alt="" class="stars">
    </div>
    <div class="pageThree">
      <div class="pageThreeLeft">
        <div class="leftBox1">
          <div class="divider1"></div>
          <div class="leftTitle1">1. Unrivaled Cosmic Views</div>
          <div class="leftSubTitle1">Every window frames a scene no screen can replicate.
            <br>The curve of Earth, the endless black of space
            <br>the glow of distant stars.
            <br>This isn’t just travel. It’s a front-row seat to the universe.
          </div>
          <div class="leftimg1">
            <img :src="img1" alt="">
          </div>
        </div>
        <div class="leftBox2">
          <div class="divider2"></div>
          <div class="leftTitle2">3. A Crew That Anticipates Every Need</div>
          <div class="leftSubTitle2">Highly trained, experienced, and dedicated to your journey.
            <br>We handle the mission so you can focus on the experience.
            <br>We don’t just respond—we prepare.
            <br>We are your crew among the cosmos.
          </div>
          <div class="leftimg2">
            <img :src="img2" alt="">
          </div>
        </div>
      </div>
      <div class="pageThreeRight">
        <div class="rightBox1">
          <div class="divider3"></div>
          <div class="rightTitle1">2. Crafted for Luxury & Comfort</div>
          <div class="rightSubTitle1">
            Spacious interiors, refined design <br>
            and thoughtful amenities built for orbit.<br>
            Smooth acceleration, quiet stability<br>
            and an environment made to feel like home.<br>
            No rough rides. No compromises<br>
            Just premium comfort among the stars.
          </div>
          <div class="rightimg1">
            <img :src="img3" alt="">
          </div>
        </div>

        <div class="rightBox2">
          <div class="divider4"></div>
          <div class="rightTitle2"> 4. Speed That Defines the Journey</div>
          <div class="rightSubTitle2">
            Powerful, precise, and purpose-built for efficiency. <br>
            We cut travel time without cutting safety or comfort. <br>
            Quick, smooth, and controlled—arrive not just fast, but flawlessly.
          </div>
          <div class="rightimg2">
            <img :src="img4" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="switchCard">
      <span>Customer Reviews</span>
      <AnimatedTestimonialsDemo />
    </div>
    <div class="footer">
      <div class="footerLeft">
        <div class="footerLeftTop">Non-Commercial Personal Project</div>
        <div class="footerLeftBottom">For Frontend Study & Practice Only</div>
      </div>
      <div class="footerCenter">
        <roundLogo text="Non-commercial * SpaceY * " on-hover="Pause" />
        <img :src="logo" alt="" class="logo">
      </div>
      <div class="footerRight">
        <div class="footerRightTop">All Copyrights Belong To Original Owners</div>
        <div class="footerRightBottom">No Commercial Use At All</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import header from '@/components/header.vue'
import earth from '@/assets/素材/Earth.svg'
import Satellite from '@/assets/素材/destination-iss-hover.svg'
import rocket from '@/assets/素材/destination-dragon-hover.svg'
import moon from '@/assets/素材/destination-moon-hover.svg'
import mars from '@/assets/素材/destination-mars-hover.svg'
import stars from '@/assets/素材/art002e009301~large.jpg'
import CountUp from '@/components/countUp.vue'
import img1 from '@/assets/素材/art002e012588~large.jpg'
import img2 from '@/assets/素材/jsc2025e057254~large.jpg'
import img3 from '@/assets/素材/dragon_video.jpg'
import img4 from '@/assets/素材/55182696113-0c4398702d-o-2.jpg'
import AnimatedTestimonialsDemo from '@/components/AnimatedTestimonialsDemo.vue'
import roundLogo from '@/components/roundLogo.vue'
import logo from '@/assets/素材/test.png'
import blackButton from '@/components/blackButton.vue'


</script>

<style scoped lang="scss">
.longPage {
  overflow-y: auto;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE */
}

/* Chrome / Safari / Edge */
.longPage::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

@font-face {
  font-family: 'Alike';
  src: url('@/assets/font/Alike-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'DMSerifDisplay';
  src: url('@/assets/font/DMSerifDisplay-Regular.ttf') format('truetype');
}



.pageOne {
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: relative;
  overflow: hidden;
}


.pageOneTitle {
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(32px, 5vw, 72px);
  /* 自适应字号 */
  font-family: 'Alike';
  color: #fff;
  white-space: nowrap;
}

/* 固定中心区域，让所有元素相对这里定位 */
.pic {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
}

.earth {
  position: absolute;
  width: 28%;
  max-width: 500px;
  left: 50%;
  bottom: 8%;
  transform: translate(-50%, 30%);
  z-index: 3;
}

.satellite {
  position: absolute;
  width: 12%;
  max-width: 180px;
  left: 45.5%;
  bottom: 14%;
  transform: translate(-170%, -50%);
  z-index: 2;
}

.rocket {
  position: absolute;
  width: 12%;
  max-width: 180px;
  left: 47%;
  bottom: 31%;
  transform: translate(-170%, -50%);
  z-index: 2;
}

.moon {
  position: absolute;
  width: 15%;
  max-width: 1000px;
  left: 74%;
  bottom: 35%;
  transform: translate(-170%, -50%);
  z-index: 2;
}

.mars {
  position: absolute;
  width: 25%;
  max-width: 400px;
  left: 108%;
  bottom: 25%;
  transform: translate(-170%, -50%);
  z-index: 2;
}


.half-circle1,
.half-circle2,
.half-circle3 {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  border-radius: 50%;
  background: transparent;
  border: 2px dashed #ffffff;
  clip-path: inset(0 0 50% 0);
  z-index: 1;
}

.half-circle1 {
  width: clamp(400px, 36vw, 700px);
  height: clamp(400px, 36vw, 700px);
}

.half-circle2 {
  width: clamp(550px, 46vw, 900px);
  height: clamp(550px, 46vw, 900px);
}

.half-circle3 {
  width: clamp(700px, 56vw, 1100px);
  height: clamp(700px, 56vw, 1100px);
}

.pageTwo {
  width: 100%;
  background-color: #000;
  position: relative;
}

.conut {
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  gap: 12%;
  align-items: center;
}

.counup1 {
  display: flex;
  flex-direction: column;
  align-items: center;

  .count1 {
    font-size: 120px;
    font-family: 'Alike';
    color: #fff;
  }

  span {
    font-size: 20px;
    font-family: 'Alike';
    color: #fff;
  }
}

.counup2 {
  display: flex;
  flex-direction: column;
  align-items: center;

  .count2 {
    font-size: 120px;
    font-family: 'Alike';
    color: #fff;
  }

  span {
    font-size: 20px;
    font-family: 'Alike';
    color: #fff;
  }
}

.counup3 {
  display: flex;
  flex-direction: column;
  align-items: center;

  .count3 {
    font-size: 120px;
    font-family: 'Alike';
    color: #fff;
  }

  span {
    font-size: 20px;
    font-family: 'Alike';
    color: #fff;
  }
}

.title {
  font-size: 160px;
  font-family: 'DMSerifDisplay';
  color: #fff;
  text-align: left;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0 14%;
  box-sizing: border-box;
  line-height: 1.5;
}

.stars {
  position: absolute;
  left: 50%;
  bottom: 1%;
  width: clamp(50px, 48%, 1000px);
  height: auto;
  z-index: 1;
  mask-image: radial-gradient(circle, #fff 70%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle, #fff 70%, transparent 100%);
  opacity: 0.8;
}


.pageThree {
  width: 100%;
  background-color: #000;
  display: flex;
  padding: 60px 5%;
  box-sizing: border-box;
}


.pageThreeLeft,
.pageThreeRight {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 100px;
}


.pageThreeRight {
  align-items: flex-end;
  margin-top: 300px;
}


.leftBox1,
.leftBox2,
.rightBox1,
.rightBox2 {
  width: 100%;
  font-size: 40px;
  font-family: 'DMSerifDisplay';
  color: white;
  padding: 0;
  box-sizing: border-box;
}

.leftBox1,
.leftBox2 {
  text-align: left;
}


.rightBox1,
.rightBox2 {
  text-align: right;
}


.divider1,
.divider2,
.divider3,
.divider4 {
  width: 80%;
  height: 1px;
  margin: 40px 0;
  background: linear-gradient(to right, transparent, #ffffff 50%, transparent);
  opacity: 0.6;
}


.pageThreeRight .divider3,
.pageThreeRight .divider4 {
  margin-left: auto;
}


.leftSubTitle1,
.leftSubTitle2 {
  font-size: 22px;
  text-align: left;
  line-height: 1.6;
  font-family: 'Alike';
}

.rightSubTitle1,
.rightSubTitle2 {
  font-size: 22px;
  text-align: right;
  line-height: 1.6;
  font-family: 'Alike';
}


.leftimg1,
.leftimg2,
.rightimg1,
.rightimg2 {
  width: 80%;
  margin-top: 30px;
}

.rightimg1,
.rightimg2 {
  margin-left: auto;
}


.leftimg1 img,
.leftimg2 img {
  width: 500px;
  height: 300px;
  object-fit: cover;
  display: block;
  border-radius: 20px;
  border: 1px solid #FAF4F4;
}

.rightimg1 img,
.rightimg2 img {
  width: 500px;
  height: 300px;
  object-fit: cover;
  display: block;
  border-radius: 20px;
  border: 1px solid #FAF4F4;
  margin-left: auto;

}

.switchCard {
  background-color: #000000;
  position: relative;

  span {
    width: 100%;
    text-align: center;
    font-size: 60px;
    font-family: 'DMSerifDisplay';
    color: white;
    position: absolute;
    top: 10%;
    left: 28%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
}

.footer {
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Alike';
  font-size: 20px;
  background-color: #000000;
  color: white;
  position: relative;
}

.footerLeft {
  gap: 50px;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
}

.footerRight {
  gap: 50px;
  display: flex;
  flex-direction: column;
  margin-right: 10%;
}

.footerCenter {
  overflow: hidden;
}

.logo {
  position: absolute;
  width: 10%;
  height: auto;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
}
</style>
