echo "build..."
ng build --prod
echo "backup..."
ssh -i ~/.ssh/raspberry pi@192.168.1.25 'dirname="/home/pi/`date -I`-backup"; mkdir $dirname; sudo cp -r /home/pi/windforecast-website/* $dirname'
echo "stop and clean..."
ssh -i ~/.ssh/raspberry pi@192.168.1.25 "sudo systemctl stop windforecast-website && sudo rm -rf /home/pi/windforecast-website && mkdir /home/pi/windforecast-website"
echo "copy files..."
scp -i ~/.ssh/raspberry -r ./dist/wind-forecast-website/* pi@192.168.1.25:/home/pi/windforecast-website
echo "start website..."
ssh -i ~/.ssh/raspberry pi@192.168.1.25 sudo systemctl start windforecast-website
echo "done."