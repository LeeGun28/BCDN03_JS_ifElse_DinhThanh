/**
 * Input: num1,num2,num3
 * 
 * Các bước xử lí
 * B1: tìm các thẻ bằng id
 * B2: Tạo hàm
 *      + Lấy giá trị từ form
 *      + kiểm tra
 *      nếu num1 < num2 và num2 < num3                => num1 < num2 < num3
 * 
 *      nếu num1 < num2 và num2 > num3 và num1 < num3 => num1 < num3 < num2
 * 
 *      nếu num1 < num2 và num2 > num3 và num1 > num3 => num3 < num1 < num2
 * 
 *      nếu num1 > num2 và num2 < num3 và num1 < num3 => num2 < num1 < num3
 * 
 *      nếu num1 > num2 và num2 < num3 và num1 > num3 => num2 < num3 < num1
 * 
 *      ngược lại                                     => num3 < num2 < num1
 * B3: Gắn hàm vào sự kiện click
 * B4: Hiển thị lên UI
 * 
 * Output
 * sắp xếp từ nhỏ đến lớn
 * 
 */

function sapXep() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);

    if(num1 < num2 && num2 < num3){
        thuTu = num1 + " < " + num2 + " < " + num3;
    }else if(num1 < num2 && num2 > num3 && num1 > num3){
        thuTu = num3 + " < " + num1 + " < " + num2;
    }else if(num1 < num2 && num2 > num3 && num1 < num3){
        thuTu = num1 + " < " + num3 + " < " + num2;
    }else if(num1 > num2 && num2 < num3 && num1 > num3){
        thuTu = num2 + " < " + num3 + " < " + num1;
    }else if(num1 > num2 && num2 < num3 && num1 < num3){
        thuTu = num2 + " < " + num1 + " < " + num3;
    }else{
        thuTu = num3 + " < " + num2 + " < " + num1;
    }
    document.getElementById("thuTu").innerHTML = thuTu;
}