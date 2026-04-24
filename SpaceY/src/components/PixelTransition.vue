<script setup>
import { onMounted, nextTick, useTemplateRef, defineExpose } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  gridSize: { type: Number, default: 20 },
  pixelColor: { type: String, default: '#000' },
  animationStepDuration: { type: Number, default: 1.2 },
});

const pixelGridRef = useTemplateRef('pixelGridRef');

// 初始化全屏黑色
function buildPixelGrid() {
  const el = pixelGridRef.value;
  if (!el) return;
  el.innerHTML = '';

  for (let row = 0; row < props.gridSize; row++) {
    for (let col = 0; col < props.gridSize; col++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel-block');
      pixel.style.backgroundColor = props.pixelColor;
      pixel.style.position = 'absolute';
      pixel.style.opacity = 1;

      const size = 100 / props.gridSize;
      pixel.style.width = `${size}%`;
      pixel.style.height = `${size}%`;
      pixel.style.left = `${col * size}%`;
      pixel.style.top = `${row * size}%`;

      el.appendChild(pixel);
    }
  }
}

// 碎裂动画：黑色块一个个消失
async function startAnimation() {
  await nextTick();
  const pixels = pixelGridRef.value?.querySelectorAll('.pixel-block');
  if (!pixels) return;

  const total = pixels.length;
  const stagger = props.animationStepDuration / total;

  gsap.to(pixels, {
    opacity: 0,
    stagger: { each: stagger, from: 'random' },
    duration: 0.1,
  });
}

onMounted(async () => {
  await nextTick();
  buildPixelGrid();
});

defineExpose({ startAnimation });
</script>

<template>
  <div ref="pixelGridRef" class="pixel-container"></div>
</template>

<style scoped>
.pixel-container {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -10;
  /* 默认藏最底部 */
}

.pixel-container.show {
  z-index: 15;
  /* 最后提到最顶层 */
}

.pixel-block {
  transition: none;
}
</style>
