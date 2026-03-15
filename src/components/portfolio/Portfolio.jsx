import Ts from "../../assets/Sitthikorn-Transcript.pdf";
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

import './portfolio.css'; 
import Particles from "react-tsparticles";
 
import {
ResponsiveContainer,
PieChart,
Pie,
Cell,
Tooltip
} from "recharts";
 
export default function Transcript(){
 
const [filter,setFilter]=useState("All");
 
const semesters = [
// ... (ใช้ข้อมูลเทอมเดิมของคุณได้เลยครับ ผมขอละไว้จะได้ไม่ยาวเกินไป แต่ก๊อปวางทับได้เลย)
{
title:"1ST SEMESTER 2024",
key:"1ST-2024",
gpa:"2.92",
courses:[
{code:"03523105",name:"Computer Programming",credit:2,grade:"D",skill:"Programming"},
{code:"03523205",name:"Computer Programming Lab",credit:1,grade:"D",skill:"Programming"},
{code:"03523106",name:"Electronics Technology",credit:1,grade:"A",skill:"Electronics"},
{code:"03523206",name:"Electronics Technology Lab",credit:1,grade:"A",skill:"Electronics"},
{code:"03523500",name:"Database & Data Technology",credit:2,grade:"B",skill:"Database"},
{code:"03523600",name:"Database & Data Tech Lab",credit:1,grade:"B",skill:"Database"},
{code:"03923152",name:"Comm Eng & Report Writing",credit:3,grade:"A",skill:"Communication"},
{code:"03943111",name:"Differential Equations",credit:3,grade:"C+",skill:"Mathematics"},
{code:"03953103",name:"Entrepreneurship",credit:3,grade:"B+",skill:"Business"}
]
},
{
title:"2ND SEMESTER 2024",
key:"2ND-2024",
gpa:"2.75",
courses:[
{code:"03523107",name:"Microcontroller System",credit:2,grade:"C",skill:"Embedded"},
{code:"03523118",name:"Object Oriented Programming",credit:2,grade:"B",skill:"OOP"},
{code:"03523124",name:"Web Application Development",credit:2,grade:"C+",skill:"Web"},
{code:"03523126",name:"Linux OS & Admin",credit:2,grade:"B+",skill:"Linux"},
{code:"03523207",name:"Microcontroller System Lab",credit:1,grade:"C",skill:"Embedded"},
{code:"03523218",name:"Object Oriented Program Lab",credit:1,grade:"B",skill:"OOP"},
{code:"03523224",name:"Web Application Development Lab",credit:1,grade:"C+",skill:"Web"},
{code:"03523226",name:"Linux OS & Admin Lab",credit:1,grade:"B+",skill:"Linux"},
{code:"03523502",name:"Data Structure & Algorithm Analysis",credit:2,grade:"F",skill:"Data"},
{code:"03523602",name:"Data Structure & Algorithm Analysis Lab",credit:1,grade:"F",skill:"Data"},
{code:"03523112",name:"Matrices & Vector Analysis",credit:3,grade:"B",skill:"Matrice"},
{code:"03523701",name:"Design Thinking",credit:3,grade:"A",skill:"Design"}
]
},
{
title:"1ST SEMESTER 2025",
key:"1ST-2025",
gpa:"2.97",
courses:[
{code:"030523503",name:"Mobile Application Development",credit:2,grade:"A",skill:"Mobile"},
{code:"030523504",name:"Artificial Intelligence",credit:2,grade:"B",skill:"AI"},
{code:"030523505",name:"Cybersecurity",credit:2,grade:"B+",skill:"Cyber"},
{code:"030523603",name:"Mobile Application Development Lab",credit:1,grade:"A",skill:"Mobile"},
{code:"030523604",name:"Artificial Intelligence Lab",credit:1,grade:"B",skill:"AI"},
{code:"030523605",name:"Cybersecurity Lab",credit:1,grade:"B+",skill:"Cyber"},
{code:"030523701",name:"Cloud Computing",credit:2,grade:"B",skill:"cloud"},
{code:"030523801",name:"Cloud Computing Lab",credit:1,grade:"B",skill:"Cloud"},
{code:"030923102",name:"Science in daily life",credit:3,grade:"A",skill:"Sci"},
{code:"030923103",name:"Sci & Tech For Qua of Life",credit:3,grade:"A",skill:"Sci"},
{code:"030933155",name:"English conversation",credit:3,grade:"A",skill:"Eng"}
]
}
];
 
const gradeColor=(g)=>{
if(g==="A") return "#00E676";     // green
if(g==="B+") return "#29B6F6";     // blue
if(g==="B") return "#29B6F6";     // blue
if(g==="C") return "#FFCA28";     // yellow
if(g==="C+") return "#FFD54F";    // light yellow
if(g==="D") return "#FF7043";     // orange
if(g==="F") return "#FF1744";     // red
return "#999";
};
 
const gradeStats=[
{name:"A",value:9},
{name:"B+",value:5},
{name:"B",value:9},
{name:"C+",value:3},
{name:"C",value:2},
{name:"D",value:2},
{name:"F",value:2}
];
 
const skills=["React","JavaScript","SQL","Linux","OOP","Embedded Systems","Computer Vision","Web Development"];
 
const filtered= filter==="All" ? semesters : semesters.filter(s=>s.key===filter);
 
return(
<Element name="Transcript">
 
{/* ✨ เปลี่ยนพื้นหลัง section ให้ใช้ CSS ดั้งเดิม */}
<section className="section" id="portfolio" style={{position:"relative"}}>
 
{/* PARTICLES BACKGROUND */}
<Particles
options={{
particles:{
number:{value:40},
size:{value:2},
move:{speed:0.3},
color:{value:"#38bdf8"} /* ✨ เปลี่ยนสีอนุภาคเป็นสีฟ้าตามธีม */
}
}}
/>
 
<Container style={{maxWidth:"1150px",position:"relative"}}>
 
{/* HERO */}
<motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:.8}}>
<h1 className="section__title" style={{fontSize:"3.5rem", marginBottom:"0.5rem", textAlign:"left"}}>
Academic <span style={{color:"var(--title-color)"}}>Transcript</span> {/* ✨ ใช้สีฟ้า */}
</h1>
<p style={{color:"var(--text-color)", fontSize:"var(--normal-font-size)"}}>
KMUTNB | Electronics Computer Engineering
</p>
</motion.div>
 
{/* DASHBOARD */}
<div className="transcript__dashboard">
 
{/* LEFT : GRADE DISTRIBUTION */}
<div style={{ background:"var(--container-color)", borderRadius:"1.5rem", padding:"28px", display:"flex", flexDirection:"column", height:"100%" }}>
<h4 style={{marginBottom:"20px", color:"#fff", display:"flex", alignItems:"center"}}>
<Icon icon="mdi:chart-donut" style={{marginRight:"8px", fontSize:"1.25rem"}}/>
Grade Distribution
</h4>
<div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}>
<div style={{height:"260px",width:"100%"}}>
<ResponsiveContainer width="100%" height="100%">
<PieChart>
<Pie data={gradeStats} dataKey="value" innerRadius={70} outerRadius={100} paddingAngle={5}>
{gradeStats.map((g,i)=>(<Cell key={i} fill={gradeColor(g.name)}/>))}
</Pie>
<Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }}/>
</PieChart>
</ResponsiveContainer>
</div>
</div>
</div>
 
{/* RIGHT : ACADEMIC STATS */}
<div style={{ background:"var(--container-color)", borderRadius:"1.5rem", padding:"28px", display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100%" }}>
<h4 style={{marginBottom:"18px", color:"#fff", display:"flex", alignItems:"center"}}>
<Icon icon="mdi:school-outline" style={{marginRight:"8px", fontSize:"1.25rem"}}/>
Academic Stats
</h4>
 
{/* STATS */}
<div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"14px" }}>
{/* GPAX */}
<div style={{ background:"var(--body-color)", padding:"16px", borderRadius:"12px", textAlign:"center" }}>
<p style={{fontSize:"var(--smaller-font-size)",color:"var(--text-color)"}}>GPAX</p>
<h3 style={{margin:0, color:"#fff"}}>2.97</h3>
</div>
{/* CREDITS */}
<div style={{ background:"var(--body-color)", padding:"16px", borderRadius:"12px", textAlign:"center" }}>
<p style={{fontSize:"var(--smaller-font-size)",color:"var(--text-color)"}}>Credits</p>
<h3 style={{margin:0, color:"#fff"}}>63</h3>
</div>
{/* SEMESTERS */}
<div style={{ background:"var(--body-color)", padding:"16px", borderRadius:"12px", textAlign:"center" }}>
<p style={{fontSize:"var(--smaller-font-size)",color:"var(--text-color)"}}>Semesters</p>
<h3 style={{margin:0, color:"#fff"}}>3</h3>
</div>
</div>
 
{/* DOWNLOAD BUTTON */}
<a href={Ts} download="Sitthikorn-Resume" style={{textDecoration:"none"}}>
<motion.div whileHover={{ scale:1.04, boxShadow:"0 10px 40px rgba(56, 189, 248, 0.3)" }} whileTap={{scale:.96}}
style={{ marginTop:"18px", background:"var(--title-color)", color:"var(--body-color)", padding:"16px", borderRadius:"12px", textAlign:"center", fontWeight:"600", display:"flex", alignItems:"center", justifyContent:"center", gap:"10px" }}>
<Icon icon="mdi:download" style={{fontSize:"1.25rem"}}/>
Download Transcript
</motion.div>
</a>
</div>
</div>
 
{/* SEMESTER FILTER */}
<div style={{marginTop:"50px"}}>
<h3 style={{color:"var(--title-color)", fontSize:"var(--h2-font-size)"}}>Semester Filter</h3>
<div style={{ display:"flex", gap:"10px", marginTop:"15px", flexWrap: "wrap" }}>
{["All","1ST-2024","2ND-2024","1ST-2025"].map((f,i)=>(
<motion.button key={i} onClick={()=>setFilter(f)} whileHover={{scale:1.05}}
style={{
background: filter === f ? "var(--title-color)" : "var(--container-color)",
color: filter === f ? "var(--body-color)" : "var(--text-color)",
border: "none", padding: "10px 20px", borderRadius: "10px", cursor: "pointer", fontWeight: "500", fontFamily: "var(--body-font)"
}}>
{f}
</motion.button>
))}
</div>
</div>
 
{/* TIMELINE */}
<div style={{marginTop:"50px"}}>
<h3 style={{color:"var(--title-color)", fontSize:"var(--h2-font-size)"}}>Semester Timeline</h3>
<div style={{ borderLeft:"2px solid var(--title-color)", paddingLeft:"20px", marginTop:"30px" }}>
{filtered.map((sem,i)=>(
<motion.div key={i} initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} style={{marginBottom:"40px"}}>
<div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"15px" }}>
<h4 style={{margin:0, color:"#fff", fontSize:"var(--h3-font-size)"}}>{sem.title}</h4>
<div style={{ border:"1px solid var(--title-color)", borderRadius:"20px", padding:"4px 14px", color:"var(--title-color)", fontSize:"var(--small-font-size)", fontWeight:"600" }}>
GPA {sem.gpa}
</div>
</div>
{sem.courses.map((c,j)=>(
<motion.div key={j} whileHover={{ scale:1.02, boxShadow:"0 0 20px rgba(56, 189, 248, 0.15)" }} className="transcript__course-item">
<div style={{color:"var(--text-color)", fontSize:"var(--small-font-size)"}}>{c.code}</div>
<div style={{color:"#fff", fontWeight:"500"}}>{c.name}</div>
<div style={{textAlign:"center", color:"var(--text-color)"}}>{c.credit}</div>
<div style={{ color:gradeColor(c.grade), fontWeight:"700", textAlign:"center", fontSize:"1.1rem" }}>{c.grade}</div>
</motion.div>
))}
</motion.div>
))}
</div>
</div>
 
{/* SKILLS */}
<div style={{marginTop:"50px"}}>
<h3 style={{marginBottom:"20px", color:"var(--title-color)", fontSize:"var(--h2-font-size)", display:"flex", alignItems:"center"}}>
<Icon icon="mdi:lightning-bolt-outline" style={{marginRight:"8px"}}/>
Skills From Coursework
</h3>
<div style={{ display:"flex", flexWrap:"wrap", gap:"14px", justifyContent:"flex-start" }}>
{skills.map((s,i)=>{
const iconMap={
React:"logos:react", JavaScript:"logos:javascript", SQL:"vscode-icons:file-type-sql", Linux:"logos:linux-tux",
OOP:"mdi:shape-outline", "Embedded Systems":"mdi:chip", "Computer Vision":"mdi:eye-outline", "Web Development":"mdi:web"
};
return(
<motion.div key={i} whileHover={{ scale:1.08, boxShadow:"0 0 18px rgba(56, 189, 248, 0.3)" }} transition={{type:"spring",stiffness:300}}
style={{ display:"flex", alignItems:"center", gap:"8px", background:"var(--container-color)", padding:"12px 20px", borderRadius:"1rem", fontSize:"var(--small-font-size)", color:"#fff", cursor:"default" }}>
<Icon icon={iconMap[s]} width="20"/>
{s}
</motion.div>
)
})}
</div>
</div>
</Container>
</section>
</Element>
)
}