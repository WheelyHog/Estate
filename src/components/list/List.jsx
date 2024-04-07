import "./list.scss"
import {listData} from "../../lib/dummydata.js";
import Card from "../card/Card.jsx";

function List(props) {
    return (
        <div className="list">
            {listData.map(item => (
                <Card key={item.id} item={item}/>
            ))}
        </div>
    );
}

export default List;