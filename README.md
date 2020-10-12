```javascript
import { makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles({
    root:{
        border:'1rem solid blue',
        backgroundColor:'powderblue',
        padding:'1rem',
        margin:'1rem',
        '& h1':{
            textDecoration:'underline'
        }
    }
});
export default ()=>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Component1</h1>
            Lorem ipsum.
        </div>
    );
}
```
위의 코드는 아래와 같이 된다. 
```html
<style data-jss="" data-meta="makeStyles">
.makeStyles-root-1 {
  border: 1rem solid blue;
  margin: 1rem;
  padding: 1rem;
  background-color: powderblue;
}
.makeStyles-root-1 h1 {
  text-decoration: underline;
}
</style>
<div class="makeStyles-root-1"><h1>Component1</h1>Lorem ipsum.</div>
```

1. 다른 컴포넌트에서 root라는 선택자를 사용하면 중복되지 않는 선택자가 자동으로 만들어진다. 
1. Hook api 에서는 Nesting selectors가 지원된다. 