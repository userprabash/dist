import{r as a,b as d,j as e,L as h,s as u}from"./index-Ma9wRQcA.js";function x(){const[c,n]=a.useState([]),[l,i]=a.useState(!0),o=d(),r=new URLSearchParams(o.search).get("query");return a.useEffect(()=>{r&&(async()=>{i(!0);try{const t=await u.fetch(`*[_type == "product" && title match $searchTerm]{
              _id,
              title,
              price,
              slug, // ✅ Fetch slug from Sanity
              "imageUrl": image.asset->url
            }`,{searchTerm:`${r}*`});n(t)}catch(t){console.error("Error fetching search results:",t)}i(!1)})()},[r]),l?e.jsx("p",{children:"Loading..."}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container py-4",children:[e.jsxs("h2",{children:['Search results for "',r,'"']}),c.length===0?e.jsx("p",{children:"No products found."}):e.jsx("div",{className:"row",children:c.map(s=>e.jsx("div",{className:"col-md-3",children:e.jsxs("div",{className:"card mb-4",children:[e.jsx("img",{src:s.imageUrl,alt:s.title,className:"card-img-top"}),e.jsx("div",{className:"card-body",children:e.jsx("h4",{children:e.jsx(h,{to:`/product/${s.slug.current}`,children:s.title})})})]})},s._id))})]})})}export{x as default};
