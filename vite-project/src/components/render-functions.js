export const renderStockData = async (data) => {

    const ul = document.querySelect("#tickerSymbol")
    const li = document.createElement("li")
    const button = document.createElement('Button')
    const h3 = documet.createELement("h3")
    const canvas = document.createElement("canvas")
    canvas.id = "myChart"
    
    h3.innertext = data.symbole
    button.textContent = h3

    li.append(button)
    li.appendChild(canvas)
    button.dataset.id = data["Meta Data"]["2. Symbol"]
    
}