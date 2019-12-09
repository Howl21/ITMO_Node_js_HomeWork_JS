;
! function() {
    window.myLibrary = {
        min: function(arr) {
            return Math.min(...arr);
        },
        max: function(arr) {
            return Math.max(...arr);
        },
        middle: function(arr) {
            let summ = 0;
            arr.forEach((v) => summ += v);
            return summ / arr.length;
        },
        clone: function(arr) {
            return arr.slice();
        }
    }
}();