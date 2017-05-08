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
    },
    {
        id: '4',
        name: 'Coldplay - Parachudes',
        prize: '25 pln',
        imageSource: 'https://upload.wikimedia.org/wikipedia/en/5/57/Coldplayparachutesalbumcover.jpg'
    },
    {
        id: '5',
        name: 'Goran Bregovic i Kayah - Kayah i Bregovic',
        prize: '40 pln',
        imageSource: 'http://i.iplsc.com/0003WY1CE6OXMAMB-C430.jpg'
    },
    {
        id: '6',
        name: 'Lona i Webber - Nawiasem mowiac',
        prize: '30 pln',
        imageSource: 'http://www.popkiller.pl/sites/default/files/images/lona_i_webber.jpg'
    }];

    function addItems() {
        for (i = 0; i < items.length; i++) {
            var img = "<img src=" + items[i].imageSource + " class=\"itemimage col-md-3\" />";
            var name = "<p class=\"itemname\">" + items[i].name + "</p>";
            var prize = "<p class=\"itemprize\">" + items[i].prize + "</p>";
            var button = "<button class=\"itembutton\">Dodaj do koszyka</button>";
            $("#shopcontent").append("<div class=\"item col-md-3\">" + img + name + prize + button + "</div>");
        }
    };
    addItems();
});
