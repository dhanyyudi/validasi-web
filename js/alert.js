// Peringatan //
function masuk() {
    var nama = document.getElementById("nama").value;
    var usia = document.getElementById("usia").value;

    if (!nama || nama == '') {
        Swal("Maaf", "Anda Belum Mengisi Nama", "error");
        return false;
    }

    if (!usia || usia == '') {
        Swal("Maaf", "Anda Belum Mengisi Usia", "error");
        return false;
    }

    const x = parseInt(usia);

    switch (true) {
        case (x >= 1 && x <= 5):
            swal("Terimakasih", "Anda Masih Bayi");
            return false;
            break;
        case (x >= 6 && x <= 15):
            swal("Terimakasih", "Anda Masih Anak-anak", "success");
            return false;
            break;
        case (x >= 16 && x <= 30):
            swal("Terimakasih", "Anda Masih Remaja", "success");
            return false;
            break;
        case (x >= 31 && x <= 60):
            swal("Terimakasih", "Anda Sudah Dewasa", "success");
            return false;
            break;
        case (x >= 61):
            swal("Terimakasih", "Anda Sudah Dewasa", "success");
            return false;
            break;
        case (x <= 0):
            swal("Oh No", "Anda Sudah Game Over", "success");
            return false;
            break;
    }

}

console.log(window.stop());