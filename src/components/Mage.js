export default function Mage(props) {
    const signatureCards = Object.values(props.signatureCards);

    const cards = signatureCards.map((item, index) => {
      return {
        src: item,
        id: index
      };
    });
   
    {console.log(props)}
    return (
        <div>
            
            <div className = "mage--dataField">
                <h1 className = "mage--header">{props.name}</h1>
            </div>

            <hr class="divider" width = "20%"></hr>

            <div className = "mage--dataField">
                <p className="mage--description"> {props.description} </p>
            </div>

            <hr class="divider" width = "40%"></hr>

            <div className = "mage--dataField">
                <img className="mage--board" src = {props.front}/>
                <img className="mage--board" src = {props.back}/>
            </div>


            <div className = "mage--dataField">
                {cards.map((card) => (
                    <img
                    className="mage--card"
                    src={card.src}
                    width="30%"
                    alt="Signature Card"
                    />
                ))}
            </div>

            <hr class="divider" width = "90%"></hr>

            <div className = "mage--dataField">
                <h1 className = "mage--header">Strategy Tips</h1>
                <h1 className = "mage--header">Suggested Opening</h1>
            </div>

            <hr class="divider" width = "80%"></hr>
            
            <div className = "mage--dataField">
                <p className="mage--text"> {props.strategyTips} </p>
                <p className="mage--text"> {props.suggestedOpening} </p>
            </div>
            
            <hr class="boldDivider" width = "95%"></hr>

        </div>
    )
}