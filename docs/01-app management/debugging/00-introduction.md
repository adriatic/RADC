---
title: Introduction
---

# Introduction

This section on Redwood applications debugging is organized as a set of three chapters. All the information presented in this document extends the sections [Debugger information](https://redwoodjs.com/docs/project-configuration-dev-test-build#debugger-configuration) from the RedwoodJS tutorial application.

We are describing the concept of debugging RedwoodJS applications using two different tools (Chrome and VSCode debuggers), skipping several alternatives. We will also skip the use of Chrome in a distributed setup, meaning that we will consider only the case of debugging the front end of the RedwoodJS application

#### Case 1: Using Chrome debugger
The simplest use case scenario is to start the target application from the Terminal (use the command `yarn rw dev`) - resulting with

  <p align="center">
  <img width="700" alt="image" src="https://user-images.githubusercontent.com/2712405/196008009-7aa88b67-0470-46ef-a7b6-a0167cda06bc.png"/>
  <br/>
  <b>Image 1 - running `yarn rw dev` in the terminal (on the left)</b>
  </p>
  <br/>

Please check the section [Setup the Chrome debugger](https://rw-community.org/app%20management/debugging/setup#2-setup-the-chrome-debugger) for details explaining the final debugging configuration shown below:

#### Case 2: Using VSCode debugger

---

### 1. [Setup](https://rw-community.org/app%20management/debugging/setup):

- defining the [target application](https://rw-community.org/app%20management/debugging/setup/#1-prepare-the-debugging-target) for debugging
- [setting the chrome debugger up](https://rw-community.org/app%20management/debugging/setup/#2-setup-the-chrome-debugger)
- [brief explanation of Chrome debugger use](https://rw-community.org/app%20management/debugging/setup/#3-example-of-use)
- [setting the VSCode debugger up](https://rw-community.org/app%20management/debugging/setup/#4-setup-visual-studio-code-debugger)
- [brief explanation of VSCode debugger use](https://rw-community.org/app%20management/debugging/setup/#4-setup-visual-studio-code-debugger)

---

### 2. [Tracing](https://rw-community.org/app%20management/debugging/tracing-code)

---
### 3. [Debug techniques](https://rw-community.org/app%20management/debugging/debug-techniques)

<p align="left">
<img width="80" alt="image" src="https://user-images.githubusercontent.com/2712405/169575412-041fa3e9-0fb6-4550-8599-1c056b32fc32.png"/>
<br/>
</p>

---