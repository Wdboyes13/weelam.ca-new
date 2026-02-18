#!/bin/bash

ARCHNAME="weelam.ca"
SERVADDR="192.168.1.77"

npm i
npx vite build

rsync -avP --inplace . william@${SERVADDR}:/home/william/weelam.ca
