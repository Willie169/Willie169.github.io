<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Android-Non-Root</title>
<link rel="stylesheet" href="styles.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS_HTML"></script>
<script src="script.js" defer></script>
</head>
<body>
<div class="navbar">
<div class="container">
<a href="https://willie169.github.io"><img src="img/Android_Non_Root.png" alt="Android Non Root" style="height: 40px;"></a>
<a href="https://github.com/Willie169"><img src="img/willie169.jpeg" alt="Willie169" style="height: 30px;"></a>
<a href="https://github.com/Willie169/Willie169.github.io"><img src="img/github.png" alt="Willie169" style="height: 30px;"></a>
<a href="https://github.com/Willie169/Android-Non-Root"><img src="img/Android_Non_Root.png" alt="Android Non Root" style="height: 30px;"></a>
<a href="https://github.com/Willie169/Android-Non-Root/releases/download/v1.0/com.willie.androidnonroot_10.apk"><img src="img/ic_launcher_round.webp" alt="app" style="height: 30px;"></a>
</div>
</div>
<div id="top"></div>
<div class="content">
<h1>Android-Non-Root</h1>
<p>In this tutorial called <strong>Android Non Root</strong>, we'll explore a range of powerful, open-source tools such as Termux, Shizuku, Tor, TrackerControl, InviZible Pro, QEMU, Andronix, and OpenSSL to enhance your Android device’s functionality, security, privacy, and customization without the need for root access.<br>
Please read the <a href="#hd1">Global Note</a> before you start or you may encounter errors.</p>
<hr>
<div id="table-of-contents">
<h2>Table of Contents</h2>
<ul id="toc-list">
</ul>
</div>
<hr>
<h2 id="globalnote">Global Note</h2>
<p>Many sections of the tutorial mention <strong>Termux</strong> and Linux. Read the tutorial about them in <a href="#termuxapowerfulterminalemulationwithanextensivelinuxpackagecollection">Termux: A Powerful Terminal Emulation with an Extensive Linux Package Collection</a>, <a href="#termuxgraphicalenvironmentwithvncserverandfluxboxoropenboxwindowsmanagerorxfcelxqtormatedesktopenvironment">Termux Graphical Environment with VNC Server, and Fluxbox or Openbox Windows Manager, or XFCE, LXQt, or MATE Desktop Environment</a>, <a href="#fileanddirectorymanagementoftermuxandlinux">File and Directory Management of Termux and Linux</a>, <a href="#opensshwithlinuxortermuxsecureremoteaccess">OpenSSH with Linux or Termux: Secure Remote Access</a>, <a href="#linuxcommandlibrary">Linux Command Library</a>, and <a href="#linuxandtermuxoddsandends">Linux and Termux Odds and Ends</a>.</p>
<ul>
<li>Always run <code>apt update</code> before any <code>apt install</code> command in <strong>Termux</strong> or Linux, including virtual machines and emulations.</li>
<li>Add <code>sudo</code> at the beginning of commands in Linux if needed, and remove <code>sudo</code> from the beginning of commands in <strong>Termux</strong>.</li>
<li>Always run <code>pkg update</code> before any <code>pkg install</code> command in <strong>Termux</strong>.</li>
<li>Always type <code>Y</code>, <code>y</code>, <code>Yes</code>, or <code>yes</code> in response to any prompts that request confirmation during command execution.</li>
<li>Most of the software mentioned in this tutorial is open source unless explicitly stated otherwise. However, it is provided WITHOUT ANY WARRANTY, including but not limited to the implied warranties of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.</li>
<li>Some sections about Linux usages are included since we also cover methods to build a Linux VM in Android device.</li>
<li>Change the file names, directories, and paths in the commands in the tutorial to the actual ones of yours.</li>
<li>Many sections of the tutorial mention VNC server. You can connect VNC server with a VNC client on any devices (Linux, Windows, macOS, Android, IOS, etc.). Read the tutorial about <strong>AVNC</strong>, a VNC client for Android, in <a href="#avncavncclientforandroid">AVNC: A VNC Client for Android</a>.</li>
<li>You may encounter <code>Process completed (signal 9)  press Enter</code> error even if you follow the steps in this tutorial. Read the tutorial about how to fix it in <a href="#processcompletedsignal9pressentererror">Process completed (signal 9)  press Enter Error</a>.</li>
<li>Many sections of the tutorial mention ADB (Android Debug Bridge). You can connect to an Android device's ADB shell from another device via <strong>Android SDK Platform Tools</strong> or from the same device via <strong>Shizuku</strong>. Read the tutorial about <strong>Shizuku</strong> ADB connection in <a href="#shizukusystemuitunerandashelluselocaladbofandroiddeviceonterminalssuchastermuxwithoutanotherdevicewithshizukuleavedeveloperoptionsoffwhendoingsowithsystemuituneranduseadbwithfeatureslikeautocompletesuggestionwithashell">Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell</a>.</li>
<li>Many sections of the tutorial mention <strong>Tor</strong>. Read the tutorial about it in <a href="#introductionoftor">Introduction of Tor</a>.</li>
<li>Uncommenting a line means to remove the comment signs (<code>#</code> for bash) from the beginning of the line.</li>
<li>When the tutorial uses <code>nano</code>, <code>vim</code>, or <code>vi</code> to edit a file, you can use any text editor you want, such <code>nano</code>, <code>vim</code>, and <code>vi</code>.</li>
</ul>
<hr>
<h2 id="termuxapowerfulterminalemulationwithanextensivelinuxpackagecollection">Termux: A Powerful Terminal Emulation with an Extensive Linux Package Collection</h2>
<h3 id="installtermux">Install Termux</h3>
<ul>
<li>Download and Install <strong>Termux</strong> from F-Droid: <a href="https://f-droid.org/packages/com.termux/">https://f-droid.org/packages/com.termux/</a>.</li>
<li><strong>Note</strong>: It is recommended to use <strong>Termux</strong>'s F-Droid version and avoid using Google Play version because the latter is depreciated.</li>
<li>Many of the following guides work on or depend on <strong>Termux</strong>.</li>
<li>If you installed termux from Google Play or a very old version, then you will receive package command errors. Google Play builds are deprecated and no longer supported. It is highly recommended that you update to termux-app v0.118.0 or higher as soon as possible for various bug fixes, including a critical world-readable vulnerability reported at <a href="https://termux.github.io/general/2022/02/15/termux-apps-vulnerability-disclosures.html">https://termux.github.io/general/2022/02/15/termux-apps-vulnerability-disclosures.html</a>. It is recommended that you shift to F-Droid or Github releases.</li>
</ul>
<h3 id="introductionoftermux">Introduction of Termux</h3>
<ul>
<li>Termux is an Android terminal application and Linux environment. Termux combines powerful terminal emulation with an extensive Linux package collection. Some of the commands available in Linux are available in <strong>Termux</strong> too, such as <code>cp</code>, <code>mv</code>, <code>ls</code>, <code>mkdir</code>, <code>apt</code>, and <code>apt-get</code>.</li>
<li>Features:</li>
<li>Enjoy the bash and zsh shells.</li>
<li>Edit files with nano and vim.</li>
<li>Access servers over ssh.</li>
<li>Compile code with gcc and clang.</li>
<li>Use the python console as a pocket calculator.</li>
<li>Check out projects with git and subversion.</li>
<li>Run text-based games with frotz.</li>
<li>and more</li>
<li>At first startup, a small base system is downloaded. Desired packages can then be installed using the apt package manager, which is known from the Debian and Ubuntu Linux distributions. To learn more, access the built-in help by long-pressing anywhere on the terminal and selecting the Help menu option.</li>
<li><code>$PREFIX</code> and <code>~</code> refer to <code>/data/data/com.termux/files/home</code>.</li>
</ul>
<h3 id="officialwikiandcommunityoftermux">Official Wiki and Community of Termux</h3>
<ul>
<li>Wiki: <a href="https://wiki.termux.com/">https://wiki.termux.com/</a>.</li>
<li>Reddit Community: <a href="https://termux.com/community">https://termux.com/community</a>.</li>
</ul>
<h3 id="termuxappuserinterface">Termux App User Interface</h3>
<ul>
<li>Pinch to zoom in or out.</li>
<li>Swipe right from the left edge of the screen to drag out the navigation bar, where you can open <strong>Termux Settings</strong>, start another <strong>NEW SESSION</strong>, switch to another session, or launch <strong>KEYBOARD</strong>.</li>
<li>Long press on screen to:</li>
<li>COPY: Copy</li>
<li>PASTE: Paste</li>
<li>More: More<ul>
<li>Select URL: Select URL</li>
<li>Share transcipt: transfer all output of the current session (via Android api)</li>
<li>Reset: Reset</li>
<li>Kill process: Kill the current terminal session process</li>
<li>Style: Style (requires Termux: Styling plugin)</li>
<li>Keep screen on:</li>
<li>Help: Help documentation (Termux Wiki)</li></ul></li>
</ul>
<h3 id="shortcuts">Shortcuts</h3>
<p>The following are some of the shortcuts commonly used in the terminal, and they also work in Ter­mux. The volume plus button (abbreviated to Volume below) can be used as a special key to generate a specific input, which can be roughly understood as the Fn key on a laptop.</p>
<ul>
<li>Ctrl + A - Move cursor to the start position</li>
<li>Ctrl + E - Move cursor to the end</li>
<li>Ctrl + K - Cut everything from here to the end</li>
<li>Ctrl + U - Cut everything from here to the beginning</li>
<li>Ctrl + W - Cut everything from here to the left</li>
<li>Ctrl + Y - Paste words cut by Ctrl + U, Ctrl + D, or Ctrl + W</li>
<li>Ctrl + L - Equivalent to clear command or clear screen</li>
<li>Ctrl + C - Send Signal Interrupt (SIGINT), which terminate the process</li>
<li>Ctrl + D - Close the terminal</li>
<li>Ctrl + Z - Send Signal Terminal Stop (SIGTSTP), which suspend the current process</li>
<li>Volume + E - Esc</li>
<li>Volume + T - Tab</li>
<li>Volume + 1 - F1</li>
<li>Volume + 2 - F2</li>
<li>Volume + 3 - F3</li>
<li>Volume + 4 - F4</li>
<li>Volume + 5 - F5</li>
<li>Volume + 6 - F6</li>
<li>Volume + 7 - F7</li>
<li>Volume + 8 - F8</li>
<li>Volume + 9 - F9</li>
<li>Volume + 0 - F10</li>
<li>Volume + B / Alt + B - Return a word when using readline</li>
<li>Volume + F / Alt + F - Forward a word when using readline</li>
<li>Volume + X / Alt + X</li>
<li>Volume + W - Up Arrow</li>
<li>Volume + A - Left Arrow</li>
<li>Volume + S - Down Arrow</li>
<li>Volume + D - Right Arrow</li>
<li>Volume + L - | (pipe character)</li>
<li>Volume + H - ~ (tilde character)</li>
<li>Volume + U - _ (underscore character)</li>
<li>Volume + P - Page Up (previous page)</li>
<li>Volume + N - Page Down (next page)</li>
<li>Volume + . / Ctrl + \ - Signal Quit (SIGQUIT)</li>
<li>Volume + V - Show volume control</li>
<li>Volume + Q / Volume + K - Show extra button view</li>
</ul>
<h3 id="granttermuxstoragepermission">Grant Termux Storage Permission</h3>
<p>Run the following command <strong>Termux</strong>:</p>
<pre><code>termux-setup-storage
</code></pre>
<p>and tap <strong>Allow</strong>.\
Many processes mentioned in this tutorial need <strong>Termux</strong> to have this permission.</p>
<h3 id="termuxproperties">Termux-Properties</h3>
<p>You can edit properties of <strong>Termux</strong> by:</p>
<pre><code>nano ~/.termux/termux-properties
</code></pre>
<p>Properties can be changed including <code>default-working-directory</code>, <code>allow-external-apps</code>, <code>volume-keys</code>, etc.</p>
<h3 id="termuxpkgpackagemanagement">Termux pkg Package Management</h3>
<p>pkg is a tool for managing apt packages.\
Usage: <code>pkg [--check-mirror] command [arguments]</code>.</p>
<ul>
<li><code>--check-mirror</code> - forces a re-check of availability of mirrors</li>
<li>Commands:</li>
<li><code>autoclean</code> - Remove all outdated packages from apt cache.</li>
<li><code>clean</code> - Remove all packages from apt cache.</li>
<li><code>files &lt;packages&gt;</code> - Show all files installed by packages.</li>
<li><code>install &lt;packages&gt;</code> - Install specified packages.</li>
<li><code>list-all</code> - List all packages available in repositories.</li>
<li><code>list-installed</code> - List installed packages.</li>
<li><code>reinstall &lt;packages&gt;</code> - Reinstall specified installed packages at the latest version.</li>
<li><code>search &lt;query&gt;</code> - Search package by query, for example by name or description part.</li>
<li><code>show &lt;packages&gt;</code> - Show basic metadata, such as dependencies.</li>
<li><code>uninstall &lt;packages&gt;</code> - Uninstall specified packages. Configuration files will be left intact.</li>
<li><code>upgrade</code> - Upgrade all installed packages to the latest version.</li>
<li><code>update</code> - Update apt databases from configured repositories.</li>
</ul>
<h3 id="texteditornanoandvim">Text Editor: Nano and Vim</h3>
<p>Nano and Vim are both text editors used in Unix-like operating systems. </p>
<h4 id="nano">Nano</h4>
<p>Install:</p>
<pre><code>apt install nano
</code></pre>
<p>Nano is a simple, user-friendly text editor designed for ease of use.</p>
<ul>
<li>Basic Functions: It supports basic editing features like cut, copy, paste, search, and replace.</li>
<li>Command Shortcuts: Common commands are displayed at the bottom of the screen (e.g., ^X to exit).</li>
<li>Usage: Typically used for quick edits or for users who prefer a no-frills experience. You can open a file by typing <code>nano filename</code>.</li>
</ul>
<h4 id="vim">Vim</h4>
<p>Vim (Vi IMproved) is a highly configurable and powerful text editor, which is an enhanced version of the original Vi editor. It is favored by experienced users and programmers.</p>
<ul>
<li>Modes: Vim operates in different modes (Normal, Insert, Visual, etc.), allowing for more complex editing tasks and commands.</li>
<li>Extensibility: Users can customize Vim extensively through configuration files and plugins.</li>
<li>Powerful Editing Capabilities: It has a steep learning curve but offers efficient ways to manipulate text.</li>
<li>Usage: Often used for programming and extensive text manipulation. You can open a file by typing <code>vim filename</code>.</li>
</ul>
<h3 id="packagecommanderror">Package Command Error</h3>
<p>Termux had to move the primary Termux package repository hosting from Bintray to Fosshost since Bintray shut down on May 1st, 2021 which created problems for users while running package installation and update commands with pkg or apt and their commands would fail with errors similar to the following:</p>
<pre><code>E: The repository 'https://termux.org/packages stable Release' does no longer have a Release file.
N: Metadata integrity can't be verified, repository is disabled now.
N: Possible cause: repository is under maintenance or down (wrong sources.list URL?).
</code></pre>
<pre><code>E: The repository 'https://dl.bintray.com/grimler/game-packages-24 games Release' does not have a Release file.
N: Metadata integrity can't be verified, repository is disabled now.
N: Possible cause: repository is under maintenance or down (wrong sources.list URL?).
</code></pre>
<pre><code>E: The repository 'https://science.termux-mirror.ml science Release' does not have a Release file.
N: Metadata integrity can't be verified, repository is disabled now.
N: Possible cause: repository is under maintenance or down (wrong sources.list URL?).
</code></pre>
<h4 id="commandsolution">Command Solution</h4>
<ul>
<li>Run <code>termux-change-repo</code> command.</li>
<li>Select one or more repositories for which you want to change mirror by tapping "space" and navigating over list by up/down arrow keys. Tap enter to confirm the choice.</li>
<li>Pick a mirror, it is recommended to begin with mirror hosted by Grimler. Same as previously, navigate over list by arrow keys, pick mirror by space key and confirm choice by pressing "enter".</li>
<li>If you have installed other package repositories, like x11 and root, then you must select and change those mirrors as well. You can check your current mirrors by running the <code>termux-info</code> command. Note that the science and game repos have been merged into main repo and should be removed with apt remove science-repo game-repo if you have them installed.</li>
<li>If you receive errors like:
<pre><code>E: Repository 'https://grimler.se/termux-root-packages-24 root InRelease' changed its 'Origin' value from 'Bintray' to 'termux-root-packages-24 root'
E: Repository 'https://grimler.se/termux-root-packages-24 root InRelease' changed its 'Label' value from 'Bintray' to 'termux-root-packages-24 root'
N: This must be accepted explicitly before updates for this repository can be applied. See apt-secure(8) manpage for details.
Do you want to accept these changes and continue updating from this repository? [y/N] 
</code></pre>
<p>, then accept them by typing <code>y</code>.</p></li>
<li>After changing the mirror, it is highly advisable to run <code>pkg upgrade</code> command to update all packages to the latest available versions, or at least update <code>termux-tools</code> package with <code>pkg install termux-tools</code> command. Also make sure your device has internet connectivity and the repository URLs are accessible in a browser.</li>
</ul>
<h4 id="manualsolution">Manual Solution</h4>
<ul>
<li>If for some reason <code>termux-change-repo</code> is not available, you can manually edit <code>sources.list</code> to replace the main url with a value obtained from <a href="https://github.com/termux/termux-packages/wiki/Mirrors">Termux Mirrors List</a>. </li>
<li>Run <code>nano $PREFIX/etc/apt/sources.list</code> to edit it. </li>
<li>This will not change the urls of other package repositories, to change those run <code>pkg install termux-tools</code> afterwards and use <code>termux-change-repo</code> or manually edit their files under <code>$PREFIX/etc/apt/sources.list.d</code> directory.</li>
<li>Changing the mirror may specially be needed if a user is still using bintray as the mirror or <code>pkg upgrade</code> command hasn't been run in a while to update termux package related scripts.</li>
</ul>
<h4 id="furtherreadingsandreferencesaboutpackagecommanderror">Further Readings and References about Package Command Error</h4>
<ul>
<li><a href="https://github.com/termux/termux-packages/wiki/Package-Management">https://github.com/termux/termux-packages/wiki/Package-Management</a>.</li>
<li><a href="https://github.com/termux/termux-packages/issues/6726">https://github.com/termux/termux-packages/issues/6726</a>.</li>
<li><a href="https://github.com/termux/termux-packages/issues/6455">https://github.com/termux/termux-packages/issues/6455</a>.</li>
<li><a href="https://github.com/termux/termux-packages/wiki/Mirrors">https://github.com/termux/termux-packages/wiki/Mirrors</a>.</li>
<li><a href="https://github.com/cyb0rgdoll/freshtermux">https://github.com/cyb0rgdoll/freshtermux</a>.</li>
</ul>
<h3 id="processcompletedsignal9pressentererror">Process completed (signal 9) - press Enter Error</h3>
<p>Some Android OS will kill any (phantom) processes greater than 32 (limit is for all apps combined) and also kill any processes using excessive CPU. You may get <code>Process completed (signal 9) - press Enter</code> message in the terminal without actually exiting the shell process yourself. Here is the guide of how to turn it off.</p>
<h4 id="fixforstockandroid12landbeyond">Fix for Stock Android 12L and beyond</h4>
<ul>
<li>In phone's <strong>Settings</strong> or something similar, go to <strong>About Phone > Software Information</strong> or something similar, and tap the <strong>Version Number</strong> seven times to enable <strong>Developer Options</strong>. Some phones may have different methods to enable <strong>Developer Options</strong>.</li>
<li>Find the section named <strong>Feature Flags</strong>, enter via clicking it.</li>
<li>Find the switch to toggle off <strong>settings<em>enable</em>monitor<em>phantom</em>procs</strong> to disable phantom process killer.</li>
<li>To enable phantom process killer again, just toggle on the switch.</li>
</ul>
<h4 id="fixforqemslikeoneuimiuisamsungetcandothernonstockandroid12landbeyond">Fix for QEMs like OneUI, MiUi, Samsung, etc. and other non-stock Android 12L and beyond</h4>
<ul>
<li>Connect to Android Debug Bridge (ADB) of your Android device from Linux, Windows, MacOS, etc. or via <strong>Shizuku</strong>.</li>
<li>Type <code>adb shell</code> to enter <code>adb shell</code>.</li>
<li>Run the following commands inside <code>adb shell</code>:
<pre><code>/system/bin/device_config set_sync_disabled_for_tests persistent
/system/bin/device_config put activity_manager max_phantom_processes 2147483647
settings put global settings_enable_monitor_phantom_procs false
</code></pre></li>
<li>To check the status of whether phantom process killer is disabled, run the following commands inside <code>adb shell</code>:
<pre><code>/system/bin/dumpsys activity settings | grep max_phantom_processes
/system/bin/device_config get activity_manager max_phantom_processes
</code></pre></li>
<li>To enable phantom process killer again, run the following commands inside <code>adb shell</code>:
<pre><code>/system/bin/device_config set_sync_disabled_for_tests none; /system/bin/device_config put activity_manager max_phantom_processes 32
settings put global settings_enable_monitor_phantom_procs true
</code></pre></li>
</ul>
<h4 id="furtherreadingsandreferencesaboutprocesscompletedsignal9pressentererror">Further Readings and References about Process completed (signal 9) - press Enter error</h4>
<ul>
<li><a href="https://github.com/termux/termux-app/issues/2366#issuecomment-1237468220">https://github.com/termux/termux-app/issues/2366#issuecomment-1237468220</a>.</li>
<li><a href="https://github.com/termux/termux-app/issues/2366">https://github.com/termux/termux-app/issues/2366</a>.</li>
<li><a href="https://docs.andronix.app/android-12/andronix-on-android-12-and-beyond">https://docs.andronix.app/android-12/andronix-on-android-12-and-beyond</a>.</li>
<li><a href="https://www.xda-developers.com/android-13-phantom-process-toggle/">https://www.xda-developers.com/android-13-phantom-process-toggle/</a>.</li>
<li><a href="https://youtu.be/mjXSh3yq-I0">https://youtu.be/mjXSh3yq-I0</a>.</li>
<li><a href="https://ivonblog.com/en-us/posts/fix-termux-signal9-error/">https://ivonblog.com/en-us/posts/fix-termux-signal9-error/</a>.</li>
<li><a href="https://kskroyal.com/disable-phantom-process-killer-in-android-12-13/#google_vignette">https://kskroyal.com/disable-phantom-process-killer-in-android-12-13/#google_vignette</a>.</li>
<li><a href="https://issuetracker.google.com/u/1/issues/205156966">https://issuetracker.google.com/u/1/issues/205156966</a>.</li>
<li><a href="https://github.com/agnostic-apollo/Android-Docs/blob/master/en%2Fdocs%2Fapps%2Fprocesses%2Fphantom-cached-and-empty-processes.md">https://github.com/agnostic-apollo/Android-Docs/blob/master/en%2Fdocs%2Fapps%2Fprocesses%2Fphantom-cached-and-empty-processes.md</a>.</li>
</ul>
<hr>
<h2 id="termuxgraphicalenvironmentwithvncserverandfluxboxoropenboxwindowsmanagerorxfcelxqtormatedesktopenvironment">Termux Graphical Environment with VNC Server, and Fluxbox or Openbox Windows Manager, or XFCE, LXQt, or MATE Desktop Environment</h2>
<h3 id="enablethex11repositoryoftermux">Enable the X11 Repository of Termux</h3>
<p>X11 packages are available in a separate APT repository. You can enable it by running the following command:</p>
<pre><code>pkg install x11-repo
</code></pre>
<p>It will automatically add appropriate sources.list file and PGP key.\
You can disable this repository by running the following command:</p>
<pre><code>pkg uninstall x11-repo
</code></pre>
<h3 id="vncserverintermux">VNC Server in Termux</h3>
<p>In this section, you will learn how to set up a VNC server in <strong>Termux</strong> for graphical output.</p>
<h4 id="installtigervnc">Install TigerVNC</h4>
<pre><code>pkg install tigervnc
</code></pre>
<h4 id="startavncserver">Start a VNC Server</h4>
<p>Not specifying port:</p>
<pre><code>vncserver -localhost
</code></pre>
<p>VNC server will start on unused port with the smallest positive integer number, like <code>localhost:1</code> if port 1 is not used.\
Specifying port:</p>
<pre><code>vncserver :1
</code></pre>
<p>VNC server will start on the port you specified.\
Specifying resolution:</p>
<pre><code>vncserver :1 -geometry 1920x1080
</code></pre>
<p>You can specify resolution with <code>-geometry</code>.\
At first time, you will be prompted for setting up passwords:</p>
<pre><code>You will require a password to access your desktops.

Password:
Verify:
Would you like to enter a view-only password (y/n)? n
</code></pre>
<p>Note that passwords are not visible when you are typing them and maximal password length is 8 characters.\
If everything is okay, you will see this message:</p>
<pre><code>New 'localhost:1 ()' desktop is localhost:1

Creating default startup script /data/data/com.termux/files/home/.vnc/xstartup
Creating default config /data/data/com.termux/files/home/.vnc/config
Starting applications specified in /data/data/com.termux/files/home/.vnc/xstartup
Log file is /data/data/com.termux/files/home/.vnc/localhost:1.log
</code></pre>
<p>It means that the server is available on display <code>localhost:1</code>. \
To make programs do graphical output to the display <code>localhost:1</code>, set environment variable like shown here (yes, without specifying <code>localhost</code>):</p>
<pre><code>export DISPLAY=":1"
</code></pre>
<p>You may even put this variable to your bashrc or profile so you don't have to always set it manually unless display address will be changed.\
Connect to the VNC server from a VNC viewer to view the output, you will not see anything except your mouse pointer if no windows manager or desktop environment is started.</p>
<h4 id="killallvncservers">Kill All VNC Servers</h4>
<pre><code>vncserver -kill localhost:1
</code></pre>
<p>Change the port with the actual port your VNC server started on.</p>
<h3 id="fluxboxintermux">Fluxbox in Termux</h3>
<h4 id="installfluxbox">Install Fluxbox</h4>
<pre><code>pkg install fluxbox
</code></pre>
<h4 id="setup">Setup</h4>
<pre><code>nano ~/.vnc/xstartup
</code></pre>
<p>Copy below command and paste to it:</p>
<pre><code>#!/data/data/com.termux/files/usr/bin/sh

## Fluxbox desktop.

# Generate menu.
fluxbox-generate_menu

# Start fluxbox.
fluxbox &amp;
</code></pre>
<p>Fluxbox will start automatically on VNC server startup.</p>
<h3 id="openboxintermux">Openbox in Termux</h3>
<h4 id="installopenbox">Install Openbox</h4>
<pre><code>pkg install openbox pypanel xorg-xsetroot
</code></pre>
<h4 id="setup-1">Setup</h4>
<pre><code>nano ~/.vnc/xstartup
</code></pre>
<p>Copy below command and paste to it:</p>
<pre><code>#!/data/data/com.termux/files/usr/bin/sh

# Start Openbox.
openbox-session &amp;
</code></pre>
<p>Don't put any else command to the file <code>~/.vnc/xstartup</code> but only the lines shown above since Openbox has its own autostart script, which is located at <code>${PREFIX}/etc/xdg/openbox/autostart</code>.</p>
<pre><code>nano ~/etc/xdg/openbox/autostart
</code></pre>
<p>Copy below command and paste to it:</p>
<pre><code># Make background gray.
xsetroot -solid gray

# Launch PyPanel.
pypanel &amp;
</code></pre>
<p>Openbox will start automatically on VNC server startup.</p>
<h3 id="xfceintermux">XFCE in Termux</h3>
<h4 id="installxfce">Install XFCE</h4>
<pre><code>pkg install xfce4
</code></pre>
<h4 id="setup-2">Setup</h4>
<pre><code>nano ~/.vnc/xstartup
</code></pre>
<p>Copy below command and paste to it:</p>
<pre><code>#!/data/data/com.termux/files/usr/bin/sh
xfce4-session &amp;
</code></pre>
<p>Don't put any other command to the file <code>~/.vnc/xstartup</code> but only the lines shown above.\
XFCE will start automatically on VNC server startup.</p>
<h4 id="additionalrecommendedpackagesforinstallation">Additional Recommended Packages for Installation</h4>
<ul>
<li><code>netsurf</code> - Simple graphical web browser. Javascript is not supported.</li>
<li><code>xfce4-terminal</code> - Terminal emulator for XFCE. It is not included as part of XFCE installation to allow use of <code>aterm</code> or <code>st</code>.</li>
</ul>
<h3 id="lxqtintermux">LXQt in Termux</h3>
<h4 id="installlxqt">Install LXQt</h4>
<pre><code>pkg install lxqt
</code></pre>
<h4 id="setup-3">Setup</h4>
<pre><code>nano ~/.vnc/xstartup
</code></pre>
<p>Copy below command and paste to it:</p>
<pre><code>#!/data/data/com.termux/files/usr/bin/sh
startlxqt &amp;
</code></pre>
<p>Don't put any other command to the file <code>~/.vnc/xstartup</code> but only the lines shown above.\
LXQt will start automatically on VNC server startup.</p>
<h4 id="additionalrecommendedpackagesforinstallation-1">Additional Recommended Packages for Installation</h4>
<ul>
<li><code>otter-browser</code> - Free and open source web browser that aims to recreate aspects of Opera 12.x</li>
<li><code>qterminal</code> - Terminal emulator for LXQt. It is not included as part of LXQt installation to allow use of <code>aterm</code> or <code>st</code>.</li>
</ul>
<h3 id="mateintermux">MATE in Termux</h3>
<h4 id="installmate">Install MATE</h4>
<pre><code>pkg install mate-* marco
</code></pre>
<h4 id="setup-4">Setup</h4>
<pre><code>nano ~/.vnc/xstartup
</code></pre>
<p>Copy below command and paste to it:</p>
<pre><code>#!/data/data/com.termux/files/usr/bin/sh
mate-session &amp;
</code></pre>
<p>Don't put any other command to the file <code>~/.vnc/xstartup</code> but only the lines shown above.\
MATE will start automatically on VNC server startup.</p>
<h4 id="additionalrecommendedpackagesforinstallation-2">Additional Recommended Packages for Installation</h4>
<ul>
<li><code>netsurf</code> - Simple graphical web browser. Javascript is not supported.</li>
<li><code>mate-terminal</code> - Terminal emulator for MATE. It is not included as part of MATE installation to allow use of <code>aterm</code> or <code>st</code>.</li>
</ul>
<h3 id="furtherreadingsandreferencesabouttermuxgraphicalenvironment">Further Readings and References about Termux Graphical Environment</h3>
<ul>
<li><a href="https://wiki.termux.com/wiki/Graphical_Environment">https://wiki.termux.com/wiki/Graphical_Environment</a>.</li>
<li><a href="https://github.com/termux/x11-packages">https://github.com/termux/x11-packages</a>.</li>
</ul>
<hr>
<h2 id="andronixwithtermuxinstalllinuxdistributionsintermuxonnonrootedandroiddevices">Andronix with Termux: Install Linux Distributions in Termux on Non-Rooted Android Devices</h2>
<h3 id="optionalbutrecommendedinstallandronixapp">Optional but Recommended: Install Andronix App</h3>
<p>Install Andronix from Google Play: <a href="https://play.google.com/store/apps/details?id=studio.com.techriz.andronix">https://play.google.com/store/apps/details?id=studio.com.techriz.andronix</a>.</p>
<h3 id="introductionofandronixandproot">Introduction of Andronix and PRoot</h3>
<ul>
<li><strong>Andronix</strong> is an app that lets you install Linux distributions like Ubuntu, Debian, Manjaro etc. in <strong>Termux</strong> on non-rooted Android devices with <strong>PRoot</strong>. <strong>Andronix</strong> provide paid, close-source modded OS too, which won't be mentioned in this tutorial.</li>
<li><strong>PRoot</strong> is a user-space implementation of chroot, mount --bind, and binfmt_misc. This means that users don't need any privileges or setup to do things like using an arbitrary directory as the new root file system, making files accessible somewhere else in the file system hierarchy, or executing programs built for another CPU architecture transparently through QEMU user-mode.</li>
<li>chroot is an operation on Unix and Unix-like operating systems that changes the apparent root directory for the current running process and its children. A program that is run in such a modified environment cannot name (and therefore normally cannot access) files outside the designated directory tree.</li>
<li>Further readings and references:</li>
<li><a href="https://en.m.wikipedia.org/wiki/Chroot">https://en.m.wikipedia.org/wiki/Chroot</a>.</li>
<li><a href="https://github.com/AndronixApp/AndronixOrigin">https://github.com/AndronixApp/AndronixOrigin</a>.</li>
</ul>
<h3 id="installanoswithandronix">Install an OS with Andronix</h3>
<ul>
<li>Open <strong>Andronix</strong> app.</li>
<li>Click the <strong>Linux Distribution</strong> card.</li>
<li>Click on the Linux distribution you want to install. It is recommended to get started with Ubuntu or Debian if you are overwhelmed by the options.</li>
<li>Click on the user interface you want. Graphical User Interface or GUI is the visual interface that you interact with to do things in your Linux distribution. Command Line Interface or CLI is the text-based interface that you interact with to execute commands and perform tasks in your Linux distribution. </li>
<li>Desktop Environment: You can choose a Desktop Environment if you would like to use your mouse as well as your keyboard, or you've little or no experience with Linux. </li>
<li>Window Manager: You can choose a Window Manager if you only want to use your keyboard to manage Windows and other OS-level tasks. These are pretty light and fast, but do require some skill before getting productive. </li>
<li>CLI Only: If you don't want a Graphical User-interface, you can go ahead with the Command Line Interface. You'll have a terminal, which is enough if you know what you're doing in your session.</li>
<li><strong>Andronix</strong> will automatically copy the command to your clipboard.</li>
<li>Paste and run in <strong>Termux</strong>.</li>
</ul>
<h3 id="uninstallanosnotmoddedwithandronix">Uninstall an OS (Not Modded) with Andronix</h3>
<ul>
<li>Open <strong>Andronix</strong> app.</li>
<li>Click the <strong>Linux Distribution</strong> card.</li>
<li>Long press on the Linux distribution you want to uninstall.</li>
<li>Select<strong>Uninstall</strong>.</li>
<li><strong>Andronix</strong> will automatically copy the command to your clipboard.</li>
<li>Paste and run in <strong>Termux</strong> (Not inside Linux).</li>
</ul>
<h3 id="soundoutputfromprootos">Sound Output from PRoot OS</h3>
<h4 id="installandsetupsoundoutputfromprootos">Install and Setup Sound Output from PRoot OS</h4>
<p>Run the following command in Termux (Not inside Linux):</p>
<pre><code>pkg install wget &amp;&amp; wget https://andronixos.sfo2.cdn.digitaloceanspaces.com/OS-Files/setup-audio.sh &amp;&amp; chmod +x setup-audio.sh &amp;&amp; ./setup-audio.sh
</code></pre>
<h4 id="startpulseaudioserver">Start PulseAudio Server</h4>
<pre><code>pulseaudio --start
</code></pre>
<h3 id="exampledebianwithxfcedesktopenvironment">Example: Debian with XFCE Desktop Environment</h3>
<h4 id="installdebianwithxfce">Install Debian with XFCE</h4>
<pre><code>pkg update -y &amp;&amp; pkg install wget curl proot tar -y &amp;&amp; wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Debian/debian-xfce.sh -O debian-xfce.sh &amp;&amp; chmod +x debian-xfce.sh &amp;&amp;  bash debian-xfce.sh
</code></pre>
<p>The file directory of the Debian OS will be <code>debian-fs</code>. You can read, write, and execute files in it both in <strong>Termux</strong> or in the Debian OS.</p>
<h4 id="turnontheoscli">Turn on the OS (CLI)</h4>
<pre><code>./start-debian.sh
</code></pre>
<h4 id="vncserver">VNC Server</h4>
<ul>
<li>Run <code>vncserver-start</code> in the OS to start the VNC server (default on port 1).</li>
<li>Get a VNC viewer.</li>
<li>Add a new connection with address <code>localhost:1</code>.</li>
<li>View GUI of the OS from VNC viewer.</li>
<li>Run <code>vncserver-start</code> in the OS to kill all VNC servers.</li>
</ul>
<h3 id="exampledebianwithclionly">Example: Debian with CLI Only</h3>
<h4 id="installdebian">Install Debian</h4>
<pre><code>pkg update -y &amp;&amp; pkg install wget curl proot tar -y &amp;&amp; wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Debian/debian.sh -O debian.sh &amp;&amp; chmod +x debian.sh &amp;&amp; bash debian.sh
</code></pre>
<p>The file directory of the Debian OS will be <code>debian-fs</code>. You can read, write, and execute files in it both in <strong>Termux</strong> or in the Debian OS.</p>
<h4 id="turnontheoscli-1">Turn on the OS (CLI)</h4>
<pre><code>./start-debian.sh
</code></pre>
<h3 id="exampleuninstalldebianosnotmodded">Example: Uninstall Debian OS (Not Modded)</h3>
<pre><code>wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Uninstall/Debian/UNI-debian.sh &amp;&amp; chmod +x UNI-debian.sh &amp;&amp; bash UNI-debian.sh
</code></pre>
<hr>
<h2 id="qemusystememulationwithtermuxfullsystememulationofmultiplecpuarchitecturesandoperatingsystemswithisoimagemethodorqcow2cloudimage">QEMU System Emulation with Termux: Full System Emulation of Multiple CPU Architectures and Operating Systems with ISO Image Method or QCOW2 Cloud Image</h2>
<h3 id="installqemu">Install QEMU</h3>
<p>Run the following command in <strong>Termux</strong>:</p>
<pre><code>pkg install qemu-system-x86_64 qemu-utils qemu-common openssl
</code></pre>
<h3 id="isoimagemethod">ISO Image method</h3>
<p>This method is more customizable but may encounter some issues like GRUB menu not showing on CLI or stuck at 79% or 83% of the installation of the base system. Use qcow2 cloud image method if you don't prepare to solve these problems. This tutorial assumes no such problems are encounter.\
It is recommended to get started with Ubuntu or Debian if you are overwhelmed by the options.</p>
<h4 id="preparetheisoimage">Prepare the ISO Image</h4>
<p>Prepare the ISO image. Here takes Debian AMD64 for example. Change the URL to the download link of the ISO image you want or <code>cp</code> or <code>mv</code> the ISO image you want to the directory you want.</p>
<pre><code>wget https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.7.0-amd64-netinst.iso
</code></pre>
<h4 id="createavirtualdiskimagewheretheoperatingsystemwillbeinstalled">Create a Virtual Disk Image Where the Operating System Will Be Installed</h4>
<pre><code>qemu-img create -f qcow2 debian_amd64.qcow2 20G
</code></pre>
<p>Change the <code>debian_amd64.qcow2</code> to the file name you want. <code>20G</code> indicates 20GB disk image. You can adjust the size as needed.</p>
<h4 id="installvmwithcli">Install VM with CLI</h4>
<pre><code>nano install-qemu.sh
</code></pre>
<p>Copy below command and paste to it:</p>
<pre><code>qemu-system-x86_64 -machine q35 \
-drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd \
-m 2G \
-accel tcg,thread=multi \
-smp sockets=1,cores=4,threads=1 \
-cpu qemu64 \
-vga std \
-netdev user,id=n1,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 \
-device intel-hda \
-device qemu-xhci \
-boot d \
-boot menu=on \
-drive file=debian_amd64.qcow2 \
-nographic \
-serial mon:stdio \
-display none \
-cdrom ~/debian-12.7.0-amd64-DVD-1.iso
</code></pre>
<p>Adjust <code>hostfwd</code> as needed. In the above command, <code>tcp</code> specifies the TCP protocol for the forwarding rule, <code>::2222</code> indicates that on the host machine, TCP connections to port 2222 will be forwarded, and <code>-:22</code> indicates that these connections will be forwarded to port 22 (the default SSH port) on the guest virtual machine. Change the <code>debian_amd64.qcow2</code> to the real file name. Change the <code>debian-12.7.0-amd64-netinst.iso</code> to the real ISO path. <code>20G</code> indicates 20GB disk image. You can adjust the size as needed.\
Make it executable:</p>
<pre><code>chmod +x install-qemu.sh
</code></pre>
<p>Run it:</p>
<pre><code>./install-qemu.sh
</code></pre>
<p>Follow the screen guide to install.</p>
<h4 id="installvmwithgui">Install VM with GUI</h4>
<pre><code>nano install-qemu.sh
</code></pre>
<p>Copy below command and paste to it:</p>
<pre><code>qemu-system-x86_64 -machine q35 \
-drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd \
-m 2G \
-accel tcg,thread=multi \
-smp sockets=1,cores=4,threads=1 \
-cpu qemu64 \
-vga std \
-netdev user,id=n1,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 \
-device intel-hda \
-device usb-tablet \
-boot menu=on \
-drive file=debian_amd64.qcow2 \
--vnc :0 \
-cdrom ~/debian-12.7.0-amd64-netinst.iso
</code></pre>
<p>Adjust <code>hostfwd</code> as needed. Change the <code>debian_amd64.qcow2</code> to the real file name. Change the <code>debian-12.7.0-amd64-netinst.iso</code> to the real ISO path. <code>20G</code> indicates 20GB disk image. You can adjust the size as needed. Change the numerical value after <code>--vnc :</code> to the port you want to use.\
Make it executable:</p>
<pre><code>chmod +x install-qemu.sh
</code></pre>
<p>Run it:</p>
<pre><code>./install-qemu.sh
</code></pre>
<p>Connect to the VNC server from a VNC viewer and follow the screen guide on the VNC viewer to install.</p>
<h4 id="bootvmwithcli">Boot VM with CLI</h4>
<pre><code>nano qemu-cli.sh
</code></pre>
<p>Copy below command and paste to it:</p>
<pre><code>qemu-system-x86_64 -machine q35 \
-drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd \
-m 2G \
-accel tcg,thread=multi \
-smp sockets=1,cores=4,threads=1 \
-cpu qemu64 \
-vga std \
-netdev user,id=n1,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 \
-device intel-hda \
-device usb-tablet \
-boot menu=on \
-drive file=debian_amd64.qcow2 \
-serial mon:stdio \
-display none
</code></pre>
<p>Adjust <code>hostfwd</code> as needed. Change the <code>debian_amd64.qcow2</code> to the real file name. <code>20G</code> indicates 20GB disk image. You can adjust the size as needed.\
Make it executable:</p>
<pre><code>chmod +x qemu-cli.sh
</code></pre>
<p>Run it to boot the VM with CLI:</p>
<pre><code>./qemu-cli.sh
</code></pre>
<h4 id="bootwithgui">Boot with GUI</h4>
<pre><code>nano qemu-gui.sh
</code></pre>
<p>Copy below command and paste to it:</p>
<pre><code>qemu-system-x86_64 -machine q35 \
-drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd \
-m 2G \
-accel tcg,thread=multi \
-smp sockets=1,cores=4,threads=1 \
-cpu qemu64 \
-vga std \
-netdev user,id=n1,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 \
-device intel-hda \
-device usb-tablet \
-boot menu=on \
-drive file=debian_amd64.qcow2 \
--vnc :0
</code></pre>
<p>Adjust <code>hostfwd</code> as needed. Change the <code>debian_amd64.qcow2</code> to the real file name. <code>20G</code> indicates 20GB disk image. You can adjust the size as needed. Change the numerical value after <code>--vnc :</code> to the port you want to use.\
Make it executable:</p>
<pre><code>chmod +x qemu-cli.sh
</code></pre>
<p>Run it to boot the VM with GUI:</p>
<pre><code>./qemu-gui.sh
</code></pre>
<p>Connect to the VNC server from a VNC viewer.</p>
<h3 id="qcow2imagemethod">QCOW2 Image Method</h3>
<p>This method is more easy but less customizable.\
It is recommended to get started with Ubuntu or Debian if you are overwhelmed by the options.</p>
<h4 id="preparetheqcow2image">Prepare the QCOW2 Image</h4>
<p>Prepare the qcow2 image. Here takes Debian AMD64 qcow2 cloud image for example. Change the URL to the download link of the qcow2 image you want or <code>cp</code> or <code>mv</code> the qcow2 image you want to the directory you want.</p>
<pre><code>wget https://cloud.debian.org/images/cloud/bookworm/latest/debian-12-nocloud-amd64.qcow2
</code></pre>
<h4 id="bootwithcli">Boot with CLI</h4>
<pre><code>nano qemu-cli.sh
</code></pre>
<p>Copy below command and paste to it:</p>
<pre><code>qemu-system-x86_64 -m 2G \
-drive file=debian-12-nocloud-amd64.qcow2,format=qcow2 \
-nographic \
-serial mon:stdio \
-display none \
-netdev user,id=net0,hostfwd=tcp::2222-:22 \
-device e1000,netdev=net0
</code></pre>
<p>Change the <code>debian-12-nocloud-amd64.qcow2</code> to the real file name. <code>20G</code> indicates 20GB disk image. You can adjust the size as needed. Adjust <code>hostfwd</code> as needed.\
Make it executable:</p>
<pre><code>chmod +x qemu-cli.sh
</code></pre>
<p>Run it to boot the VM with CLI:</p>
<pre><code>./qemu-cli.sh
</code></pre>
<h4 id="bootwithgui-1">Boot with GUI</h4>
<pre><code>nano qemu-gui.sh
</code></pre>
<p>Copy below command and paste to it:</p>
<pre><code>qemu-system-x86_64 -m 2G \
-drive file=debian-12-nocloud-amd64.qcow2,format=qcow2 \
-vnc :0
-netdev user,id=net0,hostfwd=tcp::2222-:22 \
-device e1000,netdev=net0
</code></pre>
<p>Change <code>debian-12-nocloud-amd64.qcow2</code> to the real file name. <code>20G</code> indicates 20GB disk image. You can adjust the size as needed. Change the numerical value after <code>--vnc :</code> to the port you want to use. Adjust <code>hostfwd</code> as needed.\
Make it executable:</p>
<pre><code>chmod +x qemu-cli.sh
</code></pre>
<p>Run it to boot the VM with GUI:</p>
<pre><code>./qemu-gui.sh
</code></pre>
<p>Connect to the VNC server from a VNC viewer.</p>
<h3 id="windowmanagersordesktopenvironments">Window Managers or Desktop Environments</h3>
<p>You can install a window manager such as Fluxbox or Openbox, or desktop environment such as XFCE, LXQt, or MATE for your GUI.</p>
<h3 id="login">Login</h3>
<p>When you see something similar to the below in the VM:</p>
<pre><code>Debian GNU/Linux 12 localhost ttyS0

localhost login:
</code></pre>
<p>In the first time, type <code>root</code> and you will be logged in without a password. \
You can set password latter by:</p>
<pre><code>passwd
</code></pre>
<p>The password should be at least 4 letters long.\
If you don't want to set a password, just type <code>root</code> and you will be logged in without a password every time.</p>
<h3 id="resizediskspace">Resize Disk Space</h3>
<p>In <strong>Termux</strong> (outside VM), run:</p>
<pre><code>qemu-img resize debian-12-nocloud-amd64.qcow2 +30G
</code></pre>
<p>Change <code>debian-12-nocloud-amd64.qcow2</code> to the real file name. <code>+20G</code> indicates increasing 20GB disk image. You can adjust the size as needed. \
Inside VM, run:</p>
<pre><code>sudo apt update
sudo apt install parted e2fsprogs
sudo parted /dev/sda
print
fix
resizepart 1 100%
quit
sudo resize2fs /dev/sda1
</code></pre>
<h3 id="checkimageinfo">Check Image Info</h3>
<p>In <strong>Termux</strong> (outside VM), run:</p>
<pre><code>qemu-img info debian-12-nocloud-amd64.qcow2
</code></pre>
<p>Change <code>debian-12-nocloud-amd64.qcow2</code> to the real file name. </p>
<h3 id="checkvmdisk">Check VM Disk</h3>
<p>Inside VM, run:</p>
<pre><code>df -h
</code></pre>
<p>and for partition, run:</p>
<pre><code>lsblk
</code></pre>
<h3 id="openssh">OpenSSH</h3>
<p>You can start a SSH server in QEMU VM and start a client in another <strong>Termux</strong> session with <code>openssh</code>.</p>
<h3 id="furtherreadingsandreferencesaboutqemu">Further Readings and References about QEMU</h3>
<ul>
<li><a href="https://ivonblog.com/posts/termux-qemu-system-linux/">https://ivonblog.com/posts/termux-qemu-system-linux/</a></li>
<li><a href="https://www.qemu.org/docs/master/index.html">https://www.qemu.org/docs/master/index.html</a></li>
<li><a href="https://www.debian.org/distrib/index.en.html">https://www.debian.org/distrib/index.en.html</a></li>
<li><a href="https://chatgpt.com/">https://chatgpt.com/</a></li>
<li><a href="https://www.reddit.com/r/debian/s/s871vXlGRI">https://www.reddit.com/r/debian/s/s871vXlGRI</a></li>
</ul>
<hr>
<h2 id="avncavncclientforandroid">AVNC: A VNC Client for Android</h2>
<h3 id="installavnc">Install AVNC</h3>
<p>You can install AVNC from F-Droid: <a href="https://f-droid.org/packages/com.gaurav.avnc/">https://f-droid.org/packages/com.gaurav.avnc/</a>.</p>
<h3 id="connectavncserver">Connect a VNC Server</h3>
<ul>
<li>Tap the <strong>+</strong> sign in the lower right corner, </li>
<li>Input <strong>Name</strong> (arbitrary name), <strong>Host</strong> address (<code>localhost</code> for localhost), and <strong>Port</strong>, input <strong>Username</strong> and <strong>Password</strong> if needed, adjust <strong>ADVANCED</strong> options if needed, and then tap <strong>SAVE</strong>.</li>
<li>Tap the Server name to connect.</li>
<li>If you encounter incorrect mouse display or recieving, going to <strong>Settings => Input => Mouse</strong> and toggling on <strong>Hide local pointer</strong> may help.</li>
</ul>
<h3 id="featuresofavnc">Features of AVNC</h3>
<ul>
<li>Gesture styles: Automatic, Touchscreen (Do actions at touch-point), or Touchpad mode (Do actions at pointer).</li>
<li>Material Design: Dark theme and light theme.</li>
<li>Configurable gestures: Configure the meaning of each gesture.</li>
<li>Tight encoding.</li>
<li>Virtual Keys: Go to <strong>Settings => Input => Virtual keys => Customize keys</strong> to customize Virtual Key layout.</li>
<li>Picture-in-Picture mode.</li>
<li>View-only mode.</li>
<li>Zeroconf Server Discovery.</li>
<li>TLS support: AnonTLS and VeNCrypt.</li>
<li>SSH tunnel: VNC over SSH.</li>
<li>Import/Export servers.</li>
<li>VNC Repeater support.</li>
<li>Clipboard Sync with server.</li>
<li>Pause update in background.</li>
<li>Automatic reconnection.</li>
<li>Automatically find supported servers.</li>
</ul>
<hr>
<h2 id="shizukusystemuitunerandashelluselocaladbofandroiddeviceonterminalssuchastermuxwithoutanotherdevicewithshizukuleavedeveloperoptionsoffwhendoingsowithsystemuituneranduseadbwithfeatureslikeautocompletesuggestionwithashell">Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell</h2>
<h3 id="installshizuku">Install Shizuku</h3>
<ul>
<li>Install <strong>Shizuku</strong> from Google Play: <a href="https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api">https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api</a>.</li>
<li>Official tutorial of Shizuku: <a href="https://shizuku.rikka.app/guide/setup/?night=1">https://shizuku.rikka.app/guide/setup/?night=1</a></li>
</ul>
<h3 id="introductionofshizukuandadb">Introduction of Shizuku and ADB</h3>
<ul>
<li><strong>Shizuku</strong> is An open-source app for serving multiple apps that require root/adb.</li>
<li>The Android Debug Bridge (commonly abbreviated as adb) is a programming tool used for the debugging of Android-based devices. The daemon on the Android device connects with the server on the host PC over USB or TCP, which connects to the client that is used by the end-user over TCP. Made available as open-source software under the Apache License by Google since 2007, its features include a shell and the possibility to make backups. The adb software is available for Windows, Linux and macOS. It has been misused by botnets and other malware, for which mitigations were developed such as RSA authentication and device whitelisting.</li>
<li>Further readings and references: </li>
<li><a href="https://developer.android.com/tools/adb">https://developer.android.com/tools/adb</a>.</li>
<li><a href="https://android.googlesource.com/platform/packages/modules/adb/">https://android.googlesource.com/platform/packages/modules/adb/</a>.</li>
</ul>
<h3 id="connectshizukutowirelessadb">Connect Shizuku to Wireless ADB</h3>
<ol>
<li>Grant <strong>Shizuku</strong> notification permission.</li>
<li>Tap <strong>Pairing</strong> in <strong>Start via Wireless debugging</strong> block in <strong>Shizuku</strong>.</li>
<li>Connect to a WiFi you trust. You don't need to log in to the WiFi if the WiFi needs that. You just need to let your phone think that you're connected to WiFi.</li>
<li>In phone's <strong>Settings</strong> or something similar, go to <strong>About Phone > Software Information</strong> or something similar, and tap the <strong>Version Number</strong> seven times to enable <strong>Developer Options</strong>. Some phones may have different methods to enable <strong>Developer Options</strong>.</li>
<li>In the <strong>Developer Options</strong>, enable <strong>Wireless ADB</strong> and tap <strong>Pair with a pairing code</strong>.</li>
<li>Input the pairing code in the notification of <strong>Shizuku</strong>.</li>
<li>In the <strong>Developer Options</strong>, togle on <strong>Disable adb authorization timeout</strong> if you don't want to do all the above again every few times using <strong>Shizuku</strong>. If the connection is disconnected due to whatever reason, follow <a href="#reconnect-shizuku-in-case-it-stops-with-systemui-tuner">Reconnect Shizuku in Case it Stops with SystemUI Tuner</a> to reconnect if you're using <strong>SystemUI Tuner</strong>, or follow above guide again to reconnect if not.</li>
<li>Back to <strong>Shizuku</strong> and tap <strong>Start</strong> in <strong>Start via Wireless debugging</strong> block. You all see <strong>Shizuku is running</strong> on the top of the interface of <strong>Shizuku</strong>.</li>
</ol>
<h3 id="useshizukuinaterminalapplicationforthefirsttimetermuxforexample">Use Shizuku in a Terminal Application for the First Time (Termux for Example)</h3>
<ol>
<li>Tap <strong>Use Shizuku in terminal applications</strong> in <strong>Shizuku</strong> and export files <code>rish</code> and <code>rish_shizuku.dex</code> to somewhere on your phone.</li>
<li>Use a text editor to replace <code>PKG</code> in <code>rish</code> with the package name of your terminal application. Take <strong>Termux</strong> for example, <strong>Termux</strong>'s package name is <code>com.termux</code>. Run <code>termux-setup-storage</code> and tap <strong>Allow</strong> to grant <strong>Termux</strong> storage permission if you want to use it to run ADB commands (and many other commands). </li>
<li>Open your terminal application and move the exported files to somewhere it can access with <code>mv old_location new_location</code>. The root directory of the main storage of Android is usually <code>/storage/emulated/0</code>. The home directory of <strong>Termux</strong> is <code>/data/data/com.termux/home</code>, which is abbreviated as <code>~</code> in <strong>Termux</strong>.</li>
<li>Go to the directory you moved the exported files to with <code>cd directory</code> (assumed <code>~/shizuku</code> below) and run <code>sh rish</code>.</li>
<li>Where used to be <code>~ $</code> should become <code>e2q:/ $</code> or something similar if <code>sh rish</code> succeeded. Write ADB commands here. Note that there is no need to use <code>adb</code> or <code>adb shell</code> prefixes before commands and that <code>devices</code> command gets <code>/system/bin/sh: devices: inaccessible or not found</code>.</li>
<li>You can turn WiFi off after ADB is connected. The notification of <strong>Shizuku</strong> may say <strong>Paring failed</strong> after that, but you can check <strong>Shizuku</strong> app to check whether there's a block read <strong>Shizuku is running</strong> on the top.</li>
<li>Optionally, create a <code>.sh</code> file (<code>nano ~/shizuku.sh</code> for example), paste the following code block, save it, and make it executable with <code>chmod +x shizuku.sh</code> so that you can run this shortcut to start <strong>Shizuku</strong> on your terminal afterward.
<code>
#!/data/data/com.termux/files/usr/bin/bash
cd shizuku
sh rish
</code></li>
<li><strong>Note</strong>: It is recommended to use <strong>Termux</strong>'s F-Droid version and avoid using Google Play version because the latter is depreciated. F-Droid: <a href="https://f-droid.org/packages/com.termux/">https://f-droid.org/packages/com.termux/</a>.</li>
</ol>
<h3 id="installsystemuituner">Install SystemUI Tuner</h3>
<p>Install <strong>SystemUI Tuner</strong> (pub: <strong>Zachary Wander</strong>) from Google Play: <a href="https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner">https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner</a>.</p>
<h3 id="toleavedeveloperoptionsoffwhenusingshizukutoconnecttoadb">To Leave Developer Options off When Using Shizuku to Connect to ADB</h3>
<p>Some financial apps may require Developer Options to be off when using them. This section is the tutorial about how to turn Developer Options off while still using Shizuku ADB Shell.</p>
<ol>
<li>Follow the screen instructions of <strong>SystemUI Tuner</strong>. </li>
<li>Run <code>adb shell</code> command <code>pm grant com.zacharee1.systemuituner android.permission.WRITE_SECURE_SETTINGS</code> (you can do it with <strong>Shizuku</strong> and a terminal such as <strong>Termux</strong> or <strong>aShell</strong>).</li>
<li>Connect to a WiFi. You don't need to log in or have real WiFi access, just make your phone believes you are connected to WiFi.</li>
<li>Turn off <strong>Developer Options</strong> if it's on. The toggle switch is usually on the top of <strong>Developer Options</strong>.</li>
<li>In <strong>SystemUI Tuner</strong>, go to <strong>Developer</strong> and turn on <strong>Enable ADB</strong> and <strong>Enable Wireless ADB</strong>.</li>
<li>Go to <strong>Persistent Options</strong> and select <strong>Enable ADB</strong>.</li>
<li>Press <strong>Start</strong> on <strong>Shizuku</strong>.</li>
<li>Turn off WiFi. <strong>Enable Wireless ADB</strong> will be turned off automatically by system settings. You can check that in <strong>SystemUI Tuner</strong>.</li>
</ol>
<h3 id="reconnectshizukuincaseitstopswithsystemuituner">Reconnect Shizuku in Case it Stops with SystemUI Tuner</h3>
<ol>
<li>Connect to a WiFi. You don't need to log in or have real WiFi access, just make your phone believes you are connected to WiFi.</li>
<li>Turn off <strong>Developer Options</strong> if it's on. The toggle switch is usually on the top of <strong>Developer Options</strong>.</li>
<li>In <strong>SystemUI Tuner</strong>, go to <strong>Developer</strong> and turn on <strong>Enable Wireless ADB</strong>.</li>
<li>Press <strong>Start</strong> on <strong>Shizuku</strong>.</li>
<li>Turn off WiFi. <strong>Enable Wireless ADB</strong> will be turned off automatically by system settings. You can check that in <strong>SystemUI Tuner</strong>.</li>
</ol>
<h3 id="othersystemuitunerusage">Other SystemUI Tuner Usage</h3>
<p><strong>SystemUI Tuner</strong> exposes some hidden options in Android. You can set them, add them to <strong>Persistent Options</strong> to keep them on, etc. Different manufacturers may remove or change these options, which SystemUI Tuner CANNOT work around.\
You may need to run the following <code>adb shell</code> command (you can do it with <strong>Shizuku</strong> and a terminal such as <strong>Termux</strong> or <strong>aShell</strong>) in order to change the settings:</p>
<pre><code>pm grant com.zacharee1.systemuituner android.permission.WRITE_SECURE_SETTINGS
pm grant com.zacharee1.systemuituner android.permission.PACKAGE_USAGE_STATS
pm grant com.zacharee1.systemuituner android.permission.DUMP
</code></pre>
<h3 id="usingashell">Using aShell</h3>
<ul>
<li><strong>aShell</strong> has features like autocomplete suggestions and optional log.</li>
<li>Download and Install <strong>aShell</strong> from F-droid. F-droid: <a href="https://f-droid.org/packages/in.sunilpaulmathew.ashell/">https://f-droid.org/packages/in.sunilpaulmathew.ashell/</a>.</li>
<li>Give <strong>aShell</strong> the permission <code>moe.shizuku.manager.permission.API_V23</code>.</li>
<li>Connect <strong>Shizuku</strong> to local ADB according to above guide.</li>
<li>Use <strong>aShell</strong>.</li>
</ul>
<hr>
<h2 id="trackercontrolandinvizibleproroutetrafficthroughtorblockdnsoverudpsetdnsserverandblocktrackers">TrackerControl and InviZible Pro: Route Traffic through Tor, Block DNS over UDP, Set DNS Server, and Block Trackers</h2>
<h3 id="installinviziblepro">Install InviZible Pro</h3>
<ul>
<li>Download and install <strong>InviZible Pro</strong> from F-Droid or Google Play. F-Droid: <a href="https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/">https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/</a>. Google Play: <a href="https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp">https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp</a>.</li>
</ul>
<h3 id="installtrackercontrol">Install TrackerControl</h3>
<ul>
<li>Download and install <strong>TrackerControl</strong> (also known as <strong>TC</strong>) from F-Droid. F-Droid: <a href="https://f-droid.org/packages/net.kollnig.missioncontrol.fdroid/">https://f-droid.org/packages/net.kollnig.missioncontrol.fdroid/</a>.</li>
<li><strong>Note</strong>: Avoid use the Google Play version because it doesn't have the feature like trackers blocking in order to comply with Google's terms.</li>
</ul>
<h3 id="usetrackercontroltoblocktrackers">Use TrackerControl to Block Trackers</h3>
<ul>
<li>Block unwanted trackers in the main interface of the apps. </li>
<li><strong>Note</strong>: <strong>TrackerControl</strong> categorizes trackers by port, corporation, category, etc. You can easily block and allow connections. You may have to try several time to figure out what trackers to allow in order to prevent apps from crashing in few cases.</li>
<li>Turn on <strong>TrackerControl</strong> as the VPN service of the entire device.</li>
<li>Blocking trackers can be used independently or with <strong>Prxoy mode</strong> of <strong>InviZible Pro</strong>.</li>
</ul>
<h3 id="configuretrackercontroltctobeusedwithinviziblepro">Configure TrackerControl (TC) to be used with InviZible Pro</h3>
<ul>
<li>Turn on <strong>TrackerControl</strong> as the VPN service of the entire device.</li>
<li>Disable monitoring of <strong>InviZible Pro</strong> (<code>pan.alexander.tordnscrypt.stable</code>) within <strong>TrackerControl</strong>.</li>
<li>Go to the Advanced options in <strong>Settings</strong>.<ul>
<li>Turn on <strong>Block Trackers on UDP</strong>.</li>
<li>Set the <strong>SOCKS5 address</strong> to <code>127.0.0.1</code>.</li>
<li>Set the <strong>SOCKS port</strong> to the port you've configured Tor to use in <strong>InviZible Pro</strong> (<code>9050</code> by default).</li>
<li>Enable the <strong>Use SOCKS5 proxy</strong> option.</li>
<li>Go to <strong>Port forwarding</strong>.</li>
<li>Add <code>UDP 53&gt;/127.0.0.1:</code>the port you configure DNSCrypt to listen to in <strong>DNSCrypt Settings</strong> in <strong>InviZible Pro</strong>  (<code>5354</code> by default) <code>nobody</code>.</li>
<li>Add <code>TCP 53&gt;/127.0.0.1:</code>the port you configure DNSCrypt to listen to in <strong>DNSCrypt Settings</strong> in <strong>InviZible Pro</strong>  (<code>5354</code> by default) <code>nobody</code>.</li>
<li>Set first (above) <strong>VPN DNS</strong> as <code>9.9.9.9</code>.</li>
<li>Set second (below) <strong>VPN DNS</strong> as <code>149.112.112.112</code>.</li>
<li>Set where to validate the internet connection in <strong>Validate at</strong> if you want, <code>www.f-droid.org</code> for example.</li></ul></li>
<li>Set other things if you want.</li>
<li>Block unwanted trackers. </li>
<li><strong>Note</strong>: If you export settings and import it on another device, the blocklist won't be able to be configured as that in the previous device.</li>
<li>You can apply some of the above settings with the <code>.xml</code> below (assuming the configuration of <strong>Invizible Pro</strong> is as in this guide) by coping it, storing it in a <code>.xml</code> file and going to <strong>Settings > Backup > Import settings</strong> to import this file. However, it just contains some of the settings, you have to configure others yourself and test whether your applications work as normal because things may vary from case to case. 
<pre><code>
&lt;?xml version='1.0' encoding='UTF-8' standalone='yes' ?&gt;
&lt;trackercontrol&gt;
  &lt;application&gt;
    &lt;setting key="dns2" type="string" value="149.112.112.112" /&gt;
    &lt;setting key="filter_udp" type="boolean" value="true" /&gt;
    &lt;setting key="domain_based_blocking" type="boolean" value="true" /&gt;
    &lt;setting key="dark_theme" type="boolean" value="true" /&gt;
    &lt;setting key="dns" type="string" value="9.9.9.9" /&gt;
    &lt;setting key="hosts_url_new" type="string" value="https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts" /&gt;
    &lt;setting key="wifi_homes" type="set" value="" /&gt;
    &lt;setting key="traffic_blocked" type="boolean" value="true" /&gt;
    &lt;setting key="hosts_url" type="string" value="https://www.netguard.me/hosts" /&gt;
    &lt;setting key="socks5_addr" type="string" value="127.0.0.1" /&gt;
    &lt;setting key="socks5_port" type="string" value="9050" /&gt;
    &lt;setting key="proto_tcp" type="boolean" value="true" /&gt;
    &lt;setting key="manage_system" type="boolean" value="true" /&gt;
    &lt;setting key="validate" type="string" value="www.f-droid.org" /&gt;
    &lt;setting key="update_check" type="boolean" value="true" /&gt;
    &lt;setting key="socks5_enabled" type="boolean" value="true" /&gt;
    &lt;setting key="filter" type="boolean" value="true" /&gt;
  &lt;/application&gt;
  &lt;apply&gt;
    &lt;setting key="com.termux" type="boolean" value="false" /&gt;
    &lt;setting key="pan.alexander.tordnscrypt.stable" type="boolean" value="false" /&gt;
  &lt;/apply&gt;
  &lt;forward&gt;
    &lt;port pkg="nobody" protocol="17" dport="53" raddr="127.0.0.1" rport="5354" /&gt;
    &lt;port pkg="nobody" protocol="6" dport="53" raddr="127.0.0.1" rport="5354" /&gt;
  &lt;/forward&gt;
&lt;/trackercontrol&gt;
</code><pre></li>
<li><strong>Note</strong>: <strong>TrackerControl</strong> has a <strong>Traffic log</strong> feature for free, which can help a lot in identifying which trackers should be unblocked when the services crash.</li>
<li><strong>Note</strong>: The above guide, including the setting <code>.xml</code>, can be used in <strong>NetGuard</strong> as well because <strong>TrackerControl</strong> uses <strong>NetGuard</strong>'s code. However, <strong>Traffic log</strong> feature is not available in <strong>NetGuard</strong>'s free version but only available in <strong>TrackerControl</strong> and <strong>NetGuard</strong>'s <strong>Pro</strong> version. <strong>NetGuard</strong> is available on Google Play and F-Droid. Google Play: <a href="https://play.google.com/store/apps/details?id=eu.faircode.netguard">https://play.google.com/store/apps/details?id=eu.faircode.netguard</a>. F-Droid: <a href="https://f-droid.org/packages/eu.faircode.netguard/">https://f-droid.org/packages/eu.faircode.netguard/</a>. </li>
<li><strong>Note</strong>: You may have to disable monitoring of apps route traffic through Tor itself within <strong>TrackerControl</strong>, like <strong>Tor Browser</strong>,  and <strong>Termux</strong> if you're using <code>tor</code>, <code>torsocks</code>, or similar things.</li>
</ul>
<h3 id="configureinvizibleprotobeusedwithtrackercontrol">Configure InviZible Pro to be used with TrackerControl</h3>
<ul>
<li>Change to <strong>Proxy mode</strong> by tapping the 3-point button in the upper right corner.</li>
<li>Go to <strong>Fast settings</strong>.<ul>
<li>Turn on <strong>Autostart DNSCrypt</strong> and <strong>Autostart Tor</strong> if you want.</li>
<li>Set Delay, DNSCrypr servers, bridges, whether to spoof SNI, etc. if needed.</li></ul></li>
<li>Go to <strong>Common Settings</strong> and turn on <strong>Prevent device sleep</strong> if needed.</li>
<li>Go to <strong>DNSCrypt Settings</strong><ul>
<li>Go to <strong>Listen port</strong> and set it to the port <strong>TrackerControl</strong> forwarding UDP and TCP of port <code>53</code> to (<code>5354</code> by default).</li>
<li>Set requirements if you want.</li>
<li>Turn on <strong>Force TCP</strong>.</li>
<li>Turn on <strong>Outbound proxy</strong> in <strong>SOCKS proxy</strong> section.</li>
<li>Set <strong>Proxy port</strong> as the port you want to configure Tor to use in <strong>InviZible Pro</strong> (<code>9050</code> by default).</li>
<li>Ensure the <strong>Forwarding rules</strong> is coordinate with the <strong>DNS port</strong> in <strong>Tor settings</strong> (<code>onion 127.0.0.1:5400</code> by default).</li>
<li>Turn on <strong>Query logging</strong> and <strong>Suspicious logging</strong> if you want.</li></ul></li>
<li>Go to <strong>Tor settings</strong>.<ul>
<li>Set Nodes, Proxy, etc. if you want. Make sure the <strong>SOCKS port</strong> is coordinated with the <strong>SOCKS proxy</strong> in <strong>TrackerControl</strong> and the <strong>DNS port</strong> is coordinated with the <strong>Forwarding rules</strong> in <strong>DNSCrypt Settings</strong> (<code>onion 127.0.0.1:5400</code> by default).</li></ul></li>
<li>Set other things if you want.</li>
<li>You can apply some of the above settings with the files below (assuming the configuration of <strong>TrackerControl</strong> is as in this guide). However, they just contain some of the settings, you have to configure others yourself and test whether your applications work as normal because things may vary from case to case. <ul>
<li><code>dns-proxy.toml</code>: Copy the text in the below block, tap <code>Edit dns-proxy.toml</code> in <strong>DNSCrypt Settings</strong>, and paste.
<pre><code>
ipv4_servers = true
ipv6_servers = true
require_dnssec = true
require_nolog = false
require_nofilter = false
block_ipv6 = false
force_tcp = true
server_names = ['adguard-dns', 'adguard-dns-ipv6', 'ahadns-doh-la', 'brahma-world-ipv6', 'dnsforge.de', 'mullvad-base-doh', 'sfw.scaleway-fr']
disabled_server_names = []
listen_addresses = ['127.0.0.1:5354', '[::1]:5354']
max_clients = 250
#user_name = '0'
dnscrypt_servers = true
doh_servers = true
odoh_servers = true
timeout = 5000
keepalive = 30
netprobe_timeout = -1
log_level = 2
log_file = '/data/user/0/pan.alexander.tordnscrypt.stable/logs/DnsCrypt.log'
use_syslog = false
cert_refresh_delay = 240
dnscrypt_ephemeral_keys = false
tls_disable_session_tickets = false
bootstrap_resolvers = ['9.9.9.9:53', '[2620:fe::fe]:53']
netprobe_address = '9.9.9.9:53'
block_unqualified = true
block_undelegated = true
reject_ttl = 10
ignore_system_dns = false
http3 = true
log_files_max_size = 1
log_files_max_age = 7
log_files_max_backups = 1
cache = true
cache_size = 4096
cache_min_ttl = 2400
cache_max_ttl = 86400
cache_neg_ttl = 60
cache_neg_max_ttl = 600
forwarding_rules = 'forwarding-rules.txt'
cloaking_rules = 'cloaking-rules.txt'
proxy = 'socks5://127.0.0.1:9050'
[captive_portals]
map_file = 'captive-portals.txt'
[dns64]
#prefix = ['64:ff9b::/96']
[local_doh]
#listen_addresses = ['127.0.0.1:3000']
#path = '/dns-query'
#cert_file = 'localhost.pem'
#cert_key_file = 'localhost.pem'
[query_log]
format = 'tsv'
file = '/data/user/0/pan.alexander.tordnscrypt.stable/cache/query.log'
ignored_qtypes = ['DNSKEY', 'NS']
[nx_log]
format = 'tsv'
file = '/data/user/0/pan.alexander.tordnscrypt.stable/cache/nx.log'
[blocked_names]
blocked_names_file = 'blacklist.txt'
[blocked_ips]
blocked_ips_file = 'ip-blacklist.txt'
[allowed_names]
allowed_names_file = 'whitelist.txt'
[sources]
[sources.'public-resolvers']
urls = ['https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v3/public-resolvers.md', 'https://download.dnscrypt.info/resolvers-list/v3/public-resolvers.md', 'https://ipv6.download.dnscrypt.info/resolvers-list/v3/public-resolvers.md']
minisign_key = 'RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3'
cache_file = 'public-resolvers.md'
refresh_delay = 72
prefix = ''
[sources.'relays']
urls = ['https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v3/relays.md', 'https://download.dnscrypt.info/resolvers-list/v3/relays.md', 'https://ipv6.download.dnscrypt.info/resolvers-list/v3/relays.md']
cache_file = 'relays.md'
minisign_key = 'RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3'
refresh_delay = 72
prefix = ''
[sources.'odoh-servers']
urls = ['https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v3/odoh-servers.md', 'https://download.dnscrypt.info/resolvers-list/v3/odoh-servers.md', 'https://ipv6.download.dnscrypt.info/resolvers-list/v3/odoh-servers.md']
cache_file = 'odoh-servers.md'
minisign_key = 'RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3'
refresh_delay = 72
prefix = ''
[sources.'odoh-relays']
urls = ['https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v3/odoh-relays.md', 'https://download.dnscrypt.info/resolvers-list/v3/odoh-relays.md', 'https://ipv6.download.dnscrypt.info/resolvers-list/v3/odoh-relays.md']
cache_file = 'odoh-relays.md'
minisign_key = 'RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3'
refresh_delay = 72
prefix = ''
[broken_implementations]
fragments_blocked = ['cisco', 'cisco-ipv6', 'cisco-familyshield', 'cisco-familyshield-ipv6', 'cleanbrowsing-adult', 'cleanbrowsing-adult-ipv6', 'cleanbrowsing-family', 'cleanbrowsing-family-ipv6', 'cleanbrowsing-security', 'cleanbrowsing-security-ipv6']
[anonymized_dns]
skip_incompatible = false
routes = [
{ server_name = 'adguard-dns', via=['anon-kama', 'anon-scaleway', 'anon-tiarap'] },
{ server_name = 'sfw.scaleway-fr', via=['anon-kama', 'anon-serbica', 'anon-tiarap'] },
{ server_name = 'adguard-dns-ipv6', via=['anon-ams-ipv6', 'anon-scaleway-ams-ipv6', 'anon-tiarap-ipv6'] }
]
[static]
</code></pre></li>
<li><code>tor.conf</code>: Copy the text in the below block, tap <code>Edit tor.conf</code> in <strong>Tor Settings</strong>, and paste.
<pre><code>
RunAsDaemon 0
AvoidDiskWrites 1
AutomapHostsOnResolve 1
AutomapHostsSuffixes .exit, .onion
#ExcludeExitNodes
TransPort 9040
DNSPort 127.0.0.1:5400
DNSPort [::1]:5400
SOCKSPort 127.0.0.1:9050
SOCKSPort [::1]:9050
HardwareAccel 1
Schedulers Vanilla
#Socks5Proxy 127.0.0.1:1080
ClientOnly 1
ExitPolicy reject *:*
ExitPolicy reject6 *:*
GeoIPFile /data/user/0/pan.alexander.tordnscrypt.stable/app_data/tor/geoip
GeoIPv6File /data/user/0/pan.alexander.tordnscrypt.stable/app_data/tor/geoip6
DataDirectory /data/user/0/pan.alexander.tordnscrypt.stable/tor_data
VirtualAddrNetworkIPv4 10.192.0.0/10
VirtualAddrNetworkIPv6 [FC00::]/8
Log notice file /data/user/0/pan.alexander.tordnscrypt.stable/logs/Tor.log
ConnectionPadding 1
ReducedConnectionPadding 1
#ExcludeNodes
ExitNodes {AU},{AT},{GB},{US},{DE},{SE},{CH},{LU},{NL},{NZ},{CA},{JP},{TW},{KR},{BE},{KY},{DK},{FI},{GL},{GR},{IS},{HU},{IE},{IT},{ES},{PT},{PL},{HR},{EE},{LV},{NO},{PH},{SG},{FR}
#EntryNodes
StrictNodes 0
#ReachableAddresses *:80,*:443
NewCircuitPeriod 30
MaxCircuitDirtiness 600
EnforceDistinctSubnets 1
HTTPTunnelPort 8118
DormantCanceledByStartup 1
DormantClientTimeout 15 minutes
CircuitsAvailableTimeout 86400
ClientUseIPv4 1
ClientUseIPv6 1
UseBridges 0
</code><pre></li></ul></li>
<li>Turn both <strong>Tor</strong> and <strong>DNSCrypt</strong> of <strong>InviZible Pro</strong> on.</li>
<li><strong>Note</strong>: Some services may crash when routing traffic through <code>tor</code> (set in <strong>Using SOCKS5 proxy</strong> in <strong>TrackerControl</strong>), change the <strong>Exit nodes</strong> to the service's country or region of publication in <strong>InviZible Pro</strong> may help. Otherwise, you may try disabling monitoring that app or stopping <strong>Using SOCKS5 proxy</strong> in <strong>TrackerControl</strong>, which compromise your privacy to some degree.</li>
</ul>
<h3 id="usetorbutnotdnscryprofinviziblepro">Use Tor but not DNSCrypr of InviZible Pro</h3>
<p>If you want to use Tor but not DNSCrypr of <strong>InviZible Pro</strong> with <strong>TrackerControl</strong>, do below modification on configuration of both DNSCrypt and Tor above:</p>
<ul>
<li>Go to <strong>Port forwarding</strong> in <strong>TrackerControl</strong><ul>
<li>Delete all forwardings to port <code>5354</code>.</li>
<li>Add <code>UDP 53&gt;/127.0.0.1:</code>the port you configure <strong>Resolve DNS</strong> to listen to in <strong>Tor Settings</strong> in <strong>InviZible Pro</strong>  (<code>5400</code> by default) <code>nobody</code>.</li>
<li>Add <code>TCP 53&gt;/127.0.0.1:</code>the port you configure <strong>Resolve DNS</strong> to listen to in <strong>Tor Settings</strong> in <strong>InviZible Pro</strong>  (<code>5400</code> by default) <code>nobody</code>.</li></ul></li>
<li>Delete (set to empty) both <strong>VPN DNS</strong> in <strong>TrackerControl</strong>.</li>
<li>Turn on Tor but not DNSCrypt in <strong>InviZible Pro</strong>.</li>
</ul>
<h3 id="usednscryprbutnottorofinviziblepro">Use DNSCrypr But not Tor of InviZible Pro</h3>
<p>If you want to use DNSCrypr But not Tor of <strong>InviZible Pro</strong> with <strong>TrackerControl</strong>, do below modification on configuration of both DNSCrypt and Tor above:</p>
<ul>
<li>Turn off <strong>Use SOCKS5 proxy</strong> in <strong>TrackerControl</strong>.</li>
<li>Turn off <strong>Outbound prxoy</strong> in <strong>DNSCrypt Settings</strong> in <strong>InviZible Pro</strong>.</li>
<li>Turn on DNSCrypt but not Tor in <strong>InviZible Pro</strong>.</li>
</ul>
<h3 id="checkwhetherthetorroutesetupissuccessful">Check Whether the Tor Route Setup Is Successful</h3>
<ul>
<li>Go to <a href="https://check.torproject.org/">https://check.torproject.org/</a> to check if your Tor route succeeded. If yes, you will see  "Congratulations. This browser is configured to use Tor." (assume the page's language is set to English).</li>
<li>Go to <a href="https://whatismyipaddress.com">https://whatismyipaddress.com</a> (not open source), <a href="https://ipcheck.ing/">https://ipcheck.ing/</a>, or other IP checking websites to see wether it's your device's IP. If not, your Tor route is successful.</li>
<li>Go to <a href="https://www.dnsleaktest.com">https://www.dnsleaktest.com</a> (not open source), <a href="https://ipcheck.ing/">https://ipcheck.ing/</a>, or other DNS leak testing websites to check if there is a DNS leak. You will see the DNS servers you set in <strong>DNSCrypt Settings</strong> in <strong>InviZible Pro</strong> instead of your ISP's servers if there's no DNS leak.</li>
</ul>
<h3 id="useinvizibleprowithouttrackercontrol">Use Invizible Pro without TrackerControl</h3>
<ul>
<li>Change to <strong>VPN mode</strong> by tap the 3-point button in the upper right corner.</li>
</ul>
<hr>
<h2 id="torbrowser">Tor Browser</h2>
<h3 id="installtorbrowser">Install Tor Browser</h3>
<p>You can install <strong>Tor Browser</strong> from Google Play: <a href="https://play.google.com/store/apps/details?id=org.torproject.torbrowser">https://play.google.com/store/apps/details?id=org.torproject.torbrowser</a>.</p>
<h3 id="introductionoftor">Introduction of Tor</h3>
<p>Tor is a free overlay network for enabling anonymous communication. Built on free and open-source software and more than seven thousand volunteer-operated relays worldwide, users can have their Internet traffic routed via a random path through the network.\
Using Tor makes it more difficult to trace a user's Internet activity by preventing any single point on the Internet (other than the user's device) from being able to view both where traffic originated from and where it is ultimately going to at the same time. This conceals a user's location and usage from anyone performing network surveillance or traffic analysis from any such point, protecting the user's freedom and ability to communicate confidentially.\
Key Features of Tor:</p>
<ol>
<li>Anonymity: Tor allows users to browse the internet anonymously by routing their internet traffic through a network of volunteer-operated servers called nodes or relays. Each relay only knows the IP address of the previous and next node, making it difficult to trace the origin of the traffic.</li>
<li>Onion Routing: The name "Onion Router" comes from the way data is encrypted in layers, similar to the layers of an onion. When data is sent through the Tor network, it is encrypted multiple times, and each node decrypts a layer before passing it on to the next, protecting user privacy.</li>
<li>Access to .onion Sites: Tor allows users to access hidden services with .onion domain names, which are not reachable through standard web browsers. These sites often provide additional privacy and anonymity.</li>
<li>Bypass Censorship: Tor can help users bypass censorship and access restricted content by routing traffic through nodes in different countries.</li>
<li>Privacy Tools: The Tor Browser, based on Mozilla Firefox, comes preconfigured with privacy enhancements, making it easier for users to maintain anonymity while browsing.\
The <strong>Tor Browser</strong> for Android is a mobile version of the Tor Browser that utilizes <strong>Mozilla Firefox</strong> for Android codebase.</li>
</ol>
<h3 id="noscriptsecuritysuite">NoScript Security Suite</h3>
<p><strong>NoScript</strong> (or <strong>NoScript Security Suite</strong>) is a free and open-source extension for Firefox- and Chromium-based web browsers, written and maintained by Giorgio Maone, a software developer and member of the Mozilla Security Group.\
By default, NoScript blocks active (executable) web content, which can be wholly or partially unblocked by allowlisting a site or domain from the extension's toolbar menu or by clicking a placeholder icon.\
It is recommended to enable NoScript for all Tor sites unless you fully trust it.</p>
<hr>
<h2 id="opensslsecuresocketslayersslandtransportlayersecuritytlsprotocolsandcryptographylibraryimplementation">OpenSSL: Secure Sockets Layer (SSL) and Transport Layer Security (TLS) Protocols and Cryptography Library Implementation</h2>
<h3 id="introductionofopenssl">Introduction of OpenSSL</h3>
<p><strong>OpenSSL</strong> is an open-source library that provides a comprehensive suite of cryptographic tools for securing communications over computer networks. It implements the Secure Sockets Layer (SSL) and Transport Layer Security (TLS) protocols and includes a general-purpose cryptographic library that supports a variety of encryption algorithms, hashing functions, digital signatures, key generation, certificate management, and secure random number generation.</p>
<h3 id="installationofopensslintermux">Installation of OpenSSL in Termux</h3>
<pre><code>pkg install openssl openssl-tool
</code></pre>
<h3 id="installationofopensslindebian">Installation of OpenSSL in Debian</h3>
<pre><code>sudo apt install openssl libssl-dev
</code></pre>
<h3 id="rsarivestshamiradleman">RSA (Rivest-Shamir-Adleman)</h3>
<h4 id="introductionofrsa">Introduction of RSA</h4>
<p>RSA is a widely used asymmetric encryption algorithm that underpins many security protocols. Its strength lies in the difficulty of factoring large prime numbers. The algorithm involves key generation, encryption, and decryption processes utilizing a pair of keys: a public key, shared openly, and a private key, kept secret.</p>
<ol>
<li><strong>Mathematical Foundation and Key Generation:</strong><br>
The algorithm begins by selecting two large prime numbers, \( p \) and \( q \). These are multiplied to produce \( n = p \times q \), the modulus for both keys. The totient function \( \phi(n) = (p-1)(q-1) \) is computed. A public exponent \( e \), typically 65537, is chosen, which is coprime to \( \phi(n) \). The public key is \( (n, e) \). The private exponent \( d \) is calculated such that \( d \cdot e \equiv 1 \mod \phi(n) \), making \( (n, d) \) the private key. RSA's security relies on the ease of multiplying primes and the difficulty of factoring their product.</li>
<li><strong>Public Encryption and Private Decryption (Communication):</strong><br>
After generating the keys, RSA can be used for secure communication. To encrypt a message \( m \), the sender uses the recipient's public key \( (n, e) \) with the formula \( c \equiv m^e \mod n \), where \( c \) is the ciphertext. Only the intended recipient, with the private key \( (n, d) \), can decrypt it using \( m \equiv c^d \mod n \).</li>
<li><strong>Private Encryption and Public Decryption (Signature):</strong><br>
RSA can also create digital signatures for authenticity and non-repudiation. The sender encrypts a hash \( h \) of the message with their private key \( (n, d) \): \( s \equiv h^d \mod n \). This signature \( s \) accompanies the original message \( m \). The recipient verifies the signature by decrypting it with the sender's public key \( (n, e) \): \( h' \equiv s^e \mod n \). If \( h' \) matches the hash of the received message \( m \), it confirms the message's authenticity.</li>
<li><strong>Applications:</strong><br>
RSA is employed in various applications that require secure communication and data integrity:</li>
</ol>
<ul>
<li><strong>Secure Web Communications (HTTPS):</strong> RSA is commonly used in SSL/TLS protocols to establish secure connections between web browsers and servers.</li>
<li><strong>Email Encryption:</strong> Services like PGP (Pretty Good Privacy) use RSA for encrypting emails, ensuring only intended recipients can read them.</li>
<li><strong>Digital Signatures:</strong> RSA is used to sign software and documents, verifying the identity of the sender and ensuring the content hasn't been altered.</li>
<li><strong>Secure Key Exchange:</strong> RSA can facilitate the secure exchange of symmetric keys for faster encryption methods, allowing secure communication without the need for shared secrets.</li>
</ul>
<h4 id="generatenewprivatekey">Generate New Private Key</h4>
<pre><code>openssl genrsa -out /path/privatekeyfilename.pem 2048
</code></pre>
<p><code>2048</code> means 2048 iterations, change the number as needed.</p>
<h4 id="generatepublickeyfromprivatekey">Generate Public Key from Private Key</h4>
<pre><code>openssl rsa -pubout -in /path/privatekeyfilename.pem -out /path/publickeyfilename.pem
</code></pre>
<h4 id="encryptwithpublickey">Encrypt with Public Key</h4>
<pre><code>openssl pkeyutl -in /path/filename.txt -out /path/publickeyencryptedfilename.txt -inkey /path/publickeyfilename.pem -pubin -encrypt
</code></pre>
<h4 id="decryptwithpublickey">Decrypt with Public Key</h4>
<pre><code>openssl pkeyutl -in /path/publickeyencryptedfilename.txt -out /path/filename.txt -inkey /path/privatekeyfilename.pem -decrypt
</code></pre>
<h4 id="encryptwithprivatekey">Encrypt with Private Key</h4>
<pre><code>openssl pkeyutl -in /path/filename.txt -out /path/privatekeyencryptedfilename.txt -inkey /path/privatekeyfilename.pem -encrypt
</code></pre>
<h4 id="decryptwithprivatekey">Decrypt with Private Key</h4>
<pre><code>openssl pkeyutl -in /path/privatekeyencryptedfilename.txt -out /path/filename.txt -inkey /path/publickeyfilename.pem -pubin -decrypt
</code></pre>
<h4 id="signarawfile">Sign a Raw File</h4>
<pre><code>openssl pkeyutl -in filename.txt -rawin -out signed_filename.txt -inkey keyfile/privatekeyfile.pem -sign
</code></pre>
<h4 id="signahexfile">Sign a Hex File</h4>
<pre><code>openssl pkeyutl -in hexfilename.txt -out signed_filename.txt -inkey keyfile/privatekeyfile.pem -sign
</code></pre>
<h4 id="verifyasignatureagainstarawfile">Verify a Signature Against a Raw File</h4>
<pre><code>openssl pkeyutl -in filename.txt -rawin -out verification.txt -sigfile signed_filename.txt -inkey keyfile/publickeyfile.pem -pubin -verify
</code></pre>
<h4 id="verifyasignatureagainstahexfile">Verify a Signature Against a Hex File</h4>
<pre><code>openssl pkeyutl -in hexfilename.txt -rawin -out verification.txt -sigfile signed_filename.txt -inkey keyfile/publickeyfile.pem -pubin -verify
</code></pre>
<h4 id="allcommandoptionsofpkeyutl">All Command Options of Pkeyutl</h4>
<pre><code>openssl pkeyutl [-help] [-in file] [-rawin] [-digest algorithm] [-out file] [-sigfile file] [-inkey filename|uri] [-keyform DER|PEM|P12|ENGINE] [-passin arg] [-peerkey file] [-peerform DER|PEM|P12|ENGINE] [-pubin] [-certin] [-rev] [-sign] [-verify] [-verifyrecover] [-encrypt] [-decrypt] [-derive] [-kdf algorithm] [-kdflen length] [-pkeyopt opt:value] [-pkeyopt_passin opt[:passarg]] [-hexdump] [-asn1parse] [-engine id] [-engine_impl] [-rand files] [-writerand file] [-provider name] [-provider-path path] [-propquery propq] [-config configfile]
</code></pre>
<p><strong>DESCRIPTION</strong>: This command can be used to perform low-level public key operations using any supported algorithm.\
<strong>OPTIONS</strong>:</p>
<ul>
<li>-help: Print out a usage message.</li>
<li>-in filename: This specifies the input filename to read data from or standard input if this option is not specified.</li>
<li>-rawin: This indicates that the input data is raw data, which is not hashed by any message digest algorithm. The user can specify a digest algorithm by using the -digest option. This option can only be used with -sign and -verify and must be used with the Ed25519 and Ed448 algorithms.</li>
<li>-digest algorithm: This specifies the digest algorithm which is used to hash the input data before signing or verifying it with the input key. This option could be omitted if the signature algorithm does not require one (for instance, EdDSA). If this option is omitted but the signature algorithm requires one, a default value will be used. For signature algorithms like RSA, DSA and ECDSA, SHA-256 will be the default digest algorithm. For SM2, it will be SM3. If this option is present, then the -rawin option must be also specified.</li>
<li>-out filename: Specifies the output filename to write to or standard output by default.</li>
<li>-sigfile file: Signature file, required for -verify operations only</li>
<li>-inkey filename|uri: The input key, by default it should be a private key.</li>
<li>-keyform DER|PEM|P12|ENGINE: The key format; unspecified by default. See openssl-format-options(1) for details.</li>
<li>-passin arg: The input key password source. For more information about the format of arg see openssl-passphrase-options(1).</li>
<li>-peerkey file: The peer key file, used by key derivation (agreement) operations.</li>
<li>-peerform DER|PEM|P12|ENGINE: The peer key format; unspecified by default. See openssl-format-options(1) for details.</li>
<li>-pubin: By default a private key is read from the key input. With this option a public key is read instead. If the input contains no public key but a private key, its public part is used.</li>
<li>-certin: The input is a certificate containing a public key.</li>
<li>-rev: Reverse the order of the input buffer. This is useful for some libraries (such as CryptoAPI) which represent the buffer in little endian format.</li>
<li>-sigfile file: Signature file, required for -verify operations only</li>
<li>-inkey filename|uri: The input key, by default it should be a private key.</li>
<li>-keyform DER|PEM|P12|ENGINE: The key format; unspecified by default. See openssl-format-options(1) for details.</li>
<li>-passin arg: The input key password source. For more information about the format of arg see openssl-passphrase-options(1).</li>
<li>-peerkey file: The peer key file, used by key derivation (agreement) operations.</li>
<li>-peerform DER|PEM|P12|ENGINE: The peer key format; unspecified by default. See openssl-format-options(1) for details.</li>
<li>-pubin: By default a private key is read from the key input. With this option a public key is read instead. If the input contains no public key but a private key, its public part is used.</li>
<li>-certin: The input is a certificate containing a public key.</li>
<li>-rev: Reverse the order of the input buffer. This is useful for some libraries (such as CryptoAPI) which represent the buffer in little endian format.</li>
<li>-sign: Sign the input data (which must be a hash) and output the signed result. This requires a private key.</li>
<li>-verify: Verify the input data (which must be a hash) against the signature file and indicate if the verification succeeded or failed.</li>
<li>-verifyrecover: Verify the input data (which must be a hash) and output the recovered data.</li>
<li>-encrypt: Encrypt the input data using a public key.</li>
<li>-decrypt: Decrypt the input data using a private key.</li>
<li>-derive: Derive a shared secret using the peer key.</li>
<li>-kdf algorithm: Use key derivation function algorithm. The supported algorithms are at present TLS1-PRF and HKDF. Note: additional parameters and the KDF output length will normally have to be set for this to work. See EVP<em>PKEY</em>CTX<em>set</em>hkdf<em>md(3) and EVP</em>PKEY<em>CTX</em>set<em>tls1</em>prf_md(3) for the supported string parameters of each algorithm.</li>
<li>-kdflen length: Set the output length for KDF.</li>
<li>-pkeyopt opt:value: Public key options specified as opt:value. See NOTES below for more details.</li>
<li>-pkeyopt_passin opt[:passarg]: Allows reading a public key option opt from stdin or a password source. If only opt is specified, the user will be prompted to enter a password on stdin. Alternatively, passarg can be specified which can be any value supported by openssl-passphrase-options(1).</li>
<li>-hexdump: hex dump the output data.</li>
<li>-asn1parse: Parse the ASN.1 output data, this is useful when combined with the -verifyrecover option when an ASN1 structure is signed.</li>
<li>-engine id: See "Engine Options" in openssl(1). This option is deprecated.</li>
<li>-engine_impl: When used with the -engine option, it specifies to also use engine id for crypto operations.</li>
<li>-rand files, -writerand file: See "Random State Options" in openssl(1) for details.</li>
<li>-provider name: -provider-path path: -propquery propq: See "Provider Options" in openssl(1), provider(7), and property(7).</li>
<li>-config configfile: See "Configuration Option" in openssl(1).</li>
</ul>
<h3 id="symmetricencryption">Symmetric Encryption</h3>
<h4 id="introductionofsymmetricencryption">Introduction of Symmetric Encryption</h4>
<p>Symmetric encryption uses the same key for both encryption and decryption, requiring both parties to possess and keep the key confidential.</p>
<ol>
<li><strong>Single Key</strong>: Both parties use the same key, making key management critical. If the key is compromised, the encrypted data is at risk.</li>
<li><strong>Speed</strong>: Symmetric algorithms are faster than asymmetric ones, making them ideal for encrypting large amounts of data, particularly in real-time applications.</li>
<li><strong>Confidentiality</strong>: Only authorized parties with the correct key can decrypt the data, maintaining its confidentiality.</li>
<li><strong>Common Algorithms</strong>:</li>
</ol>
<ul>
<li><strong>AES</strong>: Secure and efficient, with key sizes of 128, 192, or 256 bits.</li>
<li><strong>DES</strong>: Uses a 56-bit key; now considered insecure.</li>
<li><strong>3DES</strong>: Applies DES three times with different keys but slower than AES.</li>
<li><strong>Blowfish</strong>: A fast cipher with key lengths of 32 to 448 bits.</li>
<li><strong>Twofish</strong>: A more advanced version of Blowfish, supporting keys up to 256 bits.</li>
<li><strong>RC4</strong>: A stream cipher known for speed but now insecure in many uses.</li>
</ul>
<ol>
<li><strong>Applications</strong>:</li>
</ol>
<ul>
<li><strong>Data Encryption</strong>: Secures data in storage and transmission (e.g., SSL/TLS).</li>
<li><strong>VPNs</strong>: Encrypts data over public networks to protect privacy.</li>
<li><strong>Disk Encryption</strong>: Protects data on devices, ensuring confidentiality if lost or stolen.</li>
<li><strong>Secure Communications</strong>: Used in messaging apps and secure protocols.</li>
<li><strong>Cloud Storage Security</strong>: Encrypts data in the cloud, protecting it from unauthorized access.</li>
</ul>
<h4 id="aes256cbcencryption">AES-256-CBC Encryption</h4>
<pre><code>openssl enc -aes-256-cbc -in file.rar -out encfile.rar -pass pass:1234567890123456789012345678901234567890123456789012345678901234 -base64 -iv 12345678901234567890123456789012 -S 1234567890123456 -md sha-256 -iter 2048 -pbkdf2 -p
</code></pre>
<h4 id="aes256cbcdecryption">AES-256-CBC Decryption</h4>
<pre><code>openssl enc -aes-256-cbc -in encfile.rar -out file.rar -pass pass:1234567890123456789012345678901234567890123456789012345678901234 -d -base64 -iv 12345678901234567890123456789012 -S 1234567890123456 -md sha-256 -iter 2048 -pbkdf2
</code></pre>
<h4 id="allcommandoptionsofenccipher">All Command Options of Enc / Cipher</h4>
<pre><code>openssl enc|cipher [-cipher] [-help] [-list] [-ciphers] [-in filename] [-out filename] [-pass arg] [-e] [-d] [-a] [-base64] [-A] [-k password] [-kfile filename] [-K key] [-iv IV] [-S salt] [-salt] [-nosalt] [-z] [-md digest] [-iter count] [-pbkdf2] [-saltlen size] [-p] [-P] [-bufsize number] [-nopad] [-v] [-debug] [-none] [-engine id] [-rand files] [-writerand file] [-provider name] [-provider-path path] [-propquery propq]
</code></pre>
<p><strong>DESCRIPTION</strong>: The symmetric cipher commands allow data to be encrypted or decrypted using various block and stream ciphers using keys based on passwords or explicitly provided. Base64 encoding or decoding can also be performed either by itself or in addition to the encryption or decryption.\
<strong>OPTIONS</strong>:</p>
<ul>
<li>-help: Print out a usage message.</li>
<li>-list: List all supported ciphers.</li>
<li>-ciphers: Alias of -list to display all supported ciphers.</li>
<li>-in filename: The input filename, standard input by default.</li>
<li>-out filename: The output filename, standard output by default.</li>
<li>-pass arg: The password source. For more information about the format of arg see "Pass Phrase Options" in openssl(1).</li>
<li>-e: Encrypt the input data: this is the default.</li>
<li>-d: Decrypt the input data.</li>
<li>-a: Base64 process the data. This means that if encryption is taking place the data is base64 encoded after encryption. If decryption is set then the input data is base64 decoded before being decrypted.</li>
<li>-base64: Same as -a</li>
<li>-A: If the -a option is set then base64 process the data on one line.</li>
<li>-k password: The password to derive the key from. This is for compatibility with previous versions of OpenSSL. Superseded by the -pass argument.</li>
<li>-kfile filename: Read the password to derive the key from the first line of filename. This is for compatibility with previous versions of OpenSSL. Superseded by the -pass argument.</li>
<li>-md digest: Use the specified digest to create the key from the passphrase. The default algorithm is sha-256.</li>
<li>-iter count: Use a given number of iterations on the password in deriving the encryption key. High values increase the time required to brute-force the resulting file. This option enables the use of PBKDF2 algorithm to derive the key.</li>
<li>-pbkdf2: Use PBKDF2 algorithm with a default iteration count of 10000 unless otherwise specified by the -iter command line option.</li>
<li>-saltlen: Set the salt length to use when using the -pbkdf2 option. For compatibility reasons, the default is 8 bytes. The maximum value is currently 16 bytes. If the -pbkdf2 option is not used, then this option is ignored and a fixed salt length of 8 is used. The salt length used when encrypting must also be used when decrypting.</li>
<li>-nosalt: Don't use a salt in the key derivation routines. This option SHOULD NOT be used except for test purposes or compatibility with ancient versions of OpenSSL.</li>
<li>-z: Compress or decompress encrypted data using zlib after encryption or before decryption. This option exists only if OpenSSL was compiled with the zlib or zlib-dynamic option.</li>
<li>-none: Use NULL cipher (no encryption or decryption of input).</li>
<li>-rand files, -writerand file: See "Random State Options" in openssl(1) for details.</li>
<li>-provider name: -provider-path path: -propquery propq: See "Provider Options" in openssl(1), provider(7), and property(7).</li>
<li>-engine id: See "Engine Options" in openssl(1). This option is deprecated.</li>
<li>Supported ciphers:</li>
<li>aes-128-cbc</li>
<li>aes-128-cfb</li>
<li>aes-128-cfb1</li>
<li>aes-128-cfb8</li>
<li>aes-128-ctr</li>
<li>aes-128-ecb</li>
<li>aes-128-ofb</li>
<li>aes-192-cbc</li>
<li>aes-192-cfb</li>
<li>aes-192-cfb1</li>
<li>aes-192-cfb8</li>
<li>aes-192-ctr</li>
<li>aes-192-ecb</li>
<li>aes-192-ofb</li>
<li>aes-256-cbc</li>
<li>aes-256-cfb</li>
<li>aes-256-cfb1</li>
<li>aes-256-cfb8</li>
<li>aes-256-ctr</li>
<li>aes-256-ecb</li>
<li>aes-256-ofb</li>
<li>aes128</li>
<li>aes128-wrap</li>
<li>aes128-wrap-pad</li>
<li>aes192</li>
<li>aes192-wrap</li>
<li>aes192-wrap-pad</li>
<li>aes256</li>
<li>aes256-wrap</li>
<li>aes256-wrap-pad</li>
<li>aria-128-cbc</li>
<li>aria-128-cfb</li>
<li>aria-128-cfb1</li>
<li>aria-128-cfb8</li>
<li>aria-128-ctr</li>
<li>aria-128-ecb</li>
<li>aria-128-ofb</li>
<li>aria-192-cbc</li>
<li>aria-192-cfb</li>
<li>aria-192-cfb1</li>
<li>aria-192-cfb8</li>
<li>aria-192-ctr</li>
<li>aria-192-ecb</li>
<li>aria-192-ofb</li>
<li>aria-256-cbc</li>
<li>aria-256-cfb</li>
<li>aria-256-cfb1</li>
<li>aria-256-cfb8</li>
<li>aria-256-ctr</li>
<li>aria-256-ecb</li>
<li>aria-256-ofb</li>
<li>aria128</li>
<li>aria192</li>
<li>aria256</li>
<li>bf</li>
<li>bf-cbc</li>
<li>bf-cfb</li>
<li>bf-ecb</li>
<li>bf-ofb</li>
<li>blowfish</li>
<li>camellia-128-cbc</li>
<li>camellia-128-cfb</li>
<li>camellia-128-cfb1</li>
<li>camellia-128-cfb8</li>
<li>camellia-128-ctr</li>
<li>camellia-128-ecb</li>
<li>camellia-128-ofb</li>
<li>camellia-192-cbc</li>
<li>camellia-192-cfb</li>
<li>camellia-192-cfb1</li>
<li>camellia-192-cfb8</li>
<li>camellia-192-ctr</li>
<li>camellia-192-ecb</li>
<li>camellia-192-ofb</li>
<li>camellia-256-cbc</li>
<li>camellia-256-cfb</li>
<li>camellia-256-cfb1</li>
<li>camellia-256-cfb8</li>
<li>camellia-256-ctr</li>
<li>camellia-256-ecb</li>
<li>camellia-256-ofb</li>
<li>camellia128</li>
<li>camellia192</li>
<li>camellia256</li>
<li>cast</li>
<li>cast-cbc</li>
<li>cast5-cbc</li>
<li>cast5-cfb</li>
<li>cast5-ecb</li>
<li>cast5-ofb</li>
<li>chacha20</li>
<li>des</li>
<li>des-cbc</li>
<li>des-cfb</li>
<li>des-cfb1</li>
<li>des-cfb8</li>
<li>des-ecb</li>
<li>des-ede</li>
<li>des-ede-cbc</li>
<li>des-ede-cfb</li>
<li>des-ede-ecb</li>
<li>des-ede-ofb</li>
<li>des-ede3</li>
<li>des-ede3-cbc</li>
<li>des-ede3-cfb</li>
<li>des-ede3-cfb1</li>
<li>des-ede3-cfb8</li>
<li>des-ede3-ecb</li>
<li>des-ede3-ofb</li>
<li>des-ofb</li>
<li>des3</li>
<li>des3-wrap</li>
<li>desx</li>
<li>desx-cbc</li>
<li>id-aes128-wrap</li>
<li>id-aes128-wrap-pad</li>
<li>id-aes192-wrap</li>
<li>id-aes192-wrap-pad</li>
<li>id-aes256-wrap</li>
<li>id-aes256-wrap-pad</li>
<li>id-smime-alg-CMS3DESwrap</li>
<li>idea</li>
<li>idea-cbc</li>
<li>idea-cfb</li>
<li>idea-ecb</li>
<li>idea-ofb</li>
<li>rc2</li>
<li>rc2-128</li>
<li>rc2-40</li>
<li>rc2-40-cbc</li>
<li>rc2-64</li>
<li>rc2-64-cbc</li>
<li>rc2-cbc</li>
<li>rc2-cfb</li>
<li>rc2-ecb</li>
<li>rc2-ofb</li>
<li>rc4</li>
<li>rc4-40</li>
<li>seed</li>
<li>seed-cbc</li>
<li>seed-cfb</li>
<li>seed-ecb</li>
<li>seed-ofb</li>
<li>sm4</li>
<li>sm4-cbc</li>
<li>sm4-cfb</li>
<li>sm4-ctr</li>
<li>sm4-ecb</li>
<li>sm4-ofb</li>
</ul>
<hr>
<h2 id="fileanddirectorymanagementoftermuxandlinux">File and Directory Management of Termux and Linux</h2>
<h3 id="cpcopyfilesanddirectories"><code>cp</code> (Copy files and directories)</h3>
<ul>
<li><strong>Examples</strong>:</li>
<li><code>cp -r dir1/ dir2/</code>: Recursively copy <code>dir1</code> to <code>dir2</code>.</li>
<li><code>cp -i file1.txt file2.txt</code>: Prompt before overwriting <code>file2.txt</code>.</li>
</ul>
<h3 id="mvmoveorrenamefilesanddirectories"><code>mv</code> (Move or rename files and directories)</h3>
<ul>
<li><strong>Examples</strong>:</li>
<li><code>mv file1.txt /home/user/</code>: Move <code>file1.txt</code> to <code>/home/user/</code>.</li>
<li><code>mv oldname.txt newname.txt</code>: Rename <code>oldname.txt</code> to <code>newname.txt</code>.</li>
</ul>
<h3 id="rmremovefilesordirectories"><code>rm</code> (Remove files or directories)</h3>
<ul>
<li><strong>Examples</strong>:</li>
<li><code>rm file1.txt</code>: Remove <code>file1.txt</code>.</li>
<li><code>rm -r dir1/</code>: Recursively remove <code>dir1</code> and its contents.</li>
<li><code>rm -rf dir1/</code>: Forcefully remove <code>dir1</code> and its contents without prompts.</li>
</ul>
<h3 id="mkdircreatedirectories"><code>mkdir</code> (Create directories)</h3>
<ul>
<li><strong>Examples</strong>:</li>
<li><code>mkdir newdir</code>: Create a directory named <code>newdir</code>.</li>
<li><code>mkdir -p parentdir/childdir</code>: Create <code>parentdir</code> and <code>childdir</code> if they don't exist.</li>
</ul>
<h3 id="lslistdirectorycontents"><code>ls</code> (List directory contents)</h3>
<ul>
<li><strong>Examples</strong>:</li>
<li><code>ls -l</code>: List with detailed information (permissions, ownership, size).</li>
<li><code>ls -a</code>: List all files, including hidden ones (starting with <code>.</code>).</li>
<li><code>ls -lh</code>: List with human-readable file sizes.</li>
</ul>
<h3 id="rmdirremoveemptydirectories"><code>rmdir</code> (Remove empty directories)</h3>
<ul>
<li><strong>Syntax</strong>: <code>rmdir [options] directory</code></li>
<li><strong>Examples</strong>:</li>
<li><code>rmdir emptydir</code>: Remove <code>emptydir</code> if it's empty.</li>
<li><code>rmdir -p parentdir/childdir</code>: Remove <code>childdir</code> and <code>parentdir</code> if they are empty.</li>
</ul>
<h3 id="findsearchforfilesanddirectories"><code>find</code> (Search for files and directories)</h3>
<ul>
<li><strong>Syntax</strong>: <code>find [path] [options] [expression]</code></li>
<li><strong>Examples</strong>:</li>
<li><code>find /home/user/ -name '*.txt'</code>: Find all <code>.txt</code> files under <code>/home/user/</code>.</li>
<li><code>find . -type d -name 'dir*'</code>: Find directories starting with <code>dir</code>.</li>
</ul>
<h3 id="touchcreateorupdatefiletimestamps"><code>touch</code> (Create or update file timestamps)</h3>
<ul>
<li><strong>Syntax</strong>: <code>touch [options] file</code></li>
<li><strong>Examples</strong>:</li>
<li><code>touch newfile.txt</code>: Create an empty <code>newfile.txt</code> or update its timestamp.</li>
<li><code>touch -c non_existent_file.txt</code>: Don’t create <code>non_existent_file.txt</code> if it doesn’t exist.</li>
</ul>
<h3 id="chmodchangefilepermissions"><code>chmod</code> (Change File Permissions)</h3>
<p><code>chmod</code> can use both numeric (octal) and symbolic modes to set file permissions.</p>
<h4 id="numericoctalmode">Numeric (Octal) Mode</h4>
<ul>
<li><strong>Syntax</strong>: <code>chmod [permissions] file</code></li>
<li><strong>Examples</strong>:</li>
<li><code>chmod 755 file.txt</code>: <ul>
<li><code>7</code> (rwx) for owner</li>
<li><code>5</code> (r-x) for group</li>
<li><code>5</code> (r-x) for others</li></ul></li>
<li><code>chmod 644 file.txt</code>:<ul>
<li><code>6</code> (rw-) for owner</li>
<li><code>4</code> (r--) for group</li>
<li><code>4</code> (r--) for others
<strong>Numeric Permission Values</strong>:</li></ul></li>
<li><code>4</code> = Read (r)</li>
<li><code>2</code> = Write (w)</li>
<li><code>1</code> = Execute (x)</li>
<li>Permissions are additive. For example, <code>7</code> = <code>4</code> (r) + <code>2</code> (w) + <code>1</code> (x).</li>
</ul>
<h4 id="symbolicmode">Symbolic Mode</h4>
<ul>
<li><strong>Syntax</strong>: <code>chmod [who][+/-][permissions] file</code></li>
<li><strong>Examples</strong>:</li>
<li><code>chmod u+x file.txt</code>: Add execute permission for the user (owner).</li>
<li><code>chmod g-w file.txt</code>: Remove write permission for the group.</li>
<li><code>chmod o=r file.txt</code>: Set others' permissions to read-only.
<strong>Symbolic Permission Characters</strong>:</li>
<li><code>u</code> = User (owner)</li>
<li><code>g</code> = Group</li>
<li><code>o</code> = Others</li>
<li><code>a</code> = All (user, group, and others)</li>
<li><code>+</code> = Add permission</li>
<li><code>-</code> = Remove permission</li>
<li><code>=</code> = Set exact permission</li>
</ul>
<h4 id="options">Options</h4>
<ul>
<li><code>-R</code> or <code>--recursive</code>: Apply changes recursively to directories and their contents.</li>
</ul>
<h3 id="chownchangefileownership"><code>chown</code> (Change File Ownership)</h3>
<ul>
<li><strong>Syntax</strong>: <code>chown [options] user[:group] file</code></li>
<li><strong>Examples</strong>:</li>
<li><code>chown user file.txt</code>: Change the owner to <code>user</code>.</li>
<li><code>chown user:group file.txt</code>: Change the owner to <code>user</code> and the group to <code>group</code>.</li>
<li><code>chown :group file.txt</code>: Change the group to <code>group</code> without changing the owner.</li>
<li>Options</li>
<li><code>-R</code> or <code>--recursive</code>: Apply changes recursively to directories and their contents.</li>
</ul>
<h3 id="dfdiskspaceusage"><code>df</code> (Disk Space Usage)</h3>
<ul>
<li><strong>Syntax</strong>: <code>df [options] [file]</code></li>
<li><strong>Examples</strong>:</li>
<li><code>df -h</code>: Display disk space in a human-readable format (e.g., MB, GB).</li>
<li><code>df -T</code>: Show the filesystem type along with space usage.</li>
<li><code>df --total</code>: Show a grand total of all file systems.</li>
</ul>
<h3 id="dudiskusage"><code>du</code> (Disk Usage)</h3>
<ul>
<li><strong>Syntax</strong>: <code>du [options] [file]</code></li>
<li><strong>Examples</strong>:</li>
<li><code>du -h</code>: Show disk usage in human-readable format.</li>
<li><code>du -sh /path/to/dir</code>: Show the total size of <code>/path/to/dir</code>.</li>
<li><code>du -a</code>: Show the size of all files and directories.</li>
<li><code>du --max-depth=1</code>: Limit the depth of directory traversal to 1 level.</li>
</ul>
<h3 id="pwdcheckcurrentdirectory">pwd (Check Current Directory)</h3>
<ul>
<li><strong>Syntax</strong>: <code>pwd</code></li>
</ul>
<hr>
<h2 id="opensshwithlinuxortermuxandsftpservermountonmaterialfilessecureremoteaccess">OpenSSH with Linux or Termux and SFTP Server Mount on Material Files: Secure Remote Access</h2>
<h3 id="introductionofsshandopenssh">Introduction of SSH and OpenSSH</h3>
<p>SSH provides a secure way for accessing remote hosts and replaces tools such as telnet, rlogin, rsh, ftp. \
OpenSSH (also known as OpenBSD Secure Shell) is a suite of secure networking utilities based on the Secure Shell (SSH) protocol, which provides a secure channel over an unsecured network in a client–server architecture.\
Default SSH port in <strong>Termux</strong> is <code>8022</code>.\
Default SSH port in Linux is usually <code>22</code>.</p>
<h3 id="opensshserverinlinux">OpenSSH Server in Linux</h3>
<h4 id="installandsetup">Install and Setup</h4>
<pre><code>sudo apt install openssh-server
sudo systemctl enable --now ssh
</code></pre>
<h4 id="editconfiguration">Edit Configuration</h4>
<pre><code>sudo nano /etc/ssh/sshd_config
</code></pre>
<p>Edit as your need.\
If you're setting OpenSSH server for QEMU VM with same setup as this tutorial, namely, <code>hostfwd=tcp::2222-:22</code>, and you hope to connect it from outside of the VM (e.g. <strong>Termux</strong>), then you can edit the configuration as the following:</p>
<pre><code>sudo rm /etc/ssh/sshd_config
sudo nano /etc/ssh/sshd_config
</code></pre>
<p>Copy below and paste to it:</p>
<pre><code># This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# This sshd was compiled with PATH=/usr/bin:/bin:/usr/sbin:/sbin

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

Port 22
#AddressFamily any
ListenAddress 0.0.0.0
#ListenAddress ::

# The default requires explicit activation of protocol 1
#Protocol 2

# HostKey for protocol version 1
#HostKey /etc/ssh/ssh_host_key
# HostKeys for protocol version 2
#HostKey /etc/ssh/ssh_host_rsa_key
#HostKey /etc/ssh/ssh_host_dsa_key
#HostKey /etc/ssh/ssh_host_ecdsa_key

# Lifetime and size of ephemeral version 1 server key
#KeyRegenerationInterval 1h
#ServerKeyBits 1024

# Logging
# obsoletes QuietMode and FascistLogging
#SyslogFacility AUTH
#LogLevel INFO

# Authentication:

#LoginGraceTime 2m
PermitRootLogin yes
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

#RSAAuthentication yes
#PubkeyAuthentication yes

# The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2
# but this is overridden so installations will only check .ssh/authorized_keys
AuthorizedKeysFile    .ssh/authorized_keys

#AuthorizedPrincipalsFile none

#AuthorizedKeysCommand none
#AuthorizedKeysCommandUser nobody

# For this to work you will also need host keys in /etc/ssh/ssh_known_hosts
#RhostsRSAAuthentication no
# similar for protocol version 2
#HostbasedAuthentication no
# Change to yes if you don't trust ~/.ssh/known_hosts for
# RhostsRSAAuthentication and HostbasedAuthentication
#IgnoreUserKnownHosts no
# Don't read the user's ~/.rhosts and ~/.shosts files
#IgnoreRhosts yes

# To disable tunneled clear text passwords, change to no here!
PasswordAuthentication yes
#PermitEmptyPasswords no

# Change to no to disable s/key passwords
ChallengeResponseAuthentication no

# Kerberos options
#KerberosAuthentication no
#KerberosOrLocalPasswd yes
#KerberosTicketCleanup yes
#KerberosGetAFSToken no

# GSSAPI options
#GSSAPIAuthentication no
#GSSAPICleanupCredentials yes

# Set this to 'yes' to enable PAM authentication, account processing,
# and session processing. If this is enabled, PAM authentication will
# be allowed through the ChallengeResponseAuthentication and
# PasswordAuthentication.  Depending on your PAM configuration,
# PAM authentication via ChallengeResponseAuthentication may bypass
# the setting of "PermitRootLogin without-password".
# If you just want the PAM account and session checks to run without
# PAM authentication, then enable this but set PasswordAuthentication
# and ChallengeResponseAuthentication to 'no'.
UsePAM yes

#AllowAgentForwarding yes
#AllowTcpForwarding yes
#GatewayPorts no
#X11Forwarding no
#X11DisplayOffset 10
#X11UseLocalhost yes
PrintMotd no # pam does that
#PrintLastLog yes
#TCPKeepAlive yes
#UseLogin no
UsePrivilegeSeparation sandbox        # Default for new installations.
#PermitUserEnvironment no
#Compression delayed
#ClientAliveInterval 0
#ClientAliveCountMax 3
#UseDNS yes
#PidFile /run/sshd.pid
#MaxStartups 10:30:100
#PermitTunnel no
#ChrootDirectory none
#VersionAddendum none

# no default banner path
#Banner none

# override default of no subsystems
Subsystem    sftp    /usr/lib/ssh/sftp-server

# Example of overriding settings on a per-user basis
#Match User anoncvs
#    X11Forwarding no
#    AllowTcpForwarding no
#    ForceCommand cvs server
</code></pre>
<p>Run:</p>
<pre><code>sudo nano /etc/hosts .deny
</code></pre>
<p>and delete all lines in it.</p>
<h4 id="start">Start</h4>
<pre><code>sudo service ssh start
</code></pre>
<h4 id="restart">Restart</h4>
<pre><code>sudo service ssh restart
</code></pre>
<h4 id="stop">Stop</h4>
<pre><code>sudo service ssh stop
</code></pre>
<h4 id="disable">Disable</h4>
<pre><code>sudo systemctl disable ssh
</code></pre>
<h4 id="enable">Enable</h4>
<pre><code>sudo systemctl enable ssh
</code></pre>
<h4 id="checkstatus">Check Status</h4>
<pre><code>sudo service ssh status
</code></pre>
<h3 id="opensshserverintermux">OpenSSH Server in Termux</h3>
<h4 id="install">Install</h4>
<pre><code>apt install openssh
</code></pre>
<h4 id="start-1">Start</h4>
<pre><code>sshd
</code></pre>
<h4 id="stop-1">Stop</h4>
<pre><code>pkill sshd
</code></pre>
<hr>
<h3 id="opensshclientinlinuxortermux">OpenSSH Client in Linux or Termux</h3>
<h4 id="installinlinux">Install in Linux</h4>
<pre><code>sudo apt install openssh-client
</code></pre>
<h4 id="installintermux">Install in Termux</h4>
<pre><code>apt install openssh
</code></pre>
<h4 id="keygeneration">Key Generation</h4>
<p>If you plan to use key authentication, you have to generate key by:</p>
<pre><code>mkdir -p ~/.ssh
ssh-keygen -t rsa -b 4096
</code></pre>
<p>If you're setting OpenSSH server for QEMU VM with same setup as this tutorial, namely, use password authentication (with password set by running <code>passwd</code>), you won't need to generate key.</p>
<h4 id="run">Run</h4>
<pre><code>ssh root@localhost
</code></pre>
<p>Change the <code>root@localhost</code> to the actual user name and address. Port will be set as default.\
Run with port specified:</p>
<pre><code>ssh root@localhost -p 2222
</code></pre>
<p>Change <code>2222</code> to the port of the server.\
If you're setting OpenSSH server for QEMU VM with same setup as this tutorial, namely, <code>hostfwd=tcp::2222-:22</code> and <code>Port 22</code>, then you can run:</p>
<pre><code>ssh root@localhost -p 2222
</code></pre>
<p>on client side.</p>
<h4 id="exit">Exit</h4>
<pre><code>exit
</code></pre>
<h4 id="kex_exchange_identificationreadconnectionresetbypeererror"><code>kex_exchange_identification: read: Connection reset by peer</code> Error</h4>
<p>To solve this error, try:</p>
<ul>
<li>Run <code>ssh-keygen -R [localhost]:2222</code> on the client side. Change <code>[localhost]:2222</code> to the actual address and port of the server.</li>
<li>Use <code>ssh -v root@localhost -p port</code>, <code>ssh -vv root@localhost -p port</code>, <code>ssh -vvv root@localhost -p port</code> to debug.</li>
<li>Ensure that no firewall or VPN service is blocking the connections.</li>
<li>Ensure the configuration in <code>/etc/ssh/sshd_config</code> is correct.</li>
<li>Ensure the authentication is correct.</li>
<li>Restart SSH server.</li>
<li>Check SSH log file.</li>
<li>Reboot.</li>
</ul>
<h3 id="scpsecurecopyprotocol">SCP (Secure Copy Protocol)</h3>
<p>You can use <code>scp</code> on the client side to transfer files between the server side and the client side.\
The syntax of <code>scp</code> is the same as that of <code>cp</code>, but with the <code>username@host:</code> added before the path to copy to or from the server. For example:</p>
<pre><code>scp -r root@localhost:/root/Desktop /data/data/com.termux/files/home/
</code></pre>
<p>Use SFTP server mount if you encounter errors in this method.</p>
<h3 id="sftpservermoundonmaterialfiles">SFTP Server Mound on Material Files</h3>
<h4 id="installmaterialfiles">Install Material Files</h4>
<p>You can install <strong>Material Files</strong> from Google Play: <a href="https://play.google.com/store/apps/details?id=me.zhanghai.android.files">https://play.google.com/store/apps/details?id=me.zhanghai.android.files</a> or F-Droid: <a href="https://f-droid.org/packages/me.zhanghai.android.files/">https://f-droid.org/packages/me.zhanghai.android.files/</a>.</p>
<h4 id="introductionofsftp">Introduction of SFTP</h4>
<p>SFTP, or Secure File Transfer Protocol, is a secure network protocol used for transferring files over a secure connection. It is an extension of the SSH (Secure Shell) protocol, which means it provides the same level of security and encryption that SSH offers. Here are some key points about SFTP:</p>
<ol>
<li>Security: SFTP encrypts both commands and data. This makes it more secure than traditional FTP (File Transfer Protocol).</li>
<li>Authentication: SFTP supports various password-based and key-based authentication.</li>
<li>File Management: SFTP allows for various file management operations, such as listing files, changing directories, and deleting files.</li>
<li>Port: SFTP typically operates over the same port used by SSH.</li>
<li>Cross-Platform: SFTP is supported on various platforms, making it a versatile option for file transfers across different systems.</li>
</ol>
<h4 id="mountsftpserver">Mount SFTP Server</h4>
<ul>
<li>Connect to the SSH server with <strong>Termux</strong> or other clients on your Android device.</li>
<li>Open the left menu.</li>
<li>Tap <strong>Add storage …</strong>.</li>
<li>Tap <strong>SFTP server</strong>.</li>
<li>Input necessary information. Hostname, Port, etc. means those of the SSH server. Leave path empty to mount the whole file system of the server side.</li>
<li>You can manage the file system of the SSH server like managing local storage now.</li>
</ul>
<h3 id="furtherreadingsandreferencesaboutopensshwithlinuxandtermux">Further Readings and References about OpenSSH with Linux and Termux</h3>
<ul>
<li><a href="https://www.openssh.com/">https://www.openssh.com/</a></li>
<li><a href="https://ivonblog.com/posts/termux-qemu-system-linux/">https://ivonblog.com/posts/termux-qemu-system-linux/</a></li>
<li><a href="https://wiki.termux.com/wiki/Remote_Access">https://wiki.termux.com/wiki/Remote_Access</a>.</li>
<li><a href="https://ivonblog.com/posts/termux-openssh/">https://ivonblog.com/posts/termux-openssh/</a>.</li>
</ul>
<hr>
<h2 id="sdmaidseafilemanagementtoolandsystemcleaner">SD Maid SE: A File Management Tool and System Cleaner</h2>
<h3 id="installsdmaidse">Install SD Maid SE</h3>
<p>You can install SD Maid SE on:</p>
<ul>
<li>F-Droid: <a href="https://f-droid.org/packages/eu.darken.sdmse">https://f-droid.org/packages/eu.darken.sdmse</a>.</li>
<li>Google Play: <a href="https://play.google.com/store/apps/details?id=eu.darken.sdmse">https://play.google.com/store/apps/details?id=eu.darken.sdmse</a>.</li>
</ul>
<h3 id="introductionofsdmaidse">Introduction of SD Maid SE</h3>
<p><strong>SD Maid SE</strong> (also known as SD Maid 2 or SD Maid 2/SE) is a file management tool and system cleaner for Android that
specializes in maintenance, freeing up space, and removing unwanted data.<br>
Features include:</p>
<ul>
<li>CorpseFinder - Removing data that belongs to apps that are no longer installed</li>
<li>SystemCleaner: User configurable filters for random files</li>
<li>AppControl - Controling/disabling apps</li>
<li>StorageAnalyzer - Storage overview</li>
<li>Root and Shizuku support</li>
</ul>
<h3 id="usesdmaidsewithshizuku">Use SD Maid SE with Shizuku</h3>
<ul>
<li>Setup <strong>Shizuku</strong>. You can follow the guide in <a href="#shizukusystemuitunerandashelluselocaladbofandroiddeviceonterminalssuchastermuxwithoutanotherdevicewithshizukuleavedeveloperoptionsoffwhendoingsowithsystemuituneranduseadbwithfeatureslikeautocompletesuggestionwithashell">Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell</a>. The part about using <strong>SystemUI Tuner</strong> to enable ADB persistently in order to keep <strong>Shizuku</strong> running when Developer Options is turned off isn't necessary here but recommended if you want to keep <strong>SD Maid SE</strong> using <strong>Shizuku</strong>.</li>
<li>Give consent for <strong>SD Maid SE</strong> to use <strong>Shizuku</strong> inside <strong>SD Maid SE</strong>, you can use it to enable/disable <strong>SD Maid SE</strong>'s use of <strong>Shizuku</strong>.</li>
<li>After giving consent, a Grant access dialog from <strong>Shizuku</strong> should show.</li>
<li>Confirm the dialog.</li>
<li><strong>SD Maid SE</strong> should display a new status indicator that show whether <strong>SD Maid SE</strong> can connect to the <strong>Shizuku</strong> service.</li>
</ul>
<hr>
<h2 id="linuxcommandlibrary">Linux Command Library</h2>
<h3 id="introductionoflinuxcommandlibrary">Introduction of Linux Command Library</h3>
<p>The app has 6056 manual pages, 22+ basic categories and a bunch of general terminal tips about Linux (retrieved Sep. 27, 2024). It works 100% offline, doesn't need an internet connection and has no tracking software. Some of the commands available in Linux are available in <strong>Termux</strong> too, such as <code>cp</code>, <code>mv</code>, <code>ls</code>, <code>mkdir</code>, <code>apt</code>, and <code>apt-get</code>.</p>
<h3 id="installanduselinuxcommandlibrary">Install and Use Linux Command Library</h3>
<p>You can install <strong>Linux Command Library</strong> in Google Play: <a href="https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca">https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca</a> or F-Droid: <a href="https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca/">https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca/</a>, or browse it on its official website: <a href="https://linuxcommandlibrary.com/">https://linuxcommandlibrary.com/</a>.</p>
<hr>
<h2 id="linuxandtermuxoddsandends">Linux and Termux Odds and Ends</h2>
<h3 id="apttermuxdebianetc">apt (Termux, Debian, etc.)</h3>
<p>apt is a commandline package manager and provides commands for searching and managing as well as querying information about packages. It provides the same functionality as the specialized APT tools, like apt-get and apt-cache, but enables options more suitable for interactive use by default.\</p>
<ul>
<li>Usage: <code>apt [options] command</code></li>
<li>Synopsys: <code>apt [-h] [-o=config_string] [-c=config_file] [-t=target_release] [-a=architecture] {list | search | show | update | install pkg [{=pkg_version_number | /target_release}]... | remove pkg... | upgrade | full-upgrade | edit-sources | {-v | --version} | {-h | --help}}</code></li>
<li>Most used commands:</li>
<li><code>list</code> - list packages based on package names</li>
<li><code>search</code> - search in package descriptions</li>
<li><code>show</code> - show package details</li>
<li><code>install</code> - install packages</li>
<li><code>reinstall</code> - reinstall packages</li>
<li><code>remove</code> - remove packages</li>
<li><code>autoremove</code> - automatically remove all unused packages</li>
<li><code>update</code> - update list of available packages</li>
<li><code>upgrade</code> - upgrade the system by installing/upgrading packages</li>
<li><code>full-upgrade</code> - upgrade the system by removing/installing/upgrading packages</li>
<li><code>edit-sources</code> - edit the source information file</li>
<li><code>satisfy</code> - satisfy dependency strings</li>
<li>See apt(8) for more information about the available commands: <a href="https://manpages.debian.org/unstable/apt/apt.8.en.html">https://manpages.debian.org/unstable/apt/apt.8.en.html</a>.</li>
<li>Configuration options and syntax is detailed in apt.conf(5): <a href="https://manpages.debian.org/unstable/apt/apt.conf.5.en.html">https://manpages.debian.org/unstable/apt/apt.conf.5.en.html</a>.</li>
<li>Information about how to configure sources can be found in sources.list(5): <a href="https://manpages.debian.org/unstable/apt/sources.list.5.en.html">https://manpages.debian.org/unstable/apt/sources.list.5.en.html</a>.</li>
<li>Package and version choices can be expressed via apt_preferences(5): <a href="https://manpages.debian.org/unstable/apt/apt_preferences.5.en.html">https://manpages.debian.org/unstable/apt/apt</em>preferences.5.en.html</a>.</li>
<li>Security details are available in apt-secure(8): <a href="https://manpages.debian.org/unstable/apt/apt-secure.8.en.html">https://manpages.debian.org/unstable/apt/apt-secure.8.en.html</a>.</li>
</ul>
<h3 id="commandsforcopy">Commands for Copy</h3>
<h4 id="linuxsetupcommand">Linux Setup Command</h4>
<pre><code>sudo apt update &amp;&amp; sudo apt upgrade
sudo apt install xfce4 xfce4-goodies python3-all-dev python3-venv build-essential cmake curl wget git gh openjdk-17-jdk nano vim iproute2 procps grep libboost-all-dev gdb tmux openssl libssl-dev openssh-server
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 -m venv myenv
source myenv/bin/activate
python3 get-pip.py
pip3 install numpy pandas sympy matplotlib numba nuitka setuptools selenium conan jupyter pybind11 pyinstaller
</code></pre>
<h4 id="termuxpackagemanagementcommandall">Termux Package Management Command (All)</h4>
<pre><code>apt update &amp;&amp; apt upgrade &amp;&amp; apt --fix-broken install &amp;&amp; apt autoremove --purge &amp;&amp; apt clean &amp;&amp; pkg update &amp;&amp; pkg upgrade &amp;&amp; pkg clean
</code></pre>
<h4 id="termuxpackagemanagementcommandallapt">Termux Package Management Command (All apt)</h4>
<pre><code>apt update &amp;&amp; apt upgrade &amp;&amp; apt --fix-broken install &amp;&amp; apt autoremove --purge &amp;&amp; apt clean
</code></pre>
<h4 id="termuxpackagemanagementcommandallpkg">Termux Package Management Command (All pkg)</h4>
<pre><code>pkg update &amp;&amp; pkg upgrade &amp;&amp; pkg clean
</code></pre>
<h4 id="termuxpackagemanagementcommandupdateandupgradeall">Termux Package Management Command (Update and Upgrade All)</h4>
<pre><code>apt update &amp;&amp; apt upgrade &amp;&amp; pkg update &amp;&amp; pkg upgrade
</code></pre>
<h4 id="termuxpackagemanagementcommandupdateandupgradeapt">Termux Package Management Command (Update and Upgrade apt)</h4>
<pre><code>apt update &amp;&amp; apt upgrade
</code></pre>
<h4 id="termuxpackagemanagementcommandupdateandupgradepkg">Termux Package Management Command (Update and Upgrade pkg)</h4>
<pre><code>pkg update &amp;&amp; pkg upgrade
</code></pre>
<h4 id="termuxpackagemanagementcommandupdateall">Termux Package Management Command (Update All)</h4>
<pre><code>apt update &amp;&amp; pkg update
</code></pre>
<h4 id="termuxpackagemanagementcommandupdateapt">Termux Package Management Command (Update apt)</h4>
<pre><code>apt update
</code></pre>
<h4 id="termuxpackagemanagementcommandupdatepkg">Termux Package Management Command (Update pkg)</h4>
<pre><code>pkg update
</code></pre>
<h4 id="linuxpackagemanagementcommandallapt">Linux Package Management Command (All apt)</h4>
<pre><code>sudo apt update &amp;&amp; sudo apt upgrade &amp;&amp; sudo apt --fix-broken install &amp;&amp; sudo apt autoremove --purge &amp;&amp; sudo apt clean
</code></pre>
<h4 id="linuxpackagemanagementcommandupdateandupgradeapt">Linux Package Management Command (Update and Upgrade apt)</h4>
<pre><code>sudo apt update &amp;&amp; sudo apt upgrade
</code></pre>
<h4 id="linuxpackagemanagementcommandupdateapt">Linux Package Management Command (Update apt)</h4>
<pre><code>sudo apt update
</code></pre>
<hr>
<h2 id="promotedorrelatedworksreferencesandbibliography">Promoted or Related Works, References, and Bibliography</h2>
<h3 id="termuxbyfredrikfornwalltermuxtermux">Termux by Fredrik Fornwall / Termux / termux</h3>
<ul>
<li>F-Droid: <a href="https://f-droid.org/packages/com.termux/">https://f-droid.org/packages/com.termux/</a>.</li>
<li>GitHub of termux-app: <a href="https://github.com/termux/termux-app">https://github.com/termux/termux-app</a>.</li>
<li>GitHub of x11-packages: <a href="https://github.com/termux/x11-packages">https://github.com/termux/x11-packages</a>.</li>
<li>Official wiki: <a href="https://wiki.termux.com/">https://wiki.termux.com/</a>.</li>
<li>Official Reddit community: <a href="https://termux.com/community">https://termux.com/community</a>.</li>
<li>Google Play: <a href="https://play.google.com/store/apps/details?id=com.termux">https://play.google.com/store/apps/details?id=com.termux</a>.</li>
</ul>
<h3 id="andronixbydevriztechnologiesllpandronixappandronixapp">Andronix by Devriz Technologies LLP / Andronix App /AndronixApp</h3>
<ul>
<li>Google Play: <a href="https://play.google.com/store/apps/details?id=studio.com.techriz.andronix">https://play.google.com/store/apps/details?id=studio.com.techriz.andronix</a>.</li>
<li>GitHub: <a href="https://github.com/AndronixApp/AndronixOrigin">https://github.com/AndronixApp/AndronixOrigin</a>.</li>
<li>Official website: <a href="https://docs.andronix.app/">https://docs.andronix.app/</a>.</li>
</ul>
<h3 id="shizukubyxingchenrikkarikkaapps">Shizuku by Xingchen &amp; Rikka / RikkaApps</h3>
<ul>
<li>Official website: <a href="https://shizuku.rikka.app/guide/setup/?night=1">https://shizuku.rikka.app/guide/setup/?night=1</a>.</li>
<li>Google Play: <a href="https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api">https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api</a>. </li>
<li>GitHub: <a href="https://github.com/RikkaApps/Shizuku">https://github.com/RikkaApps/Shizuku</a>.</li>
</ul>
<h3 id="systemuitunerbyzacharywanderzacharee">SystemUI Tuner by Zachary Wander / zacharee</h3>
<ul>
<li>Google Play: <a href="https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner">https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner</a>. </li>
<li>GitHub: <a href="https://github.com/zacharee/Tweaker">https://github.com/zacharee/Tweaker</a>.</li>
</ul>
<h3 id="invizibleprobygarmatinoleksandroleksandrgarmatingedsh">Invizible Pro by Garmatin Oleksandr / Oleksandr Garmatin / Gedsh</h3>
<ul>
<li>Official website: <a href="https://invizible.net/en/">https://invizible.net/en/</a>.</li>
<li>F-Droid: <a href="https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/">https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/</a>. </li>
<li>Google Play: <a href="https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp">https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp</a>. </li>
<li>GitHub: <a href="https://github.com/Gedsh/InviZible">https://github.com/Gedsh/InviZible</a>.</li>
</ul>
<h3 id="trackercontroltcbytrackercontroloxfordhcc">TrackerControl / TC by TrackerControl / Oxford HCC</h3>
<ul>
<li>F-Droid: <a href="https://f-droid.org/packages/net.kollnig.missioncontrol.fdroid/">https://f-droid.org/packages/net.kollnig.missioncontrol.fdroid/</a>. </li>
<li>GitHub: <a href="https://github.com/TrackerControl/tracker-control-android">https://github.com/TrackerControl/tracker-control-android</a>.</li>
<li>Official website: <a href="https://trackercontrol.org/">https://trackercontrol.org/</a>.</li>
<li>Google Play: <a href="https://play.google.com/store/apps/details?id=net.kollnig.missioncontrol.play">https://play.google.com/store/apps/details?id=net.kollnig.missioncontrol.play</a>.</li>
</ul>
<h3 id="netguardbymarcelbokhorstm66bmarcelbokhorstfaircodebv">NetGuard by Marcel Bokhorst / M66B / Marcel Bokhorst, FairCode BV</h3>
<ul>
<li>Google Play: <a href="https://play.google.com/store/apps/details?id=eu.faircode.netguard">https://play.google.com/store/apps/details?id=eu.faircode.netguard</a>. </li>
<li>F-Droid: <a href="https://f-droid.org/packages/eu.faircode.netguard/">https://f-droid.org/packages/eu.faircode.netguard/</a>. </li>
<li>GitHub: <a href="https://github.com/M66B/NetGuard">https://github.com/M66B/NetGuard</a>.</li>
<li>Official website of NetGuard: <a href="https://netguard.me/">https://netguard.me/</a>.</li>
<li>Official website of FairCode: <a href="https://www.faircode.eu/">https://www.faircode.eu/</a>.</li>
</ul>
<h3 id="dontkillmyappdontkillmyappmakeappsworkbyurbandroidteamurbandroidteampetrnlevkaurbandroid">DontKillMyApp / DontKillMyApp: Make apps work by Urbandroid Team / urbandroid-team / Petr Nálevka (Urbandroid)</h3>
<ul>
<li>Official website: <a href="https://dontkillmyapp.com/">https://dontkillmyapp.com/</a>.</li>
<li>Google Play: <a href="https://play.google.com/store/apps/details?id=com.urbandroid.dontkillmyapp">https://play.google.com/store/apps/details?id=com.urbandroid.dontkillmyapp</a>.</li>
<li>F-Droid: <a href="https://f-droid.org/packages/com.urbandroid.dontkillmyapp/">https://f-droid.org/packages/com.urbandroid.dontkillmyapp/</a>.</li>
<li>GitHub: <a href="https://github.com/urbandroid-team/dontkillmy-app">https://github.com/urbandroid-team/dontkillmy-app</a>.</li>
</ul>
<h3 id="ashellbysunilpaulmathewmsunilpaulmathew">aShell by Sunil Paul Mathew M. / sunilpaulmathew</h3>
<ul>
<li>F-droid: <a href="https://f-droid.org/packages/in.sunilpaulmathew.ashell/">https://f-droid.org/packages/in.sunilpaulmathew.ashell/</a>.</li>
<li>GitLab: <a href="https://f-droid.org/packages/in.sunilpaulmathew.ashell/">https://gitlab.com/sunilpaulmathew/ashell</a>.</li>
</ul>
<h3 id="qemubyqemuprojectqemu">QEMU by Qemu Project / QEMU</h3>
<ul>
<li>GitLab: <a href="https://gitlab.com/qemu-project/qemu">https://gitlab.com/qemu-project/qemu</a>.</li>
<li>Official website: <a href="https://www.qemu.org/">https://www.qemu.org/</a>.</li>
</ul>
<h3 id="torandtorbrowserbythetorproject">Tor and Tor Browser by The Tor Project</h3>
<ul>
<li>Google Play of Tor Browser: <a href="https://play.google.com/store/apps/details?id=org.torproject.torbrowser">https://play.google.com/store/apps/details?id=org.torproject.torbrowser</a>.</li>
<li>GitLab of Tor Browser: <a href="https://gitlab.torproject.org/tpo/applications/tor-browser">https://gitlab.torproject.org/tpo/applications/tor-browser</a>.</li>
<li>GitLab of The Tor Project: <a href="https://gitlab.torproject.org/tpo">https://gitlab.torproject.org/tpo</a>.</li>
<li>GitLab of the Debian package tor:<a href="https://gitlab.torproject.org/tpo/core/debian/tor">https://gitlab.torproject.org/tpo/core/debian/tor</a>.</li>
<li>Official website: <a href="https://www.torproject.org/">https://www.torproject.org/</a>.</li>
<li>Check Tor Project: <a href="https://check.torproject.org/">https://check.torproject.org/</a>.</li>
</ul>
<h3 id="myipipcheckingbyjasonngjason5ng32">MyIP / IPCheck.ing by Jason Ng / jason5ng32</h3>
<ul>
<li>Official website: <a href="https://ipcheck.ing/">https://ipcheck.ing/</a>.</li>
<li>GitHub: <a href="https://github.com/jason5ng32/MyIP">https://github.com/jason5ng32/MyIP</a>.</li>
</ul>
<h3 id="debian">Debian</h3>
<ul>
<li>Official website: <a href="https://www.debian.org/">https://www.debian.org/</a>.</li>
<li>GitLab: <a href="https://salsa.debian.org/public">https://salsa.debian.org/public</a>.</li>
</ul>
<h3 id="linuxcommandlibrarybysimonschubertsimonschubert">Linux Command Library by Simon Schubert / SimonSchubert</h3>
<ul>
<li>GitHub: <a href="https://github.com/SimonSchubert/LinuxCommandLibrary">https://github.com/SimonSchubert/LinuxCommandLibrary</a>.</li>
<li>Google Play: <a href="https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca">https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca</a>. </li>
<li>F-Droid: <a href="https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca/">https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca/</a>. </li>
<li>Official website: <a href="https://linuxcommandlibrary.com/">https://linuxcommandlibrary.com/</a>.</li>
</ul>
<h3 id="opensslbyopensslopenssl">OpenSSL by OpenSSL / openssl</h3>
<ul>
<li>Official website: <a href="https://www.openssl.org/">https://www.openssl.org/</a>.</li>
<li>GitHub: <a href="https://github.com/openssl/openssl">https://github.com/openssl/openssl</a>.</li>
</ul>
<h3 id="ancbygauravujwalgujjwal00">ANC by Gaurav Ujwal / gujjwal00</h3>
<ul>
<li>F-Droid: <a href="https://f-droid.org/packages/com.gaurav.avnc/">https://f-droid.org/packages/com.gaurav.avnc/</a>.</li>
<li>GitHub: <a href="https://github.com/gujjwal00/avnc">https://github.com/gujjwal00/avnc</a>.</li>
</ul>
<h3 id="materialfilesmaterialfilesbyhaizhangzhanghai">Material Files / MaterialFiles by Hai Zhang / zhanghai</h3>
<ul>
<li>Google Play: <a href="https://play.google.com/store/apps/details?id=me.zhanghai.android.files">https://play.google.com/store/apps/details?id=me.zhanghai.android.files</a>.</li>
<li>F-Droid: <a href="https://f-droid.org/packages/me.zhanghai.android.files/">https://f-droid.org/packages/me.zhanghai.android.files/</a>.</li>
<li>GitHub: <a href="https://github.com/zhanghai/MaterialFiles">https://github.com/zhanghai/MaterialFiles</a>.</li>
</ul>
<h3 id="">
<h3 id="sdmaidsesdmaid2sesystemcleanersdmaidsebyd4rkend4rkenorgdarkendarkendevelopment">SD Maid SE / SD Maid 2/SE - System Cleaner / sdmaid-se by d4rken / d4rken-org / darken / darken development</h3>
<ul>
<li>F-Droid: <a href="https://f-droid.org/packages/eu.darken.sdmse">https://f-droid.org/packages/eu.darken.sdmse</a>.</li>
<li>Google Play: <a href="https://play.google.com/store/apps/details?id=eu.darken.sdmse">https://play.google.com/store/apps/details?id=eu.darken.sdmse</a>.</li>
<li>GitHub: <a href="https://github.com/d4rken-org/sdmaid-se">https://github.com/d4rken-org/sdmaid-se</a>.</li>
</ul>
<h3 id="others">Others</h3>
<ul>
<li>ChatGPT by OpenAI: <a href="https://openai.com/chatgpt/">https://openai.com/chatgpt/</a>.</li>
<li>awesome-shizuku by Tim Schneeberger / timschneeb: <a href="https://github.com/timschneeb/awesome-shizuku">https://github.com/timschneeb/awesome-shizuku</a>.</li>
<li>shizuku-apps by Souvik Bagchi (Mr HyperIon) / MrHyperlon101: <a href="https://github.com/MrHyperIon101/shizuku-apps">https://github.com/MrHyperIon101/shizuku-apps</a>.</li>
<li>Wikipedia: <a href="https://en.m.wikipedia.org/">https://en.m.wikipedia.org/</a>.</li>
<li>DNS leak test: <a href="https://www.dnsleaktest.com">https://www.dnsleaktest.com</a>.</li>
<li>What Is My IP Address: <a href="https://whatismyipaddress.com">https://whatismyipaddress.com</a>.</li>
<li>freshtermux by Miranda / cyb0rgdoll: <a href="https://github.com/cyb0rgdoll/freshtermux">https://github.com/cyb0rgdoll/freshtermux</a>.</li>
</ul>
<hr>
<h2 id="contribution">Contribution</h2>
<p>We welcome contributions to this project! Please fork the repository and submit a pull request for your contributions. For clarity and convenience, we recommend making one pull request per revised section or added feature.</p>
<hr>
<h2 id="license">License</h2>
<p>Copyright (C) 2024 <a href="https://github.com/Willie169">Willie169</a>.</p>
<p>This project is licensed under the terms of either:</p>
<ul>
<li><strong>GNU Free Documentation License, Version 1.3 (GFDL 1.3)</strong>  </li>
<li><strong>Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)</strong></li>
</ul>
<h3 id="gnufreedocumentationlicenseversion13gfdl13">GNU Free Documentation License, Version 1.3 (GFDL 1.3)</h3>
<p>Permission is granted to copy, distribute, and/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.</p>
<p>You should have received a copy of the GNU Free Documentation License along with this document. If not, see <a href="https://www.gnu.org/licenses/fdl-1.3.html">https://www.gnu.org/licenses/fdl-1.3.html</a>.</p>
<h3 id="creativecommonsattributionsharealike40internationallicenseccbysa40">Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)</h3>
<p>You are free to:</p>
<ul>
<li><strong>Share</strong> — copy and redistribute the material in any medium or format</li>
<li><strong>Adapt</strong> — remix, transform, and build upon the material for any purpose, even commercially.</li>
</ul>
<p>The licensor cannot revoke these freedoms as long as you follow the license terms.</p>
<p>Under the following terms:</p>
<ul>
<li><strong>Attribution</strong> — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.</li>
<li><strong>ShareAlike</strong> — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.</li>
</ul>
<p>No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.</p>
<p>You should have received a copy of the Creative Commons Attribution-ShareAlike 4.0 International License along with this program. If not, see <a href="https://creativecommons.org/licenses/by-sa/4.0/">https://creativecommons.org/licenses/by-sa/4.0/</a>.</p>
</div>
<button id="backToTopBtn" onclick="scrollToTop()">↑ Back to Top</button>
</body>
</html>