# Flynn Status UI

A simple interface for visualizing flynn cluster status.

## 1) Installation

Installing Flynn Status UI is a fairly simple process. Select one

 First make sure that you have a running Flynn cluster and follow one of the methods below:

### A) Using Flynn dashboard

To install using Flynn dashboard open the url below and follow the instructions on page

https://dashboard.foobar.flynnhub.com/github?org=jiabin&repo=flynn-status-ui&owner=jiabin&branch=master

- If you are using a custom domain to access your cluster, replace `foobar.flynnhub.com` with that domain!

- If you are using an auto-generated flynnhub subdomain, replace `foobar` with id assigned to your cluster!

> For Vagrant clusters: https://dashboard.demo.localflynn.com/github?org=jiabin&repo=flynn-status-ui&owner=jiabin&branch=master

### B) Using Flynn cli

To install using Flynn cli

```
# Clone git repository
git clone git@github.com:jiabin/flynn-status-ui.git && cd flynn-status-ui

# Create flynn application
flynn create status-ui

# (Optional) Set flynn cluster domain
# Defaults to "demo.localflynn.com"
# Vagrant users may skip this step
flynn env set FLYNN_DOMAIN=flynn.example.com

# Deploy application
git push flynn master
```

## 2) Configuration

Flynn Status UI stores config in environment variables.

### 2.1) Reference

| Key          | Description                              | Default value       |
|--------------|------------------------------------------|---------------------|
| FLYNN_DOMAIN | Flynn cluster domain                     | demo.localflynn.com |
| TITLE        | Application title                        | Flynn               |
| INTERVAL     | Check interval (in seconds)              | 30                  |
| TIMEOUT      | Status HTTP request timeout (in seconds) | 5                   |

### 2.2) Example

```
# You need to execute commands from application root
cd /path/to/flynn-status-ui

# Change application title
flynn env set TITLE="Acme Inc."

# Change check interval title
flynn env set INTERVAL=60
```

## 3) Development

Before installing Flynn Status UI make sure that you have node and npm installed.

```
# Install dependencies
cd /path/to/flynn-status-ui && npm install

# Run application
FLYNN_DOMAIN=flynn.example.com npm start
```


## 4) Reporting an issue or a feature request

Issues and feature requests related to this project are tracked in the Github issue tracker: https://github.com/jiabin/flynn-status-ui/issues
