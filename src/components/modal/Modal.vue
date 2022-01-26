<template>
  <div class="modal" v-if="open" @click="handleClose">
    <div class="modal__window" @click.stop >
        <div class="modal__header">
          <div class="modal__title">{{ title }}</div>
          <IconButton :icon="CloseIcon" secondary @click="handleClose"/>
        </div>
        <slot />
    </div>
  </div>
</template>

<script>
import CloseIcon from '@/assets/icon/close.png';
import IconButton from '@/components/button/IconButton';

export default {
  name: 'Modal',
  data: () => ({
    CloseIcon,
  }),
  components: { IconButton },
  props: {
    title: {
      type: String,
      default: null,
      require: true,
    },
    open: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  methods: {
    handleClose(e) {
      this.$emit('close', e);
    },
  },
};
</script>
