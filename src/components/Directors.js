import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsInfo=directors.map((director)=>
 <div key={director.name}>
{director.name}
<ul>
{director.movies.map((movy)=>
 <li key={movy}>
{movy}

</li>

)}

</ul>
</div>
  )

  return <div><h1>Directors Page
    {directorsInfo}
    
    </h1></div>;
}

export default Directors;
