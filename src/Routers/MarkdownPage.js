import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HeadPage from "./HeadPage";
import { Table } from "antd";

const MarkdownPage = () => {
  const [tableColumn, setTableColumn] = useState([]);
  useEffect(() => {
    async function getUrlList() {
      try {
        const response = await fetch(
          "https://capstone-backend-abdulwasim-s.vercel.app/markdowns",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              email: localStorage["markdown-email"],
              "x-auth-token": localStorage["markdown-token"],
            },
          }
        );
        const data = await response.json();
        if (data.message === "markdowns") {
          const values = data.markdowns.map((ele, idx) => {
            return {
              name: ele.markdownName,
              markdown:ele.markdown,
              key: idx,
            };
          });
          setTableColumn(values);
        } else {
          setTableColumn([]);
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUrlList();
  }, []);
  function searchFilter(filterKey){
    var boxes=document.getElementsByClassName('filter-card');
    for (var i = 0; i < boxes.length; i++) {
      var box = boxes[i];
      if ((box.id).includes(filterKey)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    }
  }

  return (
    <div>
      <HeadPage />
      <div className="container-fluid p-5" style={{ width: "100%" }}>
        <h1>Markdown List</h1>
        <NavLink className="btn btn-success m-2" to="/createmarkdownpage">
          click to add new markdown
        </NavLink>
        <div
          className=" pb-3 justify-content-between "
          style={{width:"100%"}}
        >
          {tableColumn.length === 0 && (
            <h3 className="text-muted ">NO MARKDOWN HAVE CREATED</h3>
          )}
          <div className="row">
            {tableColumn.length > 0 && (
              <>
                <input className="m-3" placeholder="Search here by name..." type="text" onChange={(e)=>searchFilter((e.target.value).toLowerCase())}/>
                <h4 className="text-success m-3">Markdown List Table</h4><hr/>
                {tableColumn.map((ele,idx)=>(
                    <div className="card-container col-md-4 filter-card" id={(ele.name).toLowerCase()} >
                      <h5 className="text-start text-success">Name : <span className="text-dark">{ele.name}</span></h5>
                      <textarea value={ele.markdown}/>
                    </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownPage;
