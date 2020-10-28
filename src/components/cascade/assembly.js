import { watch } from "vue";
import created from "./rely";

const basicsComponents = () => {
  const { province, provinceList, area, areaList, city, cityList } = created();
  const assemble = (modelValue, modelValueList) => {
    return {
      props: {
        modelValue: null,
      },
      setup(props, { emit }) {
        watch(modelValue, (value) => {
          emit("update:modelValue", value);
        });
        watch(
          () => props.modelValue,
          (value) => {
            modelValue.value = value;
          },
          { immediate: true }
        );
        const onChange = (value) => {
          emit("update:modelValue", value);
        };
        return () => (
          <a-select value={props.modelValue} onChange={onChange}>
            {...modelValueList.value.map((item) => {
              return (
                <a-select-option value={item.name}>
                  {item.value}
                </a-select-option>
              );
            })}
          </a-select>
        );
      },
    };
  };

  const componentsProvince = assemble(province, provinceList);
  const componentsCity = assemble(city, cityList);
  const componentsArea = assemble(area, areaList);
  return {
    componentsProvince,
    componentsCity,
    componentsArea,
  };
};
export default basicsComponents;
