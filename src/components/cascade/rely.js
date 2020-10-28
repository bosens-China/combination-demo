import { ref, watch } from "vue";
import { getProvince, getCity, getArea } from "../../api/region";

const created = () => {
  const province = ref(undefined);
  const provinceList = ref([]);
  const city = ref(undefined);
  const cityList = ref([]);
  const area = ref(undefined);
  const areaList = ref([]);

  getProvince()
    .then((res) => {
      provinceList.value = res;
    })
    .catch(() => {
      provinceList.value = [];
    });

  // 监听省级变化
  watch(province, (value) => {
    if (!value) {
      city.value = undefined;
      cityList.value = [];
      return;
    }
    getCity(value)
      .then((res) => {
        cityList.value = res;
        city.value = res.find((f) => f.name === city.value)?.name;
      })
      .catch(() => {
        cityList.value = [];
        city.value = undefined;
      });
  });
  // 监听市级变化
  watch(city, (value) => {
    if (!value) {
      areaList.value = [];
      area.value = undefined;
      return;
    }
    getArea(value)
      .then((res) => {
        areaList.value = res;
        area.value = res.find((f) => f.name === area.value)?.name;
      })
      .catch(() => {
        areaList.value = [];
        area.value = undefined;
      });
  });
  return {
    province,
    provinceList,
    city,
    cityList,
    area,
    areaList,
  };
};
export default created;
