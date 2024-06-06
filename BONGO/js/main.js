$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
	 {
            name: 'T20 Bangla',
            sources: [
                {src: 'https://mominvaithanks.xyz/mominRocks/kCfzQ_toffe.php?live=https://mprod-cdn.toffeelive.com/live/match-2/master_1000.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'T20 English',
            sources: [
                {src: 'https://mominvaithanks.xyz/mominRocks/kCfzQ_toffe.php?live=https://mprod-cdn.toffeelive.com/live/match-1/master_1300.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'T Sports',
            sources: [
                {src: 'https://mominvaithanks.xyz/mominRocks/ts.php?id=live-02&e.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'T Sports HD',
            sources: [
                {src: 'https://homeip.biz/GaziTV/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
		},
		{
            name: 'Fox Cricket',
            sources: [
                {src: 'https://mominvaithanks.xyz/mominRocks/moto.php?id=4164', type: 'application/x-mpegURL'},
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
