<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

const letters = props.text.split('')
</script>

<template>
  <div class="circle-wrap">
    <div class="circle-text">
      <span v-for="(char, idx) in letters" :key="idx" :style="{
        transform: `rotate(${idx * (360 / letters.length)}deg) translateX(-50%)`
      }">
        {{ char }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.circle-wrap {
  width: 180px;
  height: 180px;
  margin: 0 auto;
}

.circle-text {
  position: relative;
  width: 100%;
  height: 100%;
  animation: rotate 18s linear infinite;
}

.circle-text span {
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: center 90px;
  font-size: 14px;
  color: #fff;
  opacity: 0.9;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
