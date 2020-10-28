<template>
  <p>
    当前值:
    <mark>
      {{ current }}
    </mark>
  </p>
  <business v-model="current" />
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="省级" v-bind="validateInfos.province">
      <componentsProvince v-model="modelRef.province" />
    </a-form-item>
    <a-form-item label="市级" v-bind="validateInfos.city">
      <componentsCity v-model="modelRef.city" />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        校验
      </a-button>
      <a-button :style="{ marginLeft: '24px' }" @click="onAssignment">
        赋值
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { business, basicsComponents } from "./components/cascade";
const { componentsProvince, componentsCity } = basicsComponents();

import { reactive, ref } from "vue";
import { useForm } from "@ant-design-vue/use";
import { message } from "ant-design-vue";

export default {
  components: {
    business,
    componentsProvince,
    componentsCity,
  },
  setup() {
    const modelRef = reactive({
      province: undefined,
      city: undefined,
    });
    const current = ref([]);
    const rulesRef = reactive({
      province: [
        {
          required: true,
          message: "省级不能为空",
        },
      ],
      city: [
        {
          required: true,
          message: "市级不能为空",
        },
      ],
    });
    const { validate, validateInfos } = useForm(modelRef, rulesRef);
    const onSubmit = (e) => {
      e.preventDefault();
      validate()
        .then(() => {
          message.success("校验成功");
        })
        .catch(() => {});
    };
    const onAssignment = () => {
      modelRef.province = "340000";
      modelRef.city = "340200";
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      modelRef,
      current,
      onAssignment,
      onSubmit,
    };
  },
};
</script>

<style>
#app {
  width: 800px;
  margin: auto;
  padding: 24px;
}
</style>
