let blocks = [
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*Please select an item from the list*"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "Select the animal"
    },
    "accessory": {
      "type": "multi_static_select",
      "placeholder": {
        "type": "plain_text",
        "text": "Select items",
        "emoji": true
      },
      "options": [
        {
          "text": {
            "type": "plain_text",
            "text": "Tiger",
            "emoji": true
          },
          "value": "Tiger"
        },
        {
          "text": {
            "type": "plain_text",
            "text": "Elephant",
            "emoji": true
          },
          "value": "Elephant"
        },
        {
          "text": {
            "type": "plain_text",
            "text": "Monkey",
            "emoji": true
          },
          "value": "Monkey"
        }
      ]
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "Submit "
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "text": "Submit",
        "emoji": true
      },
      "value": "click_me_123"
    }
  }
];


module.exports = blocks;