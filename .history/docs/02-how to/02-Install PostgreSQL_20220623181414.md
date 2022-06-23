---
    title: Install PostgreSQL
---

#### By `adriatic`

<p align="left">
<img width="80" alt="image" src="https://user-images.githubusercontent.com/2712405/169575412-041fa3e9-0fb6-4550-8599-1c056b32fc32.png"/>
<br/>
</p>

___

### Summary

- Use the article [Installing PostgreSQL with the Graphical Installation Wizard](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installer/02_installing_postgresql_with_the_graphical_installation_wizard/) combined with the original [PostgreSQL documentation](https://www.postgresql.org/docs) to show how to install PostgreSQL locally on MacOS.
- Verify this intallation by changing the [Example Repo](https://redwoodjs.com/docs/tutorial/intermission#using-the-example-repo-recommended) to use the local postgreSQL repository.

___

### Introduction

This article is written for all people who had problems following the Redwoods documentation on how to install the PostgreSQL [database](https://redwoodjs.com/docs/tutorial/chapter4/deployment#the-database), using [Brew](https://brew.sh/).

If you installed PostgreSQL using Brew and have problems with this installation, start by uninstalling PostgreSQL using Brew. To do that, follow the process described in [Completely uninstalling a Homebrew installation of PostgresQL](https://blog.testdouble.com/posts/2021-01-28-how-to-completely-uninstall-homebrew-postgres/#completely-uninstalling-a-homebrew-installation-of-postgres) (or any similar article).
The assumption now is that you do not have PostgresQL installed on your computer - however, if you are trying to remove a failed installation being dscribed here, use the two scripts `unistall-pgagent` and `uninstall-postgresql` which are in the macOS library (~/Library/PostgreSQL/14) as shown below

<p align="center">
<img width="400" alt="image" src="https://user-images.githubusercontent.com/2712405/175183122-60432679-0d18-414b-87e1-a71ddbf41f9f.png"/>
<br/>
<b></b>
</p>
<br/>

**Note:** using these uninstallers may not be trivially simple, since these are shell scripts - not applications, so you will have to work in it a bit :smile:.

### Download the installer

Fetch the installed from the [PostgreSQL EDB (enterprise db)](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) website as shown below:

<p align="center">
<img width="400" alt="image" src="https://user-images.githubusercontent.com/2712405/175185159-2beca5f6-3082-4b3f-84c6-5630ee9f4bb1.png"/>
<br/>
<b>Use version 14.4, for macOS</b>
</p>
<br/>

The downloaded file is `postgresql-14.4-1-osx.dmg` (size 303.2 MB).

___

### Using the installer

It should be installed using the information in the document [Installation of PostgreSQL on Mac OS](https://www.enterprisedb.com/postgres-tutorials/installation-postgresql-mac-os). For your convenience here is alse the link to [PostgresQL tutorials](https://www.enterprisedb.com/postgres-tutorials).

Double-click on the `postgresql-14.4-1-osx.dmg` file in the Finder, will result (after supplying the needed authorization to macOS) with the first page of the Setup Wizard

<p align="center">
<img width="500" alt="image" src="https://user-images.githubusercontent.com/2712405/175196813-4aa3aa1c-12d0-4bb9-bff4-1e6553c09979.png"/>
<br/>
<b>PostgresQL Setup Wizard</b>
</p>
<br/>

- accept the default installation directory (`/Library/PostgreSQL/14`)
- accept the offer to install all four item (server, pgadmi, stack builder and command line tools)
- accept the default data directory (`/Library/PostgreSQL/14/data`)
- set the username and password for the `postgres` superuser (make sure to save this password somewhere safe). Note that the superuser is already set and yo cannot change it.
- accept the port 5433
- accept the default locale

These choices result with the below listed settings - and the installer starts its job.
```
Installation Directory: /Library/PostgreSQL/14
Server Installation Directory: /Library/PostgreSQL/14
Data Directory: /Library/PostgreSQL/14/data
Database Port: 5433
Database Superuser: postgres
Operating System Account: postgres
Database Service: postgresql-14
Command Line Tools Installation Directory: /Library/PostgreSQL/14
pgAdmin4 Installation Directory: /Library/PostgreSQL/14/pgAdmin 4
Stack Builder Installation Directory: /Library/PostgreSQL/14
Installation Log: /tmp/install-postgresql.log
```

<p align="center">
<img width="500" alt="image" src="https://user-images.githubusercontent.com/2712405/175353497-2ced3bbc-6383-4934-8374-a1915048e6c7.png"/>
<br/>
<b>Finished installation</b>
</p>
<br/>


Click on the Finish button, results with the prompt for `Stack Builder` installation. (see [this page](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installer/03_using_stackbuilder/) for explanation of this tool)

<p align="center">
<img width="500" alt="image" src="https://user-images.githubusercontent.com/2712405/175356330-cd7f7a73-de30-4dc6-b22d-e5bb7431066d.png"/>
<br/>
<b>Start the Stack Builder</b>
</p>
<br/>

Be sure to select the local PostgreSQL instance before continuing the installation of the Stack Buider tool. Accept the default selections for the applications to be installed.

___

### Create a database

Start by launching the pgAdmin tool (it was added to the launchpad during the PostgreSQL installation)

<p align="center">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/2712405/175355704-cc92bbe9-8115-4736-a8f9-e2332144d765.png"/>
<br/>
<b>Starting pgAmin tool</b>
</p>
<br/>

Then

<p align="center">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/2712405/175394029-013bd985-da38-4127-87d4-e112dcd72744.png"/>
<br/>
<b>Create new database for stripe</b>
</p>
<br/>

In order to save this database see the screenshot below:

<p align="center">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/2712405/175395748-b769f09c-bd62-46ba-88b1-33795bff1cc5.png"/>
<br/>
<b>Save this new database</b>
</p>
<br/>

Note that the referrence button does not show on this screenshot. Click on that button results with

<p align="center">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/2712405/175396844-98e290fe-fee4-4e88-8be9-a448cfdabf16.png"/>
<br/>
<b>Save (backup) the new database </b>
</p>
<br/>

___

### Comming next

- verification of the installation correctness and completeness
- installation of the [Example Repo](https://redwoodjs.com/docs/tutorial/intermission#using-the-example-repo-recommended)
  
___
___
