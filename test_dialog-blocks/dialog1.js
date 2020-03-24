let getDialog = () => {
  let date = new Date();
  date.setDate(date.getDate() + 14);

  let duedate = date.toLocaleDateString();

  let dialog = {
    "callback_id": "ryde-46e2b0",
    "title": "SUBMIT A REQUEST",
    "submit_label": "Request",
    "notify_on_cancel": false,
    "state": "Limo",
    "elements": [
      {
        "type": "textarea",
        "label": "ISSUE DESCRIPTION",
        "name": "txt_description",
        "optional": false
      },
      {
        "label": "PRIORITY",
        "type": "select",
        "value": "NORMAL",
        "name": "sel_priority",
        "options": [
          {
            "label": "NORMAL",
            "value": "NORMAL"
          },
          {
            "label": "CRITICAL",
            "value": "CRITICAL"
          },
        ]
      },
      {
        "type": "text",
        "label": "DUE DATE",
        "value": duedate,
        "name": "txt_duedate"
      },
      {
          "type": "textarea",
          "label": "JUSTIFICATION",
          "name": "txt_justification",
          "optional": true
      },
    ]
  };

  return dialog;
}

module.exports = getDialog;