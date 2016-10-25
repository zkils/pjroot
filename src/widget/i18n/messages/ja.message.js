/**
 * Message list for ja
 */
import { default as ja } from 'i18n/ja.message';

export default Object.assign({},{
    'app.greeting':'こんにちは',

    "setting.header": "設定",
    "setting.language": "言語",
    "setting.password": "パスワード",
    "setting.confirmPassword": "パスワード再確認",

    //Component
    "comp.progress.ing": "進行中",
    "comp.progress.done": "進行完了",
    "comp.blank": "メッセージなし",
    "comp.confirmCheckModal.no": "いいえ",
    "comp.confirmCheckModal.yes": "はい",

    //log
    "log.invalidEmail": "正しいメールではありません",
    "log.invalidString": "正しい内容ではありません",
    "log.minLength": "短いな 最低 {min, plural,\n  =0 {一つ以上}\n  =1 {一つは}\n  =2 {二つは}\n other {# 以上}\n} におねがい",
    "log.maxLength": "長すぎよ. 長さは {max}間でです",
    "log.enumeration": "この中で一つにお願いします。 : {enumerations}",

    //toastMessages
    "toast.default": "お知らせです。",

},ja);  //obg message have higher priority