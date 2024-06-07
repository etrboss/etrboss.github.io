$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
	 {
            name: 'NAGORIK',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/nagorik_tv/playlist.m3u8?md5=4O-XEA7mTfKf9FHi70cflQ&expires=1717825533&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'G TV',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/gazi_tv_hd/playlist.m3u8?md5=I0W6rAsdWW8quRVugOYHyA&expires=1717738557&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
        },
     
        {
            name: 'T SPORTS',
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
            name: 'BANGLA TV',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/bangla_tv/playlist.m3u8?md5=mYnJus1C5YifN6p7Sbg3Bw&expires=1717916098&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
        },
		{
            name: 'CHANNEL 9',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/channel_9/playlist.m3u8?md5=iuQXbCDDNMRULUy_0TGByQ&expires=1717916156&user=ff39d05fef0749028389f28943b733633', type: 'application/x-mpegURL'},
            ]
        },


	    {
            name: 'CHANNEL i ',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/channel_i/playlist.m3u8?md5=1o0qA2eXOUCKZfd4nnJHjw&expires=1717916175&user=ff39d05fef0749028389f28943b733638943b73363', type: 'application/x-mpegURL'},
            ]
        },

	    {
            name: 'DBC NEWS',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/dbc_news/playlist.m3u8?md5=QrnkpvAkeuJMiG8YzhTh9w&expires=1717916191&user=ff39d05fef0749028389f28943b733633', type: 'application/x-mpegURL'},
            ]
        },

	    {
            name: 'EKATTOR',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/ekattor_tv/playlist.m3u8?md5=m0zG29s4j4faJW4SUiKz0w&expires=1717916228&user=ff39d05fef0749028389f28943b733633', type: 'application/x-mpegURL'},
            ]
        },
	    
	    {
            name: 'INDEPENDENT',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/independent_tv/playlist.m3u8?md5=RyUht7vwEFrU7TEdq5zEoQ&expires=1717916256&user=ff39d05fef0749028389f28943b733633', type: 'application/x-mpegURL'},
            ]
        },
	    
	    {
            name: 'JAMUNA TV,
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/jamuna_tv/playlist.m3u8?md5=A8K0AjMIdj-QRxcXcbfHaA&expires=1717916273&user=ff39d05fef0749028389f28943b7336328943b73363', type: 'application/x-mpegURL'},
            ]
        },
	    
	    {
            name: 'N TV',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/ntv/playlist.m3u8?md5=59zUgUqyr_WZ99hXMbXREA&expires=1717916308&user=ff39d05fef0749028389f28943b7336328943b73363', type: 'application/x-mpegURL'},
            ]
        },
	    
	    {
            name: 'NEWS 24',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/news_24_hd/playlist.m3u8?md5=oTLUPnSYCWsefLJKCnlrCQ&expires=1717916327&user=ff39d05fef0749028389f28943b733633', type: 'application/x-mpegURL'},
            ]
        },
	    
	    {
            name: 'R TV',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/rtv/playlist.m3u8?md5=fygD-smVJ7cQJ_XcqM9yHw&expires=1717916346&user=ff39d05fef0749028389f28943b733633', type: 'application/x-mpegURL'},
            ]
        },

	    {
            name: 'SA TV',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/sa_tv/playlist.m3u8?md5=NILBTauJ-vePJ9iaDNc0UA&expires=1717916361&user=ff39d05fef0749028389f28943b733633', type: 'application/x-mpegURL'},
            ]
        },
	    
	    {
            name: 'SOMOY',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/somoy_news/playlist.m3u8?md5=SWVzHPdGI2wvWVTcYkEUSw&expires=1717916378&user=ff39d05fef0749028389f28943b7336328943b73363', type: 'application/x-mpegURL'},
            ]
        },
	    
	    {
            name: 'BANGLA VISION',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/bangla_vision/playlist.m3u8?md5=W03-_4IO493RvK1xG93QGw&expires=1717916114&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
        },
	    
	    {
            name: 'BANGLA VISION',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/bangla_vision/playlist.m3u8?md5=W03-_4IO493RvK1xG93QGw&expires=1717916114&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
        },
	    
	    {
            name: 'BANGLA VISION',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/bangla_vision/playlist.m3u8?md5=W03-_4IO493RvK1xG93QGw&expires=1717916114&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
        },
	    
	    
	    {
            name: 'BANGLA VISION',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/bangla_vision/playlist.m3u8?md5=W03-_4IO493RvK1xG93QGw&expires=1717916114&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
        },
		{
            name: 'CHANNEL 24',
            sources: [
                {src: 'https://edge01.iptv.digijadoo.net/live/channel_24/playlist.m3u8?md5=Dl9Yv4R408iS68RVxKVQUA&expires=1717916135&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'},
            ]
        }]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
