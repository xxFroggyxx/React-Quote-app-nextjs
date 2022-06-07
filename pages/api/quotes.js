export default function handler(req, res) {
  res.status(200).json([
    {
      ID: 0,
      Name: "Steve Jobs",
      Quote:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
      Date: "12/06/2005",
      Img: "https://cdn.galleries.smcloud.net/t/galleries/gf-Lo7G-QqzF-U7Lx_steve-jobs-nie-zyje-664x442-nocrop.png",
    },
    {
      ID: 1,
      Name: "Mark Twain",
      Quote:
        "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
      Date: "Undeclared",
      Img: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc0OTM5OTU0Njg0NjM0OTgy/gettyimages-517320104.jpg",
    },
    {
      ID: 2,
      Name: "Johnny Cash",
      Quote:
        "All your life, you will be faced with a choice. You can choose love or hate.. I choose love.",
      Date: "Undeclared",
      Img: "https://i.iplsc.com/-/0003W7LTIC7Y9FEO-C125-F4.jpg",
    },
  ]);
}
