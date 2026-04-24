<script setup>
import { ref, onMounted, nextTick } from 'vue';

const props = defineProps({
  imgSrc: String,
  gridSize: {
    type: Number,
    default: 10
  }
});

const emit = defineEmits(['animation-end']);

const pixelGrid = ref(null);

onMounted(() => {
  build();
});

function build() {
  const root = pixelGrid.value;
  if (!root) return;
  root.innerHTML = '';

  const size = 100 / props.gridSize;

  for (let i = 0; i < props.gridSize * props.gridSize; i++) {
    const p = document.createElement('div');
    p.className = 'pixel';
    p.style.width = `${size}%`;
    p.style.height = `${size}%`;
    root.appendChild(p);
  }
}

async function start() {
  await nextTick();
  const list = document.querySelectorAll('.pixel');
  list.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add('hide');
    }, i * 25);
  });
}

defineExpose({ start });
</script>

<template>
  <div class="bg-pixel">
    <img :src="imgSrc" class="bg-img" />
    <div ref="pixelGrid" class="pixel-grid"></div>
  </div>
</template>

<style scoped>
.bg-pixel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.pixel-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  z-index: 2;
}

.pixel {
  background: #000;
  transition: opacity 0.2s;
  opacity: 1;
}

.pixel.hide {
  opacity: 0;
}
</style>
