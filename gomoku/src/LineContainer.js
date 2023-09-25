import React from 'react'

export default function LineContainer() {

    function makeGrid(size) {

    const tableInner = [];
    
    for(let i = 0 ; i < 18; i ++) {
        const tableRow = [];
        for(let j= 0; j < 18 j ++) {
            tableRow.push(<td></td>)
        }
        tableInner.push(<tr>{tableRow}</tr>)
        }

        return tableInner;
    }   
    
  return (
    <table className="line-container">
        {makeGrid(props.칸수-1)}   
    </table>
  )
}
