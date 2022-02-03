import "./infos.css";
import { Link } from "react-router-dom";

const Infos = () => {
  return (
    <div>
      <div className="info-race-container">
        <img
          src="https://i.imgur.com/G5Kgo27.png"
          alt=""
          className="infos-image"
        />
        <div>
          <h3>Human</h3>
          <p>
            Jewel fusion is the human exclusive racial crafting skill. It
            creates upgraded forms of gems, that can be used directly on your
            items, or to craft even stronger gems purchased from NPC's !{" "}
          </p>
          <div className="infos-button-container"><Link to="humans"><button>More</button></Link></div>
        </div>
      </div>
      <div className="info-race-container">
        <img
          src="https://i.imgur.com/s4rZRfu.png"
          alt=""
          className="infos-image"
        />
        <div>
          <h3>Halfkin</h3>
          <p>
            Embroidery is the halfkin exclusive racial crafting skill. It
            creates trophy enchantments.{" "}
          </p>
          <div className="infos-button-container"><Link to="halfkins"><button>More</button></Link></div>
        </div>
      </div>
      <div className="info-race-container">
        <img
          src="https://i.imgur.com/lD07px6.png"
          alt=""
          className="infos-image"
        />
        <div>
          <h3>Ursun</h3>
          <p>
            Engraving is the ursun exclusive racial crafting skill. It creates
            14-day class glyphs which improve stats and class skills while
            equipped.{" "}
          </p>
          <div className="infos-button-container"><Link to="ursuns"><button>More</button></Link></div>
        </div>
      </div>
      <div className="info-race-container">
        <img
          src="https://i.imgur.com/MhAgYYq.png"
          alt=""
          className="infos-image"
        />
        <div>
          <h3>Zumi</h3>
          <p>
            Engineering is the zumi exclusive racial crafting skill. It creates
            upgraded forms of safety stones, mounts, and miscellaneous
            consumable items, some of which can only be used by zumi.{" "}
          </p>
          <div className="infos-button-container"><Link to="zumis"><button>More</button></Link></div>
        </div>
      </div>
      <div className="info-race-container">
        <img
          src="https://i.imgur.com/EHCuoKy.png"
          alt=""
          className="infos-image"
        />
        <div>
          <h3>Anuran</h3>
          <p>
            Alchemy is the anura exclusive racial crafting skill. It creates
            potions, dyes, upgraded forms of charms and essences, and trophies
            which can only be equipped by anura.{" "}
          </p>
          <div className="infos-button-container"><Link to="anurans"><button>More</button></Link></div>
        </div>
      </div>
      <div>
        <p>
          All of those races may be different,but they all need the same thing
          ... To farm components so they can craft their racial items !
        </p>
        <p>
          So where can you get those items ? Well that's pretty simple, you need
          to get Gloves, Crystal balls, and Pickaxes that matches the level of
          the item you need.
        </p>
        <p>Still don't get it ? Well check that.</p>
        <table className="tools-table">
          <thead>
            <tr>
              <td>Level</td>
              <td>Tool</td>
              <td>Materials</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>30</td>
                <td>Gloves</td>
                <td>
                  Soul Mushroom <br /> Serene Blue Herb
                </td>
              </tr>
              <tr>
                <td>30</td>
                <td>Pickaxe</td>
                <td>
                  Golden HardRock <br /> Dream Slate Stone
                </td>
              </tr>
              <tr>
                <td>30</td>
                <td>Crystal Ball</td>
                <td>
                  Magic Glitter <br /> Light Herb
                </td>
              </tr>
              <tr>
                <td>45</td>
                <td>Gloves</td>
                <td>
                  Sunset Mushroom <br /> Even Lavender <br /> Eden Spring Fern
                </td>
              </tr>
              <tr>
                <td>45</td>
                <td>Pickaxe</td>
                <td>
                  Yellow Crystal Quartz <br /> Crystal Slate Stone <br /> Dragon
                  teeth Fossil
                </td>
              </tr>
              <tr>
                <td>45</td>
                <td>Crystal Ball</td>
                <td>
                  Magic Shine <br /> Soul Light Effect <br /> Disturbance Wave
                </td>
              </tr>
              <tr>
                <td>60</td>
                <td>Gloves</td>
                <td>
                  Water Vine Mushroom <br /> Golgen Mugwort <br /> Goddess Red
                  Fern
                </td>
              </tr>
              <tr>
                <td>60</td>
                <td>Pickaxe</td>
                <td>
                  Sunset Quartz <br /> Diamond Slate Stone <br /> Giant Dragon
                  Fossil
                </td>
              </tr>
              <tr>
                <td>60</td>
                <td>Crystal Ball</td>
                <td>
                  Ultra Light Power <br /> Ion Energy <br /> Disturbance Sunspot
                </td>
              </tr>
              <tr>
                <td>70</td>
                <td>Gloves</td>
                <td>
                  Branch Hypha <br /> Gilded Flower Fungus
                </td>
              </tr>
              <tr>
                <td>70</td>
                <td>Pickaxe</td>
                <td>
                  Hyperpolar Pyrite <br /> Carbon Feldspar <br /> Moonlight
                  Wolfram
                </td>
              </tr>
              <tr>
                <td>70</td>
                <td>Crystal Ball</td>
                <td>Hadron Energy <br/> Quark Wave <br/> Flameburst Energy</td>
              </tr>
              <tr>
                <td>85</td>
                <td>Gloves</td>
                <td>Crimson Bacteria <br/> Yellow Ginseng <br/> Azure Dragon Ginseng</td>
              </tr>
              <tr>
                <td>85</td>
                <td>Pickaxe</td>
                <td>Fruit Flower Stone <br/> Sunrise Glove <br/> Blood Diamong</td>
              </tr>
              <tr>
                <td>85</td>
                <td>Crystal Ball</td>
                <td>Trance Generator <br/> Oracular Fluid <br/> Quaking Flame</td>
              </tr>
              <tr>
                <td>95</td>
                <td>Gloves</td>
                <td>Poison Bacteria <br/> Eden Stem <br/> Golden Fern</td>
              </tr>
              <tr>
                <td>95</td>
                <td>Pickaxe</td>
                <td>Clear Crystal Rock <br/> Amethyst Stone <br/> Giant Bone Fossil</td>
              </tr>
              <tr>
                <td>95</td>
                <td>Crystal Ball</td>
                <td>Crystal Energy <br/> Emerald Wave <br/>Disturbance Power</td>
              </tr>
              <tr>
                <td>100</td>
                <td>Gloves</td>
                <td>Dried Weed <br/> Wilted Bloom <br/> Moonblossom</td>
              </tr>
              <tr>
                <td>100</td>
                <td>Pickaxe</td>
                <td>Bone Fragment <br/> Smooth Gemstone <br/> Sunstone</td>
              </tr>
              <tr>
                <td>100</td>
                <td>Crystal Ball</td>
                <td>Fizzled Shine <br/> Glistening Effect <br/> Stardrop</td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Infos;
