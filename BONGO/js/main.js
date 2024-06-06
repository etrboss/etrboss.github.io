$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
	 {
            name: 'Nagorik',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/nagorik_tv/playlist.m3u8?md5=4O-XEA7mTfKf9FHi70cflQ&expires=1717825533&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'G Tv',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/gazi_tv_hd/playlist.m3u8?md5=I0W6rAsdWW8quRVugOYHyA&expires=1717738557&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
        },
     
        {
            name: 'T Sports',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/t_sports/playlist.m3u8?md5=qYbL0x_ovLQnorjqSP9lwQ&expires=1717825566&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
		},
	    {
            name: 'ATN NEWS',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/atn_news/playlist.m3u8?md5=pdjhTsNNgANiy23yOrK83Q&expires=1717825271&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
        },
		{
            name: 'MY TV',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/my_tv/playlist.m3u8?md5=E2F5qVe-zNnMb8rnwrY0ig&expires=1717825509&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
        },
		{
            name: 'Willow HD',
            sources: [
                {src: 'https://mominvaithanks.xyz/mominRocks/moto.php?id=1411', type: 'application/x-mpegURL'},
            ]
        },
		{
            name: 'A Sports',
            sources: [
                {src: 'http://homeip.biz/PK_PS/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		{
            name: 'S Cricket',
            sources: [
                {src: 'http://tv.mototvlive.net:8880/live/1256%40%23zx/1256%40%23zxv/16481.ts', type: 'application/x-mpegURL'},
            ]
        }]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
