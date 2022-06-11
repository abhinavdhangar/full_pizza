read -p "do you want to connect wireless [y/n] : " adbserver
if [  $adbserver =  "y"  ]; then
   sudo adb shell setprop service adb.tcp.port 555
   sudo adb start-server
    sudo adb usb
    sudo adb tcpip 5555
    sudo adb shell ifconfig wlan0
else 
echo "makanakago"
fi
