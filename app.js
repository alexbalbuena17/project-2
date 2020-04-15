import React, {useState} from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import axios from 'axios';
import {renderIntoDocument} from "react-dom/test-utils";








export default class postslist extends React.Component {
    state = {
        posts: [],
    };
    componentDidMount() {

        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/posts').then(res => {
            console.log(res);
            this.setState({posts: res.data});
        });
    }
render(){
    return <ul>{this.state.posts.map(posts => <li key={posts.id}>{posts.id + "    " + posts.title + "      " + posts.type + "     " +
    posts.column}</li>)}
        </ul>;
}
}


const itemsBack = [
    { id: "" , content: 'posts.id'}
];

const postsBack = [
    {
    [renderIntoDocument()]:{
        name: 'To do',
        items: [itemsBack]
        }
    }

];




function App() {

    const [colums, setColums]= useState(postsBack)
  return (

      <div style={{display:'flex', justifycontent: 'center', height: '100%'}}>
        <DragDropContext onDropEnd={result => console.log(result)}>
            {Object.entires(colums).map(( [id, column]) => {
                return(
                    <Droppable dropppableId={id}>
                        {(provided, snapshot) => {
                            return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    background: snapshot.isDraggingOver ? 'lightblue' : 'Lightgrey',
                                    padding: 4,
                                    width: 250,
                                    midheight: 500
                                }}

                            >
                            </div>

                            )
                        }}

                    </Droppable>
                )

            })}
        </DragDropContext>
      </div>
  );
}

//export default App;
