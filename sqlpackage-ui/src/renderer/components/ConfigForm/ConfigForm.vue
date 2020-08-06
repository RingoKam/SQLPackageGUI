<template>
  <form>
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
  </form>
</template>

<script>
export default {
  props: {
    help: Array,
    property: Array,
  },
  data() {
    return {
      model: {},
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
    };
  },
  computed: {
    schema: function () {
      return {
        groups: [
          {
            legend: "Help",
            fields: this.help,
          },
          {
            legend: "Property",
            fields: this.property,
          },
        ],
      };
    },
  },
};
</script>

<style>
</style>