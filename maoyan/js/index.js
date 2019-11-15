$(function() {
    firstAjax();
});
   
         function firstAjax() {

             $.ajax({
               url: 'http://www.softeem.xin/maoyanApi/ajax/movieoninfoList',
               type: 'get',
               datatype: 'json',

               success: function(result) {
                var movies = (JSON.parse(JSON.stringify(result))).movieList;
                    $('.movie-lists .movie-title').eq(0).html(movies[0].nm);
                    $('.movie-lists .movie-poster').eq(0).attr('src',movies[0].img.substring(0,22) + '128.180' + movies[0].img.substring(25));
                    $('.movie-lists .movie-score').eq(0).html(movies[0].sc);
                    $('.movie-lists .movie-star').eq(0).html(movies[0].star);
                    $('.movie-lists .showinfo').eq(0).html(movies[0].showInfo);
                    $('.movie-lists .btn-detail').eq(0).attr('data-id', movies[0].id);

                    $('.movie-lists .movie-title').eq(1).html(movies[1].nm);
                    $('.movie-lists .movie-poster').eq(1).attr('src',movies[1].img.substring(0,22) + '128.180' + movies[1].img.substring(25));
                    $('.movie-lists .movie-score').eq(1).html(movies[1].sc);
                    $('.movie-lists .movie-star').eq(1).html(movies[1].star);
                    $('.movie-lists .showinfo').eq(1).html(movies[1].showInfo);
                    $('.btn-detail').eq(1).attr('data-id', movies[1].id);

                    $('.movie-lists .movie-title').eq(2).html(movies[2].nm);
                    $('.movie-lists .movie-poster').eq(2).attr('src',movies[2].img.substring(0,22) + '128.180' + movies[2].img.substring(25));
                    $('.movie-lists .movie-score').eq(2).html(movies[2].wish);
                    $('.movie-lists .movie-star').eq(2).html(movies[2].star);
                    $('.movie-lists .showinfo').eq(2).html(movies[2].showInfo);
                    $('.btn-detail').eq(2).attr('data-id', movies[2].id);

                    $('.movie-lists .movie-title').eq(3).html(movies[3].nm);
                    $('.movie-lists .movie-poster').eq(3).attr('src',movies[3].img.substring(0,22) + '128.180' + movies[3].img.substring(25));
                    $('.movie-lists .movie-score').eq(3).html(movies[3].sc);
                    $('.movie-lists .movie-star').eq(3).html(movies[3].star);
                    $('.movie-lists .showinfo').eq(3).html(movies[3].showInfo);
                    $('.btn-detail').eq(3).attr('data-id', movies[3].id);

                    $('.movie-lists .movie-title').eq(4).html(movies[4].nm);
                    $('.movie-lists .movie-poster').eq(4).attr('src',movies[4].img.substring(0,22) + '128.180' + movies[4].img.substring(25));
                    $('.movie-lists .movie-score').eq(4).html(movies[4].wish);
                    $('.movie-lists .movie-star').eq(4).html(movies[4].star);
                    $('.movie-lists .showinfo').eq(4).html(movies[4].showInfo);
                    $('.btn-detail').eq(4).attr('data-id', movies[4].id);

                    $('.movie-lists .movie-title').eq(5).html(movies[5].nm);
                    $('.movie-lists .movie-poster').eq(5).attr('src',movies[5].img.substring(0,22) + '128.180' + movies[5].img.substring(25));
                    $('.movie-lists .movie-score').eq(5).html(movies[5].wish);
                    $('.movie-lists .movie-star').eq(5).html(movies[5].star);
                    $('.movie-lists .showinfo').eq(5).html(movies[5].showInfo);
                    $('.btn-detail').eq(5).attr('data-id', movies[5].id);

                    $('.movie-lists .movie-title').eq(6).html(movies[6].nm);
                    $('.movie-lists .movie-poster').eq(6).attr('src',movies[6].img.substring(0,22) + '128.180' + movies[6].img.substring(25));
                    $('.movie-lists .movie-score').eq(6).html(movies[6].sc);
                    $('.movie-lists .movie-star').eq(6).html(movies[6].star);
                    $('.movie-lists .showinfo').eq(6).html(movies[6].showInfo);
                    $('.btn-detail').eq(6).attr('data-id', movies[6].id);

                    $('.movie-lists .movie-title').eq(7).html(movies[7].nm);
                    $('.movie-lists .movie-poster').eq(7).attr('src',movies[7].img.substring(0,22) + '128.180' + movies[7].img.substring(25));
                    $('.movie-lists .movie-score').eq(7).html(movies[7].wish);
                    $('.movie-lists .movie-star').eq(7).html(movies[7].star);
                    $('.movie-lists .showinfo').eq(7).html(movies[7].showInfo);
                    $('.btn-detail').eq(7).attr('data-id', movies[7].id);

                    $('.movie-lists .movie-title').eq(8).html(movies[8].nm);
                    $('.movie-lists .movie-poster').eq(8).attr('src',movies[8].img.substring(0,22) + '128.180' + movies[8].img.substring(25));
                    $('.movie-lists .movie-score').eq(8).html(movies[8].wish);
                    $('.movie-lists .movie-star').eq(8).html(movies[8].star);
                    $('.movie-lists .showinfo').eq(8).html(movies[8].showInfo);
                    $('.btn-detail').eq(8).attr('data-id', movies[8].id);

                    $('.movie-lists .movie-title').eq(9).html(movies[9].nm);
                    $('.movie-lists .movie-poster').eq(9).attr('src',movies[9].img.substring(0,22) + '128.180' + movies[9].img.substring(25));
                    $('.movie-lists .movie-score').eq(9).html(movies[9].wish);
                    $('.movie-lists .movie-star').eq(9).html(movies[9].star);
                    $('.movie-lists .showinfo').eq(9).html(movies[9].showInfo);
                    $('.btn-detail').eq(9).attr('data-id', movies[9].id);

                    $('.movie-lists .movie-title').eq(10).html(movies[10].nm);
                    $('.movie-lists .movie-poster').eq(10).attr('src',movies[10].img.substring(0,22) + '128.180' + movies[10].img.substring(25));
                    $('.movie-lists .movie-score').eq(10).html(movies[10].wish);
                    $('.movie-lists .movie-star').eq(10).html(movies[10].star);
                    $('.movie-lists .showinfo').eq(10).html(movies[10].showInfo);
                    $('.btn-detail').eq(10).attr('data-id', movies[10].id);

                    $('.movie-lists .movie-title').eq(11).html(movies[11].nm);
                    $('.movie-lists .movie-poster').eq(11).attr('src',movies[11].img.substring(0,22) + '128.180' + movies[11].img.substring(25));
                    $('.movie-lists .movie-score').eq(11).html(movies[11].wish);
                    $('.movie-lists .movie-star').eq(11).html(movies[11].star);
                    $('.movie-lists .showinfo').eq(11).html(movies[11].showInfo);
                    $('.btn-detail').eq(11).attr('data-id', movies[11].id);
            }
        });
     }
 // }

   	 $('.movie-lists').css('display','block');
     $('.coming-item').removeClass('active');
     $('.hot-item').addClass('active');