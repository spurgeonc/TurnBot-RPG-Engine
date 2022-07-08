TurnBot RPG Engine is a free-to-use, open-source engine for creating browser-based, top-down RPGs.
This is just a hard-coded prototype, and not quite usable yet, but regardless, all are free to copy this code and make whatever they want with it.
Just as long as you give credit and give others those same freedoms.

All artwork is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. (http://creativecommons.org/licenses/by-sa/4.0/)
All software is licensed under a GNU General Public License v3.0. (https://choosealicense.com/licenses/gpl-3.0/)


To run the game locally, you'll need to run it on a local server. 
Here's a turorial on how to do how to do that: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server

TRANSCRIBED:

1. Install Python. If you are using Linux or macOS, it should be available on your system already. If you are a Windows user, you can get an installer from the Python homepage and follow the instructions to install it:

    Go to python.org
    Under the Download section, click the link for Python "3.xxx".
    At the bottom of the page, click the Windows Installer link to download the installer file.
    When it has downloaded, run it.
    On the first installer page, make sure you check the "Add Python 3.xxx to PATH" checkbox.
    Click Install, then click Close when the installation has finished.

2. Open your command prompt (Windows) / terminal (macOS/ Linux). To check if Python is installed, enter the following command:

    python -V
    # If the above fails, try:
    python3 -V
    # Or, if the "py" command is available, try:
    py -V

3. This should return a version number. If this is OK, navigate to the directory that your example is inside, using the cd command.

    # include the directory name to enter it, for example
    cd Desktop
    # use two dots to jump up one directory level if you need to
    cd ..

4. Enter the command to start up the server in that directory:

    # If Python version returned above is 3.X
    # On Windows, try the following: 
        python -m http.server 
    # If that doesn't work, try this: 
        py -3 -m http.server

    # If not on Windows, try the following:
    python3 -m http.server

    # If Python version returned above is 2.X
    python -m SimpleHTTPServer

5. By default, this will run the contents of the directory on a local web server, on port 8000. You can go to this server by going to the URL localhost:8000 in your web browser. Here you'll see the contents of the directory listed — click the HTML file you want to run.

NOTE: If folder includes "index.html", going to localhost:8000 will run that automatically