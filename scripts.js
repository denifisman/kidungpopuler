function searchSongs() {
    // Mendapatkan input dari kotak pencarian
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let ul = document.getElementById('songList');
    let li = ul.getElementsByTagName('li');

    // Loop melalui semua item daftar, dan sembunyikan yang tidak sesuai dengan query pencarian
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
