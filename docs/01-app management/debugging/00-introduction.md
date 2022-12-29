---
title: Introduction
---

# Introduction

This section on Redwood applications debugging is organized as a set of three chapters. All the information presented in this document extends the sections [Debugger information](https://redwoodjs.com/docs/project-configuration-dev-test-build#debugger-configuration) from the RedwoodJS tutorial application.

We are describing the concept of debugging RedwoodJS applications using two different tools (Chrome and VSCode debuggers), skipping several alternatives. We will also skip the use of Chrome in a distributed setup, meaning that we will consider only the case of debugging the front end of the RedwoodJS application. The next two cases, A and B briefly describe our intent 

## Case A: Using Chrome debugger
The simplest use case scenario is to start the target application from the Terminal (use the command `yarn rw dev`). This results with

  <p align="center">
  <img width="700" alt="image" src="https://user-images.githubusercontent.com/2712405/196008009-7aa88b67-0470-46ef-a7b6-a0167cda06bc.png"/>
  <br/>
  <b>Image 1 - running `yarn rw dev` in the terminal (shown on the left)</b>
  </p>
  

Please check the section [Setup the Chrome debugger](https://rw-community.org/app%20management/debugging/setup#2-setup-the-chrome-debugger) for details explaining the final debugging configuration shown below:

<p align="center">
<img width="625" alt="image" src="https://user-images.githubusercontent.com/2712405/208320772-3bd7e7e3-8996-4d1b-a78e-0980426c373c.png"/>
<br/>
<b>Image 2 - Chrome debugger based configuration</b>
</p>
<br/>

---

## Case B: Using VSCode debugger

The difference between case A (debugging with Chrome Devtools debugger) and using VSCode debugger is in the means of using Chrome in such debugging session. This is the workflow to be used:

1. Start the VSCode from the terminal via `vscode .` command, making sure to first set the current directory to the folder that contains you project's parts (In my case)
---