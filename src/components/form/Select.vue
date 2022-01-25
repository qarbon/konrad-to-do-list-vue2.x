<template>
  <div>
    <label v-if="label" class="text-input__label">
      {{ label }}
    </label>
    <div class="text-input__container" :class="{ error }">
      <VSelect
          :options="options"
          :value="value"
          @input="handleInput"
      />
    </div>
    <div class="text-input__error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
    },
    error: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => []
    },

  },
  methods: {
    handleInput(e) {
      this.$emit('input', e)
    },
  },
}
</script>