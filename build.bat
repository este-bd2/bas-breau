@echo off
title Bas-Bréau — build
cd /d %~dp0
if not exist node_modules (echo Installation des dependances... & call npm install)
call npm run build
pause