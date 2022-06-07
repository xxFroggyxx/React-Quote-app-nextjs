export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      name: "Steve Jobs",
      quote:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
      date: "12/06/2005",
      img: "/Author1.png",
    },
    {
      id: 1,
      name: "Mark Twain",
      quote:
        "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
      date: "Undeclared",
      img: "/Author2.jpg",
    },
    {
      id: 2,
      name: "Johnny Cash",
      quote:
        "All your life, you will be faced with a choice. You can choose love or hate.. I choose love.",
      date: "Undeclared",
      img: "/Author3.jpg",
    },
  ]);
}
