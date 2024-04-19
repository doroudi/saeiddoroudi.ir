<script setup>

</script>

<template>
  <a class="scroll-btn" href="#about">
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);">
      <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z" />
    </svg>
  </a>
</template>

<style lang="scss" scoped>
.scroll-btn {
  transform: scale(.95);
  position: fixed;
  bottom: 60px;
  right: calc(50% - 1em);
  z-index: 5000;
  width: 1.8em;
  height: 1.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  cursor: pointer;
  background-color: var(--primary);
  border-radius: 50%;
  transition: all 1s;

  svg {
    animation: arrowDown 2s infinite;
  }

  &:hover {
    transform: scale(1);
    transition: transform 0.5s;
    background-color: var(--secondaryHover);

    svg {
      transform: scale(1.1);
    }
  }

}

@media screen and (min-width: 640px) {
  .scroll-btn {
    bottom: 100px;
    right: 100px;
    width: 2em;
    height: 2em;
  }
}

@keyframes arrowDown {
  0% {
    margin-top: -10px;
  }

  50% {
    margin-top: 20px;
  }

  100% {
    margin-top: -10px;
  }
}
</style>
