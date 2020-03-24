require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const qs = require('qs');
const app = express();
const signature = require('./verifySignature.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const rawBodyBuffer = (req, res, buf, encoding) => {
//   if (buf && buf.length) {
//     req.rawBody = buf.toString(encoding || 'utf8');
//   }
// };
 
// app.use(bodyParser.urlencoded({verify: rawBodyBuffer, extended: true }));
// app.use(bodyParser.json({ verify: rawBodyBuffer }));

app.get('/', (req, res) => {
    res.send({ response: 'Running'})
});

app.post('/actions', (req, res) => {
    const token = 'xoxb-1011724456372-1020703171413-f8OGkG402GnJO4Z6YT6SXkGi';

    const payload = JSON.parse(req.body.payload);
    const {type, user, submission} = payload;
  
    // if (!signature.isVerified(req)) {
    //   res.sendStatus(404);
    //   return;
    // }

    if(type === 'shortcut') {
      const dialogData = {
        token: token,
        trigger_id: payload.trigger_id,
        dialog: JSON.stringify({
          title: 'Save it to ClipIt!',
          callback_id: 'clipit',
          submit_label: 'ClipIt',
          elements: [
            {
              label: 'Message Text',
              type: 'textarea',
              name: 'message',
              value: "payload.message.text"
            },
            {
              label: 'Importance',
              type: 'select',
              name: 'importance',
              value: 'Medium 💎',
              options: [
                { label: 'High', value: 'High 💎💎✨' },
                { label: 'Medium', value: 'Medium 💎' },
                { label: 'Low', value: 'Low ⚪️' }
              ],
            },
          ]
        })
      };
      
      // open the dialog by calling the dialogs.open method and sending the payload
      axios.post('https://slack.com/api/dialog.open', qs.stringify(dialogData))
        .then((result) => {
            if(result.data.error) {
              res.sendStatus(500);
            } else {
              res.sendStatus(200);
            }
         })
        .catch((err) => {
            res.sendStatus(500);
        });

    } else if (type === 'dialog_submission') {
      res.send('');

      const attachments = [
        {
          title: 'Message clipped!',
          title_link: `http://example.com/${user.id}/clip`,
          fields: [
            {
              title: 'Message',
              value: submission.message
            },
            {
              title: 'Importance',
              value: submission.importance,
              short: true
            },
          ],
        },
      ];
    
      const message = {
        token: token,
        channel: user.id,
        as_user: true, // DM will be sent by the bot
        attachments: JSON.stringify(attachments)
      };
      
      axios.post('https://slack.com/api/chat.postMessage', qs.stringify(message))
        .then((result => {
          console.log(result.data);
        }))
        .catch((err) => {
          console.log(err);
        });
    }


});

console.log('http://localhost:5000');
const server = app.listen(5000);
