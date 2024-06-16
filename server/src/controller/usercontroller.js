const axios = require('axios');
const dotenv = require('dotenv');
const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');
const TokenModel = require('../models/token');

dotenv.config();

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    console.log("Loaded saved credentials");
    return google.auth.fromJSON(credentials);
  } catch (err) {
    console.log("No saved credentials found.");
    return null;
  }
}

async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  console.log("Saving new credentials.",key);
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
  console.log("Saved new credentials.");
}

async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  console.log("Authenticating using credentials file.",client.credentials);
  if (client) {
    console.log("Using saved credentials.");
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  console.log("client+++++++++++++.",client.credentials);
  if (client.credentials) {
    // console.log("Saving new credentials.");
    await saveCredentials(client);
  }
  return client;
}

async function listFiles(authClient) {
  const drive = google.drive({ version: 'v3', auth: authClient });
  const res = await drive.files.list({
    pageSize: 100, // Adjust page size as needed
    fields: 'nextPageToken, files(id, name, mimeType, size, webViewLink, createdTime)',
  });
  return res.data.files;
}

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);
async function authGoogle(req, res) {
  try {
    const state = generateState();
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        // 'https://www.googleapis.com/auth/userinfo.profile',
        // 'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        // 'https://www.googleapis.com/auth/docs',
        // 'https://www.googleapis.com/auth/drive.appdata',
        // 'https://www.googleapis.com/auth/drive.metadata',
        // 'https://www.googleapis.com/auth/drive.metadata.readonly',
        // 'https://www.googleapis.com/auth/drive.photos.readonly',
        // 'https://www.googleapis.com/auth/drive.readonly',
        // 'https://www.googleapis.com/auth/drive.scripts',
        // 'https://www.googleapis.com/auth/drive.activity',
        // 'https://www.googleapis.com/auth/drive.activity.readonly',
      ],
      state: state,
    });
    res.redirect(url);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send("Error during authorization");
  }
}

async function googleRedirect(req, res) {
  try {
    console.log("is that calling!!!");
    const authClient = await authorize();
    const files = await listFiles(authClient);
    if (files.length === 0) {
      console.log('No files found.');
      return res.status(200).json({ message: "No files found." });
    }
    // console.log('Files:', files);
    res.status(200).json({ message: "All files", files });
  }

  catch (error) {
    console.error('Error:', error);
  }
}

function generateState() {
  const length = 10;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let state = '';
  for (let i = 0; i < length; i++) {
    state += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return state;
}

module.exports = {
  authGoogle,
  googleRedirect
};
