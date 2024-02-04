import inquirer from "inquirer";
import qrImage from "qr-image";
import fs from  'fs';

inquirer
  .prompt([
    {
    message: "Type your URL: ",
    name: 'URL',
    },
])
  .then((answers) => {
    const url = answers["URL"]
    console.log(`The URL you typed is ${answers[`URL`]}`);

    var qr_svg = qrImage.image(url);
    qr_svg.pipe(fs.createWriteStream('QRCode.png'));

    fs.writeFile("URL.txt", url, (error) => {
        if (error) throw error;
       else console.log('url has been saved to URL.txt file');
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

