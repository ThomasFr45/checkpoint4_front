const items = [
  {
    level: 30,
    content: "Strike Patch; Destroyer Patch; Sniper Patch; Frozen Patch; Storm Patch",
  },
  {
    level: 40,
    content: "Invisible Cape; Evasion Cloak; Rocket Boot; Electromagnetic Shield",
  },
  {
    level: 50,
    content: "Fluctuwave Device; Aven Teleport Device; Asbee Crystal Polymerizer; Eternal Coin Mold; War Stone Polymerizer",
  },
  {
    level: 60,
    content: "Enhanced Rocket Boot; Enhanced Wave Sensor; Enhanced Invisible Cload; En Electromagnetic Cloak",
  },
  {
    level: 60,
    content: "Steam Core; Steam Locomotive; Alpaca DNA Mod - Formula; Premium Lucky Safety Stone; Premium Safety Stone",
  },
  {
    level: 70,
    content: "Super Fertilizer; Firework; Super Speed Device; Wonder Pocket; Avian Amazement",
  },
  {
    level: 70,
    content: "Eden Crystal Fragment Fuzer; Vitality enhancer; Light Beam Gun; Zumi Flying Propeller; Super Engine Set",
  },
  {
    level: 80,
    content: "Minibot 8000; Smoke Bomb; Announcement Billboard; Twist Of Fate",
  },
  {
    level: 85,
    content: "Fourth Dimension Bag; Remote Control Dice; Poisonous Powder; Engineer Potion; Happy Powder",
  },
  {
    level: 90,
    content: "Mouse Trap; Arch Iron Robot I; General Mechanical Loricae; High Quality Pet Food",
  },
  {
    level: 95,
    content: "Chance Refill Pouch; Fate Dice; Fate EXP Double Up Scroll; Map reset Tool; Adventure Notebook",
  },
  {
    level: 100,
    content: "Arch Iron Robot II; Wizard Boots; Warrior Boots; Priest Boots; Guardian Boots",
  },
  {
    level: 100,
    content: "Basic Fire Stone; Basic Ice Stone; Basic Thunder Stone; Basic Nature Stone; Basic Holy Stone; Basic Dark Stone",
  },
];

const Zumis = () => {
  return (
    <div>
      <h4>
        You can find here some informations about the items zumis can craft.
      </h4>
      <img
          src="https://i.imgur.com/MhAgYYq.png"
          alt=""
          className="racial-image"
        />
      <div className="racial-item-header"><p>Level</p><p>Item</p></div>
      {items.map(item => (
        <div className="racial-item-container">
        <p>{item.level}</p>
        <div>
        {item.content.split(';').map(object => <p>{object}</p>)}
        </div>
      </div>
      ))}
    </div>
  );
};

export default Zumis;