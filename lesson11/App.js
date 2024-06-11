export default function App() {
    const catalogItems = [
      {
    name: "BangChan",
    category: "Leader",
    website: "bangchan.com",
    src: "https://altselection.com/wp-content/uploads/2022/08/bangchan.jpg",
    skzoo: "WolfChan"
    },
      {
    name: "LeeKnow",
    category: "Dancer",
    website: "leeknow.com",
    src: "https://i.pinimg.com/originals/17/dc/0f/17dc0f23374ce820983172aca62ac77b.jpg",
    skzoo: "LeeBit"
    },
      {
    name: "Changbin",
    category: "Rapper",
    website: "changbin.com",
    src: "https://kpopping.com/documents/39/4/2000/SHJ_6451_.jpeg?v=1fb1e",
    skzoo: "Dwaekki"
    },
      {
    name: "Han",
    category: "Ace",
    website: "han.com",
    src: "https://kpopping.com/documents/bb/1/2000/SHJ_5924_.jpeg?v=1fb1e",
    skzoo: "Han Quokka"
    }
    ];
    return (
      <div className="stray-kids">{catalogItems.map(function (item) {
      return (
        <div className="member">
          <div className="member-photo">
            <img src={item.src} alt= {item.name} />
          </div>
          <div className="member-info">
          <h2>{item.name}</h2>
          <h3>Specialty: {item.category}</h3>
          <h3>SKZOO: {item.skzoo}</h3>
          <a href={item.website}>Learn more</a>
        </div>
        </div>
      )
    })}
  </div>
    );
  }
  