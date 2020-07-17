## post-diff
A lightweight reporting and regression tool for API testing built on [newman](https://www.npmjs.com/package/newman).

### Contents
  1. [Introduction](#1-introduction)
  2. [Dependencies](#2-dependencies)
  3. [Building from source](#3-building-from-source)
  4. [post-diff tools](#4-running-post-diff-tools)
  5. [Bug Reporting](#5-bug-reporting)

#### 1. Introduction
**post-diff** is a lightweight [newman](https://www.npmjs.com/package/newman) reporting tool with diff / regression capabilities over postman environments. post-diff can be run as a cli or as a web-app using results of collection runs.
````shell
# Installing post-diff

foo@bar:~$ npm install post-diff
foo@bar:~$ post-diff --help
````
#### 2. Dependencies
    node >= 12.18.2   [https://nodejs.org/en/]
    npm >= 6.14.6     [https://www.npmjs.com/package/npm]
    newman >= 5.1.2   [https://www.npmjs.com/package/newman]
    chalk >= 4.1.0    [https://www.npmjs.com/package/chalk]
#### 3. Building from source
````shell
foo@bar:~$ npm install
````
#### 5. Bug Reporting
Plese use [this](https://github.com/niharmaheshwari/post-diff/issues) channel for reporting bugs or requesting features.
