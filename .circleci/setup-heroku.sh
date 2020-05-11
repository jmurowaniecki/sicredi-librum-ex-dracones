#!/bin/bash
#
# @author     @lauraturk
# @repository https://gist.github.com/lauraturk/93742fd34101a0f15b988f3d3b27104d
#

ssh-keyscan -H heroku.com >> ~/.ssh/known_hosts

# If you need access to the heroku CLI to run heroku commands in the deploy step add these lines:
mkdir -p /usr/local/lib /usr/local/bin
tar -xvzf heroku-linux-amd64.tar.gz -C /usr/local/lib
ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku

cat > ~/.netrc << EOF
machine api.heroku.com
  login $HEROKU_LOGIN
  password $HEROKU_API_KEY
EOF

cat >> ~/.ssh/config << EOF
VerifyHostKeyDNS yes
StrictHostKeyChecking no
EOF
