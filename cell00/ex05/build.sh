#!/bin/bash

# ถ้าไม่มี argument ให้แจ้ง
if [ $# -eq 0 ]; then
    echo "no argument"
    exit 1
fi

# loop ผ่านทุก argument
for arg in "$@"
do
    folder="ex$arg"
    mkdir -p "$folder"
    echo "Created folder: $folder"
done
