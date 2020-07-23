#!/bin/bash
# 
# A script to convert an image into multiple sizes
# install imagemagick first

fileName=$1

IFS='.' read -ra path_array <<< $fileName

filePrefix=${path_array[0]}

convert $fileName -resize 1080 "${filePrefix}-1080w.jpeg"
convert $fileName -resize 720 "${filePrefix}-720w.jpeg"
convert $fileName -resize 480 "${filePrefix}-480w.jpeg"

mv $fileName "${filePrefix}-1920w.jpeg"