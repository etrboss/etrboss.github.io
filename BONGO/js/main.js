$(document).ready(function () {
    var player = videojs('video');
player.playlist([
        
{ name: 'T Sports',           autoplay: true, sources: [ {src: 'https://edge01.iptv.digijadoo.net/live/t_sports/playlist.m3u8?md5=JKB8RE7vssXKQmiXRHl_vg&expires=1720839695&user=d477246e9e724f81a011b847457e71c4', type: 'application/x-mpegURL'},]},
{ name: 'NAGORIK',       autoplay: true, sources: [ {src: 'https://edge01.iptv.digijadoo.net/live/nagorik_tv/playlist.m3u8?md5=laWE_33z1mB0tR6KrV5-Dw&expires=1718151505&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'}, ] },
{ name: 'PEACE TV',      autoplay: true, sources: [ {src: 'https://dzkyvlfyge.erbvr.com/PeaceTvBangla/tracks-v3a1/mono.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'T SPORTS',      autoplay: true, sources: [ {src: 'https://edge01.iptv.digijadoo.net/live/t_sports/playlist.m3u8?md5=Vk4haiyg0vIGWwd9zV3U5A&expires=1718151173&user=ff39d05fef0749028389f28943b73363', type: 'application/x-mpegURL'}, ] },
{ name: 'Jamuna',        autoplay: true, sources: [ {src: 'https://livess.ncare.live/live-orgin/jamuna-test-sample-ok.stream/chunks.m3u8', type: 'application/x-mpegURL'},] },
{ name: 'Enter 10',     autoplay: true, sources: [ {src: 'https://live-bangla.akamaized.net/liveabr/pub-iobanglakp3sff/live_720p/chunks.m3u8', type: 'application/x-mpegURL'}, ] },	
{ name: 'Movie bangla',   autoplay: true, sources: [ {src: 'https://livess.ncare.live/live-orgin/moviebanglalink2.stream/chunks.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'Deshi Tv',           autoplay: true, sources: [ {src: 'https://deshitv.deshitv24.net/live/myStream/playlist.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'R Tv',           autoplay: true, sources: [ {src: 'https://livess.ncare.live/live-orgin/rtv-sg.stream/chunks.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'News 24',           autoplay: true, sources: [ {src: 'https://livess.ncare.live/live-orgin/news24local.stream/chunks.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'Channel 24',       autoplay: true, sources: [ {src: 'https://ythls.armelin.one/channel/UCHLqIOMPk20w-6cFgkA90jw.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'ATN Bangla',       autoplay: true, sources: [ {src: 'https://livess.ncare.live/live-orgin/atnbd-8-org.stream/chunks.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'Me Tv',       autoplay: true, sources: [ {src: 'https://iptvbd.live/metv1080/1080.m3u8', type: 'application/x-mpegURL'}, ] },
       { name: 'ATN Music',       autoplay: true, sources: [ {src: 'https://livess.ncare.live/live-orgin/atnmusic.stream/chunks.m3u8', type: 'application/x-mpegURL'}, ] },
       { name: 'Sangeet Bangla',       autoplay: true, sources: [ {src: 'https://d75dqofg5kmfk.cloudfront.net/bpk-tv/Sangeetbangla/default/sangeetbangla.m3u8', type: 'application/x-mpegURL'}, ] },
       { name: 'Music India',       autoplay: true, sources: [ {src: 'https://d75dqofg5kmfk.cloudfront.net/bpk-tv/Musicindia/default/index.m3u8', type: 'application/x-mpegURL'}, ] },
       { name: '9xm',       autoplay: true, sources: [ {src: 'https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/index.m3u8', type: 'application/x-mpegURL'}, ] },
       { name: 'Zoom',       autoplay: true, sources: [ {src: 'https://d75dqofg5kmfk.cloudfront.net/bpk-tv/Zoom/default/zoom.m3u8', type: 'application/x-mpegURL'}, ] },
 { name: 'Kids Creation',       autoplay: true, sources: [ {src: 'https://vods1.aynaott.com/kidscreation_test/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'}, ] },
 { name: 'MBC 3',       autoplay: true, sources: [ {src: 'https://shls-mbc3-eur-prod-dub.shahid.net/out/v1/fce09dd6a967431a871efb3b8dec9f82/index_3.m3u8', type: 'application/x-mpegURL'}, ] },
 { name: 'Gubbare',       autoplay: true, sources: [ {src: 'https://epiconvh.s.llnwi.net/gubbare/master.m3u8', type: 'application/x-mpegURL'}, ] },
        { name: 'Discovery Bangla',       autoplay: true, sources: [ {src: 'https://varun-iptv.netlify.app/m3u/discoverybengali.m3u8', type: 'application/x-mpegURL'}, ] },
        { name: 'Wild Earth',       autoplay: true, sources: [ {src: 'https://wildearth-roku.amagi.tv/masterR720P.m3u8', type: 'application/x-mpegURL'}, ] },
        { name: 'Animal Planet',       autoplay: true, sources: [ {src: 'https://food-dlvr-ott.akamaized.net:443/primary/3/def27b3dd6854290bc7f42daa93c65ea/index_15.m3u8', type: 'application/x-mpegURL'}, ] },

]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
