FROM node:lts

LABEL maintainer="Vinicius Camboim"

# Create the workdir
RUN mkdir /app

# Set our path as the main directory
WORKDIR /app

# Copy our code into the container
COPY . .
