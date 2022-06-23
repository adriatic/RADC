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
The assumption now is that you do not have PostgresQL installed on your computer

### Download the installer

Fetch the installed from the [PostgreSQL EDB (enterprise db)](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) website. 
