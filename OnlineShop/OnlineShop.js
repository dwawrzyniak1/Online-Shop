$(document).ready(function (e) {
    var items = [{
        id: '1',
        name: 'Myslovitz - Milosc w czasach popkultury',
        prize: '79 pln',
        imageSource: 'http://wsm.serpent.pl/sklep/okladki/okl_okl_12704.jpg'
    },
    {
        id: '2',
        name: 'Radiohead - OK Computer',
        prize: '25 pln',
        imageSource: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Radiohead.okcomputer.albumart.jpg'
    },
    {
        id: '3',
        name: 'Nirvana - Nevermind',
        prize: '20 pln',
        imageSource: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg'
    }];

    function addItems() {
        for (i = 0; i < items.length; i++) {
            var img = "<img src=" + items[i].imageSource + " class=\"itemimage col-md-3\" />";
            var name = "<p class=\"itemname\">" + items[i].name + "</p>";
            var prize = "<p class=\"itemprize\">" + items[i].prize + "</p>";
            $("#shopcontent").append("<div class=\"item col-md-3\">" + img + name + prize + "</div>");
        }
    };
    addItems();
});
