let blocks = [
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*The Issue description*"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ""
    }
  },

  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Priority*"
    },
    "accessory": {
      "type": "static_select",
      //"selected_option":{"text":{"type":"plain_text","text":"NORMAL","emoji":true},"value":"NORMAL"},
      "options": [
        {
          "text": {
            "type": "plain_text",
            "text": "NORMAL"
          },
          "value": "NORMAL"
        },
        {
          "text": {
            "type": "plain_text",
            "text": "CRITICAL"
          },
          "value": "CRITICAL"
        }
      ]
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Due Date*"
    },
    "accessory": {
      "type": "datepicker",
      "initial_date": "1990-04-28",
      "placeholder": {
        "type": "plain_text",
        "text": "Select a date"
      }
    }
  },

  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Submit*"
    },
    "accessory": {
      "type": "button",
      "style": "primary",
      "text": {
        "type": "plain_text",
        "text": "Submit"
      },
      "value": "Submit"
    }
  }
];

module.exports = blocks;