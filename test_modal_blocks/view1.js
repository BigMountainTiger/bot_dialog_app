let view = {
  "type": "modal",
  "callback_id": "trigger_id",
  "title": {
    "type": "plain_text",
    "text": "Additional Information"
  },
  "blocks": [
    
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*DueDate*"
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
        "text": "*Priority*"
      },
      "accessory": {
        "type": "static_select",
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
        "text": " "
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
  ]
};

module.exports = view;