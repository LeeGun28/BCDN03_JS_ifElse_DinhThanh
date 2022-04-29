/**
 * Input: num1,num2,num3
 * 
 * Các bước xử lí
 * B1: tìm thẻ theo id
 * B2: Tạo hàm
 *      Lấy giá trị từ form
 *      Kiểm tra
 *          Nếu số chia hết cho 2 => soChan+1
 *          Ngược lại => số lẻ => soLe+1
 * B3: Gắn hàm vào sự kiện click
 * B4: Hiển thị lên UI
 *      
 * Output: 
 * Có bao nhiêu số chắn
 * Có bao nhiêu số lẻ
 */


function ChanLe() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var soChan = 0;
    var soLe = 0;

    if (num1 % 2 == 0) {
        soChan = soChan+1;
    } else {
        soLe = soLe+1;
    }
    if (num2 % 2 == 0) {
        soChan = soChan+1;
    } else {
        soLe = soLe+1;
    }
    if (num3 % 2 == 0) {
        soChan = soChan+1;
    } else {
        soLe = soLe+1;
    }
    document.getElementById("ChanLe").innerHTML = "Có " + soChan + " Số Chẵn, " + soLe + " Số Lẻ";
}

