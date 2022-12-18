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

## 2. Setup the Chrome debugger

We are describing the latest approach available since August 2022 which greatly simplifies access to [Authored and Deployed code](https://developer.chrome.com/blog/devtools-modern-web-debugging/#authored-versus-deployed-code)
as explained in the article [Modern web debugging in Chrome DevTools](https://developer.chrome.com/blog/devtools-modern-web-debugging/). We will use the setup depicted below, and explained immediately after:

<p align="center">
<img width="625" alt="image" src="https://user-images.githubusercontent.com/2712405/208278318-8de94e4e-65a4-4835-b92a-7b4fbe49d74c.png"/>
<br/>
<b>Image 1:</b> <br/>
Invoking `yarn rw dev` in the terminal (Red marker 1)<br/>
starts the browser running the blog app (Red marker 2)<br/>
Devtools panel (Red marker 3) started as explained below<br/>

</p>
<br/>

Having the Redwood Blog app running in the browser (Image 1, above), invoke the DevTools from the browser menu by pressing the F12 key (the DevTools panel is set to be outside and on the left of the browser window, as shown on the image 2)

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

---

## 2. Definition of a typical session (Image 4 below)

The Terminal (Red marker 1, left-most) is nearly completely hidden, since we will not use it once the Blog app is started (`yarn rw dev`). Similarly, the Browser (Red marker 2) exposes only the "Reload this page" button, that will be used whenever we want to restart the debug session.
The layout shown on the image 4 below, renders the browser panel mostly covered by the DevTool panel, where all debugging action takes place

**Note:** the green rectangle marked **[Sources panel](https://developer.chrome.com/docs/devtools/sources/)**  is selected on the top Devtools menu bar. In order to ensure maximim benefits of the Chrome Debugger (Devtoos) learn about all new features available, like [view files](https://developer.chrome.com/docs/devtools/sources/#files), [edit CSS and JavaScript](https://developer.chrome.com/docs/devtools/sources/#edit), [Create, save, and run Snippets](https://developer.chrome.com/docs/devtools/sources/#snippets) and [Set up a Workspace](https://developer.chrome.com/docs/devtools/sources/#workspace).

<p align="center">
<img width="625" alt="image" src="https://user-images.githubusercontent.com/2712405/208320772-3bd7e7e3-8996-4d1b-a78e-0980426c373c.png"/>
<br/>
<b>Image 4</b>
</p>
<br/>

**Area 1** (Green marker 4) <br/>
Shows the application tree view in two structures - **Authored** and **Deployed**. We will use the **Authored** view in the subsquent descriptions of the debugging exercises.

**Area 2** (Green marker 5) <br/>
Debugger rendering of the selected code (`Article.js`) in the Authored view (Green marker 4) section of the source tree. 

depicts the source code view of the item selected in the application tree view (**Area 1**). The source code is rendered as originaly written Javascript / Typescript code. 

**Area 3** (Green marker 6) <br/>
presents the detailed information about the context of the currently hit breakpoint:

- list of defined watch variables
- list of existing breakpoints
- current application scope
- call stack
- list of enabled XMR/fetch breakpoints
- list of DOM breakpoints
- list of global listeners
- list of event listeners breakpoints
- list of CSP violation breakpoints

---

## 3. Example of use

Let's finish this Setup DevTools debugger section by showing hot to set a breakpoint in the [BlogLayout.js layout component](https://github.com/adriatic/redwood-tutorial/blob/main/web/src/layouts/BlogLayout/BlogLayout.js). In order to illustrate the stepping process, we will set the brekpoint at the [line 57](https://github.com/redwoodjs/redwood-tutorial/blob/main/web/src/layouts/BlogLayout/BlogLayout.js#L57). This situation, rendered by the Chrome debugger is depicted on Image 5, below:

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

## 5. Example of use

<br/>

<p align="left">
<img width="80" alt="image" src="https://user-images.githubusercontent.com/2712405/169575412-041fa3e9-0fb6-4550-8599-1c056b32fc32.png"/>
<br/>
</p>


