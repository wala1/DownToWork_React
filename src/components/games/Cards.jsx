import { useState } from 'react'
import Card from './Card'

function Cards(){
    const [items, setItems] = useState([
        { id: 1, img: '/game/html.png', stat: "" },
        { id: 1, img: '/game/html.png', stat: "" },
        { id: 2, img: '/game/css.png', stat: "" },
        { id: 2, img: '/game/css.png', stat: "" },
        { id: 3, img: '/game/js.png', stat: "" },
        { id: 3, img: '/game/js.png', stat: "" },
        { id: 4, img: '/game/scss.png', stat: "" },
        { id: 4, img: '/game/scss.png', stat: "" },
        { id: 5, img: '/game/react.png', stat: "" },
        { id: 5, img: '/game/react.png', stat: "" },
        { id: 6, img: '/game/vue.png', stat: "" },
        { id: 6, img: '/game/vue.png', stat: "" },
        { id: 7, img: '/game/angular.png', stat: "" },
        { id: 7, img: '/game/angular.png', stat: "" },
        { id: 8, img: '/game/nodejs.png', stat: "" },
        { id: 8, img: '/game/nodejs.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct1"
            items[prev].stat = "correct1"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong1"
            items[prev].stat = "wrong1"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active1"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <>
            
            <div className="container1">
                { items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                )) }
            </div>

        </>
        
    )
}

export default Cards