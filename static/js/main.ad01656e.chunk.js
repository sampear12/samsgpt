(this.webpackJsonpsamsgpt=this.webpackJsonpsamsgpt||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),c=s(3),n=s.n(c),o=(s(12),s(0));const r={Card:{top:"0px",left:"0px",width:"237px",height:"100vh",backgroundColor:"#171717",borderRadius:"10px",display:"flex",flexDirection:"column",padding:"20px",boxSizing:"border-box"}};var l=e=>Object(o.jsx)("div",{style:r.Card,children:e.children});const d={width:"55px",height:"55px",borderRadius:"9999px",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},p="https://assets.api.uizard.io/api/cdn/stream/e2ffbe9b-2685-41ae-9a7e-73844efcce87.png";var b=e=>{var t;return Object(o.jsx)("div",{style:{...d,backgroundImage:"url(".concat(null!==(t=e.image)&&void 0!==t?t:p,")")}})};const j={iconContainer:{display:"flex",justifyContent:"space-between",padding:"20px"},imageContainer:{width:"24px",height:"24px",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat",cursor:"pointer"}},u=[{id:1,url:"https://assets.api.uizard.io/api/cdn/stream/d623031a-d918-41d4-9fb3-2ac91c3d5ac0.png"},{id:2,url:"https://assets.api.uizard.io/api/cdn/stream/82b4f557-56b8-48fc-98b5-8cffef11197b.png"}];var x=e=>{let{onToggleCollapse:t,collapsed:s}=e;return Object(o.jsxs)("div",{style:j.iconContainer,children:[Object(o.jsx)("div",{style:{...j.imageContainer,backgroundImage:"url(".concat(u[0].url,")")},onClick:t}),!s&&Object(o.jsx)("div",{style:{...j.imageContainer,backgroundImage:"url(".concat(u[1].url,")")}})]})};const h={fontSize:"20px",fontFamily:"Roboto, sans-serif",lineHeight:"26px",padding:"10px 20px",cursor:"pointer",fontWeight:400,marginBottom:"10px"},m={backgroundColor:"#FFFFFF",color:"#000000",borderRadius:"5px"},g={backgroundColor:"transparent",color:"#FFFFFF"};var f=e=>{let{text:t="Profile",active:s=!1,collapsed:a=!1}=e;const i=s?{...h,...m}:{...h,...g};return Object(o.jsx)("div",{style:i,className:"profile-button ".concat(a?"collapsed":""),children:Object(o.jsx)("span",{children:t})})};s(14);var O=()=>{const[e,t]=Object(a.useState)(!1),[s,i]=Object(a.useState)("Profile");return Object(o.jsxs)(l,{className:"sidebar ".concat(e?"collapsed":""),children:[Object(o.jsx)(x,{onToggleCollapse:()=>{t(!e),console.log("Sidebar collapsed:",!e)},collapsed:e}),Object(o.jsx)("div",{style:{marginTop:"20px",marginBottom:"30px"},children:Object(o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(o.jsx)(b,{}),!e&&Object(o.jsx)("span",{style:{marginLeft:"10px",color:"#ffffff"},children:"Sam's GPT"})]})}),Object(o.jsx)(f,{text:"Profile",active:"Profile"===s,onClick:()=>i("Profile"),collapsed:e}),Object(o.jsx)("div",{style:{marginTop:"20px",color:"#b4b4b4"},children:!e&&Object(o.jsx)("span",{children:"Previous Conversations"})}),!e&&Object(o.jsx)("div",{style:{backgroundColor:"#ffffff",height:"2px",width:"100%",margin:"10px 0"}}),Object(o.jsx)(f,{text:"Education",active:"Education"===s,onClick:()=>i("Education"),collapsed:e}),Object(o.jsx)(f,{text:"Skills",active:"Skills"===s,onClick:()=>i("Skills"),collapsed:e}),Object(o.jsx)(f,{text:"Work Experience",active:"Work Experience"===s,onClick:()=>i("Work Experience"),collapsed:e}),Object(o.jsx)(f,{text:"Entrepreneurship",active:"Entrepreneurship"===s,onClick:()=>i("Entrepreneurship"),collapsed:e}),Object(o.jsx)(f,{text:"Extra Curriculars",active:"Extra Curriculars"===s,onClick:()=>i("Extra Curriculars"),collapsed:e}),Object(o.jsx)(f,{text:"Projects",active:"Projects"===s,onClick:()=>i("Projects"),collapsed:e}),Object(o.jsx)(f,{text:"Links",active:"Links"===s,onClick:()=>i("Links"),collapsed:e})]})};var v=(e,t)=>{const[s,i]=Object(a.useState)("");return Object(a.useEffect)((()=>{let s=1;const a=setInterval((()=>{s<e.length-1?(i((t=>t+e[s])),s++):(clearInterval(a),t&&t())}),10);return()=>clearInterval(a)}),[e,t]),s};var k=e=>{let{question:t,answer:s,onComplete:i}=e;const c=Object(a.useCallback)((()=>{i&&i()}),[i]),n=v(s,c);return Object(o.jsxs)("div",{className:"message",children:[Object(o.jsx)(b,{}),Object(o.jsx)("div",{className:"message-content",children:Object(o.jsx)("p",{children:n})})]})};s(15);const C={Button:{cursor:"pointer",width:"288px",height:"44px",padding:"0px 8px",border:"0",boxSizing:"border-box",borderRadius:"22px",backgroundColor:"#2f2f2f",color:"#ececec",fontSize:"13px",fontFamily:"Roboto",lineHeight:"18px",outline:"none",margin:"5px 0",display:"flex",alignItems:"center",justifyContent:"center"},SelectedButton:{backgroundColor:"#444"}},y=e=>Object(o.jsx)("button",{style:{...C.Button,...e.isSelected?C.SelectedButton:{}},onClick:e.onClick,children:e.label});var S=()=>{const[e,t]=Object(a.useState)([]),[s,i]=Object(a.useState)(!1),[c,n]=Object(a.useState)(!1),[r,l]=Object(a.useState)(""),d=Object(a.useCallback)((()=>{i(!0)}),[]),p=v("   Hi! Thanks for stopping by :) I'm Sam's GPT trained on her resume. When you're ready, navigate to different chats on the sidebar to get to know her. To begin, select an option from the following to know more about her profile!",d),j=["Give me a quick introduction to Samika","What's it like to work with Samika?","What is she like outside work?","I'm bored and I want to play a game"],u={"Give me a quick introduction to Samika":"    I'm Samika, a senior at the University of Pittsburgh pursuing a bachelors in Computer Science. Apart from stressing about my visa status, I love exploring and applying new tech!","What's it like to work with Samika?":"    need to add so tired rn","What is she like outside work?":"    i dont have a personality","I'm bored and I want to play a game":"   play with my heart"};return Object(o.jsx)("div",{className:"scroll-container",children:Object(o.jsxs)("div",{className:"main-content",children:[Object(o.jsx)("div",{className:"chat-header",children:Object(o.jsx)("span",{children:"Sam's GPT"})}),Object(o.jsxs)("div",{className:"chat-messages",children:[Object(o.jsxs)("div",{className:"message",children:[Object(o.jsx)(b,{}),Object(o.jsx)("div",{className:"message-content",children:Object(o.jsx)("p",{children:p})})]}),e.map(((e,t)=>Object(o.jsxs)("div",{className:"chat-entry",children:[Object(o.jsxs)("div",{className:"question-container",children:[Object(o.jsx)("div",{style:C.Button,className:"question-style",children:e.question}),Object(o.jsx)("img",{src:"https://assets.api.uizard.io/api/cdn/stream/347c912a-0054-4a72-a32b-5e8b9d5af74d.png",alt:"icon",className:"side-icon"})]}),Object(o.jsx)(k,{question:e.question,answer:e.answer})]},t)))]}),Object(o.jsx)("div",{className:"options-with-image",children:s&&Object(o.jsx)("div",{className:"options-container",children:j.map(((e,s)=>Object(o.jsxs)("div",{className:"option-item",children:[Object(o.jsx)(y,{label:e,onClick:()=>(e=>{const s=u[e];l(e),t((t=>[...t,{question:e,answer:s}])),i(!1),n(!0),setTimeout((()=>{n(!1),i(!0)}),1e3)})(e),isSelected:!1}),s===j.length-1&&Object(o.jsx)("img",{src:"https://assets.api.uizard.io/api/cdn/stream/347c912a-0054-4a72-a32b-5e8b9d5af74d.png",alt:"icon",className:"option-icon"})]},s)))})})]})})};s(16);var w=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(O,{}),Object(o.jsx)(S,{})]})};n.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(w,{})}))}],[[17,1,2]]]);
//# sourceMappingURL=main.ad01656e.chunk.js.map