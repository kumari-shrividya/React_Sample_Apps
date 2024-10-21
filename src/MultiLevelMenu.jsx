//youtube xplodivity mutilevel dropdown
const menuData = [
    {
      title: "Menu 1",
      items: [
        {
          title: "Submenu 1-1",
          items: [{ title: "Submenu 1-1-1" }, { title: "Submenu 1-1-2" }],
        },
        { title: "Submenu 1-2" },
      ],
    },
    {
      title: "Menu 2",
      items: [{ title: "Submenu 2-1" }, { title: "Submenu 2-2", items:[{title:"sub sub 1"},{title:"sub sub  2"}] }],
    },
  ]
const MultiLevelMenu=()=>{

  const toggleSubMenu=(e)=>{

    e.stopPropagation();
    let submenu=e.target.querySelector("ul")

    if(!submenu) return

    if(submenu.style.display==='none' || submenu.style.display===false){

      submenu.style.display='block'
    }
    else{ 

      submenu.style.display='none'
    }

  }

const renderSubItems=(subMenu)=>{
   return (

       <ul  style={{display:'none'}}>
            {
              subMenu.map((subItem,index)=>(
                <li key={index} onClick={toggleSubMenu}>
                  {subItem.title}
                  {subItem.items && renderSubItems(subItem.items)}
                  </li>
              ))
            }
           </ul>
     )
  }

    return(
        <div>
           <ul>
            {
              menuData.map((item,index)=>(
                <li key={index} onClick={toggleSubMenu}>
                  {item.title}
                  {item.items && renderSubItems(item.items)} 
                  </li>
              ))
            }
           </ul>
        </div>
    )
}

export default MultiLevelMenu