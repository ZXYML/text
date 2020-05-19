
const ApiRootUrl = 'http://wfz.ngrok.bszzh.top'; // 测试地址

// 切割URl参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURLcomponent(r[2]); return null;
}