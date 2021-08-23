class Lib {
    // 未入力時のアラート
    static enteredalert(value, contents) {

        let result = "";

        if (value == "" ) {
            result = contents + "は必須項目です。";
        } 
        return result;
        
    }

}

export default Lib;