# create_env_file.sh

# Get the Vercel assigned URL
VERCEL_URL=$(vercel env get VERCEL_URL)

# Write the environment variable to the .env file
echo "NEXT_PUBLIC_APP_URL=$VERCEL_URL" > .env
# Get the Vercel assigned URL

# Write the environment variable to the .env file
echo "NEXTAUTH_URL=$VERCEL_URL" > .env
