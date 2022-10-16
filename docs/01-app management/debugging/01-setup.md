---
title: Setup
---

## 1. Prepare the debugging target

First we need an application to be used as a debugee (app being debugged). Rather than creating such application sufficiently complex to illustrate debugging practices, we will use the **_well known_** application, built in the course of the [Redwood Tutorial](https://redwoodjs.com/docs/tutorial/foreword). This application (Redwood Blog) exists [in this repository](https://github.com/redwoodjs/redwood-tutorial), and we will build it using the information from [what's Next](https://redwoodjs.com/docs/tutorial/intermission#whats-next) Redwood Tutorial section.

Make a local clone and run it, using the commands defined in the section [using the example repo](https://redwoodjs.com/docs/tutorial/intermission#using-the-example-repo-recommended) of the Redwood Tutorial. The commands to build this app are copied below for your convenience

```
git clone https://github.com/redwoodjs/redwood-tutorial.git
cd redwoodblog
yarn rw prisma migrate dev
yarn rw prisma db seed
yarn rw g secret
yarn rw dev
```

resulting with the front end of the Redwood Blog application running in the browser

<p align="center">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/2712405/196008009-7aa88b67-0470-46ef-a7b6-a0167cda06bc.png"/>
<br/>
<b>Image 1 - running `yarn rw dev` in the terminal (on the left)</b>
</p>
<br/>

---

### 2. Setup the (Chrome) DevTools debugger

We are introducing the latest approach available since August 2022 which greatly simplifies access to [Authored and Deployed code](https://developer.chrome.com/blog/devtools-modern-web-debugging/#authored-versus-deployed-code)
as explained in the article [Modern web debugging in Chrome DevTools](https://developer.chrome.com/blog/devtools-modern-web-debugging/).

Having the Redwood Blog app running in the browser (Image 1, above), invoke the DevTools from the browser menu by pressing the F12 key (the DevTools panel is set to be outside and on the left the browser window as shown on the image 2)

<p align="center">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/2712405/196010017-9ea1b9c8-4165-44fd-93d2-8913bc57fa16.png"/>
<br/>
<b>Image 2 - invoking DevTools panel to be outside the browser</b>
</p>
<br/>

Click on the Devtools settings then select the Experiments category and click the "Group sources into Authored and Deployed trees" checkbox, as shown on the image 3 below:

<p align="center">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/2712405/196014827-d2b87557-faa2-4e14-9461-49ded24f513d.png"/>
<br/>
<b>Image 3 - select Group sources into Authored and Deployed trees</b>
</p>
<br/>


Note: the browser panel with Redwood Blog is placed next to the devtools panel only as a convenience (so you can restart the application for example). Having just a single monitor, you can do everything on the devtools panel alone (closing the browser). Alternatively the layout shown on the image 4 below, shows the browser panel mostly covered by the DevTool panel.

Note also that the Sources panel is selected on the top menu bar.

<p align="center">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/2712405/196050087-a8d60006-7347-4152-b5e0-be2a9a9520a3.png"/>
<br/>
<b>Image 4 - Four important areas of the sources panel used in app debugging </b>
</p>
<br/>
## Area **1** 
shows the application tree view in two formats ***Authored** and **Deployed**. We will use the **Authored** view in the subsquent descriptions of the debugging exercises.

## Area **2** 
depicts the source code view of the item selected in the application tree view (**Area 1**). The source code is rendered as originaly written Javascript / Typescript code. 
## Area **3** 
presents the detailed information about the context of the currently hit breakpoint:

- list of defined watch variables
- list of existing breakpoints
- current application scope
- call stack
- list of enabled XMR/fetch breakpoints
- list DOM breakpoints
- list of global listeners
- list of event listeners breakpoints
- list of CSP violation breakpoints
## Area **4**
This is the browser, partially hidden behind the DevTools panel.

---
---

### 3. Setup Visual Studio Code debugger

<br/>

WIP ...
