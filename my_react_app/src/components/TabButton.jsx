export default function TabButton({children,onSelect}){
console.log("tabbutton exec")
    return (
    <li>
        <button className="active" onClick={onSelect}>{children}</button>
    </li>
)
}
