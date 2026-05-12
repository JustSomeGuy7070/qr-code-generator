import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    const qrSvg = qr.image(url);
    qrSvg.pipe(fs.createWriteStream("output/qr_img.png"));

    fs.writeFile("output/URL.txt", url, (err) => {
      if (err) throw err;
      console.log("Files saved successfully in output folder!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't run in this terminal.");
    } else {
      console.log("Something went wrong:", error);
    }
  });