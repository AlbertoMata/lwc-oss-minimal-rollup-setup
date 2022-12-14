# LWC-OSS Minimal Rollup Setup

This code repository intends to be an example of how to build a minimal static
`lwc-oss` site served by using `express` and bundled with `rollup`. 

## Quickstart

First, install all `dependencies` and `devdependencies` locally:

```
npm install
```

Run a local server in port 5000:

```
npm run dev
```
## Structure

The site is designed using a basic client-server architecture keeping the file
structure simple but organized. Web architects may follow a different folder
structure, but the intention is to provide a basis for future templates. The
scripts establish a clear difference between a dev environment and a production
one.


## Dependencies

A minimal set of dependencies were added to the `package.json`, just enough to
keep the website up and running. As new versions for these dependencies are
delivered by package maintainers and Salesforce, the structure might change.
Also, if new features are needed to assure basic security or functionality,
we'll add new packages. 

## Bundler

We are using `rollup` for bundling purposes since it can set the project up and
running with a minimal set of dependencies, the config script might get more
complex in future releases.

## Deployment

There are no deployment details yet, but we intend the site can run in an IaaS
instance like an `aws-ec2`. Future versions will take care of this topic and
suggestions are welcomed. 

