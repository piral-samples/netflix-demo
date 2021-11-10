#!/bin/bash

MFs=("netflix-browse-pilet" "netflix-favorites-pilet" "netflix-profile-pilet" "netflix-search-pilet" "netflix-watch-pilet")

for MF in "${MFs[@]}"
do
  cd $MF
  npx pilet publish --url https://feed.piral.cloud/api/v1/pilet/dante-feed --api-key $API_KEY --fresh
  cd ..
done
