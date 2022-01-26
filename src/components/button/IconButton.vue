<template>
  <button v-if="icon" class="icon-button" :class="{secondary}" @click="handleClick">
    <img :src="icon" />
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    icon: {
      type: String,
      require: true,
    },
    secondary: {
      type: Boolean,
      require: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>
