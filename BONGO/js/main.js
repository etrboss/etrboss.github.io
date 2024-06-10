$(document).ready(function () {
    var player = videojs('video');
player.playlist([
        
{ name: 'T 20',           autoplay: true, sources: [ {src: 'https://hdstreamz.vip/sports/mu1.php?e=.m3u8', type: 'application/x-mpegURL'},]},
{ name: 'NAGORIK',       autoplay: true, sources: [ {src: 'https://edge01.iptv.digijadoo.net/live/nagorik_tv/playlist.m3u8?md5=laWE_33z1mB0tR6KrV5-Dw&expires=1718151505&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'}, ] },
{ name: 'PEACE TV',      autoplay: true, sources: [ {src: 'https://dzkyvlfyge.erbvr.com/PeaceTvBangla/tracks-v3a1/mono.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'T SPORTS',      autoplay: true, sources: [ {src: 'https://edge01.iptv.digijadoo.net/live/t_sports/playlist.m3u8?md5=Vk4haiyg0vIGWwd9zV3U5A&expires=1718151173&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'}, ] },
{ name: 'Jamuna',        autoplay: true, sources: [ {src: 'https://livess.ncare.live/live-orgin/jamuna-test-sample-ok.stream/chunks.m3u8', type: 'application/x-mpegURL'},] },
{ name: 'Enter 10',     autoplay: true, sources: [ {src: 'https://live-bangla.akamaized.net/liveabr/pub-iobanglakp3sff/live_720p/chunks.m3u8', type: 'application/x-mpegURL'}, ] },	
{ name: 'Movie bangla',   autoplay: true, sources: [ {src: 'https://livess.ncare.live/live-orgin/moviebanglalink2.stream/chunks.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'Deshi Tv',           autoplay: true, sources: [ {src: 'https://deshitv.deshitv24.net/live/myStream/playlist.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'Colors Bangla',           autoplay: true, sources: [ {src: 'https://sonyliv.arcreation.xyz/live-tv/base.php?id=11946', type: 'application/x-mpegURL'}, ] },
{ name: 'News 24',           autoplay: true, sources: [ {src: 'https://livess.ncare.live/live-orgin/news24local.stream/chunks.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'Channel 24',       autoplay: true, sources: [ {src: 'https://ythls.armelin.one/channel/UCHLqIOMPk20w-6cFgkA90jw.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'DBC News',  autoplay: true, sources: [ {src: 'https://livess.ncare.live/live-orgin/dbcnews.stream/chunks.m3u8', type: 'application/x-mpegURL'}, ] },

]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
