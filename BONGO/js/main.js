$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
	 {
            name: 'Deen TV',
            sources: [
                {src: 'https://livess.ncare.live/live-orgin/deentv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Star Jalsha',
            sources: [
                {src: 'http://tv.cloudcdn.me/live.ts?channelId=116&uid=8164&deviceMac=00:1A:79:17:D4:A1', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 3',
            sources: [
                {src: 'http://10.10.10.2/live/fnffeed1003/index.m3u8', type: 'application/x-mpegURL'},
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