const { readdirSync, rename, lstatSync } = require("fs");
const path = require("path");
const uuid = require("uuid");

const mainFolder = "../compressed";
const oldPath = ".jpeg";
const newPath = ".webp";

const changeFileExtension = () => {
  readdirSync(mainFolder).forEach((folder) => {
    if (lstatSync(`${mainFolder}/${folder}`).isDirectory()) {
      readdirSync(`${mainFolder}/${folder}`).forEach((file2) => {
        rename(
          `${mainFolder}/${folder}/${path.parse(file2).name}${oldPath}`,
          `${mainFolder}/${folder}/${path.parse(file2).name}${newPath}`,
          (err) => {
            if (err) console.log(err);
            console.log("Rename complete!");
          }
        );
      });
    } else {
      readdirSync(`${mainFolder}`).forEach((file2) => {
        rename(
          `${mainFolder}/${path.parse(file2).name}${oldPath}`,
          `${mainFolder}/${path.parse(file2).name}${newPath}`,
          (err) => {
            if (err) console.log(err);
            console.log("Rename complete!");
          }
        );
      });
    }
  });
};

const changeFileName = () => {
  readdirSync(mainFolder).forEach((folder) => {
    if (lstatSync(`${mainFolder}/${folder}`).isDirectory()) {
      readdirSync(`${mainFolder}/${folder}`).forEach((file2) => {
        rename(
          `${mainFolder}/${folder}/${path.parse(file2).name}${
            path.parse(file2).ext
          }`,
          `${mainFolder}/${folder}/${uuid.v4()}${path.parse(file2).ext}`,
          (err) => {
            if (err) console.log(err);
            console.log("Rename complete!");
          }
        );
      });
    } else {
      readdirSync(`${mainFolder}`).forEach((file2) => {
        rename(
          `${mainFolder}/${path.parse(file2).name}${path.parse(file2).ext}`,
          `${mainFolder}/${uuid.v4().toString()}${path.parse(file2).ext}`,
          (err) => {
            if (err) console.log(err);
            console.log("Rename complete!");
          }
        );
      });
    }
  });
};

changeFileName();
