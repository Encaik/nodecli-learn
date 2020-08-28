const request = require("request");
const cheerio = require("cheerio");
const inquirer = require("inquirer");

module.exports = {
  getNews: function () {
    let url = "https://www.tophub.fun:8888/GetRandomInfo";
    request(url, (err, res, body) => {
      if (!err && res.statusCode === 200) {
        let data = JSON.parse(body);
        if (data.Code === 0) {
          data.Data.forEach((i) => {
            console.log(`[${i.type}]${i.Title}`);
          });
        } else {
          console.log(data.Message);
        }
      } else {
        console.log("网络请求失败！");
      }
    });
  },
  getBook: function (name) {
    let form = {
      searchkey: name,
      searchtype: "all",
    };
    request.post(
      {
        url: "https://www.bxwxorg.com/search.html",
        form,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      (err, res, body) => {
        if (!err && res.statusCode == 200) {
          let $ = cheerio.load(body);
          let booknames = [];
          let books = [];
          $("#sitembox dl").each((index, item) => {
            let a = $(item).find("h3 a");
            booknames.push({
              name: a.text(),
              value: index,
            });
            books.push(a.attr("href"));
          });
          inquirer
            .prompt([
              {
                name: "bookname",
                type: "list",
                message: "你想要看哪本书?",
                choices: booknames,
              },
            ])
            .then((ans) => {
              request(
                {
                  url: books[ans.bookname],
                  form,
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                },
                (err, res, body) => {
                  if (!err && res.statusCode == 200) {
                    let $ = cheerio.load(body);
                    let nodenames = [];
                    let nodes = [];
                    $("#list dl dd").each((index, item) => {
                      if (index < 12) {
                        let a = $(item).find("a");
                        nodenames.push({
                          name: a.text(),
                          value: index,
                        });
                        nodes.push(a.attr("href"));
                      }
                    });
                    inquirer
                      .prompt([
                        {
                          name: "nodename",
                          type: "list",
                          message: "你想要看哪个章节?",
                          choices: nodenames,
                        },
                      ])
                      .then((ans) => {
                        request(
                          {
                            url: nodes[ans.nodename],
                            form,
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                          },
                          (err, res, body) => {
                            if (!err && res.statusCode == 200) {
                              let $ = cheerio.load(body);
                              console.log($("#content").text());
                            }
                          },
                        );
                      });
                  }
                },
              );
            });
        } else {
          console.error("请求出现失误，请重试！");
        }
      },
    );
  },
};
