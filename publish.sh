ng build --prod
ssh pi@192.168.1.25 "sudo systemctl stop windforecast-website && sudo rm -rf /home/pi/windforecast-website && mkdir /home/pi/windforecast-website"
scp -r ./dist/wind-forecast-website/* pi@192.168.1.25:/home/pi/windforecast-website
ssh pi@192.168.1.25 sudo systemctl start windforecast-website