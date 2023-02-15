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
	var text = props.text;
	var newText = text.split('\n').map(str => <Text key={uKey()} className={props.className}>{str}</Text>);
	return newText;
}
export function pgTop()
{
    window.scrollTo(0,0);
}