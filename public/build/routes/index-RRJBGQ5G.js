import{c as x,e as v,g as n,j as T}from"/build/_shared/chunk-3RIMG33O.js";n();n();var D=x(v());n();n();function u(B){var t,H,l="";if(typeof B=="string"||typeof B=="number")l+=B;else if(typeof B=="object")if(Array.isArray(B))for(t=0;t<B.length;t++)B[t]&&(H=u(B[t]))&&(l&&(l+=" "),l+=H);else for(t in B)B[t]&&(l&&(l+=" "),l+=t);return l}function c(){for(var B=0,t,H,l="";B<arguments.length;)(t=arguments[B++])&&(H=u(t))&&(l&&(l+=" "),l+=H);return l}var r=x(v()),A=({text:B="",bounceIn:t,rootClass:H="",className:l="font-virgil xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber hover:text-lime-400 cursor-pointer"})=>r.default.createElement("div",{className:c("flex flex-row",H,{bounceInLeft:t==="left"||!t,bounceInRight:t==="right",bounceInUp:t==="up",bounceInDown:t==="down"})},B.split("").map((P,$)=>r.default.createElement("h1",{key:$,className:l},P))),e=A;var i="/build/_assets/playing-cards-PK6EDUO4.png";function a(){let[B,t]=D.default.useState(""),H=T();return D.default.createElement("div",{className:"flex flex-col overflow-hidden items-center justify-center"},D.default.createElement("img",{src:i,alt:"bg",width:512,className:"absolute bottom-0 right-0 opacity-20 bounceInUp"}),D.default.createElement("div",{className:"flex flex-row"},D.default.createElement(e,{text:"Hello",rootClass:"mr-8"}),D.default.createElement(e,{text:"there!"})),D.default.createElement("div",{className:"flex flex-row"},D.default.createElement(e,{text:"Let's",bounceIn:"right",rootClass:"mr-8",className:"font-virgil xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber hover:text-slate-100 text-lime-400 cursor-pointer"}),D.default.createElement(e,{text:"PLAY!",bounceIn:"right",className:"font-exo xl:text-8xl lg:md:text-6xl text-4xl hover:animate-rubber px-2 hover:text-slate-100 text-lime-400 cursor-pointer"})),D.default.createElement("div",{className:"flex xs:flex-col sm:flex-col md:flex-row lg::flex-row xl:flex-row 2xl:flex-row mt-8 items-center"},D.default.createElement("div",{className:"sm:mr-0 xs:mr-0 xl:mr-4 lg:mr-4 md:mr-4 border-lime-500 border-2 sm:w-full text-center xl:mb-0 lg:mb-0 md:mb-0 sm:mb-2"},D.default.createElement("button",{className:"btn-anim-bg px-4 py-2 font-exo text-slate-100 xl:text-xl lg:text-lg md:text-md text-sm",onClick:()=>{}},D.default.createElement("p",null,"New Game"))),D.default.createElement("div",{className:"flex flex-row border-2 border-lime-500 sm:w-full"},D.default.createElement("input",{className:"h-100 bg-transparent outline-none px-4 text-lime-500  xl:text-xl lg:text-lg md:text-md text-sm font-bold font-exo",placeholder:"Enter game ID here",onChange:s=>{let o=s.target.value;!o||t(o)}}),D.default.createElement("button",{className:"btn-anim-bg px-4 py-2 font-exo text-slate-100  xl:text-xl lg:text-lg md:text-md text-sm",onClick:()=>{H(B,{replace:!0})}},D.default.createElement("p",null,"Join")))))}export{a as default};