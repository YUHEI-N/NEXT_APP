class Lib {
        // 加算
        static sum() {
            var result, minute, times, i,
            len = arguments.length;
   
            for (i = 0; i < len; i++) {
                
                times = arguments[i].split(':');
                minute = this.toSecond(times[0], times[1]);
              
                if (isNaN(minute)) {

                    result = 0;

                } else {

                    if (i === 0) {
                        result = minute;
                    } else {
                        result += minute;
                    }
                        
                }
            }
            return this.toTimeFormat(result);
        }
        // 減算
        static sub() {
            var result, minute, times, i,
            len = arguments.length;

            for (i = 0; i < len; i++) {
            
                times = arguments[i].split(':');
                minute = this.toSecond(times[0], times[1]);

                if (isNaN(minute)) {

                    result = 0;

                } else {

                    if (i === 0) {
                        result = minute;
                    } else {
                        result -= minute;
                        if (Math.sign(result) === -1) {
                            result = 0;
                        } 
                    }

                }
            }
            return this.toTimeFormat(result);
        }
        // 時間を分に変換
        static toSecond(hour, minute) {
            return (Number(hour) * 60) + Number(minute);
        }
        // 分を時間（hh:mm）のフォーマットに変換
        static toTimeFormat(fullSecond) {
            var hour, minute;
            var paddingZero = function(n) {
                return (n < 10)  ? '0' + n : n;
            };
     
            hour   = Math.floor(Math.abs(fullSecond) / 60);
            minute = Math.floor(Math.abs(fullSecond) % 60);
    
            minute = paddingZero(minute);
    
            return hour + ':' + minute;
        }
}

export default Lib;