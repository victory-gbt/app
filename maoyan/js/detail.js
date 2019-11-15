$(function() {

            $('.btn-detail').click(function() {
            	var id = $(this).attr('data-id');
                $.ajax({
                    url: 'http://www.softeem.xin/maoyanApi/ajax/detailmovie',
                    type: 'get',
                    datatype: 'json',
                    data: {
                       movieId: id
                    },
                    success: function(result) {
                    	var movies = (JSON.parse(JSON.stringify(result))).detailMovie;
                        
                        $('.movie-header .poster-bg').css('background-image', ('url("'+movies.img.substring(0,22) + '128.180' + movies.img.substring(25))+'")');
                        $('.movie-header .poster img').attr('src', movies.img.substring(0,22) + '128.180' + movies.img.substring(25));
                        $('.movie-header .detail-content .detail-title').html(movies.nm);
                        $('.movie-header .detail-content .detail-score').html(movies.sc);
                        $('.movie-header .detail-content .detail-en-name').html(movies.enm);      
                        $('.movie-header .detail-content .detail-cat').html(movies.cat);  
                        $('.movie-header .detail-content .detail-star').html(movies.star);  
                        $('.movie-header .detail-content .detail-desc').html(movies.pubDesc); 
                        $('.movie-info .movie-desc-info').html(movies.dra);

                        

                        $('.movie-info .movie-photos .img0').attr('src', movies.photos[0].substring(0,22) + '128.180' + movies.photos[0].substring(25));
                        $('.movie-info .movie-photos .img1').attr('src', movies.photos[1].substring(0,22) + '128.180' + movies.photos[1].substring(25));
                        $('.movie-info .movie-photos .img2').attr('src', movies.photos[2].substring(0,22) + '128.180' + movies.photos[2].substring(25));
                        $('.movie-info .movie-photos .img3').attr('src', movies.photos[3].substring(0,22) + '128.180' + movies.photos[3].substring(25));
                        $('.movie-info .movie-photos .img4').attr('src', movies.photos[4].substring(0,22) + '128.180' + movies.photos[4].substring(25));
                        $('.movie-info .movie-photos .img5').attr('src', movies.photos[5].substring(0,22) + '128.180' + movies.photos[5].substring(25));
                        $('.movie-info .movie-photos .img6').attr('src', movies.photos[6].substring(0,22) + '128.180' + movies.photos[6].substring(25));
                        $('.movie-info .movie-photos .img7').attr('src', movies.photos[7].substring(0,22) + '128.180' + movies.photos[7].substring(25));
                        $('.movie-info .movie-photos .img8').attr('src', movies.photos[8].substring(0,22) + '128.180' + movies.photos[8].substring(25));
                        $('.movie-info .movie-photos .img9').attr('src', movies.photos[9].substring(0,22) + '128.180' + movies.photos[9].substring(25));
                        $('.movie-info .movie-photos .img10').attr('src', movies.photos[10].substring(0,22) + '128.180' + movies.photos[10].substring(25));
                        $('.movie-info .movie-photos .img11').attr('src', movies.photos[11].substring(0,22) + '128.180' + movies.photos[11].substring(25));
                        $('.movie-info .movie-photos .img12').attr('src', movies.photos[12].substring(0,22) + '128.180' + movies.photos[12].substring(25));
                        $('.movie-info .movie-photos .img13').attr('src', movies.photos[13].substring(0,22) + '128.180' + movies.photos[13].substring(25));
                        $('.movie-info .movie-photos .img14').attr('src', movies.photos[14].substring(0,22) + '128.180' + movies.photos[14].substring(25));
                        $('.movie-info .movie-photos .img15').attr('src', movies.photos[15].substring(0,22) + '128.180' + movies.photos[15].substring(25));
                        $('.movie-info .movie-photos .img16').attr('src', movies.photos[16].substring(0,22) + '128.180' + movies.photos[16].substring(25));
                        $('.movie-info .movie-photos .img17').attr('src', movies.photos[17].substring(0,22) + '128.180' + movies.photos[17].substring(25));
                        $('.movie-info .movie-photos .img18').attr('src', movies.photos[18].substring(0,22) + '128.180' + movies.photos[18].substring(25));
                       
                    }
                });
                $('.navbar').css('display', 'none');
                $('.navbar-arrow').css('display', 'block');
                $('.movie-header').css('display', 'block');
                $('.download-app-bar').css('display', 'none');
                $('.movie-lists').css('display', 'none');
                $('.movie-coming').css('display', 'none');
                $('.topbar').css('display', 'none');
                $('.footer-navbar').css('display', 'none');
                $('.search-lists').css('display', 'none');
                $('.search-bar').css('display', 'none');
            });
         });

 
           
   