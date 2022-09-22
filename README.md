# in-progress

--------------

# dashboard with react and styled components

#### using my repos from github

## how to install dependencies:
`yarn`

## how to build:
`yarn build`

## how to Run:
`yarn dev`

-----------------------

## run with docker

### if you already have Makefile installed, just run:
`make run`

### if don't, just run:
`docker build --rm -t super-dev -f Dockerfile .`
#### then run:
`docker run -it --rm --name super-dev -p 3000:8080 super-dev`
#### to stop(kill):
`docker kill super-dev`
#### to remove:
`docker rm super-dev`