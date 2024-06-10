"use strict";(self.webpackChunkanqi_j=self.webpackChunkanqi_j||[]).push([[7918],{1310:(e,n,t)=>{t.d(n,{Z:()=>g});t(7294);var s=t(512),a=t(5281),i=t(2802),l=t(8596),o=t(3692),r=t(5999),c=t(4996),d=t(5893);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.ZP)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.Z,{"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:n,href:t,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,d.jsx)(o.Z,{className:a,href:t,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:n})}):(0,d.jsx)("span",{className:a,children:n})}function b(e){let{children:n,active:t,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function g(){const e=(0,i.s1)(),n=(0,l.Ns)();return e?(0,d.jsx)("nav",{className:(0,s.Z)(a.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,d.jsx)(h,{}),e.map(((n,t)=>{const s=t===e.length-1,a="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,d.jsx)(b,{active:s,index:t,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:s,children:n.label})},t)}))]})}):null}},968:(e,n,t)=>{t.r(n),t.d(n,{default:()=>R});var s=t(7294),a=t(8264),i=t(902),l=t(5893);const o=s.createContext(null);function r(e){let{children:n,content:t}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,l.jsx)(o.Provider,{value:a,children:n})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:n,assets:t}=c();return(0,l.jsx)(a.d,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var u=t(512),m=t(7524),h=t(49);function v(){const{metadata:e}=c();return(0,l.jsx)(h.Z,{previous:e.previous,next:e.next})}var x=t(3120),b=t(4364),g=t(5281),p=t(6233),f=t(7265);function j(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:a}=e,i=a.length>0,o=!!(n||t||s);return i||o?(0,l.jsxs)("footer",{className:(0,u.Z)(g.k.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.Z)("row margin-top--sm",g.k.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(p.Z,{tags:a})})}),o&&(0,l.jsx)(f.Z,{className:(0,u.Z)("margin-top--sm",g.k.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var L=t(6043),C=t(3743),N=t(5999);const _={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function Z(e){let{collapsed:n,...t}=e;return(0,l.jsx)("button",{type:"button",...t,className:(0,u.Z)("clean-btn",_.tocCollapsibleButton,!n&&_.tocCollapsibleButtonExpanded,t.className),children:(0,l.jsx)(N.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const k={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function T(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,L.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(k.tocCollapsible,!i&&k.tocCollapsibleExpanded,t),children:[(0,l.jsx)(Z,{collapsed:i,onClick:o}),(0,l.jsx)(L.z,{lazy:!0,className:k.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(C.Z,{toc:n,minHeadingLevel:s,maxHeadingLevel:a})})]})}const H={tocMobile:"tocMobile_ITEo"};function M(){const{toc:e,frontMatter:n}=c();return(0,l.jsx)(T,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.Z)(g.k.docs.docTocMobile,H.tocMobile)})}var I=t(9407);function E(){const{toc:e,frontMatter:n}=c();return(0,l.jsx)(I.Z,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:g.k.docs.docTocDesktop})}var w=t(2503),y=t(4774);function A(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(g.k.docs.docMarkdown,"markdown"),children:[t&&(0,l.jsx)("header",{children:(0,l.jsx)(w.Z,{as:"h1",children:t})}),(0,l.jsx)(y.Z,{children:n})]})}var B=t(1310),O=t(2212);const V={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function P(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&n.length>0;return{hidden:s,mobile:a?(0,l.jsx)(M,{}):void 0,desktop:!a||"desktop"!==t&&"ssr"!==t?void 0:(0,l.jsx)(E,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!t.hidden&&V.docItemCol),children:[s&&(0,l.jsx)(O.Z,{}),(0,l.jsx)(x.Z,{}),(0,l.jsxs)("div",{className:V.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(B.Z,{}),(0,l.jsx)(b.Z,{}),t.mobile,(0,l.jsx)(A,{children:n}),(0,l.jsx)(j,{})]}),(0,l.jsx)(v,{})]})]}),t.desktop&&(0,l.jsx)("div",{className:"col col--3",children:t.desktop})]})}function R(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.FG,{className:n,children:[(0,l.jsx)(d,{}),(0,l.jsx)(P,{children:(0,l.jsx)(t,{})})]})})}},49:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var s=t(5999),a=t(2244),i=t(5893);function l(e){const{previous:n,next:t}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,i.jsx)(a.Z,{...n,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,i.jsx)(a.Z,{...t,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,n,t)=>{t.d(n,{Z:()=>r});t(7294);var s=t(512),a=t(5999),i=t(5281),l=t(4477),o=t(5893);function r(e){let{className:n}=e;const t=(0,l.E)();return t.badge?(0,o.jsx)("span",{className:(0,s.Z)(n,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(a.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},3120:(e,n,t)=>{t.d(n,{Z:()=>b});t(7294);var s=t(512),a=t(2263),i=t(3692),l=t(5999),o=t(143),r=t(5281),c=t(373),d=t(4477),u=t(5893);const m={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const n=m[e.versionMetadata.banner];return(0,u.jsx)(n,{...e})}function v(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.Z,{to:t,onClick:s,children:(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:i}}=(0,a.Z)(),{pluginId:l}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,c.J)(l),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,o.Jo)(l),b=m??(g=x).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.Z)(n,r.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:t})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:x.label,to:b.path,onClick:()=>d(x.name)})})]})}function b(e){let{className:n}=e;const t=(0,d.E)();return t.banner?(0,u.jsx)(x,{className:n,versionMetadata:t}):null}},2244:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var s=t(512),a=t(3692),i=t(5893);function l(e){const{permalink:n,title:t,subLabel:l,isNext:o}=e;return(0,i.jsxs)(a.Z,{className:(0,s.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}},3743:(e,n,t)=>{t.d(n,{Z:()=>x});var s=t(7294),a=t(6668);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>o(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(3692),m=t(5893);function h(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,a.L)(),b=c??x.tableOfContents.minHeadingLevel,g=u??x.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:b,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:b,maxHeadingLevel:g}}),[o,r,b,g])),(0,m.jsx)(v,{toc:p,className:t,linkClassName:o,...h})}},9407:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var s=t(512),a=t(3743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(5893);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,s.Z)(i.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(a.Z,{...t,linkClassName:o,linkActiveClassName:r})})}},6233:(e,n,t)=>{t.d(n,{Z:()=>d});t(7294);var s=t(512),a=t(5999),i=t(3692);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var o=t(5893);function r(e){let{permalink:n,label:t,count:a,description:r}=e;return(0,o.jsxs)(i.Z,{href:n,title:r,className:(0,s.Z)(l.tag,a?l.tagWithCount:l.tagRegular),children:[t,a&&(0,o.jsx)("span",{children:a})]})}const c={tags:"tags_jXut",tag:"tag_QGVx"};function d(e){let{tags:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.Z)(c.tags,"padding--none","margin-left--sm"),children:n.map((e=>(0,o.jsx)("li",{className:c.tag,children:(0,o.jsx)(r,{...e})},e.permalink)))})]})}},2212:(e,n,t)=>{t.d(n,{Z:()=>h});t(7294);var s=t(512),a=t(5999),i=t(5742),l=t(5893);function o(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5281),u=t(9047);function m(e){let{className:n}=e;return(0,l.jsx)(u.Z,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,s.Z)(n,d.k.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}}}]);