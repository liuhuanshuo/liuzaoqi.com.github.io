"use strict";(self.webpackChunkliuzaoqi_com=self.webpackChunkliuzaoqi_com||[]).push([[580],{5321:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=n(5893),s=n(1151);const r={id:"causal-inference-intro",last_update:{author:"liuzaoqi"}},a="\u6982\u8ff0",l={id:"algorithm/machine-learning/model/causal-inference-intro",title:"\u6982\u8ff0",description:"\u56e0\u4e3a\u76f8\u5173\u6027\u4e0d\u7b49\u4e8e\u56e0\u679c\u6027\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u901a\u8fc7\u63a7\u5236\u53d8\u91cf\u53bb\u627e\u5230\u56e0\u679c\u5173\u7cfb\uff0c\u800c\u56e0\u679c\u63a8\u65ad\u5c31\u662f\u4e00\u4e2a\u5c1d\u8bd5\u201c\u627e\u5230\u4e24\u4e2a\u5b8c\u5168\u4e00\u6837\u7684\u6837\u672c\uff0c\u7136\u540e\u901a\u8fc7\u63a7\u5236\u53d8\u91cf\u53bb\u627e\u5230\u56e0\u679c\u5173\u7cfb\u201d\u7684\u8fc7\u7a0b\u3002",source:"@site/docs/algorithm/machine-learning/model/\u56e0\u679c\u63a8\u65ad\u6982\u8ff0.md",sourceDirName:"algorithm/machine-learning/model",slug:"/algorithm/machine-learning/model/causal-inference-intro",permalink:"/docs/algorithm/machine-learning/model/causal-inference-intro",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"liuzaoqi",lastUpdatedAt:1706869148,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{id:"causal-inference-intro",last_update:{author:"liuzaoqi"}},sidebar:"machine_learning",previous:{title:"\u673a\u5668\u5b66\u4e60",permalink:"/docs/algorithm/machine-learning/intro"},next:{title:"\u503e\u5411\u5f97\u5206\u5339\u914d\uff08PSM\uff09",permalink:"/docs/algorithm/machine-learning/model/PSM"}},c={},d=[{value:"\u7edf\u8ba1\u5b9e\u9a8c\uff08Statistical Experiment\uff09",id:"\u7edf\u8ba1\u5b9e\u9a8cstatistical-experiment",level:2},{value:"\u51c6\u5b9e\u9a8c\uff08Quasi-experiment\uff09",id:"\u51c6\u5b9e\u9a8cquasi-experiment",level:2},{value:"Matching\u5339\u914d",id:"matching\u5339\u914d",level:3},{value:"Weighting\u52a0\u6743",id:"weighting\u52a0\u6743",level:3},{value:"DID\u53cc\u91cd\u5dee\u5206",id:"did\u53cc\u91cd\u5dee\u5206",level:3},{value:"\u53cd\u4e8b\u5b9e",id:"\u53cd\u4e8b\u5b9e",level:2},{value:"Uplift",id:"uplift",level:3},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function h(e){const i={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,t.jsx)(i.p,{children:"\u56e0\u4e3a\u76f8\u5173\u6027\u4e0d\u7b49\u4e8e\u56e0\u679c\u6027\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u901a\u8fc7\u63a7\u5236\u53d8\u91cf\u53bb\u627e\u5230\u56e0\u679c\u5173\u7cfb\uff0c\u800c\u56e0\u679c\u63a8\u65ad\u5c31\u662f\u4e00\u4e2a\u5c1d\u8bd5\u201c\u627e\u5230\u4e24\u4e2a\u5b8c\u5168\u4e00\u6837\u7684\u6837\u672c\uff0c\u7136\u540e\u901a\u8fc7\u63a7\u5236\u53d8\u91cf\u53bb\u627e\u5230\u56e0\u679c\u5173\u7cfb\u201d\u7684\u8fc7\u7a0b\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u4e0b\u9762\u4ecb\u7ecd\u4e09\u79cd\u6838\u5fc3\u7684\u56e0\u679c\u63a8\u65ad\u65b9\u6cd5\uff1a",(0,t.jsx)(i.strong,{children:"\u7edf\u8ba1\u5b9e\u9a8c\uff08Statistical Experiment\uff09"}),"\u3001",(0,t.jsx)(i.strong,{children:"\u51c6\u5b9e\u9a8c\uff08Quasi-experiment\uff09"}),"\u3001",(0,t.jsx)(i.strong,{children:"\u53cd\u4e8b\u5b9e\uff08Counterfactuals\uff09"})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(8864).Z+"",width:"2030",height:"1098"})}),"\n",(0,t.jsx)(i.h2,{id:"\u7edf\u8ba1\u5b9e\u9a8cstatistical-experiment",children:"\u7edf\u8ba1\u5b9e\u9a8c\uff08Statistical Experiment\uff09"}),"\n",(0,t.jsx)(i.p,{children:"\u4e5f\u5c31\u662f\u76f4\u63a5\u8bbe\u8ba1 AB TEST \uff0c\u7b80\u5355\u7c97\u66b4"}),"\n",(0,t.jsx)(i.p,{children:"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u968f\u673a\u5206\u7ec4\u6765\u4ea7\u751f\u5b9e\u9a8c\u7ec4\u548c\u63a7\u5236\u7ec4\uff0c\u4ece\u800c\u5b9e\u73b0\u201c\u5b8c\u7f8e\u201d\u7684\u63a7\u5236\u53d8\u91cf\u3002\u4e00\u822c\u4f7f\u7528\u7edf\u8ba1\u5b66\u7684\u5047\u8bbe\u68c0\u9a8c\u5c31\u597d\uff0c\u800c\u5047\u8bbe\u68c0\u9a8c\u4e5f\u662f\u56e0\u679c\u63a8\u65ad\u4e2d\u51c6\u786e\u5ea6\u6700\u9ad8\u7684\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u5047\u8bbe\u68c0\u9a8c\u5f88\u7b80\u5355\uff0c\u5728\u8fd9\u91cc\u5c31\u4e0d\u8be6\u7ec6\u8bb2\u4e86\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"\u51c6\u5b9e\u9a8cquasi-experiment",children:"\u51c6\u5b9e\u9a8c\uff08Quasi-experiment\uff09"}),"\n",(0,t.jsxs)(i.p,{children:["\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b9e\u9a8c\u7ec4\u548c\u63a7\u5236\u7ec4\u7684\u4ea7\u751f\u4e0d\u968f\u673a\uff0c\u5b58\u5728\u67d0\u4e2a\u56e0\u7d20\u5f71\u54cd\u4e0d\u540c\u7ec4\u7684\u5206\u6d41\uff0c\u56e0\u6b64\u5b9e\u9a8c\u7ec4\u548c\u63a7\u5236\u7ec4\u662f\u201c",(0,t.jsx)(i.strong,{children:"\u6ca1\u6709\u5b8c\u5168\u7684\u63a7\u5236\u53d8\u91cf"}),"\u201d\uff0c\u6240\u4ee5\u6211\u4eec\u5c31\u9700\u8981\u4eba\u4e3a\u5730\u8fdb\u884c\u6837\u672c\u7684\u8c03\u6574\uff0c\u8ba9\u5b9e\u9a8c\u7ec4\u548c\u63a7\u5236\u7ec4\u5b9e\u73b0\u201c",(0,t.jsx)(i.strong,{children:"\u5b8c\u7f8e\u7684\u63a7\u5236\u53d8\u91cf"}),"\u201d\u3002"]}),"\n",(0,t.jsx)(i.p,{children:"\u51c6\u5b9e\u9a8c\uff08Quasi-experiment\uff09\u5e38\u89c1\u7684\u65b9\u6cd5\u6709\uff1aMatching\u5339\u914d\u3001Weighting\u52a0\u6743\u3001DID\u53cc\u91cd\u5dee\u5206"}),"\n",(0,t.jsx)(i.h3,{id:"matching\u5339\u914d",children:"Matching\u5339\u914d"}),"\n",(0,t.jsx)(i.p,{children:"\u5e38\u89c1\u7684\u7b56\u7565\u662fPSM\uff08Propensity Score Matching\uff09\uff0c\u672c\u8d28\u5c31\u662f\u4e3a\u6bcf\u4e2a\u6837\u672c\u627e\u5230\u201c\u53cc\u80de\u80ce\u201d\uff0c\u4ece\u800c\u5b9e\u73b0\u63a7\u5236\u53d8\u91cf\u3002\u5b9e\u8df5\u4e2d\u60e0\u5bf9\u4e8e\u5b9e\u9a8c\u7ec4\uff08\u5bf9\u7167\u7ec4\uff09\u7684unit\uff0c\u6211\u4eec\u5728\u5bf9\u7167\u7ec4\uff08\u5b9e\u9a8c\u7ec4\uff09\u91cc\u9762\u627e\u548c\u4ed6\u76f8\u4f3c\u7684unit\uff0c\u7136\u540e\u5c06\u4e24\u8005\u7684\u5dee\u5f02\u5f53\u505a\u5e72\u9884\u5bf9\u4e8e\u8fd9\u4e2aunit\u7684\u6548\u679c\uff0c\u6c42\u4e00\u4e2a\u5e73\u5747\u5c31\u5f97\u5230\u5e72\u9884\u5bf9\u4e8e\u8fd9\u4e00\u7fa4\u4eba\u7684\u5e73\u5747\u6548\u679cATE\u3002"}),"\n",(0,t.jsx)(i.p,{children:"Matching\u7f3a\u70b9\u5c31\u662f\u4f1a\u6d6a\u8d39\u4e00\u4e9b\u6570\u636e\uff0c\u540c\u4e8b\u5bf9\u4e8e\u9ad8\u7ef4\u7684\u60c5\u51b5\uff0c\u6211\u4eec\u4f1a\u96be\u4ee5\u5224\u65ad\u4e24\u4e2a\u6837\u672c\u662f\u5426\u76f8\u4f3c\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(3177).Z+"",width:"1702",height:"538"})}),"\n",(0,t.jsx)(i.h3,{id:"weighting\u52a0\u6743",children:"Weighting\u52a0\u6743"}),"\n",(0,t.jsxs)(i.p,{children:["\u5e38\u7528\u7684\u7b56\u7565\u662fIPW\uff08Inverse Probability Weighting Estimator\uff09\uff0c\u672c\u8d28\u5c31\u662f\u7ed9\u6bcf\u4e2a\u6837\u672c\u4e00\u4e2a\u201c",(0,t.jsx)(i.strong,{children:"\u503e\u5411\u6027\u5206\u6570"}),"\u201d\uff0c\u901a\u8fc7\u8fd9\u4e2a\u5206\u6570\u6765\u7ed9\u6bcf\u4e2a\u6837\u672c\u8d4b\u6743\uff0c\u4ece\u800c\u5b9e\u73b0\u63a7\u5236\u53d8\u91cf\uff0c\u8ba9\u5b9e\u9a8c\u7ec4\u548c\u5bf9\u7167\u7ec4\u7684\u5dee\u5f02\u53d8\u5c0f\u3002"]}),"\n",(0,t.jsx)(i.p,{children:"\u7406\u8bba\u4e0a\u53ef\u4ee5\u8bc1\u660eIPW\u4f30\u8ba1\u51fa\u6765\u7684\u5dee\u5f02\u662fATE\uff08Average Treatment Effect\uff0c\u5373\u6211\u4eec\u60f3\u8981\u77e5\u9053\u7684treatment\u7684\u6548\u679c\uff09\u7684\u65e0\u504f\u4f30\u8ba1\uff0c\u4f46\u662f\u5f53\u5177\u6709\u67d0\u79cd\u7279\u6027\u7684x\u7684units\u5728\u5b9e\u9a8c\u7ec4\u6216\u8005\u5bf9\u7167\u7ec4\u51fa\u73b0\u7684\u6bd4\u4f8b\u5f88\u5c0f\u7684\u65f6\u5019\uff0c\u4f1a\u5bfc\u81f4\u6211\u4eec\u4f30\u8ba1\u51fa\u6765\u7684\u503e\u5411\u6027\u5f97\u5206\u8d8b\u8fdb\u4e8e0\u6216\u80051\uff0c\u7136\u800c\u503e\u5411\u6027\u5f97\u5206\u662f\u5728units\u7684\u6743\u91cd\u51fd\u6570\u7684\u5206\u6bcd\u4e0a\u9762\u7684\uff0c\u4f7f\u5f97IPW\u867d\u7136\u65e0\u504f\uff08bias=0\uff09\u4f46\u662f\u6ce2\u52a8\u5f88\u5927\uff08variance\u5f88\u5927\uff09\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4eba\u4eec\u901a\u5e38\u4f1a\u5229\u7528\u4f30\u8ba1\u51fa\u6765\u7684\u503e\u5411\u6027\u5f97\u5206\u7684\u5206\u4f4d\u6570\u5c06\u6240\u6709\u6837\u672c\u5206\u5c42\uff08stratification\uff09\uff0c\u7136\u540e\u5c06\u6bcf\u4e00\u5c42\u91cc\u9762\u7684\u6837\u672c\u5f53\u505a\u540c\u8d28\u7684\uff0c\u8ba1\u7b97\u4e00\u4e0b\u6bcf\u4e00\u5c42\u91cc\u9762\u5b9e\u9a8c\u7ec4\u548c\u5bf9\u7167\u7ec4\u4e4b\u95f4\u7684\u5dee\u5f02\uff0c\u7136\u540e\u4ee5\u6bcf\u4e00\u5c42\u7684\u6837\u672c\u91cf\u4e3a\u6743\u91cd\uff0c\u6bcf\u4e00\u5c42\u5dee\u5f02\u7684\u52a0\u6743\u5e73\u5747\uff0c\u5f53\u505a\u6240\u6709\u6837\u672c\u7684\u5e72\u9884\u6548\u679c\uff08bias\u589e\u52a0\uff0cvariance\u4e0b\u964d\uff09\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"IPW\u7684\u51c6\u786e\u6027\u76f4\u63a5\u53d6\u51b3\u4e8e\u503e\u5411\u6027\u5206\u6570\u7684\u6784\u5efa\u3002"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(3487).Z+"",width:"2012",height:"918"})}),"\n",(0,t.jsx)(i.h3,{id:"did\u53cc\u91cd\u5dee\u5206",children:"DID\u53cc\u91cd\u5dee\u5206"}),"\n",(0,t.jsx)(i.p,{children:"\u672c\u8d28\u5c31\u662f\u627e\u5230\u4e00\u4e2a\u6709\u201c\u5e73\u884c\u8d8b\u52bf\u201d\u7684\u6837\u672c\uff0c\u7136\u540e\u5bf9\u6bd4\u4e24\u4e2a\u6837\u672c\u4e4b\u95f4\u7684\u5dee\u5f02\u6765\u786e\u5b9aTreatment Effect\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"\u53cd\u4e8b\u5b9e",children:"\u53cd\u4e8b\u5b9e"}),"\n",(0,t.jsx)(i.p,{children:"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e0d\u5b58\u5728\u63a7\u5236\u7ec4\uff0c\u6211\u4eec\u53ea\u80fd\u901a\u8fc7\u673a\u5668\u5b66\u4e60\u6a21\u578b\u6765\u4ea7\u751f\u53cd\u4e8b\u5b9e\u7684\u6837\u672c\u7ed3\u679c\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u5e38\u89c1\u7684\u65b9\u6cd5\u6709\uff1a",(0,t.jsx)(i.strong,{children:"\u589e\u76ca\u6a21\u578b\uff08Uplift model\uff09"}),"\u3001",(0,t.jsx)(i.strong,{children:"\u56e0\u679c\u68ee\u6797"}),"\u3001\u9a6c\u5c14\u53ef\u592b\u94fe\u3001\u590f\u666e\u91cc\u503c"]}),"\n",(0,t.jsx)(i.h3,{id:"uplift",children:"Uplift"}),"\n",(0,t.jsx)(i.p,{children:"\u7528\u4e8e\u4f30\u7b97ITE\uff08Individual Treatment Effect\uff09\u3002\u4ee5\u5e7f\u544a\u6295\u653e\u4e3a\u4f8b\uff0cuplift model\u7684\u6838\u5fc3\u903b\u8f91\u5c31\u662f\u5148\u7528\u5c0f\u6837\u672c\u505a\u4e00\u4e2a\u5b9e\u9a8c\u7ec4\uff08\u6295\u5e7f\u544a\uff09\u548c\u5bf9\u7167\u7ec4\uff08\u4e0d\u6295\u5e7f\u544a\uff09\uff0c\u7136\u540e\u5206\u522b\u7528\u5b9e\u9a8c\u7ec4\u548c\u5bf9\u7167\u7ec4\u7684\u6570\u636e\u5efa\u6a21\uff0c\u9884\u6d4b\u4ed6\u4eec\u4eba\u4eec\u8d2d\u4e70\u7684\u6982\u7387\uff0c\u5b9e\u9a8c\u7ec4\u4e3a\u6a21\u578bA\uff08\u9884\u6d4b\u770b\u5b8c\u5e7f\u544a\u8d2d\u4e70\u7684\u6982\u7387\uff09\uff0c\u5bf9\u7167\u7ec4\u4e3a\u6a21\u578bB\uff08\u9884\u6d4b\u6ca1\u770b\u5e7f\u544a\u8d2d\u4e70\u7684\u6982\u7387\uff09\u3002\u63a5\u4e0b\u6765\u5bf9\u6bcf\u4e00\u4e2a\u4eba\u90fd\u8dd1\u4e00\u904d\u6a21\u578bA\u548c\u6a21\u578bB\uff0c\u4e24\u8005\u7684\u6982\u7387\u5dee\u5373\u4e3auplift value\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u57fa\u4e8euplift value\u548c\u4e24\u4e2a\u6a21\u578b\u7684\u9884\u6d4b\u7ed3\u679c\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u628a\u4eba\u5206\u4e3a\u4ee5\u4e0b\u56db\u4e2a\u8c61\u9650\uff0c\u5c31\u80fd\u591f\u77e5\u9053\u4ec0\u4e48\u4eba\u5e94\u8be5\u6295\u5e7f\u544a\uff0c\u4ec0\u4e48\u4eba\u4e0d\u9700\u8981\u6295\u5e7f\u544a\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(8236).Z+"",width:"1606",height:"678"})}),"\n",(0,t.jsx)(i.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.zhiweiye.com/data/gftmk74beysel87r835k5mtdfwd9rz",children:"\u5e38\u89c1\u56e0\u679c\u63a8\u65ad\u65b9\u6cd5\u68b3\u7406"})}),"\n"]})]})}function o(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8236:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/uplift_2024-01-31-15-27-31-f97950ed9f17569a53f7f0910f55af7e.png"},8864:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/\u56e0\u679c\u63a8\u65ad\u6982\u8ff0_2024-02-02-18-12-17-6af375b2b803ef04feb8a5ef59ffdd53.png"},3177:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/\u56e0\u679c\u63a8\u65ad\u6982\u8ff0_2024-02-02-18-15-20-d13ec692dd7648d39a2d37b1241fca51.png"},3487:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/\u56e0\u679c\u63a8\u65ad\u6982\u8ff0_2024-02-02-18-16-47-c2c6276b5a79ead3982060bea02db7e4.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>a});var t=n(7294);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);