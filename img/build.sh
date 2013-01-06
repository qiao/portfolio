#!/bin/sh

for png in *.png
do
    convert $png -resize 480 $png
    optipng $png
done
