/**
 * Input: Chiều dài 3 cạnh
 * a,b,c
 * 
 * Các bước xử lí
 * B1: tìm các thẻ bằng id
 * B2: Tạo hàm
 *      + Lấy giá trị từ form
 *      + kiểm tra
 *          Nếu a + b > c và a + c > b và b + c > a => Hình tam giác
 *              (Nếu a = b = c => Tam giác đều
 *              nếu a = b hoặc b = c hoặc a = c => Tam giác cân
 *              nếu a * a + b * b == c * c hoặc a * a + c * c == b * b hoặc c * c + b * b == a * a => Tam giác vuông
 *              Ngược lại: tam giác thường)
 *          Ngược lại: 3 cạnh không phải là cạnh của tam giác
 * B3: Gắn hàm vào sự kiện click
 * B4: Hiển thị lên UI
 * 
 * Output
 * Loại tam giác
 * 
 */

function LoaiTamGiac() {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);

    if (a + b > c && a + c > b && b + c > a) {
        if (a == b && b == c) {
            Hinh = "Tam Giác Đều";
        } else if (a == b || b == c || a == c) {
            Hinh = "Tam Giác Cân";
        } else if (a * a + b * b == c * c
                || a * a + c * c == b * b
                || c * c + b * b == a * a) {
            Hinh = "Tam Giác Vuông";
        } else {
            Hinh = "Tam Giác Thường";
        }
    } else {
        Hinh = "3 cạnh không phải là cạnh của 1 tam giác";
    }

    document.getElementById("TamGiac").innerHTML = Hinh;
}