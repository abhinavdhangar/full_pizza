read -p "enter your spotify username: " username
read -p "enter your spotify password: " password
#login to spotify
curl -X POST -H "Content-Type: application/json" -d '{"username": "'$username'", "password": "'$password'"}' https://accounts.spotify.com/api/token
#get the access token
access_token=$(curl -X POST -H "Content-Type: application/json" -d '{"username": "'$username'", "password": "'$password'"}' https://accounts.spotify.com/api/token | jq -r '.access_token')
#get the user id
user_id=$(curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/me | jq -r '.id')
#get the user's playlists
curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/users/$user_id/playlists
#get the playlist id
playlist_id=$(curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/users/$user_id/playlists | jq -r '.items[0].id')
#get the playlist tracks
curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/users/$user_id/playlists/$playlist_id/tracks
#get the track id
track_id=$(curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/users/$user_id/playlists/$playlist_id/tracks | jq -r '.items[0].track.id')
#get the track uri
track_uri=$(curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/users/$user_id/playlists/$playlist_id/tracks | jq -r '.items[0].track.uri')
#get the track name
track_name=$(curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/users/$user_id/playlists/$playlist_id/tracks | jq -r '.items[0].track.name')
#get the track artist
track_artist=$(curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/users/$user_id/playlists/$playlist_id/tracks | jq -r '.items[0].track.artists[0].name')
#get the track album
track_album=$(curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/users/$user_id/playlists/$playlist_id/tracks | jq -r '.items[0].track.album.name')
#get the track album art
track_album_art=$(curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/users/$user_id/playlists/$playlist_id/tracks | jq -r '.items[0].track.album.images[0].url')
#get the track duration
track_duration=$(curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/users/$user_id/playlists/$playlist_id/tracks | jq -r '.items[0].track.duration_ms')
echo "track id: $track_id"
echo "track uri: $track_uri"
echo "track name: $track_name"
echo "track artist: $track_artist"
echo "track album: $track_album"
echo "track album art: $track_album_art"
echo "track duration: $track_duration"
#get the track audio features
curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/audio-features/$track_id
#get the track audio features danceability
track_danceability=$(curl -X GET -H "Authorization: Bearer $access_token" https://api.spotify.com/v1/audio-features/$track_id | jq -r '.danceability')
#get the track audio features energy
