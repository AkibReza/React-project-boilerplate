/* setTimeout(function () {
    var colorray = ["red", "blue", "black", "yellow", "white", "green"];
    var colorice;
    for (var i = 0; i < colorray.length; i++) {
        (function () {
            return colorice = colorray[i];
        })
    }
    document.querySelector("body").style.backgroundColor = colorice;
}, 2);
 */
function exec() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {

            var colorray = ["red", "blue", "black", "yellow", "white", "green"];
            var colorice;
            for (var i = 0; i < colorray.length; i++) {
                (function () {
                    return colorice = colorray[i];
                })
            }
            document.querySelector("body").style.backgroundColor = colorice;
            //It's you code
        }, (i + i + 1) * 1000);
    }
}
exec();