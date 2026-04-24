<template>
  <button class="menu__button">
    <span>
      <slot>Reserve Trip →</slot>
    </span>
  </button>
</template>

<style scoped>
/* <reset-style> ============================ */
button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: inherit;
  border-radius: 3px;
  font-weight: 200;
}

/* <main-style> ============================ */
.menu__button {
  min-width: 62px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #fff;
  background-color: transparent;
  transition: background-color .4s;
}

/*  hover 背景变白 */
.menu__button:hover {
  background-color: #fff;
}

.menu__button span {
  /* ✅ 默认文字是白色 */
  color: #fff;
  line-height: 1;
  transition: color .4s;
}

/* ✅ hover 时文字变黑 */
.menu__button:hover span {
  color: #000;
}
</style>
