$(function() {
    $('.search-entry').click(function() {
        $('.movie-lists').css('display', 'none');
        $('.download-app-bar').css('display', 'none');
        $('.topbar').css('display', 'none');
        $('.footer-navbar').css('display', 'none');
        $('.search-bar').css('display', 'block');
    });

    $('.search-bar .btn-search').click(function() {
        $.ajax({
            url: 'http://www.softeem.xin/maoyanApi/ajax/search',
            type: 'get',
            datatype: 'json',
            data: {
                kw: $('.form-control').val(),
                cityId: 10,
                stype: -1
            },
            success: function(result) {
                var lists = JSON.parse(JSON.stringify(result)).movies.list;
                   
                   $('.search-lists').css('display', 'block');

                    $('.search-lists .movie-list .movie-title').eq(0).html(lists[0].nm);
                    $('.search-lists .movie-list .movie-poster').eq(0).attr('src',lists[0].img.substring(0,22) + '128.180' + lists[0].img.substring(25));
                    $('.search-lists .movie-list .movie-score').eq(0).html(lists[0].sc);
                    $('.search-lists .movie-list .movie-star').eq(0).html(lists[0].star);
                    $('.search-lists .movie-list .showinfo').eq(0).html(lists[0].showInfo);
                    $('.search-lists .btn-detail').eq(0).attr('data-id', lists[0].id);


                    $('.search-lists .movie-list .movie-title').eq(1).html(lists[1].nm);
                    $('.search-lists .movie-list .movie-poster').eq(1).attr('src',lists[1].img.substring(0,22) + '128.180' + lists[1].img.substring(25));
                    $('.search-lists .movie-list .movie-score').eq(1).html(lists[1].sc);
                    $('.search-lists .movie-list .movie-star').eq(1).html(lists[1].star);
                    $('.search-lists .movie-list .showinfo').eq(1).html(lists[1].showInfo);
                    $('.search-lists .btn-detail').eq(1).attr('data-id', lists[1].id);

                    $('.search-lists .movie-list .movie-title').eq(2).html(lists[2].nm);
                    $('.search-lists .movie-list .movie-poster').eq(2).attr('src',lists[2].img.substring(0,22) + '128.180' + lists[2].img.substring(25));
                    $('.search-lists .movie-list .movie-score').eq(2).html(lists[2].sc);
                    $('.search-lists .movie-list .movie-star').eq(2).html(lists[2].star);
                    $('.search-lists .movie-list .showinfo').eq(2).html(lists[2].showInfo);
                    $('.search-lists .btn-detail').eq(2).attr('data-id', lists[2].id);
            }
        });

    });
});