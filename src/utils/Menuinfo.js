const restaurantData = {
  info: {
    id: "99881",
    name: "TKS Iyengar",
    city: "Mysore",
    locality: "Vijayanagar",
    areaName: "Mysore City",
    costForTwo: "₹250 for two",
    cuisines: ["South Indian", "Beverages"],
    avgRating: 4.6,
    totalRatings: "25K+",
    deliveryTime: "30-35 MINS",
    isVeg: true,
    sla: {
      deliveryTime: 34,
      lastMileTravel: "4.6 km",
    },
  },

  offers: [
    {
      header: "FLAT ₹150 OFF",
      code: "USE AXISREWARDS",
      description: "ABOVE ₹500",
    },
    {
      header: "10% OFF UPTO ₹75",
      code: "USE VISAPLATINUMDC",
      description: "ABOVE ₹300",
    },
    {
      header: "FLAT ₹125 OFF",
      code: "USE IDFCDC125",
      description: "ABOVE ₹499",
    },
  ],

  topPicks: [
    {
      name: "Bisi Bele Bath",
      price: 79.28,
      isVeg: true,
    },
    {
      name: "Curd Rice",
      price: 61.31,
      isVeg: true,
    },
    {
      name: "Hayagreeva",
      price: 66.07,
      isVeg: true,
    },
  ],

  recommended: [
    {
      name: "Masala Idli",
      price: 60.26,
      rating: 4.6,
    },
    {
      name: "Coffee",
      price: 40.0,
      rating: 4.7,
    },
    {
      name: "Watermelon Juice",
      price: 75.0,
    },
    {
      name: "Lemon Juice",
      price: 43.75,
      rating: 5.0,
    },
  ],

  specials: [
    {
      name: "Khara Pongal",
      price: 79.28,
      rating: 4.7,
    },
    {
      name: "Puliogre",
      price: 85.63,
      rating: 4.7,
    },
    {
      name: "Huli Avalakki",
      price: 56.03,
      rating: 4.7,
    },
    {
      name: "Sweet Pongal",
      price: 88.8,
      rating: 4.6,
    },
  ],
};
export default restaurantData;
