# read -p "enter yes or no: " answer
# if [ $answer = "yes" ]; then
#     firefox
#     sleep 3s
#     xdotool ctrl+alt+t
# else
#     echo "no"
# fi



read -p "open react server [y/n] : " server
if [ $server = "y" ]; then
   cd Downloads
   cd full_pizza
   cd pizza_shop
   npm run dev
   sleep 1
   echo "ok server start kar dia , babu !"
 else
   echo "fuck off poore din bas series aur gaane hi sunta rhta hai madarchod !"
fi
read -p "aur batao gaana sunoge ? [y/n]  : " gaana
if [ $gaana = "y"]; then
 read -p "kaun sa sunoge ? " song
 read -p "kispe sunoge ? (youtube=1 | spotify=2) : " whichplatform
 if [ $whichplatform = 1 ]; then 
       open "https://www.youtube.com/results?search_query=$song"
 else 
    if [ $whichplatform = 2 ]; then
    xdg-open "https://open.spotify.com/search/$song"
    else
    echo "galat daal diye ho ! ek bar check karo"
    fi
    fi
    
  