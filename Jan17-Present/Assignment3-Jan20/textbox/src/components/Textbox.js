import React, {useState,useEffect} from 'react'
import Items from './Items';
function Textbox() {
    const [textarea,setTextarea] = useState([])
    const [newtext,setNewtext] = useState("");
    const [current,setCurrent] = useState(0);
    const [limit,setLimit] = useState(6);
    const [pages,setPages] = useState(undefined);
    const [pagelist,setPagelist] = useState([]);
    const [currentItems,setCurrentItems] = useState(undefined);
    const handleClick = () =>{
        if(textarea){
            let newTextarea = [...textarea]
            newTextarea.push(newtext);
            setTextarea(newTextarea)
        }
        else{
            setTextarea([newtext])
        }
    }
    const handleclear = () =>{
        console.log("clicked")
        setTextarea(undefined);
        setCurrentItems(undefined)
        setCurrent(0);
        setPages(undefined);
        setPagelist([]);
    }
    const handlePrevious = () =>{
        if(pages){
            let x = current-1;
            if(x<0){
                x = x+ pages;
            }
            console.log(pages);
            x = x % pages;
            setCurrent(x);
        }
    }
    const handleNext = () =>{
        if(pages){
            let x = current+1;
            x = x % pages;
            console.log(x)
            setCurrent(x);
        }
        // console.log("Clicked next");
    }

    const handlePageClick = (item) =>{
        setCurrent(item-1);
    }

    const handleEditable = (x,index) =>{
        let wholeText = [...textarea]
        wholeText[index] = x
        setTextarea(wholeText);
    }

    useEffect(() => {
        if(textarea){
            let everytimepages = Math.ceil(textarea.length/limit);
            setPages(everytimepages);
            let renderpagelist = []
            for(let i=1; i<everytimepages+1; i++){
                renderpagelist.push(i);
            }
            setPagelist(renderpagelist);
        }
    }, [textarea])
    
    useEffect(() => {
        if(textarea){
            const firstitemindex = current*limit;
            const lastitemindex = firstitemindex + limit;
            let Items = textarea.slice(firstitemindex,lastitemindex);
            setCurrentItems(Items);
            console.log(current,lastitemindex,firstitemindex,textarea,"Updated")
        }
    }, [current,textarea])
    
    return (
        <>
        <div className='Textarea'>
            <Items items = {currentItems} currentPage={current} pageLimit = {limit} handleEditable={handleEditable}/>
        </div>
        <div className="pagination">
            <button className='previous' onClick={handlePrevious}>PreviousPage</button>
            <button className='next' onClick={handleNext}>NextPage</button>
            {pages?
            pagelist.map((item)=>(
                <a key={item} className='pagenumber' onClick={()=>handlePageClick(item)}>{item}</a>
            ))
            :null}
        </div>
        <div className="footer">
            <div className="add">
                <span className='addmore'>AddMore:</span> <input className='addinput' type="text" placeholder='Add new items' value={newtext} onChange={(e) => {
                    setNewtext(e.target.value);
                }}/>
                <button className='addbutton' onClick={handleClick}>Add</button>
            </div>
            <div className="clear">
                <button className='clearbutton' onClick={handleclear}>Clear</button>
            </div>
        </div>
        </>
    )
}

export default Textbox
