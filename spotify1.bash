read -p "which song do you want to play? " song
#search song in spotify website 
#play song
read -p "volume (0-100) " volume
#set volume by amixer
amixer set Master $volume%

sleep 3
xdg-open "https://open.spotify.com/search/$song"
sleep 8

#xdotool enter
