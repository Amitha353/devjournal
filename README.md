# Class discussion (20)

<img src="Images/DiscussionPic_HW2.png" width=800 height=400 /><br/>

I have joined the discussion on Idempotency through 'ams2' voice channel on 16th February,2021 at 8 P.M. <br/>

We have discussed that idemptotency is nothing but attaining the same result even after performing same action repeatedly.<br/>
Some of the examples of idemptotent operations we discussed included:<br/>
<ul>
  <li>HTTP GET: It will fetch the same result again and again if we hit the API repeatedly unless somebody changes the data from the backend.</li>
   <li>HTTP Delete</li>
  <li>More of a real life example , where we use the elevator to reach a floor </li>  
</ul>

Its very interesting to know the application of idempotency in somebody's research work. There is an application to analyse how to teach students  where if you apply the same rules again and again, we get the same facts.It is so relatable.<br/><br/>

Some of the examples of non-idempotent operations we discussed included:<br/>
<ul>
  <li>The HTTP POST in rest APIs (when requested repeatedly leads to side effects)</li>
  <li>Situations where we copy the same file and multiple copies get created etc.</li>
  </ul>
 We also disscussed about living vs immutable infrastructure and its advantages and disadvantages.<br/>

# Answer the following conceptual questions (40)
**1.What are the core activities of traditional configuration management?**<br/>
The following are the core activities of traditional configuration management:<br/>
<ul>
  <li><b>Configuration Identification:</b>This activity includes identification of the configuration items like source code,tests etc- defining the scope of the software system, preformulating the strategy to labeling the items - versioning, baselines - formally approved versions, defining the relationships among the items etc.</li>
  <li><b>Software Configuration Control:</b> This activity involves managing the changes to the configurable items. It includes determining what changes to make, the Software Configuration control board - the authority approving the changes, implementation of the changes, what deviations and waivers can be there etc.
 <li> <b>Enabling Variations:</b> More then one approved changes may be there at a time. This activity includes how the approved changes are tracked using appropriate version and baselines (enabling variations) that are executed simultaneously. </li>
  <li><b>Maintaining Quality:</b></li> The approved changes undergo software quality verification which is nothing but ensuring whether only approved changes have been included or not.<li>
<b>Software Audit/ Traceability</b>: This activity involves the scrutinizing whether the deliverables are in sync with the standards, specification or the requirements stated. This traceability can be functional (whether the feature works according the requirement) or physical( whether it matches the design).</li>
</ul>

**2.What are some components of modern configuration management?**<br/>
Ans.)The following are some of the components of modern configuration management:<br/>
<ul>
  <li> <b>Git & Branches:</b> Git is being used as the source/version control to track and maintain the changes we do. It also facilitates collaboration.</li>
  <li><b>Package Managers,Build and Task Managers:</b>Makes installation of  all system/software dependencies and the necessary binaries easy.</li>
  <li><b>Inventory/Configuration scripts and tools:</b>Inventory tracking includes tracking of all the assests we own like keys,passwords etc. Using configuration scripts with help of tools like Ansible, we can perform our tasks and commands seamlessly. </b></li>
  <li><b>Infrastructure Update Patterns:</b> Choosing the right infrastructure based on the needs like the immutable infrastructure(provisions new image itself when updates are needed) and living infrastructure(continuous updates) so that we can run the things efficiently.</li>
  <li><b>Testing and compliance:</b>Ensuring that environment is capable of supporting various services like GPU support and also provides the expected service.Also, verifying that the environment can reach other networks etc.</li>  
</ul>

**3.How does modern tooling and software development processes change configuration management for the better?**<br/>
Ans.) The following are some of the ways to make the configuration management better when compared to the traditional practices:<br/>
<ul>
<li><b>Source Control:</b> Instead of manual listing of files in the document, we have source control tools like git etc. these days to identify the configurable items as well as manage the changes made. It is also an important point to note that, its not only the code, we might check in but also the documentations, tests, etc. as well.</li>
<li><b>Enabling Variations:</b> In the original processes, we used to create manual baselines to enable variations - in the documents.There were no tools available. But, with the modern source control tools, we have the branches and feature flags to enable variations and improve efficiency.</li>
<li><b>Quality & Traceability:</b> With the continuous deployment pipelines(automated tests triggered after the code changes) and with the better code review - development practices, we can ensure better quality and also work product compliance with the software requirements and standards. </li>
</ul>

**4.What are some reasons why dependencies might be difficult to configure for a computing environment?**<br/>
Ans.) The following are some of the reasons why dependencies might to difficult to resolve:<br/>
<ul>
  <li><b>Name mismatch</b>-  can be a potential issue. We might want to install a package. For example, pip install 'package-name' and that might not install the modules that we intend to install.</li>
  <li><b>Transitive dependency:</b> To install a particular package, we need to install another package and so on. Even installation of package managers will suffer with this type of dependencies.</li>
  <li><b>OS Dependency:</b> The code we are trying to execute might be dependent on OS itself.</li>
  <li><b>Version Constraint:</b> For example, the software we are trying to use might need a particular version of Python etc. </li>
  <li><b>System Library:</b> Dependency on a particular system library which might unavailable or not installed while executing the code.</li>
  <li> Other dependencies can arise when file path name is hardcoded or credentials and services are missing etc.</li>
</ul>

**5.Why is idempotency useful for configuration scripts?**<br/>
Ans.) A script is said to be idempotent if it produces the same result without any unexpected behaviour no matter how many times we run it. It will ensure that the syatem reaches the desired state by informing the admin if the requested action will lead to a disruption. This feature is very useful for the configuration scripts in situations like, if there is a line in script that tries to add text to a file and if that file doesn't exist, it simply creates the file and ensures that the desired state is reached and goal is achieved. With idempotent scripts, if something fails in between, we will have the flexibility to rerun the script again, which is not the case with non-idempotent scripts where we should run from the point of failure.<br/><br/>
**6.Explain the difference between pull and push configuration models.**<br/>
Ans.)
| Push Based   | Pull Based |
| ------------- | ------------- |
| The configuration is pushed to the assets by the config server  | The configuration is pulled by the agents in the assets |
| Less enforcement of state - slow in updating the config of the assets  | Better Sync - Strict enforcement of state and compliance |
|Less complex as we don't need to run agents in asset|More complex because of the management of agents in the asset|
|Asset is managed by the config server centrally|Agent will register itself|


**7.Compare and contrast living infrastructure from immutable infrastructure.**<br/>
Ans.)
| Living Infrastructure   | Immutable Infrastructure |
| ------------- | ------------- |
| This infrastructure will be continuously updated to meet the on-demand needs   | If a change is needed, then a whole new set of infrastructure is provisioned |
| Unpredictable state - It keeps updating over time  | Predictable state - Instance with read-only image is maintained ensuring consistency,reliability |
|Configuration drift is expected if manual updates are allowed - affecting Idempotency |There is no configuration drift as the updates are not allowed|
|Quick updates are possible |Updates are slower due to additional setup and provisioning time|


**8.Explain the difference between provisioning and configuration management.**<br/>
Ans.) The following are few differences between Provisioning and Configuration Management:<br/>
<ul>
<li>Provisioning is nothing but getting your machine up - installing all the necessary software/libraries etc.. With the help of Provisioning tools we create,modify and delete infrastructure either through code or User interfaces.While Configuration managament is the way to track and control activities right from the time the system is up and running.It tracks the assests whether it is software or hardware at all times - keeps them up-to-date.</li>
  <li>Provisioning happens only once when the system allocation takes place while the configuration management is a repeated process to make sure that the system/ product reaches its desired state.</li>
  </ul>




**9.What impact does configuring a server to listen on 0.0.0.0 have? Why might this be a problem?**<br/>
Ans.) 0.0.0.0 is an invalid IP address. A non-routable one. If the server is listening on this address, it means that anyone can reach the server. We are allowing unlimited access to it. This will lead to the security issue. It is always better to restrict the usage in terms of who needs the access and allow only those connections to access it and connect. This way we might avoid the malicious activities happening out there - taking care of Improper Access Control.<br/><br/>

**10.What is an interesting thing you learned about research in configuration management?**<br/>
Ans.)Automatic detection of when the code snippet might fail is very fascinating to me. This is so much useful to alert the developer before upgrading the versions and what its impact might be. I also got to know the importance of the build data which is the backbone of this research.<br/>
It is very surprising to know that something like the Everything bagel images would even be attempted. What a maintainance nightmare it is!!<br/>
It is amazing and so such time saving as well to convert a bash command to ansible script. No need to take care of indentation and remember the module names etc. Just get the task done in seconds. This idea is terrific!<br/><br/>

# Answer the following questions about the CM workshop (40)
**1. How did you create a connection between between the configuration server and web server?**<br/>
Ans.)To establish a connection between the configuration server and the web server, we needs to generate a pair consisting of public and private keys on the host machine using ssh-keygen command. The public key needs to be added to the web server list of authorized keys while the private key needs to remain with the configuration server in a specific file, in our case web-srv. The private key is the configuration server's identity. With that key  when we try to ssh into the web server, with the command, ssh -i ~/.ssh/web-srv -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null vagrant@192.168.33.100 ls /, it will allow access as we have the corresponding valid private key. In this way the connection is established between the servers.<br/><br/>
**2. Did you have any problems getting this setup?**<br/>
Ans.) I faced the following issues while getting the setup done:<br/>
<ul>
  <li> I have named the private key file as web.srv instead of web-srv and that resulted in file web.srv not found error while trying to ssh into the web server.</li>
  <li> While trying to ssh into the web server, "UNPROTECTED PRIVATE KEY FILE" error popped up due to which the action was unsuccessful. The reason behind this error was that the access permissions were too open for all groups of users.</li>
</ul> 

**3. Why does the permission of the private key need to be changed?**<br/>
Ans.)If we take a look at the access permissions of the ssh directory's web-srv file, we can see that apart from the root user, the other groups also have the read and write permissions and also other web applications can read the private key file!! This becomes a security concern as the file can be misused leading to man in the middle attacks etc. Hence,the permissions of the file needs to be changed so that it can only be used by the vagrant user and to protect it .<br/><br/>
**4. If ssh can be used to execute remote commands, why not just use bash commands for CM?**<br/>
Ans.)Bash commands are very easy and flexible to use but they have few limitations while using them over ssh.<br/>
<ul>
  <li> The bash commands may be error-prone.</li>
  <li>Most of the commands are not idempotent. Considering we have a set of commands and if some command fails in between due to some network issues etc., all the other commands after that will fail. There may be a situation like, this failure is happening in only some machines leading to an unexpected behaviour which is worse. </li>
  <li>Configuration of the servers can also be a potential problem where we should repeatedly resume the configuration operations in the event of partial failure.</li>
</ul>

**5. What are some reasons why it is useful to have a configuration server.**<br/>
Ans.) The configuration server is very useful for performing the following tasks:<br/>
<ul>
  <li>Configuration server plays a crucial role in managing all our assets we need to tackle by provides centralized way to control them. </li>
  <li> It will be the one-stop shop to hold all the files we intend to manage.</li>
   <li> If we need to update the variables in different environments, then we can use the configuration server to automate the process and update them all at a time in one place. This increases efficiency.</li> 
  <li> We can modify the files on the remote machine through the configuration server easily by running ansible commands.</li> 
</ul>

**PART 3**<br/>

**1. What is your understanding of the yaml format?**<br/>
Ans.) The following are the basic points to be known to build and understand a yaml script:<br/>
<ul>
<li>yaml file can optionally start with --- and end with ... indicating the start and end of a document.</li>
<li>yaml mostly contains lists and this list may inturn be in the format of key/value pairs which are nothing but dictionaries or nested lists.</li>
<li>Dictionaries are represented as "key:value".</li>
<li>We can also represent dictionaries and list in a more abbreviated way such as:<br/> 

```
Skills:{Java: Intermediate,Python: Intermediate}
[English,Hindi, Tamil]
```
</li>
</ul>
With all these syntax rules into mind we can formulate a complex yaml script as follows:<br/>

```
---
# An employee record
name: Shruthi
Occupation: Student
employed: False
Languages:
  - English
  - Hindi
Skills:
  Java: Intermediate
  python: Intermediate 
education: |
  Bachelor of Technology
 Master of Computer Science
 ...
```

**2. What is the difference between a module and task in ansible?**<br/>
Ans.)Consider the following yaml script:<br/>

```
tasks:
    - name: Install nodejs
      apt: pkg='nodejs' state='present'
```

Here we can see that, we have modules name and apt defined under tasks.<br/>
A task is some sort of an action unit that triggers the modules defined inside it. While, the modules are like small programs which executes commands when called by tasks. Modules are the heart of ansible.These perform all the heavy duties. <br/>

**3. What are situations where you might use variables and templates in ansible?**<br/>
Ans.) Different servers may have different configuration settings. It would be inefficient to create static files for each server. This is one of the situation in which variables and templates in Ansible play a crucial role to avoid hardcoding as we will not always know the data before hand. <br/>

Consider the following template:<br/>

```
[client]
user=root
password={{root_db_password}}
local_infile=1
```

Template files hold all the configurations settings but dynamic values are passed to the variables thereby avoiding hardcoding.<br/> 

**4.What are some operators that enable idempotence in ansible tasks?** <br/>
Ans.) When using shell modules with the Ansible scripts, the operations will most likely not be idemptotent. For example, we would like to avoid a situation of downloading the file again and again without checking if it already exists. In such situations, we can use the following command to to enable idempotence.<br/><br/>
**when:** This is a conditional that tests and downloads the file only when it doesn't exist<br/>
Example:<br/>
```
tasks:
  - name: Configure SELinux to start mysql on any port
    ansible.posix.seboolean:
      name: mysql_connect_any
      state: true
      persistent: yes
    when: ansible_selinux.status == "enabled
```
**creates:** If the file we intend to download already exists, then this command will skip the execution of that particular step.<br/>

Exmaple:<br/>

```
- name: Run command if /path/to/database does not exist (with 'cmd' parameter)
  ansible.builtin.command:
    cmd: /usr/bin/make_database.sh db_user db_name
    creates: /path/to/database
```

References used:<br/>
https://docs.ansible.com/ansible/latest/collections/ansible/builtin/command_module.html#parameter-creates <br/>
https://docs.ansible.com/ansible/latest/user_guide/playbooks_conditionals.html <br/>

**5. Why are roles useful for organizing ansible playbooks?**<br/>
Ans.) As the project grows bigger and bigger, so do the playbooks in size. So, roles are critical to organize things out. <br/><br/>
Consider the following example of roles:<br/>

```
- roles/
  - setup/
    - tasks/
      - main.yml
    - templates/
      .my.cnf
- playbook.yml
```
We can divide the tasks into smaller sub-tasks and any other files like templates and include them under a role. We can seamlessly include these roles file in our playbook . The moment we trigger the roles, all our tasks will be executed which are linked to the respective roles. Instead of having a long list of tasks in the playbook,this is a great way to organize and avoid making the playbook messy. It will also be much clear for us to know what tasks are associated with a role.<br/>

