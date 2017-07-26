#!/usr/bin/env bash

#
# Always run this command from the root directory
# Get environment variables.
#
source .env;

echo -e "\033[95m Lets get started! \033[0m"
echo -e "\033[95m Environment: \033[92m\033[1m$NODE_ENV\033[0m"
echo "";

echo -e "\033[96m Creating Postgres User $DB_USER\033[0m"
echo -e "\033[96m Password will be set to .env var\033[0m"

##TODO ADD ERROR HANDLING FOR USER IF ALREADY EXISTS
##TODO ADD HANDLING TO HIDE NATIVE POSTGRES RESPONSE
psql -c "CREATE USER $DB_USER LOGIN PASSWORD '$DB_PASS'"

echo "";
echo -e "\033[92m\033[1m Created User Successfully\033[0m"
echo "";

echo -e "\033[96m Creating DATABASE $DB_NAME \033[0m"

##TODO ADD ERROR HANDLING FOR DB IF IT ALREADY EXISTS
##TODO ADD HANDLING TO HIDE NATIVE POSTGRES RESPONSE
psql -c "CREATE DATABASE $DB_NAME OWNER $DB_USER"

echo "";
echo -e "\033[92m\033[1m Created Database Successfully\033[0m"
echo "";
