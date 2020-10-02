// Peringatan //
function masuk() {
    var nama = document.getElementById("nama").value;
    var usia = document.getElementById("usia").value;
    swal.setActionValue(usia);
    if (nama == '') {
        swal("Maaf", "Tolong isi Nama Anda", "warning");
        return false;
    } else if (usia == '') {
        swal("Maaf", "Tolong isi Usia Anda", "warning");
        return false;
    } else if (usia >= 1 && usia <= 5) {
        swal("Terimakasih", "Anda Masih Bayi", "success");
        return false;
    } else if (usia >= 6 && usia <= 15) {
        swal("Terimakasih", "Anda Masih Anak-anak", "success");
        return false;
    } else if (usia >= 16 && usia <= 30) {
        swal("Terimakasih", "Anda Masih Remaja", "success");
        return false;
    } else if (usia >= 31 && usia <= 60) {
        swal("Terimakasih", "Anda Sudah Dewasa", "success");
        return false;
    } else if (usia >= 61) {
        swal("Terimakasih", "Anda Sudah Dewasa", "success");
        return false;
    } else if (usia <= 0) {
        swal("Oh No", "Anda Sudah Game Over", "success");
        return false;
    }

    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault()
    });
}
