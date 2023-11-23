# Simple Chrome VPN Extension

Proxy selected/any domains via some of your own servers.

### On your own computer run

    ssh -D 1337 -N -C root@serverip

## The Extension

1. edit `background.js` to select which domains you want to proxy
2. Go to Chrome Menu - More Tools - Extensions - Load Unpacked and select this
   repo

NOTE: To avoid the "loaded unpacked extension" warning on every chrome restart
you may use Chrome Dev version which doesnt warns.

## At startup on Windows

You may use the `task scheduler` to run the command at startup when the user
logins.

Program:

`PowerShell.exe`

Arguments:

`Start-Process -WindowStyle hidden -FilePath "ssh.exe" -ArgumentList '-D 1337 -N -C root@serverip'`
