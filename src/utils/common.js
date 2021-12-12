export function nowFormat(fmt, time) {
  const o = {
    "M+": time.getMonth() + 1, // 月份
    "d+": time.getDate(), // 日
    "h+": time.getHours(), // 小时
    "m+": time.getMinutes(), // 分
    "s+": time.getSeconds(), // 秒
    "q+": Math.floor((time.getMonth() + 3) / 3), // 季度
    S: time.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (time.getFullYear() + "").substr(4 - RegExp.$1.length),
    );
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? o[k]
          : ("00" + o[k]).substr(("" + o[k]).length),
      );
    }
  }
  return fmt;
}

//表格排序
/**
 *
 * @param {*} list list:資料內容
 * @param {*} key key:要比對的id 'user.userName'
 * @param {*} dir dir:排序方向 0:asc 1:desc
 * @param {*} type type:排序資料的比對型態 0:integer 1:string
 * @param {*} fun 運算條件
 * @param {*} fKeys 運算條件的參數，用array裝，example:['user.userName','user.code']
 * sortTable(list,'user.userName',0,0)正序 數值類型(Integer) 排序 user.userName
 * sortTable(list,'user.userName',0,0,this.getData,['user.userName','user.code'])正序 數值類型(Integer) 排序
 */
export function sortTable(list, key, dir, type, fun, fKeys) {
  const keys = key.split(".");
  list.sort((a, b) => {
    let _a, _b;
    if (fun) {
      const aArr = [];
      const bArr = [];
      fKeys.forEach((e) => {
        const keys = e.split(".");
        let aData = a;
        let bData = b;
        keys.forEach((n) => {
          aData = aData[n];
          bData = bData[n];
        });
        aArr.push(aData);
        bArr.push(bData);
      });
      _a = fun.apply(null, aArr);
      _b = fun.apply(null, bArr);
    } else {
      _a = a;
      _b = b;
      keys.forEach((e) => {
        _a = _a[e];
        _b = _b[e];
      });
    }
    if (type === 1) {
      if (_a == null) {
        _a = "";
      }
      if (_b == null) {
        _b = "";
      }
      if (typeof _a != "string") {
        _a = _a.toString();
      }
      if (typeof _b != "string") {
        _b = _b.toString();
      }
      return dir === 1 ? _b.localeCompare(_a) : _a.localeCompare(_b);
    } else {
      if (_a === null) {
        _a = 0;
      }
      if (_b === null) {
        _b = 0;
      }
      _a = Number.parseFloat(_a);
      _b = Number.parseFloat(_b);
      return dir === 1 ? _b - _a : _a - _b;
    }
  });
}
