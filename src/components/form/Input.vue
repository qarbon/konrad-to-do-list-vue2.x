<template>
  <div class="text-input">
    <label v-if="label" class="text-input__label">
      {{ label }}
    </label>
    <div class="text-input__container">
      <input
          :class="{ error }"
          :placeholder="placeholder"
          :type="type"
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
  name: "Input",
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
    type: {
      type: String,
      default: 'text',
    },
    error: {
      type: String,
      default: null,
    },
    isTextArea: {
      type: Boolean,
      default: false,
    },
    hideErrorMessage: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    handleInput(e) {
      this.$emit(
          'input',
          this.type === 'number' ? Number(e.target.value) : e.target.value,
      );
    },
    handleBlur() {
      this.$emit('blur');
    },
  },
}
</script>