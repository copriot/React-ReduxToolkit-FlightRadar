//unix zaman formatındaki 1970den gelen saniyeyi kullanıcı dostu formata çevir

import moment, { unix } from "moment/moment";

// import 'moment/locale/tr' Tr formatta Bugün Yarın gibi istersen bunuda import et

const formatDate = (unix_time) => {
  if (unix_time === 0) return "Unknown";
  const formatted = new Date(unix_time * 1000);

  return moment(formatted).calendar();
};
export default formatDate;
