async function getScrobbleData(): Promise<string[]> {
    const apiUrlStr = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=Loomeh25&extended=0&api_key=${process.env.LASTFM_API_KEY}&format=json`;
    const res = await fetch(apiUrlStr);

    if (!res.ok) {
        throw new Error('Failed to fetch scrobble data');
    }

    // Properly resolve the Promise
    const resjson = await res.json();

    // Extracting the song name, artist, and image
    const track = resjson.recenttracks.track[0];
    const isNowPlaying = track["@attr"] && track["@attr"].nowplaying === "true";
    const result = {
        song: track.name,
        artist: track.artist['#text'],
        image: track.image[2]['#text'],
        nowPlaying: isNowPlaying ? "Now playing" : "Not playing"
    };

    const retArr: string[] = [result.song, result.artist, result.image, result.nowPlaying];

    for(let i = 0; i < retArr.length; i++) {
        retArr[i] = retArr[i].toLowerCase()
    }

    return retArr;
}

export default getScrobbleData;
