class Replace {
    // 日付置換
    static datereplace(value) {
    
        let date = value.split(/\-/);
        let year,month,day;

        year = date[0];
        month = date[1];
        day = date[2];
        month = month ? month.replace(/^0/,'') : '';
        day = day ? day.replace(/^0/,'') : '';
            
        return year + "年"+ month + "月" + day + "日";
    }
}

export default Replace;