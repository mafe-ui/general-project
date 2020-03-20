import Vue from 'vue'
import VueI18n from './locale/i18n'

export default {
    //code返回处理
    setCode(code, paramsStr) {
        var codeJson = VueI18n.t('m.codeJson');
        var str = codeJson[code];
        if (paramsStr) {
            var arr = paramsStr.split(",");
        }
        if (arr && arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                str = str.replace("{" + i + "}", arr[i]);
                if (i == arr.length - 1) {
                    return str
                }
            }
        } else {
            return str
        }
    },
}