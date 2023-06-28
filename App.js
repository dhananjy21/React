/**
 * <div id="parent">
 *       <div id="child">
 *            <h1>"Hello"</h1>
 *            <h2>"Hi"</h2>
 *        </div>
 * </div>
 *
 * 
 * 
 * 
 * 
 * 
 * 
 */

const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading1"},"HI React1"),React.createElement("h3",{id:"heading2"},"HI React2")]))
//We can write this in short in jSX but this the way in react React Element Object => HTML DOcumetn
const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(parent)
root.render(parent)

