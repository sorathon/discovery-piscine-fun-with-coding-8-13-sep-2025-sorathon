#!/bin/bash

if [ -z "$1" ]; then
    echo "no argument"
else
    # แสดง argument สูงสุด 3 ตัว
    echo "Argument 1: $1"
    echo "Argument 2: $2"
    echo "Argument 3: $3"
fi
