<template>
  <div class="date-input">
    <label class="text-input__label">{{ label }}</label>
    <div class="date-input__wrapper">
      <Input v-model="body.day" placeholder="DD" type="number" @blur="handleBlur" hideErrorMessage :error="error"/>
      <Input v-model="body.month" placeholder="MM" type="number" @blur="handleBlur" hideErrorMessage :error="error"/>
      <Input v-model="body.year" placeholder="AAAA" type="number" @blur="handleBlur" hideErrorMessage :error="error"/>
    </div>
    <div class="text-input__error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import Input from "./Input";

export default {
  name: "DateInput",
  components: {Input},
  data: () => ({
    body: {
      day: undefined,
      month: undefined,
      year: undefined,
    }
  }),
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: '',
      require: true
    },
    error: {
      type: String,
      default: null,
      require: true
    }
  },
  watch: {
    body: {
      deep: true,
      handler(val) {
        const { day, month, year } = val
        const date = `${year}-${month}-${day}`
        this.$emit('input', date)
      }
    }
  },
  methods: {
    handleBlur(e) {
      this.$emit('blur',e)
    }
  },
  mounted() {
    if (!this.value) return;
    const [year, month, day ] = this.value.split('-')
    if (day && month && year) {
      this.body = { day, month, year };
    }
  }
}
</script>