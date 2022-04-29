/**
 * Input:
 * Bố, Mẹ, Anh Trai, Em gái
 * 
 * các bước xử lí:
 * B1: tìm thẻ bằng id
 * B2: Tạo hàm
 *      Lấy dữ liệu từ form
 *      Kiểm tra
 *      Nếu chưa chọn => Xin chào người lạ
 *      Nếu chọn Bố: => Xin chào Bố
 *      Nếu chọn Mẹ: => Xin chào Mẹ
 *      Nếu chọn Anh Trai: => Xin chào Anh Trai
 *      Ngược lại => Xin chào em gái
 * B3: Gắn hàm vào sự kiện click
 * B4: Hiển thị lên UI
 * 
 * Output: 
 * Gửi lời chào
 * 
 */

function guiLoiChao(){
    var luaChon = document.getElementById("xinChao").value;

    if(luaChon == "C"){
        LoiChao = "Xin chào người lạ";
    }else if(luaChon == "B") {
        LoiChao = "Xin chào Bố";
    }else if(luaChon == "M") {
        LoiChao = "Xin chào Mẹ";
    }else if(luaChon == "A") {
        LoiChao = "Xin chào Anh Trai";
    }else if(luaChon == "E") {
        LoiChao = "Xin chào Em Gái";
    }
    
    document.getElementById("guiLoiChao").innerHTML = LoiChao;
}