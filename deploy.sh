#!/bin/bash

# RP Schliesstechnik - Netcup SSH Deployment Script
# Vor der Ausführung die Variablen unten anpassen!

# === KONFIGURATION - HIER ANPASSEN ===
SSH_USER="dein_benutzer"
SSH_HOST="deine_server_ip"
REMOTE_PATH="/pfad/zur/website"
LOCAL_PATH="/root/rp-schliesstechnik"

# === DEPLOYMENT PROZESS ===
echo "🚀 Starte Deployment zu Netcup Server..."

# 1. Production Build erstellen
echo "📦 Erstelle Production Build..."
cd $LOCAL_PATH
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build fehlgeschlagen!"
    exit 1
fi

# 2. Dateien zum Server übertragen
echo "📤 Übertrage Dateien zum Server..."
rsync -avz --progress \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude '.next/cache' \
    --exclude '.env.local' \
    $LOCAL_PATH/ $SSH_USER@$SSH_HOST:$REMOTE_PATH/

if [ $? -ne 0 ]; then
    echo "❌ Datei-Upload fehlgeschlagen!"
    exit 1
fi

# 3. Auf dem Server installieren und neustarten
echo "🔄 Installiere Dependencies und starte Server neu..."
ssh $SSH_USER@$SSH_HOST << EOF
cd $REMOTE_PATH
npm install --production
npm run build
pm2 restart all || systemctl restart nodejs-app || sudo systemctl restart apache2
EOF

if [ $? -eq 0 ]; then
    echo "✅ Deployment erfolgreich!"
    echo "🌐 Website sollte jetzt unter https://schluesselrp.de verfügbar sein"
else
    echo "❌ Server-Neustart fehlgeschlagen!"
    exit 1
fi