taskkill /f /im inetinfo.exe

:loop
cls
timeout /T 3
netstat -aon|findstr "0.0.0.0:443" || goto restrat
goto loop


:restrat
echo "restrat"
start node ./maildev /B
timeout /T 3
goto loop
