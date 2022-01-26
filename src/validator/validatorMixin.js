import { validatorByName } from './validator';

export default (schema) => ({
  data: () => ({
    error: {},
  }),
  computed: {
    isError() {
      return this.checkIsError();
    },
  },
  methods: {
    checkIsError() {
      return Object.values(this.error).some((val) => !!val);
    },
    validateOne(field) {
      const validatorFunc = validatorByName(schema[field]);
      const validatedField = validatorFunc(this.body[field]);
      this.$set(this.error, field, validatedField);
    },
    validateAll(keys) {
      (keys || Object.keys(this.body)).forEach((key) => this.validateOne(key));
    },
  },
  watch: {
    body: {
      deep: true,
      handler() {
        this.validateAll(Object.keys(this.error));
      },
    },
  },
});
