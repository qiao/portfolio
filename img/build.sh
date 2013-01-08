#!/bin/sh

for png in *.png
do
    convert $png -resize 460 $png
    optipng $png
done
