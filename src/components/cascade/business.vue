<template>
  <componentsProvince v-model="province" class="list" />
  <componentsCity v-model="city" class="list" />
  <componentsArea v-model="area" class="list" />
</template>

<script>
import { ref, watch } from "vue";
import assembly from "./assembly";
const { componentsProvince, componentsCity, componentsArea } = assembly();

export default {
  props: {
    modelValue: null,
  },
  components: {
    componentsProvince,
    componentsCity,
    componentsArea,
  },
  setup(props, { emit }) {
    const province = ref(undefined);
    const city = ref(undefined);
    const area = ref(undefined);
    watch([province, city, area], () => {
      emit("update:modelValue", [province.value, city.value, area.value]);
    });
    return {
      province,
      city,
      area,
    };
  },
};
</script>

<style>
.list {
  min-width: 150px;
  margin: 24px;
}
</style>

<style scoped>
/* .list {
  min-width: 150px;
  margin: 24px;
} */
</style>