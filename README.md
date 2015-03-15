Gnome Style Workspace Management
================================

#### Description:

This is an applet for the Cinnamon Desktop for Linux Mint (and other Linux distributions).  The applet brings the dynamic workspace management feature of Gnome to Cinnamon.  Specifically:

1. It ensures that there is always one empty workspace at the end. If you switch to that workspace and open a window, it will create a new empty workspace.
2. It automatically cleans up empty workspaces that have no windows (except the one at the end).

In the panel the applet will display the index of the workspace you are on and the total number of workspaces in fraction format, e.g. if you are on workspace 4 and there are 6 altogether you will see "4/6".

#### Rationale

Cinnamon is a great looking desktop and I wanted to switch to it a long time ago but I did not like needing to create new workspaces manually or clean them up manually when I was finished.  Coming from Gnome I was used to having the desktop environment take care of that for me.  I like being able to see how much I have going on at a glance; e.g. if the update manager prompts me to reboot, I can glance at the applet to get an idea of how much other stuff I have going on.  If the applet says 1/2 then I know it's just the windows on this workspace and I can probably reboot but if it says 1/6 then I know I should set aside more time review those other workspaces before rebooting.

#### How to use

cd into ~/.local/share/cinnamon/applets and clone this repository.  Alternately, download the Zip file and extract to that directory (keeping the gnome-style-workspace-managemnet@scanlonpatrick folder in place).

Then right-click the panel, select "Add applet to panel".  When the applet screen launches, locate Gnome Style Workspace Management, right-click it and select "Add to Panel"

#### MIT License 

Copyright (c) 2015 Patrick Scanlon


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

