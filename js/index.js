$(document).ready(function() {
    // 이미지 색 추출
    const colorThief = new ColorThief();
    const img = $('#msg_img')
    var color = colorThief.getColor(img[0]);
    
    $('#popup_back').css('background-color', 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')');

})

