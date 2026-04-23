<template>
  <button class="button">
    Begin Exploration
  </button>
</template>

<style scoped>
@font-face {
  font-family: 'CrimsonText';
  src: url('@/assets/font/CrimsonText-Regular.ttf') format('truetype');
}

.button {
  cursor: pointer;
  padding: 1em;
  font-size: 1em;
  width: 10em;
  aspect-ratio: 1/0.25;
  color: white;
  background: #212121;
  background-size: cover;
  background-blend-mode: overlay;
  border-radius: 3em;
  outline: 0.1em solid #353535;
  border: 0;
  box-shadow: 0 0 1em 1em rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  position: relative;
  /* 👇 关键修复：把缩放放在伪元素里，绝对定位不会乱 */
  transform: translateZ(0);
  font-family: 'CrimsonText';
}

/* 👇 修复核心：去掉 transform: scale，改用伪元素放大，不影响定位 */
.button:hover {
  box-shadow: 0 0 1em 0.45em rgba(0, 0, 0, 0.1);
  background: radial-gradient(circle at bottom,
      rgba(50, 100, 180, 0.5) 10%,
      #212121 70%);
  outline: 0;
}

/* 👇 用伪元素做视觉放大，完全不影响位置 */
.button::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 0.5em;
  transition: all 0.3s ease-in-out;
  z-index: -1;
}

.button:hover::before {
  transform: scale(1.1);
}

.icon {
  fill: white;
  width: 1em;
  aspect-ratio: 1;
  top: 0;
  left: 0;
  margin: auto;
  transform: translate(-35%, 10%);
}
</style>
