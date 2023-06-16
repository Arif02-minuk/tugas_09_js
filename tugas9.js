function toko() {
    var amiShop = {
        cabe  : 3000,
        tomat: 1000,
        kentang: 5000,
        sayurSawi: 3000,
    }

    for (var harga in amiShop) {
        console.log(amiShop[harga]);
    }
}

toko();