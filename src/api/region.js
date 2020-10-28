import area from "./area";

function isObject(obj) {
  return typeof obj === "object" && obj;
}

function objToArr(obj) {
  if (!isObject(obj)) {
    return [];
  }
  return Object.keys(obj).map((item) => ({ name: item, value: obj[item] }));
}

export async function getProvince() {
  return objToArr(area.province_list);
}

export async function getCity(id) {
  if (!id) {
    return [];
  }
  const list = objToArr(area.city_list);
  const provinceId = String(id).slice(0, 2);
  const reg = new RegExp(`^${provinceId}\\d{2}00$`);
  return list.filter((item) => reg.test(item.name));
}

export async function getArea(id) {
  if (!id) {
    return [];
  }
  const list = objToArr(area.county_list);
  const provinceId = String(id).slice(0, 4);
  const reg = new RegExp(`^${provinceId}\\d{2}$`);
  return list.filter((item) => reg.test(item.name));
}
