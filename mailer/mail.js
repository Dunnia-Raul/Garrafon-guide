const mjml = require('mjml');
const hbs = require('handlebars');
const fs = require('fs');
const path = require('path');
const {transport} =  require('./transport');

const sendMail = (to, templateVariable, template="mail") => {
    const templateFile = path.join(__dirname, `./templates/${template}.mjml`);
    const mjmlTemplate = fs.readFileSync(templateFile,'utf8');
    const { html } = mjml(mjmlTemplate, {});
    const templateData = hbs.compile(html);
    const compiledHTML = templateData(templateVariable);
  
    // Do not wait for transport to complete mail reception
    return transport.sendMail({
      to, 
      subject: 'Tienes un email', 
      html: compiledHTML
    })
    .then(info => console.log(info))
    .catch(error => console.log(error))
};


module.exports = {
    sendMail
}