#!/bin/bash

# Install Agent
echo "deb https://apt.buildkite.com/buildkite-agent stable main" | sudo tee /etc/apt/sources.list.d/buildkite-agent.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 32A37959C2FA5C3C99EFBC32A79206696452D198
sudo apt-get update && sudo apt-get install -y buildkite-agent

# INSERT AGENT TOKEN
sudo sed -i "s/xxx/INSERT_AGENT_TOKEN/g" /etc/buildkite-agent/buildkite-agent.cfg

# Start Agent
sudo systemctl enable buildkite-agent && sudo systemctl start buildkite-agent

# View logs
journalctl -f -u buildkite-agent
