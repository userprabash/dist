import{r as c,s as m,j as e,L as u}from"./index-BQKnNZ3U.js";import{S as p}from"./SEO-CSzDxIZg.js";function j({onCategorySelect:s}){const[i,l]=c.useState([]),[a,t]=c.useState(!0);return c.useEffect(()=>{m.fetch(`*[_type == "category"] | order(title asc){
      _id,
      title,
      "slug": slug.current
    }`).then(n=>{l(n||[]),t(!1)}).catch(n=>{console.error(n),l([]),t(!1)})},[]),e.jsx("div",{className:"col-lg-3 col-md-4 mb-4 shop1-sidebar",children:e.jsxs("div",{className:"category-sidebar cat-side mb-30 sticky-sidebar",children:[e.jsx("h3",{className:"cat-title",children:"Categories"}),e.jsx("div",{className:"category-item",children:a?e.jsx("p",{children:"Loading..."}):e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("button",{onClick:()=>s(null),className:"btn p-0 d-flex align-items-center gap-2",children:[e.jsx("span",{children:"→"})," All Products"]})}),i.map(r=>e.jsx("li",{children:e.jsxs("button",{onClick:()=>s(r.slug),className:"btn p-0 d-flex align-items-center gap-2",children:[e.jsx("span",{children:"→"})," ",r.title]})},r._id))]})})]})})}function f({product:s}){var l,a,t,r;const i=(a=(l=s==null?void 0:s.image)==null?void 0:l.asset)==null?void 0:a.url;return e.jsx("div",{className:"col-xl-4 col-lg-4 col-md-6 mb-30",children:e.jsxs("div",{className:"product-03-wrapper pos-rel text-center",children:[e.jsx("div",{className:"product-02-img pos-rel overflow-hidden rounded",children:e.jsx(u,{to:`/product/${(t=s.slug)==null?void 0:t.current}`,children:i?e.jsx("img",{src:i,alt:s.title||s.name,className:"img-fluid product-img-hover prod-img"}):e.jsx("div",{style:{minHeight:"200px",borderRadius:"8px",border:"1px solid #ddd"},className:"d-flex align-items-center justify-content-center",children:e.jsx("h4",{children:s.title||"No Image"})})})}),e.jsxs("div",{className:"product-text mt-2",children:[e.jsx("h5",{children:s.name}),e.jsx("h4",{children:e.jsx(u,{to:`/product/${(r=s.slug)==null?void 0:r.current}`,children:s.title})})]})]})})}function N(){const[s,i]=c.useState([]),[l,a]=c.useState(!0),[t,r]=c.useState(null),n=t||"All Products";c.useEffect(()=>{let o=`*[_type == "product"] | order(_createdAt desc){
      _id,
      title,
      name,
      slug,
      image{ asset->{url, altText} },
      parentCategory->{title, "slug": slug.current}
    }`;t&&(o=`*[_type == "product" && defined(parentCategory) && parentCategory->slug.current == $cat] | order(_createdAt desc){
        _id,
        title,
        name,
        slug,
        image{ asset->{url, altText} },
        parentCategory->{title, "slug": slug.current}
      }`),a(!0),m.fetch(o,t?{cat:t}:{}).then(d=>{i(d||[]),a(!1)}).catch(d=>{console.error(d),i([]),a(!1)})},[t]);const g=`Bluestar Surgical House | ${n}`,h=t?`Explore ${n} at Bluestar Surgical House in Kathmandu, Nepal. High-quality surgical instruments and medical equipment.`:"Browse all medical and surgical products at Bluestar Surgical House, Kathmandu. Top brands and trusted medical equipment.",x=t?`https://bluestarsurgicalhouse.com.np/categories/${t}`:"https://bluestarsurgicalhouse.com.np/categories";return e.jsxs("main",{className:"container pt-50 pb-50",children:[e.jsx(p,{title:g,description:h,url:x}),e.jsxs("div",{className:"row",children:[e.jsx(j,{onCategorySelect:r}),e.jsx("div",{className:"col-lg-9 col-md-8",children:l?e.jsx("p",{children:"Loading products..."}):s.length===0?e.jsx("p",{children:"No products found."}):e.jsx("div",{className:"row",children:s.map(o=>e.jsx(f,{product:o},o._id))})})]}),e.jsx("style",{children:`
          /* Sidebar sticky fix */
          .sticky-sidebar {
            position: sticky;
            top: 100px;
            align-self: flex-start;
          }

          /* Sidebar responsive */
          .shop1-sidebar {
            flex: 0 0 25%;
            max-width: 25%;
          }

          @media (max-width: 991px) {
            .shop1-sidebar {
              flex: 0 0 100%;
              max-width: 100%;
              margin-bottom: 20px;
            }
          }

          /* Product hover zoom */
          .product-img-hover {
            transition: transform 0.3s ease;
          }
          .product-img-hover:hover {
            transform: scale(1.1);
          }
        `})]})}export{N as default};
