<template>
  <div class="text-input">
    <label v-if="label" class="text-input__label">
      {{ label }}
    </label>
    <div class="text-input__container">
      <textarea
          :class="{ error }"
          :placeholder="placeholder"
          :value="value"
          @input="handleInput"
          @blur="handleBlur"
          class="text-input__input"
      />
    </div>
    <div v-if="!hideErrorMessage" class="text-input__error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
    },
    placeholder: {
      type: String,
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
    hideErrorMessage: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
    handleBlur() {
      this.$emit('blur');
    },
  },
};
</script>
