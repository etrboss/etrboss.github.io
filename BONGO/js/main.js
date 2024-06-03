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
            name: 'Channel 4',
            sources: [
                {src: 'http://10.10.10.2/live/fnffeed1004/index.m3u8', type: 'application/x-mpegURL'},
            ]
		},
		{
            name: 'Channel 5',
            sources: [
                {src: 'http://10.10.10.2/live/fnffeed1005/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		{
            name: 'Channel 6',
            sources: [
                {src: 'http://10.10.10.2/live/fnffeed1006/index.m3u8', type: 'application/x-mpegURL'},
            ]
        }]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
