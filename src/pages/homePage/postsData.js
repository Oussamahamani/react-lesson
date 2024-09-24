const posts = [
    {
      id: 1,
      title: "Best Vacation Destinations",
      content: "Looking for recommendations for the best vacation spots around the world.",
      comments: [
        { 
          id: 1, 
          user: "Olivia", 
          text: "I loved visiting Bali, it's beautiful!",
          replies: [
            { id: 1, user: "Liam", text: "Bali is amazing! I loved the beaches there." },
            { id: 2, user: "Sophia", text: "I’d recommend visiting Ubud for its culture and nature." }
          ]
        },
        { 
          id: 2, 
          user: "Liam", 
          text: "You should check out New Zealand for the stunning landscapes.",
          replies: [
            { id: 1, user: "Ava", text: "New Zealand is on my bucket list!" },
            { id: 2, user: "Mason", text: "I’ve been there, and the mountains are breathtaking." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Healthy Breakfast Ideas",
      content: "What are some quick and healthy breakfast ideas?",
      comments: [
        { 
          id: 1, 
          user: "Emma", 
          text: "I usually have avocado toast with a poached egg.",
          replies: [
            { id: 1, user: "Noah", text: "That’s my favorite breakfast too!" },
            { id: 2, user: "Isabella", text: "Try adding a sprinkle of chili flakes for extra flavor." }
          ]
        },
        { 
          id: 2, 
          user: "Noah", 
          text: "Smoothies are a great way to start the day!",
          replies: [
            { id: 1, user: "Liam", text: "I love green smoothies with spinach and banana." },
            { id: 2, user: "Mia", text: "Berry smoothies are my go-to in the summer." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Favorite Movies of All Time",
      content: "What are your top 3 favorite movies?",
      comments: [
        { 
          id: 1, 
          user: "Ava", 
          text: "I love The Godfather, Inception, and The Shawshank Redemption.",
          replies: [
            { id: 1, user: "Ethan", text: "Inception is such a mind-bending movie!" },
            { id: 2, user: "Sophia", text: "The Shawshank Redemption is a classic." }
          ]
        },
        { 
          id: 2, 
          user: "Ethan", 
          text: "For me, it’s The Matrix, Interstellar, and Pulp Fiction.",
          replies: [
            { id: 1, user: "Mason", text: "Interstellar blew my mind with its visuals." },
            { id: 2, user: "Isabella", text: "Pulp Fiction is an all-time favorite." }
          ]
        }
      ]
    }
  ];
  export default posts