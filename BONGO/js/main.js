$(document).ready(function () {
    var player = videojs('video');
player.playlist([
        
{ name: 'T 20',           autoplay: true, sources: [ {src: 'https://hdstreamz.vip/sports/mu1.php?e=.m3u8', type: 'application/x-mpegURL'},]},
{ name: 'NAGORIK',       autoplay: true, sources: [ {src: 'https://edge01.iptv.digijadoo.net/live/nagorik_tv/playlist.m3u8?md5=laWE_33z1mB0tR6KrV5-Dw&expires=1718151505&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'}, ] },
{ name: 'PEACE TV',      autoplay: true, sources: [ {src: 'https://dzkyvlfyge.erbvr.com/PeaceTvBangla/tracks-v3a1/mono.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'T SPORTS',      autoplay: true, sources: [ {src: 'https://edge01.iptv.digijadoo.net/live/t_sports/playlist.m3u8?md5=Vk4haiyg0vIGWwd9zV3U5A&expires=1718151173&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'}, ] },
{ name: 'Jamuna',        autoplay: true, sources: [ {src: 'https://livess.ncare.live/live-orgin/jamuna-test-sample-ok.stream/chunks.m3u8', type: 'application/x-mpegURL'},] },
{ name: 'Maasranga',     autoplay: true, sources: [ {src: 'https://mtv.sunplex.live/MAASRANGA-TV/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'}, ] },	
{ name: 'Movie bangla',   autoplay: true, sources: [ {src: 'https://livess.ncare.live/live-orgin/moviebanglalink2.stream/chunks.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'Deshi Tv',           autoplay: true, sources: [ {src: 'https://deshitv.deshitv24.net/live/myStream/playlist.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'GTV',           autoplay: true, sources: [ {src: 'http://103.175.242.10:8080/live/gtv/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'GTV',           autoplay: true, sources: [ {src: 'http://103.175.242.10:8080/live/gtv/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'TSports',       autoplay: true, sources: [ {src: 'http://test-otv1.ftpbd.net/streams/115/index.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'Star sports 1',  autoplay: true, sources: [ {src: 'http://test-otv1.ftpbd.net/streams/110/index.m3u8', type: 'application/x-mpegURL'}, ] },

]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
