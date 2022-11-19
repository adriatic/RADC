---
title: Setup actions
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

## 2. Setup the Chrome debugger

We are introducing the latest approach available since August 2022 which greatly simplifies access to [Authored and Deployed code](https://developer.chrome.com/blog/devtools-modern-web-debugging/#authored-versus-deployed-code)
as explained in the article [Modern web debugging in Chrome DevTools](https://developer.chrome.com/blog/devtools-modern-web-debugging/).

Having the Redwood Blog app running in the browser (Image 1, above), invoke the DevTools from the browser menu by pressing the F12 key (the DevTools panel is set to be outside and on the left the browser window as shown on the image 2)

<p align="center">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/2712405/196010017-9ea1b9c8-4165-44fd-93d2-8913bc57fa16.png"/>
<br/>
<b>Image 2 - invoking DevTools panel to be outside the browser</b>
</p>
<br/>

Click on the Devtools settings icon, then select the Experiments category and click the "Group sources into Authored and Deployed trees" checkbox, as shown on the image 3 below:

<p align="center">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/2712405/196014827-d2b87557-faa2-4e14-9461-49ded24f513d.png"/>
<br/>
<b>Image 3 - select "Group sources into Authored and Deployed trees"</b>
</p>
<br/>

**Note**: the browser panel with Redwood Blog is placed next to the devtools panel only as a convenience (so you can switch to the browser window and restart the application for example). Having just a single monitor, you can do everything on the devtools panel alone (closing the browser). Alternatively the layout shown on the image 4 below, shows the browser panel mostly covered by the DevTool panel.

**Note:** the **[Sources panel](https://developer.chrome.com/docs/devtools/sources/)** is selected on the top menu bar (make sure to learn about all new features available, like [view files](https://developer.chrome.com/docs/devtools/sources/#files), [edit CSS and JavaScript](https://developer.chrome.com/docs/devtools/sources/#edit), [Create, save, and run Snippets](https://developer.chrome.com/docs/devtools/sources/#snippets) and [Set up a Workspace](https://developer.chrome.com/docs/devtools/sources/#workspace).

<p align="center">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/2712405/196050087-a8d60006-7347-4152-b5e0-be2a9a9520a3.png"/>
<br/>
<b>Image 4 - Four important areas of the sources panel used in app debugging </b>
</p>


#### Area 1 
shows the application tree view in two formats ***Authored** and **Deployed**. We will use the **Authored** view in the subsquent descriptions of the debugging exercises.

#### Area 2
depicts the source code view of the item selected in the application tree view (**Area 1**). The source code is rendered as originaly written Javascript / Typescript code. 
#### Area 3 
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
#### Area 4
This is the browser rendering the app, partially hidden behind the DevTools panel.

---

## 3. Example of use

Let's finish this Setup DevTools debugger by presentig a snapshot from the example debugging session where we want to step through the BlogLayout.js layout component. In order to illustrate the stepping process, we will set the brekpoint at the [line 57](https://github.com/redwoodjs/redwood-tutorial/blob/main/web/src/layouts/BlogLayout/BlogLayout.js#L57). This situation, rendered by the Chrome debugger is depicted on Image 5, below:

<p align="center">
<img width="900" alt="image" src="https://user-images.githubusercontent.com/2712405/196282692-b6740f8a-dc77-4aa1-8c3b-9978a96e5fa9.png"/>
<br/>
<b>Image 5 - example debugging BlogLayout.js component </b>
</p>
<br/>

Red marker 1 shows the **authored** source tree, with the component `BlogLayout.js` presented in the source panel (red marker 2). Note that the only breakpoint is set at line 57, which is also shown i the breakpoints list (red marker 3). Lastly the top of the right panel (detailed information about the context of the currently hit breakpoint) states that the debugger is paused (becuse it hit the breakpoint at line 57). 

The next three screenshots show the Local scope, the Closure and Global scope at this breakpoint

<p align="center">
<img width="900" alt="image" src="https://user-images.githubusercontent.com/2712405/196292853-5c353186-095e-4a04-8f90-7f1bbf871c7c.png"/>
<br/>
<b>Image 6 - Local scope </b>
</p>
<br/>

<p align="center">
<img width="900" alt="image" src="https://user-images.githubusercontent.com/2712405/196293625-86da4e4d-079a-4c1b-b833-1116f61da7a7.png"/>
<br/>
<b>Image 7 - Closure </b>
</p>
<br/>

<p align="center">
<img width="900" alt="image" src="https://user-images.githubusercontent.com/2712405/196308749-ca52dbaf-d28b-41ac-95b6-6632e39490fa.png"/>
<br/>
<b>Image 8 - Global scope </b>
</p>
<br/>

In addition to this information we could define a set of watch variables, watch / breakpoint on threads, set DOM breakpoints, XHR/fetch breakpoints, set Event listener breakpoints and few other pieces of information. The section on using the Chrome debugger for tracing Authentication code in our [debugging target](https://rw-community.org/app%20management/debugging/setup#1-prepare-the-debugging-target) application provides more details on using these debugger features. 


TODO


---

---

## 4. Setup Visual Studio Code debugger

<br/>

<p align="left">
<img width="80" alt="image" src="https://user-images.githubusercontent.com/2712405/169575412-041fa3e9-0fb6-4550-8599-1c056b32fc32.png"/>
<br/>
</p>


