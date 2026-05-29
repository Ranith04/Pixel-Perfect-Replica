// Real India / commerce imagery (Unsplash, hotlinked with sizing params)
const U = (id: string, w = 1200, q = 70) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const img = {
  spices: U("1556909211-36987daf7b4d", 1600),
  vegShelf: U("1542838132-92c53300491e", 1200),
  aisle: U("1604719312566-8912e9227c6a", 1600),
  aisle2: U("1578916171728-46686eac8d58", 1200),
  tomatoes: U("1567306301408-9b74779a11af", 1200),
  samosa: U("1547514701-42782101795e", 1200),
  curry: U("1601050690597-df0568f70950", 1200),
  carrots: U("1532509774891-141d37f25ae9", 1200),
  groceryHaul: U("1543168256-418811576931", 1200),
  foodFlatlay: U("1606787366850-de6330128bfc", 1600),
  farmer: U("1605000797499-95a51c5269ae", 1200),
  phonePay: U("1571867424488-4565932edb41", 1200),
  contactTiles: U("1528747045269-390fe33c19f2", 1600),
  team: U("1517245386807-bb43f82c33c4", 1200),
  coffeeHands: U("1559511260-66a654ae982a", 1200),
  circuit: U("1518770660439-4636190af475", 1600),
};
