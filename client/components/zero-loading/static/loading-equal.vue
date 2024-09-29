<template>
  <view class="animations">
    <view class="loader" :style="{ '--color': color }"></view>
  </view>
</template>

<script>
export default {
  name: "loading-equal",
  props: {
    color: {
      type: String,
      default: "#ff1919",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.loader {
  width: 50px;
  aspect-ratio: 1.154;
  position: relative;
  background: conic-gradient(
    from 120deg at 50% 64%,
    #0000,
    var(--color) 1deg 120deg,
    #0000 121deg
  );
  animation: spin 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
}

.loader:before,
.loader:after {
  content: "";
  position: absolute;
  inset: 0;
  background: inherit;
  transform-origin: 50% 66%;
  animation: separate 1.5s infinite;
}

.loader:after {
  --s: -1;
}

@keyframes spin {
  0%,
  30% {
    transform: rotate(0);
  }

  70% {
    transform: rotate(120deg);
  }

  70.01%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes separate {
  0% {
    transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
  }

  30%,
  70% {
    transform: rotate(calc(var(--s, 1) * 120deg))
      translate(calc(var(--s, 1) * -5px), 10px);
  }

  100% {
    transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
  }
}
</style>
