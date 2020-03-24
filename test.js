const axios = require('axios');
const qs = require('qs');

const token = 'xoxb-1011724456372-1012304784068-4iZQHXzNmr1IAU9OI9KhqbCl';
let conversationId = 'C010C5U9ZJR'

const dialogData = {
    token: token,
    trigger_id: conversationId,
    dialog: JSON.stringify({
      title: 'Save it to ClipIt!',
      callback_id: 'clipit',
      submit_label: 'ClipIt',
      elements: [
        {
          label: 'Message Text',
          type: 'textarea',
          name: 'message',
          value: 'payload.message.text'
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

axios.post('https://slack.com/api/dialog.open', qs.stringify(dialogData))
  .then((result) => {
        console.log(result);
   })
  .catch((err) => {
        console.error(err);
  });
