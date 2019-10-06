import React from 'react'

class CatList extends React.Component{
  render(){
    let cats = this.props.catPics.map(cat => <img src={cat}/>)
    return(
      <div>
        {cats}
      </div>
    )
  }
}

export default CatList