var twilio = require('twilio');

exports.handler = function(event, context, callback) {
    // your server-side functionality
  const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
  client.messages.create({
    body: 'Hello from Node',
    to: '+12345678901',  // Text this number
    from: '+12345678901' // From a valid Twilio number
  })
  console.log(event);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify('Message sent!')
  });
}
