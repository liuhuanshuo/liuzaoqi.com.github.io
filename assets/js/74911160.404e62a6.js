"use strict";(self.webpackChunkliuzaoqi_com=self.webpackChunkliuzaoqi_com||[]).push([[7071],{4730:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=s(5893),i=s(1151);const a={id:"PSM",last_update:{author:"liuzaoqi"}},l="\u503e\u5411\u5f97\u5206\u5339\u914d\uff08PSM\uff09",c={id:"algorithm/causal-inference/PSM",title:"\u503e\u5411\u5f97\u5206\u5339\u914d\uff08PSM\uff09",description:"PSM\u7684\u6838\u5fc3\u601d\u60f3\u662f\u4ece\u672a\u53d7\u5e72\u9884\u7684\u7528\u6237\u7fa4\u4f53\u4e2d\uff0c\u627e\u5230\u548c\u5e72\u9884\u5bf9\u8c61\u4e00\u6a21\u4e00\u6837\u7684\u7528\u6237\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u628a\u56e0\u679c\u6548\u5e94\u5f52\u56e0\u5230\u5e72\u9884\u4e0a\u3002",source:"@site/docs/algorithm/causal-inference/psm.md",sourceDirName:"algorithm/causal-inference",slug:"/algorithm/causal-inference/PSM",permalink:"/docs/algorithm/causal-inference/PSM",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"liuzaoqi",lastUpdatedAt:1708511142,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{id:"PSM",last_update:{author:"liuzaoqi"}},sidebar:"causal_inference",previous:{title:"\u5efa\u6a21\u65b9\u6cd5\u6c47\u603b",permalink:"/docs/algorithm/causal-inference/causal-inference-method-summary"},next:{title:"\u589e\u76ca\u6a21\u578b\uff08Uplift\uff09",permalink:"/docs/algorithm/causal-inference/uplift-model"}},r={},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u6dd8\u5b9d - 3D\u6837\u677f\u95f4\u4ef7\u503c\u5206\u6790",id:"\u6dd8\u5b9d---3d\u6837\u677f\u95f4\u4ef7\u503c\u5206\u6790",level:3},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function o(e){const n={a:"a",annotation:"annotation",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u503e\u5411\u5f97\u5206\u5339\u914dpsm",children:"\u503e\u5411\u5f97\u5206\u5339\u914d\uff08PSM\uff09"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["PSM\u7684\u6838\u5fc3\u601d\u60f3\u662f",(0,t.jsx)(n.strong,{children:"\u4ece\u672a\u53d7\u5e72\u9884\u7684\u7528\u6237\u7fa4\u4f53\u4e2d\uff0c\u627e\u5230\u548c\u5e72\u9884\u5bf9\u8c61\u4e00\u6a21\u4e00\u6837\u7684\u7528\u6237\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u628a\u56e0\u679c\u6548\u5e94\u5f52\u56e0\u5230\u5e72\u9884\u4e0a"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u503e\u5411\u6027\u5f97\u5206\u5339\u914d\uff08PSM\uff0cPropensity Score Method\uff09"}),"\uff1a\u4e3b\u8981\u662f\u57fa\u4e8e\u7528\u6237\u7279\u5f81\u6765\u9884\u6d4b\u7528\u6237\u88ab\u6d3b\u52a8\u5e72\u9884\u7684\u6982\u7387\u4f5c\u4e3a\u503e\u5411\u5f97\u5206\uff0c\u9009\u53d6\u548c\u5b9e\u9a8c\u7ec4\u7528\u6237\u503e\u5411\u5f97\u5206\u6700\u63a5\u8fd1\u7684\u7528\u6237\u4f5c\u4e3a\u5bf9\u7167\u7ec4\uff1b\u6240\u4ee5",(0,t.jsx)(n.strong,{children:"\u503e\u5411\u6027\u5f97\u5206\u662f\u4e00\u4e2a\u7528\u6237\u5c5e\u4e8e\u5b9e\u9a8c\u7ec4\u7684\u503e\u5411\u6027"})]}),"\n",(0,t.jsx)(n.p,{children:"\u7406\u8bba\u4e0a\uff0c\u5982\u679c\u6211\u4eec\u5bf9\u6bcf\u4e00\u4e2a\u5b9e\u9a8c\u7ec4\u7528\u6237\u90fd\u5728\u5bf9\u7167\u7ec4\u91cc\u5339\u914d\u4e00\u4e2a\u5f97\u5206\u76f8\u7b49\u7684\u7528\u6237\uff0c\u5c31\u80fd\u5f97\u5230\u540c\u8d28\u7684\u5b9e\u9a8c\u7ec4\u548c\u5bf9\u7167\u7ec4\uff0c\u8fdb\u800c\u6765\u505a\u7ec4\u95f4\u6bd4\u8f83\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u800c\uff0c\u6bcf\u4e2a\u6837\u672c\u6709\u591a\u4e2a\u7279\u5f81\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u7528\u6237\u6765\u8bf4\u6709\uff1a\u753b\u50cf\u7279\u5f81\u3001\u884c\u4e3a\u7279\u5f81\u7b49\uff0c\u5982\u679c\u6bcf\u4e2a\u7279\u5f81\u90fd\u8fdb\u884c\u5339\u914d\uff0c\u5219\u7ef4\u5ea6\u4f1a\u5f88\u591a\uff0c\u5339\u914d\u4e5f\u4f1a\u5f88\u56f0\u96be\u3002\u6240\u4ee5\u53ef\u5f15\u8fdb\u503e\u5411\u5f97\u5206",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"P"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"x"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"P(x)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"\u6765\u4ee3\u66ff\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u7528\u4e00\u7ef4\u53d8\u91cf\u8fdb\u884c\u5339\u914d\uff0c\u4e3a\u5b9e\u9a8c\u7ec4\u627e\u5230\u5339\u914d\u7684\u5bf9\u7167\u7ec4\uff0c\u6d88\u9664\u6df7\u6742\u56e0\u5b50\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(1762).Z+"",width:"954",height:"756"})}),"\n",(0,t.jsx)(n.h3,{id:""}),"\n",(0,t.jsx)(n.h3,{id:"\u6b65\u9aa4",children:"\u6b65\u9aa4"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(9644).Z+"",width:"692",height:"390"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6848\u4f8b",children:"\u6848\u4f8b"}),"\n",(0,t.jsx)(n.h3,{id:"\u6dd8\u5b9d---3d\u6837\u677f\u95f4\u4ef7\u503c\u5206\u6790",children:"\u6dd8\u5b9d - 3D\u6837\u677f\u95f4\u4ef7\u503c\u5206\u6790"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u4ece\u5546\u8be6\u9875\uff0c\u9996\u731c\uff0c\u4e3b\u641c\u4e91\u5361\u7247\u7b49\u6e20\u9053\u8fdb\u5165\u6837\u677f\u95f4\uff0c\u5e76\u5728\u6837\u677f\u95f4\u5185\u5b9e\u73b0\u591a\u70b9\u6f2b\u6e38\uff0c\u6362\u98ce\u683c\uff0c\u642d\u914d\u5bb6\u5177\uff0c\u653e\u6211\u5bb6\u7b49\u529f\u80fd\uff0c\u7ed9\u7528\u6237\u66f4\u573a\u666f\u5316\uff0c\u79c1\u4eba\u5316\u7684\u4f53\u9a8c\u3002\u9009\u53d6\u8fdb\u51653D\u6837\u677f\u95f4\u7684\u7528\u6237\uff0c\u5229\u7528\u503e\u5411\u6027\u5f97\u5206\u5339\u914d\u6cd5\uff08PSM\uff09\u83b7\u53d6\u5bf9\u7167\u7ec4\u7684\u540c\u8d28\u7528\u6237\uff0c\u5206\u6790\u7528\u6237\u5728\u5404\u4e2a\u4ef7\u503c\u6307\u6807\u7684\u5dee\u5f02\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u752820\u4f59\u79cd\u7528\u6237\u57fa\u672c\u7279\u5f81\uff0c\u884c\u4e3a\u7279\u5f81\u548c\u5bb6\u5c45\u504f\u597d\u7279\u5f81\u4f5c\u4e3a\u6df7\u6742\u56e0\u7d20\uff0c\u5e94\u7528\u4e8e\u5339\u914d\u6a21\u578b\uff1b"}),"\n",(0,t.jsx)(n.p,{children:"\u5339\u914d\u540e\u6570\u636e\u8868\u660e\uff0c\u5b9e\u9a8c\u7ec4\u7528\u6237\u7684\u52a0\u8d2d\u7387+24.85%\uff0c\u624b\u6dd8\u505c\u7559\u65f6\u957f+27.68%\uff0c\u5ba2\u5355\u4ef7+29.53%\uff0c\u5e26\u8d27\u5e26\u5bbd+5.98%\uff0c\u7528\u6237\u51b3\u7b56\u5468\u671f-5.75%"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8614).Z+"",width:"1080",height:"381"})}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7PSM\u7684\u5206\u6790\u7ed3\u8bba\uff0c\u6211\u4eec\u5b9a\u91cf\u7684\u9a8c\u8bc1\u4e863D\u6837\u677f\u95f4\u5bf9\u624b\u6dd8\u5404\u9879\u6307\u6807\u7684\u6b63\u5411\u4ef7\u503c\uff0c\u8fdb\u4e00\u6b65\u7684\uff0c\u6211\u4eec\u60f3\u8981\u6316\u6398\u80cc\u540e\u662f\u4ec0\u4e48\u56e0\u7d20\u4f7f\u5f973D\u6837\u677f\u95f4\u4ea7\u751f\u4e86\u8fd9\u4e9b\u4ef7\u503c\uff1a"}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://blog.csdn.net/baidu_26137595/article/details/131291750",children:"\u56e0\u679c\u63a8\u65ad-PSM\u7684\u539f\u7406\u548c\u5e94\u7528"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://blog.itpub.net/28285180/viewspace-2923784/",children:"\u817e\u8baf\u6e38\u620f\u7684 PSM \u5e94\u7528"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1762:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/psm_2024-02-02-17-24-51-59a982ff1f060094d4df428354a22463.png"},8614:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/psm_2024-02-02-17-37-04-fb8e05c4cdb5702497911c8441ee4515.png"},9644:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/psm_2024-02-19-17-57-35-262b8db8043970754cacf8a3790cfc10.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var t=s(7294);const i={},a=t.createContext(i);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);