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