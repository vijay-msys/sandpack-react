//import { Sandpack } from "@codesandbox/sandpack-react";
import {
  useSandpack,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview 
} from "@codesandbox/sandpack-react";
import {Treebeard} from 'react-treebeard';
import React, { PureComponent } from "react";
import './App.css';
const dataFile = {
  "/src/index.js": {
    code: `import React, { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import "./styles.css";
    
    import App from "./../App";
    
    const root = createRoot(document.getElementById("root"));
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );`,readOnly: true,
  },
  "/src/styles.css": {
    code:`body {
      font-family: sans-serif;
      -webkit-font-smoothing: auto;
      -moz-font-smoothing: auto;
      -moz-osx-font-smoothing: grayscale;
      font-smoothing: auto;
      text-rendering: optimizeLegibility;
      font-smooth: always;
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
    }
    
    h1 {
      font-size: 1.5rem;
    }`
  },
  "/src/App.js": {
    code:`export default function App() {
            return <div><h1>Hello World</h1></div>
          }
    `,
    active: true
  },
  "/App.js": {
    code:``,
    hidden: true
  }
};
// const data = {
//   name: "src",
//   toggled: true,
//   nodeId: "1",
//   root: true,
//   children: [
//     {
//       name: "Water",
//       toggled: true,
//       nodeId: "2",
//       children: [
//         {
//           name: "Phase 1",
//           nodeId: "3",
//           children: [
//             {
//               name: "Clarifier",
//               nodeId: "4",
//               children: [
//                 {
//                   name: "pumpl2",
//                   nodeId: "100",
//                   children: [
//                     {
//                       name: "pumpl3",
//                       nodeId: "101"
//                     }
//                   ],
//                   info: {
//                     test: "test",
//                     number: "123"
//                   }
//                 }
//               ],
//               info: {
//                 test: "test",
//                 number: "124"
//               }
//             },
//             {
//               name: "Pure Water Sump",
//               nodeId: "5"
//             },
//             {
//               name: "Pump",
//               nodeId: "6"
//             }
//           ],
//           info: {
//             test: "test",
//             number: "125"
//           }
//         },
//         {
//           name: "Phase 2",
//           nodeId: "7",
//           children: [
//             {
//               name: "Clarifier",
//               nodeId: "8"
//             },
//             {
//               name: "Pure Water Sump",
//               nodeId: "9"
//             },
//             {
//               name: "Pump",
//               nodeId: "10"
//             }
//           ]
//         }
//       ],
//       measurement: [
//         {
//           name: "pressure",
//           unit: "Pa"
//         },
//         {
//           name: "level",
//           unit: "cfs"
//         }
//       ]
//     },
//     {
//       name: "ESR",
//       nodeId: "11",
//       measurement: [
//         {
//           name: "pressure",
//           unit: "Pa"
//         },
//         {
//           name: "level",
//           unit: "cfs"
//         }
//       ],
//       toggled: false,
//       children: [
//         {
//           name: "node12",
//           nodeId: "12"
//         },
//         {
//           name: "node13",
//           nodeId: "13"
//         }
//       ]
//     },
//     {
//       name: "Raw Water Pumping",
//       nodeId: "14",
//       toggled: true,
//       children: [
//         {
//           name: "Phase 1",
//           nodeId: "15",
//           toggled: true,
//           children: [
//             {
//               name: "node16",
//               nodeId: "16"
//             },
//             {
//               name: "node17",
//               nodeId: "17"
//             },
//             {
//               name: "node18",
//               nodeId: "18"
//             },
//             {
//               name: "node19",
//               nodeId: "19"
//             }
//           ]
//         },
//         {
//           name: "Phase 2",
//           nodeId: "20",
//           toggled: false,
//           children: [
//             {
//               name: "node21",
//               nodeId: "21"
//             },
//             {
//               name: "node22",
//               nodeId: "22"
//             },
//             {
//               name: "node23",
//               nodeId: "23"
//             }
//           ]
//         },
//         {
//           name: "Phase 3",
//           nodeId: "24",
//           toggled: false,
//           children: [
//             {
//               name: "node24",
//               nodeId: "25"
//             },
//             {
//               name: "node25",
//               nodeId: "26"
//             },
//             {
//               name: "node26",
//               nodeId: "27"
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };
const style = {
  tree: {
      base: {
          listStyle: 'none',
          backgroundColor: '#FFFFFF',
          margin: 0,
          padding: 0,
           color: 'black',
          //fontFamily: 'lucida grande ,tahoma,verdana,arial,sans-serif',
          //fontSize: '14px',
          //height: '100%'
      },
      node: {
          base: {
              position: 'relative'
          },
          link: {
              cursor: 'pointer',
              position: 'relative',
              padding: '0px 5px',
              display: 'block'
          },
          activeLink: {
              // background: '#31363F',
              color: 'orange'
          },
          toggle: {
              base: {
                  position: 'relative',
                  display: 'inline-block',
                  verticalAlign: 'top',
                  marginLeft: '-5px',
                  height: '24px',
                  width: '24px'
              },
              wrapper: {
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  margin: '-7px 0 0 -7px',
                  height: '14px'
              },
              height: 14,
              width: 14,
              arrow: {
                  fill: '#9DA5AB',
                  strokeWidth: 0
              }
          },
          header: {
              base: {
                  display: 'inline-block',
                  verticalAlign: 'top',
                  // color: '#9DA5AB'
              },
              connector: {
                  width: '2px',
                  height: '12px',
                  borderLeft: 'solid 2px black',
                  borderBottom: 'solid 2px black',
                  position: 'absolute',
                  top: '0px',
                  left: '-21px'
              },
              title: {
                  lineHeight: '24px',
                  verticalAlign: 'middle'
              }
          },
          subtree: {
              listStyle: 'none',
              paddingLeft: '19px'
          },
          loading: {
              color: '#E2C089'
          }
      }
  }
}
// const clearActiveStyle = (tree) => {
//   if (tree.hasOwnProperty('nodeId')) {
//       if (tree.hasOwnProperty("active")) {
//           delete tree["active"]
//       } else {
//           if (tree["children"]) {
//               clearActiveStyle(tree["children"])
//           }
//       }
//   } else if (tree instanceof Array) {
//       for (let i = 0; i < tree.length; i++) {
//           clearActiveStyle(tree[i])
//       }
//   }
// }


const SimpleTree = ({node,data, onUpdate, onClick, onFolder}) => {
  const { sandpack } = useSandpack();
  return <TreeExample node={node} data={data} onUpdate={onUpdate} deleteFile={sandpack.deleteFile} openFile={sandpack.openFile} onClick={onClick} onFolder={onFolder}/>;
};

class TreeExample extends PureComponent {
  constructor(props){
      super(props);
      this.state = { cursor:props.node, enableButtons: true,openPopup : false};
      this.onToggle = this.onToggle.bind(this);
  }
  
  onToggle(node, toggled) {
    const { cursor, data } = this.state;
    //clearActiveStyle(data);
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    if(!node.children){
      this.props.openFile(node.fullPath);
    }
    this.setState(() => ({ cursor: node, enableButtons:true,  data: Object.assign({}, data)}));
    this.props.onUpdate(node, Object.assign({}, data));
  }

  onChange = (evt) =>{
    this.setState({inputText:evt.target.value});
  }

  callBack = (path) =>{
    this.props.openFile(path);
  }

  onDeleteCallBack = (path,openPath) =>{
    this.props.deleteFile(path);
    this.callBack(openPath);
  }

  render(){
      return (
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          height: "var(--sp-layout-height)",
          overflow:"auto"
        }}
      >
        <div>
          <input disabled={!this.state.enableButtons} onChange={this.onChange} value={this.state.inputText}/>
          <button disabled={!this.state.enableButtons } onClick={()=>this.props.onClick(true, this.state.inputText, this.callBack)} className="btn">Add</button>
          <button disabled={!this.state.enableButtons} onClick={()=>this.props.onFolder( this.state.inputText, this.callBack)} className="btn">Folder</button>
          <button disabled={!this.state.enableButtons} onClick={()=>this.props.onClick(false, this.state.inputText, this.onDeleteCallBack)} className="btn">Delete</button>
        </div>
          <Treebeard
            data={this.props.data}
            onToggle={this.onToggle}
            style={style}
          />
          
          </div>
      );
  }
}

class CustomSandpack extends React.Component {
  constructor(props){
    super(props);
    this.nodeId = 0;
    let dataFiles = this.reStructure(dataFile);
    let data = this.getTreeStructure(dataFiles);
    console.log("tree structure   ", data);
    this.state = {file: data, node: data, source: dataFiles};
  }

  reStructure = (file) =>{
    console.log("file   ",file);
    let files = file;
    for(var param in files){
      files = this.setObjectValues(files, param.split("/").slice(1));
    }
    return files;
  }

  setObjectValues = (source, params)=>{
    params.forEach((element, index) => {
      if(index < params.length-1){
        this.nodeId++;
        let attribute = "/"+params.slice(0,index+1).join("/");
        source[attribute] = {name: element, children:[], nodeId: this.nodeId, fullPath:attribute}
      }
    });
    return source;
  }

  onUpdate = (node, data) =>{
    this.setState({node, data});    
  }
  
  getTreeStructure = (file) =>{
    this.currentPath = "";
    let data={name:"project", toggled: true, nodeId: this.nodeId, children: [], fullPath:""};
    for(var name in file) {
        var value = file[name];
        if(!value.hidden){
          let obj = name.split("/").slice(1);
          data.children = this.setValue(data.children, value, obj, name, 1);
        }
    }
      return data;
    }
  
    setValue = (child, value, obj, fullPath, index) =>{
      if(obj.length > 1){
          let val = child.find((element)=> element.name === obj[0]);
          if(!val || val === undefined){ 
            this.nodeId++; 
            val = {name: obj[0], children:[], nodeId: this.nodeId, fullPath:fullPath.split("/").splice(0,index+1).join("/")};
            child.push(val);
          }
          val.children = this.setValue(val.children, value, obj.slice(1), fullPath, index+1);
        }else{
          this.nodeId++; 
          if(value.hasOwnProperty("code")){
            child.push({name:obj[0], code: value, nodeId: this.nodeId, fullPath: fullPath});
          }else{
            !child.some((item)=> item.name === obj[0]) && child.push({name:obj[0], children:[], nodeId: this.nodeId, fullPath: fullPath});
          }
      }
        return child;
    }

     onFolder = (text, callBack) =>{
      let source = this.state.source;
      let path = this.state.node.fullPath+"/"+text;
      source[path]="";
      let file = this.getTreeStructure(source);  
      this.setState({source, file});
     }

     onClick = (type, text, callBack) =>{
      let source = this.state.source;
      let path = this.state.node.fullPath+"/"+text;
      if(type){
        source[path]={code:'export default function Test() {\n  return <h1>Hello Test</h1> \n }'};
      }else{
        //if(source[this.state.node.fullPath]){
        console.log("delete   "+this.state.node.fullPath, source);
        for(var name in source){
          if(name.indexOf(this.state.node.fullPath) > -1){
            delete source[name];
          }
        }  
        console.log("after  delete   ", source);

        //}
      }
      let file = this.getTreeStructure(source);  
      this.setState({source, file}, type?callBack(path):callBack(this.state.node.fullPath,"/App.js"));
     }
    
  render(){
    console.log("tree data  ",this.state.file);
  return (
    <div className="App">
      <SandpackProvider
    files={this.state.source}
    customSetup={{
      entry: "/src/index.js"
    }}
    template={"react"}
    >
    <SandpackLayout> 
       <SimpleTree data={this.state.file} node={this.state.node} onUpdate={this.onUpdate} onClick={this.onClick} onFolder={this.onFolder}/>
       <SandpackCodeEditor closableTabs={true} /> 
       <SandpackPreview showOpenInCodeSandbox={false} showNavigator={true}/>
    </SandpackLayout> 
   </SandpackProvider>
   
    </div>
  );
}
}

export default function App() {
  return (
    <>
      <div>
        <CustomSandpack />
      </div>
    </>
  );
}
