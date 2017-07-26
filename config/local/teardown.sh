#!/usr/bin/env bash

#
# Always run this command from the root directory
# Get environment variables.
#
source .env;

echo -e "\033[95m Tear it down! \033[0m"
echo -e "\033[95m Environment: \033[92m\033[1m$NODE_ENV\033[0m"
echo "";

echo -e "\033[96m Dropping DATABASE $DB_NAME \033[0m"

##TODO ADD ERROR HANDLING FOR USER IF ALREADY EXISTS
##TODO ADD HANDLING TO HIDE NATIVE POSTGRES RESPONSE
psql -c "DROP DATABASE $DB_NAME"

echo "";
echo -e "\033[92m\033[1m Dropped Database Successfully\033[0m"
echo "";

echo -e "\033[96m Remove Postgres User $DB_USER\033[0m"

##TODO ADD ERROR HANDLING FOR USER IF ALREADY EXISTS
##TODO ADD HANDLING TO HIDE NATIVE POSTGRES RESPONSE
psql -c "DROP USER $DB_USER"

echo "";
echo -e "\033[92m\033[1m Dropped User Successfully\033[0m"
echo "";