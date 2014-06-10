#!/bin/sh

#invoke like ./restart.sh "<C-V>"
# note the quotes, <C-V> is paste

while true; do
  sh -c "$*"
done
