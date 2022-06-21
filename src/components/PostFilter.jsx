import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";



const PostFilter = ({filter, setFilter}) =>{
    return (
        <div>
            <MyInput onChange={e=>{setFilter({...filter, search: e.target.value})}} value={filter.search} placeholder="Поиск..."/>
            <MySelect value={filter.sort} onChange={selSort=>{setFilter({...filter, sort: selSort})}} defaultValue="Сортировка по" options={[
                {value:"title", name:"По названию"},
                {value:"body", name:"По описанию"},
            ]}/>
      </div>
    );
}



export default PostFilter;