import React from 'react';

const user = (props) => {
    return <div>
        <h1>{props.name}</h1>
        <h3>Age: {props.age}</h3>
        <style jsx>{
            `div {
                border : 1px solid #eee;
                box-shadow 0 2px 3px #ccc;
                text-align : center;
                padding : 20px;
                width : 300px;
            }
            `
        }</style>
    </div>
}

export default user;


