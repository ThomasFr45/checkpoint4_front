const items = [
  {
    level: 30,
    content: "Magician Potion Lv1; Tank Potion Lv1; Healer Potion Lv1; War Potion Lv1",
  },
  {
    level: 35,
    content: "Antique Hat Dye; Mossy Hat Dya; State Removal Potion Lv1; Misty Lilac Hat Dye",
  },
  {
    level: 40,
    content: "Magician Potion Lv2; Tank Potion Lv2; Healer Potion Lv2; War Potion Lv2",
  },
  {
    level: 45,
    content: "Cortal Kiss Outfit Dye; Mossy Outfit Dye; Misty Lilas Outfit Dye; Summer Leaf Outfit Dye",
  },
  {
    level: 50,
    content: "Ice Elf Sculpture; Enhanced CP Charm I; Enhanced EXP Charm I; Enhanced Essence Powder Lv50; Fire Elf Sculpture",
  },
  {
    level: 55,
    content: "Enhanced CP Champ II; Enhanced EXP Charm II; Thunder Elf Sculpture; Enhanced Essence Powder Lv55; Nature Elf Sculpture",
  },
  {
    level: 60,
    content: "Enchanted Gem; Electric Energy Metal; Enhanced Essence Powder Lv60; Darkness Elf Sculpture; Holy Light Sculpture",
  },
  {
    level: 65,
    content: "Hidden Detection Potion; Enhanced Essence Powder Lv65; All Purpose Potion; Four Seasons Hibernation",
  },
  {
    level: 70,
    content: "Empty Potent Mp Potion IV Bag; Anuran Energy Drink; Empty HP Potion IV Bag; Frozen In Time Capsule; Enhanced Essence Powder Lv70",
  },
  {
    level: 75,
    content: "Upgrade Skill reset Scroll V; Baby Phoenix; Eternal Potent MP Potion IV; Eternal Potent HP Potion IV; Enhanced Essence Powder Lv75",
  },
  {
    level: 80,
    content: "Lavender Perfume; Baby Powder; Royal Bath Salt; Oak Moss Steroil; Lavender Perfume; Teddy Bear Shampoo; Enhanced Essence Powder Lv80",
  },
  {
    level: 85,
    content: "MP Potion V Bag; HP Potion V Bag; Enhanced EXP Charm III; Enhanced CP Charm III; Enhanced Essence Powder Lv85",
  },
  {
    level: 90,
    content: "Carnage Potion Bag; Enhanced Essence Powder Lv90; Pet Skill token; HP Little Sprite; MP Little Sprite",
  },
  {
    level: 95,
    content: "Iron Skin Potion Lv1; Swiftness Potion Lv1; Natures Call Potion Lv1; Ultimate HP Potion Lv1; Ultimate MP Potion Lv1",
  },
  {
    level: 100,
    content: "Iron Skin Potion Lv2; Swiftness Potion Lv2; Natures Call Potion Lv2; Ultimate HP Potion Lv2; Ultimate MP Potion Lv2",
  },
  {
    level: 100,
    content: "Green Bean Phoenix; En. Awakening CP Charm I; En. Awakening CP Charm II; En. Awakening CP Charm III; State Removal Potion Lv2",
  },
];

const Anurans = () => {
  return (
    <div>
      <h4>
        You can find here some informations about the items anurans can craft.
      </h4>
      <img
          src="https://i.imgur.com/EHCuoKy.png"
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

export default Anurans;