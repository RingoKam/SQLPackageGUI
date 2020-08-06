const axios = require('axios').default;
const htmlTableToJson = require("tabletojson").Tabletojson
const fs = require('fs');
const mdit = require("markdown-it");
const htmlParser = require("node-html-parser");
const url = "https://raw.githubusercontent.com/MicrosoftDocs/sql-docs/live/docs/tools/sqlpackage.md";
const mdFileName = "./doc.md";
const htmlFileName = "./doc.html";
const jsonFileName = "./doc.json";
const configFileName = "./config.json";

const labels = [
    "Extract",
    "Publish",
    "Export",
    "Import",
    "DeployReport",
    "DriftReport",
    "Script"
]

const helperMap = JSON.parse(fs.readFileSync("./FormTypeMap/HelperMap.json"));
const PropertyMap = JSON.parse(fs.readFileSync("./FormTypeMap/PropertyMap.json"));

axios.get(url).then(res => {
    const md = res.data.toString();
    fs.writeFileSync(mdFileName, md);
    const html = new mdit().render(md);
    fs.writeFileSync(htmlFileName, html);
    const dom = htmlParser.parse(html);
    const tables = dom.querySelectorAll("table")
    const json = tables.map(t => htmlTableToJson.convert(t.outerHTML));
    fs.writeFileSync(jsonFileName, JSON.stringify(json));

    // let helpType = new Set();
    // let propertyType = new Set();

    const config = labels.reduce((acc, cur) => {
        const tables = json.splice(0, 2)

        //if props have short form, then its property
        const obj = extractHelpAndProperty(tables)
     
        //uniqueType
        const help = obj.help.filter(v => !!v.Parameter).map(formatHelp);
        // x.map(v => v.type).forEach(t => helpType.add(t));
        const property = obj.property.filter(v => !!v.Property).map(formatProperty);
        // y.map(v => v.type).forEach(t => propertyType.add(t));

        acc[cur] = {
            help,
            property
        };
        
        return acc;
    }, {})

    //write files 
    // fs.writeFileSync("./Props.json", JSON.stringify(Array.from(helpType)));
    // fs.writeFileSync("./propertyType.json", JSON.stringify(Array.from(propertyType)));

    fs.writeFileSync(configFileName, JSON.stringify(config));
})

function extractHelpAndProperty(tables) {
    const [ t1, t2 ] = tables;
    if(t1[0].some(v => Object.keys(v).some(vv => vv == "Short Form"))) {
        return {
            help: t1[0],
            property: t2[0] 
        }
    } else {
        return {
            help: t2[0],
            property: t1[0]
        }
    }
}

function formatProperty(obj) {
    const { Property, Value, Description  } = obj;
    const [ propName, propType ] = Value.split("=");
    const docType = extractPropertyValueToFormType(obj);
    return {
        model: `${Property}${propName}`,
        desc: Description,
        label: propName,
        docType,
        ...PropertyMap[docType]
    };
}

function formatHelp(obj) {
    const { Parameter, Value, Description } = obj;
    const docType = extractHelpValueToFormType(obj);
    try {
        return {
            model: `${Parameter}`,
            desc: Description,
            label: Parameter.replace("/", ""),
            docType,
            ...helperMap[docType]
        }
    } catch (e) {
        console.error(e);
    }
}

function extractPropertyValueToFormType(obj) {
    try {
        const { Value } = obj;
        const [ _ , propType] = Value.split("=");
        const type = propType.replace(/\(|\)/g, '');
        return type;
    } catch (e) {
        console.error(e);
    }
    //call switch here
    
}

function extractHelpValueToFormType(obj) {
    const { Value } = obj;
    const type = Value.replace(/\{|\}/g, '');

    //call switch here

    return type;
}