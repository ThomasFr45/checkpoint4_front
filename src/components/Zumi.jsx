const items = [];

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