---
    title: Install PostgreSQL
---

#### By `adriatic`

<p align="left">
<img width="80" alt="image" src="https://user-images.githubusercontent.com/2712405/169575412-041fa3e9-0fb6-4550-8599-1c056b32fc32.png"/>
<br/>
</p>

___

## Summary

- Use the article [Installing PostgreSQL with the Graphical Installation Wizard](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installer/02_installing_postgresql_with_the_graphical_installation_wizard/) combined with the original [PostgreSQL documentation](https://www.postgresql.org/docs) to show how to install PostgreSQL locally on MacOS.
- Verify this intallation by changing the [Example Repo](https://redwoodjs.com/docs/tutorial/intermission#using-the-example-repo-recommended) to use the local postgreSQL repository.

___

## Introduction

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

## Download the installer

Fetch the installed from the [PostgreSQL EDB (enterprise db)](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) website as shown below:

<p align="center">
<img width="400" alt="image" src="https://user-images.githubusercontent.com/2712405/175185159-2beca5f6-3082-4b3f-84c6-5630ee9f4bb1.png"/>
<br/>
<b>Use version 14.4, for macOS</b>
</p>
<br/>

The downloaded file is `postgresql-14.4-1-osx.dmg` (size 303.2 MB).

___

## Using the installer

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

## Create a database

Start by launching the pgAdmin tool (it was added to the launchpad during the PostgreSQL installation)

<p align="center">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/2712405/175355704-cc92bbe9-8115-4736-a8f9-e2332144d765.png"/>
<br/>
<b>Starting pgAmin tool</b>
</p>
<br/>

Then

<p align="center">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/2712405/175750162-b513e189-f34c-47fe-905b-77549d35896f.png"/>
<br/>
<b>Create new database for Redwood Blog application</b>
</p>
<br/>

Observe that this database's owner is "rwadmin" - this info will be used later in In order to save this database see the screenshot below:

<p align="center">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/2712405/175750547-191c7d59-dca3-4a19-bdd4-cf1b0bde72e1.png"/>
<br/>
<b>Save this new database</b>
</p>
<br/>

Note that the reference button does not show on this screenshot. Click on that button results with

<p align="center">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/2712405/175750626-c1f9ec33-c400-41fd-8290-58a8ad3ad10d.png"/>
<br/>
<b>Save (backup) the new database </b>
</p>
<br/>

___

## verification of the database installation correctness

To verify the correct PostgresQL installation we will use a well-known [Redwood Blog Application](https://redwoodjs.com/docs/tutorial/intermission#using-the-example-repo-recommended) and modify it to use PostgreSQL database instead of the default SQLIte). We will do this in several steps

### 1. Create the [Example Repo application (aka Redwood Blog)](https://redwoodjs.com/docs/tutorial/intermission#using-the-example-repo-recommended)

In order to build this application we will start with the RedwoodJS Tutorial at [this paragraph](https://redwoodjs.com/docs/tutorial/intermission#using-the-example-repo-recommended). Run the following commands in your terminal (the current directory should be similar to `~/dev/work/redwood/rw-community/redwood-tutorial-postgresql/`) and observe that we named the clone `redwood-tutorial-postgresql`. That will allow us to first build this [Redwood Tutorial App](https://github.com/redwoodjs/redwood-tutorial#redwood-tutorial-app) the standard way as explained in the [setup](https://github.com/redwoodjs/redwood-tutorial#setup) section (just to verify that we have all needed piece needed to build this app from sources)

```
git clone https://github.com/redwoodjs/redwood-tutorial 
cd redwood-tutorial-postgresql
yarn install
yarn rw prisma migrate dev
yarn rw prisma db seed
yarn rw g secret
```

Note that the command `yarn rw prisma db seed` is implicitly included in the command  `yarn rw prisma migrate dev` [issue #64](https://github.com/redwoodjs/redwood-tutorial/issues/64)

### 2. Show where are the type and schema of the database defined

Running the command `yarn rw prisma migrate dev` results with the following information to console:

```
Running Prisma CLI...
$ yarn prisma migrate dev --schema /Users/nik/dev/work/redwood/rw-community/redwood-tutorial-postgresql/api/db/schema.prisma

Prisma schema loaded from api/db/schema.prisma
Datasource "db": SQLite database "dev.db" at "file:./dev.db"

SQLite database dev.db created at file:./dev.db

Applying migration `20210222013102_init_database`
Applying migration `20220208231150_create_user`

The following migration(s) have been applied:

migrations/
  └─ 20210222013102_init_database/
    └─ migration.sql
  └─ 20220208231150_create_user/
    └─ migration.sql

Your database is now in sync with your schema.
```

This step created the database as a SQLite database at "file:./dev.db" (check [Getting Dynamic](https://redwoodjs.com/docs/tutorial/chapter2/getting-dynamic) section of the RedwoodjS Tutorial for details)

<p align="center">
<img width="300" alt="image" src="https://user-images.githubusercontent.com/2712405/175622818-17513f41-72fb-4253-82e6-b156af8235c9.png"/>
<br/>
<b>Everything related to database</b>
</p>
<br/>

___

### 3. Replace the SQLite with Postgresql database

We already named the app to be `redwood-tutorial-postgresql`, so the app we are build will have the correct name. To switch the database we need to edit definition of the provider variable in the file [schema.prisma](https://github.com/redwoodjs/redwood-tutorial/blob/main/api/db/schema.prisma) to be:

```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

The format of the "DATABASE_URL" enviroment variable (for our locally installed database)

DATABASE_URL=postgresql://postgres:0000@localhost:5432/mydb
___
___
