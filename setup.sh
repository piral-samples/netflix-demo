#!/bin/bash

Repos=("netflix-piral" "netflix-browse-pilet" "netflix-favorites-pilet" "netflix-profile-pilet" "netflix-search-pilet" "netflix-watch-pilet")

for Repo in "${Repos[@]}"
do
  cd $Repo
  npm i
  cd ..
done
