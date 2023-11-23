# Simple Chrome VPN Extension

A simple Chrome Extension to proxy any domain via some of your own servers.

## The proxy

### On your own computer run

    ssh -D 1337 -N -C root@YOUIP

## The Extension

1. edit `background.js` to select which domains you want to proxy
2. Go to Chrome Menu - More Tools - Extensions - Load Unpacked and select this
   repo

NOTE: To avoid the "loaded unpacked extension" warning on every chrome restart
you may use Chrome Dev version which doesnt warns.

## at startup on windows

You may use https://nssm.cc/ to create a service, helpful commands

```cmd
nssm install "Chrome VPN" "C:\Windows\System32\cmd.exe" "ssh -D 1337 -N -C root@YOUIP"
nssm start "Chrome VPN"
nssm stop "Chrome VPN"
nssm remove "Chrome VPN" confirm
```
