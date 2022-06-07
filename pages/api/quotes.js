export default function handler(req, res) {
  res.status(200).json([
    {
      ID: 0,
      Name: "Steve Jobs",
      Quote:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
      Date: "12/06/2005",
      Img: "/Author1.png",
    },
    {
      ID: 1,
      Name: "Mark Twain",
      Quote:
        "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
      Date: "Undeclared",
      Img: "/Author2.jpg",
    },
    {
      ID: 2,
      Name: "Johnny Cash",
      Quote:
        "All your life, you will be faced with a choice. You can choose love or hate.. I choose love.",
      Date: "Undeclared",
      Img: "/Author3.jpg",
    },
  ]);
}
