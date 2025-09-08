#!/bin/bash

file_count=$(find . -maxdepth 1 -type f | wc -l)
dir_count=$(find . -maxdepth 1 -type d ! -name '.' | wc -l)

echo "Files: $file_count, Directories: $dir_count"
