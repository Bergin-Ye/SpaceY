<template>
  <div class="checkbox-wrapper">
    <input type="checkbox" class="check" :id="randomId">
    <label :for="randomId" class="label">
      <svg width="45" height="45" viewBox="0 0 95 95">
        <rect x="30" y="20" width="50" height="50" stroke="#fff" fill="none"></rect>
        <g transform="translate(0,-952.36222)">
          <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="#fff"
            stroke-width="3" fill="none" class="path1" />
        </g>
      </svg>
      <span class="select">SELECT</span>
    </label>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// 自动生成唯一ID，永远不重复
const randomId = computed(() => {
  return 'checkbox-' + Math.random().toString(36).substr(2, 9);
});
</script>

<style scoped>
.checkbox-wrapper input[type="checkbox"] {
  visibility: hidden;
  display: none;
}

.checkbox-wrapper * {
  box-sizing: border-box;
  user-select: none;
}

.checkbox-wrapper {
  position: relative;
  display: inline-block;
}

.checkbox-wrapper .label {
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  /* 👈 加这个 */
  align-items: center;
  justify-content: center;
  gap: 4px;
  /* 👈 加这个，控制间距 */
}

.checkbox-wrapper .path1 {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: 0.5s stroke-dashoffset;
  opacity: 0;
}

.checkbox-wrapper .check:checked+label .path1 {
  stroke-dashoffset: 0;
  opacity: 1;
}

.select {
  font-size: 14px;
  margin-left: 8px;
}
</style>
