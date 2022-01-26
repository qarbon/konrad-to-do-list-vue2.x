<template>
  <div class="checkbox" tabindex="0" @click="handleOnClick">
      <div class="checkbox__box">
          <div :class="{ checked: value }"></div>
      </div>
      <slot />
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleOnClick() {
      this.$emit('input', !this.value);
    },
  },
};
</script>
