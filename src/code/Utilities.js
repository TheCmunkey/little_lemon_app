import { Text } from "@chakra-ui/react";

var uniqueKey=0;

export function  uKey(name)
{
    var x;
    uniqueKey++;
    if (typeof name !== 'undefined') x ='"'+name+uniqueKey+'"';
    else
    {
        x ='"'+uniqueKey+'"';
    }
    console.log(x);

	return(x);
}


export function NewlineText(props)
{
    if (typeof props.text === 'undefined')
    {
        return("ERROR: You did not assign a description string to function: NewlineText");
    }

    if(typeof props.className !== 'undefined')
    {
        return(props.text.split('\n').map(str => <Text key={uKey()} className={props.className}>{str}</Text>));
    }
    else
    {
        return(props.text.split('\n').map(str => <Text key={uKey()} >{str}</Text>));
    }

}


export function pgTop()
{
    window.scrollTo(0,0);
}