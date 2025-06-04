#!/bin/bash

echo "Initializing server..."
cd server
rm -rf node_modules package-lock.json
npm init
read -p "Enter author name: " AUTHOR
npm pkg set author="$AUTHOR"
npm install
cd ..

echo "Initializing client..."
cd client
rm -rf node_modules package-lock.json
npm init
npm install
cd ..
