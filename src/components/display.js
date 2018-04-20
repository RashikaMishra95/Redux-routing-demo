import React from 'react';

const List=({students})=>{
    debugger;
    return(
        <div>{
            students.map((stud)=>{
                return(
                    <div>
                        {stud.Name}
                    </div>
                )
            })
        }</div>
    )
};
export default List;