(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":4591256},{"id":"id-2","name":"Hermione Kline","number":4438912},{"id":"id-3","name":"Eden Clements","number":6451779},{"id":"id-4","name":"Annie Copeland","number":2279126}]')},,function(t,e,n){t.exports={form:"form_form__3ndpb"}},function(t,e,n){t.exports={filter:"filter_filter__31lH9"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(7),r=n.n(c),s=(n(18),n(13)),i=n(2),l=n(3),u=n(5),d=n(4),h=n(25),b=(n(19),n(0));function m(t){var e=t.contacts,n=t.onDeleteContacts;return Object(b.jsx)("ul",{className:"contacts",children:e.map((function(t){var e=t.id,a=t.name,o=t.number;return Object(b.jsxs)("li",{children:[a,":",o,Object(b.jsx)("button",{type:"button",className:"TodoList__btn",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var j=n(8),p=n(9),f=n(10),O=n.n(f),v=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(p.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.name,t.state.number),t.setState({name:"",number:""}),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(b.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsxs)("label",{children:["Name",Object(b.jsx)("input",{type:"text",value:e,name:"name",onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("label",{children:["Number",Object(b.jsx)("input",{type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(11),g=n.n(C);function x(t){var e=t.value,n=t.onHandleFilter;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsxs)("label",{className:g.a.filter,children:["Find contacts by name",Object(b.jsx)("input",{type:"text",value:e,onChange:n})]})]})}n(21);var y=function(t){var e=t.children;return Object(b.jsx)("div",{className:"Container",children:e})},k=function(t){var e=t.children;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(y,{children:e})})},w=n(12),S=(n(22),document.querySelector("#modal-root")),A=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBAckdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(w.createPortal)(Object(b.jsx)("div",{className:"Modal__backdrop",onClick:this.handleBAckdropClick,children:Object(b.jsxs)("div",{className:"Modal__content",children:[this.props.children,Object(b.jsx)("button",{type:"button",onClick:this.props.onClose,children:"Close"})]})}),S)}}]),n}(a.Component),M=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:j,filter:"",showModal:!1},t.addContacts=function(e,n){var a=t.state.contacts,o={id:Object(h.a)(),name:e,number:n};a.some((function(t){return t.name.toLowerCase()===o.name.toLowerCase()}))?alert("".concat(e," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[o].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("App ComponentDidMount");var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({getCont:e})}},{key:"componentDidUpdate",value:function(t,e){console.log("ComponentDidUpdate APP"),this.state.contacts!==e.contacts&&(console.log("update"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){console.log("App render");var t=this.state,e=t.filter,n=t.showModal,a=this.getFilteredContacts();return Object(b.jsxs)(k,{children:[Object(b.jsx)("button",{type:"button",onClick:this.toggleModal,children:"Open Phonebook"}),n&&Object(b.jsx)(A,{onClose:this.toggleModal,children:Object(b.jsx)(v,{onSubmit:this.addContacts})}),Object(b.jsx)(x,{value:e,onHandleFilter:this.changeFilter}),Object(b.jsx)(m,{contacts:a,onDeleteContacts:this.deleteContact})]})}}]),n}(a.Component);M.defaultProps={};var D=M;r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.3648019f.chunk.js.map