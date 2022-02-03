import './racial.css';

const items = [
  {
    level: 30,
    content: "Guardian Lv1; Attacker Lv1; Sniper Lv1; Healer Lv1; Magic Weaver Lv1",
  },
  {
    level: 35,
    content: "Guardian Lv2; Attacker Lv2; Sniper Lv2; Healer Lv2; Magic Weaver Lv2",
  },
  {
    level: 40,
    content: "Guardian Lv3; Attacker Lv3; Sniper Lv3; Healer Lv3; Magic Weaver Lv3",
  },
  {
    level: 45,
    content: "Guardian Lv4; Attacker Lv4; Sniper Lv4; Healer Lv4; Magic Weaver Lv4",
  },
  {
    level: 50,
    content: "Guardian Lv5; Attacker Lv5; Sniper Lv5; Healer Lv5; Magic Weaver Lv5",
  },
  {
    level: 55,
    content: "Guardian Lv6; Attacker Lv6; Sniper Lv6; Healer Lv6; Magic Weaver Lv6",
  },
  {
    level: 60,
    content: "Guardian Lv7; Attacker Lv7; Sniper Lv7; Healer Lv7; Magic Weaver Lv7",
  },
  {
    level: 65,
    content: "Guardian Lv8; Attacker Lv8; Sniper Lv8; Healer Lv8; Magic Weaver Lv8",
  },
  {
    level: 70,
    content: "Guardian Lv9; Attacker Lv9; Sniper Lv9; Healer Lv9; Magic Weaver Lv9",
  },
  {
    level: 75,
    content: "Guardian Lv10; Attacker Lv10; Sniper Lv10; Healer Lv10; Magic Weaver Lv10",
  },
  {
    level: 80,
    content: "Guardian Lv11; Attacker Lv11; Sniper Lv11; Healer Lv11; Magic Weaver Lv11",
  },
  {
    level: 85,
    content: "Guardian Lv12; Attacker Lv12; Sniper Lv12; Healer Lv12; Magic Weaver Lv12",
  },
  {
    level: 90,
    content: "Guardian Lv13; Attacker Lv13; Sniper Lv13; Healer Lv13; Magic Weaver Lv13",
  },
  {
    level: 95,
    content: "Guardian Lv14; Attacker Lv14; Sniper Lv14; Healer Lv14; Magic Weaver Lv14",
  },
  {
    level: 95,
    content: "Warrior; The Protector; Ancient Warrior; Magical Protector; Magical Guardian",
  },
  {
    level: 100,
    content: "Guardian Lv15; Attacker Lv15; Sniper Lv15; Healer Lv15; Magic Weaver Lv15",
  },
  {
    level: 100,
    content: "Warrior Lv2; The Protector Lv2; Ancient Warrior Lv2; Magical Protector Lv2; Magical Guardian Lv2",
  },
]

const Halfkins = () => {
  return (
    <div>
      <h4>
        You can find here some informations about the items halfkins can craft.
      </h4>
      <img
          src="https://i.imgur.com/s4rZRfu.png"
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

export default Halfkins;
