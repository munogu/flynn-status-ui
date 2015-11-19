# Flynn Status UI

A simple interface for visualizing flynn cluster status.

## Getting started

To get started with Flynn Status UI follow the instructions below:

```
# Clone git repository
git clone git@github.com:jiabin/flynn-status-ui.git

# Duh...
cd flynn-status-ui

# Create flynn application
flynn create status-ui

# (Optional) Set flynn cluster domain
# Defaults to "demo.localflynn.com"
# Vagrant users may skip this step
flynn env set FLYNN_DOMAIN=flynn.example.com

# (Optional) Set application title
# Defaults to "Flynn"
flynn env set TITLE="Acme Inc."

# Deploy application
git push flynn master
```

## Reporting an issue or a feature request

Issues and feature requests related to this project are tracked in the Github issue tracker: https://github.com/jiabin/flynn-status-ui/issues
