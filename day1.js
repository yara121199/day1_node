
const mainfile = require('./helpers')


function prepareData (data)
{
    const preparedata = data.reduce((prev,elm,index,array)=>
    {
        const [key,value] = elm.split('=');
        prev[key]=value;
        return prev
    },{})
    return preparedata;
}


function main (cmdArgs)
{
    const [, , operation, ...data] = cmdArgs

    const preparedata = prepareData(data)
    switch (operation)
    {
        case "add":
            mainfile.add(preparedata)
            break;
        case "edit":
            mainfile.edit(preparedata)
            break;
        case "list":
             mainfile.list(data)
             break;
        case "remove":
                mainfile.remove(preparedata)
                break;
        case "check":
                mainfile.check(preparedata)
                break;
        case "uncheck":
                mainfile.uncheck(preparedata)
                break;
    }
}
main(process.argv)