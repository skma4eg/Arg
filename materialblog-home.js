function lazyload() {
    ! function(_0xb700x2) {
        function _0xb700x3(_0xb700x2, _0xb700x3) {
            var _0xb700x4 = new Image,
                _0xb700x5 = _0xb700x2['getAttribute']('data-src');
            _0xb700x4['onload'] = function() {
                _0xb700x2['parent'] ? _0xb700x2['parent']['replaceChild'](_0xb700x4, _0xb700x2) : _0xb700x2['src'] = _0xb700x5, _0xb700x3 ? _0xb700x3() : null
            }, _0xb700x4['src'] = _0xb700x5
        }

        function _0xb700x4(_0xb700x3) {
            var _0xb700x4 = _0xb700x3['getBoundingClientRect']();
            return _0xb700x4['top'] >= 0 && _0xb700x4['left'] >= 0 && _0xb700x4['top'] <= (_0xb700x2['innerHeight'] || document['documentElement']['clientHeight'])
        }
        for (var _0xb700x5 = function(_0xb700x2, _0xb700x3) {
                if (document['querySelectorAll']) {
                    _0xb700x3 = document['querySelectorAll'](_0xb700x2)
                } else {
                    var _0xb700x4 = document,
                        _0xb700x5 = _0xb700x4['styleSheets'][0] || _0xb700x4['createStyleSheet']();
                    _0xb700x5['addRule'](_0xb700x2, 'f:b');
                    for (var _0xb700x6 = _0xb700x4['all'], _0xb700x7 = 0, _0xb700x8 = [], _0xb700x9 = _0xb700x6['length']; _0xb700x9 > _0xb700x7; _0xb700x7++) {
                        _0xb700x6[_0xb700x7]['currentStyle']['f'] && _0xb700x8['push'](_0xb700x6[_0xb700x7])
                    };
                    _0xb700x5['removeRule'](0), _0xb700x3 = _0xb700x8
                };
                return _0xb700x3
            }, _0xb700x6 = function(_0xb700x3, _0xb700x4) {
                _0xb700x2['addEventListener'] ? this['addEventListener'](_0xb700x3, _0xb700x4, !1) : _0xb700x2['attachEvent'] ? this['attachEvent']('on' + _0xb700x3, _0xb700x4) : this['on' + _0xb700x3] = _0xb700x4
            }, _0xb700x7 = new Array, _0xb700x8 = _0xb700x5('.post-img'), _0xb700x9 = function() {
                for (var _0xb700x2 = 0; _0xb700x2 < _0xb700x7['length']; _0xb700x2++) {
                    _0xb700x4(_0xb700x7[_0xb700x2]) && _0xb700x3(_0xb700x7[_0xb700x2], function() {
                        _0xb700x7['splice'](_0xb700x2, _0xb700x2)
                    })
                }
            }, _0xb700xa = 0; _0xb700xa < _0xb700x8['length']; _0xb700xa++) {
            _0xb700x7['push'](_0xb700x8[_0xb700xa])
        };
        _0xb700x9(), _0xb700x6('scroll', _0xb700x9)
    }(this)
}
lazyload();

function j(_0xb700x9) {
    var _0xb700x2 = document['createElement']('script');
    _0xb700x2['type'] = 'text/javascript', _0xb700x2['src'] = _0xb700x9, document['body']['appendChild'](_0xb700x2)
}

function loophalaman(_0xb700x9) {
    var _0xb700x2 = '';
    nomerkiri = parseInt(numshowpage / 2), nomerkiri == numshowpage - nomerkiri && (numshowpage = 2 * nomerkiri + 1), mulai = nomerhal - nomerkiri, mulai < 1 && (mulai = 1), maksimal = parseInt(_0xb700x9 / postperpage) + 1, maksimal - 1 == _0xb700x9 / postperpage && (maksimal -= 1), akhir = mulai + numshowpage - 1, akhir > maksimal && (akhir = maksimal);
    var _0xb700xd = parseInt(nomerhal) - 1;
    _0xb700x2 += 1 == nomerhal ? 'page' == jenis ? '<span class="showpage disable"><a href="' + home_page + '">' + upPageWord + '</a></span>' : '<span class="showpageNum"><a href="/search/label/' + lblname1 + '?&max-results=' + postperpage + '">' + upPageWord + '</a></span>' : 'page' == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + _0xb700xd + ');return false">' + upPageWord + '</a></span>' : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + _0xb700xd + ');return false">' + upPageWord + '</a></span>', mulai > 1 && (_0xb700x2 += 'page' == jenis ? '<span class="showpageNum"><a href="' + home_page + '">1</a></span>' : '<span class="showpageNum"><a href="/search/label/' + lblname1 + '?&max-results=' + postperpage + '">1</a></span>');
    for (var _0xb700x5 = mulai; _0xb700x5 <= akhir; _0xb700x5++) {
        _0xb700x2 += nomerhal == _0xb700x5 ? '<span class="showpagePoint">' + _0xb700x5 + '</span>' : 1 == _0xb700x5 ? 'page' == jenis ? '<span class="showpageNum"><a href="' + home_page + '">1</a></span>' : '<span class="showpageNum"><a href="/search/label/' + lblname1 + '?&max-results=' + postperpage + '">1</a></span>' : 'page' == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + _0xb700x5 + ');return false">' + _0xb700x5 + '</a></span>' : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + _0xb700x5 + ');return false">' + _0xb700x5 + '</a></span>'
    };
    akhir < maksimal && (_0xb700x2 += 'page' == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + maksimal + ');return false">' + maksimal + '</a></span>' : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + maksimal + ');return false">' + maksimal + '</a></span>');
    var _0xb700x4 = parseInt(nomerhal) + 1;
    nomerhal < maksimal && (_0xb700x2 += 'page' == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + _0xb700x4 + ');return false">' + downPageWord + '</a></span>' : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + _0xb700x4 + ');return false">' + downPageWord + '</a></span>'), nomerhal == maksimal && (_0xb700x2 += 'page' == jenis ? '<span class="showpage disable"><a href="#" onclick="redirectpage(' + _0xb700x4 + ');return false">' + downPageWord + '</a></span>' : '<span class="showpage disable"><a href="#" onclick="redirectlabel(' + _0xb700x4 + ');return false">' + downPageWord + '</a></span>');
    for (var _0xb700x6 = document['getElementsByName']('pageArea'), _0xb700x3 = document['getElementById']('blog-pager'), _0xb700xe = 0; _0xb700xe < _0xb700x6['length']; _0xb700xe++) {
        _0xb700x6[_0xb700xe]['innerHTML'] = _0xb700x2
    };
    _0xb700x6 && _0xb700x6['length'] > 0 && (_0xb700x2 = ''), _0xb700x3 && (_0xb700x3['innerHTML'] = _0xb700x2)
}

function hitungtotaldata(_0xb700x9) {
    var _0xb700x2 = _0xb700x9['feed'],
        _0xb700xd = parseInt(_0xb700x2['openSearch$totalResults'].$t, 10);
    loophalaman(_0xb700xd)
}

function halamanblogger() {
    var _0xb700x9 = urlactivepage; - 1 != _0xb700x9['indexOf']('/search/label/') && (lblname1 = -1 != _0xb700x9['indexOf']('?updated-max') ? _0xb700x9['substring'](_0xb700x9['indexOf']('/search/label/') + 14, _0xb700x9['indexOf']('?updated-max')) : _0xb700x9['substring'](_0xb700x9['indexOf']('/search/label/') + 14)), -1 == _0xb700x9['indexOf']('?q=') && -1 == _0xb700x9['indexOf']('.html') && (-1 == _0xb700x9['indexOf']('/search/label/') ? (jenis = 'page', nomerhal = -1 != urlactivepage['indexOf']('#PageNo=') ? urlactivepage['substring'](urlactivepage['indexOf']('#PageNo=') + 8, urlactivepage['length']) : 1, j(home_page + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata')) : (jenis = 'label', -1 == _0xb700x9['indexOf']('&max-results=') && (postperpage = 20), nomerhal = -1 != urlactivepage['indexOf']('#PageNo=') ? urlactivepage['substring'](urlactivepage['indexOf']('#PageNo=') + 8, urlactivepage['length']) : 1, j(home_page + 'feeds/posts/summary/-/' + lblname1 + '?alt=json-in-script&callback=hitungtotaldata&max-results=1')));
}

function redirectpage(_0xb700x9) {
    jsonstart = (_0xb700x9 - 1) * postperpage, nopage = _0xb700x9;
    var _0xb700x2 = document['getElementsByTagName']('head')[0],
        _0xb700xd = document['createElement']('script');
    _0xb700xd['type'] = 'text/javascript', _0xb700xd['setAttribute']('src', home_page + 'feeds/posts/summary?start-index=' + jsonstart + '&max-results=1&alt=json-in-script&callback=finddatepost'), _0xb700x2['appendChild'](_0xb700xd)
}

function redirectlabel(_0xb700x9) {
    jsonstart = (_0xb700x9 - 1) * postperpage, nopage = _0xb700x9;
    var _0xb700x2 = document['getElementsByTagName']('head')[0],
        _0xb700xd = document['createElement']('script');
    _0xb700xd['type'] = 'text/javascript', _0xb700xd['setAttribute']('src', home_page + 'feeds/posts/summary/-/' + lblname1 + '?start-index=' + jsonstart + '&max-results=1&alt=json-in-script&callback=finddatepost'), _0xb700x2['appendChild'](_0xb700xd)
}

function finddatepost(_0xb700x9) {
    post = _0xb700x9['feed']['entry'][0];
    var _0xb700x2 = post['published']['$t']['substring'](0, 19) + post['published']['$t']['substring'](23, 29),
        _0xb700xd = encodeURIComponent(_0xb700x2);
    if ('page' == jenis) {
        var _0xb700x5 = '/search?updated-max=' + _0xb700xd + '&max-results=' + postperpage + '#PageNo=' + nopage
    } else {
        var _0xb700x5 = '/search/label/' + lblname1 + '?updated-max=' + _0xb700xd + '&max-results=' + postperpage + '#PageNo=' + nopage
    };
    location['href'] = _0xb700x5
}

function loadmore() {
    var _0xb700x9 = $('#blog-pager'),
        _0xb700x2 = $('.blog-posts');
    _0xb700x9['find']('#blog-pager-newer-link')['remove'](), _0xb700x9['append']('<div id="loadmore"><a href="' + _0xb700x9['find']('#blog-pager-older-link a')['attr']('href') + '" title="عرض المزيد من المواضيع">+ عرض المزيد</a></div>'), _0xb700x9['on']('click', '#loadmore a', function() {
        return $['get'](this['href'], {}, function(_0xb700xd) {
            var _0xb700x5 = $(_0xb700xd)['find']('.post')['length'] ? $(_0xb700xd) : $('<div></div>');
            _0xb700x2['append'](_0xb700x5['find']('.blog-posts')['html']()), lazyload(), void(0) == _0xb700x5['find']('#blog-pager-older-link a')['attr']('href') ? _0xb700x9['html']('') : _0xb700x9['html']('<div id="loadmore"><a href="' + _0xb700x5['find']('#blog-pager-older-link a')['attr']('href') + '" title="عرض المزيد من المواضيع">+ عرض المزيد</a></div>')
        }, 'html')['fail'](function() {
            _0xb700x9['remove']()
        }), $(this)['replaceWith']('<img src="https://3.bp.blogspot.com/-BzBPPgHB5B0/VuS_U1eO7gI/AAAAAAAAAQs/LQrjcLbYVkIVslkwbWKxgb7nOIyHLkwBg/s1600/301.gif" style="padding: 10px 20px;">'), !1
    });
}
var postperpage = $('.blog-pager-older-link')['length'] == 1 ? $('article')['length'] : $('.blog-pager-newer-link')['attr']('href')['slice']($('.blog-pager-newer-link')['attr']('href')['indexOf']('max-results=') + 12)['substr'](0, 1),
    numshowpage = 3,
    upPageWord = ' <i class=\'fa fa-chevron-right\'></i> ',
    downPageWord = ' <i class=\'fa fa-chevron-left\'></i> ',
    home_page = '/',
    urlactivepage = location['href'],
    nopage, jenis, nomerhal, lblname1;
ajaxload ? loadmore() : halamanblogger()